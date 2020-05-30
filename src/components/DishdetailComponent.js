import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap";

function RenderDish({ dish }) {
	if (dish != null) {
		return (
			<Card>
				<CardImg top src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	} else return <div></div>;
}

function RenderComments({ comments }) {
	if (comments != null) {
		const options = { month: "long", day: "numeric", year: "numeric" };
		return (
			<div>
				<h4>Comments</h4>
				<ul className="list-unstyled">
					{comments.map((comment) => {
						let date = new Date(comment.date);
						return (
							<li key={comment.id}>
								<p>{comment.comment}</p>
								<p>
									-- {comment.author},{" "}
									{date.toLocaleDateString("en-IN", options)}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else return <div></div>;
}

const Dishdetail = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<RenderDish dish={props.dish} />
				</div>
				<div className="col-12 col-md-5 m-1">
					{props.dish && <RenderComments comments={props.dish.comments} />}
				</div>
			</div>
		</div>
	);
};
export default Dishdetail;

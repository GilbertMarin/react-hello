import React from "react";
import PropTypes from "prop-types";

//create your first component
export const Cards = props => {
	return (
		<div className="card col">
			<img className="card-img-top" src="" alt="Card image cap" />
			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};

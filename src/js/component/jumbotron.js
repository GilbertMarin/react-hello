import React from "react";
import PropTypes from "prop-types";

//create your first component
export const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-3">{props.title} </h1>
			<p className="lead">{props.lead}</p>
			<hr className="my-2" />
			<p>{props.description}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href={props.buttonUrl}
					role="button">
					{props.buttonLabel}
				</a>
			</p>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	lead: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};

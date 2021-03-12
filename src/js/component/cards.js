import React from "react";
import Proptypes from "prop-types";

//create your first component
export function Cards() {
	return ( 
		<div className="card col">
			<img
				className="card-img-top"
				src="/images/pathToYourImage.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h4 className="card-title">Card title</h4>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the car content.
				</p>
				<a href="#!" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

import React from "react";

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-3">A Warm Welcome </h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-2" />
			<p>
				It uses utility classNamees for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#!" role="button">
					Call to Action
				</a>
			</p>
		</div>
	);
}

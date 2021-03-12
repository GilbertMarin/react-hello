import React from "react";
import { Cards } from "./cards";

export const CardDeck = () => {
	return (
		<div className="row row-cols-1 row-cols-md-4">
			<Cards
				title="Card title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
			<Cards
				title="Card title"
				description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
			<Cards
				title="Card title"
				description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
			<Cards
				title="Card title"
				description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
		</div>
	);
};

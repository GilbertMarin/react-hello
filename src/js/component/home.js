import React from "react";

//Importar las funciones desde las demás ubicaciones

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { CardDeck } from "./cardDeck";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron
				title="A warm Welcome"
				lead="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information"
				description="It uses utility classes for typography and spacing to space content out within the larger container"
				buttonUrl="#!"
				buttonLabel="Call to Action"
			/>

			<CardDeck />
			<Footer />
		</div>
	);
}

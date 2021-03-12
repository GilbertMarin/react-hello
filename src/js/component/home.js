import React from "react";

//Importar las funciones desde las demás ubicaciones

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="row">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}

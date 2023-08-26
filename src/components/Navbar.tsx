"use client"
import { getPlanetsCollection } from "firebase-config.js";
import { useEffect, useState } from "react"

function Navbar() {
	const [planetsList, setPlanetsList] = useState([]);

	useEffect(() => {
		const fetchPlanets = async () => {
			try {
				const planets = await getPlanetsCollection()
				setPlanetsList(planets);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPlanets();
	}, []);
	
	return (
		<nav>
			<ul className="flex space-x-4">
				{planetsList.map((planet) => (
					<li key={planet.name}>
						<a href={`/${planet.name.split(" ").join("")}`}>
							{planet.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;

"use client"
import { getDataFromField, getPlanetsCollection } from "firebase-config.js"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"

export default function Home() {
	const [planetsList, setPlanetsList] = useState([])

	useEffect(() => {
		const fetchPlanets = async () => {
			try {
				const planets = await getPlanetsCollection()
				setPlanetsList(planets)
			} catch (error) {
				console.log(error)
			}
		}

		fetchPlanets()

	}, [])

  	return (
		<div>
			<h1>Planetfinder</h1>
			{planetsList.map((planet, index) => (
				<div key={index}>
					{planet.name}
				</div>
			))}
			{/* <Navbar /> */}
		</div>
	)
}

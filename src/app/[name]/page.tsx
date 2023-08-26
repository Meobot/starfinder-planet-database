"use client"
import Navbar from "../../components/Navbar"
import PlanetCard from "../../components/PlanetCard"

function page({ params: { name } }) {

  return (
	<div>
		<Navbar />
		<PlanetCard name={name} />
	</div>
  )
}

export default page
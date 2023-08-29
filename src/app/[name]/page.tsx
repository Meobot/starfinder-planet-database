"use client"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import PlanetCard from "../../components/PlanetCard"

function page({ params: { name } }) {

  return (
	<div>
		<Header />
		<Navbar />
		<PlanetCard name={name} />
	</div>
  )
}

export default page
"use client"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import PlanetCard from "../../components/PlanetCard"

function page({ params: { name } }) {

  return (
	<div className="px-6 pt-4">
		<Header />
		<Navbar />
		<PlanetCard name={name} />
	</div>
  )
}

export default page
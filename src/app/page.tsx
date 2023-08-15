
import { getDataFromField } from "firebase-config.js"
import { addDataObjectToDocument } from "firebase-config.js"
import { planetData } from "../planetData"

export default function Home() {

	planetData.forEach(planet => {
		addDataObjectToDocument(planet.name, {...planet})
	})	

  	return (
		<div>
			<h1></h1>
		</div>
	)
}

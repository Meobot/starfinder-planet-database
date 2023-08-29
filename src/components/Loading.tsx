import React from 'react'

function Loading(props: { planetName: string; }) {
  return (
	<div>
		<div>
			<h2>Loading {props.planetName}</h2>
		</div>
	</div>
  )
}

export default Loading
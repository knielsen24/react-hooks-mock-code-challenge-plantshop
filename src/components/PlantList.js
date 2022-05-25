import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDelete }) {

	const plantCards = plants.map(plant => {
		return <PlantCard
			key={plant.id}
			{...plant}
			handleDelete={handleDelete}
		/>
	})

	return (
		<ul className="cards">{plantCards}</ul>
	);
}

export default PlantList;

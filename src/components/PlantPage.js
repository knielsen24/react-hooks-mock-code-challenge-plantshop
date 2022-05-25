import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
	
	const [plants, setPlants] = useState([])
	
	const baseUrl = 'http://localhost:6001/plants' 
	
	useEffect(() => {
		fetch(baseUrl)
		.then(r => r.json())
		.then(data => setPlants(data))
	}, [])
	
	const onAddPlant = (newPlant) => {
		console.log(newPlant)
	}

	return (
		<main>
			<NewPlantForm onAddPlant={onAddPlant} />
			<Search />
			<PlantList plants={plants} />
		</main>
	);
}

export default PlantPage;

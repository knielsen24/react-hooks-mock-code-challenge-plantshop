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

	//		use map and includes to filter items
	// 	this should be updated in state 

	const handleSearch = (search) => {
		if (search === "") return true
		const filteredPlants = plants.filter(plant => {
			if (plant.name.toLowerCase().includes(search.toLowerCase())){
				return plant
			}
		})
		
		setPlants(filteredPlants)
	}

	return (
		<main>
			<NewPlantForm onAddPlant={onAddPlant} />
			<Search handleSearch={handleSearch} />
			<PlantList plants={plants} />
		</main>
	);
}

export default PlantPage;

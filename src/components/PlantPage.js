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
		const updatedList = [...plants, newPlant]
		setPlants(updatedList)
	}

	const handleDelete = (id) => {
		fetch(baseUrl + `/${id}`, {
			method: 'DELETE'
		})
		const filteredDelete = plants.filter(plant => plant.id !== id)
		setPlants(filteredDelete)
		// const deleteItem = plants.find()
	}

	const handleSearch = (search) => {
		const lowerSearch = search.toLowerCase()
		const filteredPlants = plants.filter(plant => {
			if (lowerSearch === "") return true
			if (plant.name.toLowerCase().includes(lowerSearch)){
				return plant
			}
		})
		setPlants(filteredPlants)
	}

	return (
		<main>
			<NewPlantForm onAddPlant={onAddPlant} />
			<Search handleSearch={handleSearch} />
			<PlantList plants={plants} handleDelete={handleDelete} />
		</main>
	);
}

export default PlantPage;

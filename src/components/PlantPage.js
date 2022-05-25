import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
	
	const [plants, setPlants] = useState([])
	const [searchTerm, setSearchTerm] = useState("")
	
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

	const onSearchChange = (e) =>	setSearchTerm(e.target.value.toLowerCase())

	const plantsToDisplay = plants.filter(plant => {
		const searchName = plant.name.toLowerCase().includes(searchTerm)
		if (searchTerm === "") return true
		else if (searchTerm === searchTerm) return searchName
	})

	return (
		<main>
			<NewPlantForm onAddPlant={onAddPlant} />
			<Search onSearchChange={onSearchChange} searchTerm={searchTerm} />
			<PlantList plants={plantsToDisplay} handleDelete={handleDelete} />
		</main>
	);
}

export default PlantPage;

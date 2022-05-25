import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {

	const [addPlant, setAddPlant] = useState({
		id: "",
		name: "",
		image: "",
		price: parseInt(""),
	})

	// we need to put the data into a new object
	// how do we handle onSubmit?

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setAddPlant(plants => ({...plants, [name]: value }) )
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onAddPlant(addPlant)
	}

	return (
		<div className="new-plant-form">
			<h2>New Plant</h2>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					value={addPlant.name}
					type="text"
					name="name"
					placeholder="Plant name" />
				<input
					onChange={handleChange}
					value={addPlant.image}
					type="text"
					name="image"
					placeholder="Image URL" />
				<input
					onChange={handleChange}
					value={addPlant.price}
					type="number"
					name="price"
					step="0.01" placeholder="Price" />
				<button type="submit">Add Plant</button>
			</form>
		</div>
	);
}

export default NewPlantForm;

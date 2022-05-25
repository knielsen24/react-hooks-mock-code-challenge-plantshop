import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {

	const [addPlant, setAddPlant] = useState({
		// id: "",
		name: "",
		image: "",
		price: "",
	})

	// we need to put the data into a new object
	// how do we handle onSubmit?

	const handleChange = (e) => {
		// console.log(e.target.value)
		// console.log(e.target.name)
		setAddPlant({ [e.target.name]: e.target.value } )
	}
	//console.log(addPlant)

	const handleSubmit = () => {
		const newPlant = {
			// id: "",
			name: addPlant.name,
			image: addPlant.image,
			price: addPlant.price,
		}
		onAddPlant(newPlant)
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

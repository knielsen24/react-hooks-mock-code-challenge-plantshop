import React, { useState } from "react";

function PlantCard({ id, image, name, price, handleDelete }) {

	const [isInStock, setIsInStock] = useState(true)

	const handleClick = () => {
		setIsInStock(!isInStock)
	}

	return (
		<li className="card">
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>Price: {price}</p>
			{isInStock ? (
				<button onClick={handleClick} className="primary">In Stock</button>
			) : (
				<button onClick={handleClick} >Out of Stock</button>
			)}
			<button onClick={(e)=> handleDelete(id)} >Remove</button>
		</li>
	);
}

export default PlantCard;

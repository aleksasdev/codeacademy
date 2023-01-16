import React from 'react'
import { DATA_PATH } from '../../App';
import "./append.css"
import { nanoid } from 'nanoid';

export const AppendForm = ({setData}) => {

	function handleAdding(e){
		e.preventDefault();

		const [name, image, quantity, type] = e.target.elements;

		const data = {
			id: nanoid(),
			name: name.value,
			image: image.value,
			quantity: quantity.value,
			type: type.value
		}

		fetch(DATA_PATH, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then((data) => {console.log(`Success! ${data}`)})
			.catch((error) => {console.log(`Error! ${error}`)});

		setData(current => [...current, data]);
	}

	return (
		<section id="append">
			<form action="" onSubmit={handleAdding}>
				<span>
					<label htmlFor="">Food name</label>
					<input type="text" required />
				</span>
				<span>
					<label htmlFor="">Food image</label>
					<input type="text" required />
				</span>
				<span>
					<label htmlFor="">Food quantity</label>
					<input type="text" required />
				</span>
				<span>
					<label htmlFor="">Food type</label>
					<input type="text" required />
				</span>
				<input type="submit" value="Add" />
			</form>
		</section>
	)
}

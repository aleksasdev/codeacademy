import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useState } from "react";
import { AppendForm } from "./components/append/AppendForm";
import { FoodCard } from "./components/render/FoodCard";

export const DATA_PATH = "http://localhost:5000/food";

function App() {

	const [data, setData] = useState([]);

	async function fetchData(){
		const res = await fetch(DATA_PATH)
		.then(res => res.json());

		setData(res);
	}

	useEffect(()=>{
		fetchData();
	}, [])

	return (
		<main>
			<AppendForm setData={setData} />

			{/* Render entries from server */}
			<section id="food-cards">
				{data
				? 
					data.map(entry => <FoodCard data={entry} setData={setData} key={nanoid()}/>)
				:
					<h1>Loading...</h1>
				}
			</section>
		</main>
	);
}

export default App;

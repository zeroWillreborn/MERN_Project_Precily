import { useEffect, useRef, useState } from "react";
import "./App.css";
import ReDiv from "./components/ReDiv";
import ModalForm from "./components/ModalForm";
function App() {
	const [data, setData] = useState("");
	const [adApiCount, setAdApiCount] = useState(null);
	const [upApiCount, setUpApiCount] = useState(null);
	const [add, setAdd] = useState(null);
	const [update, setUpdate] = useState(null);
	const baseUrl = `http://localhost:8000/api/user`;
	const closeRef = useRef(null);

	// fetching data from db and setting initial values
	useEffect(() => {
		const fetchData = async () => {
			let res = await fetch(`${baseUrl}/getData`);
			let d = await res.json();
			setAdApiCount(d.data.adApi);
			setUpApiCount(d.data.upApi);
			setData(d.data.text);
		};
		fetchData();
	}, [baseUrl]);

	// adding  data to database
	async function addDatatoDb(d, w) {
		if (w === "add") {
			let res = await fetch(`${baseUrl}/add`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ modalText: d }),
			});
			return res.json();
		} else if (w === "update") {
			let res = await fetch(`${baseUrl}/update`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ newText: d }),
			});
			return res.json();
		}
	}

	// modal submitted then adding data to db through calling addDatatoDb function
	function modalSubmitted(e, value) {
		if (value) {
			if (add === true) {
				addDatatoDb(value.trim(), "add").then((e) => {
					setData(e.data.text);
					setUpApiCount(e.data.upApi);
					setAdApiCount(e.data.adApi);
				});
				closeRef.current.click();
			} else if (update === true) {
				addDatatoDb(value.trim(), "update").then((e) => {
					setData(e.data.text);
					setUpApiCount(e.data.upApi);
					setAdApiCount(e.data.adApi);
				});
				closeRef.current.click();
			}
		}
	}

	function addButtonClicked(e) {
		setAdd(true);
		if (update === true) {
			setUpdate(false);
		}
	}
	function updateButtonClicked(e) {
		setUpdate(true);
		if (add === true) {
			setAdd(false);
		}
	}
	return (
		<div className='app'>
			<ModalForm closeRef={closeRef} modalSubmitted={modalSubmitted} />
			<div className='upperArea'>
				<ReDiv
					type='sidebar'
					data={data}
					initialHeight={520}
					initialWidth={320}
					addButtonClicked={addButtonClicked}
					updateButtonClicked={updateButtonClicked}
				/>
				<ReDiv
					type='rightmain'
					data={data}
					initialHeight={520}
					initialWidth={1090}
					adApiCount={adApiCount}
					upApiCount={upApiCount}
				/>
			</div>
			<div className='downSide'>
				<ReDiv
					type='down'
					data={data}
					initialHeight={320}
					initialWidth={1480}
					adApiCount={adApiCount}
					upApiCount={upApiCount}
				/>
			</div>
		</div>
	);
}

export default App;

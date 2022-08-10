import React, { useState } from "react";
import { Resizable } from "re-resizable";
export default function ReDiv({
	initialHeight,
	initialWidth,
	data,
	type,
	adApiCount,
	upApiCount,
	addButtonClicked,
	updateButtonClicked,
}) {
	const [state, setState] = useState({
		width: initialWidth,
		height: initialHeight,
	});
	return (
		<Resizable
			style={{
				border: "5px solid #2d3436",
				borderRadius: "10px",
				padding: "10px",
			}}
			size={{ width: state.width, height: state.height }}
			onResizeStop={(e, direction, ref, d) => {
				setState({
					width: state.width + d.width,
					height: state.height + d.height,
				});
			}}>
			{type === "sidebar" ? (
				<BtnGroup
					updateButtonClicked={updateButtonClicked}
					addButtonClicked={addButtonClicked}
				/>
			) : (
				<>
					<strong>Write whatever you think.</strong>
					<div className='apiData'>
						<strong>Add Api Count: {adApiCount}</strong>
						<br />
						<strong>Update Api Count: {upApiCount}</strong>
					</div>
				</>
			)}
			<p>{data}</p>
		</Resizable>
	);
}

function BtnGroup({ addButtonClicked, updateButtonClicked }) {
	return (
		<div className='btngroup'>
			<button
				onClick={(e) => addButtonClicked(e)}
				type='button'
				className='addBtn btn btn-primary'
				data-bs-toggle='modal'
				data-bs-target='#staticBackdrop'>
				Add
			</button>
			<button
				onClick={(e) => updateButtonClicked(e)}
				type='button'
				className='updateBtn btn btn-primary'
				data-bs-toggle='modal'
				data-bs-target='#staticBackdrop'>
				Update
			</button>
		</div>
	);
}

import React, { useState } from "react";

const ModalForm = ({ modalSubmitted, closeRef }) => {
	const [modalText, setModalText] = useState("");
	return (
		<>
			<div
				className='modal fade'
				id='staticBackdrop'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='staticBackdropLabel'
				aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='staticBackdropLabel'>
								Write something special...
							</h5>
							<button
								ref={closeRef}
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<input
								onChange={(e) => setModalText(e.target.value)}
								value={modalText}
								type='text'
								name='modalText'
								id='modalInput'
								className='input-group p-3'
								placeholder='Write..'
							/>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								style={{ fontWeight: "300" }}
								className='btn btn-dark'
								data-bs-dismiss='modal'>
								Close
							</button>
							<button
								onClick={(e) => modalSubmitted(e, modalText)}
								style={{
									backgroundColor: "#5247eb",
									color: "white",
									fontWeight: "600",
								}}
								type='button'
								className='btn'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalForm;

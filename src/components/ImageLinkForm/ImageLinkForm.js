import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
	const { onInputChange, onDetectFace } = props;
	return (
		<div>
			<p className="f1">
				{'This app will detect faces in your picture. Are you ready?'}
			</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-5">
					<input className="pa2 f4 w-70 center" type="text" onChange={onInputChange} />
				<button 
					className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" 
					onClick={onDetectFace}>Detect</button>
				</div>				
			</div>
		</div>
	);
}

export default ImageLinkForm;
import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
	const { imageUrl, box } = props;

	if (imageUrl) {
		return (
			<div className="center ma">
				<div className=" absolute mt2" >
					<img 
						id="inputimage"
						alt="the_image"
						src={imageUrl}
						width="500px" 
						height="auto"
					/>
					<div className='bouding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}> 
					</div>
				</div>			
			</div>
		);	
	}

	return (
		<div></div>
	);

	
}

export default FaceRecognition;
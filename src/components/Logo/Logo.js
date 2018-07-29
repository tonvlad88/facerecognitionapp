import React from 'react';
import Tilt from 'react-tilt'
import tonylogo from './tony.png';
import './Logo.css'

const Logo = () => {
	return (
		<div className="ma4 mt0 pa4 center">
			<Tilt className="Tilt br3 shadow-2 pa1" options={{ max : 25 }} style={{ height: 203, width: 203 }} >
			 <div className="Tilt-inner b1"> <img src={tonylogo} alt="tony" /></div>
			</Tilt>
		</div>
	);
}

export default Logo;
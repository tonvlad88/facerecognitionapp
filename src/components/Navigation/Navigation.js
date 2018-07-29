import React from 'react';

const Navigation = (props) => {
	const { onRouteChange, isSignedIn } = props;

	if (isSignedIn) {
		return (
			<nav className="pa4" style= {{ display: 'flex', justifyContent: 'flex-end' }}>
				<p onClick={ () => onRouteChange('signout')} className="f3 link dim black pa3 pointer" > Sign Out </p>
			</nav>
		);				
	} else {
		return (
			<nav className="pa4" style= {{ display: 'flex', justifyContent: 'flex-end' }}>
				<p onClick={ () => onRouteChange('signin')} className="f3 link dim black pa3 pointer" > Sign In </p>
				<p onClick={ () => onRouteChange('register')} className="f3 link dim black pa3 pointer" > Register </p>
			</nav>			
		);
		
	}
		
	

};

export default Navigation;
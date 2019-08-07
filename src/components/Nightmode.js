import React from 'react';
import StyledNightmode from '../styles/StyledNightmode';

const Nightmode = ({nightModeCallback,nightmode}) => {
	return (
		<StyledNightmode>
			<span>Nightmode:</span>
			<label className="switch">
				<input type="checkbox" checked={nightmode} onChange={nightModeCallback}/>
				<span className="slider round"/>
			</label>
		</StyledNightmode>
	)
}

export default Nightmode;
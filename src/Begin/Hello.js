import React from 'react';

function Hello({ name = 'default', color, isSpecial }) {
	return (
		<div style={{ color: color }}>
			{isSpecial && <b>*</b>}안뇽 {name}
		</div>
	);
}

export default Hello;

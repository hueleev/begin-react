import React from 'react';

function Counter({ number, onIncrease, onDecrease }) {
	return (
		<div>
			<h1>{number}</h1>
			<h3>1초 후에 동작합니다.</h3>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	);
}

export default Counter;

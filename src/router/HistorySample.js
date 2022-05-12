import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HistorySample({ history }) {
	const navigate = useNavigate();
	const goBack = () => {
		const answer = window.confirm('정말 떠나시겠어요?');
		if (answer) {
			navigate(-1);
		}
	};

	const goHome = () => {
		navigate('/');
	};

	return (
		<div>
			<button onClick={goBack}>뒤로가기</button>
			<button onClick={goHome}>홈으로</button>
		</div>
	);
}

export default HistorySample;

import React, { useState, useRef } from 'react';

/*
    input 의 개수가 여러개가 됐을때는, 단순히 useState 를 여러번 사용하고 onChange 도 여러개 만들어서 구현 할 수 있습니다.
    하지만 그 방법은 가장 좋은 방법은 아닙니다.
    더 좋은 방법은, input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것입니다. 그리고, useState 에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 합니다.
*/
function InputSample() {
	const [inputs, setInputs] = useState({
		name: '',
		nickname: '',
	});

	// 값 추출
	const { name, nickname } = inputs;

	// useRef
	const nameInput = useRef();

	const onChange = e => {
		const { value, name } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const onReset = e => {
		setInputs({
			name: '',
			nickname: '',
		});
		nameInput.current.focus();
	};

	return (
		<div>
			<input placeholder="이름" name="name" value={name} onChange={onChange} ref={nameInput} />
			<input placeholder="닉네임" name="nickname" value={nickname} onChange={onChange} />
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값: </b>
				{name} ({nickname})
			</div>
		</div>
	);
}

export default InputSample;

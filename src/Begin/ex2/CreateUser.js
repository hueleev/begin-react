import React, { useRef, useContext } from 'react';
import useInputs from '../../components/useInputs';
import { UserDispatch } from './TestApp';
function CreateUser() {
	const dispatch = useContext(UserDispatch);
	const [{ username, email }, onChange, reset] = useInputs({
		username: '',
		email: '',
	});
	const nextId = useRef(4);
	return (
		<div>
			<input name="username" placeholder="계정명" onChange={onChange} value={username} />
			<input name="email" placeholder="이메일" onChange={onChange} value={email} />
			<button
				onClick={() => {
					dispatch({
						type: 'CREATE_USER',
						user: {
							id: nextId.current,
							username,
							email,
						},
					});
					reset();
					nextId.current += 1;
				}}
			>
				등록
			</button>
		</div>
	);
}

// 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는 React.memo
export default React.memo(CreateUser);

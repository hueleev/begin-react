import React, { useRef, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
	return users.filter(user => user.active).length;
}

const initialState = {
	inputs: {
		username: '',
		email: '',
	},
	users: [
		{
			id: 1,
			username: 'velopert',
			email: 'public.velopert@gmail.com',
			active: true,
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@example.com',
			active: false,
		},
		{
			id: 3,
			username: 'liz',
			email: 'liz@example.com',
			active: false,
		},
	],
};

function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.name]: action.value,
				},
			};
		case 'CREATE_USER':
			return {
				inputs: initialState.inputs, // input 초기화
				users: state.users.concat(action.user),
			};
		case 'REMOVE_USER':
			return {
				...state,
				users: state.users.filter(user => user.id !== action.id),
			};
		case 'TOGGLE_USER':
			return {
				...state,
				users: state.users.map(user =>
					user.id === action.id ? { ...user, active: !user.active } : user,
				),
			};
		default:
			return state;
	}
}

function TestApp() {
	// ******************** 배열랜더링 관련
	const [state, dispatch] = useReducer(reducer, initialState);
	const { users } = state;
	const { username, email } = state.inputs;

	// useCallback: useMemo와 비슷 , 이 경우에는 함수를 재사용
	// !!! 함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 된다
	// 하지만 상태 관리 시 함수형 업데이트(setInputs(prev=>)를 하면 최신 상태를 참조하기 때문에 useCallback의 deps에 넣지 않아도 됨
	const onChange = useCallback(e => {
		const { name, value } = e.target;
		dispatch({
			type: 'CHANGE_INPUT',
			name,
			value,
		});
	}, []);

	const nextId = useRef(4);
	const onCreate = useCallback(() => {
		dispatch({
			type: 'CREATE_USER',
			user: {
				id: nextId.current,
				username,
				email,
			},
		});
		nextId.current += 1;
	}, [username, email]);

	const onRemove = useCallback(id => {
		// user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
		// = user.id 가 id 인 것을 제거함
		dispatch({
			type: 'REMOVE_USER',
			id,
		});
	}, []);

	const onToggle = useCallback(id => {
		dispatch({
			type: 'TOGGLE_USER',
			id,
		});
	}, []);

	// useMemo: 이전에 사용한 값을 기억하여 재사용
	const count = useMemo(() => countActiveUsers(users), [users]);

	return (
		<>
			<CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
			<div>활성 사용자 수: {count}</div>
			<UserList users={users} onRemove={onRemove} onToggle={onToggle} />
		</>
	);
}

export default TestApp;

import React, { useRef, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers(users) {
	return users.filter(user => user.active).length;
}

const initialState = {
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
		case 'CREATE_USER':
			return produce(state, draft => {
				draft.users.push(action.user);
			});
		case 'REMOVE_USER':
			return produce(state, draft => {
				const index = draft.users.findIndex(user => user.id === action.id);
				draft.users.splice(index, 1);
			});
		case 'TOGGLE_USER':
			// 두개의 parameter : 불변성을 유지하면서 새로운 상태를 만들어줌
			return produce(state, draft => {
				const user = draft.users.filter(user => user.id === action.id);
				user.active = !user.active;
			});
		default:
			return state;
	}
}

export const UserDispatch = React.createContext(null);

function TestApp() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { users } = state;

	// useMemo: 이전에 사용한 값을 기억하여 재사용
	const count = useMemo(() => countActiveUsers(users), [users]);

	return (
		<UserDispatch.Provider value={dispatch}>
			<CreateUser />
			{/* <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} /> */}
			<div>활성 사용자 수: {count}</div>
			<UserList users={users} />
		</UserDispatch.Provider>
	);
}

export default TestApp;

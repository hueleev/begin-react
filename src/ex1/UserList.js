import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
	// deps 안에 특정 값이 있다면 언마운트시에도 호출이되고, 값이 바뀌기 직전에도 호출이 됩니다.
	useEffect(() => {
		console.log('user 랜더링 후');
		return () => {
			console.log('user 랜더링 전');
		};
	}, [user]);
	return (
		<div>
			<b
				style={{
					cursor: 'pointer',
					color: user.active ? 'green' : 'black',
				}}
				onClick={() => onToggle(user.id)}
			>
				{user.username}
			</b>{' '}
			<span>({user.email})</span>
			<button onClick={() => onRemove(user.id)}>삭제</button>
		</div>
	);
}

function UserList({ users, onRemove, onToggle }) {
	return (
		<div>
			{users.map(user => (
				<User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />
			))}
		</div>
	);
}

// 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는 React.memo
export default React.memo(UserList);

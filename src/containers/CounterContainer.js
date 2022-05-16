import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
	// useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
	// state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
	// shallowEqual은 react-redux에 내장되어있는 함수로서, 객체 안의 가장 겉에 있는 값들을 모두 비교해줍니다.
	const { number, diff } = useSelector(
		state => ({
			number: state.counter.number,
			diff: state.counter.diff,
		}),
		shallowEqual,
	);
	/* const number = useSelector(state => state.counter.number);
	const diff = useSelector(state => state.counter.diff); */

	// useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook이니다.
	const dispatch = useDispatch();
	// 각 액션들을 디스패치하는 함수들을 만드세요
	const onIncrease = () => dispatch(increase());
	const onDecrease = () => dispatch(decrease());
	const onSetDiff = diff => dispatch(setDiff(diff));

	return (
		<Counter
			// 상태와
			number={number}
			diff={diff}
			// 액션을 디스패치하는 함수들을 props로 넣어줍니다.
			onIncrease={onIncrease}
			onDecrease={onDecrease}
			onSetDiff={onSetDiff}
		/>
	);
}

export default CounterContainer;

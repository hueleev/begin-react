import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import TestApp1 from './ex1/TestApp';
import TestApp2 from './ex2/TestApp';

function BeginApp() {
	return (
		<>
			<Wrapper>
				{/* 태그 내부 속성은 props.children으로 넘어간다 */}
				<h3>🎈 jsx</h3>
				<Hello
					name="HI"
					color="red"
					isSpecial={true}
					// 태그 내 주석 작성 방법
				/>
				<Hello color="pink" />
			</Wrapper>
			<Wrapper>
				<h3>🎈 useState / useReducer</h3>
				<Counter />
			</Wrapper>
			<Wrapper>
				<h3>🎈 Input 상태 관리 / useRef</h3>
				<InputSample />
			</Wrapper>
			<Wrapper>
				<h3>🎈 useReducer</h3>
				<TestApp1 />
			</Wrapper>
			<Wrapper>
				<h3>🎈 customHook</h3>
				<TestApp2 />
			</Wrapper>
		</>
	);
}

export default BeginApp;

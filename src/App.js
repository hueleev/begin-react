import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
	return (
		<div className="App">
			{/* <div className="buttons">
				<Button size="large">BUTTON</Button>
				<Button>BUTTON</Button>
				<Button size="small">BUTTON</Button>
			</div>
			<div className="buttons">
				<Button size="large" color="gray">
					BUTTON
				</Button>
				<Button color="gray">BUTTON</Button>
				<Button size="small" color="gray">
					BUTTON
				</Button>
			</div>
			<div className="buttons">
				<Button size="large" color="pink">
					BUTTON
				</Button>
				<Button color="pink">BUTTON</Button>
				<Button size="small" color="pink">
					BUTTON
				</Button>
			</div>
			<div className="buttons">
				<Button size="large" color="blue" outline>
					BUTTON
				</Button>
				<Button color="gray" outline>
					BUTTON
				</Button>
				<Button size="small" color="pink" outline>
					BUTTON
				</Button>
			</div> */}

			<div className="buttons">
				<Link to="begin">
					<Button size="large" fullWidth color="yellow">
						BEGIN
					</Button>
				</Link>
				<Link to="/todo">
					<Button size="large" fullWidth>
						TODO
					</Button>
				</Link>
				<Link to="/users">
					<Button size="large" fullWidth color="gray">
						USERS
					</Button>
				</Link>
				<Link to="/route">
					<Button size="large" fullWidth color="pink">
						ROUTE
					</Button>
				</Link>
				<hr />
				<CounterContainer />
				<hr />
				<TodosContainer />
				<hr />
				<Link to="redux">
					<Button size="large" fullWidth color="yellow">
						REDUX
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default App;

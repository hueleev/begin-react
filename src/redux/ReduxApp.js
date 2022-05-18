import React from 'react';
import CounterContainer from './containers/CounterContainer';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import { Routes, Route, Link } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css';

function ReduxApp() {
	return (
		<div className="App">
			<div className="buttons">
				<Link to="/redux/counter">
					<Button size="large" fullWidth color="yellow">
						counter
					</Button>
				</Link>
				<Link to="/redux/board">
					<Button size="large" fullWidth color="pink">
						board
					</Button>
				</Link>
			</div>
			<Routes>
				<Route path="/counter" element={<CounterContainer />} exact={true} />
				<Route path="/board" element={<PostListPage />} exact={true} />
				<Route path="/board/:id" element={<PostPage />} />
			</Routes>
		</div>
	);
}

export default ReduxApp;

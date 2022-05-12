import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';

const RouterApp = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">홈</Link>
				</li>
				<li>
					<Link to="/about">소개</Link>
				</li>
			</ul>
			<hr />
			<Routes>
				<Route path="/" exact={true} element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
};

export default RouterApp;

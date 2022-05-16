import React from 'react';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const RouterApp = () => {
	const { pathname } = useLocation();
	return (
		<div>
			<ul>
				<li>
					<Link to="/route">홈</Link>
				</li>
				<li>
					<Link to="/route/about">소개</Link>
				</li>
				<li>
					<Link to="/route/profiles">프로필 목록</Link>
				</li>
				<li>
					<Link to="/route/history">예제</Link>
				</li>
			</ul>
			<hr />
			<Routes>
				<Route path="/" exact={true} element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/profiles/*" element={<Profiles />} />
				<Route path="/history" element={<HistorySample />} />
				<Route path="/*" element={<h1>이 페이지는 존재하지 않습니다. - {pathname}</h1>} />
			</Routes>
		</div>
	);
};

export default RouterApp;

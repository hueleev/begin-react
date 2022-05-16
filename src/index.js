import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

import UserApp from './User/UserApp';
import { UsersProvider } from './User/UsersContext';
import ToDoApp from './ToDo/ToDoApp';
import BeginApp from './Begin/BeginApp';
import RouterApp from './router/RouterApp';
import ReduxApp from './redux/ReduxApp';
import App from './App';

import reduxReducer from './redux/modules';

import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.

const reduxStore = createStore(reduxReducer);

console.log(store.getState());
root.render(
	// <React.StrictMode>

	<BrowserRouter>
		<Routes>
			<Route path="/todo" element={<ToDoApp />} />
			<Route
				path="/users"
				element={
					<UsersProvider>
						<UserApp />
					</UsersProvider>
				}
			/>
			<Route path="/route/*" element={<RouterApp />} />
			<Route path="/begin" element={<BeginApp />} />
			<Route
				path="/redux"
				element={
					<Provider store={reduxStore}>
						<ReduxApp />
					</Provider>
				}
			/>
			<Route
				path="/*"
				element={
					<Provider store={store}>
						<App />
					</Provider>
				}
			/>
		</Routes>
	</BrowserRouter>,
	// </React.StrictMode>,
);

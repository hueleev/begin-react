import React from 'react';
import { Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import rootReducer from '../modules';
import UserApp from '../User/UserApp';
import { UsersProvider } from './User/UsersContext';
import ToDoApp from '../ToDo/ToDoApp';
import BeginApp from '../Begin/BeginApp';
import RouterApp from '../router/RouterApp';
import ReduxApp from '../redux/ReduxApp';
import App from '../App';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxReducer from '../redux/modules';

// import useReactRouter from 'use-react-router';
const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
console.log('store -->', store.getState());
const reduxStore = createStore(
	reduxReducer,
	composeWithDevTools(applyMiddleware(ReduxThunk, logger)),
); // redux-thunk, redux-logger 적용
export const routes = [
	{
		path: '/todo',
		element: <ToDoApp />,
	},
	{
		path: '/users',
		element: (
			<UsersProvider>
				<UserApp />
			</UsersProvider>
		),
	},
	{
		path: '/route/*',
		element: <RouterApp />,
	},
	{
		path: '/begin',
		element: <BeginApp />,
	},
	{
		path: '/redux/*',
		element: (
			<Provider store={reduxStore}>
				<ReduxApp />
			</Provider>
		),
		exact: true,
	},
	{
		path: '/',
		element: (
			<Provider store={store}>
				<App />
			</Provider>
		),
	},
	// {
	//   path: "/:id",
	//   component: PostPage,
	//   exact: true
	//   //   routes: [
	//   //     {
	//   //       path: "/tacos/bus",
	//   //       component: Bus
	//   //     },
	//   //     {
	//   //       path: "/tacos/cart",
	//   //       component: Cart
	//   //     }
	//   //   ]
	// },
];

export const RouteWithSubRoutes = route => {
	return <Route path={route.path} element={route.element} />;
};

// export const RouterHookSample = () => {
//   const { history, location, match } = useReactRouter;
//   console.log({ history, location, match });
//   return null;
// }

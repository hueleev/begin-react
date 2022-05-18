import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
	unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
import { createBrowserHistory } from 'history';

import UserApp from './User/UserApp';
import { UsersProvider } from './User/UsersContext';
import ToDoApp from './ToDo/ToDoApp';
import BeginApp from './Begin/BeginApp';
import RouterApp from './router/RouterApp';
import ReduxApp from './redux/ReduxApp';
import App from './App';
import { Provider } from 'react-redux';

import reduxReducer, { rootSaga } from './redux/modules';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
	context: {
		history: customHistory,
	},
}); // 사가 미들웨어를 만듭니다.
const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
console.log('store -->', store.getState());

const reduxStore = createStore(
	reduxReducer,
	composeWithDevTools(
		applyMiddleware(
			ReduxThunk.withExtraArgument({ history: customHistory }),
			sagaMiddleware, // 사가 미들웨어를 적용하고
			logger,
		),
	),
); // redux-thunk, redux-logger 적용

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.
// 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>

	<HistoryRouter basename="/begin-react" history={customHistory}>
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
				path="/redux/*"
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
	</HistoryRouter>,
	// </React.StrictMode>,
);

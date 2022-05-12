import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoApp from './ToDo/ToDoApp';
import Users from './User/Users';
import { UsersProvider } from './User/UsersContext';
import { BrowserRouter } from 'react-router-dom';
import BeginApp from './BeginApp';
import RouterApp from './router/RouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>

	<BrowserRouter>
		{
			// <App />,
			// <ToDoApp />,
			// <UsersProvider>
			// 	<Users />
			// </UsersProvider>,
		}
		<RouterApp />
	</BrowserRouter>,
	// </React.StrictMode>,
);

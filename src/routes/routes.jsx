import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import RootErrorPage from 'pages/RootErrorPage';

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path='' errorElement={<RootErrorPage />}>
			<Route path='' element={<HomePage />} />
		</Route>,
	),
);

export default routes;

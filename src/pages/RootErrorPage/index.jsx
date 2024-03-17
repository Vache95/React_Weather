import { useRouteError } from 'react-router-dom';

const RootErrorPage = () => {
	const error = useRouteError();

	let errorDetails;

	if (error instanceof Error) {
		errorDetails = error.message;
	}

	return (
		<>
			<p>Something went wrong!</p>
			<span>{errorDetails}</span>
		</>
	);
};

export default RootErrorPage;

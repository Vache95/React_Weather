import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import useQueryParams, { DEFAULT_QUERY_PARAMS } from 'hooks/useQueryParams';
import { getWeater } from 'services/weaterServices';

export const AppContext = React.createContext({
	weatherCurrent: {},
	searchValue: '',
	error: '',
	handleSearch: () => null,
	fetchWeatherCurrent: () => null,
});

export const AppContextProvider = ({ children }) => {
	const [searchValue, setSearchValue] = useState('');
	const debouncedValue = useDebounce(searchValue, 1000);
	const [weatherCurrent, setWeatherCurrent] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [queryParams, setQueryParams] = useQueryParams(DEFAULT_QUERY_PARAMS);

	const handleSearch = useCallback(event => {
		const trimmedValue = event.target?.value?.trimStart();
		setSearchValue(trimmedValue);
	}, []);

	useMemo(() => {
		if (!debouncedValue?.length) {
			setQueryParams({ q: 'erevan' });
		} else {
			setQueryParams({ q: debouncedValue });
		}
	}, [debouncedValue, setQueryParams]);

	const fetchWeatherCurrent = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await getWeater(queryParams);
			setWeatherCurrent(response?.data);
		} catch (err) {
			setWeatherCurrent('');
			console.log(err, 'error');
		} finally {
			setIsLoading(false);
		}
	}, [queryParams]);

	useEffect(() => {
		fetchWeatherCurrent();
	}, [fetchWeatherCurrent, setQueryParams, queryParams]);

	const values = useMemo(
		() => ({ weatherCurrent, handleSearch, searchValue, isLoading }),
		[weatherCurrent, handleSearch, searchValue, isLoading],
	);

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

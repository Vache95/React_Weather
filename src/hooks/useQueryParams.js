import { useCallback, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export const DEFAULT_QUERY_PARAMS = {
	q: 'erevan',
	units: 'metric',
	appid: process.env.REACT_APP_WEATHER_KEY,
};

const STRING_REQUIRED_FIELDS = ['search'];

function useQueryParams(params) {
	const initialParams = useRef({ ...params });
	const [searchParams, setSearchParams] = useSearchParams();

	const queryParams = useMemo(() => {
		return Object.entries(initialParams.current).reduce((acc, [key, initValue]) => {
			const getValueFromQueryString = () => {
				const formatValue = v => (STRING_REQUIRED_FIELDS.includes(key) ? v : getTypedValue(v));

				if (Array.isArray(initValue)) {
					return compact(searchParams.getAll(key).map(formatValue));
				}

				return formatValue(searchParams.get(key) || '');
			};

			return {
				...acc,
				[key]: searchParams.has(key) ? getValueFromQueryString() : initValue,
			};
		}, {});
	}, [searchParams]);

	const setQueryParams = useCallback(
		value => {
			Object.entries(value).forEach(([key, newValue]) => {
				if (Array.isArray(newValue)) {
					if (newValue.length) {
						searchParams.delete(key);
						newValue.forEach(v => searchParams.append(key, String(v)));
					} else {
						searchParams.set(key, '');
					}
				} else {
					searchParams.set(key, String(newValue));
				}
			});

			setSearchParams(searchParams);
		},
		[searchParams, setSearchParams],
	);

	return [queryParams, setQueryParams];
}

const compact = array => {
	return array.filter(function (value) {
		return value != null;
	});
};

const isNumeric = value => {
	return !isNaN(+value) && !isNaN(parseFloat(value));
};

const getTypedValue = value => {
	if (value === 'null') {
		return null;
	} else if (value === 'undefined') {
		return undefined;
	} else if (value === 'false') {
		return false;
	} else if (value === 'true') {
		return true;
	} else if (isNumeric(value)) {
		return Number(value);
	} else {
		return value;
	}
};

export default useQueryParams;

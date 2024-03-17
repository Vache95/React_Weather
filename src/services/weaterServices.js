import AxiosInstance from '../lib/api';

export const getWeater = params => AxiosInstance.get('/weather', { params });

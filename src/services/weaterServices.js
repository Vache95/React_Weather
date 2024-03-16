import AxiosInstance from '../lib/api';

export const getWeater = () => AxiosInstance.get('/weather',
 { params:{
    q:'erevan',
    appid:process.env.REACT_APP_WEATHER_KEY,
}}
);
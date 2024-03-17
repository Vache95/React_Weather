import Cloud from 'common/WeatherIcons/Cloud';
import PartlyCloud from 'common/WeatherIcons/PartlyCloud';
import Rainy from 'common/WeatherIcons/Rainy';
import Sunny from 'common/WeatherIcons/Sunny';
import Thundery from 'common/WeatherIcons/Thundery';

export const WEATHER_CLOUD = {
	'clear sky': <Sunny />,
	'few clouds': <PartlyCloud />,
	'light rain': <PartlyCloud />,
	'scattered clouds': <Cloud />,
	'broken clouds': <Cloud />,
	'overcast clouds': <Cloud />,
	'shower rain': <Rainy />,
	rain: <Rainy />,
	thunderstorm: <Thundery />,
	snow: <Cloud />,
	mist: <Cloud />,
};

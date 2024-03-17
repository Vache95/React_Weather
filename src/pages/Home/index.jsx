import React from 'react';
import Header from 'components/Header';
import Weather from 'components/Weather';
import WeatherBg from 'assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg';

import { AppContextProvider } from 'context/AppContext';

const HomePage = () => {
	return (
		<AppContextProvider>
			<div className='weather'>
				<div className='weather__bg-img'>
					<img src={WeatherBg} alt='bg' />
				</div>
				<Header />
				<Weather />
			</div>
		</AppContextProvider>
	);
};

export default HomePage;

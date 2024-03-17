import React from 'react';
import { useApp } from 'hooks/useApp';
import { WEATHER_CLOUD } from 'constants/weatherCloud';
import './styles.scss';

import SkeletonComponent from 'common/Skeleton';

const Weather = () => {
	const { weatherCurrent, isLoading } = useApp();

	return (
		<div className='weather__main'>
			{isLoading ? (
				<SkeletonComponent styles={{ width: '100%', height: '100%', opacity: '0.7' }} className='skeleton' />
			) : (
				<div className='main__container'>
					<div className='main-left'>
						{!weatherCurrent ? (
							<div className='nothfound'>
								<p>Not Found</p>
							</div>
						) : (
							<>
								<div className='main-left__top'>
									<div className='main-left__title'>
										<h3>{weatherCurrent?.name || '----'}</h3>
										<p>{weatherCurrent?.weather?.[0]?.description || '---'}</p>
									</div>
									{WEATHER_CLOUD?.[weatherCurrent?.weather?.[0]?.description] || '---'}
								</div>
								<div className='main-left_bottom'>
									<div className='left_bottom__container'>
										<div className='main-left__celsius'>
											<h2>{weatherCurrent?.main?.temp?.toFixed() || '--'} &deg;C</h2>
										</div>
										<div className='main-left__info'>
											<div className='info-item'>
												<p>Feel Like</p>
												<span>{weatherCurrent?.main?.feels_like?.toFixed() || '--'}&deg;C</span>
											</div>
											<div className='info-item'>
												<p>Humidity</p>
												<span>{weatherCurrent?.main?.humidity || '--'}%</span>
											</div>
											<div className='info-item'>
												<p>Winde Speed</p>
												<span>{weatherCurrent?.wind?.speed || '--'}MPH</span>
											</div>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
export default Weather;

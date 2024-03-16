import { useEffect } from 'react';
import WeatherBg from './assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg'
import { getWeater } from './services/weaterServices';


function App() {
  useEffect(() => {
    getWeater()
  },[])
  function celsiusToFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

  return (
    <div className="weather">
        <div className="weather__bg-img">
          <img src={WeatherBg} alt="bg"/>
        </div>
        <div className='weather__header'>
           <div className='search'>
               <input type="text" placeholder='search...' />
           </div>
        </div>
        <div className='weather__main'>
           <div className='main__container'>
               <div className='main-left'>
               <div className='main-left__title'>
                     <h3>Yerevan</h3>
                   </div>
                  <div class="cloudy"></div>
                   <div className='main-left__celsius'>
                     <h3>{283.24.toFixed()}&deg;C</h3>
                   </div>
                   <div className='main-left__info'>
                      <div className='main-left__info-item'>
                        <p><span>{283.24.toFixed()}&deg;C</span>Feel Like</p>
                        <p><span>70%</span>Humidity</p>
                        <p><span>1.5 MPH</span>Winde Speed</p>
                      </div>
                   </div>
               </div>
               <div className='main-right'>
                  <div className='main-right__item'>
                    <div class="sunny"></div>
                    <div className='main-right__celsius'>
                     <h3>{283.24.toFixed()}&deg;C</h3>
                   </div>
                   <div className='main-right__info'>
                      <div className='main-right__info-item'>
                        <p><span>{283.24.toFixed()}&deg;C</span>Feel Like</p>
                        <p><span>70%</span>Humidity</p>
                        <p><span>1.5 MPH</span>Winde Speed</p>
                      </div>
                   </div>
                  </div>
                  <div className='main-right__item'>
                  <div class="partly_cloudy">
                    <div class="partly_cloudy__sun"></div>
                    <div class="partly_cloudy__cloud"></div>
                  </div>
                    <div className='main-right__celsius'>
                     <h3>{283.24.toFixed()}&deg;C</h3>
                   </div>
                   <div className='main-right__info'>
                      <div className='main-right__info-item'>
                        <p><span>{283.24.toFixed()}&deg;C</span>Feel Like</p>
                        <p><span>70%</span>Humidity</p>
                        <p><span>1.5 MPH</span>Winde Speed</p>
                      </div>
                   </div>
                  </div>
                  <div className='main-right__item'>
                  <div class="rainy">
                    <div class="rainy__cloud"></div>
                    <div class="rainy__rain"></div>
                  </div>
                    <div className='main-right__celsius'>
                     <h3>{283.24.toFixed()}&deg;C</h3>
                   </div>
                   <div className='main-right__info'>
                      <div className='main-right__info-item'>
                        <p><span>{283.24.toFixed()}&deg;C</span>Feel Like</p>
                        <p><span>70%</span>Humidity</p>
                        <p><span>1.5 MPH</span>Winde Speed</p>
                      </div>
                   </div>
                  </div>
                  <div className='main-right__item'>
                  <div class="thundery">
                    <div class="thundery__cloud"></div>
                    <div class="thundery__rain"></div>
                  </div>
                    <div className='main-right__celsius'>
                     <h3>{283.24.toFixed()}&deg;C</h3>
                   </div>
                   <div className='main-right__info'>
                      <div className='main-right__info-item'>
                        <p><span>{283.24.toFixed()}&deg;C</span>Feel Like</p>
                        <p><span>70%</span>Humidity</p>
                        <p><span>1.5 MPH</span>Winde Speed</p>
                      </div>
                   </div>
                  </div>
                  <div className='main-right__item'>
                    <div class="cloudy"></div>
                    <div className='main-right__celsius'>
                     <h3>{283.24.toFixed()}&deg;C</h3>
                   </div>
                   <div className='main-right__info'>
                      <div className='main-right__info-item'>
                        <p><span>{283.24.toFixed()}&deg;C</span>Feel Like</p>
                        <p><span>70%</span>Humidity</p>
                        <p><span>1.5 MPH</span>Winde Speed</p>
                      </div>
                   </div>
                  </div>
                  <div className='main-right__item'>
                    <div class="cloudy"></div>
                    <div className='main-right__celsius'>
                     <h3>{283.24.toFixed()}&deg;C</h3>
                   </div>
                   <div className='main-right__info'>
                      <div className='main-right__info-item'>
                        <p><span>{283.24.toFixed()}&deg;C</span>Feel Like</p>
                        <p><span>70%</span>Humidity</p>
                        <p><span>1.5 MPH</span>Winde Speed</p>
                      </div>
                   </div>
                  </div>
               </div>
           </div>
        </div>   
    </div>
  );
}

export default App;

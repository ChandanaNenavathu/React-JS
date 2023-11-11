import React from 'react'
import './WeatherApp.css'
const WeatherApp = () => {

  let api_key = '7fb5796a5381c7b18f5801e8e8ceb250';
  const search = async () => {
    const element = document.getElementsByClassName('cityInput')
    if (element[0].value === '') {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

    let response = await fetch (url);
    let data = await response.json()
    console.log('data  =>', data)
    const humidity1 = document.getElementsByClassName("humidity-percent1")
    const humidity2 = document.getElementsByClassName("humidity-percent2")
    const temperature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")

    humidity1[0].innerHTML = data.main.humidity+" % "
    humidity2[0].innerHTML = data.wind.speed+" km/h"
    temperature[0].innerHTML = data.main.temp+"&degc"
    location[0].innerHTML = data.name;


  }

  return (
    <div>
      <div className="container">
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className="down_search">
            <div className="search" onClick={() => {
              search()
            }}>
              <button className='btn_search'>Search</button>
            </div>
            </div>
            <div className="weather-temp">24&deg;c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
              <div className="element1">
                <div className="data1">
                  <div className="humidity-percent1">64%</div>
                  <div className="text1">Humidity</div>
                </div>
              </div>
              <div className="element2">
                <div className="data2">
                  <div className="humidity-percent2">18 km/h</div>
                  <div className="text2">Wind Speed</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp

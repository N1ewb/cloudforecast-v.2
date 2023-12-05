import React from 'react'
import Weathercard from './Weathercard'

const WeatherList = ({hourly, location}) => {
  return (
    <>
        <div className='card-container'>
            {hourly.time.map((time, index) => (
                <Weathercard key={index} location={location} temperature={hourly.temperature_2m[index]} time={time}/>
            ))}
        </div>
    </>
  )
}

export default WeatherList
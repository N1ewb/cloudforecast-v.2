import React from 'react'
import CloudsIcon from '../images/icons8-clouds-50.png'
const Weathercard = ({temperature, time, location}) => {
    const dateObject = new Date(time);

    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const formattedTime = `${hours}:${minutes}${0}`;
  return (
    <>
        <div className='card'>
            <div className='card-body'>
                <p>{formattedTime}</p>
                <img src={CloudsIcon} alt="clouds" height="50px" width="50px"/>

              {location && location.display_name ? (
                <p>{temperature}</p>
              ) : (
                <p>No Result</p>
              )}

            </div>
        </div>
    </>
  )
}

export default Weathercard
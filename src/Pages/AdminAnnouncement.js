import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { UseCarouselContext } from '../hooks/UseCarouselContext';
import CarouselDetails from '../components/CarouselDetails'
import '../styles/admin.css';
import Nav from '../components/Nav';

const  AdminAnnouncements = () => {
  const {carousel, dispatch} = UseCarouselContext()
  let navigate = useNavigate();

  useEffect(() => {
    const fetchCarouselData = async () => {
        const response = await fetch('/api/carousel')
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_CAROUSEL', payload: json})
        }
    }
    fetchCarouselData()
}, [])


  return (
    <div className="workout-details">

      <h2>Announcements</h2>
      {/* <span onClick={handleClick}>delete</span> */}
      {/* <button onClick={handlePostClick}>detail</button> */}
      <div className='home'>
            <div className='workouts'>
                {carousel && carousel.map((carousel) => (
                    <CarouselDetails key={carousel._id} carousel={carousel}/>
                ))}
            </div>
        </div>

    </div>
  )
}

export default AdminAnnouncements
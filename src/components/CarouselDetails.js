import { useState, useEffect } from 'react';
import { UseCarouselContext } from '../hooks/UseCarouselContext';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const CarouselDetails = ({ carousel }) => {
  const { dispatch } = UseCarouselContext();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/carousel/' + carousel._id, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_BUSINESS_CAROUSEL_DATA', payload: json });
    }
  };

  

  return (
    <div className="workout-details">

      <p>
        <strong>description1: </strong>
        {carousel.description1}
      </p>
      <p>
        <strong>description2: </strong>
        {carousel.description2}
      </p>
      <p>
        <strong>description3: </strong>
        {carousel.description3}
      </p>

      <span onClick={handleClick}>delete</span>

      
      {/* <button onClick={POST}>post</button> */}

    </div>
  );
};

export default CarouselDetails;

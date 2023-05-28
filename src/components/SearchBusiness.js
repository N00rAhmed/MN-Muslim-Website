import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import PublicViewingDetails from './PublicViewingDetails';
import '../styles/admin.css';

const SearchBusiness = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Fetch data from API and set the initial businesses state
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from API
  const fetchData = () => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API
    fetch('http://localhost:4000/api/businesses')
      .then(response => response.json())
      .then(data => {
        setBusinesses(data);
      })
      .catch(error => {
        console.error('API error:', error);
      });
  };
  const handlePostClick = (business) => {
    navigate(`/detail?title=${encodeURIComponent(business.title)}&description=${encodeURIComponent(business.description)}&address=${encodeURIComponent(business.address)}&number=${encodeURIComponent(business.number)}&services=${encodeURIComponent(business.services)}&links=${encodeURIComponent(business.links)}&workingHours=${encodeURIComponent(business.workingHours)}&createdAt=${encodeURIComponent(business.createdAt)}`);
  };


  // Update filteredBusinesses based on user input
  useEffect(() => {
    const filtered = businesses.filter(business => {
      const title = business.title.toLowerCase();
      return title.includes(searchTerm.toLowerCase());
    });
    setFilteredBusinesses(filtered);
  }, [searchTerm, businesses]);

  
  return (
    <div>
      <input
        type="text"
        placeholder="Search Business"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <ul>
            <div className='home'>
                <div className='workouts'>
                    {filteredBusinesses.map(business => (
                    <div className='workout-details' key={business._id}>
                                <h4>{business.title}</h4>
        <p>
          <strong>description: </strong>
          {business.description}
        </p>
        <p>
          <strong>address: </strong>
          {business.address}
        </p>
        <p>
          <strong>phone number: </strong>
          {business.number}
        </p>
        <p>
          <strong>services: </strong>
          {business.services}
        </p>
        <p>
          <strong>links: </strong>
          <a href={business.links}>{business.links}</a>
        </p>
  
        <p>
          <strong>working hours: </strong>
          {business.workingHours}
        </p>
        <p>{business.createdAt}</p>

        <button onClick={() => handlePostClick(business)}>detail</button>


                    </div>
                    ))}

                </div>
            </div>
        </ul>
      )}
    </div>
  );
};

export default SearchBusiness;

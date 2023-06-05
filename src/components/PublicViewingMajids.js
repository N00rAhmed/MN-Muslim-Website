import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PublicViewingMajids = () => {
  const [masjids, setMasjids] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMasjids = async () => {
      try {
        const response = await fetch('https://mnmuslims-api.onrender.com/api/masjids/'); // Replace '/api/masjids' with your actual API endpoint
        const data = await response.json();
        setMasjids(data);
      } catch (error) {
        console.error('Error fetching masjids:', error);
      }
    };

    fetchMasjids();
  }, []);
  
  const handlePostClickMasjid = (masjid) => {
    navigate(`/detailmasjid?Name=${encodeURIComponent(masjid.Name)}&address=${encodeURIComponent(masjid.Address)}&address=${encodeURIComponent(masjid.Address)}`);
  };

  return (
    <div>
      {masjids.map((masjid) => (
        <div key={masjid._id} className="workout-details">

<a href="#" onClick={() => handlePostClickMasjid(masjid)}>
                    <h4>{masjid.Name}</h4>
                </a>
          <p>
            <strong>Address: </strong>
            {masjid.Address}
          </p>
        <p>
            <strong>Jumuah Timings/Language: </strong>
            {masjid['JumuahTimings/Language']}
          </p>
          <p>
            <strong>Address: </strong>
            {masjid.Address}
          </p>
          <p>
            <strong>DailySalat(Yes/No): </strong>
            {masjid['DailySalat(Yes/No)']}
          </p>
          <p>
            <strong>Organization Info: </strong>
            {masjid.OrganizationInfo}
          </p>
          <p>
            <strong>Additional Notes: </strong>
            {masjid.AdditionalNotes}
          </p>
          <p>
            <strong>Contact Info: </strong>
            {masjid['ContactInfo/Person']}
          </p>


{/* ContactInfo */}
{/* AdditionalNotes */}
{/* Organization Info */}
{/* Daily Salat (Yes/No) */}

        </div>
      ))}
    </div>
  );
};

export default PublicViewingMajids;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PublicViewingMajids = () => {
  const [masjids, setMasjids] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMasjids = async () => {
      try {
        const response = await fetch('/api/masjids'); // Replace '/api/masjids' with your actual API endpoint
        const data = await response.json();
        setMasjids(data);
      } catch (error) {
        console.error('Error fetching masjids:', error);
      }
    };

    fetchMasjids();
  }, []);

  return (
    <div>
      {masjids.map((masjid) => (
        <div key={masjid._id} className="workout-details">

          <h4>{masjid.Name}</h4>
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
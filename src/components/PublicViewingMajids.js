import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PublicViewingMajids = () => {
  const [masjids, setMasjids] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMasjids = async () => {
      try {
        const response = await fetch('https://mnmuslims-api.onrender.com/api/masjids/');
        const data = await response.json();
        setMasjids(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching masjids:', error);
      }
    };

    fetchMasjids();
  }, []);

  const handleCardClick = (masjid) => {
    navigate(`/detailmasjid?Name=${encodeURIComponent(masjid.Name)}&address=${encodeURIComponent(masjid.Address)}&jumuah=${encodeURIComponent(masjid['JumuahTimings/Language'])}&dailySalat=${encodeURIComponent(masjid['DailySalat(Yes/No)'])}&orgInfo=${encodeURIComponent(masjid.OrganizationInfo)}&notes=${encodeURIComponent(masjid.AdditionalNotes)}&contact=${encodeURIComponent(masjid['ContactInfo/Person'])}`);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        masjids.map((masjid) => (
          <div key={masjid._id} className="workout-details">
            <h4 onClick={() => handleCardClick(masjid)}>{masjid.Name}</h4>
            <p>
              <strong>Address: </strong>
              {masjid.Address}
            </p>
            <p>
              <strong>Jumuah Timings/Language: </strong>
              {masjid['JumuahTimings/Language']}
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
          </div>
        ))
      )}
    </div>
  );
};

export default PublicViewingMajids;

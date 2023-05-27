import {React, useState, useEffect} from 'react'
import moment from 'moment';
import '../styles/footer.css'

function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    const year = moment().format('YYYY');
    setCurrentYear(year);
  }, []);
  
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <p>&copy; 2023 Your Website. All rights reserved.</p> */}

        <footer>
          <p>&copy; {currentYear} mnmuslims all rights reserved</p>
        </footer>

      </div>
    </footer>
  )
}

export default Footer
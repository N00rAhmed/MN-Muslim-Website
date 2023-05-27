import {React, useState, useEffect} from 'react'
import '../styles/footer2.css'
import moment from 'moment';

function Footer2() {
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    const year = moment().format('YYYY');
    setCurrentYear(year);
  }, []);

  return (
    <footer className="Footer">
      <div className="footer-Content">
          <p>&copy; {currentYear} mnmuslims all rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer2
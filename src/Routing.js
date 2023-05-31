import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Directory from './Pages/Directory';
import Admin from './Pages/Admin';
import Masjid from './Pages/findMasjid';
import Business from './Pages/findBusiness';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import PublicViewingDetails from './components/PublicViewingDetails';
import DetailMasjid from './components/DetailMasjid';
import BusinessForm from './components/BusinessForm.js';
import Detail from './components/Detail';
import AdminAnnouncement from './Pages/AdminAnnouncement';
import CarouselForm from './components/CarouselForm'
import Nav from './components/Nav';

function Routing() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route
            path="/"
            element={ <Home /> }
        />
        {/* The next line is very important for the Navigate component to work */}
        <Route
            path="/about"
            element={ <About /> }
        />
        <Route
            path="/contact"
            element={ <Contact/> }
        />
        <Route
            path="/directory"
            element={ <Directory/> }
        />

        <Route
            path="/findMasjid"
            element={ <Masjid/> }
        />
        <Route
            path="/findBusiness"
            element={ <Business/> }
        />
        <Route
            path="/footer"
            element={ <Footer/> }
        />
        <Route
            path="/admin"
            element={ <Admin/> }
        />
        
        <Route
            path="/form"
            element={ <BusinessForm /> }
        />
        <Route
            path="/footer2"
            element={ <Footer2 /> }
        />

        <Route
            path="/detail"
            element={ <Detail /> }
        />

        <Route
            path="/view"
            element={ <PublicViewingDetails /> }
        />

        <Route
            path="/detailmasjid"
            element={ <DetailMasjid /> }
        />

        <Route
            path="/AdminAnnouncement"
            element={ <AdminAnnouncement /> }
        />
        
        <Route
            path="/CarouselForm"
            element={ <CarouselForm /> }
        />

{/* CarouselForm.js */}
{/* AdminAnnouncement */}
{/* DetailMasjid */}
{/* PublicViewingDetails */}
{/* Footer2 */}
{/* Admin */}
{/* Footer */}


    </Routes>
    
    <Footer />
</BrowserRouter>
)
}

export default Routing
import React from 'react'
import Landing from './pages/landing'
import Navbar from './component/navbar'
import Footer from './component/footer'
import ServicePages from './pages/servicePages'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/aboutPage'
import More from './component/servicePageComponent/more'
  
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
     <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path="/" element={<Landing />} />
       <Route path="/services" element={<ServicePages />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/more" element={<More />} />
      </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default App
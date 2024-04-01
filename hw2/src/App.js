import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Loader from './Components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Set loading to false when the page finishes loading
    };

    window.addEventListener('load', handleLoad); // Add event listener for page load

    return () => {
      window.removeEventListener('load', handleLoad); // Remove event listener on component unmount
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

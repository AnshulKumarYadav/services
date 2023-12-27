import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ClientQuotes from './Components/ClientQuotes';
import Contacts from './Components/Contacts';
import Work from './Components/Work';
import Services from './Components/Services';
import FAQ from './Components/FAQ';

function App() {
  return (
      <Router>
        <Navbar />
        <Home />
        <About />
        <Work/>
        <Services/>
        <ClientQuotes/>
        <FAQ/>
        <Contacts/>
      </Router>
  );
}

export default App;

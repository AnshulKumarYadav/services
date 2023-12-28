import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Services from './Components/Services';
import ClientQuotes from './Components/ClientQuotes';
import Contacts from './Components/Contacts';
import FAQ from './Components/FAQ';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Services />
      <ClientQuotes />
      <FAQ />
      <Contacts />
    </>
  );
}

export default App;

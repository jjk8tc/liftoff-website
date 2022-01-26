import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contacts from './components/pages/Contacts';
import Quote from './components/pages/Quote';
import Footer from './components/Footer';

function App() {
  // onSubmit = (fields) => {
  //   console.log('App comp got: ', fields);

  // };

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      {/* <Form onSubmit={fields => this.onSubmit(fields)}/> */}
      <Footer />
    </Router>
    </>
  );
}

export default App;

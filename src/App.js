import React from 'react'
import Featured from './components/featured/Featured'
import Best from './components/best/Best'
import mainBlock from './components/mainBlock/mainBlock'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <mainBlock />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;

import React from 'react';

//components
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import MyCarousel from './components/MyCarousel';
import ContactMe from './components/ContactMe';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <MyCarousel/>
      <ContactMe/>
    </div>
  );
}

export default App;

import React from 'react';

//components
import MyNavbar from './components/MyNavbar';
import Introduction from './components/Introduction';
import MyCarousel from './components/MyCarousel';
import ContactMe from './components/ContactMe';


const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <Introduction />
      <MyCarousel />
      <ContactMe />
    </div>
  );
}

export default App;

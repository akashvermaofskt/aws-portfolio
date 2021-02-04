import React from 'react';

//components
import MyNavbar from './components/MyNavbar';
import Introduction from './components/Introduction';
import MyCarousel from './components/MyCarousel';
import ContactMe from './components/ContactMe';


const App = () => {
  return (
    <div className="App">
      <div style={{ "width": "100%", "backgroundColor": "yellow", "textAlign": "center" }}>
        <span> !-- Life blog coming soon, checkout my portfolio for now --! </span>
      </div>
      <MyNavbar />
      <Introduction />
      <MyCarousel />
      <ContactMe />
    </div>
  );
}

export default App;

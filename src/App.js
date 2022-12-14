import './App.css';
import { useState, useEffect } from 'react';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    setMobileView(false);
  }, []);

  return (
    <div className="app">
      <Navbar mobileView = {mobileView} setMobileView = {setMobileView} />
      {
        !mobileView &&
        <>
          <Content />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;

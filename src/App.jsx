
import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/sections/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import {Home} from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import "./index.css";
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const [isLoaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)}/>}{""}
      <div className={`page-shell min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } text-gray-100`}
      >

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <ContactSection/>
        <Footer/>

      </div>
    </>
  );
}

export default App;

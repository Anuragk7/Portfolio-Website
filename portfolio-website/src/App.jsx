
import './App.css'
import Navbar from './Navbar'
import Info from './Info'
import About from './About';
import Projects from './Projects';
// import { scrollSpy } from 'react-scroll';
// import React, {useEffect} from 'react';
function App() {
  

  return (
    <div >
     <Navbar/>
      <Info/> 
      <About />
      <Projects/>
    </div>
  );
}

export default App
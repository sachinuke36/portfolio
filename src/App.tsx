import './App.css'
// import About from './components/About/About'
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation'
import Projects from './components/Projects/Projects'
import About2 from './components/About/About2'
import Experiences from './components/Experieces/Experiences'
import Contact from './components/contact/Contact'
import { useState } from 'react'
function App() {
  const [display, setDisplay] = useState(false)

  return (
  <div>
    <Navigation display={display} setDisplay={setDisplay}/>
      <Home setDisplay={setDisplay} />
      <About2 setDisplay={setDisplay}/>
      <Experiences setDisplay={setDisplay}/>
      <Projects setDisplay={setDisplay}/>
      <Contact setDisplay={setDisplay}/>
  </div>
   
  )
}

export default App


// const [isSelected, setSelected] = useState();

  // const handleInitialSelectedChange = (newSelected) => {
  //   setSelected(newSelected);
  // }; // getting the values from child component


  // console.log(isSelected);

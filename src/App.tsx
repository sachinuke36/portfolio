import './App.css'
// import About from './components/About/About'
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation'
import Projects from './components/Projects/Projects'
import About2 from './components/About/About2'
import Experiences from './components/Experieces/Experiences'
import Contact from './components/contact/Contact'

function App() {

  return (
  <div>
    <Navigation/>
      <Home/>
      <About2/>
      <Experiences/>
      <Projects/>
      <Contact/>
  </div>
   
  )
}

export default App


// const [isSelected, setSelected] = useState();

  // const handleInitialSelectedChange = (newSelected) => {
  //   setSelected(newSelected);
  // }; // getting the values from child component


  // console.log(isSelected);

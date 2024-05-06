import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'

function App() {

  return (
  <div>
    <Navigation/>
      <Home/>
      <hr/>

     <About/>
     <hr/>
     
      <Services/>
      <hr/>

      <Projects/>
      <hr/>

  </div>
   
  )
}

export default App


// const [isSelected, setSelected] = useState();

  // const handleInitialSelectedChange = (newSelected) => {
  //   setSelected(newSelected);
  // }; // getting the values from child component


  // console.log(isSelected);

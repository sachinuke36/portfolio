import styles from "./Navigation.module.css";
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";



interface navLinksItemProps {
  title: string;
  href: string;
} 



const Navigation = () => {
  const [display, setDisplay] = useState(false)

  const navLinks: navLinksItemProps[] = [
    { title: 'Home', href: 'home' },
    { title: 'About', href: 'about' },
    { title: 'Experience', href: 'experiences' },
    { title: 'Projects', href: 'projects' },
    { title: 'Contact', href: 'contacts' },
  ];

  const handleClick =()=>{
    // console.log('clicked')
    setDisplay((prev) => !prev);
  }

  // class Example extends React.Component {
  //   showSettings (event) {
  //     event.preventDefault();
      
  //   }

  return (
    <>
     <nav className={`${styles.navigation} nav`} >
      <div className="logo">
        <h1>Sachin <span className={`${styles.highlighter}`}>Uke</span></h1>
      </div>
     
      <ul className="navlinks1">
        {
          navLinks.map((link, i) => (
            <li key={i}>
              <Link
                to={link.href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                id={`_${link.href}`}
                className={`${styles.nav_links}`}
              >
                {link.title}
              </Link>
            </li>
          ))
        }
      </ul>

 
 <GiHamburgerMenu onClick={ handleClick} className="burger-menu" />

 <div className= {`${display ? 'display': 'hide'}`} >

  {
          navLinks.map((link, i) => (
           
              <Link
              key={i}
                to={link.href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                id={`_${link.href}`}
                // className={`${styles.nav_links}`}
              >
                {link.title}
              </Link>
            
          ))
        }
 </div>

      
    </nav>
    </>
  )
}

export default Navigation;


/* import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
      <Items />
    </motion.nav>
  )
} */





  // const [selected, setSelected] = useState('home');
  // const [prev, setPrev] = useState('');

  // const handleClick = (section: string) => {
  //   // Set previous selected link's color back to white
  //   if (prev !== '') {
  //     const prevElement = document.getElementsByClassName(prev)[0] as HTMLElement;
  //     prevElement.style.color = 'white';
  //   }

  //   // Set selected link's color to red
  //   const currentElement = document.getElementsByClassName(section)[0] as HTMLElement;
  //   currentElement.style.color = 'red';

  //   // Update selected and previous states
  //   setSelected(section);
  //   setPrev(section);
  // }


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll('.active') as NodeListOf<HTMLElement>;
  //     const Clicksections = document.querySelectorAll('.selected') as NodeListOf<HTMLElement>;

  //     Clicksections.forEach((e) => {
  //       let Id = e.getAttribute('id');
  //       console.log(Id?.substring(1));
  //       handleClick(Id.substring(1));

  //     })

  //     sections.forEach((e) => {

  //       let Id = e.getAttribute('id');
  //       console.log(Id?.substring(1));
  //       handleClick(Id.substring(1));

  //     })

  //     let currentSectionId = '';
  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop - 100; // Adjusted for navigation height
  //       const sectionBottom = sectionTop + section.offsetHeight;
  //       const scrollPosition = window.scrollY;

  //       if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
  //         currentSectionId = section.id;
  //       }
  //     }, [selected]);

  //     //  handleClick(currentSectionId); // Update selected state with the active section ID
  //     console.log(currentSectionId);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });




   {/* <ul>
        <li>
          <Link
            to='home'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            id="_home"
            // onClick={() => handleClick('home')}
            className={`home ${selected === 'home' ? 'selected' : ''}`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            id='_about'
            // onClick={() => handleClick('about')}
            className={`about ${selected === 'about' ? 'selected' : ''}`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
           id='_services'
            // onClick={() => handleClick('services')}
            className={`services ${selected === 'services' ? 'selected' : ''}`}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
           id='_projects'
            // onClick={() => handleClick('projects')}
            className={`projects ${selected === 'projects' ? 'selected' : ''}`}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
           id='_contact'
            // onClick={() => handleClick('contact')}
            className={`contact ${selected === 'contact' ? 'selected' : ''}`}
          >
            Contact
          </Link>
        </li>
      </ul> */}


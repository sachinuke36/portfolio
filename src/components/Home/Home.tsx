import styled from 'styled-components';
import styles from './Home.module.css';
import {motion} from 'framer-motion'



const Home = ({ setDisplay }: { setDisplay: React.Dispatch<React.SetStateAction<boolean>> }) => {

  return (
    <div className={`${styles.container}`} onClick={()=>setDisplay(false)} id='home'>

     <div className={`${styles.image}`}>
            <motion.img
            whileInView={{scale:[0,1.05,1]}}
             src="./images/sachin3.jpg" alt="image-sachin"/>
      </div>



        <div className={`${styles.home__info}`}>
            <motion.h3
            whileInView={{scale:[0,1]}}
            >Hello, It's Me</motion.h3>
            <motion.h1
            whileInView={{scale:[0, 1]}}
            transition={{delay:0.2}}
            >Sachin Uke</motion.h1>
            <motion.h3
            whileInView={{scale:[0, 1]}}
            transition={{delay:0.4}}
            >And I'm <span>Full-stack Developer</span></motion.h3>
           



            <motion.div
            whileInView={{scale:[0, 1]}}
            transition={{delay:0.6}}
             className={`${styles.socialMedia}`}>
                <a href="https://www.facebook.com/sachin.uke.165?mibextid=ZbWKwL"> <i className="bx bxl-facebook"></i> </a>
                <a href="https://twitter.com/sachinuke36?t=IfupBgb0v8AgL4ZgjtWouA&s=08"><i className="bx bxl-twitter"></i></a>
                <a href="https://www.instagram.com/sachin_uke1?utm_source=qr"><i className="bx bxl-instagram-alt"></i></a>
                <a href="https://www.linkedin.com/in/sachin-uke-757892259"><i className="bx bxl-linkedin"></i></a>
            </motion.div>

           <a
           href="https://drive.google.com/file/d/1E1EZUQW1VZdTpNRsX_cLaIVQUWI4qG-e/view?usp=sharing" 
           download
           className={`${styles.cv__btn}`}>
            <Button
            whileTap={{scale:0.95, rotate:'2.5deg'}}>Download CV </Button>
            </a>

        </div>
        
        
      
    </div>
  )
}

export default Home;

export const Button = styled(motion.button)`
   width:220px;
    height:40px;
    border-radius: 40px;
    background: transparent;
    color:aqua;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: 
    1px 1px 5px rgba(0, 0, 0, 0.9), 
    2px 2px 10px rgba(0, 0, 0, 0.3), 
    3px 3px 15px rgba(0, 0, 0, 0.2);
    border: none;
    cursor: pointer;
    
`;

import styled from 'styled-components';
import styles from './Home.module.css';
import {motion} from 'framer-motion'



const Home = () => {

  return (
    <div className={`${styles.container}`} id='home'>

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

           <motion.div 
           whileInView={{scale:[0, 1]}}
           transition={{delay:0.8}}
           className={`${styles.cv__btn}`}>
            <Button>Download CV</Button>
            </motion.div>

        </div>
        
        
      
    </div>
  )
}

export default Home;

export const Button = styled.button`
   width:220px;
    height:40px;
    border-radius: 40px;
    background: var(--main-color);
    color: var(--bg-color);
    font-size: 1.2rem;
    font-weight: 800;
    border: none;
    cursor: pointer;
`;

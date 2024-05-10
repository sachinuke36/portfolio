import styled from 'styled-components';
import styles from './Home.module.css';




const Home = () => {

  return (
    <div className={`${styles.container}`} id='home'>

     <div className={`${styles.image}`}>
            <img src="./images/sachin3.jpg" alt="image-sachin"/>
      </div>



        <div className={`${styles.home__info}`}>
            <h3>Hello, It's Me</h3>
            <h1>Sachin Uke</h1>
            <h3>And I'm <span>Full-stack Developer</span></h3>
           



            <div className={`${styles.socialMedia}`}>
                <a href="https://www.facebook.com/sachin.uke.165?mibextid=ZbWKwL"> <i className="bx bxl-facebook"></i> </a>
                <a href="https://twitter.com/sachinuke36?t=IfupBgb0v8AgL4ZgjtWouA&s=08"><i className="bx bxl-twitter"></i></a>
                <a href="https://www.instagram.com/sachin_uke1?utm_source=qr"><i className="bx bxl-instagram-alt"></i></a>
                <a href="https://www.linkedin.com/in/sachin-uke-757892259"><i className="bx bxl-linkedin"></i></a>
            </div>

           <div className={`${styles.cv__btn}`}>
            <Button>Download CV</Button>
            </div>

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

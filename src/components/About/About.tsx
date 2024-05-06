import {  useState } from 'react'
import styles from './About.module.css'
import AboutInfo from './AboutInfo'
import { Button } from '../Home/Home';
const About = () => {
    const [readMore, setReadMore] = useState(true);
    const [per, setPer] = useState(-10)
  

    
    
        // Handling the read More button
    const handleReadMore = ()=>{
        if(per> -80){
            const p = document.querySelector('.info') as HTMLElement;
            console.log('before per',per);
            setPer((prev)=> prev - 10);
            console.log('per',per);
            p.style.transform = `translateY(${per}%)`;  
        }
       }

       // setting up the Read Less
       if(per=== -80){ setReadMore(false);
        setPer(-10);}

        // Handling the Read Less button
        const handleReadLess = ()=>{
        const p = document.querySelector('.info') as HTMLElement;
        p.style.transform = `translateY(0%)`; 
        setReadMore(true);
       }
      

    return (
                // The container for about section
        <div className={`${styles.about__section}`} id='about'>

                    {/* Top section for about  */}
            <div className={styles.about__head}>
                <h1>About <span>Me</span> </h1>
                <h3>Frontend Developer</h3>
            </div>

                     {/* About Information */}
            <div className={styles.about_info}><AboutInfo readMore={readMore} /> </div>
         
                     {/* Button For Read More and Read Less */}
            <div className={styles.scroll_btn}> {readMore ? <Button onClick={()=>handleReadMore()}>Read More</Button>: <Button onClick={()=>handleReadLess()}>Read Less</Button>}</div> 
        </div>
        
    )
}

export default About

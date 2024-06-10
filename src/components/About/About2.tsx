import './About.css';
import { FaArrowPointer } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";
import {motion} from 'framer-motion'


const About2 = ({ setDisplay }: { setDisplay: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const aboutSectionProps = [
        {
            comp:<FaArrowPointer fontSize={'30px'} />,
            title:'Frond-End Developer',
            info:'I am a front-end developer with experience in building responsive and optimized sites'

        },{
            comp:<IoServer fontSize={'30px'} />,
            title:'Back-End Developer',
            info:'I have experience developing fast and optimized back-end system APIs'
        },{
            comp:<FaArrowPointer fontSize={'30px'} />,
            title:'UI Designer',
            info:'I have designed multiple landing pages and have created designs'
        }
    ]
  return (
    <div
     className='about-section-container' id='about' onClick={()=>setDisplay(false)}>
      <motion.div 
      className='about-section-body'>
            <h1>Ab<span>out</span></h1>
            
                {
                    aboutSectionProps.map((item,id)=>(
                        <div key={id} className='about-section-content'>
                        <div className="about-section-image">
                            {item.comp}
                        </div>
                       <div className="about-section-info">
                            <h3>{item.title}</h3>
                            <p>{item.info}</p>
                         </div>
                </div>
                    ))
                }
                

               
           

      </motion.div>
    </div>
  )
}

export default About2

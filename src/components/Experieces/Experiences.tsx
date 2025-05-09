import './Experiences.css';
import styled from 'styled-components';
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";


const Experiences = ({ setDisplay }: { setDisplay: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const internProps = [
    {
      company: 'Connect | Self Project',
      duration: ' Jan 2025-Jan 2025',
      logo: "",
      description: [
        "Built a real-time chat & video calling app using React, Node.js, Express, and Prisma, enabling seamless communication.",
        "Integrated Socket.IO & WebRTC for real-time messaging and peer-to-peer video calls with low latency.",
        "Implemented authentication & authorization using JWT/OAuth, ensuring secure user access and data protection.",
        "Designed a responsive UI with Tailwind CSS, supporting friend requests, group chats, and search functionality."
      ]
    },

    {
      company: 'foodyZone | Self Project',
      duration: 'Oct 2024-Oct 2024',
      logo: '',
      description: ['Developed a Food Delivery App using Next.js, NextAuth, and TypeScript, with a MongoDB database managing 5,000+ orders.',
              'Implemented Google Sign-In for a seamless user authentication experience and Stripe integration for secure payment processing.', 
              'Built an Admin Dashboard that allows the owner to efficiently add and manage 100+ dishes.',
            "Implemented real-time tracking of order statuses, allowing users to receive timely updates."]
    }, 
    {
      company: 'JobDekho | Self project',
      duration: 'May 2024-June 2024',
      logo: '',
      description: ['Interface for job seekers and employers, Browse, filter jobs, and post job listings.', 'Apply for jobs and upload resumes,  Review resumes, and manage postings', 'CRUD operations for job postings and user data', 'MongoDB for data storage', 'User authentication and authorization']
    },
    {
      company: 'DIY | Sun Tracking Solar Panel | Term Project | IIT Kharagpur',
      duration: 'Feb 2022-March 2022',
      logo: '',
      description: ["The Arduino-based system integrates sensors to detect sunlight angles and motors to adjust the solar panel's position accordingly, ensuring efficient energy capture by consistently orienting towards the sun.", 'Designed a cost-efficient Arduino circuit using an Arduino Uno, breadboard, servo motor, solar panel, resistors, and jumper wires. This circuit not only detects the position of the sun but also rotates such that light rays fall parallel on the solar panel']
    },
  ]
  return (
    <div className='experiences-section' id='experiences' onClick={() => setDisplay(false)}>
      <h1

      >Exper<span>iences</span> </h1>
      <div className="experiences-section-content">
        <div className="languages">
          <Flex>
            <FaHtml5 className='language-item' fontSize={'2rem'} color='#ff0000' />

            <FaReact className='language-item' fontSize={'2rem'} color='#61dafb' />
            <FaCss3Alt className='language-item' fontSize={'2rem'} color='#2965f1' />
            <TbBrandJavascript className='language-item' fontSize={'2rem'} color='yellow' />

            <svg className='language-item' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
              <path fill="#283593" fillRule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clipRule="evenodd"></path><path fill="#5c6bc0" fillRule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clipRule="evenodd"></path><path fill="#3949ab" fillRule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clipRule="evenodd"></path>
            </svg>

            <svg className='language-item' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
              <path fill="#00549d" fillRule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clipRule="evenodd"></path><path fill="#0086d4" fillRule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clipRule="evenodd"></path><path fill="#0075c0" fillRule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clipRule="evenodd"></path>
            </svg>

            <div className='language-item' style={{ background: 'white' }}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="25" viewBox="0 0 50 50">
              <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
            </svg></div>

          </Flex>

        </div>
        <div className="intern ">
          {
            internProps.map((item, i) => (
              <div key={i} className='intern-item'>
                <div className="company-logo">
                  <img src={item.logo} alt="" />
                </div>
                <div className="company-info">
                  <h3 className='company-title'>{item.company}</h3>
                  <p>{item.duration}</p>
                </div>

                <ul className='intern-company-info'>
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}
                    </li>))}
                </ul>

              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Experiences

export const Flex = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  width:100%;
  gap: 2rem;
  
`
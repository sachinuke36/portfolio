import ProjectCard from '../project-card/ProjectCard'
import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      image:'/images/jobdekho-home.png',
      github:'https://github.com/sachinuke36/Encryptix_Projects.git',
      live:'https://jobdekho-jobseeker.netlify.app/',
      title:'JobDekho-for jobseekers'
    },{
      image:'/images/jobdekho-for-employer.png',
      github:'https://github.com/sachinuke36/Encryptix_Projects.git',
      live:'https://jobdekho-employer.netlify.app/',
      title:'JobDekho-for employer'
    }
  ]
  return (
    <div className={styles.projects__container} id='projects'>
      <h1 className='heading'>Proj<span>ects</span></h1>
        <div className="projects flex">
          {
            projects.map((item, k)=><ProjectCard key={k} 
            github={item.github}
            live={item.live}
            title={item.title}
            image={item.image}/>)
          }
        </div>
      
    </div>
  )
}

export default Projects

import './ProjectCard.css'
const ProjectCard = ({image, github, live, title}:{image:string, github:string, live:string, title:string}) => {
  return (
    <div className='card'>
      <div className='image'>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div className="links">
        <button onClick={()=>window.location.href=github}>Github</button>
        <button onClick={()=>window.location.href=live}>Live demo</button>
      </div>
    </div>
  )
}

export default ProjectCard

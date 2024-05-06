import '../../App.css'
const AboutInfo = ({readMore}:{readMore:boolean}) => {


  return (
    <p className={`${!readMore ? "scroll":""} info`}>
      Hello! I am currently pursuing my studies at the prestigious Indian Institute of Technology, where I am honing my skills and passion for web development. My journey into the world of technology began with a keen interest in creating captivating online experiences, and over time, I've developed a strong foundation in various programming languages and frameworks.

My proficiency spans across a spectrum of languages and tools, including HTML, CSS, JavaScript, React, C++, and C. These versatile tools allow me to craft dynamic and interactive web applications that engage users and deliver exceptional experiences.

One of my primary interests lies in web development, and I am deeply passionate about exploring the endless possibilities that the field offers. With a focus on front-end development, I specialize in creating visually appealing and user-friendly interfaces that seamlessly blend form with function. Whether it's designing elegant layouts, implementing intricate animations, or optimizing performance, I thrive on the creative challenges that web development presents.

Throughout my academic journey and personal projects, I have delved into the realm of React, a powerful JavaScript library for building user interfaces. Leveraging its capabilities, I have successfully completed several projects that demonstrate my ability to translate ideas into tangible digital experiences. From crafting responsive designs to implementing complex functionalities, I take pride in delivering solutions that exceed expectations.

As I embark on the next phase of my career, I am eagerly seeking opportunities to apply my skills and contribute to innovative web development projects. I am enthusiastic about collaborating with talented teams and tackling new challenges that push the boundaries of what's possible in the digital landscape.

In addition to my technical expertise, I bring a strong work ethic, a passion for learning, and a collaborative mindset to any project I undertake. I am committed to continuous growth and staying updated with the latest advancements in web development, ensuring that I deliver solutions that are not just current but also future-proof.

If you're seeking a dedicated and skilled web developer who is adept at creating responsive and intuitive websites, I would love to connect and explore how I can contribute to your team's success. Together, let's embark on a journey to create impactful digital experiences that resonate with users around the globe.
    </p>
  )
}

export default AboutInfo

import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-page' id='contact'>
      
      <form  className='contact-form'>
      <h1>Contact <span> Me</span></h1>
        <div className="name flex-col">
            <label htmlFor="Name">Name</label>
            <input type="text" name="name"/>
        </div>
        <div className="email flex-col">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" />
        </div>
        <div className="contact-number flex-col">
            <label htmlFor="contact-number">Phone number</label>
            <input type="tel" name="phone" />
        </div>
        <div className="message flex-col">
            <label htmlFor="message">Message</label>
            <textarea name="message"/>
        </div>
        <div className="button">
            <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact

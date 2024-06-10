import './Contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ setDisplay }: { setDisplay: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendMail = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_254tyx8', 'template_el3yf8g', form.current, 'hvjjzrtekN_1vQ6it')
        .then(() => {
          toast.success("Message sent successfully!",{theme: "dark"});
        }, () => {
          toast.error('Failed to send the message, please try again.',{theme: "dark"});
        });
    }
  }
  return (
    <div className='contact-page' id='contact' onClick={()=>setDisplay(false)}>
      
      <form  ref={form} onSubmit={sendMail} className='contact-form'>
      <h1>Contact <span> Me</span></h1>
        <div className="name flex-col">
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" required/>
        </div>
        <div className="email flex-col">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" required />
        </div>
        <div className="contact-number flex-col">
            <label htmlFor="contact-number">Phone number</label>
            <input type="tel" name="phone" required />
        </div>
        <div className="message flex-col">
            <label htmlFor="message">Message</label>
            <textarea name="message" required/>
        </div>
        <div className="button">
            <button type="submit">Send</button>
        </div>
      </form>
     <div className='toast-container'> <ToastContainer/></div> 
    </div>
  )
}

export default Contact

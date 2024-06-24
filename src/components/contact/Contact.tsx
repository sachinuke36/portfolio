import './Contact.css'
import { useRef, useState } from 'react'
// import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ setDisplay }: { setDisplay: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const form = useRef<HTMLFormElement>(null);
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
    access_key:'3ca837a8-1884-47cf-a574-078d40d77945'
  })
  

  const sendMail = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();



    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(inputs)
  })
  .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
          toast.success(json.message);
      } else {
           toast.error(json.message);
      }
  })
  .catch(error => {
     toast.error(error.message);
  })
  


console.log(inputs);



    // if (form.current) {
    //   emailjs.sendForm('service_254tyx8', 'template_el3yf8g', form.current, 'hvjjzrtekN_1vQ6it')
    //     .then(() => {
    //       toast.success("Message sent successfully!",{theme: "dark"});
    //     }, () => {
    //       toast.error('Failed to send the message, please try again.',{theme: "dark"});
    //     });
    // }
  }
  return (
    <div className='contact-page' id='contact' onClick={()=>setDisplay(false)}>
      
      <form  ref={form} onSubmit={sendMail} className='contact-form'>
      <input type="hidden" name="access_key" value="3ca837a8-1884-47cf-a574-078d40d77945"/>

      <h1>Contact <span> Me</span></h1>
        <div className="name flex-col">
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" required value={inputs.name} onChange={(e)=>setInputs(prev=>({...prev, name:e.target.value}))}/>
        </div>
        <div className="email flex-col">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" required value={inputs.email} onChange={(e)=>setInputs(prev=>({...prev, email:e.target.value}))} />
        </div>
        <div className="contact-number flex-col">
            <label htmlFor="contact-number">Phone number</label>
            <input type="tel" name="phone" required value={inputs.phone} onChange={(e)=>setInputs(prev=>({...prev, phone:e.target.value}))} />
        </div>
        <div className="message flex-col">
            <label htmlFor="message">Message</label>
            <textarea name="message" required value={inputs.message} onChange={(e)=>setInputs(prev=>({...prev, message:e.target.value}))}/>
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

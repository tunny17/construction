import React from 'react'
import './Contact.css'



const Contact = () => {

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }
// //   const formId = 'ADDOwWuO';
// //   const formSparkUrl = `https://submit-form.com/${formId}`;

//   const submitForm = async (event: FormEvent) => {
//     event.preventDefault();
//     // await postSubmission();
//   };

// //   const postSubmission = async () => {
// //     const payload = {
// //         message: 'teesssst'
// //     };

// //     try {
        
// //     } catch(error) {

// //     }
// //   }
  return (
    <div    className='contact-container'   data-scroll-section>
      <h1 className='contact-header'>Contact Our Team</h1>
      <form>
        <label htmlFor="name">Name <br />
          <input type="text" id='name'  placeholder='Type your name here'/>
        </label>
        <br />
        <label htmlFor="email">Email <br />
          <input type="email" id='email' placeholder='Type your email here'/>
        </label>
        <br />
        <label htmlFor="message">Message <br />
          <input type="text"  id='message' placeholder='Type your message here'/>
        </label>
        <br />
        <button className='contact-us-btn'>Submit</button>
      </form>
      <div  className='contacts'>
        <h3>Address</h3>
        <p>Portobello Point 2. <br /> Sheffield, United Kingdom.</p>
        <p>No 27, Moore Road. <br /> Yaba, Lagos.</p>
        <p>
          Email:  <Mailto className='mailto' email="foo@tosinbabatunde@infospacexpat.com" subject="Hello" body="Hello Mr Tosin!"> tosinbabatunde@infospacexpat.com</Mailto>
        </p>
        <p>
          Reach us on <a href="http://www.linkedin.com/in/spaceville-limited-767b111a5">LinkedIn</a>
        </p>
      </div>
      
    </div>
  )
}

export default Contact
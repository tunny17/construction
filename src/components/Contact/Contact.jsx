import React from 'react'
import './Contact.css'

const Contact = () => {
//   const formId = 'ADDOwWuO';
//   const formSparkUrl = `https://submit-form.com/${formId}`;

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    // await postSubmission();
  };

//   const postSubmission = async () => {
//     const payload = {
//         message: 'teesssst'
//     };

//     try {
        
//     } catch(error) {

//     }
//   }

  return (
    <div    className='contact-container'   data-scroll-section>
      <h1 className='contact-header'>Contact Our Team</h1>
      <form onSubmit={submitForm}>
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
    </div>
  )
}

export default Contact
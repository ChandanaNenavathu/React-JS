import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Contact Page</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5265436559!2d76.76355395429677!3d28.643684576935854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1688063109638!5m2!1sen!2sin" width="100%" height="450" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xeqbjpqq" method='POST' className='contact-inputs'>
              <input type="text" placeholder='username' name='username' required autoComplete='off'/>
              <input type="email" name='Email' placeholder='Email' required autoComplete='off'/>
              <textarea name="message" id="" cols="30" rows="10" required autoComplete='off' placeholder='Enter Your Name'></textarea>
              <input type="submit" value={"send"} />
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact

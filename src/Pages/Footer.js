import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter,FaYoutube, FaPlay, FaTiktok } from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Footer = () => {


  return (
    <div className='container'>
      < div className='footer'>
      <div className='followUs'>
         <p>Follow Us</p>
            </div>
           <div className='terms'>
              <p>Privacy Policy</p>
              <p className='dash'>-</p>
              <p>Terms of Use</p>    
           
          </div>
         </div>  
         
           <div className='icons'>
                    <Link to='https://www.facebook.com/josh.mar.507679' target='blank'><span  className='links'><FaFacebook /></span></Link>
                    <Link to='https://www.linkedin.com/in/jehros-rina-a67770251/' target='blank'><span className='links'><FaLinkedin /></span></Link>
                    <Link ><span className='links'> <FaTwitter /></span></Link>
                    <Link ><span className='links'><FaYoutube /></span></Link>
                    <Link ><span className='links'><FaPlay /></span></Link>
                      <Link ><span className='links'><FaTiktok /></span></Link>
           </div>
         </div> 
     
      
  )
}

export default Footer
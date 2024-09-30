import React from 'react'
import { Icon } from 'react-icons-kit';
import { youtubePlay } from 'react-icons-kit/fa/youtubePlay';
import { twitter } from 'react-icons-kit/fa/twitter';
import { facebook } from 'react-icons-kit/fa/facebook';
import { whatsapp } from 'react-icons-kit/fa/whatsapp';
const Footer = () => {
  return (
    <div>
         <footer>
            <div className="logo">
                <img src="Assets/logo.jpg" alt="" />
            </div>

           <div className="social-icons">
           <h4>Follow Us On:</h4>
      <div className='icons'>
        <Icon icon={youtubePlay} size={25} />
        <Icon icon={twitter} size={25} />
        <Icon icon={facebook} size={25} />
        <Icon icon={whatsapp} size={25} />
      </div>
           </div>
            
        </footer>
    </div>
  )
}

export default Footer
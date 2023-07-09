import React from 'react'
import antonioImage from './antonio.jpeg';

import be from './social_icon/link_behance.svg'
import dr from './social_icon/link_dribbble.svg'
import fb from './social_icon/link_facebook.svg'
import insta from './social_icon/link_instagram.svg'
import wa from './social_icon/link_whatsapp.svg'

import './User.css';

function User() {
  return (
  <div className='user_container'>

    <div className='user_row padding60'>

      <img src={antonioImage} alt="Hack4Pizza" className='user_img' />

      <div>
        <h1>Antonio</h1>
        <br></br>
        <h3>Naples, Italy</h3>
        <h3>Member Since 2019</h3>
      </div>

    </div>


      <div className='user_row padding60'>

          <div>
            <h2 className='bio'>Biography</h2>
            <br></br>
            <p className='bio lilla'>This is a bio, empty but always a bio.</p>
          </div>

          <div className='spostati'>
            <h2>Social</h2>
            <br></br>
            <div className='user_row'>
            <img src={be} alt="Hack4Pizza" className='user_icons' />
            <img src={dr} alt="Hack4Pizza" className='user_icons' />
            <img src={fb} alt="Hack4Pizza" className='user_icons' />
            <img src={insta} alt="Hack4Pizza" className='user_icons' />
            <img src={wa} alt="Hack4Pizza" className='user_icons' />
            

            </div>
          </div>
     
      </div>

  </div>
  )
}

export default User
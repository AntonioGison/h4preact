import React, {useState} from 'react'
import antonioImage from './antonio.jpeg';

import be from './social_icon/link_behance.svg'
import dr from './social_icon/link_dribbble.svg'
import fb from './social_icon/link_facebook.svg'
import insta from './social_icon/link_instagram.svg'
import wa from './social_icon/link_whatsapp.svg'
import './User.css';

/*Function to open and close settings */
function openForm() {
  document.getElementById("form").classList.toggle("form-show");
  document.getElementById("form-bg").style.display = "block";
}
function closeForm() {
  document.getElementById("form").classList.toggle("form-show");
  document.getElementById("form-bg").style.display = "none";
}


function User() {
  const [bio, setBio] = useState('This is a bio, empty but always a bio.')

  return (
  <div className='user_container'>
    
    <form id="form" className="form">
      <button id="form-bg" className="form-close-button" onClick={closeForm}>X</button>
      <br></br>
       <h2>Settings</h2>
       <input type="text" placeholder="Bio" value={bio} onChange={(e) => setBio( e.target.value)}></input>
    </form>



    <div className='user_col user_row padding60 mobileonly'>

      <img src={antonioImage} alt="Hack4Pizza" className='user_img' />

      <div>
        <h1>Antonio</h1>
        <button id="button" className="open-form-button" onClick={openForm}>Settings</button>
        <br></br>
        <h3>Naples, Italy</h3>
        <h3>Member Since 2019</h3>
      </div>

    </div>


      <div className='user_col user_row padding60'>

          <div>
            <h2 className='bio'>Biography</h2>
            <br></br>
            <p className='bio lilla'>{bio}</p>
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
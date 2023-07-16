import React, {useState} from 'react'
import antonioImage from './antonio.jpeg';

import be from './social_icon/link_behance.svg'
import dr from './social_icon/link_dribbble.svg'
import fb from './social_icon/link_facebook.svg'
import ig from './social_icon/link_instagram.svg'
import wa from './social_icon/link_whatsapp.svg'
import './User.css';

/*Function to open and close settings */
function openForm(e) {
  e.preventDefault(); 
  document.getElementById("form").classList.toggle("form-show");
  document.getElementById("form-bg").style.display = "block";
}
function closeForm() {
  document.getElementById("form").classList.toggle("form-show");
  document.getElementById("form-bg").style.display = "none";
}
const handleSubmit = (e) => {
  e.preventDefault();
};

function User() {
  const [bio, setBio] = useState('This is a bio, empty but always a bio.')
  const [facebook, setFacebook] = useState('remove it later')
  const [instagram, setInstagram] = useState('remove it later')
  const [whatsapp, setWhatsapp] = useState('remove it later')
  const [behance, setBehance] = useState('remove it later')
  const [dribbble, setDribbble] = useState('remove it later')

  return (
  <div className='user_container'>
    
     {/* Settings form */}
    <form id="form" className="form"  onSubmit={handleSubmit} >
      {/* method='post' */}
      <button id="form-bg" className="form-close-button" onClick={closeForm}>X</button>
      <br></br>

      
       <h2>Settings</h2>
       <div className="center">
  <label htmlFor="bio">Add your bio:</label>
  <input id="bio" type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)}></input>
  <br></br>
  <label htmlFor="behance">Add Behance:</label>
  <input id="behance" type="text" placeholder="Behance" value={behance} onChange={(e) => setBehance(e.target.value)}></input>
  <br></br>
  <label htmlFor="dribbble">Add Dribble:</label>
  <input id="dribbble" type="text" placeholder="Dribble" value={dribbble} onChange={(e) => setDribbble(e.target.value)}></input>
  <br></br>
  <label htmlFor="facebook">Add Facebook:</label>
  <input id="facebook" type="text" placeholder="Facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)}></input>
  <br></br>
  <label htmlFor="instagram">Add Instagram:</label>
  <input id="instagram" type="text" placeholder="Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)}></input>
  <br></br>
  <label htmlFor="whatsapp">Add Whatsapp:</label>
  <input id="whatsapp" type="text" placeholder="Whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}></input>
  <br></br>
  <input type="submit" value="Save"></input>
</div>

      
    </form>
      {/* Settings form end */}



    <div className='user_col user_row padding60 mobileonly'>

      <img src={antonioImage} alt="Hack4Pizza" className='user_img' />
      <div>
        <div className='user_row'>
        <h1>Antonio</h1>
        <button id="button" className="open-form-button" onClick={openForm}>Settings</button>

        </div>
     
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

            { behance ? ( <a href={behance} target="_blank" rel="noopener noreferrer" >
              <img src={be} className='user_icons' alt="behance Profile" />  </a> ) : null }

            { dribbble ? ( <a href={dribbble} target="_blank" rel="noopener noreferrer" >
              <img src={dr} className='user_icons' alt="Dribble Profile" />  </a> ) : null }

            { facebook ? ( <a href={facebook} target="_blank" rel="noopener noreferrer" >
              <img src={fb} className='user_icons' alt="Facebook Profile" />  </a> ) : null }

            { instagram ? ( <a href={instagram} target="_blank" rel="noopener noreferrer" >
              <img src={ig} className='user_icons' alt="Instagram Profile" />  </a> ) : null }

            { whatsapp ? ( <a href={whatsapp} target="_blank" rel="noopener noreferrer" >
              <img src={wa} className='user_icons' alt="Whatsapp Profile" />  </a> ) : null }
            

            </div>
          </div>
     
      </div>

  </div>
  )
}

export default User
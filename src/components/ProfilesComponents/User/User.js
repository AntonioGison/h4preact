import React from 'react'

function User() {
  return (
    <div className='user_container'>

      <div className='user_row'>

      <img className="body_hero"
        src={require("../User/antonio.jpeg").default}
        alt="Hack4pizza user image"
        width="500"
      />
      <div>
        <h1>Antonio</h1>
        <h3>Naples, Italy</h3>
        <h3>Member Since 2019</h3>
      </div>

      </div>


      <div className='user_row'>

      </div>
    </div>
  )
}

export default User
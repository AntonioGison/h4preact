import React from 'react'

import './Profile.css'
import User from '../ProfilesComponents/User/User'
import Performance from '../ProfilesComponents/Performance/Performance'
import Badges from '../ProfilesComponents/Badges/Badges'
import HackathonsList from '../ProfilesComponents/HackathonsList/HackathonsList'

function Profile() {
  return (
    <main className="background-dark ">
    <User />
    <div className='row_profile'>
    <Performance />
    <Badges />
    </div>
    <HackathonsList />
    </main>
  )
}

export default Profile
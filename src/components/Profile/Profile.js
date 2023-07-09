import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Profile.css'
import User from '../ProfilesComponents/User/User'
import Performance from '../ProfilesComponents/Performance/Performance'
import Badges from '../ProfilesComponents/Badges/Badges'
import HackathonsList from '../ProfilesComponents/HackathonsList/HackathonsList'

function Profile() {
  return (
    <main className="background-dark">
    <User />
    <Performance />
    <Badges />
    <HackathonsList />
    </main>
  )
}

export default Profile
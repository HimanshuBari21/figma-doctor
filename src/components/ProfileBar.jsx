import React from 'react'

import "../styles/colors.css"

import Profile from "../images/profile.png"

function ProfileBar() {
  return (
    <>
        <div className="container">
            <div className="row p-2">
                <div className="col-6">
                    <span className=''>
                    <h1>Hello,</h1>
                    <h2 className='text-ourBlue'>Charles Miller</h2>
                    </span>
                </div>
                <div className="col-6">
                    <img className='Profile' src={Profile} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileBar
import React from 'react'

import "../styles/colors.css"

import Bell from '../icons/bell.png'
import Menu from '../icons/menu.png'
import Logo from '../images/logo.png'

function Nav() {
  return (
    <>
        <div className="container py-2">
            <div className="row">
                <div className="col-6">
                    <img className='logo' src={Logo} alt="" />
                </div>
                <div className="col-6">
                    <img className="nav-icons mt-3 mx-3 text-bold" src={Menu} alt="" />
                    <img className="nav-icons mt-3 mx-3 text-bold" src={Bell} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav
import React from 'react'
import Search from '../icons/search.png'
import ArrowEast from "../icons/arrowtoeast.png"

import "../styles/colors.css"

import Doctor from "../images/doctor.png"

const DoctorBg = {
    width: "80vw",
    position: "absolute",
    top: '255px',
    right: "0"
}

const DoctorBg2 = {
    border: "10px solid #F6F4F7",
    borderRadius: "20px"
}

const Arrow2East = {
    height: "60px",
    padding: "10px 20px",
    margin: "10px 20px"
}

function SearchExplore() {
    return (
        <>
            <div className="container">
                <div className="row mx-1 my-2 rounded" style={{ backgroundColor: "white" }}>
                    <div className="col-8" style={{ height: "40px" }}>
                        <p className='py-2'>SearchDoctor</p>
                    </div>
                    <div className="col-4 pt-1">
                        <button className='btn btn-sm our-yellow w-100'>
                            <img src={Search} className="" alt="" />
                        </button>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="container">
                    <div className="container pt-2 our-blue p-5" style={DoctorBg2}>
                        <br />
                        <h1 className='text-light'>Explore Top Doctors</h1>
                        <h5>with rating and reviews</h5>
                        <br />
                        <br />
                        <button className='btn btn-sm our-yellow'>
                            <img src={ArrowEast} style={Arrow2East} className="" alt="" />
                        </button>
                    </div>
                </div>
            <img src={Doctor} style={DoctorBg} alt="" />
            </div>
        </>
    )
}

export default SearchExplore
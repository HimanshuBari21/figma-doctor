import React from 'react'

import Call from "../icons/Vector-1.png"

function BottomNav() {
    return (
        <>
            <div className="contanier position-absolute bg-light p-2" style={{width: "100%"}}>
                <div className="row">
                    <div className="col-4">
                        <button className='btn mx-2 px-3'>Home</button>
                    </div>
                    <div className="col-8" style={{float: "right"}}>
                        <div className="row">
                            <div className="col-4"><button className='btn'><img src={Call} alt="" /></button></div>
                            <div className="col-4"><button className='btn'><img src={Call} alt="" /></button></div>
                            <div className="col-4"><button className='btn'><img src={Call} alt="" /></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomNav
import React from 'react'
import '../style/Profile.css';

const UserProfCounter = () => {
  return (
    <>



    <section className="user-prof-counter-comp user-prof-counter-comp-rem-spce">
    <div className="u-p-cont">
        <div className="user-prof-count-grid-bx">

            <div className="usr-prf-count-bx">

                <div className="c-icn">
                <i className="fa-solid fa-wallet"></i>
                </div>

                <div className="u-prf-c-info">
                    <h5>Wallet Balance</h5>
                    <h4>2500</h4>


                    
                </div>
                
            </div>


            <div className="usr-prf-count-bx">

                <div className="c-icn">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                </div>

                <div className="u-prf-c-info">
                    <h5>Total Waste Sold </h5>
                    <h4>500</h4>


                    
                </div>
                
            </div>


            <div className="usr-prf-count-bx">

                <div className="c-icn">
                <i className="fa-solid fa-dumpster"></i>
                </div>

                <div className="u-prf-c-info">
                    <h5>Waste Sold</h5>
                     <h4>50</h4>

                    
                </div>
                
            </div>

            <div className="usr-prf-count-bx">

            <div className="c-icn">
            <i className="fa-solid fa-people-arrows"></i>
            </div>

            <div className="u-prf-c-info">
                <h5>Followers</h5>
                <h4>15K</h4>

                
            </div>

            </div>
            
        </div>
        </div>
    </section>
      
    </>
  )
}

export default UserProfCounter

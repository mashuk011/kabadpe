import React from 'react'
import '../style/Profile.css';

const UserProfile = () => {
  return (
    <>

    <div className="user-profile-side-nav-main">

        <div className="user-prof-main-bx">

            <div className="user-profi-img">
                <img src="./images/customImg/test-img-1.jpg" alt="" />
            </div>

            <h6>Alysia Darmott</h6>
            
        </div>

        <div className="user-prof-menu-main-flex-bx">

            <button className="u-prf-bx">
            <div className="u-prf-tab-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                My Appointments
            </button>

            <button className="u-prf-bx">
            <div className="u-prf-tab-icon">
            <i class="fa-solid fa-qrcode"></i>
                  </div>
                My Details
            </button>
            

            <button className="u-prf-bx">
            <div className="u-prf-tab-icon">
            <i className="fa-solid fa-location-dot"></i>
                  </div>
                My Work Location
            </button>
            
            <button className="u-prf-bx">
            <div className="u-prf-tab-icon">
            <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                  Waste Collection
            </button>

            <button className="u-prf-bx">
            <div className="u-prf-tab-icon">
            <i className="fa-solid fa-wallet"></i>
                  </div>
                  My sales history
            </button>
            
            <button className="u-prf-bx">
            <div className="u-prf-tab-icon">
            <i className="fa-solid fa-tag"></i>
                  </div>
                  My Wallet History
            </button>

            <button className="u-prf-bx">
            <div className="u-prf-tab-icon">
            <i class="fa-solid fa-gear"></i>
                  </div>
                  My account setings
            </button>
        </div>
        
    </div>
    
   
    </>
  )
}

export default UserProfile

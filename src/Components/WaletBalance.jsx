import React from 'react'
import '../style/ReferEarn.css';

const WaletBalance = ({oncClickclose}) => {
  return (
    <>
      <section className="walet-balance">
        <div className="walet-bal-box">
            <h5>Wallet-Balance : ₹5,382.36</h5>

            <div className="bank-info">

                <h6>Bank Name : <span>Kotak Bank</span></h6>
                <h6>Account Number : <span>xxxx xxxx xxxx 8567</span></h6>
                

                <button className="tranfer-btn tranfer-btn5">
                    Tranfer Now
                </button>

                
            </div>
            
            <span className='note-text'> <span>Note</span> : Please check your bank details before clicking the Transfer Button</span>

            <div onClick={oncClickclose} className="walt-bal-close">
            <i class="fa-solid fa-xmark"></i>
            </div>

        </div>
      </section>
    </>
  )
}

export default WaletBalance

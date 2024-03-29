const UserAppoinmentDetail = ({ showPopup, setPopup, collectorInfo }) => {
  return (
    <>
      <div
        className={showPopup ? "pop-up-box-10 popupactive" : "pop-up-box-10"}
      >
        <div className="user-info-pop-up-bx">
          <h5>Waste Collector</h5>
          {collectorInfo?.KabadCollector ? (
            <div className="waste-coll-logo-user-det-flex-bx">
              <div className="left-waste-col-logo">
                <img src="/images/customImg/user-prf-img.webp" alt="" />
                <div className="stars-flex-bx">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <div className="tick-check">
                  <i class="fa-solid fa-circle-check"></i>
                </div>
              </div>

              <div className="user-det-bx">
                <h6>
                  Name : <span>Kunal Vernma</span>
                </h6>
                <h6>
                  Phone No. : <span>9087543213</span>
                </h6>
                {/* <h6>Address : <span>3810 B/20 krishna nagar 110005 near mobile shop</span> </h6> */}

                <div className="verify-det-box">
                  <h6>Police verified</h6>

                  <h6>Aadhar Verified</h6>
                </div>
              </div>
            </div>
          ) : (
            <p>Collector Not Assigned</p>
          )}

          <h5>Organization</h5>

          {collectorInfo?.Franchise ? (
            <div className="org-logo-info-flex-bx">
              <div className="left-org-logo">
                <img src="/images/customImg/blog-1.jpg" alt="" />
                <div className="tick-check">
                  <i class="fa-solid fa-circle-check"></i>
                </div>
              </div>

              <div className="org-info">
                <h6>
                  Company : <span>{collectorInfo?.Franchise?.name}</span>
                </h6>
                <h6>
                  Manager : <span>Sonu Nigam</span>
                </h6>

                <h6 className="gst-text">
                  GST : <span>1100022233344</span>
                </h6>

                <h6></h6>
              </div>
            </div>
          ) : (
            <p>Company Not Assigned</p>
          )}

          <div onClick={() => setPopup(false)} className="pop-user-info-close">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAppoinmentDetail;

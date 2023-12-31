import { DateTime } from "luxon";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import "../style/WasteColect.css";
const WasteAppoinmentTable = ({
  setAddressPopup,
  setPopUp,
  appoinments = [],
  setSelectedAppoinment,
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Date</th>
            <th>Time Slots</th>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appoinments?.map(
            (
              {
                id,
                orderStatus,
                appointmentDate,
                formatedAddress,
                appointmentTimeSlot,
                appointmentContactNumber,
                appointmentPersonName,
              },
              i
            ) => (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>
                  {DateTime.fromISO(appointmentDate).toFormat("dd-MM-yyyy")}
                </td>
                <td>{appointmentTimeSlot}</td>
                <td>{appointmentPersonName}</td>
                <td>
                  <button
                    onClick={() => {
                      setAddressPopup(true);
                      setSelectedAppoinment({
                        id,
                        orderStatus,
                        appointmentDate,
                        formatedAddress,
                        appointmentTimeSlot,
                        appointmentContactNumber,
                        appointmentPersonName,
                      });
                    }}
                    className="status-btn status-btn-changed"
                  >
                    Details
                  </button>
                </td>
                <td>
                  <a href={`tel:${appointmentContactNumber}`}>
                    <button className="status-btn status-btn-changed">
                      Call Now
                    </button>
                  </a>
                </td>
                <td>Visit Soon</td>
                <td>
                  <NavLink to="/pricelist">
                    <button className="pricelist-btn">Buy Waste</button>
                  </NavLink>
                </td>
              </tr>
            )
          )}

          <tr>
            <td>2</td>
            <td>26-09-2023</td>
            <td>11.00 to 12.00</td>
            <td>Rohan Das</td>
            <td>
              <button
                onClick={() => setAddressPopup(true)}
                className="status-btn status-btn-changed"
              >
                Details
              </button>
            </td>
            <td>
              <button className="status-btn status-btn-changed">
                Call Now
              </button>
            </td>
            <td>Cancelled</td>
            <td></td>
          </tr>

          <tr>
            <td>3</td>
            <td>22-09-2023</td>
            <td>12.00 to 1.00</td>
            <td>Rohan Das</td>
            <td>
              <button
                onClick={() => setAddressPopup(true)}
                className="status-btn status-btn-changed"
              >
                Details
              </button>
            </td>
            <td>
              <button className="status-btn status-btn-changed">
                Call Now
              </button>
            </td>
            <td>Cancelled</td>
            <td></td>
          </tr>

          <tr>
            <td>4</td>
            <td>29-09-2023</td>
            <td>1.00 to 2.00</td>
            <td>Rohan Das</td>
            <td>
              <button
                onClick={() => setAddressPopup(true)}
                className="status-btn status-btn-changed"
              >
                Details
              </button>
            </td>
            <td>
              <button className="status-btn status-btn-changed">
                Call Now
              </button>
            </td>
            <td>
              <button
                onClick={() => setPopUp(true)}
                className="status-btn status-btn-changed"
              >
                Confirm Status
              </button>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>5</td>
            <td>22-09-2023</td>
            <td>2.00 to 3.00</td>
            <td>Rohan Das</td>
            <td>
              <button
                onClick={() => setAddressPopup(true)}
                className="status-btn status-btn-changed"
              >
                Details
              </button>
            </td>
            <td>
              <button className="status-btn status-btn-changed">
                Call Now
              </button>
            </td>
            <td>
              Under Review <br /> (Reschedule)
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export const AddressPopup = ({
  addressPopup,
  setAddressPopup,
  selectedAppoinment = {},
}) => {
  const {
    id,
    orderStatus,
    appointmentDate,
    formatedAddress,
    appointmentTimeSlot,
    appointmentContactNumber,
    appointmentPersonName,
  } = selectedAppoinment;
  return (
    <section
      onClick={() => setAddressPopup(false)}
      className={
        addressPopup === true
          ? "cust-add-comp cust-add-comp2 addrssactive"
          : "cust-add-comp cust-add-comp2"
      }
    >
      <div className="cust-add-bx" onClick={(e) => e.stopPropagation()}>
        <h3>Customer Address</h3>

        <div className="cust-add">
          <h6>
            Name : <span>{appointmentPersonName}</span>
          </h6>
          <h6>
            Phone : <span>{appointmentContactNumber}</span>
          </h6>
          <h6>
            Date : <span> {DateTime.fromISO(appointmentDate).toFormat("dd-MMM-yyyy")}</span>
          </h6>
          {/* <h6>
            Type : <span>Daily</span>
          </h6> */}
          <h6>
            Time Slot : <span>{appointmentTimeSlot}</span>
          </h6>
          <h6>
            Address : <span>{formatedAddress}</span>
          </h6>
        </div>

        <a
          target="blank"
          href={`https://www.google.com/maps/dir//${encodeURIComponent(
            formatedAddress
          )}`}
          className="navigate-link-btn navigate-link-btn3 mt-3"
        >
          <i className="fa-solid fa-location-dot"></i>
          Click to Navigate Link
        </a>

        <button
          onClick={() => setAddressPopup(false)}
          className="cross-btn cross-btn2"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </section>
  );
};

export const ScheduleActionPopup = ({ setPopUp, popUp }) => {
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  return (
    <>
      <section
        onClick={() => setPopUp(false)}
        className={
          popUp === true
            ? "appoint-popup-main popupactive"
            : "appoint-popup-main"
        }
      >
        <div
          className="appoint-popup-bx appoint-popup-bx2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="appoint-popup-info">
            <h3>Changes Appointments</h3>
          </div>

          <div className="appoint-change-btns-flex">
            <button
              onClick={() => {
                setConfirmPopup(!confirmPopup),
                  setReshedPopup(false),
                  setCancelPopupPopup(false);
              }}
              className="comn-appoint-btn comn-appoint-btn1 comn-appoint-btn1-bg-chnge"
            >
              Confirm Appointment
            </button>

            <button
              onClick={() => {
                setReshedPopup(!reshedPopup),
                  setConfirmPopup(false),
                  setCancelPopupPopup(false);
              }}
              className="comn-appoint-btn comn-appoint-btn2"
            >
              Reshedule Appointment
            </button>

            <button
              onClick={() => {
                setCancelPopupPopup(!cancelPopup),
                  setReshedPopup(false),
                  setConfirmPopup(false);
              }}
              className="comn-appoint-btn comn-appoint-btn3"
            >
              Cancel Appointment
            </button>
          </div>

          <button
            onClick={() => setPopUp(false)}
            className="cross-btn cross-btn2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* _______________ when user click confirm btn then after show a text  */}

          <div
            className={
              confirmPopup === true
                ? "confirm-text confrmtextactive"
                : "confirm-text"
            }
          >
            <p>Waste Pickup Scheduled and information has been sent to User</p>
            <button className="navigate-link-btn navigate-link-btn3">
              Confirm
            </button>
          </div>

          <div
            className={
              reshedPopup === true
                ? "reshedule-box reshedactive"
                : "reshedule-box"
            }
          >
            <p>
              Change date time for reschedule your waste pickup appoint, Appoint
              will be send to user for confirmation
            </p>

            <form action="#" className="reshed-form">
              <div className="reshed-form-grid">
                <div className="reshd-inpt-bx reshd-inpt-bx3">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="reshed-select-bx reshd-inpt-bx3">
                  <select name="time_slot" id="time_slot">
                    <option value="Choose Time">Choose Time</option>
                    <option value="Choose Time">10:00 to 11:00</option>
                    <option value="Choose Time">12:00 to 1:00</option>
                    <option value="Choose Time">1:00 to 2:00</option>
                    <option value="Choose Time">2:00 to 3:00</option>
                  </select>
                </div>

                <button className="resd-sub-btn navigate-link-btn3">
                  Send Request
                </button>
              </div>
            </form>
          </div>

          <div
            className={
              cancelPopup === true ? "cancel-text cancelactive" : "cancel-text"
            }
          >
            <p>Are you sure to Cancel Your Waste Pickup appointment</p>

            <button
              onClick={() => setPopUp(false)}
              className="ok-btn navigate-link-btn3"
            >
              Confirm
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default WasteAppoinmentTable;

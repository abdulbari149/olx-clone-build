import React from "react";
import "./AppDetails.css";
function AppDetails() {
  return (
    <div className="app-details">
      <div className="app-details__container">
        <div className="app-details__cols">
          <img src="/images/phone-app.png" alt="" />
        </div>
        <div className="app-details__cols">
          <div className="app-details__content">
            <h1>TRY THE OLX APP</h1>
            <p>
              Buy, sell and find just about anything using the app on your
              mobile. GET YOUR APP TODAY
            </p>
          </div>
        </div>
        <div className="app-details__cols">
          <div className="v-line"></div>
          <div>
            <h5>Get Your App Today</h5>
            <div className="app-details__downloadBtns">
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;

import React from 'react';
import Group34210 from "../../MyImages/Group34210.png";
import Group34211 from "../../MyImages/Group34211.png";
import Group34214 from "../../MyImages/Group34214.png";
import Group34215 from "../../MyImages/Group34215.png";
import Group34216 from "../../MyImages/Group34216.png";
import imgTwo from "../../MyImages/imgTwo.png";



function Profile() {
  return (
    <div>
         <div className="section">
        <div className="container">
          <h2 className="my-4">Welcome Panel Member!</h2>
          <div className="row">
            <div className="col-lg-2 applicant">
              <div className="card  p-4 mb-3">
                <img src={imgTwo} alt="..." />
                <div className="card-body p-1">
                  <h5 className="card-title mb-0">Steven Tyler</h5>
                  <p className="card-text">Applicant</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 case">
              <div className="row mb-4">
                <div className="col">
                <div className="card p-2">
                  <div className="card-body p-1">
                    <h5 className="card-title">
                      Case Name
                      <span>
                        <img src={Group34210} alt="..." />
                      </span>
                    </h5>
                    <p className="card-text">Case 1234</p>
                  </div>
                </div>
                </div>

              </div>
              <div className="row">
              <div className="col">
                <div className="card p-2 mb-3">
                  <div className="card-body p-1">
                    <h5 className="card-title ">
                      Social Worker
                      <span>
                        <img src={Group34211} alt="..." />
                      </span>
                    </h5>
                    <p className="card-text">John Doe</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 hearing">
              <div className="card p-2 mb-3">
                <div className="card-body p-1">
                  <h5 className="card-title my-2">
                    Hearing Date & Time
                    <span>
                      <img src={Group34214} alt="..." />
                    </span>
                  </h5>
                  <h2 className="text-center">03:30 PM</h2>
                  <p className="card-text text-center mb-4">
                    Monday, 20/11/2021
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 revoke">
              <div className="card p-2 mb-3">
                <div className="card-body p-1">
                  <h5 className="card-title my-2">
                    Access Revoke Date
                    <span>
                      <img src={Group34215} alt="..." />
                    </span>
                  </h5>
                  <h2 className="text-center my-3">20/11/2021</h2>
                  <div className="bar">
                    <img src={Group34216} alt="..." />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
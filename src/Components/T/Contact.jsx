import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import BusinessIcon from "@material-ui/icons/Business";

export default function Contact() {
  return (
    <>
      <div className="main-div">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-sm d-flex justify-content-center m-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h3 className="card-text">Email</h3>
                  <div className="content d-flex">
                    <EmailIcon />
                    <span>afridihannan325@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm d-flex justify-content-center m-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h3 className="card-text">Contact No</h3>
                  <div className="content d-flex">
                    <PhoneIcon />
                    <span>+91 8751869389</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm d-flex justify-content-center m-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h3 className="card-text">Address</h3>
                  <div className="content d-flex">
                    <BusinessIcon />
                    <span>Mangaldai,Assam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="form mt-5 border border-primary">
              <h2 className="title">GET IN TOUCH</h2>
              <div className="input m-2 row d-flex justify-content-evenly">
                <form class="form-floating m-2">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </form>
              </div>
              <div class="form-floating m-3">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">Your Message</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

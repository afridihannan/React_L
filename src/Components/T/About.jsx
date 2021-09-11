import React from "react";

export default function About() {
  return (
    <>
      <div className="container">
        <form method="">
        {/* <input type="submit" className="edit-profile" value="Edit Profile" name="" id="" /> */}
        <button className="content-right edit-profile">Edit profile</button>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <h5>Hannan Afridi</h5>
              <h6>Web Developer</h6>
              <p className="profile-rating mt-3 mb-5">
                Rankings: <span>1/10</span>
              </p>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" id="home-tab" data-toggle="tab" role="tab" href="#home">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" id="profile-tab" data-toggle="tab" role="tab" href="#home">
                    Active
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
               
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="">YouTube</a><br />
                <a href="">Instagram</a><br />
                <a href="">Github</a><br />
                <a href="">Linkedin</a><br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">

            </div>
          </div>
        </form>
      </div>
    </>
  );
}

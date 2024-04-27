import React, { Component } from "react";
import Fade from "react-awesome-reveal";

class About extends Component {
  handleDownloadResume = (resumeUrl) => {
    window.open(resumeUrl, "_blank");
  };

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const country = this.props.data.address.country;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="CS | Christian Sevilla Portfolio"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p style={{ textAlign: "justify" }}>{bio}</p>
              <p style={{ textAlign: "justify" }}>
                I am motivated by determination and a desire for personal and
                professional development. Challenges energize me because they
                allow me to exceed my limits and excel beyond my current
                talents. Engaging with new people and immersing myself in their
                various tales and backgrounds provides me with genuine
                motivation and knowledge.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {city}, {zip}
                    </span>
                    <br />
                    <span>{country}</span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <button
                      className="button"
                      onClick={() => this.handleDownloadResume(resumeDownload)}
                    >
                      <i className="fa fa-download"></i>Download Resume
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

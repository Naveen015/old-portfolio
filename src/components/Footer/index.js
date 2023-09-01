import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{ position: "relative", left: 0, bottom: 0, right: 0 }}
      color="elegant-color"
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact Information</h5>
            <address>
              <a href="mailto:gnaveen1509@gmail.com">
                Email: gnaveen1509@gmail.com
              </a>
              <br />
              7220 McCallum Blvd Apt. 503 <br /> Dallas, TX - 75252
            </address>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <a
                    href="https://www.facebook.com/naveen.prashanna/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </span>
              </li>
              <li className="fab fa-instagram">
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <a 
                    href="https://www.instagram.com/naveen_prashanna/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </span>
              </li>
              <li className="fab fa-github">
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <a
                    href="https://github.com/naveen015"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </span>
              </li>
              <li className="fab fa-linkedin">
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <a
                    href="https://www.linkedin.com/in/naveen015/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </span>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Naveen Prashanna Gurumurthy
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;

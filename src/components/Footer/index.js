import React from "react";
import { Container} from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{ position: "relative", left: 0, bottom: 0, right: 0 }}
      color="elegant-color"
      className="font-small pt-2 pb-1"
    >
      <MDBContainer fluid className="text-left text-md-left"> 
        <Container>         
            <ul className="pl-0">
              <li className="fa">
                <span style={{ marginLeft: "0px", marginRight: "20px" }}>
                  <a className="h5">
                    Contact
                  </a>
                </span>
              </li>
              <li className="fa fa-envelope">
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <a
                    href="mailto:gnaveen1509@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    gnaveen1509@gmail.com
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
        </Container>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;

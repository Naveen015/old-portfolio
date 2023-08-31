import naveen from "@assets/naveen.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Image, Paragraph, Title } from "@components/Components";
import styled from "styled-components";
import { aboutMe } from "./constants";

import Naveen_CS from "@assets/Naveen_CS.pdf";
import Naveen_ML from "@assets/Naveen_ML.pdf";

const HomeContainer = styled.div`
  padding: 50px;
`;

const Home = () => {
  const options = {
    config: {
      thumbnail: true,
    },
  };
  return (
    <>
      <HomeContainer>
        <Title>Welcome to Naveen's Website!!</Title>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={8}>
              <Paragraph data={aboutMe}></Paragraph>
              <a href={Naveen_CS} target="_blank" rel="noreferrer">Resume for Software Engineer</a>
              <br></br>
              <a href={Naveen_ML} target="_blank" rel="noreferrer">Resume for Data Science/ML/Research</a>
            </Col>
            <Col xs={6} md={4}>
              <Image src={naveen} {...options}></Image>
            </Col>
          </Row>       
        </Container>
      </HomeContainer>
    </>
  );
};

export default Home;

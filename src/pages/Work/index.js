import styled from "styled-components";
import { Container} from "react-bootstrap";
import { StackCardGroup, Title } from "@components/Components";
import { workData } from "./constants";

const WorkContainer = styled.div`
  padding: 10px;
`;

const Work = () => {
  return (
    <>
      <WorkContainer>
        <Container>
          <Title>Work</Title>
          <StackCardGroup data={workData}></StackCardGroup>
        </Container>
      </WorkContainer>
    </>
  );
};

export default Work;

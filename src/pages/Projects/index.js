import { StackCardGroup, Title } from "@components/Components";
import { Container} from "react-bootstrap";
import styled from "styled-components";
import { projectData } from "./constants";

const ProjectsContainer = styled.div`
  padding: 10px;
`;

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <Container>
          <Title>Projects</Title>
          <StackCardGroup data={projectData}></StackCardGroup>
        </Container>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

import { Title } from "@components/Components";
import GroupCard from "@components/GroupCard";
import styled from "styled-components";
import { Container} from "react-bootstrap";
import { publicationData, groupCardConfig } from "./constants";

const PublicationContainer = styled.div`
  padding: 10px;
`;

const Publication = () => {
  return (
    <>
      <PublicationContainer>
        <Container>
          <Title>Publications</Title>
          <GroupCard
            data={publicationData}
            groupCardConfig={groupCardConfig}
          ></GroupCard>
        </Container>
      </PublicationContainer>
    </>
  );
};

export default Publication;

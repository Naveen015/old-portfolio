import styled from "styled-components";
import { Title, GroupCard } from "@components/Components";
import { artData, groupCardConfig } from "./constant";
import { Container} from "react-bootstrap";

const HobbiesContainer = styled.div`
  padding: 10px;
`;

const Hobbies = () => {
  return (
    <>
      <HobbiesContainer>
        <Container>
          <Title>Sports</Title>
          <GroupCard data={artData} groupCardConfig={groupCardConfig}></GroupCard>
        </Container>
      </HobbiesContainer>
    </>
  );
};

export default Hobbies;

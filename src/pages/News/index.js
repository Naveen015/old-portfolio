import styled from "styled-components";
import { SimpleTable, Title } from "@components/Components";
import { newsData, tableConfig } from "./constants";
import { Container} from "react-bootstrap";

const NewsContainer = styled.div`
  padding: 10px;
`;

const News = () => {
  return (
    <>
      <NewsContainer>
        <Container>
          <Title>News</Title>
          <SimpleTable data={newsData} tableConfig={tableConfig}></SimpleTable>
        </Container>
      </NewsContainer>
    </>
  );
};

export default News;

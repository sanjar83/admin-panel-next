import React from "react";
import styled from "styled-components";

const Accordion4ChildDiv = styled.div`
  margin: 10px;
  text-align: center;
`;

const Accordion4Child = ({ title }) => {
  return (
    <Accordion4ChildDiv>
      <h1>{title}</h1>
    </Accordion4ChildDiv>
  );
};

export default Accordion4Child;

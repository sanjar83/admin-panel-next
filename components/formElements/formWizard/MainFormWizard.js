import React from "react";
import styled from "styled-components";
import MultiStepForm from "./MultiStepForm";

const StylesMainFormWizard = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const MainFormWizard = () => {
  return (
    <StylesMainFormWizard>
      <MultiStepForm />
    </StylesMainFormWizard>
  );
};

export default MainFormWizard;

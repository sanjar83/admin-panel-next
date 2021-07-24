import React from "react";
import styled from "styled-components";
import StandardFields from "./standard/StandardFields";
import MainTagsInput from "./tagsInput/MainTagsInput";
import CheckboxAndRadioMain from "./checkboxes/CheckboxAndRadioMain";
import ToggleButtons from "./toggleButtons/ToggleButtons";
import ValidationInputs from "./validationInput/ValidationInputs";
import Selectboxes from "./selectbox/SelectBoxes";

const MainBoxDIV = styled.div``;

const MainBox = () => {
  return (
    <MainBoxDIV>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <StandardFields />
          <MainTagsInput />
          <CheckboxAndRadioMain />
          <ToggleButtons />
        </div>
        <div className="col-md-6 col-sm-12">
          <ValidationInputs />
          <Selectboxes />
        </div>
      </div>
    </MainBoxDIV>
  );
};

export default MainBox;

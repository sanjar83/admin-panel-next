import React from "react";
import styled from "styled-components";
import TagsInputDanger from "./TagsInputDanger";
import TagsInputSuccess from "./TagsInputSuccess";
import TagsInputWarning from "./TagsInputWarning";

const StylesMainTagsInput = styled.div`
  .chartBox {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    flex-direction: column;
    position: relative;
    padding: 20px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 15px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 2px;
  }
  .container-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    margin-bottom: 5px;
  }
  .container-head h1 {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }
  .tags-boxes {
    justify-content: center;
  }
`;

const MainTagsInput = () => {
  const selectedTags = (tags) => {
    console.log(tags);
  };
  return (
    <StylesMainTagsInput>
      <div className="chartBox">
        <div className="container-head">
          <h1>Tags Input</h1>
        </div>
        <div className="tags-boxes">
          <TagsInputSuccess
            selectedTags={selectedTags}
            tags={["Javascript", "React", "Redux"]}
          />
          <TagsInputWarning
            selectedTags={selectedTags}
            tags={["Javascript", "React", "Redux"]}
          />
          <TagsInputDanger
            selectedTags={selectedTags}
            tags={["Javascript", "React", "Redux"]}
          />
        </div>
      </div>
    </StylesMainTagsInput>
  );
};
export default MainTagsInput;

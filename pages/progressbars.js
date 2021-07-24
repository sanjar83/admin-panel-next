import React from "react";
import Head from "next/head";
import styled from "styled-components";
import CircleProgressBarBox from "../components/circle-progress-bar/CircleProgressBarBox";
import ProgressLinedBox from "../components/progress-lined/ProgressLinedBox";
import ProgressLinedBox2 from "../components/progress-lined/ProgressLinedBox2";
import ProgressLinedBox3 from "../components/progress-lined/ProgressLinedBox3";

const ProcessDIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: fixed;

  .notification-boxes {
    display: flex;
    flex-direction: column;
  }
  .lined-boxes {
    display: flex;
    justify-content: center;
  }
`;

const progressbars = () => {
  return (
    <ProcessDIV>
      <CircleProgressBarBox />
      <div className="lined-boxes">
        <ProgressLinedBox />
        <ProgressLinedBox2 />
      </div>
    </ProcessDIV>
  );
};

export default progressbars;

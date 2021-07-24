import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BackToTopDiv = styled.div`
  position: absolute;
  bottom: 10px;
  right: 50px;
  z-index: 999999;
  .topto-button {
    display: ${({ visible }) => (visible ? "block" : "none")};
  }

  .blobs-container {
    display: flex;
  }

  .blob {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    margin: 10px;
    height: 30px;
    width: 30px;
    align-items: center;
    text-align: center;
    padding: 4px;
    color: #fff;
  }

  .blob.green {
    background: rgba(51, 217, 178, 1);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
    animation: pulse-green 2s infinite;
  }

  @keyframes pulse-green {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
    }
  }
`;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) {
      setVisible(true);
    } else if (scrolled <= 20) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <BackToTopDiv visible={visible}>
      <div className="topto-button">
        <div className="blobs-container" onClick={scrollToTop}>
          <div className="blob green">
            <i className="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
    </BackToTopDiv>
  );
};

export default BackToTop;

import React from "react";
import styled from "styled-components";
import Button6 from "../../buttons/button6/Button6";
import SocialButtons from "./SocialButtons";

const Carousel3Div = styled.div`
  margin: 50px 0;

  .untitled {
    position: absolute;
    /* height: 350px; */
    min-width: 51%;
    min-height: 50%;
    max-height: 350px;
    /* width: 600px; */
    max-width: 600px;
    overflow: hidden;
    -webkit-animation: rotateHue infinite 20s linear;
    animation: rotateHue infinite 20s linear;
    -webkit-animation-delay: 0.625s;
    animation-delay: 0.625s;
  }
  @-webkit-keyframes rotateHue {
    0% {
      filter: hue-rotate(0deg);
    }
    20% {
      filter: hue-rotate(0deg);
    }
    25% {
      filter: hue-rotate(90deg);
    }
    45% {
      filter: hue-rotate(90deg);
    }
    50% {
      filter: hue-rotate(180deg);
    }
    70% {
      filter: hue-rotate(180deg);
    }
    75% {
      filter: hue-rotate(270deg);
    }
    95% {
      filter: hue-rotate(270deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  @keyframes rotateHue {
    0% {
      filter: hue-rotate(0deg);
    }
    20% {
      filter: hue-rotate(0deg);
    }
    25% {
      filter: hue-rotate(90deg);
    }
    45% {
      filter: hue-rotate(90deg);
    }
    50% {
      filter: hue-rotate(180deg);
    }
    70% {
      filter: hue-rotate(180deg);
    }
    75% {
      filter: hue-rotate(270deg);
    }
    95% {
      filter: hue-rotate(270deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  .untitled__shutters {
    position: absolute;
    height: 150vmax;
    width: 150vmax;
    left: calc(50% - 75vmax);
    top: calc(50% - 75vmax);
    pointer-events: none;
    z-index: 2;
    -webkit-animation: rotateFrame 10s linear infinite;
    animation: rotateFrame 10s linear infinite;
  }
  @-webkit-keyframes rotateFrame {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes rotateFrame {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .untitled__shutters:before,
  .untitled__shutters:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    background-color: #b3401a;
    pointer-events: auto;
  }
  .untitled__shutters:before {
    bottom: 50%;
    -webkit-animation: openTop 5s infinite;
    animation: openTop 5s infinite;
  }
  @-webkit-keyframes openTop {
    0% {
      transform: translate3d(-50%, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
      animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    }
    40% {
      transform: translate3d(-50%, -65vmax, 0);
      animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    70% {
      transform: translate3d(-50%, -65vmax, 0);
      animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
      animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
  }
  @keyframes openTop {
    0% {
      transform: translate3d(-50%, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
      animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    }
    40% {
      transform: translate3d(-50%, -65vmax, 0);
      animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    70% {
      transform: translate3d(-50%, -65vmax, 0);
      animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
      animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
  }
  .untitled__shutters:after {
    top: 50%;
    -webkit-animation: openBottom 5s infinite;
    animation: openBottom 5s infinite;
  }
  @-webkit-keyframes openBottom {
    0% {
      transform: translate3d(-50%, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
      animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    }
    40% {
      transform: translate3d(-50%, 65vmax, 0);
      animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    70% {
      transform: translate3d(-50%, 65vmax, 0);
      animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
      animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
  }
  @keyframes openBottom {
    0% {
      transform: translate3d(-50%, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
      animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    }
    40% {
      transform: translate3d(-50%, 65vmax, 0);
      animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    70% {
      transform: translate3d(-50%, 65vmax, 0);
      animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
      animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
  }
  .untitled__slides {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #b3401a;
  }
  .untitled__slide {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    -webkit-animation: showHideSlide infinite 20s steps(1);
    animation: showHideSlide infinite 20s steps(1);
  }
  @-webkit-keyframes showHideSlide {
    0% {
      opacity: 1;
      pointer-events: auto;
      z-index: 1;
    }
    25% {
      opacity: 0;
      pointer-events: none;
      z-index: -1;
    }
    100% {
      opacity: 0;
      pointer-events: none;
      z-index: -1;
    }
  }
  @keyframes showHideSlide {
    0% {
      opacity: 1;
      pointer-events: auto;
      z-index: 1;
    }
    25% {
      opacity: 0;
      pointer-events: none;
      z-index: -1;
    }
    100% {
      opacity: 0;
      pointer-events: none;
      z-index: -1;
    }
  }
  .untitled__slide:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  .untitled__slide:nth-child(1) .untitled__slideBg {
    background-image: url("./images/html.png");
    object-fit: scale-down;
  }
  .untitled__slide:nth-child(2) {
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
  }
  .untitled__slide:nth-child(2) .untitled__slideBg {
    background-image: url("./images/react.jpg");
    object-fit: scale-down;
  }
  .untitled__slide:nth-child(3) {
    -webkit-animation-delay: 10s;
    animation-delay: 10s;
  }
  .untitled__slide:nth-child(3) .untitled__slideBg {
    background-image: url("./images/redux.jpg");
    object-fit: scale-down;
  }
  .untitled__slide:nth-child(4) {
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
  }
  .untitled__slide:nth-child(4) .untitled__slideBg {
    background-image: url("./images/nextjs.png");
  }
  .untitled__slideBg {
    position: relative;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #b3401a;
    background-blend-mode: hard-light;
    opacity: 1;
    z-index: -1;
    -webkit-animation: bgInOut 5s infinite;
    animation: bgInOut 5s infinite;
  }
  @-webkit-keyframes bgInOut {
    0% {
      transform: rotate(-45deg) scale(1.1);
      -webkit-animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    33% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(0deg);
    }
    66% {
      transform: rotate(0deg);
      -webkit-animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
      animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }
    100% {
      transform: rotate(45deg) scale(0.9);
    }
  }
  @keyframes bgInOut {
    0% {
      transform: rotate(-45deg) scale(1.1);
      -webkit-animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    33% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(0deg);
    }
    66% {
      transform: rotate(0deg);
      -webkit-animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
      animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }
    100% {
      transform: rotate(45deg) scale(0.9);
    }
  }
  .untitled__slideContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    color: white;
    font-family: "Abril Fatface", sans-serif;
    line-height: 0.8;
    letter-spacing: -0.025em;
    z-index: 2;
    opacity: 1;
    text-shadow: 0 0 0.5em rgba(179, 64, 26, 0.25);
    mix-blend-mode: lighten;
  }
  .untitled__slideContent span {
    display: block;
    font-size: 15vmin;
  }

  .button {
    font-family: "Roboto Mono", sans-serif;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 2vmin;
    display: inline-block;
    position: relative;
    border: 3px solid white;
    box-shadow: -0.5vmin 0.5vmin 0 rgba(255, 255, 255, 0.5);
    background: transparent;
    margin-top: 5vmin;
    mix-blend-mode: lighten;
    color: white;
    padding: 2vmin 2vmin 1.8vmin 2vmin;
    letter-spacing: 0.1em;
    text-shadow: none;
    line-height: 1;
    transform: translate3d(0.5vmin, -0.5vmin, 0);
    transition: all 100ms linear;
  }
  .button:hover {
    transform: translate3d(1vmin, -1vmin, 0);
    box-shadow: -1vmin 1vmin 0 rgba(255, 255, 255, 0.5);
    background: white;
    color: black;
  }
  .button:active {
    transform: translate3d(0px, 0px, 0);
    box-shadow: 0px 0px 0 rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 600px) {
    .untitled {
      position: absolute;
      /* height: 350px; */
      min-width: 80%;
      min-height: 35%;
      max-height: 350px;
      /* width: 600px; */
      max-width: 600px;
      overflow: hidden;
      -webkit-animation: rotateHue infinite 20s linear;
      animation: rotateHue infinite 20s linear;
      -webkit-animation-delay: 0.625s;
      animation-delay: 0.625s;
    }
  }
  @media (min-width: 601px) and (max-width: 767px) {
    .untitled {
      position: absolute;
      /* height: 350px; */
      min-width: 79%;
      min-height: 35%;
      max-height: 350px;
      /* width: 600px; */
      max-width: 600px;
      overflow: hidden;
      -webkit-animation: rotateHue infinite 20s linear;
      animation: rotateHue infinite 20s linear;
      -webkit-animation-delay: 0.625s;
      animation-delay: 0.625s;
    }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    .untitled {
      position: absolute;
      /* height: 350px; */
      min-width: 51%;
      min-height: 45%;
      max-height: 350px;
      /* width: 600px; */
      max-width: 600px;
      overflow: hidden;
      -webkit-animation: rotateHue infinite 20s linear;
      animation: rotateHue infinite 20s linear;
      -webkit-animation-delay: 0.625s;
      animation-delay: 0.625s;
    }
  }
`;

const Carousel3 = () => {
  return (
    <Carousel3Div>
      <div className="untitled">
        <div className="untitled__slides">
          <div className="untitled__slide">
            <div className="untitled__slideBg"></div>
            <div className="untitled__slideContent">
              <span>Sanjar</span>
              <span>Juraev</span>
              <div className="socials">
                <SocialButtons />
              </div>
              {/* <a
                className="button"
                href="https://unsplash.com/@scoutthecity"
                target="/black"
              >
                Unsplash Profile
              </a> */}
            </div>
          </div>
          <div className="untitled__slide">
            <div className="untitled__slideBg"></div>
            <div className="untitled__slideContent">
              <span>Sanjar</span>
              <span>Juraev</span>
              <div className="socials">
                <SocialButtons />
              </div>
              {/* <a
                className="button"
                href="https://unsplash.com/@madbyte"
                target="/black"
              >
                Unsplash Profile
              </a> */}
            </div>
          </div>
          <div className="untitled__slide">
            <div className="untitled__slideBg"></div>
            <div className="untitled__slideContent">
              <span>Sanjar</span>
              <span>Juraev</span>
              <div className="socials">
                <SocialButtons />
              </div>

              {/* <a
                className="button"
                href="https://unsplash.com/@maicoamorim"
                target="/black"
              >
                Unsplash Profile
              </a> */}
            </div>
          </div>
          <div className="untitled__slide">
            <div className="untitled__slideBg"></div>
            <div className="untitled__slideContent">
              <span>Sanjar</span>
              <span>Juraev</span>
              <div className="socials">
                <SocialButtons />
              </div>
              {/* <a
                className="button"
                href="https://unsplash.com/@mariocalvo"
                target="/black"
              >
                Unsplash Profile
              </a> */}
            </div>
          </div>
        </div>
        <div className="untitled__shutters"></div>
      </div>
    </Carousel3Div>
  );
};

export default Carousel3;

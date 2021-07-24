import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel2Div = styled.div`
  /* ==== Main CSS === */
  .img-fill {
    width: 100%;
    display: block;
    overflow: hidden;
    position: relative;
    text-align: center;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.04);
  }

  .Grid1k {
    padding: 0 15px;
    max-width: 1200px;
    margin: auto;
  }

  .blocks-box,
  .slick-slider {
    margin: 0;
    padding: 0 !important;
  }

  .slick-slide {
    float: left /* If RTL Make This Right */;
    padding: 0;
  }

  /* ==== Slider Style === */
  .Modern-Slider .item .img-fill {
    height: auto;
    background: #000;
  }

  .Modern-Slider .item .img-fill .info {
    position: absolute;
    width: 100%;
    height: 40%;
    top: 35%;
    left: 0px;
    background: rgba(0, 0, 0, 0.5);
    line-height: 100%;
    text-align: center;
  }

  .Modern-Slider .item .img-fill img {
    filter: blur(4px);
    height: auto;
    width: 100%;
    position: relative;
    display: inline-block;
    max-width: none;
    object-fit: scale-down;
  }

  .Modern-Slider .item .info > div {
    display: inline-block !important;
    vertical-align: middle;
  }
  /* 
.Modern-Slider .NextArrow{
  position:absolute;
  top:50%;
  right:20px;
  width:45px;
  height:45px;
  background:rgba(0,0,0,.50);
  border:0 none;
  margin-top:-22.5px;
  text-align:center;
  font:20px/45px FontAwesome;
  color:#FFF;
  z-index:5;
} */
  .slick-next {
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 1000;
  }
  .slick-prev {
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 1000;
  }

  /* .Modern-Slider .NextArrow:before{content:'\f105';} */
  /* 
.Modern-Slider .PrevArrow{
  position:absolute;
  top:50%;
  left:20px;
  width:45px;
  height:45px;
  background:rgba(0,0,0,.50);
  border:0 none;
  margin-top:-22.5px;
  text-align:center;
  font:20px/45px FontAwesome;
  color:#FFF;
  z-index:5;
} */

  /* .Modern-Slider .PrevArrow:before{content:'\f104';} */

  .Modern-Slider .slick-dots {
    position: absolute;
    height: 5px;
    background: rgba(255, 255, 255, 0.2);
    bottom: 0px;
    width: 99.5%;
    left: 0px;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
  }
  .Modern-Slider .slick-dots li button {
    display: none;
  }
  .Modern-Slider .slick-dots li {
    float: left;
    width: 0px;
    height: 5px;
    background: #d62828;
    position: absolute;
    left: -5px;
    bottom: 0px;
  }

  .Modern-Slider .slick-dots li.slick-active {
    width: 99%;
    animation: ProgressDots 11s both;
  }

  .Modern-Slider .item h3 {
    font: 30px/50px RalewayB;
    text-transform: uppercase;
    color: #fff;
    animation: fadeOutRight 1s both;
    margin: 0;
    padding: 0;
  }

  .Modern-Slider .item h5 {
    margin: 0;
    padding: 0;
    font: 15px/30px RalewayR;
    color: #fff;
    max-width: 600px;
    overflow: hidden;
    height: 60px;
    animation: fadeOutLeft 1s both;
  }

  .Modern-Slider .item.slick-active h3 {
    animation: fadeInDown 1s both 1s;
  }

  .Modern-Slider .item.slick-active h5 {
    animation: fadeInLeft 1s both 1.5s;
  }

  .Modern-Slider .item.slick-active {
    animation: Slick-FastSwipeIn 1s both;
  }

  .Modern-Slider {
    background: #000;
  }

  /* ==== Slider Image Transition === */
  @keyframes Slick-FastSwipeIn {
    0% {
      transform: rotate3d(0, 1, 0, 150deg) scale(0) perspective(400px);
    }
    100% {
      transform: rotate3d(0, 1, 0, 0deg) scale(1) perspective(400px);
    }
  }

  @-webkit-keyframes ProgressDots {
    from {
      width: 0px;
    }
    to {
      width: 100%;
    }
  }
  @keyframes ProgressDots {
    from {
      width: 0px;
    }
    to {
      width: 100%;
    }
  }

  /* ==== Slick Slider Css Ruls === */
  .slick-slider {
    position: relative;
    display: block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: hand;
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;
    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slide {
    display: none;
    float: left /* If RTL Make This Right */;
    height: 100%;
    min-height: 1px;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  @media (max-width: 600) {
    h3 {
      font-size: 18px;
    }
    h5 {
      font-size: 13px;
    }
  }
`;
var settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  dots: true,
  pauseOnDotsHover: true,
  cssEase: "linear",
  // fade:true,
  draggable: false,
};
const Carousel2 = () => {
  return (
    <Carousel2Div>
      <Slider {...settings} className="Modern-Slider">
        <div className="item">
          <div className="img-fill">
            <img alt="" src="/images/html.png" />
            <div className="info">
              <div>
                <h3>Front-end development tools</h3>
                <h5>HTML</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <img alt="" src="/images/js.jpg" />
            <div className="info">
              <div>
                <h3>Front-end development tools</h3>
                <h5>JAVASCRIPT</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <img alt="" src="/images/react.jpg" />
            <div className="info">
              <div>
                <h3>Front-end development tools</h3>
                <h5>REACT JS</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <img alt="" src="/images/styled-components.png" />
            <div className="info">
              <div>
                <h3>Front-end development tools</h3>
                <h5>STYLED-COMPONENTS</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <img alt="" src="/images/redux.jpg" />
            <div className="info">
              <div>
                <h3>Front-end development tools</h3>
                <h5>REDUX JS</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <img alt="" src="/images/nextjs.png" />
            <div className="info">
              <div>
                <h3>Front-end development tools</h3>
                <h5>NEXT JS</h5>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </Carousel2Div>
  );
};

export default Carousel2;

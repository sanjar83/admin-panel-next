import React from "react";
import styled from "styled-components";

const Button1Div = styled.div`
  display: flex;
  justify-content: center;

  [class*="fab"] {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
  }
  .fab-shadow {
    width: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 400;
    transition: opacity 0.5s, width 0s 0.5s;
  }
  .fab-button {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin: 16px;
    display: table;
    background: #2196f3;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    position: relative;
    transition: box-shadow 0.2s;
  }
  .fab-button.red {
    background: #f44336;
  }
  .fab-button.pink {
    background: #e91e63;
  }
  .fab-button:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  }
  .fab-button:focus {
    z-index: 450;
    pointer-events: none;
  }
  .fab-button:focus ~ .fab-shadow {
    width: 100%;
    opacity: 1;
    transition: opacity 0.5s, width 0s;
  }
  .fab-button div {
    width: 6px;
    height: 6px;
    background: #fff;
    margin: 29px;
    border-radius: 100%;
    box-shadow: 0 -11px #fff, 0 11px #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
      0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
      0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
    transition: all 0.5s cubic-bezier(0.5, 2, 0.5, 1);
  }
  .fab-button:focus .dot {
    width: 4px;
    height: 4px;
    margin: 30px;
    border-radius: 0;
    box-shadow: 0 0 #fff, 0 0 #fff, 0 -3px #fff, 0 3px #fff, -3px 0 #fff,
      3px 0 #fff, 0 -6px #fff, 0 6px #fff, -6px 0 #fff, 6px 0 #fff, 0 -9px #fff,
      0 9px #fff, -9px 0 #fff, 9px 0 #fff, 0 -12px #fff, 0 12px #fff,
      -12px 0 #fff, 12px 0 #fff;
    transform: rotate(45deg);
  }
  .fab-button .plus {
    width: 4px;
    height: 4px;
    margin: 30px;
    border-radius: 0;
    box-shadow: 0 0 #fff, 0 0 #fff, 0 -3px #fff, 0 3px #fff, -3px 0 #fff,
      3px 0 #fff, 0 -6px #fff, 0 6px #fff, -6px 0 #fff, 6px 0 #fff, 0 -9px #fff,
      0 9px #fff, -9px 0 #fff, 9px 0 #fff, 0 -12px #fff, 0 12px #fff,
      -12px 0 #fff, 12px 0 #fff;
  }
  .fab-button:focus .plus {
    transform: rotate(45deg);
  }
  .fab-button .menu {
    width: 4px;
    height: 4px;
    margin: 30px;
    border-radius: 0;
    box-shadow: -12px -9px #fff, -9px -9px #fff, -6px -9px #fff, -3px -9px #fff,
      0 -9px #fff, 3px -9px #fff, 6px -9px #fff, 9px -9px #fff, 12px -9px #fff,
      -12px 0 #fff, -9px 0 #fff, -6px 0 #fff, -3px 0 #fff, 0 0 #fff, 3px 0 #fff,
      6px 0 #fff, 9px 0 #fff, 12px 0 #fff, -12px 9px #fff, -9px 9px #fff,
      -6px 9px #fff, -3px 9px #fff, 0 9px #fff, 3px 9px #fff, 6px 9px #fff,
      9px 9px #fff, 12px 9px #fff;
  }
  .fab-button:focus .menu {
    box-shadow: 0 -12px #fff, 0 -9px #fff, 0 -6px #fff, 0 -3px #fff, 0 0 #fff,
      0 -3px #fff, 0 -6px #fff, 0 -9px #fff, 0 -12px #fff, -12px 0 #fff,
      -9px 0 #fff, -6px 0 #fff, -3px 0 #fff, 0 0 #fff, 3px 0 #fff, 6px 0 #fff,
      9px 0 #fff, 12px 0 #fff, 0 12px #fff, 0 9px #fff, 0 6px #fff, 0 3px #fff,
      0 0 #fff, 0 3px #fff, 0 6px #fff, 0 9px #fff, 0 12px #fff;
    transform: rotate(45deg);
  }
  .fab-button:focus + .fab-options,
  .fab-options:active {
    width: auto;
    overflow: initial;
    margin-left: 85px;
    margin-top: 0;
  }
  .fab-options {
    position: absolute;
    width: 0;
    overflow: hidden;
    z-index: 500;
    margin: -8px 20px 0 20px;
  }
  .fab-options .fab-option {
    display: table;
    color: #fff;
    margin: 8px;
    text-decoration: none !important;
  }
  .fab-options .fab-option * {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.2s;
  }
  .fab-options .fab-option:hover * {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  }
  .fab-options .fab-option p {
    font-size: 18px;
    display: inline-block;
    padding: 6px 8px;
    margin: 0;
    background: #424242;
    position: relative;
    top: -5px;
    left: 8px;
    border-radius: 2px;
  }
  .fab-options .fab-option i {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: #fff;
    padding: 6px;
    color: #424242;
  }

  @media (max-width: 600px) {
    .fab-button {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      margin: 2%;
    }
  }
`;

const Button1 = () => {
  return (
    <Button1Div>
      <a className="fab-button" href="">
        <div className="dot"></div>
      </a>
      <div className="fab-options">
        <a className="fab-option" href="#">
          <i className="material-icons">refresh</i>
          <p>Refresh</p>
        </a>
        <a className="fab-option" href="#">
          <i className="material-icons">help</i>
          <p>Support</p>
        </a>
        <a className="fab-option" href="#">
          <i className="material-icons">info</i>
          <p>Documantation</p>
        </a>
        <a className="fab-option" href="#">
          <i className="material-icons">settings</i>
          <p>Settings</p>
        </a>
      </div>

      <a className="fab-button red" href="">
        <div className="plus"></div>
      </a>

      <div className="fab-options">
        <a className="fab-option" href="#">
          <i className="material-icons">insert_drive_file</i>
          <p>New File</p>
        </a>
        <a className="fab-option" href="#">
          <i className="material-icons">folder</i>
          <p>New Folder</p>
        </a>
      </div>

      <a className="fab-button pink" href="">
        <div className="menu"></div>
      </a>
      <div className="fab-options">
        <a className="fab-option" href="#">
          <i className="material-icons">home</i>
          <p>Home</p>
        </a>
        <a className="fab-option" href="#">
          <i className="material-icons">account_circle</i>
          <p>About Us</p>
        </a>
      </div>

      <div className="fab-shadow"></div>
    </Button1Div>
  );
};

export default Button1;

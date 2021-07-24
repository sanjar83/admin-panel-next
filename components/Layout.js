import React, { useState, useEffect } from "react";
import styles from "../styles/Layout.module.css";
import styled from "styled-components";
import MainNavbar from "./mainNavbar/MainNavbar";
import dynamic from "next/dynamic";
import Header from "./header/Header";

const BackToTop = dynamic(
  () => {
    return import("./backtotop/BackToTop");
  },
  { ssr: false }
);
const LayoutDIV = styled.div`
  /* display: flex;
  flex-direction: row; */
  background: url("./images/blur-bg.jpg") center center no-repeat;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  /* width: 100vw; */
  height: 100%;
  background-size: cover;
  box-sizing: border-box;
  overflow-y: scroll;
  h1 {
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }
  /* margin: 0 auto; */
`;

const Layout = ({ children }) => {
  return (
    <LayoutDIV className="container-lg px-0">
      <Header />
      <MainNavbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <div className="scroll-to-top">
          <BackToTop />
        </div>
      </div>
    </LayoutDIV>
  );
};

export default Layout;

import React from "react";
import styled from "styled-components";
import Logo from "../logo/Logo";

const HeaderDIV = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  height: 60px;
  width: 100%;
  padding: 10px 25px;
  z-index: 999999999;
`;

const Header = () => {
  return (
    <HeaderDIV>
      <div>
        <Logo />
      </div>
    </HeaderDIV>
  );
};

export default Header;

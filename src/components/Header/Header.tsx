import React from 'react';
import styled from 'styled-components';

import { Logo } from '../Logo';

export const HeaderWrapper = styled.header`
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-color: black;
  width: 100%;
  flex-shrink: 0;
  padding: 21px 0 21px 0;
`;

export const MenuWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  color: white;
  margin: 15px;
  font-family: 'SimplonNorm-Medium';
  font-size: 15px;
  letter-spacing: 1.5px;
  line-height: 22.5px;
  text-decoration: none;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <Logo />
        <Navigation>
          <Link href="./">NEWS</Link>
          <Link href="./">PARTNERS</Link>
          <Link href="./">JOIN</Link>
          <Link href=":/">LOG IN</Link>
        </Navigation>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

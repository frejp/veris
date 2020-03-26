import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  max-width: 1024px;
  margin: auto;
`;

export const FooterWrapper = styled.footer`
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-color: white;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 77px;
`;

export const NavWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1;
`;

export const Nav = styled.nav`
  flex-direction: row;
  padding: 0px;
  display: flex;
`;

export const NavItem = styled.div`
  -webkit-box-align: center;
  align-items: center;
  width: auto;
  border-bottom: none;
  padding: 0px;
  margin: 0px 15px;
`;

export const ImageLink = styled.a`
  cursor: pointer;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const Link = styled.a`
  color: black;
  opacity: 0.5;
  font-weight: 400;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-family: SimplonNorm-Medium, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1.95px;
  line-height: 20px;
  -webkit-font-smoothing: auto;
`;

export const SocialStuff = styled.div`
  height: 77px;
`;

export const SocialItemsWrapper = styled.div`
  display: flex;
  margin: 20px;
`;

export const SocialItemWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-width: 30px;
  flex: 0;
`;

interface ImageProps {
    style: any;
}

export const Image = styled.img<ImageProps>`
  width: 27px;
  height: auto;
  opacity: 0.5;
  transition: all 250ms ease-in-out 0s;
  :hover {
    opacity: 1;
  }
`;

export const CopyrightWrapper = styled.div`
  margin: 0px 20px;
  font-family: SimplonNorm-Medium, Helvetica, sans-serifpx;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 15px;
  font-weight: 400;
  -webkit-font-smoothing: auto;
`;

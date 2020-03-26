import React from 'react';

// @ts-ignore
import faceBookLogo from '../../images/facebook.png';
// @ts-ignore
import instagramLogo from '../../images/instagram.png';
// @ts-ignore
import linkedinLogo from '../../images/linkedin.png';
// @ts-ignore
import twitterLogo from '../../images/twitter.png';
import {
  FooterWrapper,
  FlexWrapper,
  NavWrapper,
  Nav,
  NavItem,
  SocialStuff,
  SocialItemWrapper,
  SocialItemsWrapper,
  Image,
  Link,
  CopyrightWrapper,
  ImageLink,
} from './styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FlexWrapper>
        <NavWrapper>
          <Nav>
            {['NEWS', 'PARTNERS', 'API', 'HELP', 'TERMS', 'PRIVACY', 'CONTACT'].map((item) => (
              <NavItem>
                <Link href="google.com">{item}</Link>
              </NavItem>
            ))}
          </Nav>
        </NavWrapper>
        <SocialStuff>
          <SocialItemsWrapper>
            {[faceBookLogo, twitterLogo, linkedinLogo, instagramLogo].map((logo) => (
              <SocialItemWrapper>
                <ImageLink>
                  <Image
                    src={logo}
                    style={logo === linkedinLogo ? { width: '24px', transform: 'translateY(-3px)' } : null}
                  />
                </ImageLink>
              </SocialItemWrapper>
            ))}
          </SocialItemsWrapper>
        </SocialStuff>
        <CopyrightWrapper>© Verisart 2020</CopyrightWrapper>
      </FlexWrapper>
    </FooterWrapper>
  );
};

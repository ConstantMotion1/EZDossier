import React from 'react';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>       
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              EZ Dossier
            </SocialLogo>
            <WebsiteRights>EZ Dossier © 2022 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://github.com/ConstantMotion1/EZDossier' target='_blank' aria-label='Github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

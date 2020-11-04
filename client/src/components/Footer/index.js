import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {
	FaFacebook, 
	FaInstagram, 
	FaYoutube, 
	FaTwitter, 
	FaLinkedin
} from 'react-icons/fa';

import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLink,
	FooterLinkTitle,
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
	}
	
	return(
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle></FooterLinkTitle>
							<FooterLink to="/signin">Home</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle></FooterLinkTitle>
							<FooterLink to="/signin">Menu</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle></FooterLinkTitle>
							<FooterLink to="/signin">Catering</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle></FooterLinkTitle>
							<FooterLink to="/signin">Contact</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							Taqueria Los Cunados
						</SocialLogo>
						<WebsiteRights>Taqueria Los Cunados CopyRight {new Date().getFullYear()} All Rights reserved.</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Youtube">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Linkedin">
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
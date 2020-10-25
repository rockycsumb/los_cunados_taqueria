import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {
	Nav, 
	NavbarContainer, 
	NavLogo, 
	MobileIcon, 
	NavMenu, 
	NavItem, 
	NavLinks, 
	NavBtn, 
	NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) =>{
	const [scrollNav, setScrollNav] = useState(false);
	
	const changeNav = () => {
		if(window.scrollY >= 80){
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	}
	
	useEffect(()=>{
		window.addEventListener('scroll', changeNav);
	}, []);
	
	const toggleHome = () => {
		scroll.scrollToTop();
	}
	
	return (
		<>
			<IconContext.Provider value={{color: 'red'}}> 
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to="/" onClick={toggleHome}>
							<div>
								Taqueria
							</div>
							<div>
								Los Cunados
							</div>
						</NavLogo>
						<MobileIcon onClick={toggle} >
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks 
									to="home"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
								>
									Home
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks 
									to="menu"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={0}
								>
									Menu
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks 
									to="catering"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={0}
								>
									Catering
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks 
									to="signup"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
								>
									Location
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks 
									to="Contact"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
								>
									Contact
								</NavLinks>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink
								to={{ pathname: "https://www.doordash.com/store/taqueria-los-cunados-milpitas-4964/en-US"}} 
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
								target="_blank"
							>
								Start Order
							</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	)
}

export default Navbar;
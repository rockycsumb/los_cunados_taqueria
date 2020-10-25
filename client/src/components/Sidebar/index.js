import React from 'react';
import {
	SidebarContainer, 
	Icon, 
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute
} from './SidebarElements';


//SidebarWrapper
//SidebarMenu
//SidebarLink

const Sidebar = ({isOpen, toggle}) =>{
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle} >
			<Icon onClick={toggle} >
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="home" onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink to="menu" onClick={toggle}>
						Menu
					</SidebarLink>
					<SidebarLink to="catering" onClick={toggle}>
						Catering
					</SidebarLink>
					<SidebarLink to="Location" onClick={toggle}>
						Location
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute
						to={{ pathname: "https://www.doordash.com/store/taqueria-los-cunados-milpitas-4964/en-US"}} 
						target="_blank"
						>
						Start Order
					</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar;
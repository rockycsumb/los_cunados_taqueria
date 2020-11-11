import styled from 'styled-components';
import {GiTacos} from 'react-icons/gi';

export const MenuContainer = styled.div`
	color: #fff;
	
	background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
	@media screen and (max-width: 768px){
		padding: 100px 0;
	}
`;

export const MenuWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;

	@media screen and (max-width: 480px){
		height: 750px;
	}
`;


export const MenuRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

	@media screen and (max-width: 768px){
		grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
	}
`;

export const Column1 = styled.div`
	
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
	height: 380px;
`;

export const Column2 = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	margin-bottom: 15px;
	padding: 10px 15px;
	grid-area: col2;
	height: 380px;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const TopLine = styled.p`
	color: #01bf71;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

	@media screen and (max-width: 480px){
		font-size: 32px;
	}
`;

export const Subtitle = styled.p`
	color: #fff;
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({darkText}) =>(darkText ? '#010606' : "#fff")};
`;




export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	
`

export const Icon = styled(GiTacos)`
	margin-top: 25px;
	font-size: 200px;
	color: #F0B002;
	
`
export const MenuDisplayContainer = styled.div`
	margin-top: 15px;
	
`

export const MenuList = styled.div`
	display:flex;
	justify-content: space-between;
`
export const MenuItem = styled.div`
	font-size: 18px;
	color: #010606;
`

export const MenuItemButton = styled.button`
	border-radius: 50px;
	border: 1px solid #01bf71;
	background: #01bf71;
	padding: 10px 22px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	color: #fff;
	margin-right: 5px;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
		border: 1px solid #01bf71;
		border-radius: 50px;
	}
`;

export const MenuPrice = styled.div`
	font-size: 18px;
	color: #010606;
`




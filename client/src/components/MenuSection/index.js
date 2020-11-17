import React, {useEffect, useState} from 'react';
import {Button} from '../ButtonElement';
import MenuDisplay from './MenuDisplay';
import axios from 'axios';

import './menudisplay.css';

import { 
	MenuContainer,
	MenuWrapper,
	MenuRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
	IconContainer,
	Icon,
	MenuItemButton
} from './MenuElements';

const Menu = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headLine,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2
}) =>{
	
	const[displayInfo, setDisplayInfo] = useState([
			{item: "Lunch Taco", price: 2.99},
			{item: "Lunch Burrito", price: 5.99},
			{item: "Lunch Nachos", price: 5.99},
			{item: "Lunch Burrito", price: 5.99},
			{item: "Lunch Nachos", price: 5.99},
			{item: "Lunch Burrito", price: 5.99},
			{item: "Lunch Nachos", price: 5.99},
			{item: "Lunch Burrito", price: 5.99},
			{item: "Lunch Nachos", price: 5.99},
			{item: "Lunch Burrito", price: 5.99}
	])
	const[menuItemSelect, setMenuItemSelect] = useState("Lunch");
	
	const[switching, setSwitching] = useState(false);
	
	
	
	useEffect(()=>{
		const getMenuData = async () => {
			await axios.get('https://strapi-test-demo.herokuapp.com/posts')
			.then(response => response)
			.then(data => {
				console.log('from use eff ', data);
			})
		}
		getMenuData();
	}, []);
	  
	
	
	
	useEffect(()=>{
		
		
	}, displayInfo, switching, menuItemSelect);
	
	let menuItem = [
		"Lunch",
		"Tacos",
		"Catering"
	]
	
	let menuItemInfo = {
		Lunch: [
			{item: "Lunch Taco", price: 2.99},
			{item: "Lunch Burrito", price: 5.99},
			{item: "Lunch Nachos", price: 5.99},
			{item: "Lunch Burrito", price: 5.99},
			{item: "Lunch Nachos", price: 5.99},
			{item: "Lunch Burrito", price: 5.99},
			{item: "Lunch Nachos", price: 5.99},
			{item: "Lunch Burrito", price: 5.99},
			{item: "Lunch Nachos", price: 5.99}
		],
		Tacos: [
			{item: "Taco Taco", price: 2.99},
			{item: "Taco Burrito", price: 5.99},
			{item: "Taco Nachos", price: 5.99},
			{item: "Taco Burrito", price: 5.99},
			{item: "Taco Nachos", price: 5.99},
			{item: "Taco Burrito", price: 5.99},
			{item: "Taco Nachos", price: 5.99},
			{item: "Taco Burrito", price: 5.99},
			{item: "Taco Nachos", price: 5.99}
		],
		Catering: [
			{item: "Catering Taco", price: 2.99},
			{item: "Catering Burrito", price: 5.99},
			{item: "Catering Nachos", price: 5.99},
			{item: "Catering Burrito", price: 5.99},
			{item: "Catering Nachos", price: 5.99},
			{item: "Catering Burrito", price: 5.99},
			{item: "Catering Nachos", price: 5.99},
			{item: "Catering Burrito", price: 5.99}
		]
	}
	
	const handleClick = e =>{
		e.preventDefault();
		
		setSwitching(true);
		setTimeout(()=>{
			setSwitching(false)
		}, 1000);
		
		setMenuItemSelect(e.target.value);
		setDisplayInfo(menuItemInfo[e.target.value]);
	}
	
	return (
		<>
			<MenuContainer lightBg={lightBg} id={id}>
				<MenuWrapper>
					<MenuRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>  
								<BtnWrap>
									<Button 
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
										dark2={dark2 ? 1: 0}
									>
										{buttonLabel}</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<TextWrapper>
								<TopLine>Menu</TopLine>
								<Heading lightText={lightText}>{menuItemSelect}</Heading>
								
								{
									menuItem.map(item =>(
										<MenuItemButton 
											onClick={e => handleClick(e)} 
											value={item}
											disabled={switching}
											>
											{item}
										</MenuItemButton>
									))
								}
								
								{switching ? (
									<IconContainer>
										<Icon className="shaking"/>
									</IconContainer>
										
									):(
									<MenuDisplay info={displayInfo} />
								)}
								
							</TextWrapper>
						</Column2>
					</MenuRow>
				</MenuWrapper>
			</MenuContainer>
		</>
	)
}

export default Menu;
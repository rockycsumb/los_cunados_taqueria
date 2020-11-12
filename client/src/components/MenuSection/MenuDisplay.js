import React, {useEffect} from 'react';
import './menudisplay.css';

import {
	MenuDisplayContainer,
	MenuList,
	MenuItem,
	MenuPrice
} from './MenuElements';

const MenuDisplay = ({info}) =>{
	console.log(info)
	
	return ( 
		
		<MenuDisplayContainer>
				{info.map(item =>(
				<MenuList>
					<MenuItem>
						{item.item}
					</MenuItem>
					<MenuPrice>
						${item.price}
					</MenuPrice>
				</MenuList>	
				))}
		</MenuDisplayContainer>
	)
}
	
	


export default MenuDisplay;
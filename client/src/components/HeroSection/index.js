import React, {useState} from 'react';
import Video from '../videos/tacovideo.mp4';
import {Button} from '../ButtonElement';
import {
	HeroContainer, 
	HeroBg, 
	VideoBg, 
	HeroContent, 
	HeroH1, 
	HeroP,
	HeroBtnWrapper,
	HeroBtnLink,
	ArrowForward,
	ArrowRight
} from './HeroElements';



const HeroSection = () =>{
	
	const [hover, setHover]= useState(false);
	
	const onHover = () =>{
		setHover(!hover);
	}
	
	const image = '';
	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} poster={require('../images/hp_bg.png')} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Taqueria Los Cunados</HeroH1>
				<HeroP>
					Delicious Mexican food, tacos, burritos,
					quesadillas, tortas and more. Catering available.
				</HeroP>
				<HeroBtnWrapper>
					<HeroBtnLink
						to={{ pathname: "https://www.doordash.com/store/taqueria-los-cunados-milpitas-4964/en-US"}}
						target="_blank"
						onMouseEnter={onHover} 
						onMouseLeave={onHover}
						primary='true'
						dark='true'
						>
						Start Order {hover ? <ArrowForward /> : <ArrowRight />}
					</HeroBtnLink>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection;
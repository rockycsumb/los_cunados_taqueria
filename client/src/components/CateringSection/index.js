import React from 'react';
import {Button} from '../ButtonElement';
import { 
	CateringContainer,
	CateringWrapper,
	CateringRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
	Form,
	FormRow,
	FormInput,
	FormTextArea,
	FormButton
} from './CateringElements';

const Catering = ({
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
	
	return (
		<>
			<CateringContainer lightBg={lightBg} id={id}>
				<CateringWrapper>
					<CateringRow imgStart={imgStart}>
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
							<ImgWrap>
								<Img src={img} alt={alt}/>
							</ImgWrap>
						</Column2>
					</CateringRow>
					
					<h1>Catering Form goes here</h1>
					
					<Form>
						<FormRow>
							<FormInput>Name</FormInput>
							<FormInput>Email</FormInput>
						</FormRow>
						<FormRow>
							<FormInput>Address</FormInput>
							<FormInput>Phone</FormInput>
						</FormRow>
						<FormRow>
							<FormInput>Day of Event</FormInput>
							<FormInput>Time of Event</FormInput>
							<FormInput>Number of People</FormInput>
						</FormRow>
						<FormTextArea />
						<FormButton>Submit</FormButton>
					</Form>
					
				</CateringWrapper>
			</CateringContainer>
		</>
	)
}

export default Catering;
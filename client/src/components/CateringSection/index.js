import React, {useState} from 'react';
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
	FormLabel,
	FormItem,
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
	
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		address: "",
		phone: "",
		date: "",
		time: "",
		persons: "",
		message: ""
	});
	
	const {
		name,
		email,
		address,
		phone,
		date,
		time,
		persons,
		message
	} = formData;
	
	const onChange = e => 
		setFormData({...formData, [e.target.name]: e.target.value});
	
	
	const onSubmit = e =>{
		e.preventDefault();
		console.log('sent ', formData);
	}
	
	
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
					
					<h2>Send us information about the event:</h2>
					
					<Form onSubmit={e => onSubmit(e)}>
						<FormRow>
							<FormItem>
								<FormLabel htmlFor="name">
									Name
								</FormLabel>
								<FormInput 
									type="text"
									id="name"
									name="name"
									value={name}
									onChange={e => onChange(e)}
									placeholder="Name"
								/>
							</FormItem>
							
							<FormItem>
							<FormLabel htmlFor="email">
								Email
							</FormLabel>
								<FormInput 
									type="text"
									id="email"
									name="email"
									value={email}
									onChange={e => onChange(e)}
									placeholder="Email"
								/>
							</FormItem>
						</FormRow>
						<FormRow>
							<FormItem>
								<FormLabel htmlFor="address">
									Address
								</FormLabel>
								<FormInput
									type="text"
									id="address"
									name="address"
									value={address}
									onChange={e => onChange(e)}
									placeholder="Address"
								/>
							</FormItem>	
							<FormItem>
								<FormLabel htmlFor="phone">
									Phone
								</FormLabel>
								<FormInput
									type="text"
									id="phone"
									name="phone"
									value={phone}
									onChange={e => onChange(e)}
									placeholder="Phone"
								/>
							</FormItem>
						</FormRow>
						<FormRow>
							<FormItem>
								<FormLabel htmlFor="date">
									Date of event
								</FormLabel>
								<FormInput 

								/>
							</FormItem>
							<FormItem>
								<FormLabel htmlFor="time">
									Time of the event
								</FormLabel>
								<FormInput 

								/>
							</FormItem>
							<FormItem>
								<FormLabel htmlFor="persons">
									Number of persons
								</FormLabel>
								<FormInput 

								/>
							</FormItem>
							
						</FormRow>
						<FormTextArea 
							id="message"
							name="message"
							value={message}
							onChange={e => onChange(e)}
							placeholder="Comments"
						/>
						<FormButton type="submit">Submit</FormButton>
					</Form>
					
				</CateringWrapper>
			</CateringContainer>
		</>
	)
}

export default Catering;
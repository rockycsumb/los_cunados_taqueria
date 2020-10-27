import React, {useState} from 'react';
import {Button} from '../ButtonElement';
import './contact.css';
import { 
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img
} from './InfoElements';

const Contact = ({
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
	const [sendingMessage, setSendingMessage] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});
	
	const {
		name,
		email,
		message
	} = formData;
	
	const onChange = e =>
		setFormData({...formData, [e.target.name]: e.target.value});
	
	const onSubmit = e => {
		e.preventDefault();
		
		setSendingMessage(true);
		
		let templateParams = {
			name: name,
			email: email,
			message: message	
		}
			console.log("formData from contact ", formData);
		// var service_id = 'gmail';
		// var template_id = 'resume_form';
		// var user_id = 'user_ziUA20aQdVmniRSrsE8jQ';
		
		// emailjs.send(service_id, template_id, templateParams, user_id);
	
		setFormData({
			name: "",
			email: "",
			message: ""
		});
		
		setTimeout(()=>{
			setTimeout(()=>{
				// console.log("send a message****")
				setSendingMessage(false);
				setMessageSent(false);
			}, 2000);
			setMessageSent(true);
			// console.log("message sent*****")
		}, 2000);
	}
	
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>  
								
							</TextWrapper>
						</Column1>
						<Column2>
							{sendingMessage && !messageSent ? (
								<div className="Contact-message-container">
									<div class="spinner-border spinner-size text-secondary" role="status">
									  <span class="sr-only">Loading...</span>
									</div>
								</div>

							) : (

								messageSent ? (
									<div className="Contact-message-container">
										<div>
											<h3>Message Sent!</h3>

										</div>
									</div>

								) : (
								<div className="Contact-form">
								<form onSubmit={e => onSubmit(e)}>
									<div className="form-group text-center  Contact-form-row">
										<div className="Contact-form-row-item">
											<label className="form-control-label" htmlFor="input-name">
												Name
											</label>
											<input
												type="text"
												id="input-name"
												className="form-control"

												value={name}
												name="name"
												onChange={e => onChange(e)}
												required
											/>
										</div>
										<div>
											<label className="form-control-label" htmlFor="input-email">
												Email
											</label>
											<input
												type="email"
												id="input-email"
												className="form-control"

												value={email}
												name="email"
												onChange={e => onChange(e)}
												required
											/>
										</div>
									</div>
									<div className="Contact-textarea-container">
										<div className="form-group text-center Contact-textarea-item">
											<label htmlFor="input-textarea">Message</label>
											<textarea 
												className="form-control Contact-form-textarea" 
												id="input-textarea" 
												rows="8"
												placeholder=""
												name="message"
												value={message}
												onChange={e => onChange(e)}
											></textarea>
										</div>
									</div>
									<div className="Contact-form-button-container">
										<div className="Contact-form-submit">
											<button 
												type="submit" 
												className="btn btn-dark btn-lg btn-block"
												>Submit
											</button>
										</div>
									</div>
								</form>
							</div>
							))}
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	)
}

export default Contact;
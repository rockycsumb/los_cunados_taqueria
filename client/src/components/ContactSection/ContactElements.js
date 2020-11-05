import styled from 'styled-components';

export const ContactContainer = styled.div`
	color: #fff;
	background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
	@media screen and (max-width: 768px){
		padding: 100px 0;
	}
`;

export const ContactWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;


export const ContactRow = styled.div`
	
	// border: 4px solid orange;
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
	height: 460px;
	@media screen and (max-width: 768px){
		height: 250px;
	}
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 20px;
	grid-area: col2;
	height: 460px;
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

export const ContactMessageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 300px;
`;

export const SpinnerBorder = styled.div`
	
	width: 5em; 
	height: 5em;
`;

export const LoadingMessage = styled.div`
	 border: 16px solid #f3f3f3;
	 border-radius: 50%;
	 border-top: 16px solid #CE1126;
	 width: 120px;
	 height: 120px;
	 -webkit-animation: spin 2s linear infinite; /* Safari */
	 animation: spin 2s linear infinite;

	 @-webkit-keyframes spin {
  		0% { -webkit-transform: rotate(0deg); }
  		100% { -webkit-transform: rotate(360deg); }
	}

	@keyframes spin {
	  0% { transform: rotate(0deg); }
	  100% { transform: rotate(360deg); }
	}

`;

export const ContactFormContainer = styled.div`
	border-radius: 5px;
	background-color: #f2f2f2;
	padding: 20px;
	color: black;
`;

export const Form = styled.form`

`;

export const FormLabel = styled.label`
	
`;

export const FormInput = styled.input`
	width: 100%;
	  padding: 12px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  box-sizing: border-box;
	  margin-top: 6px;
	  margin-bottom: 16px;
	  resize: vertical;
`;

export const FormTextArea = styled.textarea`
	  width: 100%;
	  padding: 12px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  box-sizing: border-box;
	  margin-top: 6px;
	  margin-bottom: 16px;
	  resize: vertical;
	  height: 150px;
`;

export const FormButton = styled.button`
	  background-color: #01bf71;
	  color: white;
	  padding: 12px 20px;
	  border: none;
	  border-radius: 4px;
	  cursor: pointer;
      border: 1px solid #01bf71;
	  
      &:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
		border: 1px solid #01bf71;
	}
`;


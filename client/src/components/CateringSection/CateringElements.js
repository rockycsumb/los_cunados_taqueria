import styled from 'styled-components';

export const CateringContainer = styled.div`
	color: #fff;
	height: 1100px;
	padding-top: 100px;
	background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
	@media screen and (max-width: 768px){
		padding: 100px 0;
		height: 1700px;
	}

`;

export const CateringWrapper = styled.div`

	display: grid;
	z-index: 1;
	height: 860px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
	
	// @media screen and (max-width: 768px){
	// 	padding: 100px 0;
	// 	height: 1000px;
	// }

	@media screen and (max-width: 480px){
		height: 1000px;
	}
`;


export const CateringRow = styled.div`
	
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
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
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

export const Form = styled.form`
	border-radius: 5px;
	
	background-color: #f2f2f2;
	padding: 20px;
	color: black;
`;

export const FormRow = styled.div`
	
	display: flex;
	justify-content: center;

	@media screen and (max-width: 768px){
		flex-direction: column;

	}
`;

export const FormInput = styled.div`
	  width: 100%;
	  padding: 12px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  box-sizing: border-box;
	  margin-top: 6px;
	  margin-bottom: 16px;
	  resize: vertical;
`;

export const FormTextArea = styled.div`
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


export const FormButton = styled.div`
	  background-color: #01bf71;
	  text-align: center;
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




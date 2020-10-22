import React from 'react';
import Icon1 from '../images/svg-1.svg';
import Icon2 from '../images/svg-2.svg';
import Icon3 from '../images/svg-3.svg';

import {
	ServicesContainer,
	ServicesH1,
	ServiceWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP
} from './ServiceElements';


const Services = () =>{
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServiceWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Reduce Expenses</ServicesH2>
					<ServicesP>We help reduce your fees and increase overall revenue</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Virtual Offices</ServicesH2>
					<ServicesP>Access our platform anywhere in the world</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Premimum Service</ServicesH2>
					<ServicesP>Unclock membership that returns cash back</ServicesP>
				</ServicesCard>
			</ServiceWrapper>
		</ServicesContainer>
	)
}

export default Services;
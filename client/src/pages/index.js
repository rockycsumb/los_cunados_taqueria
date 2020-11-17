import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import CateringSection from '../components/CateringSection';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import {catering} from '../components/CateringSection/Data';
import {menu} from '../components/MenuSection/Data';
import {locationData} from '../components/LocationSection/Data';
import {homeObjTwo as ContactData} from '../components/ContactSection/Data';

const Home = () =>{
	const [isOpen, setIsOpen] = useState(false);
	
	const toggle = () => {
		setIsOpen(!isOpen);
		console.log("open")
	}
	
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<MenuSection {...menu}/>
			<CateringSection {...catering}/>
			<LocationSection {...locationData}/>
			<ContactSection {...ContactData} />
			<Footer />
		</>
	)
}

export default Home;
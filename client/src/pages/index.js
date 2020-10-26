import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import LocationSection from '../components/LocationSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import {homeObjOne, homeObjTwo} from '../components/InfoSection/Data';
import {locationData} from '../components/LocationSection/Data';

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
			<InfoSection {...homeObjOne}/>
			<InfoSection {...homeObjTwo}/>
			<LocationSection {...locationData}/>
			<Services />
			<Footer />
		</>
	)
}

export default Home;
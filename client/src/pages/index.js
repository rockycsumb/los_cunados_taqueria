import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';

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
			<InfoSection {...homeObjThree}/>
			<Services />
			<Footer />
		</>
	)
}

export default Home;
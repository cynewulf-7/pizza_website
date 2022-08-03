import React, {useState} from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    const [isOpen,SetIsOpen] = useState(false);

    const toggle = () => {
        SetIsOpen(!isOpen);
    }

  return (
    <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
            <HeroItems>
                <HeroH1>Greatest Pizza Ever</HeroH1>
                <HeroP>Ready In 60 seconds</HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
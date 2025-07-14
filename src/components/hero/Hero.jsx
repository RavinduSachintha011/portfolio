import React from 'react';
import '../hero/Hero.css';
import { FlipWords } from '../flipwords/flipwords';
import heroImage from '../../assets/HeroImg.png';


export const Hero = () => {
    return (
        <div className='container'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <h1>Hello, I'm <span><FlipWords words={["Ravindu", "Fullstack Developer"]} /></span></h1>
                    <p>I build scalable web applications and elegant user experiences.
                        Lets bring ideas to life through clean code and powerful design.</p>
                    <div>
                        <button className='about-btn'>About Me</button>
                        <button className='cv-btn'>Download CV</button>
                    </div>
                </div>
                <div className='hero-img'>
                    <img src={heroImage} alt="" />
                </div>

            </div>
        </div>
    )
}

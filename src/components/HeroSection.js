import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Your concrete is a click away</h1>
            <p>Let us go to work for you!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Get A Free Quote
                </Button>
                {/* <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play-circle' />
                </Button> */}
            </div>
        </div>
    )
}

export default HeroSection

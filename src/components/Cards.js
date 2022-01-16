import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Checkout our past work!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/test image 1.jpg"
                        text="Test text"
                        label="Test label"
                        path="/portfolio"
                        />
                        <CardItem 
                        src="images/test image 2.jpg"
                        text="Test text"
                        label="Test label"
                        path="/services"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/test image 1.jpg"
                        text="Test text"
                        label="Test label"
                        path="/services"
                        />
                        <CardItem 
                        src="images/test image 2.jpg"
                        text="Test text"
                        label="Test label"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

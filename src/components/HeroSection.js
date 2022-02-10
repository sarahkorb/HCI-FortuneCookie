import React, {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const quotes = ["You have a secret admirer","You will find true love","You will become famous","You will go to jail","You will be eternally happy",
"You will live on the other side of the world","You will have 4 dogs","You will own a boat", "You will die a horrible death", "You will marry the love of your life", 
"You will have 2 children", "You will get your dream job", "You will break your leg", "Someone has a crush on you", "You will find a lucky penny on the ground"]


var index = 8;

function generate(){
  index = Math.floor(Math.random() * quotes.length);
  return index+1;
}
function HeroSection() {
  return (
    <div className='hero-container'>
      <image src='public/images/Fortune-Cookie.jpeg' />
      <h1>What does your future hold?</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick= {generate()}
        >
          Tell me my fortune
        </Button>
        <div/>
      </div>
      <p
                style={{display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 40,
                color: "white"}}>{quotes[index]}</p>
    </div>
  );
}

export default HeroSection;
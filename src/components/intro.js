import React from 'react';
import './introAssets/intro.css';
import { ReactComponent as ArrowIcon } from './introAssets/Arrow.svg';
import { ReactComponent as Line } from './introAssets/Line.svg';
import { ReactComponent as LinkArrow } from './introAssets/LinkArrow.svg';



const Container = (props) => {
    return <div className="intro-container">
        <h2 className="intro-container__title">Enhancing Life</h2>
        <h2 className="intro-container__title">Excelling in Care</h2>
        <h4 className="intro-container__subtitle">Choose Wisely. Choose CBD.</h4>
        <button className="intro-container__button">Start Shopping <Line /></button>
        <a href="" className="intro-container__link">See all products <LinkArrow /></a>
    </div>;
}

const RotatedText = (props) => {
    return <div className="intro-rotated">
        <hr className="intro-rotated__line" />
        <div className="intro-rotated__text">CBD Potion health</div>
    </div>;
}

const Arrow = (props) => {
    return <div className="intro-arrow">
        <ArrowIcon />
    </div>;
}


const Intro = (props) => {
    return <div className="intro">
        <Container />
        <RotatedText />
        <Arrow />
    </div>;
}

export default Intro;
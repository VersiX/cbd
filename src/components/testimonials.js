import React from 'react';
import './testimonialAssets/testimonial.css';
import TestimonialSlider from './testimonialSlider';
import { ReactComponent as StarOn } from './featuredAssets/starOn.svg';
import { ReactComponent as StarOff } from './featuredAssets/starOff.svg';

const RotatedText = (props) => {
    return <div className="testimonial-rotated">
        <div className="testimonial-rotated__text">CBD Every Day</div>
    </div>;
}

const Comment = (props) => {
    let rating = <div className="comment-rating">
        {props.rating > 0 ? <StarOn /> : <StarOff />}
        {props.rating > 1 ? <StarOn /> : <StarOff />}
        {props.rating > 2 ? <StarOn /> : <StarOff />}
        {props.rating > 3 ? <StarOn /> : <StarOff />}
        {props.rating > 4 ? <StarOn /> : <StarOff />}
    </div>;




    return <div className="comment">
        {rating}
        <div className="comment__text">{props.text}</div>
        <div className="comment__author">{props.author}</div>
    </div>
}



const Testimonial = (props) => {
    return <div className="testimonial">
        <div className="testimonial__cover" />
        <RotatedText />
        <TestimonialSlider>
            <Comment rating={5} author="Mark J." text="I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!" />
            <Comment rating={5} author="Mark J." text="I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!" />
            <Comment rating={5} author="Mark J." text="I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!" />
            <Comment rating={5} author="Mark J." text="I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!" />
            <Comment rating={5} author="Mark J." text="I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!" />
        </TestimonialSlider>


    </div>
}

export default Testimonial;
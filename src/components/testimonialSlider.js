import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as LeftArrow } from './testimonialAssets/Left.svg';
import { ReactComponent as RightArrow } from './testimonialAssets/Right.svg';
import './testimonialAssets/testimonial.css';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="tArr--r"
            style={{ ...style }}
            onClick={onClick}
        >
            <RightArrow />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="tArr--l"
            style={{ ...style }}
            onClick={onClick}
        >
            <LeftArrow />
        </div>

    );
}

export default class TestimonialSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            className: "testimonial-slick"
        };
        return (
            <Slider {...settings}>
                {this.props.children}
            </Slider>
        );
    }
}

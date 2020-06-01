import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as LeftArrow } from './featuredAssets/Left.svg';
import { ReactComponent as RightArrow } from './featuredAssets/Right.svg';
import './featuredAssets/featured.css';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="Arr--r"
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
            className="Arr--l"
            style={{ ...style }}
            onClick={onClick}
        >
            <LeftArrow />
        </div>

    );
}

export default class ProductSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            className: "customSlic",
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>
        );
    }
}

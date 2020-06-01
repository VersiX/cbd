import React from 'react';
import './featuredAssets/featured.css';
import ProductSlider from './productSlider';
import { ReactComponent as StarOn } from './featuredAssets/starOn.svg';
import { ReactComponent as StarOff } from './featuredAssets/starOff.svg';
import ProductImg1 from './featuredAssets/product1.png';
import ProductImg2 from './featuredAssets/product2.png';
import ProductImg3 from './featuredAssets/product3.png';
import { ReactComponent as Line } from './introAssets/Line.svg'



const Product = (props) => {
    let rating = <div className="rating">
        {props.rating > 0 ? <StarOn /> : <StarOff />}
        {props.rating > 1 ? <StarOn /> : <StarOff />}
        {props.rating > 2 ? <StarOn /> : <StarOff />}
        {props.rating > 3 ? <StarOn /> : <StarOff />}
        {props.rating > 4 ? <StarOn /> : <StarOff />}
    </div>



    return <div className="product">
        <div className="product-main">
            {rating}
            <h3 className="product-main-title">{props.title}</h3>
            <img src={props.imgSrc} />
        </div>
        <div className="product-footer">
            <div className="product-footer-inner">${props.price} USD</div>
            <button className="product-footer__button">Shop <Line /></button>
        </div>
    </div>;
}






const Featured = (props) => {
    return <section className="featured" id="products">
        <h2 className="featured__title">
            CBD Featured Products
        </h2>
        <ProductSlider>
            <Product title="CBD 500 mg Orange Flavor Tincture" price="49.99" imgSrc={ProductImg1} rating={4} />
            <Product title="Black ICE CBD Muscle Rub 200 mg" price="49.99" imgSrc={ProductImg2} rating={3} />
            <Product title="CBD+Curcumin Coffee 750 mg" price="79.99" imgSrc={ProductImg3} rating={5} />
            <Product title="CBD 500 mg Orange Flavor Tincture" price="49.99" imgSrc={ProductImg1} rating={4} />
            <Product title="Black ICE CBD Muscle Rub 200 mg" price="49.99" imgSrc={ProductImg2} rating={3} />
            <Product title="CBD+Curcumin Coffee 750 mg" price="79.99" imgSrc={ProductImg3} rating={5} />

        </ProductSlider>
    </section>;
}

export default Featured;
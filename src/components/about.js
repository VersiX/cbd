import React from 'react';
import './aboutAssets/about.css';
import TrustLogos from './aboutAssets/Logos.png';
import Tabs from "./Tabs";
import ArticleImg1 from "./aboutAssets/ArticleImg1.png";
import ArticleImg2 from "./aboutAssets/ArticleImg2.png";


const Article = (props) => {
    return <article className="article">
        <div className="article-col">
            <h3 className="article-col__title" >WHAT IT IS AND HOW IT WORKS</h3>
            <p className="article-col__p">
                CBD is short for cannabidiol.
                It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.*
                Charlotte’s Web products have cannabinoids with CBD extract.
            </p>
            <p className="article-col__p">
                Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids),
                CBD comes from the flowers and leaves of the hemp plant.
            </p>
            <p className="article-col__p">
                Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.
            </p>
        </div>
        <div className="article-col">
            <img src={ArticleImg1} className="article-col__img" />
            <img src={ArticleImg2} className="article-col__img" />
        </div>

    </article>;
}



const InfoTabs = (props) => {
    return <div className="about-tabs" >
        <Tabs>
            <div label="WHAT IS CBD?" className="about-tabs-tab">
                <Article />
            </div>
            <div label="BENEFITS" className="about-tabs-tab">
                After 'while, <em>Crocodile</em>!
  </div>
            <div label="OUR DIFFERENCE" className="about-tabs-tab">
                Nothing to see here, this tab is <em>extinct</em>!
  </div>
        </Tabs>
    </div>
}

const Trust = (props) => {
    return <div className="about-trust">
        <h2 className="about-trust__title">
            We are what we are
        </h2>
        <img src={TrustLogos} />
    </div>
}


const About = (props) => {
    return <section className="about" id="about">
        <Trust />
        <InfoTabs />
    </section>;
}

export default About;
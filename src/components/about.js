import React from 'react';
import './aboutAssets/about.css';
import TrustLogos from './aboutAssets/Logos.png';
import Tabs from "./Tabs";
import ArticleImg1 from "./aboutAssets/ArticleImg1.png";
import ArticleImg2 from "./aboutAssets/ArticleImg2.png";


const Article = (props) => {
    return <article className="article">
        <div className="article-col">
            <h3 className="article-col__title" >{props.title}</h3>
            <p className="article-col__p">
                {props.p1}
            </p>
            <p className="article-col__p">
                {props.p2}
            </p>
            <p className="article-col__p">
                {props.p3}
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
                <Article
                    title="WHAT IT IS AND HOW IT WORKS"
                    p1="CBD is short for cannabidiol.
                It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.*
                Charlotte’s Web products have cannabinoids with CBD extract."

                    p2="Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids),
                CBD comes from the flowers and leaves of the hemp plant."

                    p3="Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system."
                />

            </div>


            <div label="BENEFITS" className="about-tabs-tab">
                <Article
                    title="WHAT IT IS AND HOW IT WORKS"
                    p1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, blanditiis obcaecati tempora, quam quae quo nulla
                    facere mollitia animi molestias in illo dignissimos, iusto unde corporis. Dignissimos, quibusdam quod dolorem dolorum,
                    possimus enim expedita recusandae cupiditate mollitia dolor veniam aspernatur quo. "

                    p2="Cum veniam fuga vitae et rem. Maiores
                    voluptates repellendus quo voluptate laboriosam unde, omnis at fuga quod molestias minus."

                    p3="Quis eligendi atque error
                    vitae enim, nisi quo vero modi ipsum molestiae iusto eos eius expedita ipsam minus perspiciatis voluptates rem officiis
                    quia? Id consequuntur fugiat perspiciatis, velit facilis quidem nam possimus minima aperiam quasi dolore architecto
                    excepturi provident eum!"
                />
            </div>


            <div label="OUR DIFFERENCE" className="about-tabs-tab">
                <Article
                    title="WHAT IT IS AND HOW IT WORKS"
                    p1="Lorem ipsum dolor sit amet consectetur adipisicing elit. "

                    p2="Inventore alias non facilis placeat, dicta illum quas, aperiam
                    vitae consequatur reprehenderit neque illo, atque tempore nostrum quam est cupiditate vel assumenda delectus."

                    p3="Accusamus, dolores dolor. Itaque architecto quidem eos ipsa suscipit exercitationem odio, sunt minus voluptatibus dolorum,
                    reprehenderit totam, perspiciatis quae?"
                />
            </div>

        </Tabs>
    </div>
}

const Trust = (props) => {
    return <div className="about-trust">
        <h2 className="about-trust__title">
            We are what we are
        </h2>
        <img src={TrustLogos} className="about-trust__img" />
    </div>
}


const About = (props) => {
    return <section className="about" id="about">
        <Trust />
        <InfoTabs />
    </section>;
}

export default About;
import React from 'react';
import './faqAssets/faq.css';
import { Collapse } from 'react-collapse';
import { ReactComponent as Plus } from './faqAssets/plus.svg'



const Accordeon = (props) => {
    const [activeId, setActiveId] = React.useState(-1);

    const Change0 = () => { activeId == 0 ? setActiveId(-1) : setActiveId(0); };
    const Change1 = () => { activeId == 1 ? setActiveId(-1) : setActiveId(1); };
    const Change2 = () => { activeId == 2 ? setActiveId(-1) : setActiveId(2); };
    const Change3 = () => { activeId == 3 ? setActiveId(-1) : setActiveId(3); };


    return <div className="accordeon">
        <button className={activeId == 0 ? "accordeon__btn accordeon__btn--active" : "accordeon__btn"} onClick={Change0}><Plus />What is Cannabidiol (CBD)?</button>
        <Collapse isOpened={activeId == 0}>
            Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States.
                </Collapse>


        <button className={activeId == 1 ? "accordeon__btn accordeon__btn--active" : "accordeon__btn"} onClick={Change1}><Plus />Is Hemp-Derived Cannabidiol (CBD) Legal?</button>
        <Collapse isOpened={activeId == 1}>
            Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States.
                </Collapse>


        <button className={activeId == 2 ? "accordeon__btn accordeon__btn--active" : "accordeon__btn"} onClick={Change2}><Plus />Are there any negative side effects?</button>
        <Collapse isOpened={activeId == 2}>
            Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States.
                </Collapse>


        <button className={activeId == 3 ? "accordeon__btn accordeon__btn--active" : "accordeon__btn"} onClick={Change3}><Plus />Do you offer a return policy?</button>
        <Collapse isOpened={activeId == 3}>
            Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States.
                </Collapse>
    </div>;
}




const Faq = (props) => {


    return <div className="faq" id="faq">
        <h2 className="faq__title">Frequently asked questions</h2>

        <Accordeon />


    </div>;
}

export default Faq;
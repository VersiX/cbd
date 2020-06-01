import React from 'react';
import './navAssets/nav.css';
import { ReactComponent as SearchLogo } from './navAssets/SearchIco.svg';


const MenuItem = (props) => {
    return <li className="nav-menu__item"><a href={props.link}>{props.text}</a></li>;
}

const Search = (props) => {
    const [isActive, setIsActive] = React.useState(false);

    function ActiveChange(event) {
        setIsActive(!isActive);
    }

    return <div className="nav-additional__item" onClick={ActiveChange}>
        <input className={isActive ? "search__input" : "search__input search--hidden"} />

        <SearchLogo />

        <div className={isActive ? "search__text search--hidden" : "search__text"}> Search</div>
    </div >;
}


const Menu = (props) => {
    return <ul className="nav-menu">
        <MenuItem link="#intro" text="HOME" />
        <MenuItem link="#products" text="PRODUCTS" />
        <MenuItem link="#faq" text="FAQS" />
        <MenuItem link="#contact" text="CONTACT US" />
    </ul>;
}

const Logo = (props) => {
    return <div className="nav__logo">CBD</div>;
}

const Additional = (props) => {
    return <div className="nav-additional">
        <button className="nav-additional__item">Log in</button>
        <Search />
        <button className="nav-additional__item">Cart</button>
    </div>;
}

const Nav = (props) => {
    return <nav className="nav">
        <div className="nav-wrapper">
            <Menu />
            <Logo />
            <Additional />
        </div>
        <div className="nav__shadow" />
    </nav>;
}


export default Nav;
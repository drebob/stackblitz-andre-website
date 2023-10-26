import React, { useRef } from 'react';

const ScrollButtons = () => {
    const scrollTo = (selector) => {
        const target = document.querySelector(selector);
        const offset = parseInt(getComputedStyle(target).fontSize) * 9.5;  // 6rem offset
        const position = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div className="button grow-on-hover"><a href="#about">about</a></div>
            <div className="button grow-on-hover" onClick={() => scrollTo('#experience')}>experience</div>
            <div className="button grow-on-hover" onClick={() => scrollTo('#projects')}>projects</div>
        </div>
    );
}

export default ScrollButtons;
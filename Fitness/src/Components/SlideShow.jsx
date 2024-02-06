import logo1 from '../Images/image-1.jpg';
import logo2 from '../Images/image-2.jpg';
import logo3 from '../Images/image-3.jpg';
import logo4 from '../Images/image-4.jpg';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const SlideShow = () => {
    const images = [
        logo1,logo2,logo3,logo4
    ]

    return (
        <Slide>
            <div className="each-slide-effect">
                <div className='slideImg' style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='slideImg' style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="slideImg"style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="slideImg"style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
        </Slide>
    );
};


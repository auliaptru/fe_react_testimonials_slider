import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

import './testimonialCard.scss';

const TestimonialCard = ({ testimonial, activeIndex }) => {
    console.log(activeIndex);
    return (
        <div className='testimonials'>
            <CSSTransition
                in={activeIndex === testimonial.id}
                timeout={500}
                unmountOnExit
                classNames='fade'
            >
                <div className='testimonial'>
                    <div className='testimonial__profile'>
                        <div className='profile__thumb'>
                            <img src={testimonial.img} alt='' />
                        </div>
                        <div className='profile__details'>
                            <div className='detail'>
                                <h1>{testimonial.name}</h1>
                                <p>{testimonial.job}</p>
                            </div>
                        </div>
                        <div className='profile__quoteIcon'>
                            <BiSolidQuoteLeft />
                        </div>
                    </div>
                    <p className='testimonial__text'>{testimonial.message}</p>
                    <div className='testimonial__sosmed'>
                        <div className='circle'>
                            <FaFacebookF />
                        </div>
                        <div className='circle'>
                            <FaTwitter />
                        </div>
                        <div className='circle'>
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

TestimonialCard.propTypes = {
    testimonial: PropTypes.object,
    activeIndex: PropTypes.number,
};

export default TestimonialCard;

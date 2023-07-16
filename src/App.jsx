import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import TestimonialCard from './components/TestimonialCard/TestimonialCard';
import './app.scss';

const testimonials = [
    {
        id: 0,
        img: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        name: 'Jonathan',
        job: 'CEO, abc company',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique esse tempora asperiores velit excepturi dolorem neque cumque, nulla tempore maxime animi voluptas amet aut, voluptatem praesentium. Corporis, possimus rem?',
    },
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        name: 'John Doe',
        job: 'CEO, abc company',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique esse tempora asperiores velit excepturi dolorem neque cumque, nulla tempore maxime animi voluptas amet aut, voluptatem praesentium. Corporis, possimus rem?',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        name: 'Tia',
        job: 'CEO, abc company',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique esse tempora asperiores velit excepturi dolorem neque cumque, nulla tempore maxime animi voluptas amet aut, voluptatem praesentium. Corporis, possimus rem?',
    },
];

const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <div className='app'>
            <div className='app__title'>
                <h1>What our clients say</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='circle__arrow left' onClick={prevSlide}>
                    <IoIosArrowBack />
                </div>
                <div className='app__testimonials'>
                    <div className='cards__wrapper'>
                        {testimonials.map((item, i) => (
                            <TestimonialCard
                                key={i}
                                testimonial={item}
                                activeIndex={activeIndex}
                            />
                        ))}
                    </div>
                </div>
                <div className='circle__arrow right' onClick={nextSlide}>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    );
};

export default App;

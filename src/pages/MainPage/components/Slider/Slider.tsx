import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { slides } from '~/services/const/map';

const Slider = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 4) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 4) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 4 + slides.length) % slides.length);
    };

    return (
        <div className='slider-container hidden lg:block'>
            <div className='flex items-end gap-x-2 container-event'>
                <h2 className="flex items-center gap-x-1 text-xl font-bold text-primaryColor mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"></path>
                    </svg>
                    <a href="/chu-de/dong-su-kien">Sự kiện</a>
                </h2>
                <div className='slider'  >
                    {slides.slice(currentSlide, currentSlide + 4).map((slide, index) => (
                        <div key={index} className='slide' >
                            <a href={slide.path}>{slide.label}</a>
                        </div>
                    ))}
                </div>
                <button className='prev' onClick={prevSlide}>❮</button>
                <button className='next' onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default Slider;

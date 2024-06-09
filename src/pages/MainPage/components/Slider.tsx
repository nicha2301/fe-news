import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Tạo file CSS để định kiểu cho slider

const Slider = () => {
    const slides = [
        { path: '/chu-de/meo-vat-cuoc-song', label: '#Mẹo vặt cuộc sống' },
        { path: '/chu-de/day-hoc-truc-tuyen', label: '#Dạy-Học trực tuyến' },
        { path: '/chu-de/day-hoc-lich-su-trong-truong-pho-thong', label: '#Dạy-Học lịch sử trong trường phổ thông' },
        { path: '/chu-de/phong-chong-dich-covid-19-trong-truong-hoc', label: '#Phòng chống dịch Covid-19 trong trường học' },
        { path: '/chu-de/xay-dung-luat-nha-giao', label: '#Xây dựng luật nhà giáo' },
        { path: '/chu-de/thoat-ly-van-mau', label: '#Thoát ly văn mẫu' },
        { path: '/chu-de/pv-gas', label: '#PV GAS' },
        { path: '/chu-de/hoi-dap-chinh-sach-doi-voi-nha-giao', label: '#Hỏi đáp chính sách đối với nhà giáo' },
        { path: '/chu-de/phong-chong-bao-luc-hoc-duong', label: '#Phòng chông bạo lực học đường' },
        { path: '/chu-de/tuyen-dung-va-boi-duong-giao-vien', label: '#Tuyển dụng và bồi dưỡng giáo viên' },
        { path: '/chu-de/70-nam-chien-thang-dien-bien-phu', label: '#70 năm chiến thắng điện biên phủ' },
       
    ];

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
        <div className='slider-container'>
            <div className='flex items-end gap-x-2 container-event'>
                <h2 className="flex items-center gap-x-1 text-xl font-bold text-primaryColor mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"></path>
                    </svg>
                    <Link to="/chu-de/dong-su-kien">Sự kiện</Link>
                </h2>
                <div className='slider'  >
                    {slides.slice(currentSlide, currentSlide + 4).map((slide, index) => (
                        <div key={index} className='slide' >
                            <Link to={slide.path}>{slide.label}</Link>
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

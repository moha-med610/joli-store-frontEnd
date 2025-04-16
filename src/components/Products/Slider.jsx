import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: './slide1.jpg',
    caption: 'إشراقة تبدأ من العناية',
    subCaption: 'منتجات طبيعية تمنحك نضارة فورية وثقة تدوم.',
  },
  {
    url: './slide2.jpg',
    caption: 'بشرتك تستحق الأفضل',
    subCaption: 'روتين عناية متكامل لبشرة صحية ومشرقة كل يوم.',
  },
  {
    url: './slide3.jpg',
    caption: 'خلي الجمال عادة يومية',
    subCaption: 'تركيبة فعالة تغذي، ترطب، وتُعيد التوهج الطبيعي.',
  },
  {
    url: './Slide4.jpg',
    caption: 'نقاء... ملموس من أول لمسة',
    subCaption: 'امنحي بشرتك العناية اللي تستحقها بأمان وفعالية.',
  },
];

const Slider = () => {
  return (
    <div className="slide-container w-full h-screen">
      <Slide
        autoplay
        duration={4000}
        transitionDuration={1000}
        infinite
        indicators={false}
        arrows={false}
        pauseOnHover={false}
      >
        {slideImages.map((slide, index) => (
          <div key={index}>
            <div
              className="relative flex items-center bg-cover bg-center h-screen"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              {/* Overlay dark background for better text contrast */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Caption Container */}
              <div className="relative z-10 pl-16 pr-4 md:pl-24 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-100 leading-snug drop-shadow-md">
                  {slide.caption}
                </h2>
                <p className="mt-4 mb-20 text-xl md:text-2xl text-slate-50 leading-relaxed drop-shadow-sm">
                  {slide.subCaption}
                </p>

                {/* CTA Button */}
                <a
                href='#products'
                className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-md transition duration-300 self-start"
                >
                  تسوقي الآن
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )}

export default Slider;

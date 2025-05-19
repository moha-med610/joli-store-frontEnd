// Hero.jsx
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('./newLogo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with gradient for better text visibility */}
      <div className="absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Empty column to push content to the right */}
          <div className="hidden md:block"></div>

          {/* Text Content aligned to the right */}
          <div className="text-right">
            <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-6 leading-tight drop-shadow-md">
              اكتشفي جمالك الطبيعي
              <br />
              مع منتجاتنا الفاخرة
            </h1>
            <p className="text-pink-600 mb-8 text-xl md:text-2xl max-w-xl ml-auto drop-shadow-sm">
              دليلك الأول للجمال والعناية بالبشرة. مستحضرات تجميل طبيعية، مضمونة، تعزز من تألقك كل يوم.
            </p>
            <Link
              to="/products"
              className="inline-block px-8 py-4 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition duration-300 shadow-lg"
            >
              تسوقي الآن
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

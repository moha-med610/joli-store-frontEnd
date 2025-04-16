// Hero.jsx
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-6 leading-tight">
            اكتشفي جمالك الطبيعي
            <br />
            مع منتجاتنا الفاخرة
          </h1>
          <p className="text-gray-700 mb-8 text-xl md:text-2xl max-w-xl">
            دليلك الأول للجمال والعناية بالبشرة. مستحضرات تجميل طبيعية، مضمونة، تعزز من تألقك كل يوم.
          </p>
          <Link
            to="/products"
            className="inline-block px-8 py-4 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition duration-300 shadow-md"
          >
            تسوقي الآن
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="./logo.png"
            alt="Cosmetics"
            className="rounded-full shadow-2xl w-full animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

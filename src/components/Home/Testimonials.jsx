import { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/testimonial");
        const data = await response.json();

        if (response.ok) {
          setTestimonials(data.data);
        } else {
          setError("حدث خطأ أثناء جلب الشهادات.");
        }
      } catch (error) {
        setError("حدث خطأ أثناء الاتصال بالـ API: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-600">جاري تحميل الشهادات...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section className="bg-white py-20 text-right">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">
          آراء عملائنا 💬
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-pink-50 rounded-3xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="w-10 h-10 absolute -bottom-1 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

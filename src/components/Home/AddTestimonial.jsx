import { useState, useEffect } from "react";

const AddTestimonial = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testimonials, setTestimonials] = useState([]); // لتخزين الشهادات

  // تحميل الشهادات عند تحميل الصفحة
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/testimonial");
        const data = await response.json();

        if (response.ok) {
          setTestimonials(data.data); // تخزين الشهادات في الحالة
        } else {
          setError(data.message || "فشل في جلب الشهادات.");
        }
      } catch (error) {
        setError("حدث خطأ أثناء الاتصال بالـ API: " + error.message);
      }
    };

    fetchTestimonials(); // جلب الشهادات عند تحميل الصفحة
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // بدأ إرسال البيانات
    setError(null); // إعادة تعيين الخطأ عند بدء إرسال البيانات

    try {
      const response = await fetch("http://localhost:3001/api/testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          message: feedback,
        }),
      });

      if (response.ok) {
        const newTestimonial = await response.json();
        setTestimonials([newTestimonial, ...testimonials]); // إضافة الشهادة الجديدة للقائمة
        setSubmitted(true);
        setName("");
        setFeedback("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "حدث خطأ أثناء إرسال الشهادة.");
      }
    } catch (error) {
      setError("حدث خطأ أثناء الاتصال بالـ API: " + error.message);
    } finally {
      setLoading(false); // توقف التحميل بعد إتمام الطلب
    }
  };

  return (
    <section className="bg-pink-100 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-10">
          شاركينا رأيك 💖
        </h2>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-3xl p-8 space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                اسمك
              </label>
              <input
                type="text"
                placeholder="اكتبي اسمك"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                رأيك في المنتجات
              </label>
              <textarea
                placeholder="احكي تجربتك معانا 💬"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition shadow-md"
            >
              {loading ? "جاري إرسال..." : "إرسال رأيي"}
            </button>

            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
          </form>
        ) : (
          <div className="bg-white shadow-lg rounded-3xl p-8 text-center">
            <h3 className="text-2xl text-pink-700 font-semibold mb-4">
              شكرًا على رأيك الجميل! 🌷
            </h3>
            <p className="text-gray-600">
              رأيك يهمنا جدًا وبيساعدنا نطور خدماتنا ومنتجاتنا 💫
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddTestimonial;

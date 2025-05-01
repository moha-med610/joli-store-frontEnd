import { useState } from "react";
import Button from "./Button";
import ButtonSent from "./ButtonSent";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://e-commerce-joli-backend.onrender.com/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(data.error || "Failed to send email");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.", error);
    }
    setLoading(false);
  };

  return (
    <section className="bg-pink-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-12 text-center">
          تواصلي معنا 💌
        </h2>

        <div className="grid md:grid-cols-2 gap-12 bg-white shadow-xl rounded-3xl p-8 md:p-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                الاسم
              </label>
              <input
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                placeholder="اكتبي اسمك"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                رسالتك
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="اكتبي رسالتك هنا..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div
              className={`text-center font-semibold ${
                responseMessage.includes("success")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {responseMessage}
            </div>
              {loading ? <Button /> : <ButtonSent />}
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700 text-lg">
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">
                معلومات التواصل
              </h3>
              <p>📍 القاهرة، مصر</p>
              <p>📞 01020130763</p>
              <p>📧 joli Cosmetics</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">
                ساعات العمل
              </h3>
              <p>السبت - الخميس: 9 ص - 10 م</p>
              <p>الجمعة: مغلق</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

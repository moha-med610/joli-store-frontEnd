import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const searchItems = async (searchQuery) => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://e-commerce-joli-backend.onrender.com/api/products/search?search=${searchQuery}`
      );
      const data = await response.json();

      if (response.ok) {
        if (data.data.length === 0) {
          setResults([]);
          setError("لا توجد نتائج للبحث.");
        } else {
          setResults(data.data);
          setError(""); 
        }
      } else {
        setResults([]);
        setError("حدث خطأ أثناء جلب البيانات من الخادم.");
      }
    } catch (err) {
      setError("حدث خطأ أثناء البحث. يرجى المحاولة لاحقًا.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchItems(query); // البحث بعد تأخير لتقليل عدد الطلبات
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث عن منتج ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-500 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <div className="absolute top-3 right-3 text-gray-500">
          <i className="fas fa-search"></i>
        </div>
      </div>

      {loading && (
        <p className="text-center mt-4 text-gray-500">جارِ البحث...</p>
      )}

      <div className="mt-6 overflow-y-auto max-h-96 space-y-4">
        {" "}
        {results.length > 0
          ? results.map((item) => (
              <div
                key={item._id}
                className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer hover:scale-105 transition-all mx-10"
                onClick={() => navigate(`/products/${item._id}`)}
              >
                <img
                  src={item.images?.[0] || "https://via.placeholder.com/64"}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 overflow-hidden">
                  <h3 className="text-xl font-semibold text-pink-600 truncate">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 line-clamp-1">
                    {item.description}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-pink-700">
                    {item.price} EGP
                  </p>
                </div>
              </div>
            ))
            : query && (
              <p className="text-center text-gray-500">
                لا توجد نتائج للبحث عن "{query}"
              </p>
            )}
      </div>
    </div>
  );
};

export default Search;

import { useState, useEffect } from "react";
import Cards from "../components/Products/Cards";
import Loading from "../components/Loading";
import Slider from "../components/Products/Slider";
import Search from "../components/Search";
import Footer from "../components/Home/Footer"

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");


  const url = category
        ? `https://e-commerce-joli-backend.onrender.com/api/products?category=${category}`
        : `https://e-commerce-joli-backend.onrender.com/api/products`;

  const getData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error("فشل تحميل المنتجات:", error);
      setError("عذرًا، حدث خطأ أثناء تحميل المنتجات. حاول مرة أخرى لاحقًا.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl font-bold mt-20">
        {error}
      </div>
    );
  }

  return (
    <div>
      <Slider />
      <section id="products" className="text-center my-16 scroll-mt-24">
      <Search />
      <div className="flex justify-center items-center mt-4 mb-8">
        <select
        className="bg-gray-50 border w-full lg:w-3/12 md:w-1/2 border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block p-3 pr-2 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">اختار الفئة</option>
          <option value="Hair">منتجات العنايه الشعر</option>
          <option value="Skin">منتجات العنايه البشره</option>
          <option value="Body">منتجات العنايه بالجسم</option>
          
        </select>
        </div>
        <h1 className="text-5xl font-bold text-pink-700 font-mono">المنتجات</h1>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-16 my-24">
        {data.map((item) => (
          <Cards
            key={item._id}
            id={item._id}
            image={item.images}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;

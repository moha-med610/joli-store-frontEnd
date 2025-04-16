import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { ShoppingCart } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://e-commerce-joli-backend.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto mt-28 px-4 ">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* الصورة */}
          <div className="md:w-1/2 w-full">
            <img
              src={product.images}
              alt={product.title}
              className="rounded-3xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* التفاصيل */}
          <div className="md:w-1/2 w-full space-y-4">
            <h2 className="text-3xl font-bold text-pink-600">
              {product.title}
            </h2>
            <p className="text-lg font-bold text-black">{product.price} EGP</p>
            <p className="text-gray-600">{product.description}</p>
            <a
              href={`https://wa.me/201020130763?text=${encodeURIComponent(
                `I want to buy this product => \nID: ${product._id}\nName: ${product.title}\nPrice: ${product.price} جنيه`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full mt-4 flex items-center gap-2 text-sm font-medium transition duration-300">
                <ShoppingCart size={18} />
                أضف للسلة
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

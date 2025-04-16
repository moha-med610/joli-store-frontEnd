import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Cards = ({ id, image, title, description, price }) => {

    const shortDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-[1.03]">
      <Link to={`/products/${id}`} className="block">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded-2xl"
        />
        <h3 className="text-2xl font-bold text-pink-600 mt-5">{title}</h3>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">{shortDescription}</p>
        <p className="text-xl font-semibold text-pink-500 mt-3">{price} EGP</p>
      </Link>
      <Link to="/cart">
        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full mt-5 flex justify-center items-center gap-2 text-sm font-medium transition duration-300">
          <ShoppingCart size={18} /> أضف للسلة
        </button>
      </Link>
    </div>
  );
};

export default Cards;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    setCartItems(parsedCart);
    calculateTotal(parsedCart);
  }, []);

  const calculateTotal = (items) => {
    let totalAmount = 0;
    items.forEach(item => {
      totalAmount += item.price * item.quantity;
    });
    setTotal(totalAmount);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, total } });
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <section className="min-h-screen bg-pink-50 py-10 mt-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">السلة</h2>

        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">لا توجد منتجات في السلة</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-pink-600">{item.title}</h3>
                    <p className="text-gray-600">السعر: {item.price} EGP</p>
                    <p className="text-gray-600">الكمية: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-pink-600">{item.price * item.quantity} EGP</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 text-sm text-red-500 hover:underline"
                  >
                    إزالة
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-xl font-semibold text-gray-700">الإجمالي:</p>
          <p className="text-xl font-semibold text-pink-600">{total} EGP</p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleCheckout}
            className="w-full bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 transition"
          >
            اذهب إلى الدفع
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
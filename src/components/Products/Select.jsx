import React from "react";

const Select = ({ categories, setCategory }) => {
  return (
    <select
      onChange={(e) => setCategory(e.target.value)}
      className="bg-gray-50 border w-full lg:w-3/12 md:w-1/2 border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block p-3 pr-2 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="">اختار الفئة</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default Select;

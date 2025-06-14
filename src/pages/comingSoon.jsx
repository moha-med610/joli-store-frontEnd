import React from "react";
import { AiFillAlert } from "react-icons/ai";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-700 via-pink-900 to-pink-900 text-white flex items-center justify-center p-6">
      <div className="text-center max-w-lg w-full space-y-8">
        <div className="flex items-center justify-center p-6 text-white border-b-2 border-gray-400">
          <div className="flex items-center gap-4">
            <AiFillAlert className="text-6xl text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-gray-100">
              Coming Soon
            </h1>
          </div>
        </div>

        <p className="text-gray-300 text-lg md:text-xl font-serif">
          نحن نعمل بجهد خلف الكواليس لنقدم لك شيئًا رائعًا
        </p>

        <p className="text-sm text-gray-300 pt-4">
          © 2025 - جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;

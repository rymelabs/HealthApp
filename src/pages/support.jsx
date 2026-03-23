import React from 'react';

const Support = () => {
  const supportNumber = "234XXXXXXXXXX";

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <h2 className="text-xl font-semibold">How can we help?</h2>
      
      {/* WhatsApp Link */}
      <a 
        href={`https://wa.me/${supportNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-xs bg-green-500 text-white py-3 px-6 rounded-lg text-center font-medium shadow-sm hover:bg-green-600 transition"
      >
        Chat on WhatsApp
      </a>

      {/* Direct Call Link */}
      <a 
        href={`tel:+${supportNumber}`}
        className="w-full max-w-xs border border-sky-600 text-sky-600 py-3 px-6 rounded-lg text-center font-medium hover:bg-sky-50 transition"
      >
        Call Support
      </a>
    </div>
  );
};

export default Support;
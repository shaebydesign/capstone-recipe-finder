import React from "react";

const CTAButton = ({ text, link }) => {
  return (
    <a
      href={link}
      className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
    >
      {text}
    </a>
  );
};

export default CTAButton;

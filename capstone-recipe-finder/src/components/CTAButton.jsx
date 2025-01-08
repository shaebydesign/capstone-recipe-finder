import React from "react";
import { Link } from "react-router-dom";

function CTAButton({ text, link }) {
  return (
    <Link
      to={link}
      className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700"
    >
      {text}
    </Link>
  );
}

export default CTAButton;

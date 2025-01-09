import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
    >
      {text}
    </Link>
  );
};

export default CTAButton;

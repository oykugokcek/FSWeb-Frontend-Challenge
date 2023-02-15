import React from "react";

function Footer() {
  return (
    <div className="bg-white flex flex-col items-center pt-24 pb-6 lg:justify-center lg:flex-row">
      <p className="text-4xl font-medium text-center w-1/2 lg:text-right lg:p-8">
        Let’s work together on your next product.
      </p>
      <div className="flex flex-col m-9 font-medium">
        <a className="text-[#1769FF]">GitHub</a>
        <a>Personal Blog</a>
        <a className="text-[#0077B5]">Linkedin</a>
        <a className="text-[#AF0C48]">Email</a>
      </div>
    </div>
  );
}

export default Footer;

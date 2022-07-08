import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 w-full mt-24 text-gray-300 p-auto py-6 absolute">
        <div className="flex flex-col text-center text-gray-300">
          <div className="flex justify-center ml-50 pt-4 text-2xl mb-5">
            <FaFacebook className="mx-2" />
            <FaInstagram className="mx-2" />
            <FaTwitter className="mx-2" />
            <FaTwitch className="mx-2" />
            <FaGithub className="mx-2" />
          </div>
          <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
          <p>Books App 2022&copy;</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

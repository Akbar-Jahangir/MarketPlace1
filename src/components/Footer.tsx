import React from "react";
import { FacebookSvg, InstagramSvg, LogoSvg, TwitterSvg } from "../assets/Svgs";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full lg:h-[140px] flex flex-col items-center justify-center border-t font-Montserrat py-4">
        <div className="w-[90%] space-y-6">
          <div className="flex justify-between">
            <LogoSvg />
            <div className="flex gap-2 lg:justify-end">
              <TwitterSvg />
              <FacebookSvg />
              <InstagramSvg />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="hidden lg:inline-block text-sm">
              All right reserved by{" "}
              <span className="font-semibold">Market Place</span> 2024.
            </p>

            <ul className={`flex flex-col lg:flex-row lg:space-x-8 text-blue`}>
              <li className="list-style">JOBS</li>
              <li className="list-style">DEVELOPER</li>
              <li className="list-style">TERMS</li>
              <li className="list-style">PRIVACY POLICY</li>
            </ul>
          </div>
        </div>

        <p className="lg:hidden text-sm mt-4">
          All right reserved by{" "}
          <span className="font-semibold">Market Place</span> 2024.
        </p>
      </footer>
    </>
  );
};

export default Footer;

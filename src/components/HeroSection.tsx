import React from "react";
import {
  BackArrowSvg,
  ChannelLogoSvg,
  ForwardArrowSvg,
  NikeLogoSvg,
  PullBearLogoSvg,
  UniqloSvg,
} from "../assets/svgs";
import Button from "./Button/Button";
import DemoImg from "../assets/images/demoImg.png";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="w-[100%] bg-black flex justify-center items-center">
        <div className=" lg:w-[80%] py-6 flex flex-col lg:flex-row space-y-4 justify-between">
          <div className="flex flex-col lg:flex-row items-center space-y-4 w-[100%] lg:w-[40%] justify-between">
            <BackArrowSvg />
            <div className="text-white lg:w-[329px] pl-6 font-Montserrat space-y-6 text-lg">
              <h1>Market Place</h1>
              <p>
                Captivating Scents & Looks: your one-stop destination for
                mesmerizing fragrances and stunning beauty finds.
              </p>
              <Button
                text="GET IT NOW"
                customStyle="bg-warning w-[170px] h-[40px] text-white font-semibold text-lg rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center space-y-4 w-[100%] lg:w-[40%] justify-around">
            <div
              className="w-[241px] h-[369px] bg-no-repeat flex justify-center items-end"
              style={{
                backgroundImage: `url(${DemoImg})`,
                backgroundPosition: "top",
                backgroundSize: "100% 353px",
              }}
            >
              <Button
                text="DETAILS"
                customStyle="bg-warning w-[170px] h-[40px] text-white font-semibold text-lg"
              />
            </div>
            <div className="">
              <ForwardArrowSvg />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex justify-center items-center">
        <div className="screen-responsiveness pt-[60px] pb-[14px] flex flex-wrap justify-center lg:justify-between">
          <ChannelLogoSvg />
          <NikeLogoSvg />
          <PullBearLogoSvg />
          <UniqloSvg />
        </div>
      </div>
    </>
  );
};
export default HeroSection;

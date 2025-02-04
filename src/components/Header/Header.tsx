import React, { useContext, useState } from "react";
import { LogoSvg } from "../../assets/svgs";
import Button from "../Button/Button";
import NavItems from "../NavItems/NavItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import CartSummary from "../Cart/CartTotalItems";
import { AuthContext } from "../../contexts/authContext/AuthContext";

const Header: React.FC= () => {
  const [isHamburger, setIsHamburger] = useState<boolean>(false);
const { webAccessToken,setWebAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
      <div className="bg-black flex justify-center">
        <header className="w-full flex flex-col items-center">
          <div className="w-[90%] hidden lg:flex h-[80px] items-center justify-between">
            <LogoSvg />
            <NavItems />
            
            {webAccessToken !=="" ? (
            <Button
              text="LOG OUT"
              customStyle="bg-warning w-[124px] h-[30px] text-white font-Montserrat font-semibold text-lg rounded-md"
              onClick={() => {
                setWebAccessToken("");
                navigate("/");
              }}
            />
          ) : (
            <Button
              text="LOGIN"
              customStyle="bg-warning w-[124px] h-[30px] text-white font-Montserrat font-semibold text-lg rounded-md"
              onClick={() => {
                navigate("/login");
              }}
            />
          )}
            <CartSummary />
          </div>

          {/* Mobile Header */}

          <div className="w-[90%] flex justify-between py-4 items-center lg:hidden">
            <LogoSvg />
            <CartSummary />
            <RxHamburgerMenu
              className="text-white w-[34px] h-[34px]"
              onClick={() => setIsHamburger((prevState) => !prevState)}
            />
          </div>
          {isHamburger && (
            <NavItems
              customStyle="flex flex-col lg:hidden"
              onClick={() => setIsHamburger(false)}
            />
          )}
        </header>
      </div>
  );
};

export default Header;

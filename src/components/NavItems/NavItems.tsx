import React, { useContext } from "react";
import { NavItemsProps } from "./navItems.interface";
import Button from "../Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext/AuthContext";

const NavItems: React.FC<NavItemsProps> = ({
  customStyle,
  onClick,
}) => {
  const { webAccessToken,setWebAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <ul
        className={`${customStyle} w-[90%] lg:w-[468px] lg:flex justify-between font-Montserrat text-white lg:text-lg`}
        onClick={onClick}
      >
        <NavLink
          to={"home"}
          className={({ isActive }) =>
            `list-style ${isActive ? "text-warning font-semibold" : ""}`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to={"category"}
          className={({ isActive }) =>
            `list-style ${isActive ? "text-warning font-semibold" : ""}`
          }
        >
          CATEGORY
        </NavLink>
        <NavLink
          to={"products"}
          className={({ isActive }) =>
            `list-style ${isActive ? "text-warning font-semibold" : ""}`
          }
        >
          PRODUCTS
        </NavLink>
        <li className="list-style">ABOUT</li>
        <li>
          {webAccessToken !=="" ? (
            <Button
              text="LOG OUT"
              customStyle="text-center bg-warning lg:hidden w-[100px] lg:w-[124px] text-white font-Montserrat text-lg rounded-md mb-2"
              onClick={() => {
                setWebAccessToken("");
                navigate("/");
              }}
            />
          ) : (
            <Button
              text="LOGIN"
              customStyle="text-center bg-warning lg:hidden w-[100px] lg:w-[124px] text-white font-Montserrat text-lg rounded-md mb-2"
              onClick={() => {
                navigate("/login");
              }}
            />
          )}
        </li>
      </ul>
    </>
  );
};

export default NavItems;

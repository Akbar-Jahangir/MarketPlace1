import Button from "../components/Button/Button";
import { LogoSvg } from "../assets/Svgs";
import Input from "../components/Input/Input";
import LampImg from "../assets/images/lamp.png";
import BoyImg from "../assets/images/BoyImage.png";
import BgImg from "../assets/images/background.png";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext/authContext";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
 const authContext =useContext(AuthContext)
 const {setWebAccessToken} =authContext;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, expiresInMins: 10}),
        
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error response:", errorResponse);
        alert("Invalid username or password.");
        return;
      }
  
      const data = await response.json();
      
      setWebAccessToken(data.accessToken)      
      navigate("/home");
    } catch (error) {
      console.error("hello:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <>
      <div className="w-full bg-darkgreen h-full lg:grid grid-cols-2 gap-40">
        <div className="content-center flex justify-center items-center h-screen">
          <div className="flex flex-col gap-10 w-[85%] md:w-[70%] lg:w-[450px] justify-self-center">
            <div className="flex text-white items-center gap-2 font-Lora text-3xl ">
              <LogoSvg />
              <h3>Market Place</h3>
            </div>
            <form className="space-y-10" onSubmit={handleSubmit}>
              <Input
                placeholder="Username"
                type="name"
                customStyle="login-input"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div>
                <Input
                  placeholder="Password"
                  type="password"
                  customStyle="login-input"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-white flex justify-end mt-1 text-lg">
                  Forgot Password?
                </p>
              </div>
              <Button
                type="submit"
                text="LOGIN"
                customStyle="bg-warning w-[100%] h-[50px] font-Roboto rounded-md font-bold text-lg "
              />
            </form>
          </div>
        </div>

        <div
          className="bg-no-repeat content-center bg-contain h-[100%] xl:w-[80%] xl:justify-self-end hidden lg:block"
          style={{
            backgroundImage: `url(${BgImg})`,
            backgroundPosition: "bottom right",
          }}
        >
          <img
            src={LampImg}
            alt="lamp"
            className="lg:w-[100px] lg:h-[115px] absolute top-0 lg:right-[20%] hidden lg:block"
          />
          <div className="self-center">
            <img
              src={BoyImg}
              alt="image"
              className="lg:w-[260px] lg:h-[260px] hidden lg:block justify-self-center mb-14"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

import React from "react";
import checkoutImg from "../../assets/images/Sukses.png";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const CartCheckout: React.FC = () => {
  const navigate=useNavigate()
  const cardData = [
    {
      title: "Checkout Successful",
      images: [checkoutImg],
      comment: "You will get the goods you in a few days",
    },
  ];
  const cardsStyle = {
    cardInfoStyles: "max-w-[397px] flex flex-col items-center",
    imageVariant: "plain",
    imageSize: "lg",
    cardTitleStyles:
      " text-purple text-3xl font-semibold text-center font-Montserrat",
    cardTextStyles: "text-[20px]  text-lightblack text-center",
  };
  return (
    <>
      <div className="w-[100%] h-screen flex flex-col justify-center items-center text-3xl border">
        <div>
          {cardData.map((card, index) => {
            // Render individual cards
            return (
              <Card
                key={index}
                images={card.images}
                title={card.title}
                cardStyles={cardsStyle}
                comment={card.comment}
              />
            );
          })}
        </div>
        <Button
          text="Back to Home"
          onClick={() => navigate("/home")}
          customStyle="bg-blue text-white font-Inter w-[216px] text-center text-[16px]"
        />
      </div>
    </>
  );
};

export default CartCheckout;

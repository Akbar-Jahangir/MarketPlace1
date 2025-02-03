import React, { memo } from "react";
import { CardProps } from "../../interfaces/Card.interface";
import { useNavigate } from "react-router-dom";
import { PlusSvg } from "../../assets/Svgs";

const Card: React.FC<CardProps> = ({
  title,
  price,
  profession,
  comment,
  cardStyles,
  images,
  currency,
  totalItems,
  id,
  name,
  followers,
}) => {
  const navigate = useNavigate();
  console.log("card is rendering",followers);
  

  const handleClick = (id?: string) => {
    {id!==undefined? navigate(`/productDetails/${id}`):navigate(`/browseCategory/${name}`)}
   
  };

  return (
    <>
      <div>
        {cardStyles?.clickable ? (
          <div className={`${cardStyles.cardAlignment}`}>
            <div
              onClick={() => {
                handleClick(id);
              }}
              className={`space-y-2 relative ${cardStyles?.imageStyles} 
              ${
                cardStyles?.imageSize === "xs"
                  ? "w-[60px] h-[60px]"
                  : cardStyles?.imageSize === "sm"
                  ? "w-[300px] h-[300px] lg:w-[113px] lg:h-[113px]"
                  : cardStyles?.imageSize === "md"
                  ? "w-[300px] h-[350px] lg:w-[169px] lg:h-[180px]"
                  : cardStyles?.imageSize === "lg"
                  ? "w-[330px] h-[180px]"
                  : cardStyles?.imageSize === "xl"
                  ? "w-[443px] h-[477px]"
                  : ""
              } 
              ${cardStyles?.imageVariant === "rounded" ? "rounded-full" : ""} `}
              style={{
                backgroundImage: images ? `url(${images})` : "image",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-lightblack flex items-center justify-center">
                <PlusSvg
                  customBgColor="#F9B234"
                  customColor="white"
                  customStyles=""
                />
              </div>
            </div>
            <div>
              <div className={`${cardStyles?.cardInfoStyles}`}>
                <h3 className={cardStyles?.cardTitleStyles}>{title}</h3>
                {price && (
                  <p
                    className={`${cardStyles?.cardTextStyles} ${cardStyles?.priceStyles}`}
                  >
                    {currency} {price}
                  </p>
                )}
                {totalItems && (
                  <p
                    className={`${cardStyles?.cardTextStyles} ${cardStyles?.totalItemsstyles}`}
                  >
                    {totalItems} items
                  </p>
                )}
                {name && <p className={cardStyles?.cardTitleStyles}>{name}</p>}
                {profession && (
                  <p className={cardStyles.cardTextStyles}>{profession}</p>
                )}
                {comment && <p>{comment}</p>}

                {followers && (
                  <p className={cardStyles?.cardTextStyles}>
                    {followers} Followers
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className={`${cardStyles?.cardAlignment}`}>
            {images && (
              <div
                className={`space-y-2 relative ${cardStyles?.imageStyles} 
              ${
                cardStyles?.imageSize === "xs"
                  ? "w-[60px] h-[60px]"
                  : cardStyles?.imageSize === "sm"
                  ? "w-[300px] h-[300px] lg:w-[113px] lg:h-[113px]"
                  : cardStyles?.imageSize === "md"
                  ? "w-[300px] h-[350px] lg:w-[169px] lg:h-[180px]"
                  : cardStyles?.imageSize === "lg"
                  ? "w-[330px] h-[180px]"
                  : cardStyles?.imageSize === "xl"
                  ? "w-[443px] h-[477px]"
                  : ""
              } 
              ${cardStyles?.imageVariant === "rounded" ? "rounded-full" : ""} `}
              style={{
                backgroundImage: images ? `url(${images})` : "image",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              ></div>
            )}
            <div>
              <div className={`${cardStyles?.cardInfoStyles}`}>
                <h3 className={cardStyles?.cardTitleStyles}>{title}</h3>
                {price && (
                  <p
                    className={`${cardStyles?.cardTextStyles} ${cardStyles?.priceStyles}`}
                  >
                    {currency} {price}
                  </p>
                )}
                {totalItems && (
                  <p
                    className={`${cardStyles?.cardTextStyles} ${cardStyles?.totalItemsstyles}`}
                  >
                    {totalItems} items
                  </p>
                )}
                {name && <p className={cardStyles?.cardTitleStyles}>{name}</p>}
                {profession && (
                  <p className={cardStyles?.cardTextStyles}>{profession}</p>
                )}
                {comment && (
                  <p className={cardStyles?.cardTextStyles}>{comment}</p>
                )}

                {followers && (
                  <p className={cardStyles?.cardTextStyles}>
                    {followers} Followers
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Card);

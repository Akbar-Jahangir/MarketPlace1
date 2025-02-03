import React from "react";
import { CardsListProps } from "./cardsGallery.interface";
import Card from "../../components/Card/Card";
import CardDefinition from "../../components/Card/CardGalleryDefinition";

const CardsGallery: React.FC<CardsListProps> = ({
  layoutDefinition,
  cardsList,
  cardStyles,
  customStyles,
  customalleryWidth,
  customGap,
  currency,
}) => {

  
  return (
    <>
      <div className={`${customStyles}`}>
        {/* Render Cards */}
        <div className={`w-[90%] lg:w-[80%] flex flex-wrap`}>
          <div className="w-full mb-6">
            {layoutDefinition?.map((data, index) => {
              // Render individual cards
              return (
                <CardDefinition
                  key={index}
                  galleryTitle={data.galleryTitle}
                  galleryTitleStyles={data.galleryTitleStyles}
                  galleryText={data.galleryText}
                  galleryTextStyles={data.galleryTextStyles}
                  customStyles={data.customStyles}
                />
              );
            })}
          </div>
          <div className={`cards-alignment  ${customGap} ${customalleryWidth}`}>
            {cardsList.map((card, index) => {
              // Render individual cards
              return (
                <Card
                  key={index}
                  id={card.id}
                  slug={card.slug}
                  images={
                    Array.isArray(card.images) ? card.images[0] : card.image
                  }
                  title={card.title}
                  price={card?.price}
                  profession={card.profession}
                  cardStyles={cardStyles}
                  currency={currency}
                  totalItems={card.totalItems}
                  name={card.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(CardsGallery);

import React from "react";
import CardsGallery from "../layout/cardsGallery/CardsGallery";
import useFetch from "../hooks/useFetch";

const Products: React.FC = () => {
const productsList= useFetch('https://dummyjson.com/products')
console.log("products",productsList);


const layoutDefinition = [
  {
    galleryTitle: "Products",
    galleryTitleStyles: "text-3xl font-bold text-purple",
    galleryText:
      "A curated selection of fragrances, beauty essentials, and groceries all in one place.",
    galleryTextStyles: "w-[300px]",
  },
];

const cardsStyle = {
  cardInfoStyles:'flex flex-col items-center',
  imageVariant: "plain",
  imageSize: "md",
  cardTitleStyles: "w-[169px] text-black text-lg font-semibold text-center",
  cardTextStyles: "text-lightblack",
  clickable: true,
};
  return (
    <>
    <CardsGallery
        cardsList={productsList}
        cardStyles={cardsStyle}
        layoutDefinition={layoutDefinition}
        customStyles="w-full bg-lightgray flex flex-col items-center py-6"
        customGap="gap-x-3"
        currency="IND."
      />
    </>
  );
};

export default Products;

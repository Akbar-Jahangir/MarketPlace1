import React from "react";
import DemoImg from "../assets/images/profileImg.png";
import CardsGallery from "../layout/cardsGallery/CardsGallery";
import UseCategory from "../hooks/useCategory";
import ProductCategories from "../utils/productCategories";

const Category: React.FC = () => {
  const categories = UseCategory();
 

  const layoutDefinition = [
    {
      galleryTitle: "Categories",
      galleryTitleStyles: "text-3xl font-bold text-purple",
      galleryText:
        "Captivating Scents & Looks: where you find the best clothes, top fragrances, beauty essentials, and groceries all in one place.",
    },
  ];

  const cardsStyle = {
    cardInfoStyles: "flex flex-col items-center",
    imageVariant: "plain",
    imageSize: "lg",
    cardTitleStyles: "w-[169px] text-black text-lg font-semibold text-center",
    cardTextStyles: "text-lightblack",
    clickable: true,
  };

  const designersdata = [
    {
      images: [DemoImg],
      title: "Anne Mortgery",
      profession: "Artistic",
    },
    {
      images: [DemoImg],
      title: "Anne Mortgery",
      profession: "Artistic",
    },
    {
      images: [DemoImg],
      title: "Anne Mortgery",
      profession: "Artistic",
    },
    {
      images: [DemoImg],
      title: "Anne Mortgery",
      profession: "Artistic",
    },
  ];

  const designerlayoutDefinition = [
    {
      galleryTitle: "Our Designers",
      galleryTitleStyles: "text-3xl font-bold text-purple",
      galleryText: "Pakaian terbaik dari designer profesional",
      galleryTextStyles: "w-[300px]",
    },
  ];
  const designerCardsStyle = {
    customStyles: "flex flex-col items-center",
    imageVariant: "rounded",
    imageSize: "sm",
    cardTitleStyles: "text-black text-lg",
    cardTextStyles: "text-lightblack ",
    imageStyles: "hover:border-4 border-lightblack",
  };
  return (
    <>
      <CardsGallery
        cardsList={ProductCategories(categories.categoriesData)}
        cardStyles={cardsStyle}
        layoutDefinition={layoutDefinition}
        customStyles="w-full flex flex-col items-center py-6"
        customGap="gap-x-3"
      />
      <CardsGallery
        cardsList={designersdata}
        cardStyles={designerCardsStyle}
        layoutDefinition={designerlayoutDefinition}
        customStyles="w-full bg-white flex flex-col items-center py-6"
        customGap="gap-40"
        customalleryWidth="w-[100%] lg:justify-center"
      />
    </>
  );
};

export default Category;

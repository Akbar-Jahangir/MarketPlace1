import React from "react";
import HeroSection from "../components/HeroSection";
import DemoImg from "../assets/images/profilePic1.png";
import CardsGallery from "../layout/cardsGallery/CardsGallery";
import UseLimitedProduct from "../hooks/useLimitedProduct";

const Home: React.FC = () => {
  const productsList = UseLimitedProduct();

  const layoutDefinition = [
    {
      galleryTitle: "Discover Top Picks",
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
      title: "Anne jinja",
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

    cardInfoStyles:'flex flex-col items-center',
    imageVariant: "rounded",
    imageSize: "sm",
    cardTitleStyles: "text-black text-lg",
    cardTextStyles: "text-lightblack",
    imageStyles: "hover:border-4 border-lightblack",
  };
  return (
    <>
      <HeroSection />
      <CardsGallery
        cardsList={productsList}
        cardStyles={cardsStyle}
        layoutDefinition={layoutDefinition}
        customStyles="w-full bg-lightgray flex flex-col items-center py-6"
        customGap="gap-x-3"
        currency="IND."
      />
      <CardsGallery
        cardsList={designersdata}
        cardStyles={designerCardsStyle}
        layoutDefinition={designerlayoutDefinition}
        customStyles="w-full bg-white flex flex-col items-center py-6"
        customGap="gap-20 lg:gap-40"
      />
    </>
  );
};

export default Home;

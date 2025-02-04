import React from "react";
import { CardGalleryDefinitionProps } from "../../interfaces/cardGalleryDefinition.interface";

const CardDefinition: React.FC<CardGalleryDefinitionProps> = ({
  galleryTitleStyles,
  galleryTitle,
  customStyles,
  galleryTextStyles,
  galleryText,
}) => {
  return (
    <>
      <div className={`${customStyles} space-y-2`}>
        <h2 className={`${galleryTitleStyles} text-3xl font-Lora font-bold`}>
          {galleryTitle}
        </h2>
        <p className={`${galleryTextStyles} text-lightblack`}>{galleryText}</p>
      </div>
    </>
  );
};

export default CardDefinition;

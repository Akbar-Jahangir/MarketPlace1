import { CardProps } from "../../interfaces/card.interface";
import { CardStyleProps } from "../../interfaces/cardStyle.interface";
import { CardGalleryDefinitionProps } from "../../interfaces/cardGalleryDefinition.interface";

export interface CardsListProps{
    layoutDefinition:CardGalleryDefinitionProps[]
    cardsList:CardProps[]
    cardStyles:CardStyleProps
    customStyles?:string,
    customalleryWidth?:string,
    customGap?:string,
    currency?:string
    
}
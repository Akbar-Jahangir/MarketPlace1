import { CardProps } from "../../interfaces/Card.interface";
import { CardStyleProps } from "../../interfaces/CardStyle.interface";
import { CardGalleryDefinitionProps } from "../../interfaces/CardGalleryDefinition.interface";

export interface CardsListProps{
    layoutDefinition:CardGalleryDefinitionProps[]
    cardsList:CardProps[]
    cardStyles:CardStyleProps
    customStyles?:string,
    customalleryWidth?:string,
    customGap?:string,
    currency?:string
    
}
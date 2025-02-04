import { CardStyleProps } from "./cardStyle.interface";

export interface CardProps {
  id?: string;
  title?: string;
  price?: number;
  quantity?: number;
  profession?: string;
  comment?: string;
  followers?: string;
  totalItems?: number;
  currency?: string;
  clickable?: boolean;
  cardStyles?: CardStyleProps;
  images?: string | any;
  image?: string;
  name?: string;
  slug?: string;
  url?: string;
  thumbnail?: string;
  description?: string;
  reviews?: {
    reviewerName?: string;
    rating?: number;
    comment?: string;
  }[];
}

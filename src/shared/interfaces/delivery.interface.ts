import { SloganIF } from "./slogan.interface";

export interface DeliveryIF {
  course: string;
  deliveryTitle: string;
  slogans: SloganIF[];
}
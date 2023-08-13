import { ISlogan } from ".";

export interface IDelivery {
  course: string;
  deliveryTitle: string;
  deliveryDescription: string;
  slogans: ISlogan[];
}
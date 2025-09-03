export interface IPriceList {
  categories: {
    category: string;
    priceListItems: {
      itemName: string;
      price: number;
      itemDescription?: string;
      discountPrice?: number;
      isBundle?: boolean;
    }[];
  }[];
}

export interface IPriceList {
  categories: {
    category: string;
    priceListItems: {
      itemName: string;
      itemDescription?: string;
      price: number;
      discountPrice?: number;
    }[];
  }[];
}

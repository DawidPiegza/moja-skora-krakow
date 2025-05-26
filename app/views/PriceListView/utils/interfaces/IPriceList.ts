export interface IPriceList {
  categories: {
    category: string;
    priceListItems: {
      itemName: string;
      price: number;
      discountPrice?: number;
    }[];
  }[];
}

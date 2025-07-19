export interface IVoucherTerms {
  language: "pl" | "en";
  sections: {
    id: string;
    title: string;
    entries: string[];
  }[];
}

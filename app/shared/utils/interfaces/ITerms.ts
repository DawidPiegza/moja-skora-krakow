export interface ITerms {
  language: "pl" | "en";
  sections: {
    id: string;
    title: string;
    entries: string[];
  }[];
}

export interface ICarbonPeelData {
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  overview: string;
  indicationsToTreatment: string[];
  effectsOfTratment: string[];
  contraindications: string[];
  courseOfTreatment: {
    title: string;
    description: string;
  }[];
  mechanismDuringTreatment: {
    title: string;
    description: string;
  }[];
  preparationBeforeTreatment: string[];
  postTreatmentRecommendations: string[];
}

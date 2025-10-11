export interface IPernamentEyebrowMakeup {
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  overview: string;
  treatementRecommendation: string[];
  courseOfTreatment: {
    title: string;
    description: string;
  }[];
  preparationForTreatment: string[];
  contraindications: {
    relative: string[];
    absolute: string[];
  };
  postTreatmentRecommendations: string[];
  treatmentCycles: string;
}

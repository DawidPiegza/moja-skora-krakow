export interface INeedleMesotherapyData {
  overview: string;
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  indicationsToTreatment: string[];
  effectsOfTratment: string[];
  contraindications: string[];
  courseOfTreatment: {
    title: string;
    description: string;
  }[];
  postTreatmentRecommendations: string[];
  preparationForTreatment: string;
}

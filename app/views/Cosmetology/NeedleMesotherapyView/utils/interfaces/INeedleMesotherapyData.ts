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
  courseOfTreatment: string[] | string;
  postTreatmentRecommendations: string[] | string;
  preparationForTreatment: string;
}

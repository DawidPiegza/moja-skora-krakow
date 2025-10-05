export interface INanofraxMesotherapyData {
  overview: string;
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  recomendationsForTreatment: string;
  indicationsToTreatment: string[];
  advantagesOfTreatment: {
    advantages: string[];
    additionalInfo?: string;
  };
  effectsOfTratment: string[];
  courseOfTreatment: {
    title: string;
    description: string;
  }[];
  contraindications: string[];
  postTreatmentRecommendations: string[] | string;
  postTreatmentCare: string[];
  tytanTechnologyOverview: string;
}

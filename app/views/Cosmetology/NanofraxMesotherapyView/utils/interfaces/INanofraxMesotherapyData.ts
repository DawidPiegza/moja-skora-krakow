export interface INanofraxMesotherapyData {
  overview: string;
  oneNeedleOverview: string;
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  indicationsToTreatment: string[];
  causesOfEfficiency: string;
  effectsOfTratment: string[];
  courseOfTreatment: {
    title: string;
    description: string;
  }[];
  contraindications: string[];
  postTreatmentRecommendations: string[] | string;
  postTreatmentCare: string;
  tytanTechnologyOverview: string;
}

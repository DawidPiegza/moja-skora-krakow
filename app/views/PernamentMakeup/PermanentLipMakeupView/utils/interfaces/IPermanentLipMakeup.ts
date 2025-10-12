export interface IPermanentLipMakeup {
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
  postTreatmentRecommendations: string[];
  pigmentationInfo: {
    overview: string;
    treatmentPreparation: string[];
  };
  contraindications: {
    relative: string[];
    absolute: string[];
  };
  preparationForTreatment: string[];
  postTreatmentInfo: string[];
}

export interface ILipAugmentationAndContouring {
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  effectsOfTratment: string[];
  courseOfTreatment: {
    title: string;
    description: string;
  }[];
  constancyOfResults: string;
  preparationForTreatment: string[];
  contraindications: {
    relative: string[];
    absolute: string[];
  };
  convalescence: string;
  sideEffects: string[];
  postTreatmentRecommendations: string[];
  postTreatmentCare: string[];
}

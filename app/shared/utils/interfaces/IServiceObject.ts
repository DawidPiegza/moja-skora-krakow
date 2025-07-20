export interface IServiceObject {
  treatmentPhotoURL: string;
  description: string;
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  indicationsToTreatment: string[];
  descriptionOfPreparation?: string;
  compositionOfPreparation?: string;
  effectsOfTratment: string[];
  contraindications: string[];
  courseOfTreatment: string;
  postTreatmentRecommendations: string;
  interfalsInTreatment: string;
}

export interface ILaserRemovalOfPermanentMakeupAndTattoos {
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  treatmentOverview: string;
  indicationsToTreatment: string[];
  preparationForTreatment: string[];
  courseOfTreatment: {
    title: string;
    description: string;
  }[];
  contraindications: string[];
  postTreatmentRecommendations: string[];
}

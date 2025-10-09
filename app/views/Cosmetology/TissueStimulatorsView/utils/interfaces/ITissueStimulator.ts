export interface ITissueStimulator {
  overview: string;
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  stimulatorType: { name: string; description: string }[];
  stimulatorsInTheOffer: { stimulatorType: string; stimulatorName: string[] }[];
  courseOfTreatment: {
    title: string;
    description: string;
  }[];
  indicationsToTreatment: string[];
  preparationForTreatment: string[];
  postTreatmentRecommendations: string[];
  contraindicationsForTreatment: string[];
}

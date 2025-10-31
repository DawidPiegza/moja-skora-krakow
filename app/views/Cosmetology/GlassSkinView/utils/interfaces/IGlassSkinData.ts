export interface IGlassSkinData {
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  overview: string;
  effectsOfTreatment: string[];
  stepsOfTreatment: {
    name: string;
    description: string;
  }[];
}

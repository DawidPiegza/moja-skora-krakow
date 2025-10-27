export interface IOxygenatingTrioData {
  description: string;
  treatmentSteps: {
    stepTitle: string;
    stepDescription: string;
  }[];
  forWhom: string;
  indicationsToTreatment: string[];
  effectsOfTreatment: string[];
}

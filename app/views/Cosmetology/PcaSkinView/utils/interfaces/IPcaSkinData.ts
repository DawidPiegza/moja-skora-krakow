export interface IPcaSkinData {
  overview: string;
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  preparationForTreatment: string[];
  indicationsForTreatment: string[];
  contraindications: string[];
  faqQuestions: {
    question: string;
    answer: string;
  }[];
  postTreatmentRecommendations: string[];
  basicStepsOfPcaSkinTreatment: string[];
  typesOfPcaSkinTreatments: {
    type: string;
    price: string;
    forWho: string[];
    effectsOfTratment: string[];
    reactionsAfterProcedure: string[];
  }[];
}




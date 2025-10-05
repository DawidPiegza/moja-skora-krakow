export interface ICavitationPeeling {
  overview: string;
  infoTable: {
    recommendedNumber: string;
    timeOfTreatment: string;
    intervals: string;
  };
  indicationsToTreatment: string[];
  additionalInfo?: string;
  courseOfTreatment: {
    title: string;
    description: string;
  }[];
  contraindications: string[];
}

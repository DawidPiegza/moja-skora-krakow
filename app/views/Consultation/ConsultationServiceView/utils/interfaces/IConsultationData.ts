interface IConsultationElement {
  elementName: string;
  elementDescription: string;
}

export interface IConsultationData {
  overview: string;
  whatIncludes: IConsultationElement[];
  consultationSummary: string;
}

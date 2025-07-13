export interface IServiceDescription {
  serviceCategory:
    | "Kosmetologia"
    | "Modelowanie ust"
    | "stylizacja brwi i rzęs"
    | "Makijaż pernamentny";
  servicePicture: string;
  serviceTitle: {
    PL: string;
    ENG: string;
  };
  serviceDescrtiption: {
    PL: {
      mainDescription: string;
      indications: [{ indication: string }];
      contraindications: [{ contraindication: string }];
      effects: [{ effetct: string }];
      preparation?: string;
      preparationIngredients: string;
      serviceCourse: string;
      recommendations: string;
      frequency: string;
    };
    ENG: {};
  };
}

export interface IProXnData {
  overview: string;
  xanthohumolComplexOverview: string;
  treatmentEffects: string[];
  xanthohumolRecoveryTreatment: {
    overview: string;
    treatmentIngredients: {
      overview: string[];
      indications: string[];
      contraindications: string[];
    };
    keyIngredientsProXnTreatment: string[];
  };

  phaSolutionTreatment: {
    overview: string;
    actionOfTreatment: string[];
    indications: string[];
    contraindications: string[];
  };
  novaPeelTreatment: {
    overview: string;
    formulaIngredients: string[];
    indications: string[];
    contraindications: string[];
    keyActiveIngredients: string[];
  };
}

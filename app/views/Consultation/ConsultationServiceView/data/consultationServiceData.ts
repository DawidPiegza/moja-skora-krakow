import type { IConsultationData } from "../utils/interfaces/IConsultationData";

export const consultationServiceData: {
  pl: IConsultationData;
  en: IConsultationData;
} = {
  pl: {
    overview:
      "Konsultacja kosmetologiczna to pierwszy i kluczowy krok do skutecznej i świadomej pielęgnacji skóry. Jeśli borykasz się z problemami skórnymi, nie widzisz efektów dotychczasowej pielęgnacji, chcesz działać prewencyjnie lub po prostu zadbać o skórę na najwyższym poziomie – ta konsultacja jest dla Ciebie.",
    whatIncludes: [
      {
        elementName: "Wywiad kosmetologiczny i analiza stylu życia",
        elementDescription:
          "Przed rozpoczęciem konsultacji klient wypełnia kartę klienta, zawierającą pytania dotyczące m.in. przyjmowanych leków, suplementów oraz przebytych chorób – w celu wykluczenia ewentualnych przeciwwskazań do zabiegów kosmetologicznych i zapewnienia pełnego bezpieczeństwa terapii. Następnie przeprowadzamy szczegółowy wywiad, który pozwala nam lepiej zrozumieć potrzeby Twojej skóry. Porozmawiamy o codziennych nawykach, stylu życia, diecie, poziomie stresu, jakości snu i aktywności fizycznej – czyli o wszystkich czynnikach, które mogą mieć realny wpływ na kondycję skóry.",
      },
      {
        elementName: "Analiza kondycji skóry",
        elementDescription:
          "Ocenimy: typ skóry i jej aktualny stan, poziom nawilżenia, napięcia i elastyczności, obecność niedoskonałości, przebarwień, zmian naczyniowych, funkcjonowanie bariery hydrolipidowej, wrażliwość i reakcje skóry. Dzięki temu możemy odpowiednio dopasować nie tylko pielęgnację, ale też zabiegi oraz kosmetyki do pielęgnacji domowej.",
      },
      {
        elementName: "Omówienie dotychczasowej pielęgnacji i Twoich oczekiwań",
        elementDescription:
          "Przeanalizujemy używane przez Ciebie kosmetyki – zarówno składy, jak i sposób ich aplikacji. Porozmawiamy o wcześniej wykonywanych zabiegach oraz ewentualnych terapiach dermatologicznych. Określimy Twoje cele: czy zależy Ci na poprawie nawilżenia, redukcji trądziku, wyrównaniu kolorytu, prewencji starzenia, a może wsparciu terapii dermatologicznej.",
      },
      {
        elementName:
          "Beauty Plan – indywidualny plan pielęgnacyjny i terapeutyczny",
        elementDescription:
          "Na zakończenie otrzymasz: propozycje zabiegów gabinetowych (z uwzględnieniem częstotliwości i kolejności), szczegółowy plan pielęgnacyjny na rano i wieczór (krok po kroku), konkretne propozycje składników aktywnych i produktów, dopasowanych do potrzeb Twojej skóry.",
      },
    ],
    consultationSummary:
      "KOSZT KONSULTACJI WYNOSI 100 ZŁ. Jeśli zdecydujesz się na zabieg w ciągu 30 dni od konsultacji, kwota ta zostanie odliczona od ceny zabiegu",
  },
  en: {
    overview:
      "A cosmetology consultation is the first and most important step toward effective, conscious skincare. If you’re struggling with skin issues, not seeing results from your current routine, want to take preventive action, or simply care for your skin at the highest level – this consultation is for you.",
    whatIncludes: [
      {
        elementName: "Cosmetology interview and lifestyle analysis",
        elementDescription:
          "Before the consultation begins, you will fill out a short form with questions about any medications, supplements, and past health conditions- this allows us to tailor the treatment safely to your individual needs. Next, we’ll talk in detail to better understand what your skin needs. We’ll discuss your daily habits, lifestyle, diet, stress levels, sleep quality, and physical activity – all of which can significantly affect your skin's condition.",
      },
      {
        elementName: "Skin condition analysis",
        elementDescription:
          "We will assess: your skin type and its current condition, the level of hydration, firmness, and elasticity, the presence of imperfections, discoloration, or vascular changes, the state of the skin’s hydrolipid barrier, sensitivity, and how the skin reacts. Based on this assessment, we can select the most suitable treatments, skincare products, and a home care routine tailored to your skin’s needs.",
      },
      {
        elementName: "Review of your current skincare and expectations",
        elementDescription:
          "We’ll take a close look at the products you use – both their ingredients and how you apply them. We’ll also talk about any treatments you’ve had in the past, including dermatological therapies. We’ll clarify your skincare goals – hydration, acne reduction, tone correction, anti-aging, or dermatological support.",
      },
      {
        elementName: "Beauty Plan – a personalized skincare and treatment plan",
        elementDescription:
          "At the end of the consultation, you’ll receive: recommended in-clinic treatments (including suggested frequency and treatment sequence), a detailed morning and evening skincare routine (step by step), specific suggestions for active ingredients and products tailored to your skin’s needs.",
      },
    ],
    consultationSummary:
      "The consultation cost is 100 PLN. If you decide to book a treatment within 30 days of your consultation, this amount will be applied to the cost of your treatment.",
  },
};

export default consultationServiceData;

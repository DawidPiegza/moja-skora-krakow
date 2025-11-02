import type { ILipAugmentationAndContouring } from "../utils/interfaces/ILipAugmentationAndContouring";

export const lipAugmentationAndContouringDataPL: ILipAugmentationAndContouring =
  {
    infoTable: {
      recommendedNumber: "1 zabieg",
      timeOfTreatment: "45–60 minut",
      intervals: "co 3 miesiące",
    },
    effectsOfTratment: [
      "Likwidacja asymetrii",
      "Powiększenie i uwydatnienie ust",
      "Korekta kształtu ust",
      "Poprawa łuku kupidyna",
      "Wygładzenie ust",
      "Podkreślenie konturu",
    ],
    courseOfTreatment: [
      {
        title: "Wypełnienie karty",
        description:
          "Przed zabiegiem pacjent wypełnia kartę, która zawiera wszystkie informacje o przeciwwskazaniach do planowanego zabiegu.",
      },
      {
        title: "Konsultacja",
        description:
          "Doświadczony kosmetolog przeprowadza konsultację; uwzględnia proporcje twarzy i ust oraz oczekiwany efekt, aby dobrać odpowiednią technikę podania kwasu hialuronowego.",
      },
      {
        title: "Zabieg",
        description:
          "Zabieg polega na wprowadzeniu preparatu z kwasem hialuronowym przy pomocy strzykawki z cienką igłą. Wykonywane jest kilka precyzyjnych wkłuć w okolice ust w odpowiednich miejscach anatomicznych. Ilość preparatu dobierana jest indywidualnie, zwykle 0,5–1,0 ml.",
      },
    ],
    constancyOfResults:
      "Zabieg modelowania ust przy użyciu kwasu hialuronowego daje naturalne i długotrwałe efekty, które utrzymują się średnio od 6 do 12 miesięcy, aż do całkowitego wchłonięcia preparatu. Po tym okresie, możliwe jest ponowne wykonanie zabiegu. Czas utrzymywania się efektów zależy od kilku czynników, takich jak indywidualna szybkość metabolizowania kwasu hialuronowego w organizmie, rodzaj i ilość użytego preparatu, a także styl życia, pielęgnacja ust oraz częstotliwość ekspozycji na słońce.",
    preparationForTreatment: [
      "24 godziny przed zabiegiem nie należy pić kawy, napojów energetycznych ani alkoholu.",
      "48 godzin przed zabiegiem nie zażywaj leków przeciwbólowych, przeciwzapalnych ani przeciwzakrzepowych.",
      "W dniu zabiegu ogranicz palenie tytoniu.",
      "2–3 dni przed zabiegiem zadbaj o odpowiednie nawodnienie (wypij 2–3 litry wody dziennie).",
    ],
    contraindications: {
      relative: [
        "Antybiotykoterapia (należy odczekać 2 miesiące od ostatniej dawki)",
        "Terapia sterydowa",
        "Zakażenia wirusowe, bakteryjne lub grzybicze",
        "Padaczka",
        "Uczulenie na lidokainę",
        "AIDS",
        "Choroby psychiczne",
        "Rozległa próchnica",
        "Łuszczyca",
      ],
      absolute: [
        "Ciąża",
        "Okres karmienia piersią (minimum 6 miesięcy)",
        "Aktywne stany zapalne w obszarze miejsca zabiegowego",
        "Opryszczka",
        "Zajady bakteryjne",
        "Terapia retinoidami (min. 6 miesięcy od zakończenia terapii)",
        "Choroby nowotworowe",
        "Choroby autoimmunologiczne",
        "Bielactwo nabyte",
        "Wiek poniżej 18 roku życia",
        "Cukrzyca (nieleczona)",
        "Wypełniacze stałe w miejscu iniekcji",
        "Uczulenie na jad owadów błonkoskrzydłych lub kolagen bydlęcy",
      ],
    },
    convalescence:
      "Bezpośrednio po zabiegu usta mogą być opuchnięte, zaczerwienione i tkliwe. Mogą wystąpić siniaki, krwiaki lub asymetrie wynikające z opuchlizny, które ustępują w ciągu kilku dni. Pełna stabilizacja kwasu hialuronowego w tkankach następuje w ciągu około 2 tygodni.",
    sideEffects: [
      "Opuchlizna",
      "Siniaki",
      "Krwiaki",
      "Tkliwość w miejscach wkłuć",
      "Uczucie napięcia skóry",
    ],
    postTreatmentRecommendations: [
      "Powstrzymać się od spożywania alkoholu oraz przyjmowania leków przeciwbólowych i przeciwzapalnych przez minimum 48 godzin.",
      "W dniu zabiegu nie spożywać gorących ani pikantnych potraw i napojów.",
      "Zmień poszewkę i ręcznik oraz unikaj dotykania obszaru zabiegowego.",
      "Unikaj wahań termicznych – basenu, sauny, łaźni parowych, solarium oraz kriokomór przez około 2 tygodnie.",
      "Nie stosować okładów ciepłych ani zimnych na okolicę zabiegową.",
      "Nie masować ust samodzielnie i kontrolować mimikę twarzy (nie układać ust w tzw. 'dzióbek').",
      "Pić przynajmniej 2–3 litry wody dziennie.",
    ],
    postTreatmentCare: [
      "Nawilżać usta lanoliną lub wazeliną przez cały okres gojenia (około 3 tygodnie).",
      "W celu przyspieszenia wchłaniania siniaków stosować maść arnikową lub maść z heparyną.",
      "Nie nakładać makijażu w okolicy ust przez 48 godzin po zabiegu.",
    ],
  };

export const lipAugmentationAndContouringDataEN: ILipAugmentationAndContouring =
  {
    infoTable: {
      recommendedNumber: "1 treatment",
      timeOfTreatment: "45–60 minutes",
      intervals: "3 months",
    },
    effectsOfTratment: [
      "Correction of asymmetry",
      "Lip enhancement and volume increase",
      "Shape correction",
      "Cupid’s bow improvement",
      "Smoothing of the lips",
      "Definition of the lip contour",
    ],
    courseOfTreatment: [
      {
        title: "Form completion by the client",
        description:
          "Before the treatment, the first step is to complete a patient form. This document includes all relevant information regarding potential contraindications for the planned procedure.",
      },
      {
        title: "Consultation",
        description:
          "The procedure is performed by an experienced cosmetologist who assesses facial proportions, the natural shape of the lips, and the desired outcome to select the appropriate technique for administering hyaluronic acid.",
      },
      {
        title: "Treatment",
        description:
          "The procedure involves injecting a hyaluronic acid-based filler using a fine needle. The cosmetologist makes several precise injections in anatomically appropriate areas around the lips. The amount of product is selected individually, typically between 0.5 and 1.0 ml.",
      },
    ],
    constancyOfResults:
      "Lip enhancement using hyaluronic acid provides natural and long-lasting results that typically remain visible for 6 to 12 months, until the product is fully absorbed by the body. After this period, the procedure can be repeated. The longevity of the results depends on several factors, including the individual’s metabolism of hyaluronic acid, the type and amount of product used, as well as lifestyle, lip care routine, and sun exposure frequency.",
    preparationForTreatment: [
      "Avoid coffee, energy drinks, and alcohol 24 hours before the treatment.",
      "Do not take painkillers, anti-inflammatory, or anticoagulant medications 48 hours before the procedure.",
      "Do not smoke on the day of the treatment.",
      "Stay well hydrated for 2–3 days prior to the procedure (aim for 2–3 liters of water daily).",
    ],
    contraindications: {
      relative: [
        "Ongoing or recent antibiotic therapy (wait at least 2 months after last dose)",
        "Steroid therapy",
        "Viral, bacterial, or fungal infections",
        "Epilepsy",
        "Allergy to lidocaine",
        "HIV/AIDS",
        "Mental health disorders",
        "Extensive dental decay",
        "Psoriasis",
      ],
      absolute: [
        "Pregnancy",
        "Breastfeeding (minimum 6 months postpartum)",
        "Active inflammation in the treatment area",
        "Cold sores (herpes simplex)",
        "Bacterial angular cheilitis",
        "Retinoid therapy (e.g. isotretinoin — minimum 6 months after completion)",
        "Cancer",
        "Autoimmune diseases",
        "Vitiligo",
        "Under 18 years of age",
        "Untreated diabetes",
        "Permanent fillers in the injection area",
        "Allergy to Hymenoptera venom or bovine collagen",
      ],
    },
    convalescence:
      "Immediately after the treatment, the lips may be swollen, red, and tender. Bruising, hematomas, or temporary asymmetry due to swelling may occur and typically resolve within a few days. Full stabilization of hyaluronic acid in the tissues occurs within about 2 weeks.",
    sideEffects: [
      "Swelling",
      "Bruising",
      "Hematomas",
      "Tenderness at injection sites",
      "Tightness of the skin",
    ],
    postTreatmentRecommendations: [
      "Avoid alcohol and painkillers/anti-inflammatory medication for at least 48 hours.",
      "On the day of the treatment, avoid hot and spicy food or beverages.",
      "Replace pillowcases and towels; avoid touching the treated area.",
      "Avoid temperature fluctuations — stay away from pools, saunas, steam rooms, tanning beds, and cryo chambers for about 2 weeks.",
      "Do not apply hot or cold compresses to the lips.",
      "Avoid massaging the lips or pursing them (e.g. into a 'duck face').",
      "Drink at least 2–3 liters of water daily.",
    ],
    postTreatmentCare: [
      "Regularly moisturize your lips with lanolin or petroleum jelly throughout the healing process (around 3 weeks).",
      "To help bruises fade faster, apply arnica ointment or a heparin-based cream.",
      "Avoid applying any makeup to the lip area for at least 48 hours after the procedure.",
    ],
  };

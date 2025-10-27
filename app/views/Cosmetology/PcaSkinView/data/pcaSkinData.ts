import type { IPcaSkinData } from "../utils/interfaces/IPcaSkinData";

export const pcaSkinDataPL: IPcaSkinData = {
  overview:
    "PCA Skin Polska to oficjalny przedstawiciel amerykańskiej marki PCA Skin – lidera w dziedzinie zaawansowanych peelingów chemicznych oraz specjalistycznej pielęgnacji skóry. Marka od 30 lat obecna jest w podręcznikach dermatologii estetycznej i profesjonalnych publikacjach medycznych, jako twórca przełomowych formuł terapeutycznych. Produkty PCA Skin są przeznaczone wyłącznie dla lekarzy i licencjonowanych kosmetologów. Oparte są na składnikach aktywnych, takich jak kwasy AHA/BHA, enzymy oraz antyoksydanty, które skutecznie wspomagają leczenie wielu problemów skórnych – od trądziku, przez przebarwienia, po oznaki starzenia. Marka słynie z innowacyjnych rozwiązań, m.in. technologii samoneutralizujących się kwasów, co zwiększa bezpieczeństwo i skuteczność zabiegów.",
  infoTable: {
    recommendedNumber: "4–6",
    timeOfTreatment: "45 minut",
    intervals: "2–4 tygodnie",
  },
  preparationForTreatment: [
    "Unikać opalania i ekspozycji na słońce przez co najmniej 7 dni.",
    "Odstawić produkty złuszczające i retinoidy na 3–5 dni przed zabiegiem.",
    "Nie korzystać z solarium i samoopalaczy.",
    "Zgłosić wszelkie inne zabiegi estetyczne wykonane w ostatnich tygodniach.",
  ],
  indicationsForTreatment: [
    "Trądzik młodzieńczy i dorosłych",
    "Przebarwienia posłoneczne, hormonalne i pozapalne",
    "Zmarszczki i oznaki starzenia",
    "Szara, matowa i odwodniona skóra",
    "Skóra wrażliwa – zabiegi można dostosować dzięki delikatnym formułom i indywidualnemu podejściu",
  ],
  contraindications: [
    "Ciąża i karmienie piersią (z wyjątkiem niektórych terapii)",
    "Świeża opalenizna lub stosowanie samoopalaczy",
    "Aktywne infekcje skórne (bakteryjne, wirusowe)",
    "Choroby autoimmunologiczne w fazie aktywnej",
    "Zabiegi chirurgiczne i estetyczne w ciągu ostatnich 8 tygodni",
    "Alergia na składniki aktywne preparatów PCA Skin",
  ],
  faqQuestions: [
    {
      question: "Czy zabieg jest bezpieczny?",
      answer:
        "Tak, peelingi PCA Skin są bezpieczne, opracowane na podstawie badań klinicznych i dopasowane indywidualnie do potrzeb skóry.",
    },
    {
      question: "Jak długo utrzymują się efekty?",
      answer:
        "Rezultaty mogą być widoczne nawet przez kilka miesięcy do roku, w zależności od typu skóry i pielęgnacji domowej. Regularna ochrona UV i nawilżanie skóry znacznie przedłużają efekty.",
    },
    {
      question: "Czy zabieg nadaje się do skóry wrażliwej?",
      answer:
        "Tak, dostępne są delikatne formuły, specjalnie opracowane dla skóry reaktywnej i naczyniowej.",
    },
    {
      question: "Czy zabiegi PCA Skin można wykonywać latem?",
      answer:
        "Tak, zabiegi PCA Skin są bezpieczne także w sezonie letnim – pod warunkiem odpowiedniego doboru preparatów przez specjalistę oraz ścisłego przestrzegania zaleceń pozabiegowych. Kluczowe jest codzienne stosowanie kremu z filtrem SPF 50 oraz unikanie intensywnej ekspozycji na słońce przez kilka dni po zabiegu. Dzięki innowacyjnym, łagodnym formułom PCA Skin idealnie sprawdza się jako terapia całoroczna.",
    },
  ],
  postTreatmentRecommendations: [
    "Unikaj sauny, gorącej kąpieli oraz pary wodnej przez min. 72 godziny – wysoka temperatura może nasilić podrażnienie skóry.",
    "Nie korzystaj z basenu przez 5 dni po zabiegu – chlorowana woda może zaburzyć regenerację naskórka.",
    "Wstrzymaj się z intensywnym wysiłkiem fizycznym przez 2 dni, aby ograniczyć ryzyko nadmiernego pocenia się i podrażnień.",
    "Zmień poszewkę na poduszkę oraz ręcznik do twarzy – zapewni to higieniczne środowisko gojenia skóry.",
    "Unikaj kontaktu twarzy z pupilem – sierść i bakterie mogą zakłócić proces regeneracji.",
    "Nie wykonuj innych zabiegów w obszarze twarzy przez minimum 5–7 dni, w tym depilacji, mikrodermabrazji, elektrolizy czy wypełniaczy.",
    "Bezwzględnie stosuj krem z filtrem SPF 50 codziennie, nawet przy zachmurzeniu – przez co najmniej 4 tygodnie po zabiegu.",
    "Nie opalaj się i nie korzystaj z solarium przez min. 14 dni po zabiegu.",
    "Nie stosuj retinoidów i produktów złuszczających przez 5–7 dni po zabiegu.",
    "Unikaj makijażu przez minimum 24 godziny.",
    "Pamiętaj, że odpowiednia pielęgnacja domowa po zabiegu to kluczowy element sukcesu terapeutycznego.",
  ],
  basicStepsOfPcaSkinTreatment: [
    "Konsultacja i analiza skóry – omówienie potrzeb klienta oraz analiza stanu cery.",
    "Dwuetapowe oczyszczanie – usunięcie makijażu, nadmiaru sebum i zanieczyszczeń.",
    "Tonizacja i ocena kondycji skóry – sprawdzenie poziomu nawilżenia, obecności stanów zapalnych oraz określenie obszarów problematycznych.",
    "Maska terapeutyczna – indywidualnie dobrana mieszanka składników aktywnych (np. AHA, PHA, enzymy), która stanowi kluczowy element regenerujący.",
    "Neutralizacja skóry – przywrócenie fizjologicznego pH, ukojenie skóry i przygotowanie do zakończenia zabiegu.",
    "Peeling chemiczny – w zależności od potrzeb skóry stosujemy bardziej aktywny, specjalistyczny preparat złuszczający, który dociera głębiej i działa intensywniej.",
    "Zakończenie i ochrona – aplikacja kremu z filtrem SPF oraz preparatów regenerujących wraz z krótkim masażem relaksacyjnym.",
  ],
  typesOfPcaSkinTreatments: [
    {
      type: `Peeling I stopnia "Zabieg kwasowy odbudowujący na twarz"`,
      price: "350 zł",
      forWho: [
        "Pierwsza wizyta – rekomendowana",
        "Skóra z uszkodzoną barierą naskórkową",
        "Skóra bardzo wrażliwa, alergiczna, nadmiernie reaktywna na kosmetyki i czynniki zewnętrzne",
        "Skóra sucha, szorstka",
        "Skóra matowa, pozbawiona blasku",
        "Skóra wymagająca przygotowania do terapii z peelingiem (np. trądzik, przebarwienia, naczynka)",
      ],
      effectsOfTratment: [
        "Uregulowanie procesu rogowacenia",
        "Zmniejszenie ilości i widoczności zaskórników",
        "Poprawa ogólnej kondycji i struktury skóry",
        "Wyciszenie zmian zapalnych i redukcja zaczerwienień",
        "Natychmiastowe odświeżenie i wygładzenie cery",
        "Poprawa nawilżenia i elastyczności skóry",
        "Zdrowszy, bardziej promienny i wypoczęty wygląd skóry",
        "Redukcja drobnych zaskórników i oznak zmęczenia",
        "Wyrównanie kolorytu i poprawa struktury naskórka",
      ],
      reactionsAfterProcedure: [
        "Zaraz po zabiegu: skóra świeża, ukojona i promienna; ewentualne lekkie zaczerwienienie znika w ciągu kilku godzin.",
        "1–3 dni po zabiegu: możliwe delikatne, drobnopłatkowe złuszczanie (np. nos, broda, czoło); skóra może być lekko sucha i napięta – zalecane intensywne nawilżanie.",
        "Widoczność złuszczania: najczęściej ledwo zauważalne; nie występuje u każdej osoby – zależy od typu i kondycji skóry.",
        "Po zabiegu otrzymasz wszelkie porady i wskazówki, jak dbać o swoją skórę.",
      ],
    },
    {
      type: `Peeling II stopnia "Zabieg kwasowy, oczyszczająco-detoksykujący"`,
      price: "420 zł",
      forWho: [
        "Trądzik pospolity i zmiany zapalne",
        "Zaskórniki i rozszerzone pory",
        "Przebarwienia i nierówny koloryt skóry",
        "Zmarszczki i utrata jędrności",
        "Ziemista, poszarzała cera",
        "Oznaki odwodnienia i zmęczenia skóry",
      ],
      effectsOfTratment: [
        "Odblokowanie ujść gruczołów łojowych i dogłębne oczyszczenie skóry",
        "Redukcja zmian zapalnych i trądzikowych",
        "Normalizacja wydzielania sebum",
        "Zmniejszenie liczby zaskórników oraz zwężenie rozszerzonych porów",
        "Złuszczenie martwego naskórka i wygładzenie struktury skóry",
        "Widoczne wyrównanie kolorytu skóry",
        "Poprawa jędrności i ogólnej kondycji skóry",
        "Działanie łagodzące i wyciszające stany zapalne",
        "Redukcja drobnych blizn potrądzikowych",
      ],
      reactionsAfterProcedure: [
        "Zaraz po zabiegu: skóra napięta, lekko zaróżowiona i wyraźnie wygładzona; uczucie ‘liftingu’ i świeżości.",
        "1–3 dni po zabiegu: delikatne lub umiarkowane złuszczanie (szczególnie w strefie T); uczucie suchości, napięcia lub szorstkości naskórka – konieczne intensywne nawilżanie.",
        "Widoczność złuszczania: bardziej zauważalne niż w Poziomie I, ale nadal dyskretne; skóra może delikatnie się ‘rolować’ przy dotyku.",
      ],
    },
    {
      type: `Peeling III stopnia "Zabieg kwasowy przeciwzmarszczkowy na twarz"`,
      price: "500 zł",
      forWho: [
        "Blizny potrądzikowe",
        "Głębsze zmarszczki",
        "Utrata jędrności",
        "Skóry dojrzałe",
        "Głębokie przebarwienia",
      ],
      effectsOfTratment: [
        "Głębokie złuszczenie i regeneracja skóry",
        "Widoczna redukcja przebarwień i zmarszczek",
        "Poprawa gęstości i sprężystości skóry",
      ],
      reactionsAfterProcedure: [
        "Zaraz po zabiegu: skóra może być wyraźnie zaróżowiona, napięta i ciepła w dotyku; możliwe delikatne pieczenie lub mrowienie.",
        "1–3 dni po zabiegu: widoczne złuszczanie naskórka (płatkowe lub płatami), możliwa suchość, uczucie ściągnięcia i szorstkości – konieczne stosowanie preparatów regenerujących i ochronnych.",
        "Widoczność złuszczania: zauważalne w ciągu dnia – należy unikać pocierania skóry; możliwe lekkie zaczerwienienie, które ustępuje po kilku dniach.",
      ],
    },
  ],
};

export const pcaSkinDataEN: IPcaSkinData = {
  overview:
    "PCA Skin Polska is the official representative of the American brand PCA Skin – a global leader in advanced chemical peels and professional skincare solutions. For over 30 years, the brand has been featured in dermatology textbooks and medical publications as a pioneer in breakthrough therapeutic formulations. PCA Skin products are intended exclusively for physicians and licensed aestheticians. They are based on active ingredients such as AHA/BHA acids, enzymes, and antioxidants, which effectively support the treatment of various skin concerns – from acne and hyperpigmentation to signs of aging. The brand is known for its innovative solutions, including self-neutralizing acid technology, which enhances both the safety and effectiveness of treatments.",
  infoTable: {
    recommendedNumber: "4–6",
    timeOfTreatment: "45 minutes",
    intervals: "2–4 weeks",
  },
  preparationForTreatment: [
    "Avoid tanning and sun exposure for at least 7 days.",
    "Discontinue exfoliating products and retinoids 3–5 days prior to treatment.",
    "Avoid tanning beds and self-tanning products.",
    "Inform your specialist about any aesthetic procedures performed in the past few weeks.",
  ],
  indicationsForTreatment: [
    "Teen and adult acne",
    "Sunspots, hormonal discoloration, and post-inflammatory hyperpigmentation",
    "Fine lines and signs of aging",
    "Dull, tired, and dehydrated skin",
    "Treatments can be customized for sensitive skin – thanks to gentle formulas and an individualized approach",
  ],
  contraindications: [
    "Pregnancy and breastfeeding (with the exception of certain treatments)",
    "Recent tanning or use of self-tanning products",
    "Active skin infections (bacterial, viral)",
    "Active autoimmune diseases",
    "Surgical or aesthetic procedures within the past 8 weeks",
    "Allergy to active ingredients in PCA Skin products",
  ],
  faqQuestions: [
    {
      question: "Is the treatment safe?",
      answer:
        "Yes, PCA Skin peels are safe. They are developed based on clinical research and tailored individually to the needs of the skin.",
    },
    {
      question: "How long do the results last?",
      answer:
        "Results can last several months to even a year, depending on skin type and home care. Regular use of UV protection and proper hydration significantly prolong the effects.",
    },
    {
      question: "Is the treatment suitable for sensitive skin?",
      answer:
        "Yes, there are gentle formulas specifically designed for reactive and vascular skin.",
    },
    {
      question: "Can PCA Skin treatments be performed in the summer?",
      answer:
        "Yes, PCA Skin treatments are also safe during the summer season – provided the products are selected appropriately by a specialist and post-treatment instructions are followed closely. Daily use of SPF 50 sunscreen and avoiding intense sun exposure for a few days after the procedure are key. Thanks to their innovative, mild formulas, PCA Skin is an ideal year-round skincare therapy.",
    },
  ],
  postTreatmentRecommendations: [
    "Avoid saunas, hot baths, and steam for at least 72 hours – high temperatures may aggravate skin irritation.",
    "Do not use swimming pools for 5 days after the treatment – chlorinated water can disrupt skin regeneration.",
    "Refrain from intense physical activity for 2 days to minimize sweating and potential irritation.",
    "Change your pillowcase and face towel – this helps maintain a hygienic healing environment.",
    "Avoid direct contact of your face with pets – fur and bacteria can interfere with the healing process.",
    "Do not perform any other facial treatments for at least 5–7 days, including waxing, microdermabrasion, electrolysis, or filler injections.",
    "Always use an SPF 50 sunscreen daily, even on cloudy days – for at least 4 weeks after the procedure.",
    "Do not tan or use tanning beds for at least 14 days after the treatment.",
    "Avoid retinoids and exfoliating products for 5–7 days post-treatment.",
    "Avoid wearing makeup for at least 24 hours.",
    "Remember: proper at-home skincare after the treatment is a key factor in achieving long-term therapeutic success.",
  ],
  basicStepsOfPcaSkinTreatment: [
    "Consultation and skin analysis – discussion of the client’s needs and evaluation of skin condition.",
    "Two-step cleansing – removal of makeup, excess sebum, and impurities.",
    "Toning and skin assessment – assessment of hydration level, presence of inflammation, and identification of problem areas.",
    "Therapeutic mask – a customized blend of active ingredients (e.g. AHA, PHA, enzymes) providing targeted regeneration.",
    "Skin neutralization – restoring physiological pH, soothing the skin, and preparing it for the final stages.",
    "Chemical peel – depending on the skin’s needs, a more active exfoliating formula is applied to penetrate deeper and enhance results.",
    "Finishing and protection – application of SPF cream and regenerating products followed by a short relaxing massage.",
  ],
  typesOfPcaSkinTreatments: [
    {
      type: `Level I Peel "Rebuilding Acid Treatment for the Face"`,
      price: "350 PLN",
      forWho: [
        "First visit – recommended",
        "Skin with a damaged epidermal barrier",
        "Very sensitive, allergic, or overactive skin",
        "Dry, rough skin",
        "Dull, lackluster complexion",
        "Skin requiring preparation for chemical peel therapies (e.g. acne, pigmentation, broken capillaries)",
      ],
      effectsOfTratment: [
        "Regulation of the keratinization process",
        "Reduction in the number and visibility of blackheads",
        "Improved overall skin condition and texture",
        "Soothing of inflammatory lesions and reduction of redness",
        "Immediate refreshment and smoothing of the skin",
        "Enhanced hydration and skin elasticity",
        "Skin appears healthier, more radiant, and well-rested",
        "Reduction of minor blackheads and signs of fatigue",
        "Evening out of skin tone and texture improvement",
      ],
      reactionsAfterProcedure: [
        "Immediately after treatment: the skin is fresh, soothed, and radiant; any slight redness typically fades within a few hours.",
        "1–3 days after treatment: mild, small-flake peeling may occur (e.g. nose, chin, forehead); the skin may feel slightly dry and tight – intensive moisturizing is recommended.",
        "Exfoliation visibility: often barely visible and may not occur in every individual – it depends on the skin type and condition.",
        "You will receive full post-treatment guidance and personalized skincare tips.",
      ],
    },
    {
      type: `Level II Peel "Cleansing & Detoxifying Acid Treatment"`,
      price: "420 PLN",
      forWho: [
        "Acne vulgaris and inflammatory lesions",
        "Blackheads and enlarged pores",
        "Hyperpigmentation and uneven skin tone",
        "Fine lines and loss of firmness",
        "Dull, greyish complexion",
        "Dehydrated and fatigued skin",
      ],
      effectsOfTratment: [
        "Unclogging of sebaceous glands and deep cleansing of the skin",
        "Reduction of acne and inflammation",
        "Normalization of sebum production",
        "Decrease in blackheads and tightening of enlarged pores",
        "Exfoliation of dead skin cells and smoother texture",
        "Visible improvement in skin tone",
        "Enhanced firmness and overall skin condition",
        "Soothing of inflammation and redness",
        "Reduction of minor post-acne scars",
      ],
      reactionsAfterProcedure: [
        "Immediately after the procedure: the skin feels tight, slightly pink, and noticeably smoother – with a sensation of ‘lifting’ and freshness.",
        "1–3 days post-treatment: mild to moderate peeling may occur (especially in the T-zone); the skin may feel dry, tight, or slightly rough – intensive moisturizing is necessary.",
        "Peeling visibility: more noticeable than in Level I treatments, but still discreet – the skin may gently ‘roll’ when touched.",
      ],
    },
    {
      type: `Level III Peel "Anti-Wrinkle Acid Treatment for the Face"`,
      price: "500 PLN",
      forWho: [
        "Post-acne scars",
        "Deeper wrinkles",
        "Loss of firmness",
        "Mature skin",
        "Deep hyperpigmentation",
      ],
      effectsOfTratment: [
        "Deep exfoliation and skin regeneration",
        "Visible reduction in pigmentation and wrinkles",
        "Improved skin density and elasticity",
      ],
      reactionsAfterProcedure: [
        "Immediately after: the skin may appear noticeably pink, tight, and warm to the touch; mild stinging or tingling may occur.",
        "1–3 days post-treatment: visible exfoliation (in flakes or sheets); possible dryness, tightness, and rough texture – it is crucial to use recommended regenerative and protective products.",
        "Peeling visibility: noticeable during the day – avoid rubbing the skin; slight redness may occur and typically subsides within a few days.",
      ],
    },
  ],
};

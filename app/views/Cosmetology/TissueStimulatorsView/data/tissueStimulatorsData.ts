import type { ITissueStimulator } from "../utils/interfaces/ITissueStimulator";

export const tissueStimulatorsDataPL: ITissueStimulator = {
  overview:
    "Stymulatory tkankowe to preparaty do iniekcji, które mają na celu odmłodzenie struktury skóry poprzez jej silną regenerację, odnowę i przebudowę. Działają one poprzez intensywną stymulację fibroblastów do produkcji kolagenu i elastyny – białek odpowiedzialnych za jędrność, gęstość oraz elastyczność skóry. W naszym gabinecie wykorzystujemy stymulatory tkankowe oparte na najwyższej jakości składnikach, takich jak kwas hialuronowy, aminokwasy, polinukleotydy oraz kolagen. Dobór odpowiedniego preparatu zależy od jakości skóry Klienta, jego potrzeb oraz oczekiwań. Zabieg z użyciem stymulatorów tkankowych jest odpowiedni zarówno dla osób młodszych, jako profilaktyka przeciwzmarszczkowa, jak i dla osób dojrzałych, które borykają się z już widocznymi oznakami starzenia skóry.",
  infoTable: {
    recommendedNumber: "2-4 zabiegi",
    timeOfTreatment: "45-60 minut",
    intervals: "co 3-4 tygodnie",
  },
  stimulatorType: [
    {
      name: "Stymulatory kolagenowe",
      description: `Działają głęboko w skórze, aktywując fibroblasty do intensywnej produkcji nowego kolagenu – kluczowego białka odpowiedzialnego za jędrność, elastyczność i gęstość skóry. Ich głównym zadaniem nie jest wypełnianie, ale biostymulacja tkanek i długofalowa poprawa struktury skóry. Efekty pojawiają się stopniowo, ale są trwałe i naturalne – skóra staje się grubsza, bardziej napięta i mniej podatna na wiotczenie.`,
    },
    {
      name: "Stymulatory kwasu hialuronowego",
      description: `Ich głównym celem jest pobudzenie skóry do produkcji własnego kwasu hialuronowego, co przekłada się na intensywne nawilżenie, wygładzenie oraz poprawę elastyczności. Nie tylko wspomagają regenerację skóry, ale także przeciwdziałają utracie wody z naskórka, dzięki czemu skóra zyskuje zdrowy, promienny wygląd i miękkość.`,
    },
    {
      name: "Stymulatory na bazie polinukleotydów",
      description: `To najbardziej zaawansowana forma regeneracji biologicznej – zawierają fragmenty kwasów nukleinowych (DNA/RNA), które aktywnie wspierają odnowę komórkową, stymulują syntezę kolagenu, poprawiają mikrokrążenie i przyspieszają gojenie. Świetnie sprawdzają się w terapiach naprawczych – przy skórach uszkodzonych, z bliznami, przebarwieniami, po ekspozycji słonecznej lub terapii dermatologicznej. Działają nie tylko przeciwstarzeniowo, ale również przeciwzapalnie i antyoksydacyjnie.`,
    },
  ],
  stimulatorsInTheOffer: [
    {
      stimulatorType: "Stymulatory kolagenowe",
      stimulatorName: ["Karisma RH Collagen", "Guna Tropokolagen"],
    },
    {
      stimulatorType: "Stymulatory tkankowe na bazie polinukleotydów",
      stimulatorName: ["Nucleofill Strong/ Medium", "Vitaran"],
    },
    {
      stimulatorType: "Stymulatory kwasu hialuronowego",
      stimulatorName: ["Electri (bursztynian sodu i kwas hialuronowy)"],
    },
  ],
  courseOfTreatment: [
    {
      title: "KONSULTACJA",
      description: `Przed rozpoczęciem zabiegu przeprowadzamy wstępny etap, który polega na wypełnieniu karty pacjenta. Dokument ten zawiera wszystkie informacje o przeciwwskazaniach do planowanego zabiegu. Kosmetolog ocenia stan skóry oraz dobiera odpowiedni preparat, dostosowany do potrzeb i oczekiwanego efektu.`,
    },
    {
      title: "ZABIEG",
      description: `Zabieg z wykorzystaniem stymulatorów tkankowych polega na precyzyjnym wprowadzeniu składników aktywnych do skóry właściwej za pomocą cienkiej igły. Proces ten, poprzez delikatne wkłucie, wywołuje kontrolowany stan zapalny, który stymuluje skórę do regeneracji i rewitalizacji. Wybrane składniki aktywne w preparacie działają nawilżająco, zagęszczająco, rozjaśniająco lub napinająco, poprawiając kondycję skóry i przywracając jej młodszy wygląd.`,
    },
    {
      title: "ZALECENIA POZABIEGOWE",
      description: `Po zakończeniu zabiegu klientka otrzymuje szczegółowe instrukcje dotyczące pielęgnacji skóry w okresie gojenia.`,
    },
  ],
  indicationsToTreatment: [
    "Oznaki starzenia się skóry",
    "Utrata jędrności, elastyczności i napięcia skóry",
    "Zmarszczki w okolicy oczu",
    "Zasinienia i worki pod oczami",
    "Widoczna dolina łez",
    "Zaburzony owal twarzy - widoczne tzw. chomiki",
    "Utrata nawilżenia i suchość skóry",
    "Biorewitalizacja skóry",
    "Działanie anti-aging",
  ],
  preparationForTreatment: [
    "24h przed zabiegiem nie należy pić kawy, napojów energetycznych oraz alkoholu",
    "48h przed zabiegiem nie zażywaj leków przeciwbólowych i przeciwzapalnych, przeciwzakrzepowych",
    "W dniu zabiegu ogranicz palenie tytoniu",
    "W dniu zabiegu nie należy korzystać z sauny, basenu i gorących kąpieli",
    "2-3 dni przed zabiegiem zadbaj o odpowiednie nawodnienie (wypij 2- 3 litry wody dziennie)",
  ],
  postTreatmentRecommendations: [
    "Unikać nakładania makijażu przez min. 24 h.",
    "Nie spożywać alkoholu, przez najbliższe 3 doby",
    "Przez co najmniej 7 dni nie zaleca się korzystania z sauny, solarium, kąpieli słonecznych i innych rozgrzewających zabiegów",
    "Nie zaleca się korzystania z basenów przez co najmniej 7 dni po zabiegu",
    "Należy zadbać o odpowiednie nawodnienie (min. 2- 3 L wody dziennie)",
    "Nie przyjmować leków przeciwbólowych i przeciwzapalnych",
    "Do pielęgnacji skóry przez co najmniej 14 dni należy używać łagodzących, nawilżających kosmetyków (zaleconych przez kosmetologa wykonującego zabieg)",
  ],
  contraindicationsForTreatment: [
    "Ciąża i okres karmienia piersią",
    "Choroby zakaźne skóry bakteryjne, wirusowe, grzybicze",
    "Choroby autoimmunologiczne",
    "Skłonność do bliznowców",
    "Przyjmowanie leków przeciwzakrzepowych",
    "Przyjmowanie niesterydowych leków przeciwzapalnych",
    "Choroby nowotworowe",
    "Opryszczka",
    "Zaburzenia krzepliwości krwi",
    "Uczulenie na którykolwiek ze składników wchodzących w skład preparatu",
    "Stany zapalne w miejscu zabiegu",
    "Choroby tkanki łącznej (RZS, MIZS, toczeń rumieniowaty, twardzina układowa, zapalenie skórno-mięśniowe, zapalenie naczyń).",
    "Ziarniniakowe zapalenie skóry",
    "Dysmorfofobia",
    "Terapia doustnymi antybiotykami",
    "Epilepsja",
    "Wiek poniżej 18 roku życia",
    "Inne zabiegi estetyczne lub kosmetyczne: botoks (14 dni), laser frakcyjny (3-4 tyg.), peelingi chemiczne, fotoodmładzanie, IPL (7-14 dni), zabiegi stomatologiczne (min. 14 dni)",
  ],
};

export const tissueStimulatorsDataEN: ITissueStimulator = {
  overview:
    "Tissue stimulators are injectable products designed to rejuvenate the skin’s structure through intensive regeneration, renewal, and remodeling. They work by strongly stimulating fibroblasts to produce collagen and elastin—proteins responsible for skin firmness, density, and elasticity. At our clinic, we use top-quality stimulators based on ingredients such as hyaluronic acid, amino acids, polynucleotides, and collagen. The appropriate product is selected individually, depending on the client’s skin condition, needs, and expectations. This treatment is suitable both for younger individuals as a preventive anti-aging measure and for more mature clients who are already experiencing visible signs of skin aging.",
  infoTable: {
    recommendedNumber: "2–4 sessions",
    timeOfTreatment: "45–60 minutes",
    intervals: "every 3–4 weeks",
  },
  stimulatorType: [
    {
      name: "Collagen stimulators",
      description: `They work deep within the skin, activating fibroblasts to intensively produce new collagen – a key protein responsible for skin firmness, elasticity, and density. Their primary role is not to fill, but to biostimulate the tissues and bring long-term improvement to the skin’s structure. The effects appear gradually, but are long-lasting and natural – the skin becomes thicker, firmer, and less prone to sagging.`,
    },
    {
      name: "Hyaluronic acid-based stimulators",
      description: `Their main goal is to stimulate the skin to produce its own hyaluronic acid, resulting in deep hydration, smoothing, and improved elasticity. They not only support skin regeneration but also prevent transepidermal water loss, giving the skin a healthy, radiant appearance and softness.`,
    },
    {
      name: "Polynucleotide-based stimulators",
      description: `This is the most advanced form of biological regeneration – they contain fragments of nucleic acids (DNA/RNA) that actively support cellular renewal, stimulate collagen synthesis, improve microcirculation, and accelerate healing. They are ideal for reparative therapies – for damaged skin, scarring, discoloration, post-sun exposure, or after dermatological treatments. They work not only as anti-aging agents but also have anti-inflammatory and antioxidant effects.`,
    },
  ],
  stimulatorsInTheOffer: [
    {
      stimulatorType: "Collagen stimulators",
      stimulatorName: ["Karisma RH Collagen", "Guna Tropocollagen"],
    },
    {
      stimulatorType: "Polynucleotide-based stimulators",
      stimulatorName: ["Nucleofill Strong / Medium", "Vitaran"],
    },
    {
      stimulatorType: "Hyaluronic acid-based stimulators",
      stimulatorName: ["Electri (sodium succinate and hyaluronic acid)"],
    },
  ],
  courseOfTreatment: [
    {
      title: "CONSULTATION",
      description: `Before the procedure, the client completes a patient form containing all relevant information about contraindications. The cosmetologist evaluates the skin condition and selects the appropriate product tailored to the client's needs and desired results.`,
    },
    {
      title: "THE PROCEDURE",
      description: `The treatment involves the precise injection of active ingredients into the dermis using a fine needle. This process causes a controlled inflammatory response, which stimulates the skin to regenerate and revitalize. The selected active ingredients provide hydration, firming, brightening, or tightening effects—improving skin condition and restoring a youthful appearance.`,
    },
    {
      title: "POST-TREATMENT RECOMMENDATIONS",
      description: `After the procedure, the client receives detailed aftercare instructions to support the healing process.`,
    },
  ],
  indicationsToTreatment: [
    "Signs of skin aging",
    "Loss of firmness, elasticity, and skin tension",
    "Fine lines and wrinkles around the eyes",
    "Dark circles and puffiness under the eyes",
    "Prominent tear trough",
    'Sagging jawline ("jowls")',
    "Skin dehydration and dryness",
    "Skin biorevitalization",
    "Anti-aging effect",
  ],
  preparationForTreatment: [
    "Avoid coffee, energy drinks, and alcohol for 24 hours before the procedure",
    "Do not take painkillers, anti-inflammatory, or anticoagulant medications 48 hours before",
    "Do not smoke on the day of the treatment",
    "Avoid saunas, hot baths, and pools on the day of the treatment",
    "Ensure proper hydration 2–3 days prior (drink 2–3 liters of water daily)",
  ],
  postTreatmentRecommendations: [
    "Avoid wearing makeup for at least 24 hours",
    "Do not consume alcohol for at least 3 days",
    "Avoid saunas, sunbathing, solariums, and other heat treatments for at least 7 days",
    "Refrain from swimming pools for a minimum of 7 days",
    "Stay hydrated (at least 2–3 L of water daily)",
    "Avoid anti-inflammatory and pain-relieving medications",
    "Use only gentle, hydrating skincare products for at least 14 days (as recommended by your cosmetologist)",
  ],
  contraindicationsForTreatment: [
    "Pregnancy and breastfeeding",
    "Bacterial, viral, or fungal skin infections",
    "Autoimmune diseases",
    "Tendency to form keloids",
    "Use of anticoagulant medication",
    "Use of non-steroidal anti-inflammatory drugs",
    "Cancer",
    "Active herpes",
    "Blood clotting disorders",
    "Allergy to any ingredient in the product",
    "Inflammatory conditions at the treatment site",
    "Connective tissue diseases (e.g., RA, lupus, systemic sclerosis, dermatomyositis, vasculitis)",
    "Granulomatous skin diseases",
    "Body dysmorphia",
    "Oral antibiotic therapy",
    "Epilepsy",
    "Under 18 years of age",
    "Other aesthetic or cosmetic procedures: botox (14 days), fractional laser (3–4 weeks), chemical peels, photorejuvenation, IPL (7–14 days), dental treatments (min. 14 days)",
  ],
};

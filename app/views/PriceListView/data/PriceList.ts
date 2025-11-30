import type { IPriceList } from "../utils/interfaces/IPriceList";

export const PriceList: IPriceList = {
  categories: [
    {
      category: "Stylizacja brwi",
      priceListItems: [
        {
          itemName: "Laminacja brwi + regulacja + farbka",
          price: 160,
        },
        { itemName: "Farbka + regulacja", price: 90 },
        { itemName: "Laminacja + regulacja", price: 120 },
        { itemName: "Botox (dodatek do laminacji)", price: 15 },
        {
          itemName:
            "Pakiet laminacja brwi + lifting rzęs + koloryzacja + botox",
          price: 260,
          isBundle: true,
        },
      ],
    },
    {
      category: "Stylizacja rzęs",
      priceListItems: [
        { itemName: "Lifting rzęs", price: 140 },
        {
          itemName: "Lifting rzęs + koloryzacja",
          price: 170,
        },
        { itemName: "Botox (dodatek do liftingu)", price: 15 },
        { itemName: "Koloryzacja rzęs", price: 50 },
        { itemName: "Koloryzacja rzęs + botox", price: 60 },
        {
          itemName:
            "Pakiet laminacja brwi + lifting rzęs + koloryzacja + botox",
          price: 260,
          isBundle: true,
        },
      ],
    },
    {
      category: "Makijaż permanentny brwi",
      priceListItems: [
        { itemName: "Konsultacja", price: 50 },
        {
          itemName: "Makijaż permanentny brwi",
          price: 700,
        },
        { itemName: "Zabieg dopigmentowania brwi", price: 200 },
        { itemName: "Dodatkowy zabieg dopigmentowania brwi", price: 200 },
        {
          itemName: "Odświeżenie makijażu permanentnego z innego salonu",
          price: 600,
        },
        { itemName: "Odświeżenie makijażu permanentnego brwi", price: 500 },
      ],
    },
    {
      category: "Makijaż permanentny ust",
      priceListItems: [
        { itemName: "Konsultacja", price: 50 },
        {
          itemName: "Makijaż permanentny ust",
          price: 700,
        },
        { itemName: "Zabieg dopigmentowania ust", price: 200 },
        { itemName: "Dodatkowy zabieg dopigmentowania ust", price: 200 },
        {
          itemName: "Odświeżenie makijażu permanentnego z innego salonu",
          price: 600,
        },
        { itemName: "Odświeżenie makijażu permanentnego", price: 500 },
      ],
    },
    {
      category: "Usuwanie makijażu permanentnego/tatuażu",
      priceListItems: [
        {
          itemName: "Usuwanie laserowe makijażu permanentnego",
          price: 200,
        },
        { itemName: "Tatuaż od 2 cm 2", price: 99 },
        { itemName: "Tatuaż od 2 do 5 cm2", price: 200 },
        { itemName: "Tatuaż od 10 do 20 cm2", price: 400 },
        { itemName: "Tatuaż od 20 do 30 cm2", price: 550 },
      ],
    },
    {
      category: "PRO XN terapie z ksantohumolem",
      priceListItems: [
        {
          itemName: "Konsultacja kosmetologiczna z indywidualnym beauty planem",
          price: 100,
        },
        {
          itemName: "Zabieg regenerująco-kojący na twarz",
          itemDescription: "Autorski zabieg PRO XN I stopnia",
          price: 380,
        },
        {
          itemName: "Zabieg przeciwzmarszczkowy na twarz",
          itemDescription: "Autorski zabieg PRO XN II stopnia",
          price: 420,
        },
        {
          itemName: "Zabieg biostymulujący na twarz",
          itemDescription: "Autorski zabieg PRO XN III stopnia",

          price: 600,
        },
        {
          itemName: "Zabieg przeciwtrądzikowy na twarz",
          itemDescription: "PRO XN Acne rescue treatment",
          price: 390,
        },
      ],
    },
    {
      category: "PCA Skin spersonalizowane terapie skórne",
      priceListItems: [
        {
          itemName: "Konsultacja kosmetologiczna z indywidualnym beauty planem",
          price: 100,
        },
        {
          itemName: "Zabieg kwasowy odbudowujący na twarz",
          itemDescription: "Zabieg terapeutyczny podstawowy PCA SKIN",
          price: 350,
        },
        {
          itemName: "Zabieg kwasowy oczyszczająco-detoksykujący na twarz",
          itemDescription: "Zabieg terapeutyczny zaawansowany PCA SKIN",
          price: 420,
        },
        {
          itemName: "Zabieg kwasowy przeciwzmarszczowy na twarz",
          itemDescription: "Zabieg terapeutyczny premium PCA SKIN",
          price: 500,
        },
        {
          itemName: "Zabieg dotleniająco-odżywczy na twarz",
          itemDescription: "Oxygeneting Trio PCA SKIN",
          price: 350,
        },
        {
          itemName: "Zabieg odżywczo-regenerujący na twarz",
          itemDescription: "Dla kobiet w ciąży",
          price: 350,
        },
        {
          itemName: "Zabieg kwasowy silnie złuszczający na twarz",
          itemDescription: "Peeling węglowy + zabieg podstawowy PCA SKIN",
          price: 480,
        },
        {
          itemName: "Pakiet ZDROWA SKÓRA",
          itemDescription:
            "1 zabieg odbudowujący na twarz + 2 zabiegi kwasowe oczyszczająco-detoksykujące",
          price: 1000,
          isBundle: true,
        },
        {
          itemName: "Pakiet GLASS SKIN ",
          itemDescription:
            "1 zabieg odbudowujący na twarz + 2 zabiegi PCA Skin Oxygenating Trio z peelingiem kawitacyjnym",
          price: 1000,
          isBundle: true,
        },
      ],
    },
    {
      category: "Zabiegi na twarz",
      priceListItems: [
        { itemName: "Autorski zabieg GLASS SKIN", price: 380 },
        { itemName: "Peeling kawitacyjny + kwasy + serum + maska", price: 200 },
        { itemName: "Peeling węglowy", price: 300 },
        { itemName: "Peeling węglowy + kwasy + maska", price: 350 },
        {
          itemName: "Pakiet GLASS SKIN ",
          itemDescription:
            "1 zabieg odbudowujący na twarz + 2 zabiegi PCA Skin Oxygenating Trio z peelingiem kawitacyjnym",
          price: 1150,
          isBundle: true,
        },
      ],
    },
    {
      category: "Zabiegi dla kobiet w ciąży",
      priceListItems: [
        { itemName: "Nanofrax mezoterapia nanoigłowa", price: 450 },
        {
          itemName: "Zabieg regenerująco-kojący na twarz",
          itemDescription: "Autorski zabieg PRO XN I stopnia",
          price: 380,
        },
        { itemName: "Oxygenating Trio PCA Skin", price: 350 },
        { itemName: "Oxygenating Trio PCA Skin z maską Hydrate", price: 400 },
        { itemName: "Lifting rzęs + koloryzacja", price: 170 },
        { itemName: "Farbka + regulacja", price: 70 },
      ],
    },
    {
      category: "Mezoterapia igłowa",
      priceListItems: [
        { itemName: "twarz + szyja + dekolt - dobór preparatu", price: 1000 },
        { itemName: "okolica oka - dobór preparatu", price: 300 },
        { itemName: "twarz - dobór preparatu", price: 550 },
        { itemName: "twarz + szyja - dobór preparatu", price: 900 },
        { itemName: "Cytocare 532 5ml", price: 550 },
        { itemName: "Jalupro 3ml", price: 600 },
        { itemName: "Filorga NCTF 3ml", price: 600 },
        {
          itemName: "Pakiet 3 zabiegów Cytocare 532 5ml",
          price: 1410,
          isBundle: true,
        },
        {
          itemName: "Pakiet 3 zabiegów NCTF 3ml",
          price: 1560,
          isBundle: true,
        },
        {
          itemName: "Pakiet 3 zabiegów Jalupro 3ml",
          price: 1560,
          isBundle: true,
        },
        {
          itemName: "Pakiet GLOW FACE THERAPY",
          itemDescription:
            "1 mezoterapia igłowa twarzy + 3x stymulator tkankowy Nucleofill Medium/Strong",
          price: 2950,
          isBundle: true,
        },
        {
          itemName: "Pakiet REVITAL FACE",
          itemDescription:
            "2x mezoterapia igłowa twarzy + 4x stymulator tkankowy Nucleofill Medium/Strong",
          price: 2950,
          isBundle: true,
        },
      ],
    },
    {
      category: "Mezoterapia igłowa skóry głowy",
      priceListItems: [
        {
          itemName:
            "DR. CYJ Hair Filler - terapia peptydowa na wypadanie włosów",
          price: 700,
        },
        {
          itemName: "Filorga M- HA nawilżenie skóry głowy",
          price: 400,
        },
        {
          itemName: "RRS XL Hair biostymulacja wzrostu włosów",
          price: 350,
        },
        {
          itemName: "Pakiet ZDROWE WŁOSY",
          itemDescription:
            "1x mezoterapia igłowa- nawilżenie skóry głowy + 4x DR. CYJ Hair Filler",
          price: 2740,
          isBundle: true,
        },
        {
          itemName: "Pakiet 4 zabiegów DR. CYJ Hair Filler ",
          price: 2400,
          isBundle: true,
        },
        {
          itemName: "Pakiet 3 zabiegów Filorga M- HA nawilżenie skóry głowy",
          price: 990,
          isBundle: true,
        },

        {
          itemName: "Pakiet 3 zabiegów RRS XL Hair",
          price: 870,
          isBundle: true,
        },
      ],
    },
    {
      category: "Nanofrax mezoterapia mikroigłowa",
      priceListItems: [
        { itemName: "Twarz", price: 450 },
        { itemName: "Twarz + szyja", price: 550 },
        { itemName: "Twarz + szyja + dekolt", price: 650 },
        {
          itemName: "Pakiet 3 zabiegów mezoterapia mikroigłowa Twarz",
          price: 1140,
          isBundle: true,
        },
        {
          itemName: "Pakiet 3 zabiegów mezoterapia mikroigłowa Twarz + szyja",
          price: 1440,
          isBundle: true,
        },
        {
          itemName:
            "Pakiet 3 zabiegów mezoterapia mikroigłowa Twarz + szyja + dekolt",
          price: 1740,
          isBundle: true,
        },
      ],
    },
    {
      category: "Stymulatory tkankowe",
      priceListItems: [
        { itemName: "Stymulator tkankowy Nucleofill Soft eyes", price: 700 },
        { itemName: "Stymulator tkankowy Vitaran", price: 700 },
        {
          itemName: "Stymulator tkankowy Nucleofill Medium/Strong",
          price: 900,
        },
        { itemName: "Stymulatory tkankowy pod oczy Electri", price: 600 },
        {
          itemName: "Stymulator kolagenowy Karisma ",
          price: 1100,
        },
        {
          itemName: "Pakiet 3x stymulator tkankowy Electri",
          price: 1530,
          isBundle: true,
        },

        {
          itemName:
            "Pakiet 3x stymulator tkankowy Nucleofill Soft Eyes okolica oka",
          price: 1530,
          isBundle: true,
        },
        {
          itemName: "Pakiet 3x stymulator tkankowy Vitaran",
          price: 1530,
          isBundle: true,
        },

        {
          itemName: "Pakiet 3x stymulator tkankowy Nucleofill Medium/Strong",
          price: 2400,
          isBundle: true,
        },

        {
          itemName: "Pakiet 3x stymulator tkankowy Karisma",
          price: 2950,
          isBundle: true,
        },
        {
          itemName: "Pakiet GLOW FACE THERAPY",
          itemDescription:
            "1 mezoterapia igłowa twarzy + 3x stymulator tkankowy Nucleofill Medium/Strong",

          price: 2950,
          isBundle: true,
        },
        {
          itemName: "Pakiet REVITAL FACE",
          itemDescription:
            "2x mezoterapia igłowa twarzy + 4x stymulator tkankowy Nucleofill Medium/Strong",

          price: 4350,
          isBundle: true,
        },
        {
          itemName: "Pakiet GLOW EYE THERAPY",
          itemDescription:
            "1 mezoterapia igłowa + 3x stymulator tkankowy Electri",

          price: 1800,
          isBundle: true,
        },
      ],
    },
    {
      category: "Tropokolagen",
      priceListItems: [
        { itemName: "Okolica oka (1 ampułka/2ml)", price: 400 },
        { itemName: "Twarz (2 ampułki/4ml)", price: 600 },
        { itemName: "Twarz terapia rozbudowana (3 ampułki/6ml)", price: 750 },
        { itemName: "Twarz + szyja lub dekolt (4 ampułki/8ml)", price: 900 },
        { itemName: "Twarz + szyja + dekolt (5 ampułek/10ml) ", price: 1100 },
      ],
    },
    {
      category: "Wypełnianie/modelowanie ust na płasko",
      priceListItems: [
        { itemName: "Konsultacja - modelowanie ust", price: 50 },
        { itemName: "Modelowanie/powiększanie ust na płasko 1ml", price: 800 },
        {
          itemName: "Stymulator tkankowy - rewitalizacja i nawilżenie ust",
          price: 500,
        },
      ],
    },
    {
      category: "Rozpuszczanie kwasu hialuronowego - Hialuronidaza",
      priceListItems: [
        {
          itemName: "Konsultacja - rozpuszczanie ust/ hialuronidaza",
          price: 50,
        },
        { itemName: "Próba uczuleniowa - hialuronidaza", price: 100 },
        {
          itemName: "Hialuronidaza - rozpuszczanie kwasu hialuronowego",
          price: 500,
        },
      ],
    },
  ],
};

export const PriceListEN: IPriceList = {
  categories: [
    {
      category: "Brow styling",
      priceListItems: [
        { itemName: "Brow Lamination + Shaping + Tint", price: 160 },
        { itemName: "Tint + Shaping", price: 90 },
        { itemName: "Lamination + Shaping", price: 120 },
        { itemName: "Botox (add-on to lamination)", price: 15 },
        {
          itemName: "Package: Brow Lamination + Lash Lift + Tint + Botox",
          price: 260,
          isBundle: true,
        },
      ],
    },
    {
      category: "Lash styling",
      priceListItems: [
        { itemName: "Lash Lift", price: 140 },
        { itemName: "Lash Lift + Tint", price: 170 },
        { itemName: "Botox (add-on to lash lift)", price: 15 },
        { itemName: "Lash Tint", price: 50 },
        { itemName: "Lash Tint + Botox", price: 60 },
        {
          itemName: "Package: Brow Lamination + Lash Lift + Tint + Botox",
          price: 260,
          isBundle: true,
        },
      ],
    },
    {
      category: "Permanent brow makeup",
      priceListItems: [
        { itemName: "Consultation", price: 50 },
        { itemName: "Permanent Brow Makeup", price: 700 },
        { itemName: "Brow Touch-Up", price: 200 },
        {
          itemName: "Refresh of Permanent Makeup from another salon",
          price: 600,
        },
        { itemName: "Brow PMU Refresh", price: 500 },
      ],
    },
    {
      category: "Permanent lip makeup",
      priceListItems: [
        { itemName: "Consultation", price: 50 },
        { itemName: "Permanent Lip Makeup", price: 700 },
        { itemName: "Lip Touch-Up", price: 200 },
        {
          itemName: "Refresh of Permanent Makeup from another salon",
          price: 600,
        },
        { itemName: "Lip PMU Refresh", price: 500 },
      ],
    },
    {
      category: "Permanent makeup / tattoo removal",
      priceListItems: [
        { itemName: "Laser PMU Removal", price: 200 },
        { itemName: "Tattoo up to 2 cm2", price: 99 },
        { itemName: "Tattoo 2–5 cm2", price: 200 },
        { itemName: "Tattoo 10–20 cm2", price: 400 },
        { itemName: "Tattoo 20–30 cm2", price: 550 },
      ],
    },
    {
      category: "PRO XN Treatments with Xanthohumol",
      priceListItems: [
        {
          itemName: "Skin Consultation with Individual Beauty Plan",
          price: 100,
        },
        {
          itemName: "Regenerating & Calming Facial",
          itemDescription: "PRO XN – Level I",
          price: 380,
        },
        {
          itemName: "Anti-Aging Facial",
          itemDescription: "PRO XN – Level II",
          price: 420,
        },
        {
          itemName: "Biostimulating Facial",
          itemDescription: "PRO XN – Level III",
          price: 600,
        },
        {
          itemName: "Anti-Acne Facial",
          itemDescription: "PRO XN Acne Rescue Treatment",
          price: 390,
        },
      ],
    },
    {
      category: "PCA SKIN – Personalized Skin Treatments",
      priceListItems: [
        {
          itemName: "Skin Consultation with Individual Beauty Plan",
          price: 100,
        },
        {
          itemName: "Acid Based Rebuilding Acid Peel – Face",
          itemDescription: "PCA SKIN Basic Therapeutic Treatment",
          price: 350,
        },
        {
          itemName: "Purifying & Detoxifying Acid Peel – Face",
          itemDescription: "PCA SKIN Advanced Therapeutic Treatment",
          price: 420,
        },
        {
          itemName: "Anti- wrinkle Acid Peel – Face",
          itemDescription: "PCA SKIN Premium Therapeutic Treatment",
          price: 500,
        },
        {
          itemName: "Oxygenating & Nourishing Facial",
          itemDescription: "Oxygenating Trio by PCA SKIN",
          price: 350,
        },
        {
          itemName: "Nourishing & Regenerating Facial – Pregnancy-Safe",
          price: 350,
        },
        {
          itemName: "Intensive Exfoliating Acid Peel + Carbon Peel (Combo)",
          price: 480,
        },
        {
          itemName: "HEALTHY SKIN Package",
          itemDescription: "1 rebuilding facial + 2 purifying detox acid peels",
          price: 1000,
          isBundle: true,
        },
        {
          itemName: "GLASS SKIN Package",
          itemDescription:
            "1 rebuilding facial + 2 Oxygenating Trio treatments + cavitation peeling",
          price: 1000,
          isBundle: true,
        },
      ],
    },
    {
      category: "Facial Treatments",
      priceListItems: [
        { itemName: "Signature GLASS SKIN Treatment", price: 380 },
        {
          itemName: "Cavitation Peeling + Acids + Serum + Mask",
          price: 200,
        },
        { itemName: "Carbon Peel", price: 300 },
        { itemName: "Carbon Peel + Acids + Mask", price: 350 },
        { itemName: "GLASS SKIN Package", price: 1000, isBundle: true },
      ],
    },
    {
      category: "Treatments for Pregnancy",
      priceListItems: [
        { itemName: "Nanofrax Nano-Needling", price: 450 },
        {
          itemName: "Regenerating & Calming Treatment",
          itemDescription: "PRO XN Facial (Level I)",
          price: 380,
        },
        { itemName: "Oxygenating Trio PCA Skin", price: 350 },
        { itemName: "Oxygenating Trio + Hydrate Mask", price: 400 },
        { itemName: "Lash Lift + Tint", price: 170 },
        { itemName: "Tint + Shaping", price: 70 },
      ],
    },
    {
      category: "Needle Mesotherapy",
      priceListItems: [
        {
          itemName: "Face + Neck + Décolleté - custom cocktail from",
          price: 1000,
        },
        {
          itemName: "Eye Area - custom cocktail from",
          price: 300,
        },
        {
          itemName: "Face custom - cocktail from",
          price: 550,
        },
        {
          itemName: "Face + Neck - custom cocktail from",
          price: 900,
        },
        { itemName: "Cytocare 532 5 ml", price: 550 },
        { itemName: "Filorga NCTF 3 ml", price: 600 },
        { itemName: "Jalupro 3 ml", price: 600 },
        {
          itemName: "Package 3 × Cytocare 532 5 ml",
          price: 1410,
          isBundle: true,
        },
        {
          itemName: "Package 3 × Filorga NCTF 3 ml",
          price: 1560,
          isBundle: true,
        },
        {
          itemName: "Package 3 × Jalupro 3 ml",
          price: 1560,
          isBundle: true,
        },
        {
          itemName: "Package GLOW FACE THERAPY",
          itemDescription: "1 face mesotherapy + 3 × Nucleofill Medium/Strong",
          price: 2950,
          isBundle: true,
        },
        {
          itemName: "Package REVITAL FACE",
          itemDescription:
            "2 face mesotherapies + 4 × Nucleofill Medium/Strong",
          price: 4350,
          isBundle: true,
        },
        {
          itemName: "GLOW EYE THERAPY",
          itemDescription: "1 needle mesotherapy + 3 × Electri biostimulator",
          price: 1800,
          isBundle: true,
        },
        {
          itemName: "REVITAL EYE Package",
          itemDescription: "2 needle mesotherapies + 4 × Electri biostimulator",
          price: 2750,
          isBundle: true,
        },
      ],
    },
    {
      category: "Scalp Mesotherapy",
      priceListItems: [
        {
          itemName: "DR CYJ Hair Filler anti-hair loss peptide therapy",
          price: 700,
        },
        { itemName: "Filorga M-HA Hydration – Scalp", price: 400 },
        { itemName: "RRS XL Hair Biostimulation", price: 350 },
        {
          itemName: "HEALTHY HAIR Package",
          itemDescription: "1 hydration mesotherapy + 4 × DR CYJ Hair Filler",
          price: 2740,
          isBundle: true,
        },
        {
          itemName: "Package: 4 × DR CYJ Hair Filler",
          price: 2400,
          isBundle: true,
        },
        {
          itemName: "Package: 3 × Filorga M-HA",
          price: 990,
          isBundle: true,
        },
        {
          itemName: "Package: 3 × RRS XL Hair",
          price: 870,
          isBundle: true,
        },
      ],
    },
    {
      category: "Nanofrax Microneedling",
      priceListItems: [
        { itemName: "Face", price: 450 },
        { itemName: "Face + Neck", price: 550 },
        { itemName: "Face + Neck + Décolleté", price: 650 },
        { itemName: "Microneedling + Acids – Face", price: 550 },
        {
          itemName: "Face + Neck",
          itemDescription: "Microneedling + Acids",
          price: 650,
        },
        {
          itemName: "Face + Neck + Décolleté",
          itemDescription: "Microneedling + Acids",
          price: 750,
        },
        {
          itemName: "Package 3 × Microneedling – Face",
          price: 1140,
          isBundle: true,
        },
        {
          itemName: "Package 3 × Microneedling – Face + Neck",
          price: 1440,
          isBundle: true,
        },
        {
          itemName: "Package 3 × Microneedling – Face + Neck + Décolleté",
          price: 1740,
          isBundle: true,
        },
      ],
    },
    {
      category: "TISSUE STIMULATORS",
      priceListItems: [
        { itemName: "Electri Eye Area", price: 600 },
        { itemName: "Nucleofill Soft Eyes", price: 700 },
        { itemName: "Vitaran", price: 700 },
        { itemName: "Nucleofill Medium/Strong", price: 900 },
        { itemName: "Karisma Collagen Biostimulator", price: 1100 },
        {
          itemName: "Package 3 × Electri Eye Area",
          price: 1530,
          isBundle: true,
        },
        {
          itemName: "Package 3 × Nucleofill Soft Eyes",
          price: 1530,
          isBundle: true,
        },
        {
          itemName: "Package 3 × Vitaran",
          price: 1530,
          isBundle: true,
        },
        {
          itemName: "Package 3 × Nucleofill Medium/Strong",
          price: 2400,
          isBundle: true,
        },
        {
          itemName: "Package 3 × Karisma",
          price: 2950,
          isBundle: true,
        },
        {
          itemName: "Package GLOW FACE THERAPY",
          itemDescription: "1 face mesotherapy + 3 × Nucleofill Medium/Strong",
          price: 2950,
          isBundle: true,
        },
        {
          itemName: "Package REVITAL FACE",
          itemDescription:
            "2 face mesotherapies + 4 × Nucleofill Medium/Strong",
          price: 4350,
          isBundle: true,
        },
        {
          itemName: "GLOW EYE THERAPY",
          itemDescription:
            "1 needle mesotherapy + 3 × Electri tissue stimulators",
          price: 1800,
          isBundle: true,
        },
        {
          itemName: "REVITAL EYE Package",
          itemDescription:
            "2 needle mesotherapies + 4 × Electri tissue stimulators",
          price: 2750,
          isBundle: true,
        },
      ],
    },
    {
      category: "GUNA TROPOCOLLAGEN",
      priceListItems: [
        { itemName: "Eye Area (1 ampoule / 2 ml)", price: 400 },
        { itemName: "Face (2 ampoules / 4 ml)", price: 600 },
        { itemName: "Extended Face Therapy (3 ampoules / 6 ml)", price: 750 },
        {
          itemName: "Face + Neck or Décolleté (4 ampoules / 8 ml)",
          price: 900,
        },
        {
          itemName: "Face + Neck + Décolleté (5 ampoules / 10 ml)",
          price: 1100,
        },
        {
          itemName: "Scar Therapy with Tropocollagen from",
          itemDescription: "depending on area size",
          price: 400,
        },
      ],
    },
    {
      category: "Lip Enhancement / Flat Lip Modeling",
      priceListItems: [
        { itemName: "Consultation – Lip Modeling", price: 50 },
        {
          itemName: "Lip Augmentation / Flat Lip Modeling 1 ml",
          price: 800,
        },
        {
          itemName: "Biostimulator for Lip Hydration & Revitalisation",
          price: 500,
        },
      ],
    },
    {
      category: "Dissolving Hyaluronic Acid – Hyaluronidase",
      priceListItems: [
        { itemName: "Consultation", price: 50 },
        { itemName: "Allergy Test", price: 100 },
        { itemName: "Hyaluronidase Treatment (HA Dissolving)", price: 500 },
      ],
    },
  ],
};

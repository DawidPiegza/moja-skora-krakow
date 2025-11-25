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
        { itemName: "Zabieg regenerująco-kojący na twarz", price: 380 },
        { itemName: "Zabieg przeciwzmarszczkowy na twarz", price: 420 },
        { itemName: "Zabieg biostymulujący na twarz", price: 600 },
        { itemName: "Zabieg przeciwtrądzikowy na twarz", price: 390 },
      ],
    },
    {
      category: "PCA Skin spersonalizowane terapie skórne",
      priceListItems: [
        {
          itemName: "Konsultacja kosmetologiczna z indywidualnym beauty planem",
          price: 100,
        },
        { itemName: "Zabieg kwasowy odbudowujący na twarz", price: 350 },
        {
          itemName: "Zabieg kwasowy oczyszczająco- detoksykujący na twarz",
          price: 420,
        },
        { itemName: "Zabieg kwasowy przeciwzmarszczowy na twarz", price: 500 },
        { itemName: "Zabieg dotleniająco-odżywczy na twarz", price: 350 },
        { itemName: "Zabieg odżywczo-regenerujący na twarz", price: 350 },
        { itemName: "Zabieg kwasowy silnie złuszczający na twarz", price: 400 },
        {
          itemName: "Pakiet ZDROWA SKÓRA",
          itemDescription:
            "1 zabieg odbudowujący na twarz + 2 zabiegi kwasowe oczyszczająco- detoksykujące",
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
            "DR. CYJ Hair Filler - erapia peptydowa na wypadanie włosów",
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

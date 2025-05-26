import type { IPriceList } from "../utils/interfaces/IPriceList";

export const PriceList: IPriceList = {
  categories: [
    {
      category: "Stylizacja brwi",
      priceListItems: [
        {
          itemName: "Laminacja brwi + regulacja + farbka",
          price: 160,
          discountPrice: 120,
        },
        { itemName: "Farbka + regulacja", price: 60 },
        { itemName: "Laminacja + regulacja", price: 80 },
        { itemName: "Botox (dodatek do laminacji)", price: 15 },
      ],
    },
    {
      category: "Stylizacja rzęs",
      priceListItems: [
        { itemName: "Lifting rzęs", price: 130 },
        {
          itemName: "Lifting rzęs + koloryzacja",
          price: 170,
          discountPrice: 140,
        },
        { itemName: "Botox (dodatek do liftingu)", price: 20 },
        { itemName: "Koloryzacja rzęs", price: 40 },
        { itemName: "Koloryzacja rzęs + botox", price: 50 },
        {
          itemName:
            "Pakiet laminacja brwi + lifting rzęs + koloryzacja + botox",
          price: 260,
          discountPrice: 210,
        },
      ],
    },
    {
      category: "Makijaż permanentny brwi",
      priceListItems: [
        { itemName: "Konsultacja", price: 50 },
        {
          itemName: "Makijaż permanentny brwi",
          price: 1000,
          discountPrice: 700,
        },
        { itemName: "Zabieg dopigmentowania brwi", price: 0 },
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
          price: 1000,
          discountPrice: 700,
        },
        { itemName: "Zabieg dopigmentowania ust", price: 0 },
        { itemName: "Dodatkowy zabieg dopigmentowania ust", price: 200 },
        {
          itemName: "Odświeżenie makijażu permanentnego z innego salonu",
          price: 600,
        },
        { itemName: "Odświeżenie makijażu permanentnego", price: 500 },
      ],
    },
    {
      category: "Usuwanie makijażu permanentnego/ tatuażu",
      priceListItems: [
        {
          itemName: "Usuwanie laserowe makijażu permanentnego",
          price: 200,
          discountPrice: 150,
        },
        { itemName: "Tatuaż od 2 cm 2", price: 99 },
        { itemName: "Tatuaż od 2 do 5 cm2", price: 200 },
        { itemName: "Tatuaż od 10 do 20 cm2", price: 400 },
        { itemName: "Tatuaż od 20 do 30 cm2", price: 550 },
        { itemName: "Peeling węglowy", price: 300, discountPrice: 200 },
      ],
    },
    {
      category: "PRO XN terapie z ksantohumolem",
      priceListItems: [
        { itemName: "Konsultacja", price: 100 },
        { itemName: "Zabieg regenerująco- kojący na twarz", price: 350 },
        { itemName: "Zabieg przeciwzmarszczkowy na twarz", price: 380 },
        { itemName: "Zabieg biostymulujący na twarz", price: 570 },
        { itemName: "Zabieg przeciwtrądzikowy na twarz", price: 390 },
      ],
    },
    {
      category: "PCA Skin spersonalizowane terapie skórne",
      priceListItems: [
        { itemName: "Konsultacja", price: 100 },
        { itemName: "Zabieg kwasowy odbudowujący na twarz", price: 300 },
        {
          itemName: "Zabieg kwasowy oczyszczająco- detoksykujący na twarz",
          price: 400,
        },
        { itemName: "Zabieg kwasowy przeciwzmarszczowy na twarz", price: 480 },
        { itemName: "Zabieg dotleniająco- odżywczy na twarz", price: 350 },
        { itemName: "Zabieg odżywczo- regenerujący na twarz", price: 350 },
        { itemName: "Zabieg kwasowy silnie złuszczający na twarz", price: 400 },
      ],
    },
    {
      category: "Zabiegi na twarz",
      priceListItems: [
        { itemName: "Peeling kawitacyjny + kwasy + serum + maska", price: 180 },
        { itemName: "Peeling węglowy + kwasy + maska", price: 260 },
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
        {
          itemName: "Pakiet 3 zabiegów Cytocare 532 5 ml",
          price: 1650,
          discountPrice: 1410,
        },
        { itemName: "Filorga NCTF 3ml", price: 600 },
        {
          itemName: "Pakiet 3 zabiegów NCTF 3 ml",
          price: 1800,
          discountPrice: 1560,
        },
        { itemName: "Jalupro 3ml", price: 600 },
        {
          itemName: "Pakiet 3 zabiegów Jalupro 3ml",
          price: 1800,
          discountPrice: 1560,
        },
        {
          itemName: "Terapia peptydowa Dr Cyj Hair Filler 1 ml - skóra głowy",
          price: 700,
        },
        {
          itemName: "Pakiet 4 zabiegów Dr Cyj Hair Filler 1 ml",
          price: 2800,
          discountPrice: 2400,
        },
        { itemName: "XL Hair skóra głowy", price: 350 },
        {
          itemName: "Pakiet 3 zabiegów XL Hair skóra głowy",
          price: 1050,
          discountPrice: 870,
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
          price: 1350,
          discountPrice: 1140,
        },
        {
          itemName: "Pakiet 3 zabiegów mezoterapia mikroigłowa Twarz + szyja",
          price: 1650,
          discountPrice: 1440,
        },
        {
          itemName:
            "Pakiet 3 zabiegów mezoterapia mikroigłowa Twarz + szyja + dekolt",
          price: 1950,
          discountPrice: 1740,
        },
      ],
    },
    {
      category: "Stymulatory tkankowe",
      priceListItems: [
        { itemName: "Stymulatory tkankowy pod oczy Electri", price: 600 },
        { itemName: "Stymulator tkankowy Nucleofill Soft eyes", price: 700 },
        {
          itemName: "Stymulator tkankowy Nucleofill Medium/ Strong",
          price: 900,
        },
        { itemName: "Stymulator kolagenowy Karisma", price: 1100 },
      ],
    },
    {
      category: "Wypełnianie/ modelowanie ust na płasko",
      priceListItems: [
        { itemName: "Modelowanie ust na płasko 1 ml", price: 650 },
      ],
    },
  ],
};

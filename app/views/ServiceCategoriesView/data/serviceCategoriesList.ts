import type { IServiceCategory } from "../utils/interfaces/IServiceCategory";
import makijaz_pernamentny from "../../../../public/images/makijaz_pernamentny.jpg";
import kosmetologia from "../../../../public/images/kosmetologia.jpg";
import modelowanie_ust from "../../../../public/images/modelowanie_ust.jpg";
import stylizacja_brwi_i_rzes from "../../../../public/images/stylizacja_brwi_i_rzes.jpg";
import konsultacja from "../../../../public/images/konsultacja.jpeg";

export const serviceCategoriesList: IServiceCategory[] = [
  {
    title: "Makijaż permanentny",
    titleENG: "Permanent makeup",
    content:
      "W gabinecie Moja Skóra wykonujemy makijaż permanentny przy użyciu certyfikowanych pigmentów najwyższej jakości, które gwarantują bezpieczeństwo. Specjalizujemy się w delikatnych pigmentacjach z naturalnym wygojeniem. Każdy kształt dobieramy indywidualnie do urody klientki, z subtelnym podkreśleniem rysów twarzy. Stawiamy na estetykę, naturalność i trwały efekt.",
    pictureURL: makijaz_pernamentny,
    categoryURL: "/permanent_makeup",
  },
  {
    title: "Kosmetologia",
    titleENG: "Cosmetology",

    content:
      "W gabinecie Moja Skóra oferujemy indywidualnie dobrane terapie kosmetologiczne, których celem jest przywrócenie skórze zdrowia, równowagi i naturalnego blasku. Wykonujemy zabiegi na bazie sprawdzonych protokołów i renomowanych marek – m.in. PCA Skin, proXN. W naszej ofercie znajdują się terapie przeciwtrądzikowe, stymulatory tkankowe, peeling węglowy, mezoterapia igłowa i mikroigłowa. Każdy plan pielęgnacji poprzedza dokładna konsultacja oraz diagnoza, pracujemy z troską o efekt i bezpieczeństwo.",
    pictureURL: kosmetologia,
    categoryURL: "/cosmetology",
  },
  {
    title: "Modelowanie ust",
    titleENG: "Lip shaping",
    content:
      "W gabinecie Moja Skóra modelujemy usta metodą na płasko – techniką, która pozwala na równomierne rozłożenie preparatu i subtelne budowanie objętości. Pracujemy wyłącznie na sprawdzonych, wysokiej jakości preparatach, które zapewniają bezpieczeństwo i minimalizują ryzyko powikłań. Proces modelowania prowadzimy stopniowo, z zachowaniem naturalnych proporcji. Efektem są usta pełniejsze, nawilżone i estetyczne – bez efektu sztuczności.",
    pictureURL: modelowanie_ust,
    categoryURL: "/lip_shaping",
  },
  {
    title: "Stylizacja brwi i rzęs",
    titleENG: "Eyebrow and eyelash shaping",
    content:
      "W naszym gabinecie stylizujemy brwi i rzęsy w sposób spójny z urodą klientki. Oferujemy laminację, lifting, koloryzację i precyzyjną regulację, wszystko po to, by subtelnie podkreślić oprawę oka i nadać jej wyrazistość w naturalnym stylu. Pracujemy z dbałością o detal i trwałość efektu, kierując się estetyką oraz komfortem skóry i włosków.",
    pictureURL: stylizacja_brwi_i_rzes,
    categoryURL: "/eyebrow_and_eyelash_styling",
  },
  {
    title: "Konsultacja",
    titleENG: "Consultation",
    content:
      "W naszym gabinecie stylizujemy brwi i rzęsy w sposób spójny z urodą klientki. Oferujemy laminację, lifting, koloryzację i precyzyjną regulację, wszystko po to, by subtelnie podkreślić oprawę oka i nadać jej wyrazistość w naturalnym stylu. Pracujemy z dbałością o detal i trwałość efektu, kierując się estetyką oraz komfortem skóry i włosków.",
    pictureURL: konsultacja,
    categoryURL: "/consultation",
  },
];

import { servicesTypes } from "../../../../shared/utils/enums/EServicesTypes";
import kosmetologia from "../../../../../public/images/kosmetologia.jpg";
import medycyna_estetyczna from "../../../../../public/images/medycyna_estetyczna.jpg";
import stylizacja_brwi_oraz_rzes from "../../../../../public/images/stylizacja_brwi_oraz_rzes.jpg";

export const ServicesList = [
  {
    id: 1,
    serviceName: "KOSMETOLOGIA",
    serviceDesc:
      "Profesjonalne zabiegi odżywcze i regenerujące skórę, poprawiające jej kondycję. Dzięki nowoczesnym metodom eliminujemy niedoskonałości i przywracamy cerze zdrowy, promienny wygląd. ",
    servicePhoto: kosmetologia,
    navigationUrl: `/treatmentslist/${servicesTypes.kosmetologia
      .normalize("NFD")
      .replace(/[̀-\u036f]/g, "")
      .replace(/ /g, "_")}`,
  },
  {
    id: 2,
    serviceName: "MAKIJAŻ PERNAMENTNY",
    serviceDesc:
      "Dzięki trwałym technikom makijażu podkreślamy Twoje piękno i oszczędzamy Twój czas. Nasze rozwiązania zapewniają subtelny, naturalny efekt, idealnie dopasowany do Twoich oczekiwań. ",
    servicePhoto: medycyna_estetyczna,
    navigationUrl: `/treatmentslist/${servicesTypes.makijazPernamentny
      .normalize("NFD")
      .replace(/[̀-\u036f]/g, "")
      .replace(/ /g, "_")}`,
  },
  {
    id: 3,
    serviceName: "STYLIZACJA BRWI i RZĘS",
    serviceDesc:
      "Oferujemy profesjonalną stylizację brwi i rzęs, w tym hennę, laminację i lifting. Nasze zabiegi podkreślają Twoją urodę, zapewniając długotrwały efekt i wyjątkowe podkreślenie spojrzenia. ",
    servicePhoto: stylizacja_brwi_oraz_rzes,
    navigationUrl: `/treatmentslist/${servicesTypes.stylizacjaBrwiIrzes
      .normalize("NFD")
      .replace(/[̀-\u036f]/g, "")
      .replace(/ /g, "_")}`,
  },
];

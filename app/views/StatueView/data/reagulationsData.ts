export interface Regulamin {
  paragrafy: {
    [key: string]: {
      tytul?: string;
      punkty?: (
        | string
        | {
            [key: string]: string | string[];
          }
      )[];
    };
  };
}

export const regulaminMojaSkora: Regulamin = {
  paragrafy: {
    "§1": {
      tytul: "Postanowienia ogólne",
      punkty: [
        "Niniejszy regulamin (dalej: „Regulamin”) określa zasady świadczenia usług w gabinecie kosmetologicznym „Moja Skóra” z siedzibą w Krakowie, przy ul.Św. Sebastiana 22/2C 31-553",
        "Gabinet świadczy odpłatne usługi z zakresu kosmetologii i pielęgnacji skóry twarzy zgodnie z aktualną ofertą dostępną w gabinecie oraz na stronie internetowej: WKLEIĆ NAZWĘ STRONY INTERNET.(link)",
        "Klienci gabinetu „Moja Skóra” są zobowiązani do zapoznania się z niniejszym Regulaminem przed przystąpieniem do jakiejkolwiek usługi kosmetologicznej (dalej: „Zabieg”).",
        "Rozpoczęcie Zabiegu jest równoznaczne z potwierdzeniem znajomości i akceptacji treści Regulaminu oraz zobowiązaniem do przestrzegania jego postanowień.",
        "Gabinet zastrzega sobie prawo do zmiany treści Regulaminu. Zmiany wchodzą w życie z chwilą ich opublikowania na stronie internetowej gabinetu.",
        "Gabinet „Moja Skóra” zastrzega sobie prawo do zmiany godzin otwarcia oraz harmonogramu pracy.",
        "Na terenie gabinetu „Moja Skóra” obowiązuje całkowity zakaz palenia tytoniu, spożywania alkoholu oraz stosowania jakichkolwiek substancji odurzających.",
      ],
    },
    "§2": {
      tytul: "Umawianie wizyt",
      punkty: [
        "Rezerwacje wizyt i konsultacji w Gabinecie „Moja Skóra” przyjmowane są telefonicznie, mailowo, poprzez wiadomości SMS, osobiście, a także za pośrednictwem systemu Booksy oraz mediów społecznościowych – Facebook i Instagram. W przypadku kontaktu za pomocą wiadomości elektronicznych (SMS, e-mail), termin uznaje się za potwierdzony wyłącznie po otrzymaniu zwrotnego potwierdzenia od personelu Gabinetu.",
        "Dokonanie rezerwacji oznacza zapoznanie się z niniejszym Regulaminem oraz jego akceptację. Klient zobowiązany jest do przestrzegania zasad określonych w Regulaminie od momentu potwierdzenia rezerwacji wizyty lub konsultacji.",
        "W sytuacji wielokrotnego odwoływania lub przekładania terminów przez Klienta, Gabinet może odmówić wyznaczenia kolejnych wizyt, kierując się potrzebą zapewnienia sprawnej organizacji pracy oraz dostępności terminów dla innych Klientów.",
      ],
    },
    "§3": {
      tytul: "Klienci gabinetu",
      punkty: [
        "Z usług Gabinetu „Moja Skóra” mogą korzystać osoby pełnoletnie, posiadające pełną zdolność do czynności prawnych.",
        "Osoby niepełnoletnie, które ukończyły 13. rok życia, mogą korzystać z usług wyłącznie za uprzednią, wyraźną zgodą rodzica, opiekuna prawnego lub przedstawiciela ustawowego.",
        "Przed przystąpieniem do wykonania zabiegu, personel Gabinetu ma prawo zażądać pisemnej zgody przedstawiciela ustawowego osoby niepełnoletniej lub potwierdzić zgodę telefonicznie. W przypadku braku możliwości uzyskania takiego potwierdzenia, Gabinet zastrzega sobie prawo do odmowy wykonania usługi.",
      ],
    },
    "§4": {
      tytul: "Obowiązki informacyjne klienta",
      punkty: [
        "Klient zobowiązany jest do przekazania personelowi Gabinetu wszelkich informacji i okoliczności, które mogą mieć znaczenie dla prawidłowego przeprowadzenia konsultacji kosmetologicznej oraz dobrania odpowiedniego zabiegu.",
        "Klient ponosi wyłączną odpowiedzialność za nieprawdziwe, niepełne lub zatajone informacje, które mogły mieć wpływ na przebieg i efekty świadczonych usług. Gabinet „Moja Skóra” nie ponosi odpowiedzialności za skutki wynikające z podania przez Klienta błędnych, nieprawdziwych lub wprowadzających w błąd danych",
      ],
    },
    "§5": {
      tytul: "Świadczenie usług kosmetologicznych",
      punkty: [
        "Przed wykonaniem usługi kosmetologicznej personel Gabinetu przeprowadza szczegółowy wywiad, mający na celu ocenę stanu skóry oraz identyfikację ewentualnych przeciwwskazań. Na podstawie zebranych informacji ustalane są również zalecenia pozabiegowe, których przestrzeganie jest niezbędne dla bezpieczeństwa oraz skuteczności zabiegu.",
        {
          "Przystępując do zabiegu, Klient oświadcza, że:": [
            "został poinformowany o charakterze oraz przebiegu planowanego zabiegu;",
            "rozumie, że oferowane zabiegi wykonywane są z należytą starannością, jednak ich skuteczność zależy od wielu indywidualnych czynników i nie gwarantują one uzyskania określonego efektu;",
            "nie będzie zgłaszał roszczeń finansowych w przypadku, gdy efekt zabiegu okaże się niezadowalający lub niezgodny z oczekiwaniami;",
            "nie znajduje się w stanie, który mógłby stanowić przeciwwskazanie do wykonania zabiegu, w tym m.in. nie jest w ciąży, nie karmi piersią, nie przyjmuje leków ani substancji, które mogłyby wpływać na przebieg lub efekt zabiegu.",
          ],
        },
      ],
    },
    "§6": {
      tytul: "Płatność i dokumentacja",
      punkty: [
        "Płatności za usługi świadczone w Gabinecie „Moja Skóra” realizowane są gotówką, BLIKIEM lub w wyjątkowych sytuacjach – przelewem na wskazany rachunek bankowy Gabinetu, po uprzednim, indywidualnym ustaleniu takiej formy płatności z personelem Gabinetu.",
        "Płatność przelewem uznaje się za dokonaną w dniu zaksięgowania środków na rachunku bankowym Gabinetu.",
        "Klient zobowiązany jest do uregulowania płatności za wykonaną usługę w dniu wizyty.",
        "Gabinet wystawia potwierdzenie sprzedaży w formie paragonu fiskalnego lub – na życzenie Klienta zgłoszone przed rozliczeniem – faktury VAT. Po wydrukowaniu paragonu wystawienie faktury nie będzie możliwe.",
      ],
    },
    "§7": {
      tytul: "Pakiety zabiegowe - zasady",
      punkty: [
        "W przypadku zakupu pakietu zabiegów, Klient zobowiązany jest do uiszczenia pełnej opłaty za cały pakiet najpóźniej w dniu realizacji pierwszego zabiegu wchodzącego w skład jego .",
        "W przypadku braku płatności w powyższym terminie, wszystkie zabiegi objęte pakietem traktowane będą jako usługi pojedyncze, rozliczane zgodnie z obowiązującym w dniu wykonania zabiegu cennikiem dla usług indywidualnych.",
        "W przypadku rezygnacji z pakietu, który został opłacony, Gabinet rozliczy dotychczas zrealizowane zabiegi według cen jednostkowych obowiązujących w dniu zakupu pakietu. Pozostała niewykorzystana kwota może zostać zwrócona lub wykorzystana na inne usługi.",
        "Środki wpłacone w ramach zakupu pakietu lub niewykorzystane zabiegi mogą zostać zrealizowane w ciągu 6 miesięcy od daty zakupu, z wyłączeniem zabiegów objętych odrębnym regulaminem promocji.",
      ],
    },
    "§8": {
      tytul: "Prawo do odmowy wykonania usługi",
      punkty: [
        "Personel gabinetu „Moja Skóra” zastrzega sobie prawo do odmowy wykonania usługi w następujących przypadkach:",
        "Gdy klient nie wyrazi zgody na wykonanie usługi lub zgoda nie została udzielona w sposób prawidłowy – zgodnie z obowiązującymi przepisami prawa i standardami gabinetu;",
        "Jeśli stan klienta wskazuje na spożycie alkoholu, środków odurzających lub innych substancji, które w ocenie personelu mogą stanowić zagrożenie dla zdrowia lub utrudniać prawidłowe wykonanie usługi.",
        "Jeśli na podstawie oceny stanu zdrowia, wywiadu lub dokumentacji klient nie kwalifikuje się do wykonania danej usługi, np. z uwagi na przeciwwskazania",
        "Gdy klient odmówi udzielenia niezbędnych informacji, nie wypełni wymaganych formularzy lub nie wyrazi zgody na czynności konieczne do prawidłowego wykonania zabiegu;",
        "Jeśli klient nie wyrazi zgody na wykonanie dokumentacji fotograficznej stanowiącej element dokumentacji kosmetologicznej – w przypadku usług, w których dokumentacja taka jest niezbędna;",
        "Gdy klient nie dokona płatności za usługę zgodnie z zasadami określonymi w niniejszym regulaminie;",
        "Jeśli klient spóźni się na zabieg lub konsultację w maksymalnym dopuszczalnym czasie, tj. ponad 15 minut.",
      ],
    },
    "§9": {
      tytul: "Promocje",
      punkty: [
        "Gabinet Moja Skóra może organizować okresowe promocje dotyczące wybranych usług lub produktów.",
        "Gabinet Moja Skóra zastrzega sobie prawo do wprowadzania zmian w warunkach promocji, w tym do ich przedłużenia, skrócenia lub zakończenia – w formie tożsamej z formą ogłoszenia promocji.",
        "Odwołanie promocji nie ma zastosowania wobec osób, które w momencie ogłoszenia decyzji o zakończeniu promocji już skutecznie z niej skorzystały (np. dokonały zakupu lub rezerwacji objętej promocją).",
        "Uczestnikami promocji mogą być wyłącznie osoby fizyczne posiadające pełną zdolność do czynności prawnych, a także – w przypadkach przewidzianych przez obowiązujące przepisy – osoby z ograniczoną zdolnością do czynności prawnych, będące konsumentami w rozumieniu art. 22(1) Kodeksu cywilnego.",
        "Promocje nie podlegają łączeniu, chyba że wyraźnie wskazano inaczej w warunkach konkretnej promocji.",
      ],
    },
    "§10": {
      tytul: "Ochrona danych osobowych (RODO)",
      punkty: [
        {
          "Administrator danych":
            "Administratorem Pani/Pana danych osobowych jest gabinet kosmetologiczny „Moja Skóra” z siedzibą w Krakowie, ul. Św. Sebastiana 22/2C  działalność gospodarczą pod firmą „Moja Skóra” (dalej: „Gabinet”). Kontakt z administratorem: mojaskora.krakow@gmail.com , tel. 518 456 332",
        },
        "Gabinet przetwarza wyłącznie dane niezbędne do wykonania i rozliczenia usług kosmetologicznych, w szczególności: imię, nazwisko, numer telefonu, adres e-mail, dane dotyczące stanu skóry podane w wywiadzie.",
        {
          "Cele i podstawa prawna przetwarzania": [
            "zawarcie i realizacja umowy o świadczenie usług kosmetologicznych (art. 6 ust. 1 lit. b RODO);",
            "wypełnienie obowiązków prawnych ciążących na Gabinecie (np. rozliczenia podatkowe) – art. 6 ust. 1 lit. c RODO;",
            "prawnie uzasadniony interes Gabinetu, w tym dochodzenie roszczeń, marketing własnych usług – art. 6 ust. 1 lit. f RODO;",
            "dobrowolna zgoda Klienta, jeśli jej udzielenie jest wymagane (art. 6 ust. 1 lit. a RODO).",
          ],
        },
        {
          "Dane mogą być udostępniane wyłącznie:": [
            "podmiotom wspierającym obsługę księgową, prawną i IT Gabinetu;",
            "dostawcom systemów rezerwacyjnych i płatności;",
            "organom państwowym, jeżeli taki obowiązek wynika z przepisów prawa.",
          ],
        },
        {
          "Dane przechowywane są:": [
            "przez czas świadczenia usług i rozliczeń, a następnie zgodnie z terminami przedawnienia roszczeń cywilnoprawnych;",
            "dokumenty księgowe – 5 lat;",
          ],
        },
        {
          "Każdy Klient ma prawo do": [
            "dostępu do swoich danych i otrzymania kopii,",
            "sprostowania lub uzupełnienia danych,",
            "usunięcia danych („prawo do bycia zapomnianym”),",
            "ograniczenia przetwarzania,",
            "przenoszenia danych,",
            "wniesienia sprzeciwu wobec przetwarzania danych na podstawie prawnie uzasadnionego interesu,",
            "cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem wcześniejszego przetwarzania),",
            "wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.",
          ],
        },
        "Podanie danych jest dobrowolne, lecz niezbędne do zawarcia i realizacji umowy o świadczenie usług. Brak podania danych może uniemożliwić wykonanie usługi.",
        "Gabinet stosuje środki organizacyjne i techniczne zapewniające ochronę danych osobowych, m.in. zabezpieczenia fizyczne lokalu, hasła dostępu, szyfrowane kopie zapasowe oraz przeszkolony personel.",
        "Sprzeciw można wnieść pisemnie lub mailowo na dane kontaktowe wskazane w pkt 1. Po otrzymaniu sprzeciwu Gabinet zaprzestanie przetwarzania danych w zakresie objętym sprzeciwem, chyba że istnieją ważne prawnie uzasadnione podstawy do dalszego przetwarzania lub konieczność dochodzenia roszczeń.",
      ],
    },
  },
};

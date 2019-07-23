function scrollTo(hash) {
  if ($("#header__list").hasClass("clicked")) {
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 83
      },
      800,
      () => {}
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 105
      },
      800,
      () => {}
    );
  }
}

$(".hero__button").click(function(event) {
  scrollTo(".offer");
});

$("a").click(function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    scrollTo(this.hash);

    if ($("#header__list").hasClass("clicked")) {
      $("#header__list").css("display", "none");
    }
  }
});

$("#mercedes").click(function(e) {
  e.preventDefault();

  $("#fleet__overlay").css("display", "block");
});

$("#fleet__exit__icon").click(function(e) {
  e.preventDefault();

  $("#fleet__overlay").css("display", "none");
});

$("#navigation__burger").click(function(e) {
  e.preventDefault();

  if ($("#header__list").hasClass("clicked")) {
    $("#header__list").css("display", "none");
    $("#header__list").toggleClass("clicked");
  } else {
    $("#header__list").css("display", "flex");
    $("#header__list").toggleClass("clicked");
  }
});

const textes = [
  {
    id: "#about-text",
    pol: "O NAS",
    ang: "ABOUT US"
  },
  {
    id: "#offer-text",
    pol: "OFERTA",
    ang: "OFFER"
  },
  {
    id: "#tariff-text",
    pol: "CENNIK",
    ang: "TARIFF"
  },
  {
    id: "#fleet-text",
    pol: "FLOTA",
    ang: "FLEET"
  },
  {
    id: "#gallery-text",
    pol: "GALERIA",
    ang: "GALLERY"
  },
  {
    id: "#faq-text",
    pol: "FAQ",
    ang: "FAQ"
  },
  {
    id: "#contact-text",
    pol: "KONTAKT",
    ang: "CONTACT"
  },
  {
    id: "#fleet-overlay-alert-text",
    pol: "Uwaga - Zdjęcie poglądowe",
    ang: "Attention - Demonstrative photo"
  },
  {
    id: "#fleet-overlay-heading-text",
    pol: "Ilość miejsc: 5 Wyposażenie:",
    ang: "Seat amount: 5 Equipment:"
  },
  {
    id: "#fleet-overlay-clime-text",
    pol: "Klimatyzacja automatyczna 2-strefowa",
    ang: "Automatic air conditioning,"
  },
  {
    id: "#fleet-overlay-leather",
    pol: "Skórzana tapicerka,",
    ang: "Leather padding,"
  },
  {
    id: "#fleet-overlay-armchairs",
    pol: "Indywidualne fotele,",
    ang: "Individual armchairs,"
  },
  {
    id: "#fleet-overlay-automatic",
    pol: "Automatyczna skrzynia biegów,",
    ang: "Automatic gearbox,"
  },
  {
    id: "#fleet-overlay-lights",
    pol: "Inteligente światła ILS LED,",
    ang: "Intelligent ILS LED lights,"
  },
  {
    id: "#fleet-overlay-advanced",
    pol: "Zaawansowane systemy bezpieczeństwa i komfortu,",
    ang: "Advanced security and comfort systems"
  },
  {
    id: "#fleet-overlay-pane",
    pol: "Przyciemniane szyby",
    ang: "Darken panes"
  },
  {
    id: "#hero-comfort-text",
    pol: "Wygoda i dostępność",
    ang: "Comfort and availability"
  },
  {
    id: "#hero-cite-text",
    pol:
      "Jesteśmy firmą wynajmującą samochody wraz z kierowcą. Czy moglibyśmy Ci jakoś pomóc?",
    ang: "We are car with diver lending company. Could we help you?"
  },
  {
    id: "#hero__button",
    pol: "Sprawdź nas!",
    ang: "Check us!"
  },
  {
    id: "#offer-heading-text",
    pol: "Oferta",
    ang: "Offer"
  },
  {
    id: "#zakopane-heading-text",
    pol: "Transfer do Zakopanego",
    ang: "Transfer to Zakopane"
  },
  {
    id: "#zakopane-content-text",
    pol:
      'Dzięki nam i autostradzie "Zakopianka" mogą Państwo bez żadnych przeszkód pojechać na ferie lub wakacje do Zakopanego, gdzie można aktywnie odpocząć od miejskiego klimatu na łonie natury.',
    ang:
      'Thanks to us and "Zakopianka" highway you can without any interruption travel on holidays to Zakopane, where you can have a rest actively from urban climate in the bosom of nature'
  },
  {
    id: "#balice-heading-text",
    pol: "Transfer do Balic",
    ang: "Transfer to Balice"
  },
  {
    id: "#balice-content-text",
    pol:
      "W podkrakowskich Balicach znajduje się jedno z największych w Polsce międzynarodowych lotnisk.Dzięki nami mogą Państwo szybko i bezpiecznie dotrzeć na miejsce.",
    ang:
      "In suburban Balice is located one of bigges international airports in Poland. Thaks to us you can fastly and safely reach the goal."
  },
  {
    id: "#wieliczka-heading-text",
    pol: "Transfer do Wieliczki",
    ang: "Transfer to Wieliczka"
  },
  {
    id: "#wieliczka-content-text",
    pol:
      "Każdego roku do położonej pod Krakowem Wieliczki przybywa około milion turystów z całego świata chcących zobaczyć odkrywkową kopalnię soli wpisaną na Listę Światowego Dziedzictwa Kulturalnego i Przyrodniczego UNESCO.",
    ang:
      "Every year to located near Kraków Wieliczka arrives about milion tourists from all the world, who want to see salt mine inscribed to World Heritage Site."
  },
  {
    id: "#oswiecim-heading-text",
    pol: "Transfer do Oświęcimia",
    ang: "Transfer to Oświęcim"
  },
  {
    id: "#oswiecim-content-text",
    pol:
      "Około półtorej godziny od Krakowa w Oświęcimiu znajduje się muzeum Auschwitz-Birkenau do którego ściągają tłumy turystów każdego roku.Można w nim na własne oczy zobaczyć obozy koncentracyjne z czasów II Wojny Światowej.",
    ang:
      "About an hour and half from Kraków in Oświęcim is located Auschwitz-Birkenau museum to which arrive crowd of tourists every year. You can with your own eyes see concentration camps from the Second World War period."
  },
  {
    id: "#occasional-heading-text",
    pol: "Imprezy okolicznościowe",
    ang: "Occasional events"
  },
  {
    id: "#occasional-content-text",
    pol:
      "Planują Państwo ślub, urodziny, chrzest, imieniny lub inną imprezę okolicznościową? Pozwólcie sobie Państwo na transport z kulturalnym i eleganckim kierowcą dzięki któremu nawet w trakcie transportu poczują Państwo powagę imprezy.",
    ang:
      "Do you plan wedding, baptism, name day por other occasional event? Let yourself to transport with cultural and elegant driver"
  },
  {
    id: "#other-heading-text",
    pol: "Inne",
    ang: "Other"
  },
  {
    id: "#other-content-text",
    pol:
      "Jeżeli życzą sobie Państwo przewóz w inne miejsca, na przykład do innych miast lub innych miejscowości, zapraszamy do kontaktu z nami!",
    ang:
      "If you wish transit to other place, for example to other cities, feel free to contact with us!"
  },
  {
    id: "#t1",
    pol: "1h lub 50km",
    ang: "1h or 50km"
  },
  {
    id: "#t2",
    pol: "24h lub 250km",
    ang: "24h or 250km"
  },
  {
    id: "#t3",
    pol: "Ekstra 1h lub 50km",
    ang: "Extra 1h or 50km"
  },
  {
    id: "#t4",
    pol: "Transfer do 50km",
    ang: "Transfer to 50km"
  },
  {
    id: "#prize",
    pol: "Cena",
    ang: "Prize"
  },
  {
    id: "#car-name",
    pol: "Mercedes E klasa",
    ang: "Mercedes E class"
  },
  {
    id: "#tariff-alert-1",
    pol: "Uwaga 1 - obowiązuje indywidualna cena na imprezy okolicznościowe",
    ang: "Note 1 - Individual prizing of Occasional Events"
  },
  {
    id: "#tariff-alert-2",
    pol: "Uwaga 2 - Wynajem auta RAZEM z kierowcą",
    ang: "Note 2 - Car lending WITH driver"
  },
  {
    id: "#contact-footer-heading",
    pol: "SKONTAKTUJ SIĘ",
    ang: "CONTACT WITH US"
  },
  {
    id: "#navigation-footer-heading",
    pol: "NAWIGACJA",
    ang: "NAVIGATION"
  },
  {
    id: "#about-text-footer",
    pol: "O NAS",
    ang: "ABOUT US"
  },
  {
    id: "#offer-text-footer",
    pol: "OFERTA",
    ang: "OFFER"
  },
  {
    id: "#tariff-text-footer",
    pol: "CENNIK",
    ang: "TARIFF"
  },
  {
    id: "#fleet-text-footer",
    pol: "FLOTA",
    ang: "FLEET"
  },
  {
    id: "#gallery-text-footer",
    pol: "GALERIA",
    ang: "GALLERY"
  },
  {
    id: "#faq-text-footer",
    pol: "FAQ",
    ang: "FAQ"
  },
  {
    id: "#contact-text-footer",
    pol: "KONTAKT",
    ang: "CONTACT"
  },
  {
    id: "#fleet-heading",
    pol: "Flota",
    ang: "Fleet"
  },
  {
    id: "#gallery-heading",
    pol: "Galeria",
    ang: "Gallery"
  },
  {
    id: "#tariff-heading",
    pol: "Cennik",
    ang: "Tariff"
  }
];

$("#ang-trigger").click(function(e) {
  e.preventDefault();

  for (const text of textes) {
    $(text.id).text(text.ang);
  }
});

$("#pol-trigger").click(function(e) {
  e.preventDefault();

  for (const text of textes) {
    $(text.id).text(text.pol);
  }
});

document.addEventListener(
  "click",
  function(event) {
    if (!event.target.closest("#fleet__overlay")) return;

    $("#fleet__overlay").css("display", "none");
  },
  false
);

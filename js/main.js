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
    pol: "Planują Państwo ślub, urodziny, chrzest, imieniny lub inną imprezę okolicznościową? Pozwólcie sobie Państwo na transport z kulturalnym i eleganckim kierowcą dzięki któremu nawet w trakcie transportu poczują Państwo powagę imprezy.",
    ang: "Do you plan wedding, baptism, name day por other occasional event? "
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

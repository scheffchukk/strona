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

document.addEventListener(
  "click",
  function(event) {
    if (!event.target.closest("#fleet__overlay")) return;

    $("#fleet__overlay").css("display", "none");
  },
  false
);

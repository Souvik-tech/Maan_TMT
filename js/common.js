// Faq Accordion
$('.faqWrap .accTrigger').click(function () {
  if ($(this).closest('.accEach').hasClass('active')) {
    $(this).closest('.accEach').removeClass('active');
    $(this).next('.accCont').slideUp(300);
  }
  else {
    $('.faqWrap .accEach').removeClass('active');
    $('.faqWrap .accCont').slideUp(300);
    $(this).closest('.accEach').addClass('active');
    $(this).next('.accCont').slideDown(300);
  }
});

// scroll to top button
var header = $('.navbar');
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    header.addClass('show');
  }
  else {
    header.removeClass('show');
  }
});
document.getElementById("scrollTotop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// footer arrow

window.addEventListener("DOMContentLoaded", function () {
  const $arrow = $(".footerhvrArr");

  $(".footer-main-heading h2").on("mouseenter", function () {
    $arrow.addClass("active");
  });

  $(".footer-main-heading h2").on("mouseleave", function () {
    $arrow.removeClass("active");
  });

  $(document).on("mousemove", function (e) {
    if ($arrow.hasClass("active")) {
      $arrow.css({
        left: e.clientX + "px",
        top: e.clientY + "px",
      });
    }
  });

  // Optional click action
  $arrow.on("click", function () {
    alert("Arrow clicked!");
  });
});

// count up
$(".counter").countUp();



//  offerSwiper

const swiper = new Swiper(".offerSwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});



// press release

$(document).ready(function () {
  // Initialize press sliders
  $(".pressSlick").slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    centerPadding: "16px",
    infinite: true,
    prevArrow: $('.prs-swiper-button-prev'),
    nextArrow: $('.prs-swiper-button-next'),
    appendArrows: $('.prs-nav'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  });

  // Tab click handler
  $(".newsTabWrap .tabLi").on("click", function () {
    let tabID = $(this).attr("data-tab");

    // Activate clicked tab
    $(this).addClass("active").siblings().removeClass("active");

    // Show matching tab content
    $(".newsTabWrap .tab_content")
      .removeClass("active")
      .filter("#press-" + tabID)
      .addClass("active");

    // Reposition slick after tab change
    $("#press-" + tabID)
      .find(".pressSlick")
      .slick("setPosition");
  });

  // Accordion setup
  let firstAcc = $(".newsTabWrap .accEach").first();
  firstAcc.addClass("active");
  firstAcc.find(".accCont").slideDown(0);

  // Accordion click toggle
  $(".newsTabWrap .accTrigger").on("click", function (e) {
    e.preventDefault();

    let accEach = $(this).closest(".accEach");

    if (accEach.hasClass("active")) {
      accEach.removeClass("active");
      accEach.find(".accCont").slideUp(300);
    } else {
      $(".newsTabWrap .accEach").removeClass("active");
      $(".newsTabWrap .accCont").slideUp(300);

      accEach.addClass("active");
      accEach.find(".accCont").slideDown(300);
    }

    setTimeout(() => {
      $("html, body").animate(
        {
          scrollTop: $(".newsTabWrap .tab_content.active").offset().top - 60,
        },
        500
      );
    }, 400);

    $(".pressSlick").slick("setPosition");
  });
});

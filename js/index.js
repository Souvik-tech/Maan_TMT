jQuery(document).ready(function($) {
  $('.slick.marquee').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
});

jQuery(document).ready(function($) {
  $('.slick.logo-marquee').slick({
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
});




gsap.registerPlugin(ScrollTrigger);

// Split text into letter spans
$(".has-mask-fill").each(function() {
        var words = $(this).text();
        var total = words;
        $(this).empty();
        $(this).append($("<span /> ").text(words));
    });

    $(".has-mask-fill.block-title").each(function() {
        var words = $(this).text().split(" ");
        var total = words.length;
        $(this).empty();
        for (index = 0; index < total; index++) {
            $(this).append($("<span /> ").text(words[index]));
        }
    });

    var hasMaskFill = gsap.utils.toArray(".has-mask-fill");
    hasMaskFill.forEach(function(hMaskFill) {
        var spanFillMask = hMaskFill.querySelectorAll("span");
        gsap.to(spanFillMask, {
            scrollTrigger: {
                trigger: hMaskFill,
                start: "top 55%",
                end: () => `+=${hMaskFill.offsetHeight * 2}`,
                scrub: 1,
            },
            duration: 1,
            backgroundSize: "200% 100%",
            stagger: 0.5,
            ease: Linear.easeNone,
        });
    });


    // testimonial slider

$('.slider-for-testConent').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for-testConent',
  dots: false,
  centerPadding: '100px',
  arrows: true,
  centerMode: true, // Change back to true for centering
  focusOnSelect: true,
  infinite: true,
  speed: 600,
  cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  useTransform: true,
  prevArrow: $('.ts-swiper-button-prev'),
  nextArrow: $('.ts-swiper-button-next'),
  appendArrows: $('.testi-nav'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        centerMode: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    }
  ]
});




// application tab 

function initTabs(container) {
  const tablist = container.querySelector("[role='tablist']");
  const tabs = Array.from(tablist.querySelectorAll("[role='tab']"));
  
  const firstTab = tabs[0];
  const lastTab = tabs[tabs.length - 1];
  
  function activateTab(tab) {
    const tabpanelID = tab.getAttribute('aria-controls');
    const tabpanel = document.getElementById(tabpanelID);
    
    tab.setAttribute('aria-selected', true);
    tab.removeAttribute('tabindex');
    tabpanel.setAttribute('tabindex', 0);
    
    // deactivate other tabs and tabpanels
    document.querySelectorAll('[role="tab"], [role="tabpanel"]').forEach(el => {
      if (el !== tab && el !== tabpanel) {
        if (el.matches('[role="tab"]')) { // el is a tab
          el.setAttribute('aria-selected', false);
          el.setAttribute('tabindex', -1);
        }
        else { // el is a tabpanel
          el.removeAttribute('tabindex');
        }
      }
    });
  }
  
  function handleClick(e) {
    const { target } = e;
    if (target.matches('[role="tab"]')) // matches() takes css selectors as args
       activateTab(target);
  }
  
  function handlePreviousTab(currentTab) {
    let activeTab;
    if (currentTab === firstTab) {
      activeTab = lastTab;
    }
    else {
      index = tabs.indexOf(currentTab);
      activeTab = tabs[index - 1];
    }
    
    activateTab(activeTab);
    activeTab.focus();
  }
  
  function handleNextTab(currentTab) {
    let activeTab;
    if (currentTab === lastTab) {
      activeTab = firstTab;
    }
    else {
      index = tabs.indexOf(currentTab);
      activeTab = tabs[index + 1];
    }
    
    activateTab(activeTab);
    activeTab.focus();
  }
  
  function handleKeyboardNavigation(e) {
    const { target } = e;
    if (target.matches('[role="tab"]')) {
      switch (e.key) {
        case 'ArrowLeft':
          handlePreviousTab(target);
          break;
              
        case 'ArrowRight':
          handleNextTab(target);
          break;
          
        // fn + Left Arrow on Mac         
        case 'Home':
          activateTab(firstTab);
          firstTab.focus();
          break;
          
        // fn + Right Arrow on Mac  
        case 'End':
          activateTab(lastTab);
          lastTab.focus();
          break;
      }
    }
  }
  
  tablist.addEventListener('mouseover', handleClick);
  tablist.addEventListener('keydown', handleKeyboardNavigation);
}

const tabContainers = document.querySelectorAll('.tabs');
tabContainers.forEach(initTabs);
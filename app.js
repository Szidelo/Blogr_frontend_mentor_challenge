$(document).ready(function () {
  // desktop arrows rotation----------------------------------------------------

  let dropDownItem = $(".dropdown");

  const onArrowHover = (e) => {
    let rotate = `rotate(180deg)`;
    $(e.currentTarget).find(".arrow-icon").css("transform", rotate);
  };

  const onLeaveArrow = (e) => {
    $(e.currentTarget).find(".arrow-icon").css("transform", "");
  };

  dropDownItem.on("mouseenter", onArrowHover);
  dropDownItem.on("mouseleave", onLeaveArrow);

  // mobile navbar toggle--------------------------------------------------------

  let burgerBtn = $("#burger");

  const onShowMobileNav = () => {
    let hamburgerSrc = "./images/icon-hamburger.svg";
    let closeSrc = "./images/icon-close.svg";
    let mobileMenu = $(".mobile-menu");

    if (burgerBtn.attr("src") === hamburgerSrc) {
      burgerBtn.attr("src", closeSrc);
      mobileMenu.toggle(200);
    } else {
      burgerBtn.attr("src", hamburgerSrc);
      mobileMenu.toggle(200);
    }
  };

  const hideOnLargeScreen = () => {
    let mobileMenu = $(".mobile-menu");
    let windowWidth = $(window).width();
    if (windowWidth > 1280) {
      mobileMenu.hide();
    }
  };

  burgerBtn.click(onShowMobileNav);
  $(window).on("resize", hideOnLargeScreen);

  // mobile dropdown toggle---------------------------------------------------------

  let listItem = $(".mobile-list-item");

  listItem.click(function () {
    let dropdown = $(this).find(".dropdawn-mobile");
    if (dropdown.is(":visible")) {
      dropdown.slideUp(50);
    } else {
      $(".dropdawn-mobile:visible").slideUp(50);
      dropdown.slideDown(50);
    }
  });
});

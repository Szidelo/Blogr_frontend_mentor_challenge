# Blogr landing page Frontend Mentor

Hello!

This is my solution for the challenge [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). What I really like about Frontend Mentor website challenges is that it actually put you in a real life situation when you have a design from a "client" and you need to reproduce it in a real app. As a beginner with no studies and no real life experience as a web developer, this actually challenged my skills and while completeing the project I learned new things.

## Welcome! 👋

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Blogr landing page coding challenge](./design/desktop-design.jpg)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/blogr-landing-page-using-html-css-and-js-eKy7fJjmz8)
- Live Site URL: [Live site URL](https://szidelo.github.io/Blogr_frontend_mentor_challenge/)

### Built with

- HTML
- CSS custom properties
- Display Flex
- Desktop-first workflow then Mobile
- Jquery

### My experience with this project

The most difficult part of the project for me was to create the mobile menu with its dropdowns. I could not do it with css alone and I finished that part with js using fadeIn() and fadeOut() for the dropdowns and show() and hide() for the actual mobile menu when click on the hamburger svg.

```js
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
```

Another difficult part that I also made it work with js is to rotate just the arrow that is hovered. In my case using css transform: rotate(180deg) actually rotate all three arrows not just the one hovered. I would like to know the best way to do this part because I am not sure that my solution is in the best practice. You can see the code below.

```js
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
```

I also struggled with the background of the intro part where you need to have a background with linear-gradient and a svg on top positioned just right.

In the end it took my about 15 hrs to finish the project.

### Good way to learn

In the end I realised that I need more practice with css while I mostly used bootstrap for styling. I also realised that making project after a design is a lot more diffcult and challenging that making one by your own. Making a project by your own you mostly making something that you already know and making a project after a design you need to come with solutions to something that you do not know. I think this is the best way to learn.

## Author

- Website - [Github/Szidelo](https://github.com/Szidelo)
- Frontend Mentor - [@Szidelo](https://www.frontendmentor.io/profile/Szidelo)

Thanks for checking out this project.

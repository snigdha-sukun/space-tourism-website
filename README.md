# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Screenshot of the Space tourism website](./screenshot.gif)

### Links

- Solution URL: [Github](https://github.com/snigdha-sukun/space-tourism-website)
- Live Site URL: [Vercel](https://space-tourism-website-peach-two.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- JS

### What I learned

I leanred how to create a round button & add a pulsing effect on hover:

```scss
.home__btn {
    @include m.text-preset-4;
    display: block;
    width: v.$spacing-1600;
    height: v.$spacing-1600;
    color: v.$color-blue-900;
    background-color: v.$color-white;
    padding: v.$spacing-600;
    border-radius: 50%;
    -moz-box-shadow: 0 0 0 0 v.$color-white;
    box-shadow: 0 0 0 0 v.$color-white;
    transition: all 0.3s ease;

    &:hover {
        -moz-box-shadow: 0 0 0 v.$spacing-500 v.$color-white-shadow;
        box-shadow: 0 0 0 v.$spacing-500 v.$color-white-shadow;
        color: v.$color-white-btn-hover;
    }

    @include m.responsive("mobile") {
        width: v.$spacing-1000;
        height: v.$spacing-1000;
        padding: v.$spacing-300;
    }
}
```

I learned how to add a glass like effect on a div:

```scss
background: v.$color-white-nav;
backdrop-filter: blur(40px);
```
I learned how to create a responsive mixin based on breakpoint:

```scss
@mixin responsive($breakpoint: desktop) {
    @if $breakpoint ==mobile {
        @media (max-width: 640px) {
            @content;
        }
    }

    @else if $breakpoint ==tablet {
        @media (max-width: 1024px) {
            @content;
        }
    }

    @else {
        @content; // Default (Desktop)
    }
}
```

I learned how to create an interactive dot element using just css:

```html
<div>
  <span data-index="0" class="dot"></span>
  <span data-index="1" class="dot"></span>
  <span data-index="2" class="dot"></span>
  <span data-index="3" class="dot"></span>
</div>
```

```scss
.dot {
    justify-self: flex-end;
    cursor: pointer;
    height: 12px;
    width: 12px;
    margin-right: v.$spacing-300;
    background-color: v.$color-white-btn-hover;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;

    &:hover {
        background-color: v.$color-blue-300;
    }
}
```

### Continued development

I want to continue learning more about SCSS & styling.

### Useful resources

- [Pulse animation with box-shadow](https://codepen.io/olam/pen/KKMvWM) - This helped me in adding the pulse effect on the 'Explore' button
- [How TO - Slideshow](https://www.w3schools.com/howto/howto_js_slideshow.asp) - This helped me in creating the dot as required in the crew section.

## Author

- Frontend Mentor - [@snigdha-sukun](https://www.frontendmentor.io/profile/snigdha-sukun)

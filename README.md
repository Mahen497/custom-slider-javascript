# custom-slider-javascript
# Slider with Mouse Scroll and Cursor Effects

This JavaScript code implements a slider component with additional features like mouse scroll navigation and cursor effects.

## Features

- **Slider Navigation:** Users can navigate between slides using the previous and next buttons.
- **Mouse Scroll Navigation:** Users can scroll the slider using the mouse wheel. Scrolling up moves to the previous slide, while scrolling down moves to the next slide.
- **Cursor Effects:** A custom cursor is displayed on the screen, which changes size randomly when hovering over links or slider navigation items.

## Usage

1. Clone the repository or include the JavaScript code in your project.
2. Include the necessary HTML structure for the slider and cursor.
3. Include the necessary CSS styles for the slider and cursor (not provided here).
4. Include the JavaScript code in your project and ensure it runs after the DOM content is loaded.

## Dependencies

- This code depends on the presence of certain HTML elements with specific class names, such as `.slider__navigation-item-prev` and `.slider__wrapper-item`. Ensure these elements exist in your HTML structure for proper functionality.
- CSS styles for the slider and cursor are required to achieve the desired visual appearance. These styles are not provided in the JavaScript code and should be included separately.

## How It Works

1. The JavaScript code selects necessary elements from the DOM, such as slider navigation buttons, slider wrapper, and slider items.
2. Event listeners are added to handle click events on the navigation buttons and mouse movements on the document.
3. Functions are defined to update the slider position, handle navigation button clicks, and manage cursor effects.
4. When the mousewheel event is detected on the document, the slider moves to the previous or next slide based on the direction of the scroll.
5. Cursor effects are applied when hovering over links or slider navigation items, changing the size of the cursor randomly.

## Customization

- To customize the slider appearance or behavior, modify the HTML structure, CSS styles, or JavaScript code as needed.
- Adjust the `getRandomNumber()` function to change the range of cursor size randomness.
- Customize cursor styles or behavior by modifying CSS rules for the `.cursor` class.


## JavaScript Slider Component with Cursor Effects and Mouse Wheel Navigation

```javascript
document.addEventListener('DOMContentLoaded', function () {
  // Select necessary elements from the DOM
  const navigationPrev = document.querySelector('.slider__navigation-item-prev');
  const navigationNext = document.querySelector('.slider__navigation-item-next');
  const sliderWrapper = document.querySelector('.slider__wrapper');
  const sliderItems = document.querySelectorAll('.slider__wrapper-item');
  const itemWidth = sliderItems[0].offsetWidth;

  // Initialize currentIndex from localStorage if available
  let currentIndex = 0;
  if (localStorage.getItem('currentIndex')) {
    currentIndex = parseInt(localStorage.getItem('currentIndex'));
    sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    sliderItems[currentIndex].classList.add('active');
    updateNavigationButtons();
  }

  // Function to update navigation buttons based on currentIndex
  function updateNavigationButtons() {
    // Add or remove 'active' class based on currentIndex
    // This controls the visibility/disabled state of navigation buttons
  }

  // Function to update slider position and manage active slide
  function activeRemoveClass() {
    // Update slider position based on currentIndex
    // Add 'active' class to current slide, remove from others
    // Update navigation buttons
    // Store currentIndex in localStorage for persistence
  }

  // Function to move slider to previous slide
  function moveSliderPrev() {
    // Decrease currentIndex if not on the first slide
    // Update slider position and active slide
  }

  // Function to move slider to next slide
  function moveSliderNext() {
    // Increase currentIndex if not on the last slide
    // Update slider position and active slide
  }

  // Event listeners for navigation buttons click events
  navigationPrev.addEventListener('click', moveSliderPrev);
  navigationNext.addEventListener('click', moveSliderNext);

  // Mouse Move Event
  // Track mouse movement to update cursor position
  // Hide cursor when mouse leaves the document

  // Mouse Wheel Event
  // Scroll navigation: Up moves to previous slide, down moves to next slide

  // Event listeners for cursor effects on links and navigation items
  // Add 'active' class to cursor and change size randomly when hovering over

  // Function to generate random number for cursor size
});


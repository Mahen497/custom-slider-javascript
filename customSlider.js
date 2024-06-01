document.addEventListener('DOMContentLoaded', function () {
  const navigationPrev = document.querySelector('.slider__navigation-item-prev');
  const navigationNext = document.querySelector('.slider__navigation-item-next');
  const sliderWrapper = document.querySelector('.slider__wrapper');
  const sliderItems = document.querySelectorAll('.slider__wrapper-item');
  const itemWidth = sliderItems[0].offsetWidth;


  let currentIndex = 0

  if (localStorage.getItem('currentIndex')) {
    currentIndex = parseInt(localStorage.getItem('currentIndex'));
    sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    sliderItems[currentIndex].classList.add('active');
    updateNavigationButtons()

  }

  function updateNavigationButtons() {
    if (currentIndex > 0) {
      navigationPrev.classList.add('active');
    } else {
      navigationPrev.classList.remove('active');
    }

    if (currentIndex < sliderItems.length - 1) {
      navigationNext.classList.add('active');
    } else {
      navigationNext.classList.remove('active');
    }
  }

  function activeRemoveClass() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    sliderItems.forEach((item) => item.classList.remove('active'))

    sliderItems[currentIndex].classList.add('active');

    updateNavigationButtons()

    localStorage.setItem('currentIndex', currentIndex);
  }

  function moveSliderPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      activeRemoveClass()
    }
  }

  function moveSliderNext() {
    if (currentIndex < sliderItems.length - 1) {
      currentIndex++;
      activeRemoveClass()
    }
  }

  navigationPrev.addEventListener('click', moveSliderPrev);
  navigationNext.addEventListener('click', moveSliderNext);

  // Mouse Move Event 
  const cursor = document.querySelector(".cursor")
  const links = document.querySelectorAll('a, .slider__navigation-item');

  document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';

  })

  document.addEventListener('mouseout', function () {
    cursor.style.display = 'none';
  })

  document.addEventListener('wheel', function (e) {
    e.preventDefault();

    if (e.deltaY < 0) {
      moveSliderPrev();
    } else {
      moveSliderNext();
    }
  });

  links.forEach((e) => {
    e.addEventListener('mouseover', function (e) {
      cursor.classList.add('active')
      const randomNumber = getRandomNumber();
      cursor.style.width = randomNumber + 'px';
      cursor.style.height = randomNumber + 'px';

    })
    e.addEventListener('mouseleave', function (e) {
      cursor.classList.remove('active')
      cursor.style.width = '15px';
      cursor.style.height = '15px';
    })

  })

  function getRandomNumber() {
    const min = 9;
    const max = 13;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // touch slider in mobile 
  let touchStart = 0;
  let touchEnd = 0;

  sliderWrapper.addEventListener('touchstart', function (e) {
    touchStart = e.changedTouches[0].screenX;
    console.log("touchStart", touchStart)
  });
  sliderWrapper.addEventListener('touchmove', function (e) {
    touchEnd = e.changedTouches[0].screenY;
    console.log("touchEnd", touchEnd)
  });
  sliderWrapper.addEventListener('touchend', function (e) {
    if (touchEnd < touchStart) {
      moveSliderNext();
    }
    if (touchEnd > touchStart) {
      moveSliderPrev();
    }
  });

});



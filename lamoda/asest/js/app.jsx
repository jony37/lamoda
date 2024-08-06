"use strict";


// acc function
const acBtn = document.querySelector(".acount-btn");
const acImg = document.querySelector(".acc-img");

acBtn.addEventListener("click", function () {
  acImg.classList.add("move");
  acBtn.innerHTML = "Log out";
});
acBtn.addEventListener("dblclick", function () {
  acBtn.innerHTML = "Войти";
  acImg.classList.remove("move");
});

// hover
const headerLInks = document.querySelectorAll(".header-nav__item");
const hoverList = document.querySelector(".hover-list");
const hoverList2 = document.querySelector(".hover-list2");
const smaalNav = document.querySelectorAll('.small');

for (let elements of smaalNav) {
  elements.addEventListener('mousemove', function () {
    hoverList2.classList.add('move');
  });

  hoverList2.addEventListener('mouseleave', function () {
    hoverList2.classList.remove('move');
  });

  elements.addEventListener('mouseleave', function () {
    setTimeout(() => {
      if (!hoverList2.matches(":hover")) {
        hoverList2.classList.remove('move')
      }
    }, 100);
  });

  const hoverColor = document.querySelectorAll(".color");
  for (let i of hoverColor) {
    elements.addEventListener("mouseenter", function () {
      i.classList.add("grey");
    });
    elements.addEventListener("mouseleave", function () {
      i.classList.remove("grey");
    });
  }
};

for (let elements of headerLInks) {
  elements.addEventListener("mousemove", function () {
    hoverList.classList.add("active");
  });

  hoverList.addEventListener("mouseleave", function () {
    hoverList.classList.remove("active");
  });

  elements.addEventListener("mouseleave", function () {
    setTimeout(() => {
      if (!hoverList.matches(":hover")) {
        hoverList.classList.remove("active");
      }
    }, 100);
  });

  const hoverColor = document.querySelectorAll(".color");
  for (let i of hoverColor) {
    elements.addEventListener("mouseenter", function () {
      i.classList.add("grey");
    });
    elements.addEventListener("mouseleave", function () {
      i.classList.remove("grey");
    });
  }
}

// slider
const slides = document.querySelectorAll(".offer__slide"),
  next = document.querySelector(".offer__slider-next"),
  prev = document.querySelector(".offer__slider-prev"),
  total = document.querySelector('#total'),
  current = document.querySelector('#current'),
  slidesWrapper = document.querySelector('.offer__slider-wrapper'),
  slidesField = document.querySelector('.offer__slider-ineer'),
  width = window.getComputedStyle(slidesWrapper).width

  let slideIndex = 1;
  let offset = 0;


  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesWrapper.style.overflow = 'hidden';
  slidesField.style.transition = '.5s ease all';

  for (let element of slides) {
    element.style.width = width;
  };

  next.addEventListener('click', function () {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2)
    }
    slidesField.style.transform = `translateX(-${offset}px)`
  });

  prev.addEventListener('click', function () {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1)
      slideIndex = slides.length
    } else {
      offset -= +width.slice(0, width.length - 2)
    }
    slidesField.style.transform = `translateX(-${offset}px)`
  });


  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   current.textContent = slides.length;
  // }

  // function showSlides (idx) {
    
  //   if (idx > slides.length) {
  //       slideIndex = slides.length;
  //   }
  //   if (idx < 1) {
  //       slideIndex = 1;
  //   }
  //   slides.forEach(item => {
  //       item.style.display = 'none';
  //   });
  //   slides[slideIndex - 1].style.display = 'block';

  //   if (slides.length < 10) {
  //       current.textContent = `0${slideIndex}`;
  //     } else {
  //       current.textContent = slideIndex;
  //     }
    
  // }

  // function plusSlides (idx) {
  //   showSlides(slideIndex += idx);
  // }

  // next.addEventListener('click', function () {
  //   plusSlides(1)
  // });

  // prev.addEventListener('click', function () {
  //   plusSlides(-1)
  // });


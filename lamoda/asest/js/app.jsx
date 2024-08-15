// --------------------  ACC SECTION ---------------------


// acc function
const acBtn = document.querySelector(".acount-btn");
const acImg = document.querySelector(".acc-img");

acBtn.addEventListener("click", function () {
  acImg.classList.toggle("move");
  if (acBtn.innerHTML === "Выйти") {
    acBtn.innerHTML = "Войти";
  } else {
    acBtn.innerHTML = "Выйти";
  }
});

// --------------------  NAVBAR SECTION ---------------------

// hover
const headerLInks = document.querySelectorAll(".header-nav__item");
const hoverList = document.querySelector(".hover-list");
const hoverList2 = document.querySelector(".hover-list2");
const smaalNav = document.querySelectorAll(".small");

for (let elements of smaalNav) {
  elements.addEventListener("mousemove", function () {
    hoverList2.classList.add("move");
  });

  hoverList2.addEventListener("mouseleave", function () {
    hoverList2.classList.remove("move");
  });

  elements.addEventListener("mouseleave", function () {
    setTimeout(() => {
      if (!hoverList2.matches(":hover")) {
        hoverList2.classList.remove("move");
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

// CARUSEL
const slides = document.querySelectorAll(".offer__slide"),
  next = document.querySelector(".offer__slider-next"),
  prev = document.querySelector(".offer__slider-prev"),
  total = document.querySelector("#total"),
  current = document.querySelector("#current"),
  slidesWrapper = document.querySelector(".offer__slider-wrapper"),
  slidesField = document.querySelector(".offer__slider-ineer"),
  width = window.getComputedStyle(slidesWrapper).width;

let slideIndex = 1;
let offset = 0;
const slideWidth = +width.slice(0, width.length - 2);

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
  current.textContent = `0${slideIndex}`;
} else {
  total.textContent = slides.length;
  current.textContent = slideIndex;
}

slidesField.style.width = 100 * slides.length + "%";
slidesField.style.display = "flex";
slidesWrapper.style.overflow = "hidden";
slidesField.style.transition = ".5s ease all";

slides.forEach((slide) => {
  slide.style.width = width;
});

function updateSlideIndex() {
  if (slides.length < 10) {
    current.textContent = `0${slideIndex}`;
  } else {
    current.textContent = slideIndex;
  }
}

function auvtoSlide() {
  if (offset === slideWidth * (slides.length - 1)) {
    offset = 0;
    slideIndex = 1;
  } else {
    offset += slideWidth;
    slideIndex++;
  }

  slidesField.style.transform = `translateX(-${offset}px)`;
  updateSlideIndex();
}
const slideInterval = 6000;
let autoSlide = setInterval(auvtoSlide, slideInterval);

function nextBtn() {
  next.addEventListener("click", function () {
    clearInterval(autoSlide);
    if (offset === slideWidth * (slides.length - 1)) {
      return;
    } else {
      offset += slideWidth;
      slideIndex++;
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
    updateSlideIndex();

    autoSlide = setInterval(switchSlide, slideInterval);
  });
}

function prevBtn() {
  prev.addEventListener("click", function () {
    clearInterval(autoSlide);
    if (offset === 0) {
      return;
    } else {
      offset -= slideWidth;
      slideIndex--;
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
    updateSlideIndex();

    autoSlide = setInterval(switchSlide, slideInterval);
  });
}

nextBtn();
prevBtn();

updateSlideIndex();

// --------------------  TOVAR SECTION ---------------------

// tovar slider
const tovarWrapper = document.querySelector(".tovar-wrapper"),
  tovarField = document.querySelector(".tovar-inner"),
  tovarSlides = document.querySelectorAll(".tovar-slide"),
  tovarNext = document.querySelector(".tovar-btn__next"),
  tovarPrev = document.querySelector(".tovar-btn__prev"),
  tovarWidth = window.getComputedStyle(tovarWrapper).width;

let tovarIndex = 1;
let tovarOffset = 0;
const tovarWIDDTTHH = +tovarWidth.slice(0, tovarWidth.length - 2);
const tovareWidth = tovarWIDDTTHH / tovarSlides.length;

tovarField.style.width = 16.6 * tovarSlides.length + "%";
tovarField.style.display = "flex";
tovarWrapper.style.overflow = "hidden";
tovarField.style.transition = ".3s ease all";
tovarPrev.style.display = "none";

tovarNext.addEventListener("click", function () {
  if (tovarOffset === tovarWIDDTTHH * (tovarSlides.length - 1)) {
    tovarOffset = tovarSlides.length;
  } else {
    tovarOffset += tovareWidth;
  }

  if (tovarField.style.transform === `translateX(-${1025}px)`) { 
    tovarNext.style.display = "none";
  }
  tovarField.style.transform = `translateX(-${tovarOffset * 2.05}px)`;
  tovarPrev.style.display = "block";
});

tovarPrev.addEventListener("click", function () {
  if (tovarOffset === 0) {
    return;
  } else {
    tovarOffset -= tovareWidth;
  }

  if (tovarField.style.transform === `translateX(-${205}px)`) {
    tovarPrev.style.display = "none";
  } else {
    tovarPrev.style.display = "block";
  }

  tovarField.style.transform = `translateX(-${tovarOffset * 2.05}px)`;
  tovarNext.style.display = "block";
});

// --------------------  IMAGES SECTION ---------------------

// images
const pageTwo = document.querySelector(".lol2"),
  pageThere = document.querySelector(".lol3"),
  image3 = document.querySelector(".img-active3"),
  image2 = document.querySelector(".img-active2"),
  image = document.querySelector(".img-active"),
  imageSlides = document.querySelector(".tovar-slide"),
  //  2
  page5 = document.querySelector(".lol-5"),
  page6 = document.querySelector(".lol-6"),
  image4 = document.querySelector(".img-active4"),
  image5 = document.querySelector(".img-active5"),
  image6 = document.querySelector(".img-active6"),
  //  3
  page7 = document.querySelector(".lol-8"),
  page8 = document.querySelector(".lol-9"),
  image7 = document.querySelector(".img-active7"),
  image8 = document.querySelector(".img-active8"),
  image9 = document.querySelector(".img-active9"),
  //  4
  page9 = document.querySelector(".lol-10"),
  page10 = document.querySelector(".lol-11"),
  image10 = document.querySelector(".img-active10"),
  image11 = document.querySelector(".img-active11"),
  image12 = document.querySelector(".img-active12"),
  //  5
  page11 = document.querySelector(".lol-12"),
  page12 = document.querySelector(".lol-13"),
  image13 = document.querySelector(".img-active13"),
  image14 = document.querySelector(".img-active14"),
  image15 = document.querySelector(".img-active15"),
  //  6
  page13 = document.querySelector(".lol-14"),
  page14 = document.querySelector(".lol-15"),
  image16 = document.querySelector(".img-active16"),
  image17 = document.querySelector(".img-active17"),
  image18 = document.querySelector(".img-active18"),
  //  7
  page15 = document.querySelector(".lol-16"),
  page16 = document.querySelector(".lol-17"),
  image19 = document.querySelector(".img-active19"),
  image20 = document.querySelector(".img-active20"),
  image21 = document.querySelector(".img-active21"),
  //  8
  page17 = document.querySelector(".lol-18"),
  page18 = document.querySelector(".lol-19"),
  image22 = document.querySelector(".img-active22"),
  image23 = document.querySelector(".img-active23"),
  image24 = document.querySelector(".img-active24"),
  //  9
  page19 = document.querySelector(".lol-20"),
  page20 = document.querySelector(".lol-21"),
  image25 = document.querySelector(".img-active25"),
  image26 = document.querySelector(".img-active26"),
  image27 = document.querySelector(".img-active27"),
  //  10
  page21 = document.querySelector(".lol-22"),
  page22 = document.querySelector(".lol-23"),
  image28 = document.querySelector(".img-active28"),
  image29 = document.querySelector(".img-active29"),
  image30 = document.querySelector(".img-active30"),
  //  11
  page23 = document.querySelector(".lol-24"),
  page24 = document.querySelector(".lol-25"),
  image31 = document.querySelector(".img-active31"),
  image32 = document.querySelector(".img-active32"),
  image33 = document.querySelector(".img-active33"),
  //  12
  pageA1 = document.querySelector(".lol-a1"),
  pageA2 = document.querySelector(".lol-a2"),
  imageJ1 = document.querySelector(".img-activej1"),
  imageJ2 = document.querySelector(".img-activej2"),
  imageJ3 = document.querySelector(".img-activej3");

function moveRemoveImagesAll() {
  // 1
  function imageOne() {
    pageTwo.addEventListener("mousemove", function () {
      image.classList.add("nonee");
      image2.classList.add("move");
    });

    pageTwo.addEventListener("mouseleave", function () {
      image.classList.remove("nonee");
      image2.classList.remove("move");
    });

    pageThere.addEventListener("mousemove", function () {
      image.classList.add("none3");
      image2.classList.add("none3");
      image3.classList.add("move3");
    });

    pageThere.addEventListener("mouseleave", function () { 
      image.classList.remove("none3");
      image2.classList.remove("none3");
      image3.classList.remove("move3");
    });
  }

  // 2
  function imageTwo() {
    page5.addEventListener("mousemove", function () {
      image4.classList.add("nonee");
      image5.classList.add("move");
    });

    page5.addEventListener("mouseleave", function () {
      image4.classList.remove("nonee");
      image5.classList.remove("move");
    });

    page6.addEventListener("mousemove", function () {
      image4.classList.add("nonee");
      image5.classList.add("nonee");
      image6.classList.add("move");
    });

    page6.addEventListener("mouseleave", function () {
      image4.classList.remove("nonee");
      image5.classList.remove("nonee");
      image6.classList.remove("move");
    });
  }

  // 3
  function imageThere() {
    page7.addEventListener("mousemove", function () {
      image7.classList.add("nonee");
      image8.classList.add("move");
    });

    page7.addEventListener("mouseleave", function () {
      image7.classList.remove("nonee");
      image8.classList.remove("move");
    });

    page8.addEventListener("mousemove", function () {
      image7.classList.add("nonee");
      image8.classList.add("nonee");
      image9.classList.add("move");
    });

    page8.addEventListener("mouseleave", function () {
      image7.classList.remove("nonee");
      image8.classList.remove("nonee");
      image9.classList.remove("move");
    });
  }

  // 4
  function imageFour() {
    page9.addEventListener("mousemove", function () {
      image10.classList.add("nonee");
      image11.classList.add("move");
    });

    page9.addEventListener("mouseleave", function () {
      image10.classList.remove("nonee");
      image11.classList.remove("move");
    });

    page10.addEventListener("mousemove", function () {
      image10.classList.add("nonee");
      image11.classList.add("nonee");
      image12.classList.add("move");
    });

    page10.addEventListener("mouseleave", function () {
      image10.classList.remove("nonee");
      image11.classList.remove("nonee");
      image12.classList.remove("move");
    });
  }

  // 5
  function imageFif() {
    page11.addEventListener("mousemove", function () {
      image13.classList.add("nonee");
      image14.classList.add("move");
    });

    page11.addEventListener("mouseleave", function () {
      image13.classList.remove("nonee");
      image14.classList.remove("move");
    });

    page12.addEventListener("mousemove", function () {
      image13.classList.add("nonee");
      image14.classList.add("nonee");
      image15.classList.add("move");
    });

    page12.addEventListener("mouseleave", function () {
      image13.classList.remove("nonee");
      image14.classList.remove("nonee");
      image15.classList.remove("move");
    });
  }

  // 6
  function imageSi() {
    page13.addEventListener("mousemove", function () {
      image16.classList.add("nonee");
      image17.classList.add("move");
    });

    page13.addEventListener("mouseleave", function () {
      image16.classList.remove("nonee");
      image17.classList.remove("move");
    });

    page14.addEventListener("mousemove", function () {
      image16.classList.add("nonee");
      image17.classList.add("nonee");
      image18.classList.add("move");
    });

    page14.addEventListener("mouseleave", function () {
      image16.classList.remove("nonee");
      image17.classList.remove("nonee");
      image18.classList.remove("move");
    });
  }

  // 7
  function imag7() {
    page15.addEventListener("mousemove", function () {
      image19.classList.add("nonee");
      image20.classList.add("move");
    });

    page15.addEventListener("mouseleave", function () {
      image19.classList.remove("nonee");
      image20.classList.remove("move");
    });

    page16.addEventListener("mousemove", function () {
      image19.classList.add("nonee");
      image20.classList.add("nonee");
      image21.classList.add("move");
    });

    page16.addEventListener("mouseleave", function () {
      image19.classList.remove("nonee");
      image20.classList.remove("nonee");
      image21.classList.remove("move");
    });
  }

  // 8
  function imag8() {
    page17.addEventListener("mousemove", function () {
      image22.classList.add("nonee");
      image23.classList.add("move");
    });

    page17.addEventListener("mouseleave", function () {
      image22.classList.remove("nonee");
      image23.classList.remove("move");
    });

    page18.addEventListener("mousemove", function () {
      image22.classList.add("nonee");
      image23.classList.add("nonee");
      image24.classList.add("move");
    });

    page18.addEventListener("mouseleave", function () {
      image22.classList.remove("nonee");
      image23.classList.remove("nonee");
      image24.classList.remove("move");
    });
  }

  // 9
  function imag9() {
    page19.addEventListener("mousemove", function () {
      image25.classList.add("nonee");
      image26.classList.add("move");
    });

    page19.addEventListener("mouseleave", function () {
      image25.classList.remove("nonee");
      image26.classList.remove("move");
    });

    page20.addEventListener("mousemove", function () {
      image25.classList.add("nonee");
      image26.classList.add("nonee");
      image27.classList.add("move");
    });

    page20.addEventListener("mousemove", function () {
      image25.classList.remove("nonee");
      image26.classList.remove("nonee");
      image27.classList.remove("move");
    });
  }

  // 10
  function imag10() {
    page21.addEventListener("mousemove", function () {
      image28.classList.add("nonee");
      image29.classList.add("move");
    });

    page21.addEventListener("mouseleave", function () {
      image28.classList.remove("nonee");
      image29.classList.remove("move");
    });

    page22.addEventListener("mousemove", function () {
      image28.classList.add("nonee");
      image29.classList.add("nonee");
      image30.classList.add("move");
    });

    page22.addEventListener("mouseleave", function () {
      image28.classList.remove("nonee");
      image29.classList.remove("nonne");
      image30.classList.remove("move");
    });
  }

  // 11
  function imag11() {
    page23.addEventListener("mousemove", function () {
      image31.classList.add("nonee");
      image32.classList.add("move");
    });

    page23.addEventListener("mouseleave", function () {
      image31.classList.remove("nonee");
      image32.classList.remove("move");
    });

    page24.addEventListener("mousemove", function () {
      image31.classList.add("nonee");
      image32.classList.add("nonee");
      image33.classList.add("move");
    });

    page24.addEventListener("mouseleave", function () {
      image31.classList.remove("nonee");
      image32.classList.remove("nonee");
      image33.classList.remove("move");
    });
  }

  // 12
  function imag12() {
    pageA1.addEventListener("mousemove", function () {
      imageJ1.classList.add("nonee");
      imageJ2.classList.add("move");
    });

    pageA1.addEventListener("mouseleave", function () {
      imageJ1.classList.remove("nonee");
      imageJ2.classList.remove("move");
    });

    pageA2.addEventListener("mousemove", function () {
      imageJ1.classList.add("nonee");
      imageJ2.classList.add("nonee");
      imageJ3.classList.add("move");
    });

    pageA2.addEventListener("mouseleave", function () {
      imageJ1.classList.remove("nonee");
      imageJ2.classList.remove("nonee");
      imageJ3.classList.remove("move");
    });
  }

  imageOne();
  imageTwo();
  imageThere();
  imageFour();
  imageFif();
  imageSi();
  imag7();
  imag8();
  imag9();
  imag10();
  imag11();
  imag12();
}
moveRemoveImagesAll();


// -------------------- CARUSEL 2 ----------------------
const imgSlides = document.querySelectorAll(".img-slide"),
  imgNext = document.querySelector(".img-next"),
  imgPrev = document.querySelector(".img-prev"),
  imgTotal = document.querySelector("#total2"),
  imgCurent = document.querySelector("#current2"),
  imgWrapper = document.querySelector(".img__slider-wrapper"),
  imgFluid = document.querySelector(".img__slider-ineer"),
  imgWidth = window.getComputedStyle(imgWrapper).width,
  imgNumW = +imgWidth.slice(0, imgWidth.length - 2);

let imgIndex = 1;
let imgOffset = 0;

if (imgSlides.length < 10) {
  imgTotal.textContent = `0${imgSlides.length}`;
  imgCurent.textContent = `0${imgIndex}`;
} else {
  imgTotal.textContent = imgSlides.length;
  imgCurent.textContent = imgIndex;
}

imgFluid.style.width = 100 * imgSlides.length + "%";
imgFluid.style.display = 'flex';
imgWrapper.style.overflow = 'hidden';
imgFluid.style.transition = ".5s ease all";


imgSlides.forEach(element => {
  element.style.width = imgWidth
});


function updateImgSlideIndex() {
  if (imgSlides.length < 10) {
    imgCurent.textContent = `0${imgIndex}`;
  } else {
    imgCurent.textContent = imgIndex
  }
}


function imgSLideNext () {
  imgNext.addEventListener('click', function () {
    if (imgOffset === imgNumW * (imgSlides.length - 1)) {
      return;
    } else {
      imgOffset += imgNumW;
      imgIndex++;
    }

    imgFluid.style.transform = `translateX(-${imgOffset}px)`;
    updateImgSlideIndex();
  });
};

function imgSLidePrev () {
  imgPrev.addEventListener('click', function () {
    if (imgOffset === 0) {
      return;
    } else {
      imgOffset -= imgNumW;
      imgIndex-- ;
    }
  
    imgFluid.style.transform = `translateX(-${imgOffset}px)`;
    updateImgSlideIndex();
  });
};



function prevBtn() {
  prev.addEventListener("click", function () {
    clearInterval(autoSlide);
    if (offset === 0) {
      return;
    } else {
      offset -= slideWidth;
      slideIndex--;
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
    updateSlideIndex();

    autoSlide = setInterval(switchSlide, slideInterval);
  });
}
updateImgSlideIndex();
imgSLideNext();
imgSLidePrev();


// ------------------- box slider ----------------
const boxSlides = document.querySelectorAll('.box-slide'),
boxWrapper = document.querySelector('.box-wrapper'),
boxFluid = document.querySelector('.box-inner'),
boxPrev = document.querySelector('.box-btn__prev'),
boxNext = document.querySelector('.box-btn__next'),
wrapperWidth = window.getComputedStyle(boxWrapper).width,
widthNum = +wrapperWidth.slice(0, wrapperWidth.length - 2);

let boxIndex = 1;
let boxOfset = 0;
boxFluid.style.width = 100 * boxSlides.length + "%";
boxFluid.style.display = "flex";
boxWrapper.style.overflow = 'hidden';
boxFluid.style.transition = ".2s ease all";
boxPrev.style.display = 'none';

function boxNextBtn () {
  boxNext.addEventListener('click', function () {
    if (boxOfset === widthNum *( boxSlides.length - 1)) {
     boxNext.style.display = 'none';
    } else {
      boxOfset += widthNum;
    } 

    if ( boxFluid.style.transform === `translateX(-${1200}px)`) {
      boxNext.style.display = 'none'
    }

    boxFluid.style.transform = `translateX(-${boxOfset}px)`
    boxPrev.style.display = 'block';
  });
};

function boxPrevBtn () {
  boxPrev.addEventListener('click', function () {
    if (boxOfset === 0) {
      return
    } else {
      boxOfset -= widthNum;
    }

    if ( boxFluid.style.transform === `translateX(-${1200}px)`) {
      boxPrev.style.display = 'none'
    }


      boxFluid.style.transform = `translateX(-${boxOfset}px)`
      boxNext.style.display = 'block';
  })
}

boxNextBtn()
boxPrevBtn()







// function moveImage() {
//   for (let elements of pageTwo) {
//     elements.addEventListener("mousemove", function () {
//       image.forEach((image) => {
//         image.classList.add("nonee");
//       });
//       image2.forEach((image2) => {
//         image2.classList.add("move");
//       });
//     });

//     elements.addEventListener("mouseleave", function () {
//       image.forEach((image) => {
//         image.classList.remove("nonee");
//       });
//       image2.forEach((image2) => {
//         image2.classList.remove("move");
//       });
//     });
//   };

//   for (let elements of pageThere) {
//     elements.addEventListener('mousemove', function () {
//       image.forEach(image => {
//         image.classList.add('none3');
//       });
//       image2.forEach(image2 => {
//         image2.classList.add('none3');
//       });
//       image3.forEach(image3 => {
//         image3.classList.add('move3');
//       });
//     });

//     elements.addEventListener('mouseleave', function () {
//       image.forEach(image => {
//           image.classList.remove('none3');
//       });
//       image2.forEach(image2 => {
//         image2.classList.remove('none3');
//       });
//       image3.forEach(image3 => {
//         image3.classList.remove('move3');
//       });
//     })
//   };
// };
// moveImage();






// const slides = document.querySelectorAll(".offer__slide"),
//   next = document.querySelector(".offer__slider-next"),
//   prev = document.querySelector(".offer__slider-prev"),
//   total = document.querySelector("#total"),
//   current = document.querySelector("#current"),
//   slidesWrapper = document.querySelector(".offer__slider-wrapper"),
//   slidesField = document.querySelector(".offer__slider-ineer"),
//   width = window.getComputedStyle(slidesWrapper).width;

// let slideIndex = 1;
// let offset = 0;
// const slideWidth = +width.slice(0, width.length - 2);

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
//   current.textContent = `0${slideIndex}`;
// } else {
//   total.textContent = slides.length;
//   current.textContent = slideIndex;
// }

// slidesField.style.width = 100 * slides.length + "%";
// slidesField.style.display = "flex";
// slidesWrapper.style.overflow = "hidden";
// slidesField.style.transition = ".5s ease all";

// slides.forEach((slide) => {
//   slide.style.width = width;
// });

// function updateSlideIndex() {
//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }
// }

// function auvtoSlide() {
//   if (offset === slideWidth * (slides.length - 1)) {
//     offset = 0;
//     slideIndex = 1;
//   } else {
//     offset += slideWidth;
//     slideIndex++;
//   }

//   slidesField.style.transform = `translateX(-${offset}px)`;
//   updateSlideIndex();
// }
// const slideInterval = 6000;
// let autoSlide = setInterval(auvtoSlide, slideInterval);

// function prevBtn() {
//   prev.addEventListener("click", function () {
//     clearInterval(autoSlide);
//     if (offset === 0) {
//       return;
//     } else {
//       offset -= slideWidth;
//       slideIndex--;
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;
//     updateSlideIndex();

//     autoSlide = setInterval(switchSlide, slideInterval);
//   });
// }

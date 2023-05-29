// "use strict"

function changerActive(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    list = 0
}
function deleteSpace(str) {
  return str.replace(/\s+/g, ' ').trim()
}
function deleteLetter(str) {
  return str.replace(/[^0-9]/g,"").trim()
}
//Popup close 
//filter list close
document.addEventListener("click",
function(event) {
  event = event || window.event;
  let target = event.target
  if(target.classList.contains('popup') && !target.classList.contains('gallery') && !target.classList.contains('filter') ) {
    target.classList.remove('active')
    bodyScrollLock.enableBodyScroll(target);
    // bodyNotFixed()
    let carDiscountBtn = document.querySelector('.car__discount-btn_mob')
    if(carDiscountBtn !== null)
    carDiscountBtn.classList.remove('active')
  }
  if(event.target.closest('.filter__item-content') !== null || event.target.classList.contains('filter__item-content')) {
  } else {
    if(!event.target.classList.contains('filter__item-subtitle') && !event.target.classList.contains('new-text')) {
      let filterItem = document.querySelectorAll('.filter__item')
      changerActive(filterItem)
    }
  }
}
)

let popupClose = document.querySelectorAll('.popup-close')
for(let i=0 ; i < popupClose.length ; i++) {
    popupClose[i].addEventListener("click",
    function() {
      let popup = popupClose[i].closest('.popup')
      if(popup.classList.contains('filter')) {
        popup.classList.remove('popup')
      } else {
        popup.classList.remove('active')
      }
        bodyScrollLock.enableBodyScroll(popup);
        // bodyNotFixed()
        let carDiscountBtn = document.querySelector('.car__discount-btn_mob')
        if(carDiscountBtn !== null)
        carDiscountBtn.classList.remove('active')
    })
}




let headerMenuBtn = document.querySelectorAll('.toggle-menu')
let mobileMenu = document.querySelector('.header-m')
for (let i = 0; i < headerMenuBtn.length; i++) {
  headerMenuBtn[i].addEventListener('click', function() {
    toggleMobileMenu()
  })
}

function toggleMobileMenu() {
  for (let i = 0; i < headerMenuBtn.length; i++) {
    headerMenuBtn[i].classList.toggle('open')
  }
  mobileMenu.classList.toggle('active')
}
const filter = document.querySelector('.filter')
// Size-control
window.addEventListener('resize', function(event){

    let popups = document.querySelectorAll('.popup')
    let credit = document.querySelector('.credit')
    // if(window.innerWidth >= 540) {
    //   if(filter !== null) {
    //     filter.classList.remove('popup')
    //     bodyScrollLock.enableBodyScroll(filter);
    //   }
    //     // bodyNotFixed()
    // }
    if(window.innerWidth <=539 && credit !== null) {
      if(credit.classList.contains('credit_car'))
      credit.classList.add('popup')
    }
    if(window.innerWidth >= 1024) {
      mobileMenu.classList.remove('active')
      for (let i = 0; i < headerMenuBtn.length; i++) {
        headerMenuBtn[i].classList.remove('open')
      }
      if(credit !== null)
      credit.classList.remove('popup')
      let popupActive = false
      for (let i = 0; i < popups.length; i++) {
        if (popups[i].classList.contains('active')) {
          popupActive = true
          break
        }
      }
      if(!popupActive && credit!==null) {
        bodyScrollLock.enableBodyScroll(credit);
        // bodyNotFixed()
      }
    }
    if(window.innerWidth <=1023) {
      let creditCar = document.querySelector('.credit_car')
      if(creditCar !== null) {
        let style = getComputedStyle(creditCar)
        if(style.display == 'none') {
          $(creditCar).attr('style', '')
        }
      }
    }
    // if(window.innerWidth <= 539) {
    //   if(filter !== null && !filter.classList.contains('filter_catalog')) {
    //     filter.classList.add('active')
    //     filter.style.display = 'block'
    //   }
    // }
})
// if(window.innerWidth <= 539 && (filter !== null)) {
//   if(!filter.classList.contains('filter_catalog')) {
//     filter.classList.add('active')
//   } else {
//     filter.classList.remove('active')
//     $( filter ).slideUp( "slow", function() {
//       // Animation complete.
//     });
//   }
// }


//preview-swiper
const previewSwiper = new Swiper('.preview-swiper', {
    slidesPerView: 2,
    speed: 400,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
        el: '.preview-swiper__pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    }
})


//benefit-swiper
const benefitSwiper = new Swiper('.benefit-swiper', {
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 35,
    allowTouchMove: true,
    breakpoints: {
        0: {
          slidesPerView: 1.65,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})


//benefit-swiper _____car
const benefitSwiperCar = new Swiper('.benefit-swiper-car', {
  slidesPerView: 2.2,
  speed: 400,
  pagination: {
    el: '.benefit-swiper-car-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
      0: {
        slidesPerView: 1.65,
        spaceBetween: 8,
      },
      900: {
        slidesPerView: 2.5,
        spaceBetween: 8,
      },
      1024: {
          slidesPerView: 2.25,
          spaceBetween: 25,
      },
  }
})

//types-swiper
const typesSwiper = new Swiper('.types-swiper', {
    slidesPerView: 2.55,
    speed: 400,
    spaceBetween: 10,
    // centeredSlides: true,
})


//offers__item-swiper
const offersItemSwiper = new Swiper('.offers__item-swiper', {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 10,
  mousewheel: true,
  pagination: {
    el: '.offers__item-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.42,
      spaceBetween: 5,
    },
    360: {
      slidesPerView: 1.42,
      spaceBetween: 5,
    },
    450: {
      slidesPerView: 1.82,
      spaceBetween: 5,
    },
    540: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 1,
    },
  }
})
// offers swiper 

if(document.querySelectorAll('.offers__item-swiper').length) {
  let swipers = document.querySelectorAll('.offers__item-swiper')
  for(let i = 0; i < swipers.length; i++) {
    addHoverMouseSwiper(swipers[i],i)
  }

  function addHoverMouseSwiper (swiper,index) {
    let slides = swiper.querySelectorAll('.offers__item-slide')
    width = swiper.offsetWidth / slides.length
    let left = 0
    for(let i = 0; i < slides.length; i++) {
      let newDiv = document.createElement("i");
      swiper.append(newDiv)
      newDiv.style.width = width + 'px'
      newDiv.style.left = width * i + 'px'
      newDiv.addEventListener('mouseover', function() {
        offersItemSwiper[index].slideTo(i, 400)
      })
    }
  }
}





//card other 
const otherSwiper = new Swiper('.other-swiper', {
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 2.2
    },
    768: {
      slidesPerView: 3,
    },
  }
})


//advantages swiper 
const advantagesSwiper = new Swiper('.advantages-swiper', {
  // slidesPerView: 3,
  speed: 400,
  spaceBetween: 25,
  slidesPerView: "auto",
  breakpoints: {
    0: {
      spaceBetween: 14,
    },
    540: {
      spaceBetween: 14,
    },
    768: {
      spaceBetween: 25,
    },
  }
})


//parnters swiper 
const partnersSwiper = new Swiper('.partners-swiper', {
  speed: 400,
  spaceBetween: 14,
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
  }
})


//parnters swiper 
const characteristicsSwiper = new Swiper('.characteristics-swiper', {
  speed: 400,
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 18,
    },
  }
})


//car page  car__equipment-item 
let carEquipmentItem = document.querySelectorAll('.car__equipment-item-subtitle')
if(carEquipmentItem.length) {
  for(let i = 0; i<carEquipmentItem.length; i++) {
    carEquipmentItem[i].addEventListener("click", function() {
      let parent = carEquipmentItem[i].closest('.car__equipment-item')
      parent.classList.toggle('active')
    })
  } 
}




if(document.querySelectorAll('.credit__form').length) {
  // рассчет при загрузке страницы
  // calc()
  //связываем поля друг с другом
  //поля ввода
  let fields = document.querySelectorAll('[range-for]')
  link_Feilds(fields)
  let fieldsRange = document.querySelectorAll('[range-name]')
  link_Feilds_Range(fieldsRange)
  //новый ползунок связывание
  let jsRangeSlider = document.querySelectorAll('.js-range-slider')
  for(let i = 0; i < jsRangeSlider.length; i++) {
    $(jsRangeSlider[i]).ionRangeSlider({
      grid: false,
      skin: "round",
      hide_min_max: true,
      hide_from_to: true,
      onChange: function (data) {
        let id = $(jsRangeSlider[i]).attr('range-name')
        let field = document.querySelector('[range-for="'+id+'"]')
        let suffix = $(jsRangeSlider[i]).attr('suffix')
        field.value = numberWithCommas(data.from) + ' ' + suffix
        calc()
      },
    })
  }
}

//link fields for calc поля ввода 
function link_Feilds(fields) {
  for(let i = 0; i < fields.length; i++) {
    let id = fields[i].getAttribute('range-for')
    let suffix = fields[i].getAttribute('suffix')
    let min = fields[i].getAttribute('min')
    let max = fields[i].getAttribute('max')
    let range = document.querySelector('[range-name="'+id+'"]')



    fields[i].addEventListener('blur', function() {
      addSuffix(fields[i], suffix, min, max)
      let number = getNumber(fields[i].value)
      range.value = number
    }) 


    
    fields[i].addEventListener('input', function() {
      let number = getNumber(fields[i].value)
      $(range).data("ionRangeSlider").update({
        from: number,
      });
      // ChangeRange(range)
      calc()
    })
    fields[i].addEventListener('click', function() {
    })
  }
}

function link_Feilds_Range(range) {
  for(let i = 0; i < range.length; i++) {
    let id = range[i].getAttribute('range-name')
    let field = document.querySelector('[range-for="'+id+'"]')
    let suffix = range[i].getAttribute('suffix')
    range[i].addEventListener('input', function() {
      field.value = numberWithCommas(range[i].value) + ' ' + suffix
      calc()
    })
  }
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
function ChangeRange(e) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.style.setProperty('--value', e.value)
}



function getNumber(str){
  return +str.replace(/[\D]+/g, '') 
}
function addSuffix(field, text, min, max) {

  let value = field.value;
  let number = min
  if(value) {
    value = value.split(' ').join('')
    number = parseInt(value.match(/\d+/)[0], 10);
  }
  if(number > max)
    number = max
  field.value = ""
  field.value = numberWithCommas(number) + ' ' + text;
}


function calc() {


  let price = document.querySelector('.car__price-now').innerHTML
  price =  parseInt(price.split(' ').join(''))
  let months = document.querySelector('[range-for="months"').value
  months =  parseInt(months)
  let procents = document.querySelector('.credit-year-procent').innerHTML
  procents =  parseFloat(procents.split(' ').join(''))
  procents = (procents / 100) / 12
  let firstPay = document.querySelector('[range-name="deposit"').value
  price = price - (price / 100 * firstPay)

  let res =  (price * procents) / (1 - Math.pow((1 + procents),(-months)))
  res = parseInt(res)
  res = numberWithCommas(res)
  let creditResult = document.querySelector('.credit-result')
  
  creditResult.innerHTML = res + ' ₽'
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}





//car-swiper
let carSwiper = new Swiper(".car-swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  initialSlide: 0,
  navigation: {
    nextEl: ".car-swiper__next",
    prevEl: ".car-swiper__prev",
  },
  pagination: {
    el: '.car-swiper__pagination',
    type: 'fraction',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.01
    },
    768: {
      slidesPerView: 1,
    },
  }
});




//car page текст на последнем фото 

if(document.querySelectorAll('.car__slider ').length) {

  let slider = document.querySelector('.car__slider')
  let quantity = slider.querySelectorAll('.car-swiper__slide')
  let thumbSlide = document.querySelectorAll('.car-swiper-thumb__slide')

  let block = `<span>+ еще ${quantity.length - thumbSlide.length} фото</span>`
  thumbSlide[thumbSlide.length-1].classList.add('notZoom')
  thumbSlide[thumbSlide.length-1].innerHTML+= block



// смена фото при наведении 

  for(let i = 0; i < thumbSlide.length; i++) {
    thumbSlide[i].addEventListener('mouseover', function() {
      if(!this.classList.contains('notZoom')) {
        carSwiper.slideTo(i, 400)
      }
    })
  }



}

//gallery swiper
if(document.querySelectorAll('.gallery__swiper').length) {
  const gallery = document.querySelector('.gallery')
  const miniImage = gallery.querySelectorAll('.gallery__swiper-slide')
  const bigImage = gallery.querySelectorAll('.gallery__list-item')
  const gallerySwiperList = gallery.querySelector('.gallery__swiper-list')
  const galleryPrevBtn = gallery.querySelector('.gallery__swiper-prev')
  const galleryNextBtn = gallery.querySelector('.gallery__swiper-next')
  let activeId = 0

  // открыть галарею по клику на фото
  const openGallery = document.querySelectorAll('.open-gallery')
  for(let i = 0; i < openGallery.length; i++) {
    openGallery[i].addEventListener('click', function() {
      gallery.classList.add('active')
      bodyScrollLock.disableBodyScroll(gallery);
    })
  }


  //скролл по кнопкам
  galleryPrevBtn.onclick = function() {
    if(activeId > 0) {
      changeActiveSlide(-1)
    } else {
      changeActiveSlide(miniImage.length-1)
    }
  }
  galleryNextBtn.onclick = function() {
    if(activeId < miniImage.length - 1) {
      changeActiveSlide(1)
    } else {
      changeActiveSlide(-miniImage.length+1)
    }
  }

  function changeActiveSlide(side) {
      activeId += side
      miniImage[activeId].scrollIntoView();
      bigImage[activeId].scrollIntoView();
      changerActive(miniImage)
      miniImage[activeId].classList.add('active')

  }
  //scroll by click in mini image
  for(let i = 0; i < miniImage.length; i++) {
    miniImage[i].addEventListener('click', function() {
      changerActive(miniImage)
      this.classList.add('active')
      activeId = i
      bigImage[i].scrollIntoView();
    })
  }


  // change mini images by scroll
  gallery.addEventListener('scroll', function(){
    for(let i = 0; i < bigImage.length; i++) {
      checkIfElementIs100pxBelowViewport(bigImage[i],i)
    }
  });


  function checkIfElementIs100pxBelowViewport(element,number) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const isAboveMidpoint = rect.top < windowHeight / 2;
    const isBelowMidpoint = rect.bottom > windowHeight / 2;
  
    if (isAboveMidpoint && isBelowMidpoint) {
      activeId = number
      changerActive(miniImage)
      miniImage[number].classList.add('active')
      miniImage[number].scrollIntoView();
    }
  }

}



//filter 

if(document.querySelectorAll('.filter').length) {
  const filter = document.querySelector('.filter')
  const filteritem = filter.querySelectorAll('.filter__item')
  const filterInputs = filter.querySelectorAll('input')
  const filterReset = filter.querySelectorAll('.btn_reset')
  let activeMinYearId = 0
  let activeMaxYearId = 0
  for (let i = 0; i < filteritem.length; i++) {
    filteritem[i].addEventListener('click', function(e) {
      if(e.target.classList.contains('filter__item-subtitle') || e.target.classList.contains('new-text')) {
        if(this.classList.contains('active')) {
          changerActive(filteritem)
        } else {
          changerActive(filteritem)
          this.classList.add('active')
        }
      }
      if(e.target.classList.contains('filter__item-close-btn')) {
        this.classList.remove('active')
      }
      if(e.target.classList.contains('filter__item-content-reset')) {
        let inputs = this.querySelectorAll('input')
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].checked = false
          inputs[i].value = ''
          e.target.closest('.filter__item').querySelector('.filter__item-subtitle').querySelector('span').innerHTML = ''
          e.target.closest('.filter__item').classList.remove('arrow-hidden')
        }
      }
      if(e.target.classList.contains('reset-year')) {
        activeMinYearId = 0
        activeMaxYearId = 0
        yearSwiper[0].slideTo(0, 400)
        yearSwiper[1].slideTo(0, 400)
      }
    })
  }

  //закрытие фильтра на крестик
  let filterClose = filter.querySelector('.filter__header-close')
  filterClose.onclick = function() {
    if(filter.classList.contains('filter_catalog')) {
      filter.classList.remove('active')
      filter.classList.remove('popup')
      filter.style.display = 'none'
    }
  }


  let labels = filter.querySelectorAll('label')
  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', function(e) {
      labels[i].querySelector('input').checked = !labels[i].querySelector('input').checked
      e.preventDefault()
    })
  }



  //показ что выбрал пользователь в фильтрах
  //checbox list 
  let listCheckbox = filter.querySelectorAll('.list-checkbox')
  for (let i = 0; i < listCheckbox.length; i++) {
    listCheckbox[i].addEventListener('click', function(e) {
      let target = e.target
      if(!target.classList.contains('filter__item-list'))
      addSelector(target)
    })
  }


  function addSelector(target) {
    let parent = target.closest('label')
    let text = parent.querySelector('span').innerHTML
    let filterItem = parent.closest('.filter__item')
    let subtitle = filterItem.querySelector('.filter__item-subtitle')
    let span = subtitle.querySelector('span')
    let input = parent.querySelector('input')
    let inputs = filterItem.querySelectorAll('input')
    let checked = 0


    text = deleteSpace(text)
    if(input.checked) {
      if(deleteSpace(span.innerHTML) == '') {
        span.innerHTML += text
      } else {
        if(!deleteSpace(span.innerHTML).includes(text) && !deleteSpace(span.innerHTML).includes('+')) {
          span.innerHTML += ' +'
        }
      }
    } else {
      if(deleteSpace(span.innerHTML).includes(text)) {
        span.innerHTML = ''
        for (let i = 0; i < inputs.length; i++) {
          if(inputs[i].checked && !checked) {
            span.innerHTML += inputs[i].closest('label').querySelector('span').innerHTML
            checked++
          } else if (inputs[i].checked) {
            checked++
          }
        }
        if(checked>1)
        span.innerHTML += ' +'
      }
    }
    if(!deleteSpace(span.innerHTML) == '') {
      filterItem.classList.add('arrow-hidden')
    } else {
      filterItem.classList.remove('arrow-hidden')
    }
    checkForReset()

  }



  //то что в инпутах
  let inputsSelector = filter.querySelectorAll('.filter__item-input')
  for (let i = 0; i < inputsSelector.length; i++) {
    inputsSelector[i].addEventListener('input', function() {
      addSelectorFromInput(this)
    })
    inputsSelector[i].addEventListener('focus', function() {
      inputsSelector[i].value = numberWithCommas(deleteLetter(inputsSelector[i].value))
    })
    inputsSelector[i].addEventListener('blur', function() {
      let prefix = inputsSelector[i].getAttribute('name-limit')
      let type = inputsSelector[i].getAttribute('name-type')
      inputsSelector[i].value = `${prefix} ${numberWithCommas(deleteLetter(inputsSelector[i].value))} ${type}`
    })
  }
  function addSelectorFromInput(target) {
    let filterItem = target.closest('.filter__item')
    let title = filterItem.querySelector('.filter__item-subtitle').querySelector('span')
    let min = filterItem.querySelector('[name-limit$="от"]')
    let max = filterItem.querySelector('[name-limit$="до"]')
    let text = ''
    let type = target.getAttribute('name-type')
    target.value = numberWithCommas(deleteLetter(target.value))
    if(target.value.length >=15) {
      target.value = target.value.slice(0, 14);
    }
    if(min.value) {
      text += `от ${numberWithCommas(deleteLetter(min.value))} ${type} `
    }
    if(max.value) {
      text += `до ${numberWithCommas(deleteLetter(max.value))} ${type}`
    }
    title.innerHTML = text
    
    if(text) {
      filterItem.classList.add('arrow-hidden')
    } else {
      filterItem.classList.remove('arrow-hidden')
    }
    checkForReset()

  }


// селектор марка модель
const filterModelMark = filter.querySelector('.filter__model-mark')
let btnPreview = filterModelMark.querySelectorAll('.btn-preview')
const selectorModelMarkItem = filterModelMark.querySelectorAll('.filter__model-mark-item')


//колонки
const marksCol = filterModelMark.querySelector('.filter__mark-list')
const modelsCol = filterModelMark.querySelector('.filter__models-col')
const generationCol = filterModelMark.querySelector('.filter__generation-col')



//марки
let marksItem = marksCol.querySelectorAll('.filter__model-mark-item')


filterModelMark.addEventListener('click', function(e) {
  let target = e.target
//открытие колонки с моделями по клику на стрелочку на марке
  if(target.classList.contains('btn-show-models')) {
    showModels(target)
  }
//открытие колонки с моделями по клику на стрелочку на марке
  if(target.classList.contains('btn-show-generation')) {
    showGeneration(target)
  }
//клик по чекбоксу марки
  if(target.classList.contains('filter__item-checkbox-mark') || target.closest('.filter__item-checkbox-mark')) {
    changeCheckBoxMark(target)
  }
//клик по чекбоксу модели
  if(target.classList.contains('filter__item-checkbox-model') || target.closest('.filter__item-checkbox-model')) {
    changeCheckBoxModel(target)
  }
//клик по чекбоксу генерации
  if(target.classList.contains('filter__item-checkbox-generation') || target.closest('.filter__item-checkbox-generation')) {
    changeCheckBoxGeneration(target)
  }
})

//функция для открытия моделей 
function showModels(btn) {
  let mark = btn.closest('.filter__model-mark-item')
  let title = mark.querySelector('.mark-title')
  let currentModelsList = mark.querySelector('.filter__models-list')
  if(window.innerWidth >= 540)
  closeModelsGenerations(mark)
  if(mark.classList.contains('active')) {
    mark.classList.remove('active')
  } else {
    changerActive(marksItem)
    mark.classList.add('active')
    if(window.innerWidth >= 540) {
      modelsCol.innerHTML = ''
      modelsCol.appendChild(title.cloneNode(true))   
      modelsCol.appendChild(currentModelsList).style.display = 'block'
    } else {

    }
  }
}

//функция для открытия генераций 
function showGeneration(btn) {
  let model = btn.closest('.filter__models-item')
  let title = model.querySelector('.model-title')
  let currentGenerationList = model.querySelector('.filter__generation-list')
  let modelsItem = modelsCol.querySelectorAll('.filter__models-item')
  if(window.innerWidth >= 540)
  closeGenerations()
  if(model.classList.contains('active')) {
    model.classList.remove('active')
    generationCol.innerHTML = ''
  } else {
    changerActive(modelsItem)
    model.classList.add('active')
    if(window.innerWidth >= 540) {
      generationCol.innerHTML = ''
      generationCol.appendChild(title.cloneNode(true))   
      generationCol.appendChild(currentGenerationList).style.display = 'block'
    }
  }
}
//функция когда кликаем на чекбокс марки
function changeCheckBoxMark(target) {
  let mark = target.closest('.filter__model-mark-item')
  let checkBoxMark = mark.querySelector('.filter__item-checkbox-mark')
  let currentInput = checkBoxMark.querySelector('input')

  if(currentInput.checked) {

  } else {
    // если выбрана марка
    if(mark.querySelectorAll('.filter__item-checkbox-model').length) {
      clearCheckbox(mark,'filter__item-checkbox-model')
      clearCheckbox(mark,'filter__item-checkbox-generation')
    } else {
      clearCheckbox(modelsCol,'filter__item-checkbox-model')
      clearCheckbox(modelsCol,'filter__item-checkbox-generation')
      if(deleteSpace(generationCol.innerHTML) != '') {
        clearCheckbox(generationCol,'filter__item-checkbox-generation')
      }
    }
  }
}
//функция когда кликаем на чекбокс марки
function changeCheckBoxModel(target) {
  let model = target.closest('.filter__models-item')
  let checkBoxMark = model.querySelector('.filter__item-checkbox-model')
  let currentInput = checkBoxMark.querySelector('input')

  if(currentInput.checked) {
    if(model.closest('.filter__model-mark-item'))
      model.closest('.filter__model-mark-item').querySelector('.filter__item-checkbox-mark').querySelector('input').checked = true
    else
      marksCol.querySelector('.filter__model-mark-item.active').querySelector('.filter__item-checkbox-mark').querySelector('input').checked = true
  } else {
    if(model.querySelectorAll('.filter__item-checkbox-generation').length)
      clearCheckbox(model,'filter__item-checkbox-generation')
    else
      clearCheckbox(generationCol,'filter__item-checkbox-generation')
  }
}

//функция когда кликаем на чекбокс марки
function changeCheckBoxGeneration(target) {
  let generation = target.closest('.filter__item-checkbox-generation')
  let currentInput = generation.querySelector('input')
  if(currentInput.checked) {
    if(generation.closest('.filter__model-mark-item')) {
      generation.closest('.filter__model-mark-item').querySelector('.filter__item-checkbox-mark').querySelector('input').checked = true
      generation.closest('.filter__models-item').querySelector('.filter__item-checkbox-model').querySelector('input').checked = true
    } else {
      marksCol.querySelector('.filter__model-mark-item.active').querySelector('.filter__item-checkbox-mark').querySelector('input').checked = true
      modelsCol.querySelector('.filter__models-item.active').querySelector('.filter__item-checkbox-model').querySelector('input').checked = true
    }
  } else {

  }
}


function clearCheckbox(container,checkbox) {
  let elems = container.querySelectorAll(`.${checkbox}`)
  if(elems.length) {
    for(let i = 0; i < elems.length; i++) {
      elems[i].querySelector('input').checked = false
    }
  }
}





//закрытие модели + генерация
function closeModelsGenerations(mark) {
  closeGenerations()
  if(deleteSpace(modelsCol.innerHTML) != '') {
    let activeMark = marksCol.querySelector('.filter__model-mark-item.active')
    let currentModelsList = modelsCol.querySelector('.filter__models-list')
    let activeModel = currentModelsList.querySelector('.filter__models-item.active')
    $(currentModelsList).attr('style', '')
    activeMark.appendChild(currentModelsList)
    modelsCol.innerHTML = ''
    if(activeModel !== null)
    activeModel.classList.remove('active')
  }
}
//закрытие генераций
function closeGenerations() {
  if(deleteSpace(generationCol.innerHTML) != '') {
    let activeModel = modelsCol.querySelector('.filter__models-item.active')
    let currentGenerationList = generationCol.querySelector('.filter__generation-list')
    $(currentGenerationList).attr('style', '')
    activeModel.appendChild(currentGenerationList)
    generationCol.innerHTML = ''
  }
}


window.onresize = function() {
  if(window.innerWidth <= 539) {
    if(deleteSpace(generationCol.innerHTML) != '' || deleteSpace(modelsCol.innerHTML) != '') {
      let activeMark = filter.querySelector('.filter__model-mark-item active')
      closeModelsGenerations(activeMark)
    }
  }
}


function checkForReset() {
  let filterResetBtn = filter.querySelector('.filter__footer-btn_reset')
  let spans = filter.querySelectorAll('.new-text')
  let isActive = false
  for (let i = 0; i < spans.length; i++) {
    if(deleteSpace(spans[i].innerHTML) != '') {
      isActive =  true
      break
    }
  } 
  if(isActive) {
    filterResetBtn.classList.add('active')
  } else {
    filterResetBtn.classList.remove('active')
  }
}

// год выпуска
let filterItemListYear = filter.querySelector('.filter__item-list_year')
filterItemListYear.addEventListener('click', function(e) {
  let target = e.target
  if(!target.classList.contains('filter__item-side') && !target.classList.contains('filter__item-list')) {
    addYears(target)
  }
})



function addYears(target) {
  let parent = target.closest('label')

    let span = parent.querySelector('span')
    let filterItem = target.closest('.filter__item')
    let list = target.closest('.pc-list-year')
    let filterItemSubtitleSpan = filterItem.querySelector('.filter__item-subtitle').querySelector('span')
    let text = ""
  
    let min = list.querySelectorAll('[name$="min-year"]')
    let max = list.querySelectorAll('[name$="max-year"]')
    let minText = ''
    let maxText = ''
    let a = 0
    let b = 0
    


    if(parent.classList.contains('disabled')) {
      let input = parent.querySelector('input')
      input.checked = false
      if(!min[activeMinYearId].classList.contains('disabled')) {
        min[activeMinYearId].querySelector('input').checked = true
      }
      if(!max[activeMaxYearId].classList.contains('disabled')) {
        max[activeMaxYearId].querySelector('input').checked = true
      }
      
    } else {
      
    }


    for (let i = 0; i < min.length; i++) {
      min[i].classList.remove('disabled')
      max[i].classList.remove('disabled')
      if(min[i].querySelector('input').checked) {
        minText = min[i].querySelector('span').innerHTML
        minText = deleteSpace(minText)
        activeMinYearId = i
        if(i)
        b = i
      }
      if(max[i].querySelector('input').checked) {
        maxText = max[i].querySelector('span').innerHTML
        maxText = deleteSpace(maxText)
        activeMaxYearId = i
        if(i)
        a = i + 1 
      }
    }
    if(b)
    for (b; b < max.length; b++) {
      max[b].classList.add('disabled')
    }
    if(a)
    for (let i = 0; i < a; i++) {
      min[i].classList.add('disabled')
    }
  
    
    if(minText == maxText) {
      text = minText
    } else {
      if (minText && minText!='Любой') {
        text += 'от ' + minText
      } 
      if (maxText && maxText!='Любой') {
        text += ' до ' + maxText
      } 
    }
    filterItemSubtitleSpan.innerHTML = text
    if(!deleteSpace(filterItemSubtitleSpan.innerHTML) == '') {
      filterItem.classList.add('arrow-hidden')
    } else {
      filterItem.classList.remove('arrow-hidden')
    }
    checkForReset()
}

//show filter by click
  let showFilterBtn = document.querySelector('.btn-show-filter')
  $( showFilterBtn ).on( "click", function() {
    if(window.innerWidth <= 539) {
      filter.classList.add('active')
      filter.classList.add('popup')
      filter.style.display = 'block'
      bodyScrollLock.disableBodyScroll(filter)
      // bodyFixed()
    } else {
      $( filter ).slideToggle( "slow", function() {
        // Animation complete.
      });
    }
  });
//close filter by click
  let closeFilterBtn = filter.querySelector('.filter__footer-btn_close')
  $( closeFilterBtn ).on( "click", function() {
    $( filter ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });
  let filterSubtitle = filter.querySelectorAll('.filter__item-subtitle')
  let filterResetBtn = filter.querySelector('.filter__footer-btn_reset')

  //reset settings
  for (let i = 0; i < filterReset.length; i++) {
    filterReset[i].addEventListener("click", function() {
      filterResetBtn.classList.remove('active')
      for (let i = 0; i < filterInputs.length; i++) {
        filterInputs[i].checked = false;
        filterInputs[i].value = '';
        activeMinYearId = 0
        activeMaxYearId = 0
        yearSwiper[0].slideTo(0, 400)
        yearSwiper[1].slideTo(0, 400)
      }
      for (let i = 0; i < filteritem.length; i++) {
        if(filterSubtitle[i].querySelector('span') !== null) {
          filterSubtitle[i].querySelector('span').innerHTML = ''
        }
        filteritem[i].classList.remove('arrow-hidden')
      }
      for (let i = 0; i < labels.length; i++) {
        labels[i].classList.remove('disabled')
      }
    });
  }



  //add filter popup for mobile
  const filterShowBtnMobile = document.querySelector('.filter__footer_filter')
  filterShowBtnMobile.onclick = function() {
    filter.classList.add('popup')
    bodyScrollLock.disableBodyScroll(filter)
    // bodyFixed()
  }
}


//mileage__content open hidden 

// if(document.querySelectorAll('.mileage__item').length) {
//   let mileage = document.querySelector('.mileage')
//   let mileageContentHidden = mileage.querySelectorAll('.mileage__item')
//   let showMoreBtn = mileage.querySelector('.btn_dropdown')
//   showMoreBtn.onclick = function() {
//     this.classList.add('hidden')
//     for (let i = 0; i < mileageContentHidden.length; i++) {
//       mileageContentHidden[i].classList.remove('hidden')
//     }
//   }
// }


//show phone by blick btns

if(document.querySelectorAll('.show-modal-phone').length) {
  let showModalPhone = document.querySelectorAll('.show-modal-phone')
  let popupPhone = document.querySelector('.popup-phone')
  for (let i = 0; i < showModalPhone.length; i++) {
    showModalPhone[i].addEventListener('click', function() {
      popupPhone.classList.add('active')
      bodyScrollLock.disableBodyScroll(popupPhone)
      if(window.innerWidth >= 540) {
        // bodyFixed()
      }
    })
  }
}


//credit open in mobile 
if(document.querySelectorAll('.open-credit-btn').length) {
  let showCreditModalBtn = document.querySelectorAll('.open-credit-btn')
  let credit = document.querySelector('.credit')
  for(let i = 0; i<showCreditModalBtn.length; i++) {
    showCreditModalBtn[i].onclick = function() {
      credit.classList.add('active')
      credit.classList.add('popup')
      bodyScrollLock.disableBodyScroll(credit)
      // bodyFixed()
    }
  }
}


//credit page 
function addLock(elem) {
  elem.classList.add('lock')
  elem.querySelector('span').innerHTML = ''
  let li = elem.querySelectorAll('li')
  changerActive(li)
  inputs = elem.querySelectorAll('input')
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false
  }
}
function addHidden(elem) {
  elem.classList.add('hidden')
}


if(document.querySelectorAll('.additionally').length) {
  let additionally = document.querySelector('.credit__form')
  let additionallyItem = document.querySelectorAll('.additionally__item')

  let labels = additionally.querySelectorAll('label')
  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', function(e) {
      labels[i].querySelector('input').checked = !labels[i].querySelector('input').checked
      e.preventDefault()
    })
  }



  allLi = additionally.querySelectorAll('li')
  allSpans = additionally.querySelectorAll('span')

  additionally.addEventListener('click', function(e) {
    let target = e.target
    let parent = target.closest('.additionally__item')
    let currentList = target.closest('.additionally__list')
    if(target.tagName == 'LI' || target.closest('LI')) {
      let currentLi = target.closest('LI')
      let span = parent.querySelector('.additionally__subtilte').querySelector('span')
      let li = parent.querySelectorAll('li')
      if(currentLi.classList.contains('active')) {
        changerActive(li)
        span.innerHTML = ''
        switch(parent.getAttribute('name')) {
          case 'mark': {
            addLock(currentList.querySelector('[name$="model"]'))
            addLock(currentList.querySelector('[name$="ads"]'))
            addHidden(document.querySelector('[data-name$="calc"]'))
            addHidden(currentList.querySelector('[name$="ads-item"]'))
            break
          }
          case 'model': {
            addLock(currentList.querySelector('[name$="ads"]'))
            addHidden(document.querySelector('[data-name$="calc"]'))
            addHidden(currentList.querySelector('[name$="ads-item"]'))
            break
          }
          case 'ads': {
            addHidden(document.querySelector('[data-name$="calc"]'))
            addHidden(currentList.querySelector('[name$="ads-item"]'))
            break
          }
        }
      } else {
        changerActive(li)
        currentLi.classList.add('active')
        span.innerHTML = deleteSpace(currentLi.querySelector('span').innerHTML)
        parent.classList.remove('active')
        switch(parent.getAttribute('name')) {
          case 'mark': {
            currentList.querySelector('[name$="model"]').classList.remove('lock')
            break
          }
          case 'model': {
            currentList.querySelector('[name$="ads"]').classList.remove('lock')
            break
          }
          case 'ads': {
            if(document.querySelector('[data-name$="calc"]') !== null) {
              document.querySelector('[data-name$="calc"]').classList.remove('hidden')
            }

            if(currentList.querySelector('[name$="ads-item"]') !== null) {
              currentList.querySelector('[name$="ads-item"]').classList.remove('hidden')
            }
            calc()
            break
          }
        }
      }



    }
    if(target.classList.contains('close')) {
      parent.classList.remove('active')
    }
    
  })

  // открытие 

  let additionallySubtilte = document.querySelectorAll('.additionally__subtilte')
  for (let i = 0; i < additionallySubtilte.length; i++) {
    additionallySubtilte[i].addEventListener('click', function() {
      let parent = additionallySubtilte[i].closest('.additionally__item')


      if(parent.classList.contains('active')) {
        changerActive(additionallyItem)
      } else {
        changerActive(additionallyItem)
        if(!parent.classList.contains('lock')) {
          parent.classList.add('active')
        }
      }
      
    })
  }
}


if(document.querySelectorAll('.header_car').length) {
  let header = document.querySelector('.header_car')
  document.addEventListener('scroll', function() {
    if(window.pageYOffset>=20) {
      header.classList.add('fixed')
    } else {
      header.classList.remove('fixed')
    }
  })
}


//car page car__discount
if(document.querySelectorAll('.car__discount-btn_pc').length) {
  let carDiscountBtn = document.querySelector('.car__discount-btn_pc')
  let discount = document.querySelector('.car__discount_pc')

  $( carDiscountBtn ).on( "click", function() {
    this.classList.toggle('active')
    $( discount ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });
}


//car page car__discount mobile
if(document.querySelectorAll('.car__discount-btn_mob').length) {
  let carDiscountBtn = document.querySelector('.car__discount-btn_mob')
  let discount = document.querySelector('.car__discount_mobile')
  carDiscountBtn.onclick = function() {
    this.classList.toggle('active')
    discount.classList.toggle('active')
    bodyScrollLock.disableBodyScroll(discount)
    // bodyFixed()
  }

}


//mask for input type tel 
  [].forEach.call( document.querySelectorAll('[type="tel"]'), function(input) {
  let keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});


//offers__header-filter-list
if(document.querySelectorAll('.offers__header-filter-list').length) {
  let btnOpenFilterOfferList = document.querySelector('.offers__header-filter-title')
  let offersFilterList = document.querySelector('.offers__header-filter-list')
  let selector = offersFilterList.querySelectorAll('.offers__header-filter-item')
  $( btnOpenFilterOfferList ).on( "click", function() {
    $( offersFilterList ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });
  offersFilterList.addEventListener('click', function(e) {
    let target = e.target
    if(target.classList.contains('offers__header-filter-item')) {
      btnOpenFilterOfferList.innerHTML = e.target.innerHTML
      changerActive(selector)
      target.classList.add('active')

    }
  })
}



//раскрытие формы обменять на мой авто  на странице car 
if(document.querySelectorAll('.possibilities_trade').length) {
  let possibilitiesTrade = document.querySelector('.possibilities_trade')
  possibilitiesTrade.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
        possibilitiesCredit.classList.add('show')
        possibilitiesTrade.classList.remove('show')
        $('.trade-form').slideToggle(400);
        $('.credit_car').slideUp(400);

  }
//раскрытие формы с калькулятором на странице car
  let possibilitiesCredit = document.querySelector('.possibilities_credit')
  possibilitiesCredit.onclick = function() {
        $('.trade-form').slideUp(400);
        $('.credit_car').slideToggle(400);
        possibilitiesCredit.classList.remove('show')
        possibilitiesTrade.classList.add('show')
  }
}


//mobile year swiper
const yearSwiper = new Swiper('.mobile-year__swiper', {
  slidesPerView: 7,
  // slidesPerView: 'auto',
  spaceBetween: 0,
  direction: 'vertical',
  slideToClickedSlide: true,
  centeredSlides: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  on: {
    slideChangeTransitionEnd: function (swiper) {
      let headerYear = document.querySelector('.filter__item_year')
      let title = headerYear.querySelector('.new-text')
      let minSwiper = document.querySelector('.mobile-year__swiper-min')
      let maxSwiper = document.querySelector('.mobile-year__swiper-max')
      currentMinSlideText = minSwiper.querySelector('.swiper-slide-active').querySelector('span').innerHTML
      currentMaxSlideText = maxSwiper.querySelector('.swiper-slide-active').querySelector('span').innerHTML
      title.innerHTML = ''
      if(deleteSpace(currentMinSlideText) != 'от') {
        title.innerHTML += 'от ' +  currentMinSlideText
      }
      if(deleteSpace(currentMaxSlideText) != 'до') {
        title.innerHTML += ' до ' +  currentMaxSlideText
      }
      if(parseInt(currentMinSlideText) >= parseInt(currentMaxSlideText)) {
        title.innerHTML = ''
        title.innerHTML += ' до ' +  currentMaxSlideText
      }
    }
  }
})


// прижимаем футер вниз на странице акции
if(document.querySelectorAll('.wrapper_stock').length) {
  let footer = document.querySelector('.footer-w')
  let wrapper = document.querySelector('.wrapper')
  function addPaddingWrapperFromFooter() {
    let margin = window.getComputedStyle(footer).marginTop
    wrapper.style.paddingBottom = footer.clientHeight + parseInt(margin) + 'px'
  }
  window.onresize = function() {
    addPaddingWrapperFromFooter()
  }
  addPaddingWrapperFromFooter()
}



// раскрытие текста в футере по клику на кнопку подробнее
if(document.querySelectorAll('.footer__dics-more-btn').length) {
  let footerBtnMore = document.querySelector('.footer__dics-more-btn')
  footerBtnMore.onclick = function() {
    this.classList.add('hidden')
    $('.footer__dics-hidden').slideToggle(400);
  }
}

























//---------------------------------------------------------------------------------------------------------


//ползунок js-range-slider
let jsRangeSlider = document.querySelectorAll('.js-range-slider')
if(document.querySelectorAll('.js-range-slider').length) {
  for(let i = 0; i < jsRangeSlider.length; i++) {
    $(jsRangeSlider[i]).ionRangeSlider({
      grid: false,
      skin: "round",
      hide_min_max: true,
      hide_from_to: true,
    })
  }
}

//selector список
if(document.querySelectorAll('.selector')) {
  let selector = document.querySelectorAll('.selector')
  for(let i = 0; i < selector.length; i++) {
    removeClickLabel(selector[i])
    selector[i].addEventListener('click', function(e) {
      let target = e.target
      let subTitle = selector[i].querySelector('.selector__subtitle')
      //open close
      if(target.classList.contains('selector__subtitle')) {
        this.classList.toggle('active')
      }
      //close 
      if(target.classList.contains('close')) {
        this.classList.remove('active')
      }
      //select
      if(target.classList.contains('filter__custom-input') || target.classList.contains('selector__list-item') || target.tagName == "SPAN") {
        subTitle.innerHTML = target.closest('.filter__item-checkbox').querySelector('span').innerHTML
      }
    })
  }
}

function removeClickLabel(list) {
  let labels = list.querySelectorAll('label')
  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', function(e) {
      labels[i].querySelector('input').checked = !labels[i].querySelector('input').checked
      e.preventDefault()
    })
  }
}

// БЫСТРЫЙ ПОДБОР НОВОГО АВТОМОБИЛЯ selection__range
if(document.querySelectorAll('.selection__range-input').length) {
  console.log($('.selection__range-input'))
  $('.selection__range-input').ionRangeSlider({
    grid: false,
    skin: "round",
    hide_min_max: true,
    hide_from_to: true,
    onChange: function (data) {
      let valueField = document.querySelector('.selection__range-value')
      valueField.innerHTML = `До ${numberWithCommas(data.from)} р`
    },
  })
}


//equipment__item комплектация и цены 
if(document.querySelectorAll('.equipment ').length) {
  let equipment = document.querySelectorAll('.equipment') 

  for(let i = 0; i < equipment.length; i++) {
    equipmentToggle(equipment[i])
  }

  function equipmentToggle(equipmentBlock) {
    let equipmentItem = equipmentBlock.querySelectorAll('.equipment__item-preview')

    for(let i = 0; i < equipmentItem.length; i++) {

      equipmentItem[i].onclick = function() {
        let parent = this.closest('.equipment__item')
        parent.classList.toggle('active')
        let hiddenContetn = parent.querySelector('.equipment__item-content')
        $(hiddenContetn).slideToggle(200)
      }

    }

  }
}


//equipment__item комплектация и цены 
if(document.querySelectorAll('.characteristics').length) {
  let characteristics = document.querySelectorAll('.characteristics') 

  for(let i = 0; i < characteristics.length; i++) {
    characteristicsToggle(characteristics[i])
  }

  function characteristicsToggle(characteristicsBlock) {
    let characteristicsItem = characteristicsBlock.querySelectorAll('.characteristics__type-header')

    for(let i = 0; i < characteristicsItem.length; i++) {

      characteristicsItem[i].onclick = function() {
        let parent = this.closest('.characteristics__type')
        parent.classList.toggle('active')
        let hiddenContetn = parent.querySelector('.characteristics__type-list')
        $(hiddenContetn).slideToggle(200)
      }

    }

  }
}
// смена цвета машины по клику

if(document.querySelectorAll('.car').length) {
  let carBlock = document.querySelector('.car')
  let colorList = carBlock.querySelector('.car__color-list')

  colorList.addEventListener('click', function(e) {

    let target = e.target
    if(target.classList.contains('car__color-item')) {
      changeColorCar(target) 
    }

  }) 

  function changeColorCar(colorItem) {
    let namePath = colorItem.getAttribute('data-name')
    let imgPath = colorItem.getAttribute('data-img')
    // где будем менять путь картинки
    let img =  carBlock.querySelector('.car__preview-pic').querySelector('img')
    img.setAttribute('src', imgPath)

    // где будем название цвета
    let name =  carBlock.querySelector('.car__color-name').querySelector('a')
    name.innerHTML = namePath

    if(carBlock.querySelector('.car__color-item.active') !== null) {
      carBlock.querySelector('.car__color-item.active').classList.remove('active')
    }
    colorItem.classList.add('active')



  }
}
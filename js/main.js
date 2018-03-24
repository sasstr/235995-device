/*  Открыть и закрыть попапы  */

var writeToUsPopup = document.querySelector('.write-to-us');
var btnWriteToUsPopupClose = document.querySelector('#write-to-us-pop-up-close');
var btnSubmit = document.querySelector('.pop-up-submit');
var btnWriteToUs = document.querySelector('.btn-write-us');
var mapPopup = document.querySelector('.map-pop-up');
var btnMapPopupClose = document.querySelector('#map-pop-up-close');
var openMapPopup = document.querySelector('.shop-data-contacts-map-link');

btnWriteToUs.addEventListener("click", function (event) {
  event.preventDefault();
  writeToUsPopup.classList.remove('visually-hidden');
  }
);

openMapPopup.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove('visually-hidden');
  }
);

btnWriteToUsPopupClose.addEventListener("click", function (event) {
  event.preventDefault();
  writeToUsPopup.classList.add("visually-hidden");
  }
);

btnMapPopupClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("visually-hidden");
  }
);




// Управление слайдерами
/*
var sliders = document.querySelectorAll( '.slider-item' );
var radioButtonsSlider = document.querySelectorAll( '.slider-form input[type="radio"]' );
var formRadioButtonsSlider = document.querySelectorAll( '.slider-form input' );

console.log(radioButtonsSlider);
console.log(formRadioButtonsSlider);

var servises = document.querySelectorAll( '.services-data-feature' );
var radioButtonsServises = document.querySelectorAll( '.service-data-controls input[type="radio"]' );
var formRadioButtonsServises = document.querySelectorAll( '.service-data-controls input[type="radio"]' );

[].forEach.call(formRadioButtonsSlider, function(el){
  formRadioButtonsSlider.addEventListener("click", function(e){
  e.preventDefault();
  sliders.classList.toggle('visually-hidden');
      });
  });

formRadioButtonsServises.onclick = function(){

  for (var i = 0; i < sliders.length ; i++) {
    ( radioButtonsServises[i].checked == true ) ?  servises[i].classList.remove('visually-hidden') : servises[i].classList.add('visually-hidden');
  }
};
window.onload  = function() {
  var len = sliders.length,
      i = len-1;

  (function go() {
    sliders[i].classList.add('visually-hidden');
    radioButtonsSlider[i].checked = false;
    i = ++i % len;

    sliders[i].classList.remove('visually-hidden');
    radioButtonsSlider[i].checked = true;
    if (i > sliders.length ) { i = 0; }
     window.setTimeout(go, 3000);
  })();
}
   */

/*
if (i > sliders.length ) { i = sliders.length; }
formRadioButtonsSlider.onclick = function(){
  for (var i = 0; i < sliders.length ; i++) {
    ( radioButtonsSlider[i].checked == false ) ? sliders[i].classList.add('visually-hidden') : sliders[i].classList.remove('visually-hidden');
  }
}

formRadioButtonsSlider.onclick = function(){
  for (var i = 0; i < sliders.length ; i++) {

  if ( radioButtonsSlider[i].checked == true ) {
          sliders[i].classList.remove('visually-hidden');
    }
  else if ( radioButtonsSlider[i].checked == false ){
          sliders[i].classList.add('visually-hidden');
    }
  }
}
window.onload = function

    if( radioButtonsSlider[i].checked == false ){
        sliders[i].classList.add('visually-hidden');
    }
    else {
      sliders[i].classList.remove('visually-hidden');
    }

  if ( radioButtonsServises[i].checked == true ) {
    servises[i].classList.remove('visually-hidden');
      }
  else if ( radioButtonsServises[i].checked == false ){
    servises[i].classList.add('visually-hidden');
    }
*/

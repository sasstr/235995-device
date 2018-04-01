/*  Открыть и закрыть попапы  */

var writeToUsPopup = document.querySelector('.write-to-us');
var btnWriteToUsPopupClose = document.querySelector('#write-to-us-pop-up-close');
var btnSubmit = document.querySelector('.pop-up-submit');
var btnWriteToUs = document.querySelector('.btn-write-us');
var mapPopup = document.querySelector('.map-pop-up');
var btnMapPopupClose = document.querySelector('#map-pop-up-close');
var openMapPopup = document.querySelector('.shop-data-contacts-map-link');

var  popUpWriteToUsForm= document.querySelector(".write-to-us form"); //link
var  popUpName= document.querySelector("#pop-up-name");    //login
var  popUpEmail= document.querySelector("#pop-up-email");   //password

popUpWriteToUsForm.addEventListener("submit", function (evt) {
  if (!popUpName.value || !popUpEmail.value) {
  evt.preventDefault();
  writeToUsPopup.classList.add("modal-error");
  writeToUsPopup.offsetWidth = writeToUsPopup.offsetWidth;
}
  else {
  if (isStorageSupport) {
  localStorage.setItem("popUpName", popUpName.value);
    }
}
});

/*
var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("popUpName");
    } catch (err) {
      isStorageSupport = false;
}
btnWriteToUs.addEventListener("click", function (evt) {
     evt.preventDefault();
     writeToUsPopup.classList.remove("visually-hidden");
    if (storage) {
      popUpName.value = storage;
      popUpEmail.focus();
    }
    else {
      popUpName.focus();
    }
});

btnMapPopupClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeToUsPopup.classList.add("visually-hidden");
        writeToUsPopup.classList.remove("modal-error");
});

*/
//----------------------------------------------------

if(btnWriteToUs)
btnWriteToUs.addEventListener("click", function (event) {
    event.preventDefault();
    writeToUsPopup.classList.remove('visually-hidden');
    writeToUsPopup.classList.add('modal-show');
    }
  );

if(openMapPopup)
openMapPopup.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove('visually-hidden');
  mapPopup.classList.add('modal-show');
  }
);

if(btnWriteToUsPopupClose)
btnWriteToUsPopupClose.addEventListener("click", function (event) {
  event.preventDefault();
  writeToUsPopup.classList.add("visually-hidden");
  writeToUsPopup.classList.remove('modal-show');
  writeToUsPopup.classList.remove("modal-error");
  }
);


document.addEventListener("keyup", function (event) {
  if (event.keyCode == 27){
  event.preventDefault();
  writeToUsPopup.classList.add("visually-hidden");
  writeToUsPopup.classList.remove('modal-show');
    }
  }
);

if(btnMapPopupClose)
btnMapPopupClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("visually-hidden");
  mapPopup.classList.remove('modal-show');
  }
);

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 27){
  event.preventDefault();
  mapPopup.classList.add("visually-hidden");
  mapPopup.classList.remove('modal-show');
    }
  }
);



/*  Работает но по клику на радио кнопках разваливается ...
var sliders = document.querySelectorAll( '.slider-item' );
var radioButtonsSlider = document.querySelectorAll( '.slider input[type="radio"]' );

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

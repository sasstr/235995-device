var sliders = document.querySelectorAll( '.slider-item' );
var radioButtonsSlider = document.querySelectorAll( '.slider input[type="radio"]' );
var formRadioButtonsSlider = document.querySelector( '.slider form' );

var servises = document.querySelectorAll( '.services-data-feature' );
var radioButtonsServises = document.querySelectorAll( '.service-data-controls input[type="radio"]' );
var formRadioButtonsServises = document.querySelector( '.service-data-controls form' );

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

window.onload = function () {
  var len = sliders.length,
      i = len-1;

  (function go() {
    sliders[i].classList.add('visually-hidden');
    radioButtonsSlider[i].checked = false;
    i = ++i % len;

    sliders[i].classList.remove('visually-hidden');

    radioButtonsSlider[i].checked = true;

     window.setTimeout(go, 3000);
    })();
  }

formRadioButtonsServises.onclick = function(){
  for (var i = 0; i < sliders.length ; i++) {

  if ( radioButtonsServises[i].checked == true ) {
    servises[i].classList.remove('visually-hidden');
      }
  else if ( radioButtonsServises[i].checked == false ){
    servises[i].classList.add('visually-hidden');
      }
    }
  }


/*  console.log("ok-1!");
console.log(radioButtons);
     */

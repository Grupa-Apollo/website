 window.addEventListener('load', function () {
     loding();
 });

 function loding() {
     setTimeout(function () {
         document.querySelector('body').classList.add("loaded");
     }, 5000);
 }
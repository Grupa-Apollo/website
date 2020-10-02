 function wait(ms) {
     var start = new Date().getTime();
     var end = start;
     while (end < start + ms) {
         end = new Date().getTime();
     }
 }
 window.addEventListener('load', function () {
     loding();
 });

 function loding() {
     document.querySelector('body').classList.add("loaded");
     wait(10000);
 }
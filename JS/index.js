


const btn = document.querySelector(".btn");
const video = document.querySelector(".Coffee-video");
const fa = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");


//  <!--هذا اضافي مني--> //
var Coffee = document.getElementById("Coffee-video.mp4");
function playCoffee(){
  Coffee.play();
}
function pause(){
  Coffee.pause();
}
function load(){
  Coffee.load();
}

document.write("<h1> Welcome In Coffee - Hamdan </h1>");
alert(" هل تريد الدخول على متجر الكافي الخاص بالمهندس :همدان");
confirm("هل انت متاكد من  انك تريد الدخول");
//  <!--هذا اضافي مني--> //


btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    fa.classList.remove("fa-pause");
    fa.classList.add("fa-play");
  }
});

window.addEventListener("load", () => {
  preloader.style.zIndex = "-999";
});



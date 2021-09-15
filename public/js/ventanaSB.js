var modalSB1 = document.getElementById("myModalSB1");
var modalSB2 = document.getElementById("myModalSB2");
var modalSB3 = document.getElementById("myModalSB3");

var btnSB1 = document.getElementById("myBtnSB1");
var btnSB2 = document.getElementById("myBtnSB2");
var btnSB3 = document.getElementById("myBtnSB3");


var spanSB1 = document.getElementsByClassName("closeSB1")[0];
var spanSB2 = document.getElementsByClassName("closeSB2")[0];
var spanSB3 = document.getElementsByClassName("closeSB3")[0];



btnSB1.onclick = function() {
  modalSB1.style.display = "block";
}
spanSB1.onclick = function() {
  modalSB1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalSB1) {
    modalSB1.style.display = "none";
  }
}
  
btnSB2.onclick = function() {
  modalSB2.style.display = "block";
}
spanSB2.onclick = function() {
  modalSB2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalSB2) {
    modalSB2.style.display = "none";
  }
}


btnSB3.onclick = function() {
  modalSB3.style.display = "block";
}
spanSB3.onclick = function() {
  modalSB3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalSB3) {
    modalSB3.style.display = "none";
  }
}

  
var modalV1 = document.getElementById("myModalV1");
var modalV2 = document.getElementById("myModalV2");
var modalV3 = document.getElementById("myModalV3");

var btnV1 = document.getElementById("myBtnV1");
var btnV2 = document.getElementById("myBtnV2");
var btnV3 = document.getElementById("myBtnV3");


var spanV1 = document.getElementsByClassName("closeV1")[0];
var spanV2 = document.getElementsByClassName("closeV2")[0];
var spanV3 = document.getElementsByClassName("closeV3")[0];



btnV1.onclick = function() {
  modalV1.style.display = "block";
}
spanV1.onclick = function() {
  modalV1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalV1) {
    modalV1.style.display = "none";
  }
}
  
btnV2.onclick = function() {
  modalV2.style.display = "block";
}
spanV2.onclick = function() {
  modalV2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalV2) {
    modalV2.style.display = "none";
  }
}


btnV3.onclick = function() {
  modalV3.style.display = "block";
}
spanV3.onclick = function() {
  modalV3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalV3) {
    modalV3.style.display = "none";
  }
}
var modalL1 = document.getElementById("myModalL1");
var modalL2 = document.getElementById("myModalL2");
var modalL3 = document.getElementById("myModalL3");

var btnL1 = document.getElementById("myBtnL1");
var btnL2 = document.getElementById("myBtnL2");
var btnL3 = document.getElementById("myBtnL3");


var spanL1 = document.getElementsByClassName("closeL1")[0];
var spanL2 = document.getElementsByClassName("closeL2")[0];
var spanL3 = document.getElementsByClassName("closeL3")[0];



btnL1.onclick = function() {
  modalL1.style.display = "block";
}
spanL1.onclick = function() {
  modalL1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalL1) {
    modalL1.style.display = "none";
  }
}
  
btnL2.onclick = function() {
  modalL2.style.display = "block";
}
spanL2.onclick = function() {
  modalL2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalL2) {
    modalL2.style.display = "none";
  }
}


btnL3.onclick = function() {
  modalL3.style.display = "block";
}
spanL3.onclick = function() {
  modalL3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalL3) {
    modalL3.style.display = "none";
  }
}

var modalH1 = document.getElementById("myModalH1");
var modalH2 = document.getElementById("myModalH2");
var modalH3 = document.getElementById("myModalH3");

var btnH1 = document.getElementById("myBtnH1");
var btnH2 = document.getElementById("myBtnH2");
var btnH3 = document.getElementById("myBtnH3");


var spanH1 = document.getElementsByClassName("closeH1")[0];
var spanH2 = document.getElementsByClassName("closeH2")[0];
var spanH3 = document.getElementsByClassName("closeH3")[0];



btnH1.onclick = function() {
  modalH1.style.display = "block";
}
spanH1.onclick = function() {
  modalH1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalH1) {
    modalH1.style.display = "none";
  }
}
  
btnH2.onclick = function() {
  modalH2.style.display = "block";
}
spanH2.onclick = function() {
  modalH2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalH2) {
    modalH2.style.display = "none";
  }
}


btnH3.onclick = function() {
  modalH3.style.display = "block";
}
spanH3.onclick = function() {
  modalH3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalH3) {
    modalH3.style.display = "none";
  }
}

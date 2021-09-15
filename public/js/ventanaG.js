var modalG1 = document.getElementById("myModalG1");
var modalG2 = document.getElementById("myModalG2");
var modalG3 = document.getElementById("myModalG3");

var btnG1 = document.getElementById("myBtnG1");
var btnG2 = document.getElementById("myBtnG2");
var btnG3 = document.getElementById("myBtnG3");


var spanG1 = document.getElementsByClassName("closeG1")[0];
var spanG2 = document.getElementsByClassName("closeG2")[0];
var spanG3 = document.getElementsByClassName("closeG3")[0];



btnG1.onclick = function() {
  modalG1.style.display = "block";
}
spanG1.onclick = function() {
  modalG1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalG1) {
    modalG1.style.display = "none";
  }
}
  
btnG2.onclick = function() {
  modalG2.style.display = "block";
}
spanG2.onclick = function() {
  modalG2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalG2) {
    modalG2.style.display = "none";
  }
}


btnG3.onclick = function() {
  modalG3.style.display = "block";
}
spanG3.onclick = function() {
  modalG3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalG3) {
    modalG3.style.display = "none";
  }
}
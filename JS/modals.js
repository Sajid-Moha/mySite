var modal_1 = document.getElementById("myModal_1");
var btn_1 = document.getElementById("mod_item1");
var quit_1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn_1.onclick = function() {
  modal_1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
quit_1.onclick = function() {
  modal_1.style.display = "none";
}

var modal_2 = document.getElementById("myModal_2");
var btn_2 = document.getElementById("mod_item2");
var quit_2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn_2.onclick = function() {
  modal_2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
quit_2.onclick = function() {
  modal_2.style.display = "none";
}

/* THIRD MODAL */
var modal_3 = document.getElementById("myModal_3");
var btn_3 = document.getElementById("mod_item3");
var quit_3 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btn_3.onclick = function() {
  modal_3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
quit_3.onclick = function() {
  modal_3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_3) {
    modal_3.style.display = "none";
  }
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
  if (event.target == modal_1) {
    modal_1.style.display = "none";
  }
}

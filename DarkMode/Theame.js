function DarkMode() {
  var check = document.getElementById("switch");
  if (check.checked === true) {
    document.body.style.background = "black";
  } else {
    document.body.style.background = "";
  }
}

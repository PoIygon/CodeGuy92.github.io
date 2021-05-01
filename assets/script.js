function onload() {
  var cookie = document.cookie;
  if (cookie.length > 8) {
    document.getElementById("accoun").innerHTML = "Welcome back, " + cookie.substring(8) + "!";
  }
}

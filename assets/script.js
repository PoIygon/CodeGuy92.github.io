function onload() {
  var cookie = document.cookie;
  if (cookie.length > 8) {
    var options = `<br><br><button class="custom" onclick="location.href = 'account/logout.html';">Log Out</button>`
    document.getElementById("accoun").innerHTML = "Welcome back, " + cookie.substring(9) + "!" + options;
  }
  if (location.hash !== ""){
      if (location.hash == "#logout"){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    location.href = "index.html";
      }else
    document.cookie = "username=" + location.hash.substring(1);
    location.href = "index.html";
  }
  if (document.cookie == "username=LankyBox01"){
    var ppanel = document.getElementById("admpanl");
    ppanel.style.display = "block";
  }
}

function loadcode() {
fetch(`https://clouddata.scratch.mit.edu/logs?projectid=${524136137}&offset=0&limit=40`)
.then(res => res.json())
.then(res => {
  alert("Last code sent was " + res[0].value + " by " + res[0].user)
})
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

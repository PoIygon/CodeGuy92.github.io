function onload() {
  var cookie = document.cookie;
  if (cookie.length > 8) {
    document.getElementById("accoun").innerHTML = "Welcome back, " + cookie.substring(9) + "!";
  }
  if (location.hash !== ""){
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
  alert("Last code sent was:" + \n + "Value:" + res[0].value + \n + "By:" + res[0].user)
})
}

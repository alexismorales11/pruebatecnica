function myFunction() {
  var x = document.getElementById("myTopnav");
  var l = document.getElementById("body");
  if (x.className === "topnav") {
    if (l.className === "home_responsive") {
      l.className += " active";
    } else {
      l.className = "home_responsive";
    }
    x.className += " responsive";
  } else {
    x.className = "topnav";
    l.className = "home_responsive";
  }
}
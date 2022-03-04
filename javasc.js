
function chnge() {
  var currentTime = (new Date()).getHours();
  console.log(currentTime);
  var div = document.getElementById('night');
  var div2 = document.getElementById('text');
  var div3 = document.getElementById('bottom');
  var icon = document.getElementsByClassName("icon");
  console.log(icon);
  var name = document.getElementById('name');
  var last = document.getElementById('copy');
  var image = document.getElementById('top-sun')
  var image2 = document.getElementById('down-cloud');
  var image3 = document.getElementById('upper-cloud');


  if (currentTime < 18 && currentTime >= 7) {
   
    console.log("hiii");
    div.style.backgroundColor = "#FFEDDB";
    console.log("hiii");
  }
  else {
    div.style.backgroundColor = "black";
    div2.style.color = "white";
    name.style.color = "white";
    last.style.color = "white";
    console.log("hiii2");
    image3.src = "images_portfolio/crescent-moon_1f319.png";
    image.style.display = "none";
    image2.style.display = "none";
    div3.style.backgroundColor = "black";
   
    // for(var i=0;i<icon.length;i++){
    // icon[i].style.color = "white";

    // }
  }
}

chnge();

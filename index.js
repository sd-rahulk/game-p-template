function move(){var elem=r.getElementById(a);var width=z;var id=setInterval(frame, p);function frame() {
if(width>=100){clearInterval(id);elem.style.display="none";l("help.html")}else{width++;elem.style.width=width+'%'; 
}}}function load(){var elem=r.getElementById(a);var width=1;var id=setInterval(frame, p);function frame(){
if(width>=100){clearInterval(id);elem.style.display="none";l("help.html")}else{width++;elem.style.width=width+'%';}}}
function move1(){var y = setInterval(frame, p);function frame(){if(width>=100){clearInterval(y);
elem.style.display="none";l("help.html");}else{width++;elem.style.width=width+'%'}}}function load1(){
var y=setInterval(frame, p);function frame(){if(width >= 100){clearInterval(y);elem.style.display="none";l("help.html");}
else{width++;elem.style.width=width+'%'}}}

var lis = document.querySelectorAll("li");

for(var i=0; i<lis.length; i++) {
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});

	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}

var inp = document.querySelector("input[type=text]");
var spa = document.querySelector("span");
var other = document.querySelector("input");

other.value = null;

inp.addEventListener("click", function(){
	spa.classList.add("display");
});

var specifiedElement = document.getElementById('t9');

//I'm using "click" but it works with any event
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);

  if (!isClickInside) {
  	if (other.value=="") {
  		spa.classList.remove("display");
  		document.getElementById("t9").style.border = "#f0f0f0 solid 1px";
  		console.log("A");
  	} else {
  		document.getElementById("t9").style.border = "#f0f0f0 solid 1px";
  	}
  		spa.style.color = "#a0a0a0";
  		spa.style.opacity = "1";
  		spa.style.background = "#fff";
  }	
  else {
  	spa.classList.add("display");
  	other.focus();
  	document.getElementById("t9").style.border = "rgb(61,107,235) solid 1px";
  	spa.style.color = "rgb(61,107,235)";
  }
});
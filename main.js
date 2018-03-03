window.addEventListener("load", function(){
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
});




var counterRoot = new Vue({

	el: "#counter",

	data: {

		counter: 1

	}

});

var counterRoot = new Vue({

	el: "#counter1",

	data: {

		counter1: 1

	}

});


//one
var modal1 = document.getElementById('simpalmodal1');
//Get open button
var modalBtn = document.getElementById('modalBtn1');

var closebtn =document.getElementById('closebtn1');

//modalBtn.addEventListener('click', openModal);

function openModal1(){
    modal1.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal1").style.display= 'block';
}

function closeModal1(){
    modal1.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal1").style.display= 'none';
}


//two

var modal2 = document.getElementById('simpalmodal2');
//Get open button
var modalBtn2 = document.getElementById('modalBtn2');

var closebtn =document.getElementById('closebtn2');

//modalBtn2.addEventListener('click', openModal);

function openModal2(){
    modal2.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal2").style.display= 'block';
}

function closeModal2(){
    modal2.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal2").style.display= 'none';
}

//three

var modal3 = document.getElementById('simpalmodal3');
//Get open button
var modalBtn3 = document.getElementById('modalBtn3');

var closebtn =document.getElementById('closebtn3');

//modalBtn3.addEventListener('click', openModal);

function openModal3(){
    modal3.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal3").style.display= 'block';
}

function closeModal3(){
    modal3.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal3").style.display= 'none';
}

//four


var modal4 = document.getElementById('simpalmodal4');
//Get open button
var modalBtn4 = document.getElementById('modalBtn4');

var closebtn =document.getElementById('closebtn4');

//modalBtn4.addEventListener('click', openModal);

function openModal4(){
    modal4.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal4").style.display= 'block';
}

function closeModal4(){
    modal4.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal4").style.display= 'none';
}


//five

var modal5 = document.getElementById('simpalmodal5');
//Get open button
var modalBtn = document.getElementById('modalBtn5');

var closebtn =document.getElementById('closebtn5');

//modalBtn.addEventListener('click', openModal);

function openModal5(){
    modal5.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal5").style.display= 'block';
}

function closeModal5(){
    modal5.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal5").style.display= 'none';
}




function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    $("#result").text(email + " is valid :)");
    $("#result").css("color", "green");
  } else {
    $("#result").text(email + " is not valid :(");
    $("#result").css("color", "red");
  }
  return false;
}

$("#validate").bind("click", validate);

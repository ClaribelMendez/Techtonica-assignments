// document.getElementById("btn").addEventListener("click", function() {
//     var img = document.createElement("img");
//     img.src = https://c.tenor.com/g_a_ehluKycAAAAC/minions-yay.gif;
//     img.width = 300;
//     img.height = 250;
//     img.alt = Minions happy;

//     document.body.appendChild(img);
   
    // alert("YOU DID IT!");
//   });


//   function show_image(src, width, height, alt) {
//     var img = document.createElement("img");
//     img.src = src;
//     img.width = width;
//     img.height = height;
//     img.alt = alt;

//     // This next line will just add it to the <body> tag
//     document.body.appendChild(img);
// }
// show_image()



function showImage() {
    document.getElementById('loadingImage').style.display = 'block';
  }

function Theme1(){
  let color = document.getElementById("right");
  color.style.backgroundColor = "#DD4A48";
  let color2 = document.getElementById("left");
  color2.style.backgroundColor = "#E3BEC6";
}
Theme1()

function Theme1(){
  let color = document.getElementById("right");
  color.style.backgroundColor = "#DD4A48";
  let color2 = document.getElementById("left");
  color2.style.backgroundColor = "#E3BEC6";
}
Theme1()


function Theme2(){
  let color = document.getElementById("right");
  color.style.backgroundColor = "blue";
  let color2 = document.getElementById("left");
  color2.style.backgroundColor = "red";
}
Theme2()

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunction() {
  document.getElementById("left").style.transition = "all 2s";
}
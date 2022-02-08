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





// function Theme1(){
//   let color = document.getElementById("right");
//   color.style.backgroundColor = "#DD4A48";
//   let color2 = document.getElementById("left");
//   color2.style.backgroundColor = "#E3BEC6";
// }
// Theme1()

// function Theme1(){
//   let color = document.getElementById("right");
//   color.style.backgroundColor = "#DD4A48";
//   let color2 = document.getElementById("left");
//   color2.style.backgroundColor = "#E3BEC6";
// }
// Theme1()


// function Theme2(){
//   let color = document.getElementById("right");
//   color.style.backgroundColor = "blue";
//   let color2 = document.getElementById("left");
//   color2.style.backgroundColor = "red";
// }
// Theme2()

// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }



const cashewword = document.getElementById('cashew');
cashewword.style.cursor = "pointer";

cashewword.addEventListener('click', event => {
  
  let x = document.getElementById("cashewcreamrecipe")
  cashew.textContent = x
});

function showhide() {
  var div = document.getElementById('cashewcreamrecipe');
  div.classList.toggle('hidden');
  }


function ShowAndHide() {
    var x = document.getElementById('cashewcreamrecipe');
    if (x.style.display == 'none') {
        x.style.display = 'block';
       
x.style.transition = "all 2s";

        
    } else {
        x.style.display = 'none';
    }
  }

  function showImage() {
    document.getElementById('loadingImage').style.display = 'block';
  }

  





// let test = document.getElementById("left");

// // This handler will be executed only once when the cursor
// // moves over the unordered list
// test.addEventListener("mouseover", function( event ) {
//   // highlight the mouseenter target
//   event.target.style.color = "purple";
// }

// setTimeout(function() {
//   event.target.style.color = "";
// }, 500);
// }, false);

// // This handler will be executed every time the cursor
// // is moved over a different list item
// test.addEventListener("mouseover", function( event ) {
// // highlight the mouseover target
// event.target.style.color = "orange";
// }

// // reset the color after a short delay
// setTimeout(function() {
//   event.target.style.color = "";
// }, 500);
// }, false);
// }

// var enterEventCount = 0;
// var leaveEventCount = 0;
// const mouseTarget = document.getElementById('mouseTarget');
// const unorderedList = document.getElementById('left');

// mouseTarget.addEventListener('mouseenter', e => {
//   mouseTarget.style.border = '5px dotted orange';
//   enterEventCount++;
  
// });

// mouseTarget.addEventListener('mouseleave', e => {
//   mouseTarget.style.border = '1px solid #333';
 
// });

// function addListItem(text) {
//   // Create a new text node using the supplied text
//   var newTextNode = document.createTextNode(text);

//   // Create a new li element
//   var newListItem = document.createElement("li");

//   // Add the text node to the li element
//   newListItem.appendChild(newTextNode);

//   // Add the newly created list item to list
//   unorderedList.appendChild(newListItem);
// }

document.getElementById("left").onmouseover = function() {mouseOver()};
document.getElementById("left").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("left").style.fontWeight = 200;
}

function mouseOut() {
 document.getElementById("left").style.fontWeight = 500;
}

// document.getElementById("right").onmouseover = function() {mouseOver()};
// document.getElementById("right").onmouseout = function() {mouseOut()};

// function mouseOver() {
//   document.getElementById("right").style.fontWeight = 900;
// }

// function mouseOut() {
//   document.getElementById("right").style.fontWeight = 200;
// }


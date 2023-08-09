// LAP

// Q1
function funDark() {
  let button = document.body;
  button.classList.toggle("button");
}

// Q2
function purpul() {
  let img = document.getElementById("img");
  img.style.backgroundColor = "blueviolet"
  let text = document.getElementById("textName");
  text.innerText = "Budur";
  img.classList.toggle("img");
  if( img.style.backgroundColor === "blueviolet" ){
    let imgs = document.getElementById("img");
    imgs.style.backgroundColor = "white";
    console.log("img.style.backgroundColor = chenge for white;");
  }else if(img.style.backgroundColor === "white"){
    let imgw = document.getElementById("img")
    imgw.style.backgroundColor = "blueviolet";
    console.log("img chenge for white");
  }
}
function purpul4() {
  let img = document.getElementById("img");
  img.style.backgroundColor = "white"
  let text = document.getElementById("textName");
  text.innerText = "salem";

  if( img.style.backgroundColor === "blueviolet" ){
    let imgs = document.getElementById("img");
    imgs.style.backgroundColor = "white";
    console.log("img.style.backgroundColor = chenge for white;");
  }else if(img.style.backgroundColor === "white"){
    let imgw = document.getElementById("img")
    imgw.style.backgroundColor = "blueviolet";
    console.log("img chenge for blueviolet");
  }
}

// Q3 & Q4

function chengeColor(){
    let chengeColortext = document.getElementById("chenge");

    chengeColortext.style.color = "blueviolet";
}

function chengeFontsizeincrease(){
    let chengeFontsizetext = document.getElementById("chenge");
    chengeFontsizetext.style.fontSize = "20px";

}

function chengeFontsizedecrease() {
    let chengeFontsizetextlow = document.getElementById("chenge")
    chengeFontsizetextlow.style.fontSize = "13px";
}

function changebackgroundcolortext() {
    let changebackgroundcolor = document.getElementById("chenge")
    changebackgroundcolor.style.backgroundColor = "pink";
}

function displayanimage() {
    let displayanimageB = document.getElementById("imageChenge")
    displayanimageB.style.backgroundImage = "url('flower.jpeg')";
    document.getElementsByTagName("button")[5].innerText = "Chenge Image";

    if (displayanimageB.style.backgroundImage === "url('flower.jpeg')"){
        displayanimageB.style.backgroundImage = "url('flower 2.jpeg')";
        console.log("chenged!");
    }else{
        console.log("not chenged");
    }
}



function myFunctionprompt() {
    let person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("name").innerText =
      "Hello " + person ;
    }
  }
var back = 0;
var startline = 0;
var id1 = 0;
var id2 = 0;
var id3 = 0;
var character = 0;
var backgroundChange = 0;
var bullet = 1050;
var bullet2 = 1050;

var go = 0;

//new update 1
var bulm1 = 0;
var bulm2 = 0;

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function Start(event) {
    var key = event.which;
    // alert(key);
    if (key == 83) {
        if (id2 == 0) {
            clearInterval(id1);
            clearInterval(id3);
            id2 = setInterval(Slide, 120);
        }
    }
    if (key == 87) {
        if (id3 == 0) {
            clearInterval(id1);
            clearInterval(id2);
            id3 = setInterval(Jump, 120);
        }
    }

    // new update 2
    if (key == 37) {
        bulm1 = setInterval(bul1,200);
    }

    if (key == 38) {
        bulm2 = setInterval(bul2, 200);
    }
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function Run() {
    var characterDiv = document.getElementById("characterDiv");
    characterDiv.style.backgroundImage = "url('image/Robot-Run.png')";
    characterDiv.style.backgroundPositionX = character + "px";
    character = character - 101;
    if (character == -808) {
        character = 0;
    }

    var characterDiv = document.getElementById("characterDiv");
    characterDiv.style.marginLeft = startline + "px";
    startline = startline + 20;
    if (startline > 100) {
        startline = 100;
        var backgroundDiv = document.getElementById("backgroundDiv");
        backgroundDiv.style.backgroundPositionX = back + "px";
        back = back - 20;
        // if (back % -1000 == 0) {
        //     backgroundDiv.style.backgroundPositionY = backgroundChange + "px";
        //     backgroundChange = backgroundChange + 300;
        // }

    }

}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

var postion = 345;


function Slide() {
    var characterDiv = document.getElementById("characterDiv");
    characterDiv.style.backgroundImage = "url('image/Robot-Slide.png')";
    characterDiv.style.backgroundPositionX = character + "px";
    character = character - 101;
    if (character == -1010) {
        character = 0;
        clearInterval(id2);
        id2 = 0;
        idStart();
    }

    var characterDiv = document.getElementById("characterDiv");
    characterDiv.style.marginTop = postion + "px";
    if (postion > 295) {
        postion = postion + 5;
    } else {
        postion = postion - 5;
        if (postion == 355) {
            marginTop = 355;
        }
    }

    var backgroundDiv = document.getElementById("backgroundDiv");
    backgroundDiv.style.backgroundPositionX = back + "px";
    back = back - 20;
    // if (back % -1000 == 0) {
    //     backgroundDiv.style.backgroundPositionY = backgroundChange + "px";
    //     backgroundChange = backgroundChange + 300;
    // }

}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

var jumpover = 345;

function Jump() {
    var characterDiv = document.getElementById("characterDiv");
    characterDiv.style.backgroundImage = "url('image/Robot-Jump.png')";
    characterDiv.style.backgroundPositionX = character + "px";
    character = character - 101;
    if (character == -1010) {
        character = 0;
        clearInterval(id3);
        id3 = 0;
        idStart();
    }


    var characterDiv = document.getElementById("characterDiv");
    characterDiv.style.marginTop = jumpover + "px";
    if (jumpover > 295) {
        jumpover = jumpover - 5;
    } else {
        jumpover = jumpover + 5;
        if (jumpover < 345) {
            marginTop = 345;
        }
    }





    var backgroundDiv = document.getElementById("backgroundDiv");
    backgroundDiv.style.backgroundPositionX = back + "px";
    back = back - 20;
    // if (back % -1000 == 0) {
    //     backgroundDiv.style.backgroundPositionY = backgroundChange + "px";
    //     backgroundChange = backgroundChange + 300;
    // }

}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function idStart() {
    // alert("Start");
    id1 = setInterval(Run, 120);
}

//new update 3
function bul1() {
    bullet = bullet - 10;
    var bul11 = document.getElementById("bullet");
    bul11.style.marginLeft = bullet + "px";
}

function bul2() {
    bullet2 = bullet2 - 10;
    var bul22 = document.getElementById("bullettwo");
    bul22.style.marginLeft = bullet2 + "px";
}
// var x = 0;

// function m(){
    
//     var r = Math.random() *1000;
//     var f = Math.floor(r);

//     var r2 = Math.random() * 1;
//     var f2 = Math.floor(r2);
    
//     var d = document.createElement("div");
//     d.className = "box1";
//     d.style.marginLeft = f + "px";
//     d.style.marginTop = f2 + "px";

//     d.id = "i" + x;
    
    
//     var b = document.getElementById("b");
//     b.appendChild(d);

//     n(x);
//     x = x +1;

// }

// function n(q){
//     var nd = document.getElementById("i" + q);
//     nd.style.backgroundColor = "blue";
//     setInterval(function z(){
//         var nx = nd.style.marginLeft;
//         var nxi = parseInt(nx , 10);
//         nd.style.marginLeft = (nxi - 10) + "px";
//     }, 100);
    
// }

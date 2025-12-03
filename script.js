document.body.style.margin = "0";
document.body.style.background = "black";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.fontFamily = "Arial";




let menu = document.createElement("div");
menu.style.width = "100%";
menu.style.height = "150px";
menu.style.display = "flex";
menu.style.alignItems = "center";
menu.style.justifyContent = "space-around";
menu.style.color = "white";
menu.style.fontSize = "25px";

document.body.appendChild(menu);

let logo = document.createElement("img");
logo.src = "https://avatars.mds.yandex.net/i?id=b915b5c746408376dbda0003a71cb4119668f28c-12422016-images-thumbs&n=13"; 
logo.style.width = "70px";
logo.style.height = "70px";
logo.style.borderRadius = "50px";
menu.appendChild(logo);

function addItem(name) {
    let item = document.createElement("div");
    item.textContent = name;
    menu.appendChild(item);
}

addItem("static");
addItem("relative");
addItem("absolute");
addItem("fixed");
addItem("sticky");
addItem("z-index");


let title = document.createElement("div");
title.textContent = "Position";
title.style.position = "absolute";
title.style.top = "200px";
title.style.padding = "10px 40px";
title.style.background = "white";
title.style.textAlign = "center";
title.style.width = "450px";
title.style.height = "40px";
title.style.borderRadius = "50px";
title.style.fontSize = "35px";
title.style.fontWeight = "bold";

document.body.appendChild(title);

function createRed(x, text) {
    let box = document.createElement("div");
    box.style.width = "300px";
    box.style.height = "180px";
    box.style.borderRadius = "100px";
    box.style.background = "red";
    box.style.position = "absolute";
    box.style.left = x + "px";
    box.style.top = "350px";
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.color = "white";
    box.style.fontSize = "22px";
    box.textContent = text;
    document.body.appendChild(box);
}

createRed(150, "absolute");
createRed(window.innerWidth / 2 - 150, "absolute");
createRed(window.innerWidth - 450, "absolute");

let div = document.createElement("div")
div.style.height = "500px"
div.style.width = '100%'
div.style.backgroundImage = "url('./img/bg.png')"
document.body.append(div)       
div.style.backgroundRepeat = 'no-repeat'; 
div.style.backgroundSize = 'cover';  
div.style.backgroundSize = "1700px 550px";
div.style.opacity = "0.5"
div.style.zIndex = "-1"

let otadiv = document.createElement("otadiv");
otadiv.textContent = "information";
otadiv.style.position = "absolute";
otadiv.style.bottom = "100px";
otadiv.style.padding = "10px 40px";
otadiv.style.background = "white";
otadiv.style.textAlign = "center";
otadiv.style.width = "450px";
otadiv.style.height = "40px";
otadiv.style.borderRadius = "50px";
otadiv.style.fontSize = "35px";
otadiv.style.fontWeight = "bold";

document.body.append(otadiv);  

let  otabox= document.createElement("div")
otabox.style.width = "100%"
otabox.style.height = "650px"
otabox.style.background = "black"

document.body.appendChild(otabox);

let redbox = document.createElement("div")
redbox.style.width = "350px"
redbox.style.height = "332px"
redbox.textContent = "static  Postion default holati static bu holatda top ,left right,bottom ,z-index ishlamaydi"
redbox.style.color = "White"
redbox.style.textAlign = "center"
redbox.style.background = "#7B2525"
redbox.style.marginTop = "-400px"
document.body.appendChild(redbox);


let redbox1 = document.createElement("redbox1")
redbox1.style.width = "350px"
redbox1.style.height = "332px"
redbox1.textContent = "Obsalute Postion default holati static bu holatda top ,left right,bottom ,z-index ishlamaydi"
redbox1.style.color = "White"
redbox1.style.textAlign = "center"
redbox1.style.background = "#7B2525"
redbox1.style.marginTop = "-400px"
redbox1.style.marginLeft = "1000px"
document.body.appendChild(redbox1);


let redbox2 = document.createElement("redbox2")
redbox2.style.width = "350px"
redbox2.style.height = "332px"   
redbox2.textContent = "Relative Postion default holati static bu holatda top ,left right,bottom ,z-index ishlamaydi"
redbox2.style.color = "White"
redbox2.style.textAlign = "center"
redbox2.style.background = "#7B2525"
redbox2.style.marginTop = "-260px"
redbox2.style.marginRight = "1000px"
document.body.appendChild(redbox2);

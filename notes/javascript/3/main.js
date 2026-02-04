let a = document.getElementById("hi");
a.style.color = "red";
a.style.backgroundColor = "yellow";
a.style.padding = "1rem";

a.innerHTML = "New Text";

let b = document.querySelector("p");
b.remove();

let c = document.createElement("img");
c.src = "https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg";

c.style.height = "1000px";
c.style.width = "600px";

document.body.appendChild(c);
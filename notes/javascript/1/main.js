let a = document.getElementById("abc");
console.log(a);
a.style.color = "red";
a.style.backgroundColor = "yellow";
a.style.border = "2px solid black";
a.style.padding = "2rem";
a.remove();


let b = document.querySelector('p'); //selects the first matching element
console.log(b);

let c = document.querySelectorAll('p'); //selects all the elements
console.log(c[1]);

let d = document.createElement("img");
d.src = "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp";

document.body.append(d);
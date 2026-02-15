const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/image1.jpg") {
        myImage.setAttribute("src", "images/image2.jpg");
    } else {
        myImage.setAttribute("src", "images/image1.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/miles.icon.jpg") {
    myImage.setAttribute("src", "images/miles.icon2.jpg");
  } else {
    myImage.setAttribute("src", "images/miles.icon.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Michael.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Spiderman is a hero, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Spiderman is a hero, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
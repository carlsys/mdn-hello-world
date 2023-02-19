const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => 
    {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "./images/firefox-small.png") {
            myImage.setAttribute("src", "./images/firefox-small-blue.jpeg")
        } else {
            myImage.setAttribute("src", "./images/firefox-small.png")
        }
    }
);

myButton = document.querySelector("button");

function setUserName() {
    username = prompt("What is your name?");
    myHeading.textContent = `FF is cool, ${username}`;
    localStorage.setItem("name", username)
}

myButton.onclick = () => { setUserName(); }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const username = localStorage.getItem("name");
    myHeading.textContent = `FF is cool, ${username}`;
}


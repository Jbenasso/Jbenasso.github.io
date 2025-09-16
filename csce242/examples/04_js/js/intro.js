/*
const sayHello = () => {
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    event.currentTarget.classList.add("clicked");   //current target is the button that was clicked
};

document.getElementById("btn-happy").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "YAY";
    pFeeling.classList.add("happy");
    pFeeling.classList.remove("sad");
}

document.getElementById("btn-sad").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "Nay";
    pFeeling.classList.add("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("btn-clear").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "";
    pFeeling.classList.remove("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget;
    console.log(userInput.value);
    document.getElementById("p-emotion").innerHTML = `You are feeling: ${userInput.value}`;
    document.getElementById("img-emotion").classList.remove("hidden");
}

document.getElementById("txt-emotion").onkeydown = (event) => {
    if(event.key === "Enter") {
        event.preventDefault();  //prevents the default action of the event (submitting a form)
        document.getElementById("btn-clear-emotion").click(); //simulates a click on the button
    }
}
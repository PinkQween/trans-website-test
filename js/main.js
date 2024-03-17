let maleAllowMouseUp = false;
let femaleAllowMouseUp = false;

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const handleMouseDown = (event) => {
    const gender = event.target.parentElement.id;

    console.log(gender);

    console.log(gender == "female");

    if (gender == "male") maleAllowMouseUp = true
    else if (gender == "female") femaleAllowMouseUp = true
    else if (gender == "fun") window.location.pathname = '/500.html'
    else replaceContent('500.html')
}

const handleMouseUp = (event) => {
    const gender = event.target.parentElement.id;

    console.log(gender);
    console.log(femaleAllowMouseUp);
    console.log(femaleAllowMouseUp && gender == "female");

    if (gender == "male" && maleAllowMouseUp) {
        replaceContent('game.male.html')
    } else if (gender == "female" && femaleAllowMouseUp) {
        console.log("clicked female");
        replaceContent('game.female.html')
    }
}

document.getElementById("male").addEventListener("mousedown", handleMouseDown);
document.getElementById("male").addEventListener("mouseup", handleMouseUp);
document.getElementById("female").addEventListener("mousedown", handleMouseDown);
document.getElementById("female").addEventListener("mouseup", handleMouseUp);
document.getElementById("fun").addEventListener("mousedown", handleMouseDown);

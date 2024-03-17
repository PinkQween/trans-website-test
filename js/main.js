let maleAllowMouseUp = false;
let femaleAllowMouseUp = false;

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const handleMouseDown = (event) => {
    const gender = event.target.parentElement.id;

    console.log(gender);

    if (gender == "male") maleAllowMouseUp = true
    else if (gender == "female") femaleAllowMouse = true
    else if (gender == "fun") window.location.pathname = '/500.html'
    else replaceContent('500.html')
}

const handleMouseUp = (event) => {
    const gender = event.target.parentElement.id;

    if (gender == "male" && maleAllowMouseUp) {
        console.log("clicked male");
    } else if (gender == "female" && femaleAllowMouseUp) {
        console.log("clicked female");
    }
}

const replaceContent = async (url) => {
    try {
        const response = await fetch(url);
        const html = await response.text();
        document.body.innerHTML = html; // Replace entire body with new content

        // Once the new content is loaded, include and execute the JavaScript file
        const script = document.createElement('script');
        script.src = 'js/500.js'; // Path to your JavaScript file
        document.body.appendChild(script);
    } catch (error) {
        console.error('Failed to fetch new content:', error);
    }
}

document.getElementById("male").addEventListener("mousedown", handleMouseDown);
document.getElementById("male").addEventListener("mouseup", handleMouseUp);
document.getElementById("female").addEventListener("mousedown", handleMouseDown);
document.getElementById("female").addEventListener("mouseup", handleMouseUp);
document.getElementById("fun").addEventListener("mousedown", handleMouseDown);
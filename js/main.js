let maleAllowMouseUp = false;
let femaleAllowMouseUp = false;

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// const replaceContent = async (url) => {
//     try {
//         const response = await fetch(url);
//         const html = await response.text();
//         document.body.innerHTML = html; // Replace entire body with new content

//         // Once the new content is loaded, include and execute the JavaScript file
//         const script = document.createElement('script');
//         script.src = 'js/500.js'; // Path to your JavaScript file
//         document.body.appendChild(script);
//     } catch (error) {
//         console.error('Failed to fetch new content:', error);
//     }
// }

const replaceContent = async (url) => {
    try {
        const response = await fetch(url);
        const html = await response.text();

        // Replace the entire body with new content
        document.body.innerHTML = html;

        // Reload JavaScript files if needed
        const scriptElements = document.querySelectorAll('script');
        scriptElements.forEach(scriptElement => {
            const src = scriptElement.getAttribute('src');
            if (src) {
                const script = document.createElement('script');
                script.src = src;
                document.body.appendChild(script);
            } else {
                eval(scriptElement.textContent);
            }
        });
    } catch (error) {
        console.error('Failed to fetch new content:', error);
    }
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

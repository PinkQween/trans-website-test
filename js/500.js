
console.log(window.location.pathname);

setTimeout(() => {
    if (window.location.pathname !== '/500.html') {
        window.location.reload();
    } else {
        setTimeout(() => {
            document.getElementById("text").textContent = "Hey!!! You are trying to view the errors, checkout this instead";
            setTimeout(() => {
                window.location.replace('https://www.github.com/PinkQween');
            }, 3000)
        })
    }
}, 1000)
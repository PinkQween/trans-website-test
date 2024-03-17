// export default async (url) => {
//     try {
//         const response = await fetch(url);
//         const html = await response.text();

//         // Replace the entire body with new content
//         document.body.innerHTML = html;

//         // Reload JavaScript files if needed
//         const scriptElements = document.querySelectorAll('script');
//         scriptElements.forEach(scriptElement => {
//             const src = scriptElement.getAttribute('src');
//             if (src) {
//                 const script = document.createElement('script');
//                 script.src = src;
//                 document.body.appendChild(script);
//             } else {
//                 eval(scriptElement.textContent);
//             }
//         });
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

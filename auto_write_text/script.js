const text = "I'm enjoying this job!!! ♥ ♥ ♥";

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length + 10) {
        index = 0;
    }
}

setInterval(writeText, 250);
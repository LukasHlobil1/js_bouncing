/*
document.addEventListener("DOMContentLoaded", function () {
    const testDiv = document.getElementById("test-div");
    console.log(testDiv)
})

document.addEventListener("DOMContentLoaded", () => {
    const testDiv = document.getElementById("test-div");
    console.log(testDiv)
})

function loadDiv() {
    const testDiv = document.getElementById("test-div");
    console.log(testDiv)
}

document.addEventListener("DOMContentLoaded", loadDiv)

const loadDiv2 = () => {
    const testDiv = document.getElementById("test-div");
    console.log(testDiv)
}
document.addEventListener("DOMContentLoaded", loadDiv2)

const loadDiv3 = function () {
    const testDiv = document.getElementById("test-div");
    console.log(testDiv)
}
document.addEventListener("DOMContentLoaded", loadDiv3)
 */

const animateText = (element) => {
    let originalFontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
    let fontSize = originalFontSize; // Zakladni velikost textu, urceni
    let direction = 1; // Kdyz mam 1 tak se to zvetsuje, -1 to zmensuje
    const maxFontSize = 50; // Max velikost toho pisma

    setInterval(() => {
        // Změna velikosti na základě směru
        fontSize += direction;

        // Pokud je fontsize vetsi nebo roven || mensi nebo roven tak se mi to obrati
        if (fontSize >= maxFontSize || fontSize <= originalFontSize) {
            direction *= -1; // Zde se to prehodi
        }

        element.style.fontSize = fontSize + 'px';
    }, 100);
};

const modifyDiv = () => {
    const testDiv = document.getElementById("test-div");
    testDiv.innerText = "nazdar";
    testDiv.style.color = "#fa9191";
    testDiv.style.fontSize = "16px";

    animateText(testDiv);
};

document.addEventListener("DOMContentLoaded", modifyDiv);
// alternativní zápis event listeneru
/*document.addEventListener("DOMContentLoaded", () => {
    modifyDiv()
});*/
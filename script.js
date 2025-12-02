
const pCount = document.querySelectorAll("p").length;
console.log("Кількість параграфів <p>:", pCount);


const h2Count = document.querySelectorAll("h2").length;
console.log("Кількість заголовків <h2>:", h2Count);


const bodyBg = getComputedStyle(document.body).backgroundColor;
console.log("background-color тега <body>:", bodyBg);


const h1 = document.querySelector("h1");
const h1FontSize = h1 ? getComputedStyle(h1).fontSize : "h1 немає на сторінці";
console.log("font-size тега <h1>:", h1FontSize);

button.addEventListener("click", () => {
    const isRed = document.body.style.background === "red";

    document.body.style.background = isRed ? "white" : "red";
    document.body.style.color = isRed ? "black" : "white";
});


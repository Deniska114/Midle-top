
const button = document.getElementById("changeBg");

button.addEventListener("click", () => {
  if (document.body.style.background === "red") {
    document.body.style.background = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.background = "red";
    document.body.style.color = "white";
  }
});




const pCount = document.querySelectorAll("p").length;
console.log("Кількість параграфів <p>:", pCount);


const h2Count = document.querySelectorAll("h2").length;
console.log("Кількість заголовків <h2>:", h2Count);


const bodyBg = getComputedStyle(document.body).backgroundColor;
console.log("background-color <body>:", bodyBg);


const h1 = document.querySelector("h1");
if (h1) {
  const h1Font = getComputedStyle(h1).fontSize;
  console.log("font-size <h1>:", h1Font);
} else {
  console.log("На сторінці немає <h1>");
}

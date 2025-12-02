//виведення кількості параграфів і тд
const pCount = document.querySelectorAll("p").length;
console.log("Кількість параграфів <p>:", pCount);


const h2Count = document.querySelectorAll("h2").length;
console.log("Кількість заголовків <h2>:", h2Count);


const bodyBg = getComputedStyle(document.body).backgroundColor;
console.log("background-color тега <body>:", bodyBg);


const h1 = document.querySelector("h1");
const h1FontSize = h1 ? getComputedStyle(h1).fontSize : "h1 немає на сторінці";
console.log("font-size тега <h1>:", h1FontSize);

//заміна фону
const button = document.getElementById("changeBg");

button.addEventListener("click", () => {
    const isRed = document.body.style.background === "red";

    document.body.style.background = isRed ? "white" : "red";
    document.body.style.color = isRed ? "black" : "white";
});
//номер 2 картинки 1завд про рандом картинки в кінці:


window.addEventListener("load", () => {

  
  setTimeout(() => {
    showImages();
  }, 5000);

});


function showImages() {

  
  const imagesUrl = [
    "https://picsum.photos/300/200?1",
    "https://picsum.photos/300/200?2",
    "https://picsum.photos/300/200?3"
  ];

  
  console.log("Масив зображень:", imagesUrl);

  
  imagesUrl.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.width = 300;
    img.style.margin = "10px";
    document.body.appendChild(img);
  });
}
//номар 2 картинки 2завд про продукти заміняючі на картинки:

window.addEventListener("load", () => {

    setTimeout(() => {

        
        const imagesUrl = [
            "https://picsum.photos/200/150?1",
            "https://picsum.photos/200/150?2",
            "https://picsum.photos/200/150?3"
        ];

        
        const fragment = document.createDocumentFragment();

        
        const parent = document.querySelector(".products");

        
        imagesUrl.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.style.width = "200px";
            fragment.appendChild(img);
        });

        
        parent.appendChild(fragment);

    }, 5000);

});




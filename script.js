
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


setTimeout(() => {
    addDynamicImages();
}, 5000);

function addDynamicImages() {

    
    let imagesUrl = [
        "https://via.placeholder.com/200x200/ff0000",
        "https://via.placeholder.com/200x200/00ff00",
        "https://via.placeholder.com/200x200/0000ff",
        "https://via.placeholder.com/200x200/f0f000"
    ];

    
    const parent = document.querySelector(".products");

   
    const fragment = document.createDocumentFragment();

    
    imagesUrl.forEach((url, index) => {
        setTimeout(() => {
            
            const li = document.createElement("li");

           
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Dynamic Image";
            img.style.width = "200px";

            
            li.appendChild(img);

            
            fragment.appendChild(li);

            
            parent.appendChild(fragment);

        }, index * 1000);
    });
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // не відправляємо форму

    let emailLogin = document.getElementById("email").value;

  
    const loginRegex = /^[a-zA-Z0-9_]{3,16}$/;   
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    const phoneRegex = /^\+380\d{9}$/;

    console.log("Перевіряємо:", emailLogin);

    
    if (emailLogin.match(loginRegex)) {
        alert("Ви ввели ЛОГІН ");
        return;
    }

   
    if (emailLogin.search(emailRegex) !== -1) {
        alert("Ви ввели EMAIL ");
        return;
    }

    
    if (emailLogin.match(phoneRegex)) {
        alert("Ви ввели НОМЕР ТЕЛЕФОНУ ");
        return;
    }

    alert(" Невірний формат. Введіть login / email / телефон.");
});



document.getElementById("email").addEventListener("input", function () {
    let text = this.value;

    
    let cleaned = text.replace(/[^\w]/g, "");

    if (cleaned !== text) {
        this.value = cleaned;
        console.log("Очищено login:", cleaned);
    }
});

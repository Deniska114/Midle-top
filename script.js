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

if (button) {
    button.addEventListener("click", () => {
        const isRed = document.body.style.background === "red";

        document.body.style.background = isRed ? "white" : "red";
        document.body.style.color = isRed ? "black" : "white";
    });
}

//номер 2 картинки 1 завд про рандом картинки:
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

//номер 2, заміна продуктів на картинки:
window.addEventListener("load", () => {
    setTimeout(() => {
        const imagesUrl = [
            "https://picsum.photos/200/150?1",
            "https://picsum.photos/200/150?2",
            "https://picsum.photos/200/150?3"
        ];

        const fragment = document.createDocumentFragment();
        const parent = document.querySelector(".products");

        if (parent) {
            imagesUrl.forEach(url => {
                const img = document.createElement("img");
                img.src = url;
                img.style.width = "200px";
                fragment.appendChild(img);
            });
            parent.appendChild(fragment);
        }
    }, 5000);
});

//для логина перевірка

const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const login = document.getElementById("login").value.trim();
        const phone = document.getElementById("phone").value.trim();

        let isValid = true;

        
        const emailReg = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const loginReg = /^[A-Za-z][A-Za-z0-9_-]{3,20}$/;
        const phoneReg = /^\+380\d{9}$/;

        
        document.getElementById("emailError").textContent =
            email.match(emailReg) ? "" : "Некоректний email!";
        isValid = isValid && email.match(emailReg);

        document.getElementById("loginError").textContent =
            login.match(loginReg) ? "" : "Логін повинен починатися з букви й містити 4–20 символів.";
        isValid = isValid && login.match(loginReg);

        document.getElementById("phoneError").textContent =
            phone.match(phoneReg) ? "" : "Телефон має бути у форматі +380XXXXXXXXX";
        isValid = isValid && phone.match(phoneReg);

        if (isValid) {
            alert("Успішна авторизація!\nДані введені правильно.");
        }
    });
}


});

login = login.replace(/^\s+|\s+$/g, '');  
login = login.replace(/[^A-Za-z0-9_-]/g, '');


//спільні слова завд4:


function comparePhrases() {
            
  const phrase1 = document.getElementById('phrase1').value;
  const phrase2 = document.getElementById('phrase2').value;

            
  function getWords(phrase) {
    return phrase
      .toLowerCase()  
      .replace(/[^\w\s]/g, '')  
      .split(/\s+/);  
    }

            
  const set1 = new Set(getWords(phrase1));
  const set2 = new Set(getWords(phrase2));

            
  const commonWords = [...set1].filter(word => set2.has(word));

            
  if (commonWords.length > 0) {
    document.getElementById('result').textContent = "Спільні слова: " + commonWords.join(", ");
  } else {
    document.getElementById('result').textContent = "Немає спільних слів.";
  }
}
    



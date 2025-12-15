// Ініціалізація канваса і контексту
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Розміри та початкові налаштування гри
const gridSize = 20;
const canvasSize = 400;
let snake = [{ x: 160, y: 160 }];
let direction = { x: gridSize, y: 0 };
let food = generateFood();
let score = 0;

// Зображення для монетки
const coinImage = new Image();
coinImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/UAH20-2018-A.png/500px-UAH20-2018-A.png'; // Вставте URL до вашого зображення PNG монетки

// Обробка натискання клавіш
let keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});
window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Функція для генерування випадкової позиції для монетки
function generateFood() {
    const x = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    const y = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    return { x, y };
}

// Функція для оновлення гри
function update() {
    if (keys['ArrowUp'] && direction.y === 0) direction = { x: 0, y: -gridSize };
    if (keys['ArrowDown'] && direction.y === 0) direction = { x: 0, y: gridSize };
    if (keys['ArrowLeft'] && direction.x === 0) direction = { x: -gridSize, y: 0 };
    if (keys['ArrowRight'] && direction.x === 0) direction = { x: gridSize, y: 0 };

    // Оновлення позиції змійки
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    // Перевірка на зіткнення з їжею
    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        score += 10;
    } else {
        snake.pop();
    }

    // Перевірка на зіткнення зі стінами або самим собою
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize || isCollision(head)) {
        resetGame();
    }
}

// Функція для перевірки зіткнення зі своїм тілом
function isCollision(head) {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) return true;
    }
    return false;
}

// Функція для малювання змійки та їжі
function draw() {
    drawBackground();

    // Змійка
    ctx.fillStyle = "#4CAF50";
    for (let part of snake) {
        ctx.fillRect(part.x, part.y, gridSize, gridSize);
    }

    // Монетка
    ctx.drawImage(coinImage, food.x, food.y, gridSize, gridSize);

    // Рахунок
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("Рахунок: " + score, 10, 20);
}


// Функція для скидання гри
function resetGame() {
    snake = [{ x: 160, y: 160 }];
    direction = { x: gridSize, y: 0 };
    food = generateFood();
    score = 0;
}

// Основний цикл гри
let lastTime = 0;
const speed = 120; // ЧИМ БІЛЬШЕ — ТИМ ПОВІЛЬНІША ЗМІЙКА (мс)

function gameLoop(time) {
    if (time - lastTime > speed) {
        update();      // рух і логіка
        lastTime = time;
    }

    draw();             // малювання (плавне)
    requestAnimationFrame(gameLoop);
}

// Запуск гри
requestAnimationFrame(gameLoop);

// Запуск гри
gameLoop();

function drawBackground() {
    // Градієнт
    const gradient = ctx.createLinearGradient(0, 0, canvasSize, canvasSize);
    gradient.addColorStop(0, "#25b0cfff");
    gradient.addColorStop(1, "#2a5298");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    // Сітка
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;

    for (let i = 0; i < canvasSize; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvasSize);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvasSize, i);
        ctx.stroke();
    }
}

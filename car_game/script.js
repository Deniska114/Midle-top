const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


const carImg = new Image();
carImg.src = "images/car.png";

const obstacleImg = new Image();
obstacleImg.src = "images/obstacle.png";


const car = {
  x: 170,
  y: 500,
  width: 60,
  height: 80,
  speed: 6
};


let obstacle = {
  x: Math.random() * 340,
  y: -100,
  width: 60,
  height: 80,
  speed: 4
};

let score = 0;
let gameOver = false;


document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && car.x > 0) {
    car.x -= car.speed;
  }
  if (e.key === "ArrowRight" && car.x < canvas.width - car.width) {
    car.x += car.speed;
  }
});


function drawCar() {
  ctx.drawImage(carImg, car.x, car.y, car.width, car.height);
}


function drawObstacle() {
  ctx.drawImage(obstacleImg, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}


function checkCollision() {
  if (
    car.x < obstacle.x + obstacle.width &&
    car.x + car.width > obstacle.x &&
    car.y < obstacle.y + obstacle.height &&
    car.y + car.height > obstacle.y
  ) {
    gameOver = true;
  }
}


function gameLoop() {
  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("GAME OVER", 100, 300);
    ctx.fillText("Score: " + score, 130, 340);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCar();
  drawObstacle();

  obstacle.y += obstacle.speed;


  if (obstacle.y > canvas.height) {
    obstacle.y = -100;
    obstacle.x = Math.random() * 340;
    score++;
  }

  checkCollision();


  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 30);

  requestAnimationFrame(gameLoop);
}


carImg.onload = () => {
  gameLoop();
};


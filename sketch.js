function setup() {
  createCanvas(windowWidth, windowHeight); /*Selecciona toda la pantalla*/
  frameRate(60);
  background(0);
  rectMode(CENTER); /*Mouse en el centro del cuadrado*/
}

function draw() {
  background(10, 50, 100);
  fill(20, 250, 40); /*Color de cada objeto*/
  circle(mouseX + 100, mouseY, mouseX); /*2 primeros números coordenada*/
  fill(250, 200, 20);
  rect(mouseX, mouseY, 80, 150, 50, 50, 20, 20, 5, 5);
}

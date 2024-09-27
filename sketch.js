//function setup() {
//createCanvas(windowWidth, windowHeight); /*Selecciona toda la pantalla*/
//frameRate(60);
//background(0);
//rectMode(CENTER); /*Mouse en el centro del cuadrado*/
//}

//function draw() {
//background(10, 50, 100, 50);
//trokeWeight(5);
//fill(20, 250, 40); /*Color de cada objeto*/
//circle(mouseX + 100, mouseY, mouseX); /*2 primeros números coordenada*/
//stroke(255, 250, 250);
//fill(255, 250, 250);
//rect(mouseX, mouseY, 80, 150, 50, 50, 20, 20, 5, 5);
//}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
  rectMode(CENTER);
}
//A black line connecting two spheres. The scene spins slowly

function draw() {
  background(25, 25, 25);

  rotateY(mouseY * 0.01); /*Disminuya la velocidad*/
  rotateX(mouseY * 0.01);

  //stroke(25, 250, 250);
  //fill(255, 250, 25);
  //sphere(50); /*Esfera grande*/

  // Rotate around the y-axis.
  translate(75, 50, 25);
  rotateY(frameCount * 0.02); /*Disminuya la velocidad*/
  translate(75, 0, 0);

  // Draw the bottom-right sphere.
  strokeWeight(1);
  fill(247, 154, 211);
  stroke(45, 44, 45);
  sphere(75);

  noFill(); /*Elipse*/
  stroke(247, 199, 219);
  strokeWeight(5);
  rotateX(HALF_PI); /* Alinearlos horizontalmente*/
  ellipse(0, 0, 300, 300);

  //stroke(255, 250, 250); /*Línea*/
  //fill(255, 250, 250);
  //rect(mouseX, mouseY, 80, 150, 50, 50, 20, 20, 5, 5);

  push(); // 2D, Investigar, Cursor

  resetMatrix(); // Restablece la matriz
  translate(-width / 2, -height / 2); // Mueve el origen al inicio
  noStroke();
  fill(247, 140, 211);
  circle(mouseX, mouseY, mouseX / 5);

  pop();
}

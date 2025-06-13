// Variáveis para o movimento do rio
let riverX = 0;
let riverY = 300;
let waterSpeed = 1;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 235); // Céu azul claro
  
  // Desenho das montanhas (campo)
  drawMountains();
  
  // Desenho do campo
  drawField();

  // Desenho do rio fluindo
  drawRiver();

  // Desenho das árvores na beira do rio
  drawTrees();

  // Desenho da cidade
  drawCity();

  // Desenho do oceano
  drawOcean();

  // Texto explicativo
  fill(0);
  textSize(16);
  text("Os rios tem grande importancia na vida da sociedade, tanto para tranporte como para alimentação", 10, 20);
  text( 600, 380);
}

// Função para desenhar as montanhas
function drawMountains() {
  fill(169, 169, 169); // Cor das montanhas (cinza)
  triangle(0, height, 200, 100, 400, height); // Montanha 1
  triangle(200, height, 500, 50, 800, height); // Montanha 2
}

// Função para desenhar o campo
function drawField() {
  fill(34, 139, 34); // Cor do campo (verde)
  rect(0, height - 100, width, 100); // Campo

  // Algumas colinas suaves no campo
  noStroke();
  fill(60, 179, 113); // Verde mais suave
  ellipse(200, height - 120, 200, 80); // Colina
  ellipse(600, height - 120, 250, 100); // Colina
}

// Função para desenhar o rio
function drawRiver() {
  fill(70, 130, 180); // Cor da água (azul clara)
  noStroke();
  beginShape();
  vertex(riverX, riverY);
  
  // Criando o movimento do rio com uma linha curva
  for (let i = riverX; i < width; i += 10) {
    let offset = sin(i * 0.05) * 10; // Movimento ondulado do rio
    vertex(i, riverY + offset);
  }
  
  vertex(width, height - 100); // Termina no final do campo
  vertex(0, height - 100); // Fecha a forma do rio
  endShape(CLOSE);
  
  // Faz o rio "fluir" (movimento da água)
  riverX += waterSpeed;
  if (riverX > width) {
    riverX = 0;
  }
}

// Função para desenhar as árvores
function drawTrees() {
  fill(34, 139, 34); // Cor das folhas (verde)
  
  // Árvore 1
  ellipse(150, 270, 40, 40);
  rect(145, 290, 10, 40); // Tronco
  
  // Árvore 2
  ellipse(400, 270, 40, 40);
  rect(395, 290, 10, 40); // Tronco
  
  // Árvore 3
  ellipse(650, 270, 40, 40);
  rect(645, 290, 10, 40); // Tronco
}

// Função para desenhar a cidade
function drawCity() {
  fill(169, 169, 169); // Cor dos edifícios (cinza)
  
  // Edifícios da cidade
  rect(500, 180, 60, 120); // Edifício 1
  rect(570, 150, 50, 150); // Edifício 2
  rect(640, 170, 40, 130); // Edifício 3
  
  // Detalhes nos edifícios
  fill(0);
  rect(510, 200, 10, 20); // Janela 1
  rect(580, 180, 10, 20); // Janela 2
  rect(650, 190, 10, 20); // Janela 3
}

// Função para desenhar o oceano
function drawOcean() {
  fill(70, 130, 180); // Cor do oceano (azul)
  noStroke();
  beginShape();
  vertex(width, height - 100);
  vertex(width, height);
  for (let i = width; i > 0; i -= 10) {
    let offset = sin(i * 0.05) * 5; // Ondas no oceano
    vertex(i, height - 100 + offset);
  }
  vertex(0, height);
  vertex(0, height - 100);
  endShape(CLOSE);
}
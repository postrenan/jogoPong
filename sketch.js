let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let xRaquete = 5;
let yRaquete = 150;

let xRaqueteOp = 585;
let yRaqueteOp = 150;
let velocidadeYOp;

let raqueteComprimento = 10;
let raqueteAltura = 90;

let chanceDeErrar = 5;

let colidiu = false;


let velocidadeXbolinha = 15;
let velocidadeYbolinha = 5;


let meusPontos = 0;
let pontosOp = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha(); 
  mostraRaquete(xRaquete, yRaquete);
  movimentaBolinha();
  verificaColisao();
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoMinhaRaqueteBiblioteca(xRaqueteOp, yRaqueteOp);
  mostraRaquete(xRaqueteOp, yRaqueteOp);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  
  
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete +raqueteAltura && yBolinha + raio > yRaquete ){
    velocidadeXbolinha *= -1;
  }
}

function mostraRaquete(x ,y){
  rect(x, y, raqueteComprimento,raqueteAltura);
}


function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function mostraBolinha(){
   circle(xBolinha -6, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function verificaColisao(){
   if ( xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXbolinha *= -1;
  }
  if ( yBolinha + raio > height|| yBolinha - raio < 0){
    velocidadeYbolinha *= -1;
  } 
}

function colisaoMinhaRaqueteBiblioteca(x , y){
  colidiu = collideRectCircle(x,y,raqueteComprimento +12,raqueteAltura,xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXbolinha *= -1;
  }
}

function   movimentaRaqueteOponente(){
  velocidadeYOp = yBolinha - yRaqueteOp - raqueteComprimento/2 -20;
  yRaqueteOp+= velocidadeYOp + 30 ;
  /*
   if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
  */
  
  
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255)
  text(pontosOp, 470, 26)
}

function marcaPonto(){
  if(xBolinha > 592){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosOp += 1;
  } 
}
        
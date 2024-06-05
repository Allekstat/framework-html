
try
{

//
//
// -constantes-
//
//

const TELA_PROPORCAO = 4 / 3;
const TELA_ESCALA    = 600;

const TELA_LARGURA = TELA_ESCALA * TELA_PROPORCAO;
const TELA_ALTURA  = TELA_ESCALA;

const DOM_ELEMENTO = document.createElement("canvas");
const DOM_CONTEXTO = DOM_ELEMENTO.getContext("2d");

const COR_PRETO    = "#000000FF";
const COR_BRANCO   = "#FFFFFFFF";

const COR_VERMELHO = "#FF0000FF";
const COR_VERDE    = "#00FF00FF";
const COR_AZUL     = "#0000FFFF";

const COR_CIANO    = "#00FFFFFF";
const COR_AMARELO  = "#FFFF00FF";
const COR_MAGENTA  = "#FF00FFFF";

//
// -utils-
//

const PI     = Math.PI;
const SENO   = Math.sin;
const COSENO = Math.cos;

//
//
// -definições iniciais do canvas-
//
//

function DOM_SETUP()
{
  DOM_ELEMENTO.width  = TELA_LARGURA;
  DOM_ELEMENTO.height = TELA_ALTURA;
  DOM_ELEMENTO.style.width  = TELA_LARGURA;
  DOM_ELEMENTO.style.height = TELA_ALTURA;

  DOM_ELEMENTO.style.display = "fixed";
  DOM_ELEMENTO.style.border = "1px solid black";

  // a anti-suavização de pixels é imperfeita
  //DOM_ELEMENTO.style.imageRendering = "pixelated";
}

function DOM_INIT()
{
  document.body.appendChild(DOM_ELEMENTO);
}

//
//
// -funções para desenhar no canvas-
//
//
// -fazer: shapes, vetor xy, curvas, imagens, texto-
//

function CTX_LINHA(x_1, y_1, x_2, y_2, cor = "#000000FF", largura = 1)
{
  DOM_CONTEXTO.lineWidth = largura;
  DOM_CONTEXTO.strokeStyle = cor;
  DOM_CONTEXTO.beginPath();
  DOM_CONTEXTO.moveTo(x_1, y_1);
  DOM_CONTEXTO.lineTo(x_2, y_2);
  DOM_CONTEXTO.stroke();
}

function CTX_RETANGULO(x_1, y_1, x_2, y_2, cor_preenchimento = "#000000FF", cor_borda = "#00000000", largura_linha = 1)
{
  DOM_CONTEXTO.lineWidth = largura_linha;
  DOM_CONTEXTO.fillStyle = cor_preenchimento;
  DOM_CONTEXTO.strokeStyle = cor_borda;
  DOM_CONTEXTO.beginPath();
  DOM_CONTEXTO.rect(x_1, y_1, x_2 -x_1, y_2 -y_1);
  // x2y2 define onde acaba o retângulo, ao invés do tamanho
  DOM_CONTEXTO.fill();
  DOM_CONTEXTO.stroke();
}

function CTX_CIRCULO(centro_x, centro_y, raio, cor_preenchimento = "#000000FF", cor_borda = "#00000000", largura_linha = 1)
{
  DOM_CONTEXTO.lineWidth = largura_linha;
  DOM_CONTEXTO.fillStyle = cor_preenchimento;
  DOM_CONTEXTO.strokeStyle = cor_borda;
  DOM_CONTEXTO.beginPath();
  DOM_CONTEXTO.ellipse(centro_x, centro_y, raio, raio, 0, 0, 2* Math.PI);
  // aspect_ratio deixa a elipse mais larga
  DOM_CONTEXTO.fill();
  DOM_CONTEXTO.stroke();
}

function CTX_TRIANGULO(x_1, y_1, x_2, y_2, x_3, y_3, cor_preenchimento = "#000000FF", cor_borda = "#00000000", largura_linha = 1)
{
  DOM_CONTEXTO.lineWidth = largura_linha;
  DOM_CONTEXTO.fillStyle = cor_preenchimento;
  DOM_CONTEXTO.strokeStyle = cor_borda;
  DOM_CONTEXTO.beginPath();
  DOM_CONTEXTO.moveTo(x_1, y_1);
  DOM_CONTEXTO.lineTo(x_2, y_2);
  DOM_CONTEXTO.lineTo(x_3, y_3);
  DOM_CONTEXTO.closePath();
  DOM_CONTEXTO.fill();
  DOM_CONTEXTO.stroke(); 
}

//
//
// -demonstração-
//
//

function MAIN_START()
{
  DOM_SETUP();
  DOM_INIT();
  MAIN_LOOP();
}

function MAIN_LOOP(timestamp)
{
  let A = timestamp /1e2;
  CTX_RETANGULO(0, 0, 800, 450, COR_BRANCO);
  CTX_LINHA(0, 225, 800, 225, COR_PRETO, 2);
  CTX_LINHA(400, 0, 400, 450, COR_PRETO, 2);
  CTX_CIRCULO(timestamp /1e2, 225 +100* SENO(PI /2 *timestamp /1e3), 1, COR_VERMELHO);
  CTX_TRIANGULO(TELA_LARGURA/2 +100* SENO( A      * PI/2/90), TELA_ALTURA/2 -100* COSENO( A      * PI/2/90),
            TELA_LARGURA/2 +100* SENO((A +120)* PI/2/90), TELA_ALTURA/2 -100* COSENO((A +120)* PI/2/90),
            TELA_LARGURA/2 +100* SENO((A +240)* PI/2/90), TELA_ALTURA/2 -100* COSENO((A +240)* PI/2/90));

  requestAnimationFrame(MAIN_LOOP);
}

MAIN_START();

}
catch(e)
{
  alert(e.message);
  // mostrar erros que geram exceções
}


//
//
// -definições iniciais do canvas-
//
//

function DOM_INIT()
{
  document.body.appendChild(DOM_ELEMENTO);
}

function DOM_SETUP()
{
  DOM_ELEMENTO.width  = TELA_LARGURA;
  DOM_ELEMENTO.height = TELA_ALTURA;
  DOM_ELEMENTO.style.width  = TELA_LARGURA;
  DOM_ELEMENTO.style.height = TELA_ALTURA;

  DOM_ELEMENTO.style.display = "fixed";
  DOM_ELEMENTO.style.border  = "1px solid black";

  // a anti-suavização de pixels é imperfeita
  //DOM_ELEMENTO.style.imageRendering = "pixelated";
}

function MAIN_LOOP(timestamp)
{
  requestAnimationFrame(MAIN_LOOP);
}

function MAIN_START()
{
  DOM_INIT();
  DOM_SETUP();
  MAIN_LOOP();
}

export {DOM_INIT, DOM_SETUP, MAIN_LOOP, MAIN_START};

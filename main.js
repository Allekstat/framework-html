
import * from "pacote.js";

try
{

//
//
// -demonstração-
//
//

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


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

const COR_PRETO    = 0x000000ff;
const COR_BRANCO   = 0xffffffff;

const COR_VERMELHO = 0xff0000ff;
const COR_VERDE    = 0x00ff00ff;
const COR_AZUL     = 0x0000ffff;

const COR_CIANO    = 0x00ffffff;
const COR_AMARELO  = 0xffff00ff;
const COR_MAGENTA  = 0xff00ffff;

const MAT_PI       = Math.PI;
const MAT_SENO     = Math.sin;
const MAT_COSENO   = Math.cos;

export {TELA_PROPORCAO, TELA_ESCALA, TELA_LARGURA, TELA_ALTURA, DOM_ELEMENTO, DOM_CONTEXTO, COR_PRETO, COR_BRANCO, COR_VERMELHO, COR_VERDE, COR_AZUL, COR_CIANO, COR_AMARELO, COR_MAGENTA, MAT_PI, MAT_SENO, MAT_COSENO};

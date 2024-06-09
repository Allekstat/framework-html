
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
  DOM_CONTEXTO.ellipse(centro_x, centro_y, raio, raio, 0, 0, 2* PI);
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

function HEX_RGBA(vermelho = 0, verde = 0, azul = 0, opacidade = 1)
{
  function int(decimal)
  {
    return Number.parseInt(decimal);
  }

  function min(numero)
  {
    if(numero < 0) return 0;
    return numero;
  }

  let hexadecimal  = int(min(vermelho  * 256 - 1)) * 16777216;
  hexadecimal     += int(min(verde     * 256 - 1)) * 65536;
  hexadecimal     += int(min(azul      * 256 - 1)) * 256;
  hexadecimal     += int(min(opacidade * 256 - 1));
  return "#" + hexadecimal.toString(16);
}

export {CTX_LINHA, CTX_RETANGULO, CTX_CIRCULO, CTX_TRIANGULO, HEX_RGBA};

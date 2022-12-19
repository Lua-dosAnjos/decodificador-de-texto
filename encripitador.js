
var botaoEncriptar = document.getElementById("button-criptografar");
var botaoDesencriptar = document.getElementById("button-descriptografar");
var botaoLimpar = document.getElementById("button-limpar")
var botaoCopiar = document.getElementById('copiar-texto')
var boxTexto = document.getElementById('box-texto')
var paragrafoResposta = document.getElementById('texto-final')

function encriptar() {
    if (boxTexto.value.length<1){
        limparTexto()
    }
    else{
        var textoModificado = document.getElementById('texto-modificado')
        textoModificado.style.display = 'block';
        var textoVazio = document.getElementById('texto-vazio');
        textoVazio.style.display = 'none';
        paragrafoResposta.innerText = '';
        var textoBase = boxTexto.value;
        textoBase = textoBase.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat')
        paragrafoResposta.append(textoBase)
    }

}

function descriptografar() {
    if (boxTexto.value.length<1){
        limparTexto()
    }
    else{
    var textoModificado = document.getElementById('texto-modificado')
    textoModificado.style.display = 'block';
    var textoVazio = document.getElementById('texto-vazio');
    textoVazio.style.display = 'none';
    paragrafoResposta.innerText = '';
    var textoBase = boxTexto.value;
    textoBase = textoBase.replaceAll('ufat', 'u').replaceAll('ober', 'o').replaceAll('ai', 'a').replaceAll('imes', 'i').replaceAll('enter', 'e')
    paragrafoResposta.append(textoBase)
    }
}

function limparTexto() {
    paragrafoResposta.innerText = '';
    var textoModificado = document.getElementById('texto-modificado')
    textoModificado.style.display = 'none';
    var textoVazio = document.getElementById('texto-vazio');
    textoVazio.style.display = 'block';
}

function copiarTexto() {
    boxTexto.value = paragrafoResposta.textContent
    boxTexto.select() 
    document.execCommand("copy");
}

botaoEncriptar.onclick = encriptar;
botaoDesencriptar.onclick = descriptografar;
botaoLimpar.onclick = limparTexto;
botaoCopiar.onclick = copiarTexto;

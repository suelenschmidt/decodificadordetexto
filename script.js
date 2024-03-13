function decodificarTexto() {
    var textoCodificado = document.getElementById("textoCodificado").value;
    var textoDecodificado = decodeURIComponent(textoCodificado);
    document.getElementById("textoDecodificado").innerText = textoDecodificado;
}
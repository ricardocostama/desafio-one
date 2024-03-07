const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
 


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensagem.value);
    mensagem.value = textoDesencriptado;
}

function btnCopiar() {
    const copiar = document.querySelector(".mensagem");
    copiar.select();
    copiar.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiar.value);
    alert("O texto copiado foi: " + copiar.value);
} 

function encriptar(stringEncriptada) {
    const matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
    stringEncriptada = stringEncriptada.toLowerCase();
  
    matrizCodigo.forEach((_, index) => {
      if (stringEncriptada.includes(matrizCodigo[index][0])) {
        stringEncriptada = stringEncriptada.replaceAll(
          matrizCodigo[index][0],
          matrizCodigo[index][1]
        );
      }
    });
  
    return stringEncriptada;
  }


  function desencriptar(stringDesencriptada) {
    const matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();
  
    matrizCodigo.forEach((_, index) => {
      if (stringDesencriptada.includes(matrizCodigo[index][0])) {
        stringDesencriptada = stringDesencriptada.replaceAll(
          matrizCodigo[index][1],
          matrizCodigo[index][0]
        );
      }
    });
  
    return stringDesencriptada;
  }


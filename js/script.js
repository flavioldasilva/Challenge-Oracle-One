var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#saida-texto");

function criptografar() {
    
  var texto = textInput.value;
  
    //Divide texto em array de strings com 18 caracteres cada
    var resultadoCriptografia = texto.match(/.{1,18}/g);
  
    //Junta as strings com o caractere de quebra de linha
    resultadoCriptografia = resultadoCriptografia.join("\n");
  
    //Substitui as letras 'a', 'b', 'c' e 'e' pelos respectivos caracteres
    resultadoCriptografia = resultadoCriptografia.replace(/a/g, "@").replace(/b/g , "&").replace(/c/g , "¢").replace(/e/g , "#");
  
    //Atualiza o conteúdo da textarea com o resultado
    document.getElementById('saida-texto').innerHTML = '<textarea readonly id="input-texto">' + resultadoCriptografia + 
    '</textarea>' + '<button class="botaoCriptografar" id="copiar" onclick="copiar()">Copiar</button>';
  }
  
  function descriptografar() {
    
    // O processo para a função descriptografar é o mesmo, basta substituir os caracteres pelas letras originais
    var texto = textInput.value;
    var resultadoDescriptografia = texto.match(/.{1,18}/g);
    resultadoDescriptografia = resultadoDescriptografia.join("\n");
    resultadoDescriptografia = resultadoDescriptografia.replace(/@/g, "a").replace(/&/g , "b").replace(/¢/g , "c").replace(/#/g , "e");
  
    document.getElementById('saida-texto').innerHTML = '<textarea readonly id="input-texto">' + resultadoDescriptografia + 
    '</textarea>' + '<button class="botaoDescriptografar" id="copiar" onclick="copiar()">Copiar</button>';
  }
  
function copiar(){
    var copiarTexto = document.getElementById("input-texto");

    copiarTexto.select();
    document.execCommand('Copy');
    alert("Texto Copiado");
}

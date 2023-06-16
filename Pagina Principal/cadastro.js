let dNascimento;
let mNascimento;
let aNascimento;

 dNascimento = prompt("Informe seu dia de nascimento");
 mNascimento = prompt("Informe seu mês de nascimento");
 aNascimento = prompt("Informe seu ano de nascimento");

 if(dNascimento<=19,mNascimento<=6,aNascimento<=2005){
    alert("Autorizado");
 } else{
    alert("Não autorizado");
    window.history.back(); 
 }
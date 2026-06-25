function converter(){
let opcao,valor,total;

opcao=parseInt(document.getElementById("txtopcao").value);
valor=parseFloat(document.getElementById("txtvalor").value);


switch(opcao){
    case 1:
        total=valor/5.20
        resultado.innerHTML="resultado US$ "+total.toFixed(2);
        break;

    case 2:
        total=valor/5.91
        resultado.innerHTML="resultado € "+total.toFixed(2);
        break;

        default:
            resultado.innerHTML="Opção Inválida";
}
}
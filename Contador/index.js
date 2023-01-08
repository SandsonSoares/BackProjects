var valorMaleavel = 0
function executando(condicao){
    let numeroDiplay = document.getElementById("valor")
    if(condicao == 0){
        numeroDiplay.innerHTML = valorMaleavel += 1
        if(valorMaleavel%10 == 0){
            numeroDiplay.style.color ="red"
        }
        else{
            numeroDiplay.style.color ="black"
        }
    }
    else if (condicao == 1 && valorMaleavel > 0){
        numeroDiplay.innerHTML = valorMaleavel -= 1
        if(valorMaleavel%10 == 0 && valorMaleavel > 0){
            numeroDiplay.style.color ="red"
        }
        else{
            numeroDiplay.style.color ="black"
        }
    }
}
function limpar(){
    valorMaleavel = 0
    let numeroDiplay = document.getElementById("valor")
    numeroDiplay.innerHTML = valorMaleavel
    numeroDiplay.style.color ="black"
}
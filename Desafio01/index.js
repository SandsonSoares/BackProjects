function Personalizar(){
    let txt = document.getElementById("txt")
    let CorFundo = document.getElementById("Fundo")
    let CorTexto = document.getElementById("Texto")
    let TxtCard =  document.getElementById("PersonTxt")
    TxtCard.innerHTML = txt.value
    document.getElementById("card").style.backgroundColor = CorFundo.value
    document.getElementById("PersonTxt").style.color = CorTexto.value
}

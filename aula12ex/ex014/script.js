function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/amanhecer.png'
        document.body.style.background = 'rgba(185, 193, 67, 0.791)'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/entardece.png'
        document.body.style.background = 'rgba(33, 142, 182, 0.865)'
    }else {
        img.src = 'imagens/noite.png'
        document.body.style.background = 'rgba(5, 11, 19, 0.865)'
    }
}

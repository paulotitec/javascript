function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'homen'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'foto-bebe-m .png')
            }else if (idade <21){
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade <55){
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src','foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src','foto-bebe-f.png')
            }else if (idade <21){
                img.setAttribute('src','foto-jovem-f.png')
            }else if ( idade <55){
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                img.setAttribute('src','foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formAno.value.lenght == 0 || Number(formAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var formSex = document.getElementsByName('radsex')
    var idade = ano - Number(formAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if(formSex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 1){
            //bb
            img.setAttribute('src', 'bb.png')

        } else if (idade < 10){
            img.setAttribute('src', 'criancamenino.png')

        } else if (idade < 25){
            //Jovem
            img.setAttribute('src', 'meninojovem.png')

        } else if (idade < 60){
            //Adulto
            img.setAttribute('src', 'homemadulto.png')
        } else {
            //Idoso
            img.setAttribute('src', 'senhor.png')
        }
    } else if (formSex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade <= 1){
            //Criança
            img.setAttribute('src', 'bb.png')
        } else if (idade < 10){
            img.setAttribute('src', 'criancamenina.png')

        } else if (idade < 25){
            //Jovem
            img.setAttribute('src', 'meninajovem.png')

        } else if (idade < 60){
            //Adulto
            img.setAttribute('src', 'mulheradulta.png')

        } else {
            //Idoso
            img.setAttribute('src', 'senhora.png')
        }
    }
    res.innerHTML = `A pessoa é: ${genero} com ${idade} anos. `
    res.appendChild(img)
}

}
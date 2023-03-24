
let planets = document.querySelectorAll('.bt')
let p_radii = [60,60,60,60,60,60,60,60,60,60,60,60,60]
let p_radians = new Array(0.05, 0.53, 1.40, 1.47, 1.95, 2.45, 2.90, 3.40, 3.90, 4.40, 4.90, 5.40, 5.85).fill(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)
let p_velocities = [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4,1.4,1.4]
let playPausa = false

setInterval(function () {
    if (!playPausa) {
        planets.forEach(
            (planet, index) => {
                planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`
                planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}vmin`
                p_radians[index] += p_velocities[index] * 0.01
            })
    }
}, 1000 / 30)
let legenda = document.getElementById('legenda')
legenda.innerHTML = ''

let bt1 = document.getElementById('bt1')
bt1.addEventListener('mouseenter',entrarB1)
bt1.addEventListener('mouseout',sair)
function entrarB1(){
    playPausa = true
    legenda.innerHTML += '<p>LIDERANÇA EM SAÚDE E SEGURANÇA</p>'
    legenda.style.backgroundColor += 'rgb(255, 98, 0)'
}

let bt2 = document.getElementById('bt2')
bt2.addEventListener('mouseenter',entrarB2)
bt2.addEventListener('mouseout',sair)
function entrarB2(){
    playPausa = true
    legenda.innerHTML += '<p>INFORMAÇÕES EM SAÚDE, SEGURANÇA E REQUISITOS LEGAIS</p>'
    legenda.style.backgroundColor += 'rgb(255, 98, 0)'
}

let bt3 = document.getElementById('bt3')
bt3.addEventListener('mouseenter',entrarB3)
bt3.addEventListener('mouseout',sair)
function entrarB3(){
    playPausa = true
    legenda.innerHTML += '<p>ANÁLISE E GERENCIAMENTO DE RISCOS E MUDANÇAS</p>'
    legenda.style.backgroundColor += 'rgb(255, 98, 0)'
}

let bt4 = document.getElementById('bt4')
bt4.addEventListener('mouseenter',entrarB4)
bt4.addEventListener('mouseout',sair)
function entrarB4(){
    playPausa = true
    legenda.innerHTML += '<p>PLANEJAMENTO EM SAÚDE E SEGURANÇA</p>'
    legenda.style.backgroundColor += 'rgb(255, 98, 0)'
}

let bt5 = document.getElementById('bt5')
bt5.addEventListener('mouseenter',entrarB5)
bt5.addEventListener('mouseout',sair)
function entrarB5(){
    playPausa = true
    legenda.innerHTML += '<p>DESENVOLVIMENTO COMPORTAMENTAL E CAPACITAÇÃO EM SAÚDE E SEGURANÇA</p>'
    legenda.style.backgroundColor += 'rgb(5, 97, 5)'
}

let bt6 = document.getElementById('bt6')
bt6.addEventListener('mouseenter',entrarB6)
bt6.addEventListener('mouseout',sair)
function entrarB6(){
    playPausa = true
    legenda.innerHTML += '<p>GERENCIAMENTO DE PRESTADORES DE SERVIÇOS</p>'
    legenda.style.backgroundColor += 'rgb(5, 97, 5)'
}

let bt7 = document.getElementById('bt7')
bt7.addEventListener('mouseenter',entrarB7)
bt7.addEventListener('mouseout',sair)
function entrarB7(){
    playPausa = true
    legenda.innerHTML += '<p>COMUNICAÇÃO E CONSULTA</p>'
    legenda.style.backgroundColor += 'rgb(5, 97, 5)'
}

let bt8 = document.getElementById('bt8')
bt8.addEventListener('mouseenter',entrarB8)
bt8.addEventListener('mouseout',sair)
function entrarB8(){
    playPausa = true
    legenda.innerHTML += '<p>CONTROLE OPERACIONAL</p>'
    legenda.style.backgroundColor += 'rgb(5, 97, 5)'
}

let bt9 = document.getElementById('bt9')
bt9.addEventListener('mouseenter',entrarB9)
bt9.addEventListener('mouseout',sair)
function entrarB9(){
    playPausa = true
    legenda.innerHTML += '<p>PROJETO E IMPLANTAÇÃO DE INSTALAÇÕES E PROCESSOS</p>'
    legenda.style.backgroundColor += 'rgb(5, 97, 5)'
}

let bt10 = document.getElementById('bt10')
bt10.addEventListener('mouseenter',entrarB10)
bt10.addEventListener('mouseout',sair)
function entrarB10(){
    playPausa = true
    legenda.innerHTML += '<p>MANUTANÇÃO DA INTEGRIDADE DAS INSTALAÇÕES E EQUIPAMENTOS</p>'
    legenda.style.backgroundColor += 'rgb(5, 97, 5)'
}

let bt11 = document.getElementById('bt11')
bt11.addEventListener('mouseenter',entrarB11)
bt11.addEventListener('mouseout',sair)
function entrarB11(){
    playPausa = true
    legenda.innerHTML += '<p>PREPARAÇÃO E ATENDIMENTO A EMERGÊNCIAS 28</p>'
    legenda.style.backgroundColor += 'rgb(5, 97, 5)'
}

let bt12 = document.getElementById('bt12')
bt12.addEventListener('mouseenter',entrarB12)
bt12.addEventListener('mouseout',sair)
function entrarB12(){
    playPausa = true
    legenda.innerHTML += '<p>INVESTIGAÇÃO DE ACIDENTES E TRATAMENTO DE DESVIOS</p>'
    legenda.style.backgroundColor += 'rgb(1, 1, 221)'
}

let bt13 = document.getElementById('bt13')
bt13.addEventListener('mouseenter',entrarB13)
bt13.addEventListener('mouseout',sair)
function entrarB13(){
    playPausa = true
    legenda.innerHTML += '<p>MONITORAMENTO, AUDITORIAS, INSPEÇÕES E REVISÃO.</p>'
    legenda.style.backgroundColor += 'rgb(1, 1, 221)'
}











function sair(){
    playPausa = false
    legenda.innerHTML = ''
    legenda.style.backgroundColor =''
}


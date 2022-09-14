// Pessoas a serem mostradas (review)

let pessoas = [{
    nome:"Amanda Silverio",
    img:"https://thumbs.dreamstime.com/b/uma-mulher-trabalhando-com-computador-para-projetar-e-programar-mulheres-157948365.jpg",
    cargo:"WEB DEVELOPER",
    resumo:"Programa, codifica e testa sistemas, sites e portais voltados para o ambiente da internet. Executa a manutenção dos sistemas, fazendo eventuais correções necessárias, visando atender às necessidades dos usuários."
},
{
    nome:"Juliano Paiva",
    img:"https://www.brasilcode.com.br/wp-content/uploads/2020/09/Computador-Para-Programar-Como-Escolher.png",
    cargo:"ANALISTA DBA",
    resumo:"Administra servidores de bancos de dados de produção. Identifica riscos de atrasos nos trabalhos. Presta suporte aos usuários, orienta analistas e desenvolvedores na otimização de performance das aplicações referente a área de banco de dados."
},
{
    nome:"Maiky Guilherme",
    img:"https://thumbs.dreamstime.com/b/hacker-de-computador-encapu%C3%A7ado-que-rouba-informa%C3%A7%C3%A3o-com-o-pc-no-fundo-da-sala-escura-114047971.jpg",
    cargo:"DESENVOLVEDOR C#",
    resumo:"Desenvolvem sistemas e aplicações, determinando interface gráfica, critérios ergonômicos de navegação, montagem da estrutura de banco de dados e codificação de programas; projetam, implantam e realizam manutenção de sistemas e aplicações."
},
{
    nome:"Candido Alencar",
    img:"https://img.freepik.com/fotos-gratis/atendimento-ao-cliente-morena-bonitinha-em-terno-de-escritorio-com-computador-e-fone-de-ouvido-sorrindo-alegremente_140725-163862.jpg?w=2000",
    cargo:"DEVOPS JR",
    resumo:"A automação deve ser utilizada de forma inteligente, sendo criada por pessoas e sustentada por processos e pela cultura da empresa. Entretanto, as práticas de DevOps dependem significativamente da automação para garantir entregas frequentes e oportunas entre as plataformas."
}
]

// Selecionando itens

let nome = document.querySelector('.nome')
let cargo = document.querySelector('.cargo')
let resumo = document.querySelector('.resumo')
let img = document.getElementById('imagem')

let btnEsquerda = document.getElementById('esquerda')
let btnDireita = document.getElementById('direita')
let btnSurpresa = document.getElementById('surpresa')

// Item inicial

let itemInicial = 0;

// Carregando item 

addEventListener('DOMContentLoaded',function(){
       mostrarDados(itemInicial)
})

// Função de mostrar a pessoa

function mostrarDados(pessoa){
    const item = pessoas[pessoa]
    img.src = item.img
    nome.textContent = item.nome
    cargo.textContent = item.cargo
    resumo.textContent = item.resumo    
}

// Mostrar proxima pessoa

btnDireita.addEventListener('click', function(){
    itemInicial++
    if(itemInicial > pessoas.length - 1){
        itemInicial = 0
    }
    mostrarDados(itemInicial)
})

// Mostrar pessoa anterior

btnEsquerda.addEventListener('click', function(){
    itemInicial--
    if(itemInicial < 0){
        itemInicial = pessoas.length - 1
    }
    mostrarDados(itemInicial)
})

// Mostrar pessoas surpresa

btnSurpresa.addEventListener('click', function(){
   itemInicial = Math.floor(Math.random() * pessoas.length)
   mostrarDados(itemInicial)
})

/* Tratados no site = 
objetos
DOMContentLoaded
addEventListener()
array.length
textContent
*/
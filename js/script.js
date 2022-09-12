let pessoas = [{
    nome:"Amanda Silverio",
    img:"/img/mulhertrabalho.jpg",
    cargo:"WEB DEVELOPER",
    resumo:"Programa, codifica e testa sistemas, sites e portais voltados para o ambiente da internet. Executa a manutenção dos sistemas, fazendo eventuais correções necessárias, visando atender às necessidades dos usuários."
},
{
    nome:"Juliano Paiva",
    img:"/img/homemfelizlaptop.jpg",
    cargo:"ANALISTA DBA",
    resumo:"Administra servidores de bancos de dados de produção. Identifica riscos de atrasos nos trabalhos. Presta suporte aos usuários, orienta analistas e desenvolvedores na otimização de performance das aplicações referente a área de banco de dados."
},
{
    nome:"Maiky Guilherme",
    img:"/img/homemtrabalhando.jpg",
    cargo:"DESENVOLVEDOR C#",
    resumo:"Desenvolvem sistemas e aplicações, determinando interface gráfica, critérios ergonômicos de navegação, montagem da estrutura de banco de dados e codificação de programas; projetam, implantam e realizam manutenção de sistemas e aplicações."
},
{
    nome:"Candido Alencar",
    img:"/img/homemlaptop.jpg",
    cargo:"DEVOPS JR",
    resumo:"A automação deve ser utilizada de forma inteligente, sendo criada por pessoas e sustentada por processos e pela cultura da empresa. Entretanto, as práticas de DevOps dependem significativamente da automação para garantir entregas frequentes e oportunas entre as plataformas."
}
]

let nome = document.querySelector('.nome')
let cargo = document.querySelector('.cargo')
let resumo = document.querySelector('.resumo')

let btnEsquerda = document.getElementById('esquerda')
let btnDireita = document.getElementById('direita')

btnDireita.addEventListener('click', function(){

    for(let i = 0; i < pessoas.length; i++)
    console.log(pessoas[0].nome)

    nome.textContent = pessoas[1].nome
    // cargo.textContent = pessoa[2]
    // resumo.textContent = pessoa[3]
})


/* Tratados no site = 
objetos
DOMContentLoaded
addEventListener()
array.length
textContent
*/
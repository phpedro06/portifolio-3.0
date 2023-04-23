function lightOn() {
    $(".iItem").css("color","var(--branco)")
    $(".iCor").css("color","var(--azul)").css("filter","drop-shadow(0px 0px 7px var(--azul))")
    $(".iImg").css("filter","saturate(100%) drop-shadow(0px 0px 20px var(--cinzaclaro))")
    $(".dText1").css("color","var(--branco)")
    $(".dText1-1").css("text-decoration","underline").css("color","var(--azul)")
    $(".habilidades1-1").css("background-color","var(--azul)").css("filter","drop-shadow(0px 0px 10px var(--azul2))").css("width","100%")
    $(".habilidades1-2").css("display","flex").css("color","var(--azul)").css("filter","drop-shadow(0px 0px 7px var(--azul))")
    $(".habilidades1-3").css("color","rgb(223, 138, 0)").css("filter","drop-shadow(0px 0px 10px rgba(223, 138, 0, 0.683))")
    $(".habilidades2-1").css("background-color","var(--azul)").css("filter","drop-shadow(0px 0px 10px var(--azul2))").css("width","90%")
    $(".habilidades2-2").css("display","flex").css("color","var(--azul)").css("filter","drop-shadow(0px 0px 7px var(--azul))")
    $(".habilidades2-3").css("color","rgb(0, 136, 255)").css("filter","drop-shadow(0px 0px 10px rgba(0, 136, 255))")
    $(".habilidades3-1").css("background-color","var(--azul)").css("filter","drop-shadow(0px 0px 10px var(--azul2))").css("width","90%")
    $(".habilidades3-2").css("display","flex").css("color","var(--azul)").css("filter","drop-shadow(0px 0px 7px var(--azul))")
    $(".habilidades3-3").css("color","rgb(115, 0, 255)").css("filter","drop-shadow(0px 0px 10px rgba(115, 0, 255))")
    $(".habilidades4-1").css("background-color","var(--azul)").css("filter","drop-shadow(0px 0px 10px var(--azul2))").css("width","30%")
    $(".habilidades4-2").css("display","flex").css("color","var(--azul)").css("filter","drop-shadow(0px 0px 7px var(--azul))").css("left","72.5%")
    $(".habilidades4-3").css("color","rgb(255, 221, 0)").css("filter","drop-shadow(0px 0px 10px rgba(255, 221, 0, 0.596))")
    $(".habilidades5-1").css("background-color","var(--azul)").css("filter","drop-shadow(0px 0px 10px var(--azul2))").css("width","5%")
    $(".habilidades5-2").css("display","flex").css("color","var(--azul)").css("filter","drop-shadow(0px 0px 7px var(--azul))").css("left","98.2%")
    $(".habilidades5-3").css("color","rgb(0, 102, 255)").css("filter","drop-shadow(0px 0px 10px rgba(0, 102, 255))")
    $(".prjText1").css("color","var(--branco)")
    $(".prjText1-1").css("text-decoration","underline").css("color","var(--azul)")
}

function lightOff() {
    $(".iItem").css("color","var(--cinzaclarinho)")
    $(".iCor").css("color","var(--cinzaclarinho)").css("filter","none")
    $(".iImg").css("filter","saturate(0%)")
    $(".nav-main").css("display","none")
    $(".hIcon1").css("display","block")
    $(".hIcon2").css("display","none")
    $(".dText1").css("color","var(--cinzaclarinho)")
    $(".dText1-1").css("text-decoration","none").css("color","var(--cinzaclarinho)")
    $(".habilidades1-1").css("background-color","var(--azul)").css("filter","none").css("width","0%")
    $(".habilidades1-2").css("display","none").css("color","var(--azul)").css("filter","none")
    $(".habilidades1-3").css("color","var(--cinzaclarinho)").css("filter","none")
    $(".habilidades2-1").css("background-color","var(--azul)").css("filter","none").css("width","0%")
    $(".habilidades2-2").css("display","none").css("color","var(--azul)").css("none")
    $(".habilidades2-3").css("color","var(--cinzaclarinho)").css("filter","none")
    $(".habilidades3-1").css("background-color","var(--azul)").css("filter","none").css("width","0%")
    $(".habilidades3-2").css("display","none").css("color","var(--azul)").css("filter","none")
    $(".habilidades3-3").css("color","var(--cinzaclarinho)").css("filter","none")
    $(".habilidades4-1").css("background-color","var(--azul)").css("filter","none").css("width","0%")
    $(".habilidades4-2").css("display","none").css("color","var(--azul)").css("filter","none")
    $(".habilidades4-3").css("color","var(--cinzaclarinho)").css("filter","none")
    $(".habilidades5-1").css("background-color","var(--azul)").css("filter","none").css("width","0%")
    $(".habilidades5-2").css("display","none").css("color","var(--azul)").css("filter","none")
    $(".habilidades5-3").css("color","var(--cinzaclarinho)").css("filter","none")
    $(".prjText1").css("color","var(--cinzaclarinho)")
    $(".prjText1-1").css("text-decoration","none").css("color","var(--cinzaclarinho)")
}

function navOpen() {
    $(".nav-main").css("display","flex").css("opacity","0%")
        setTimeout(() => {
            $(".nav-main").css("display","flex").css("opacity","100%")
        }, 50);
    $(".hIcon1").css("display","none")
    $(".hIcon2").css("display","block")
}

function navClose() {
    $(".nav-main").css("display","none")
    $(".hIcon1").css("display","block")
    $(".hIcon2").css("display","none")
}

function toClaro() {
    $(".nButton3").css("display","none")
    $(".nButton5").css("display","flex")
    $(":root").css("--cinzafundo","#fff").css("--cinzaclaro","#c7c7c7").css("--cinzamaisclaro","#a8a8a8").css("--preto","#fff").css("--branco","#000")
}

function toEscuro() {
    $(".nButton3").css("display","flex")
    $(".nButton5").css("display","none")
    $(":root").css("--cinzafundo","#111").css("--cinzaclaro","#1f1f1f").css("--cinzamaisclaro","#2e2e2e").css("--preto","#000").css("--branco","#fff")
}

function toEng() {
    $(".nButton4").css("display","none")
    $(".nButton6").css("display","flex")
    document.getElementById('textm1').innerHTML = `Hello, <b class="iCor">welcome</b> to my <b class="iCor">portifolio</b>`
    document.getElementById('textm2').innerHTML = `My name is <b class="iCor">Pedro Henrique</b>, i´m a developer arround <b class="iCor">a year</b>`
    document.getElementById('textm3').innerHTML = `Show more`
    document.getElementById('textm4').innerHTML = `My <span class="dText1-1">habilities</span>`
    document.getElementById('textm5').innerHTML = `My <span class="prjText1-1">projects</span>`
}

function toPtbr() {
    $(".nButton4").css("display","flex")
    $(".nButton6").css("display","none")
    document.getElementById('textm1').innerHTML = `Olá, <b class="iCor">seja bem vindo</b> ao meu <b class="iCor">portifolio</b>`
    document.getElementById('textm2').innerHTML = `Meu nome é <b class="iCor">Pedro Henrique</b>, sou dev a mais ou menos <b class="iCor">1 ano</b>`
    document.getElementById('textm3').innerHTML = `Conheça mais`
    document.getElementById('textm4').innerHTML = `Minhas <span class="dText1-1">habilidades</span>`
    document.getElementById('textm5').innerHTML = `Meus <span class="prjText1-1">projetos</span>`
}

function abrirTudo() {
    $(".div1-main").css("display","flex")
    $(".projects-main").css("display","flex")
    $("footer").css("display","flex")
}

if (window.innerWidth <= 1000) {
    document.getElementById("rRes").onclick = null;
  }

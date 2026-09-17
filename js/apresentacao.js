/* =====================================================================
   COMPORTAMENTO DA APRESENTAÇÃO
   Este arquivo faz três coisas:
   1. Liga o reveal.js com as nossas configurações
   2. Monta o rodapé com o indicador de seção em cada slide
   3. Controla os vídeos (tocar, expandir, recolher) a partir dos cliques
   ===================================================================== */


/* ---------- Seções da apresentação ----------------------------------
   A ordem aqui define a trilha do rodapé. Cada <section> do index.html
   indica a sua seção pelo atributo data-secao="..." com o mesmo nome. */
const SECOES = [
  "Introdução",
  "Referencial teórico",
  "Metodologia",
  "Delinéia",
  "Resultados e discussão",
  "Considerações finais"
];


/* ---------- 1. Rodapé -------------------------------------------- */
function montarRodapes() {
  const slides = document.querySelectorAll(".reveal .slides > section");

  slides.forEach((slide, posicao) => {
    if (slide.dataset.rodape === "nao") return;

    const secaoAtual = SECOES.indexOf(slide.dataset.secao);
    const trilha = SECOES.map((_, i) => {
      let classe = "";
      if (i < secaoAtual) classe = "passada";
      if (i === secaoAtual) classe = "atual";
      return `<span class="${classe}"></span>`;
    }).join("");

    const rodape = document.createElement("div");
    rodape.className = "rodape";
    rodape.innerHTML = `
      <div class="rodape-secao">
        <div class="rodape-trilha">${trilha}</div>
        <div>${slide.dataset.secao || ""}</div>
      </div>
      <div class="rodape-numero">${posicao + 1}</div>`;

    slide.querySelector(".quadro").appendChild(rodape);
  });
}


/* ---------- 2. Vídeo --------------------------------------------- */
function videoDoSlide(slide) {
  return slide ? slide.querySelector(".janela-video video") : null;
}

function expandir(slide, ligar) {
  const janela = slide.querySelector(".janela-video");
  const veu = slide.querySelector(".veu");
  if (!janela) return;
  janela.classList.toggle("expandida", ligar);
  if (veu) veu.classList.toggle("ativo", ligar);
}

function executarAcao(slide, acao, voltando) {
  const video = videoDoSlide(slide);
  if (!video) return;

  // Avançando: faz a ação. Voltando (seta para trás): desfaz a ação.
  if (!voltando) {
    if (acao === "tocar")    video.play();
    if (acao === "pausar")   video.pause();
    if (acao === "expandir") expandir(slide, true);
    if (acao === "recolher") { expandir(slide, false); video.pause(); }
  } else {
    if (acao === "tocar")    { video.pause(); video.currentTime = 0; }
    if (acao === "pausar")   video.play();
    if (acao === "expandir") expandir(slide, false);
    if (acao === "recolher") expandir(slide, true);
  }
}


/* ---------- 3. Inicialização do reveal.js ------------------------ */
montarRodapes();

Reveal.initialize({
  width: 1920,
  height: 1080,
  margin: 0,
  center: false,

  hash: true,              // o endereço guarda o slide atual (útil ao recarregar)
  controls: false,         // sem setas na tela
  progress: false,         // sem barra de progresso padrão (usamos o rodapé)
  slideNumber: false,      // o número já está no rodapé

  transition: "fade",
  transitionSpeed: "default",
  backgroundTransition: "fade",

  autoPlayMedia: false,    // nenhum vídeo toca sozinho
  plugins: [ RevealNotes ] // tecla S abre as notas do apresentador
});


/* Cada gatilho de vídeo é um "fragmento" invisível. Quando o reveal
   mostra ou esconde um fragmento, verificamos se ele carrega uma ação. */
Reveal.on("fragmentshown", (evento) => {
  const acao = evento.fragment.dataset.videoAcao;
  if (acao) executarAcao(Reveal.getCurrentSlide(), acao, false);
});

Reveal.on("fragmenthidden", (evento) => {
  const acao = evento.fragment.dataset.videoAcao;
  if (acao) executarAcao(Reveal.getCurrentSlide(), acao, true);
});

/* Ao sair de um slide, pausa o vídeo e recolhe a janela */
Reveal.on("slidechanged", (evento) => {
  const anterior = evento.previousSlide;
  const video = videoDoSlide(anterior);
  if (video) { video.pause(); expandir(anterior, false); }
});


/* Atalhos de ensaio: V pausa ou retoma, X expande ou recolhe */
Reveal.addKeyBinding({ keyCode: 86, key: "V", description: "Pausar ou retomar o vídeo" }, () => {
  const video = videoDoSlide(Reveal.getCurrentSlide());
  if (video) video.paused ? video.play() : video.pause();
});

Reveal.addKeyBinding({ keyCode: 88, key: "X", description: "Expandir ou recolher o vídeo" }, () => {
  const slide = Reveal.getCurrentSlide();
  const janela = slide.querySelector(".janela-video");
  if (janela) expandir(slide, !janela.classList.contains("expandida"));
});

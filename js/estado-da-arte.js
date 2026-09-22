/* =====================================================================
   SLIDE DO ESTADO DA ARTE
   Os dados ficam nas duas listas abaixo (colunas e base). Para incluir,
   remover ou reordenar um sistema, edite apenas essas listas.
   Cada item tem três partes: ["Nome", "Referência", "nome-do-arquivo"].
   As imagens ficam em midia/estado-da-arte/ e a extensão pode ser
   .png, .svg, .jpg, .jpeg ou .webp.
   ===================================================================== */

const EDA_PASTA = "midia/estado-da-arte/";
const EDA_EXTENSOES = ["png", "svg", "jpg", "jpeg", "webp"];

const EDA_COLUNAS = [
  [
    { secao: "4.1", titulo: "Descoberta exploratória", mudanca: "De listas para paisagens interativas", itens: [
      ["Argo Scholar", "Li et al., 2022", "argo-scholar"],
      ["DRIFT", "Pocco et al., 2021", "drift"],
      ["LitVis", "Tian; Li; Yuan, 2023", "litvis"],
      ["Papers101", "Choe et al., 2021", "papers101"],
      ["PUREsuggest", "Beck, 2024", "puresuggest"],
      ["RTVis", "Shen et al., 2023", "rtvis"],
      ["VADIS", "Qiu et al., 2024", "vadis"],
      ["VITALITY", "Narechania et al., 2021", "vitality"]
    ]}
  ],
  [
    { secao: "4.3", titulo: "Leitura orientada por citações", mudanca: "De PDFs estáticos à leitura guiada", itens: [
      ["CitePeek", "Basti; Davoudi; Neshati, 2025", "citepeek"],
      ["CiteRead", "Rachatasumrit et al., 2022", "citeread"],
      ["CiteSee", "Chang et al., 2023", "citesee"],
      ["Qlarify", "Fok et al., 2023", "qlarify"],
      ["Semantic Reader", "Lo et al., 2023", "semantic-reader"]
    ]},
    { secao: "4.7", titulo: "Ambientes ampliados", mudanca: "De telas 2D a ambientes imersivos", itens: [
      ["ComLittee", "Kang et al., 2023", "comlittee"],
      ["LitForager", "Yang et al., 2025", "litforager"],
      ["vitaLITy 2", "An et al., 2024", "vitality-2"]
    ]}
  ],
  [
    { secao: "4.2", titulo: "Encadeamento e síntese", mudanca: "De artigos isolados a threads", itens: [
      ["AbstractExplorer", "Gu et al., 2025", "abstractexplorer"],
      ["CrossLit", "Choe et al., 2026", "crosslit"],
      ["Garden of Papers", "Ma et al., 2025", "garden-of-papers"],
      ["LitSense", "Sultanum; Murad; Wigdor, 2020", "litsense"],
      ["Relatedly", "Palani et al., 2023", "relatedly"],
      ["ScholarMate", "Ye et al., 2025", "scholarmate"],
      ["SketchingRelatedWork", "Ma et al., 2023", "sketchingrelatedwork"],
      ["Synergi", "Kang et al., 2023", "synergi"],
      ["Threddy", "Kang et al., 2022", "threddy"]
    ]}
  ],
  [
    { secao: "4.5", titulo: "Scoping reviews e extração", mudanca: "Da recuperação a fluxos de revisão", itens: [
      ["AIDME", "Soprano et al., 2025", "aidme"],
      ["CRUISE-Screening", "Kusa; Knoth; Hanbury, 2023", "cruise-screening"],
      ["DocFlow", "Qiu et al., 2022", "docflow"],
      ["SciDaSynth", "X. Wang et al., 2024", "scidasynth"],
      ["VICTORIOUS", "Haghighati et al., 2025", "victorious"]
    ]}
  ],
  [
    { secao: "4.4", titulo: "Ideação e crítica", mudanca: "Da descoberta às hipóteses", itens: [
      ["AutoSurveyGPT", "Xiao, 2023", "autosurveygpt"],
      ["AwesomeLit", "Xie; Guo; Xu, 2026", "awesomelit"],
      ["DiscipLink", "Zheng et al., 2024", "disciplink"],
      ["IdeaSynth", "Pu et al., 2024", "ideasynth"],
      ["IRIS", "Garikaparthi et al., 2025", "iris"],
      ["LitPivot", "Kambhamettu et al., 2026", "litpivot"],
      ["ResearchAgent", "Baek et al., 2025", "researchagent"],
      ["ScholarEval", "Moussa et al., 2025", "scholareval"],
      ["SciPIP", "W. Wang et al., 2024", "scipip"]
    ]}
  ]
];

const EDA_BASE = [
  { titulo: "Bases e ferramentas bibliométricas", cols: 5, itens: [
    ["VOSviewer", "van Eck; Waltman, 2010", "vosviewer"],
    ["Bibliometrix", "Aria; Cuccurullo, 2017", "bibliometrix"],
    ["CiteSpace", "Chen, 2006", "citespace"],
    ["Gephi", "Bastian et al., 2009", "gephi"],
    ["Lens.org", "Penfold, 2020", "lens"],
    ["SciVal", "Elsevier", "scival"],
    ["Dimensions", "Thelwall, 2018", "dimensions"],
    ["Scopus", "Elsevier", "scopus"],
    ["Web of Science", "Clarivate", "web-of-science"],
    ["OpenAlex", "Priem et al., 2022", "openalex"]
  ]},
  { titulo: "Infraestruturas abertas e toolkits (4.6)", cols: 4, itens: [
    ["BibSonomy", "Völker et al., 2024", "bibsonomy"],
    ["Ontoverse", "Zimmermann et al., 2024", "ontoverse"],
    ["openalexR", "Aria et al., 2024", "openalexr"],
    ["pyBiblioNet", "Lai et al., 2025", "pybiblionet"],
    ["SciConNav", "Xiang et al., 2024", "sciconnav"],
    ["ScholarNodes", "Noor et al., 2024", "scholarnodes"],
    ["VisualBib", "Dattolo; Corbatto, 2019", "visualbib"]
  ]},
  { titulo: "Grandes modelos de linguagem", cols: 3, itens: [
    ["GPT", "OpenAI", "gpt"],
    ["Claude", "Anthropic", "claude"],
    ["PaLM", "Google", "palm"],
    ["LLaMA", "Meta", "llama"],
    ["DeepSeek", "DeepSeek", "deepseek"],
    ["Qwen", "Alibaba", "qwen"]
  ]},
  { titulo: "Plataformas de pesquisa com IA", cols: 4, itens: [
    ["Scite.ai", "Scite", "scite"],
    ["ResearchRabbit", "ResearchRabbit", "researchrabbit"],
    ["Semantic Scholar", "Ai2", "semantic-scholar"],
    ["Elicit", "Elicit", "elicit"],
    ["Undermind", "Undermind", "undermind"],
    ["R Discovery", "Researcher.Life", "r-discovery"],
    ["Perplexity", "Perplexity", "perplexity"],
    ["Consensus", "Consensus", "consensus"]
  ]}
];


/* ---------- Carregamento das imagens ---------- */
function edaCarregarImagem(img, slug, alvo) {
  let i = 0;
  img.addEventListener("load", () => alvo.classList.add("com-imagem"));
  img.addEventListener("error", () => {
    i += 1;
    if (i < EDA_EXTENSOES.length) img.src = `${EDA_PASTA}${slug}.${EDA_EXTENSOES[i]}`;
  });
  img.src = `${EDA_PASTA}${slug}.${EDA_EXTENSOES[0]}`;
}


/* ---------- Ampliação ao clicar ----------
   Enquanto a janela está aberta, o teclado do reveal fica desligado,
   para que as setas não troquem de slide por engano. */
const edaDialogo = document.getElementById("ampliacao");

function edaAmpliar(img, nome, ref) {
  if (!img.naturalWidth) return;
  document.getElementById("ampliacao-img").src = img.src;
  document.getElementById("ampliacao-img").alt = nome;
  document.getElementById("ampliacao-nome").textContent = nome;
  document.getElementById("ampliacao-ref").textContent = ref;
  edaDialogo.showModal();
  if (window.Reveal && Reveal.isReady()) Reveal.configure({ keyboard: false });
}

edaDialogo.addEventListener("click", () => edaDialogo.close());
edaDialogo.addEventListener("close", () => {
  if (window.Reveal && Reveal.isReady()) Reveal.configure({ keyboard: true });
});


/* ---------- Montagem ---------- */
function edaCriarItem([nome, ref, slug]) {
  const li = document.createElement("li");
  const botao = document.createElement("button");
  botao.className = "item";
  botao.type = "button";
  botao.innerHTML = `
    <span class="miniatura"><img alt=""></span>
    <span class="texto"><span class="nome"></span><span class="ref"></span></span>`;
  botao.querySelector(".nome").textContent = nome;
  botao.querySelector(".ref").textContent = ref;
  botao.setAttribute("aria-label", `${nome}, ${ref}`);
  const img = botao.querySelector("img");
  edaCarregarImagem(img, slug, botao);
  botao.addEventListener("click", () => edaAmpliar(img, nome, ref));
  li.appendChild(botao);
  return li;
}

const edaFrentes = document.getElementById("eda-frentes");
let edaTotalPrototipos = 0;

EDA_COLUNAS.forEach(grupos => {
  const col = document.createElement("div");
  col.className = "coluna";
  grupos.forEach(g => {
    const sec = document.createElement("div");
    sec.className = "frente";
    sec.innerHTML = `
      <header>
        <h3><span class="secao">${g.secao}</span>${g.titulo}</h3>
        <p class="mudanca">${g.mudanca}</p>
      </header>
      <ul class="lista"></ul>`;
    const ul = sec.querySelector(".lista");
    g.itens.forEach(it => ul.appendChild(edaCriarItem(it)));
    edaTotalPrototipos += g.itens.length;
    col.appendChild(sec);
  });
  edaFrentes.appendChild(col);
});

/* Coluna do Delinéia */
const edaColDelineia = document.createElement("div");
edaColDelineia.className = "coluna";
edaColDelineia.innerHTML = `
  <div class="delineia">
    <h3>Delinéia</h3>
    <button class="tela" type="button" aria-label="Interface do Delinéia"><img alt=""></button>
    <p>Coocorrência de tópicos do OpenAlex e mediação por IA generativa numa trilha de autorregulação para delinear o escopo da pesquisa.</p>
    <div class="correlato">
      <p class="rotulo">Trabalho correlato do GTech.Edu</p>
      <ul class="lista" id="eda-correlato"></ul>
    </div>
  </div>`;
edaFrentes.appendChild(edaColDelineia);

const edaTela = edaColDelineia.querySelector(".tela");
const edaImgDelineia = edaTela.querySelector("img");
edaCarregarImagem(edaImgDelineia, "delineia", edaTela);
edaTela.addEventListener("click", () => edaAmpliar(edaImgDelineia, "Delinéia", "Santos, 2026"));
edaColDelineia.querySelector("#eda-correlato")
  .appendChild(edaCriarItem(["MTA", "Bastiani; Zarth; Reategui, 2024", "mta"]));

/* Base */
const edaBase = document.getElementById("eda-base");
let edaTotalBase = 0;

EDA_BASE.forEach(g => {
  const div = document.createElement("div");
  div.className = `grupo cols-${g.cols}`;
  div.innerHTML = `<h3>${g.titulo}</h3><ul class="grade"></ul>`;
  const ul = div.querySelector(".grade");
  g.itens.forEach(([nome, ref, slug]) => {
    const li = document.createElement("li");
    const ficha = document.createElement("button");
    ficha.className = "ficha";
    ficha.type = "button";
    ficha.setAttribute("aria-label", `${nome}, ${ref}`);
    ficha.innerHTML = `
      <span class="logo"><img alt=""><span class="marca-texto"></span></span>
      <span class="legenda-ficha"></span>`;
    ficha.querySelector(".marca-texto").textContent = nome;
    ficha.querySelector(".legenda-ficha").textContent = ref;
    const img = ficha.querySelector("img");
    img.alt = nome;
    edaCarregarImagem(img, slug, ficha);
    ficha.addEventListener("click", () => edaAmpliar(img, nome, ref));
    li.appendChild(ficha);
    ul.appendChild(li);
  });
  edaTotalBase += g.itens.length;
  edaBase.appendChild(div);
});

document.getElementById("eda-contagem").innerHTML =
  `<strong>${edaTotalPrototipos} sistemas</strong> em seis frentes de inovação, sobre uma base de <strong>${edaTotalBase} ferramentas, modelos e infraestruturas</strong>`;

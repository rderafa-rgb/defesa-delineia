# Apresentação da defesa · Delinéia

Guia de uso e de edição. Leia com calma na primeira vez e volte a ele sempre que for inserir algo novo.


## 1. O que é esta pasta

A apresentação é uma página web que roda no navegador, sem internet. Ela depende de todos os arquivos desta pasta, por isso o que você leva para a defesa é **a pasta inteira**, e não apenas o `index.html`.

```
defesa-delineia/
├── index.html            ← o CONTEÚDO: um bloco <section> para cada slide
├── css/tema.css          ← a APARÊNCIA: cores, fontes, posições
├── js/apresentacao.js    ← o COMPORTAMENTO: rodapé, vídeos, atalhos
├── midia/
│   ├── videos/           ← os MP4 gravados no StreamYard
│   └── imagens/          ← figuras da tese e capas dos vídeos
├── fontes/               ← tipografias (Source Serif 4 e Source Sans 3)
└── lib/reveal/           ← a biblioteca reveal.js (não mexer)
```

A regra de ouro: o `index.html` procura os outros arquivos pelo caminho relativo (`midia/videos/teste.mp4`). Se você mover a pasta inteira para o pendrive, tudo continua funcionando. Se tirar um arquivo de dentro dela, ele some da apresentação.


## 2. Abrir e apresentar

Para apresentar, dê um duplo clique no `index.html`. Ele abre no navegador padrão. Use o **Chrome** ou o **Edge** e pressione `F11` para tela cheia.

| Tecla | O que faz |
|---|---|
| `→` ou `Espaço` | avança (próximo clique ou próximo slide) |
| `←` | volta um passo |
| `S` | abre as notas do apresentador em outra janela, com cronômetro |
| `B` | apaga a tela (útil durante perguntas); aperte de novo para voltar |
| `O` ou `Esc` | visão geral de todos os slides |
| `V` | pausa ou retoma o vídeo do slide atual |
| `X` | expande ou recolhe a janela do vídeo |

Passadores de slide (clickers) enviam a tecla `→`, então funcionam sem configuração.


## 3. Editar no VS Code

1. No VS Code, vá em **Arquivo › Abrir pasta** e escolha `defesa-delineia`.
2. Instale a extensão **Live Server** (de Ritwick Dey) no painel de extensões.
3. Clique com o botão direito no `index.html` e escolha **Open with Live Server**. Cada vez que você salvar um arquivo, o navegador recarrega sozinho.

O Live Server serve só para trabalhar com conforto. No dia da defesa, abra com duplo clique, que é o modo que não depende de nada.


## 4. Anatomia de um slide

Todo slide de conteúdo segue o modelo assertion-evidence. Copie este bloco, cole antes do `</div>` que fecha `.slides` e edite:

```html
<section data-secao="Referencial teórico">
  <div class="quadro">

    <h2 class="afirmacao">Uma frase completa que diz o que o slide prova</h2>

    <div class="evidencia">
      <!-- figura, gráfico, esquema ou vídeo -->
    </div>

    <div class="referencias">
      <span class="ref fragment fade-in-then-out" data-fragment-index="1">Autor, ano</span>
    </div>

  </div>
  <aside class="notes">
    [1:00] O que eu vou dizer neste slide.
  </aside>
</section>
```

O atributo `data-secao` precisa ter exatamente um destes nomes, porque é ele que acende a trilha do rodapé: `Introdução`, `Referencial teórico`, `Metodologia`, `Delinéia`, `Resultados e discussão`, `Considerações finais`.


## 5. Cliques, referências e marcadores

No reveal.js, qualquer elemento com a classe `fragment` vira um clique. O atributo `data-fragment-index` define em qual clique ele aparece. Elementos com o mesmo número aparecem juntos.

A classe extra diz **como** ele se comporta:

| Classe | Comportamento |
|---|---|
| `fragment` | aparece e fica |
| `fragment fade-out` | já está visível e some no clique indicado |
| `fragment fade-in-then-out` | aparece no clique indicado e some no clique seguinte |

As referências usam `fade-in-then-out` para surgir junto com a ideia e sair quando a fala avança. A primeira referência de um slide costuma usar `fade-out`, para já estar na tela quando o slide entra.

Os marcadores recorrentes ficam no canto superior direito:

```html
<div class="marcadores">
  <span class="marcador fragment" data-fragment-index="2"><svg><use href="#icone-coocorrencia"></use></svg>coocorrência</span>
  <span class="marcador fragment" data-fragment-index="2"><svg><use href="#icone-llm"></use></svg>LLM</span>
</div>
```

Tire a classe `fragment` se quiser que o marcador já esteja visível quando o slide entrar.


## 6. Vídeos

1. Salve o MP4 em `midia/videos/`, com nome sem espaços nem acentos (`02-mapa-coocorrencia.mp4`).
2. Tire uma imagem do primeiro quadro e salve em `midia/imagens/` com o mesmo nome em `.jpg`. É a imagem que aparece antes do vídeo começar.
3. No slide, use o bloco abaixo. Os gatilhos são cliques invisíveis, executados na ordem em que aparecem.

```html
<div class="veu"></div>
<div class="janela-video">
  <video src="midia/videos/02-mapa-coocorrencia.mp4"
         poster="midia/imagens/02-mapa-coocorrencia.jpg"
         preload="auto" muted playsinline></video>
</div>

<span class="gatilho fragment" data-video-acao="tocar"></span>
<span class="gatilho fragment" data-video-acao="expandir"></span>
<span class="gatilho fragment" data-video-acao="recolher"></span>
```

As ações disponíveis são `tocar`, `pausar`, `expandir` e `recolher`. Você pode combinar e repetir, por exemplo tocar, pausar num ponto da fala e tocar de novo. Voltar com `←` desfaz cada ação.

Na gravação, prefira resolução 1920 × 1080, sem áudio, com cortes nas esperas da API. Se o arquivo exportado não for MP4 com H.264, converta no HandBrake (predefinição *Fast 1080p30*).


## 7. PDF de segurança

Abra o `index.html` no Chrome e acrescente `?print-pdf` ao endereço, antes do `#` (por exemplo, `.../index.html?print-pdf`). Depois use **Imprimir › Salvar como PDF**, orientação paisagem, margens *Nenhuma* e com gráficos de fundo ativados. O PDF não tem vídeo, mas garante a apresentação se tudo mais falhar.


## 8. Versionamento com Git (recomendado)

Guardar versões permite voltar atrás quando uma edição quebra algo. O VS Code faz isso pelo painel **Controle do Código-Fonte** (ícone de ramificação na barra lateral).

1. Clique em **Inicializar repositório**.
2. Escreva uma mensagem curta, por exemplo `slides de introdução`, e clique em **Confirmar** (commit).
3. Para ter uma cópia na nuvem, clique em **Publicar branch** e escolha **repositório privado** no GitHub.

Faça um commit a cada etapa que funcionar. Vídeos grandes podem ultrapassar o limite de 100 MB por arquivo do GitHub; se isso acontecer, guarde os vídeos fora do repositório e mantenha cópias no pendrive.


## 9. Antes da defesa

- Apagar o slide de teste de vídeo.
- Abrir pelo duplo clique no computador que será usado e percorrer todos os cliques.
- Desativar notificações, suspensão de tela e atualizações automáticas.
- Levar a pasta em dois lugares (notebook e pendrive) e o PDF de segurança.

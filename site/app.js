/* Viglet Games label page: the language switch, the same one the game sites carry. */
(() => {
  'use strict';

  // English lives in the HTML; this is the Portuguese for every data-i18n key.
  const PT = {
    'meta.title': 'Viglet Games · Cottony e Spinhold, a caminho da Steam',
    'meta.description': 'A Viglet Games é o selo de jogos da Viglet. Nossos dois primeiros jogos, o match-3 de pelúcia Cottony e o shooter neon em anel Spinhold, estão em desenvolvimento para a Steam.',
    'meta.og': 'O match-3 de pelúcia Cottony e o shooter neon em anel Spinhold, em desenvolvimento para a Steam.',

    'nav.skip': 'Pular para os jogos',
    'nav.top': 'Viglet Games, topo da página',
    'nav.label': 'Seções',
    'nav.language': 'Idioma',
    'nav.games': 'Jogos',
    'nav.press': 'Kit de imprensa',

    'hero.title': 'Cada jogo, um&nbsp;mundo.',
    'hero.lead': 'Criamos a Viglet Games para fazer o tipo de lugar ao qual sempre voltávamos como jogadores: mundos pequenos o bastante para conhecer de cor, mas sempre com algo novo para descobrir.',
    'hero.cta': 'Conheça os jogos',
    'hero.alt': 'O logo da Viglet Games: um V sorridente sobre um círculo laranja',

    'games.title': 'Os jogos',
    'game.status': 'Em desenvolvimento · Em breve na Steam',
    'game.soon': 'Página na Steam em breve',
    'cottony.genre': 'Match-3 de pelúcia',
    'cottony.text': 'Corações, gotas, estrelas e botões de feltro amassam quando caem e viram nuvenzinhas quando estouram. A nossa estreia.',
    'cottony.visit': 'Visite o site do Cottony',
    'spinhold.genre': 'Shooter neon em anel',
    'spinhold.text': 'Voe pelo lado de fora de uma colônia que gira, despedace a Lattice cubo por cubo e traga a sua gente para casa. A nossa primeira viagem ao neon.',
    'spinhold.visit': 'Visite o site do Spinhold',

    'press.title': 'Kit de imprensa',
    'press.lead': 'Tudo aqui pode ser usado para escrever sobre a Viglet Games e os seus jogos.',
    'press.label': 'Selo',
    'press.company': 'Empresa',
    'press.company.value': 'Viglet Serviços de Informática LTDA, Brasil',
    'press.games': 'Jogos',
    'press.games.value': 'Cottony (match-3 de pelúcia), Spinhold (shooter neon em anel)',
    'press.platform': 'Plataforma',
    'press.status': 'Situação',
    'press.status.value': 'Os dois em desenvolvimento, sem data de lançamento anunciada',
    'press.follow': 'Siga',
    'press.logo':'Logo da Viglet Games <span>SVG</span>',
    'press.cottony': 'Arte principal do Cottony <span>JPG · 820 × 429</span>',
    'press.spinhold': 'Arte principal do Spinhold <span>JPG · 1200 × 630</span>',

    'foot.label': 'A Viglet Games é um selo da Viglet Serviços de Informática LTDA. Nossos jogos estão em desenvolvimento, e tudo o que aparece aqui pode mudar.',
    'foot.follow': 'Siga a Viglet Games no <a href="https://viglet.itch.io/">itch.io</a> para saber quando cada jogo for lançado.',
    'foot.viglet':'A <a href="https://www.viglet.org/">Viglet</a> também faz software corporativo de código aberto: Viglet Turing, Viglet Shio e Viglet Dumont.',
  };

  const textNodes = [...document.querySelectorAll('[data-i18n]')];
  const attrNodes = [...document.querySelectorAll('[data-i18n-attr]')];
  const english = new Map();
  textNodes.forEach(node => english.set(node.dataset.i18n, node.innerHTML));
  const attrPairs = node => node.dataset.i18nAttr.split(';').map(pair => pair.split(':'));
  attrNodes.forEach(node => attrPairs(node).forEach(([attr, key]) => english.set(key, node.getAttribute(attr))));

  function setLang(next) {
    const lang = next === 'pt' ? 'pt' : 'en';
    const pick = key => (lang === 'pt' && key in PT ? PT[key] : english.get(key));
    textNodes.forEach(node => { node.innerHTML = pick(node.dataset.i18n); });
    attrNodes.forEach(node => attrPairs(node).forEach(([attr, key]) => node.setAttribute(attr, pick(key))));
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
    try { localStorage.setItem('viglet-games-lang', lang); } catch { /* private mode */ }
  }

  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => setLang(button.dataset.lang));
  });

  let stored = null;
  try { stored = localStorage.getItem('viglet-games-lang'); } catch { /* private mode */ }
  const browserPt = (navigator.languages || [navigator.language]).some(l => /^pt\b/i.test(l || ''));
  setLang(stored || (browserPt ? 'pt' : 'en'));
})();

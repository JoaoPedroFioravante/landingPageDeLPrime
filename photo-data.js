const entries = [
  [6, 'Cozinha com acabamento escuro', 'Áreas gourmet', 'Bancada escura com cuba, armários amadeirados e churrasqueira ao lado.', 720, 960],
  [8, 'Balcão para reunir', 'Áreas gourmet', 'Balcão escuro com laterais em pedra, banquetas e bancada ao fundo.', 636, 477],
  [13, 'Cubas esculpidas claras', 'Lavatórios', 'Duas peças de lavatório em pedra clara com veios, fotografadas na oficina.', 945, 1176],
  [2, 'Bancada em L', 'Cozinhas', 'Bancada escura em L com cuba de inox e cooktop junto à janela.', 960, 720],
  [14, 'Lavatório com apoio lateral', 'Lavatórios', 'Lavatório claro com cuba esculpida, apoio lateral e espelho de acabamento, na oficina.', 952, 540],
  [16, 'Balcão com lateral em pedra', 'Cozinhas', 'Bancada clara em L com fechamento lateral, cuba e abertura para cooktop.', 719, 960],
  [0, 'Bancada e balcão integrados', 'Cozinhas', 'Cozinha com bancada escura, cuba e balcão em primeiro plano.', 960, 720],
  [1, 'Bancada com cuba', 'Cozinhas', 'Bancada escura polida com cuba de inox e parede de azulejos estampados.', 720, 960],
  [3, 'Bancada compacta', 'Cozinhas', 'Bancada escura compacta com cuba de inox e torneira vermelha.', 720, 960],
  [4, 'Superfície em L', 'Cozinhas', 'Bancada escura em L com cuba e marcenaria branca ainda sem portas.', 720, 960],
  [5, 'Cuba e cooktop na mesma bancada', 'Cozinhas', 'Bancada escura linear com cuba de inox, cooktop e armários claros.', 960, 720],
  [7, 'Composição em tons claros', 'Cozinhas', 'Cozinha com bancada clara, cuba dupla e recorte para cooktop.', 960, 720],
  [9, 'Balcão e espaço gourmet', 'Áreas gourmet', 'Ambiente com balcão escuro, bancada ao fundo e churrasqueira revestida, durante a obra.', 720, 960],
  [10, 'Balcão com fechamento lateral', 'Cozinhas', 'Balcão escuro com lateral até o piso e bancada com cuba ao fundo.', 960, 720],
  [11, 'Bancada em tom natural', 'Cozinhas', 'Bancada de tom bege em L com cuba de inox e recorte para cooktop.', 720, 960],
  [12, 'Pedra em destaque no espaço gourmet', 'Áreas gourmet', 'Balcão escuro com veios, bancada e churrasqueira durante a instalação.', 385, 715],
  [15, 'Bancada clara com cuba dupla', 'Cozinhas', 'Bancada clara em L com duas cubas de inox e balcão de apoio.', 720, 405],
];

export const photos = entries.map(([id, title, category, alt, width, height]) => ({
  id, title, category, alt, width, height,
  src: `/images/mostruario/ambiente-${String(id).padStart(2, '0')}.webp`,
  thumb: `/images/mostruario/ambiente-${String(id).padStart(2, '0')}-thumb.webp`,
}));

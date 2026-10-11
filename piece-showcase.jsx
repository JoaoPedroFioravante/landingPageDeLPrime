import { whatsappUrl } from './site-config';
import WhatsAppIcon from './whatsapp-icon';

export const pieces = [
  { id: 'bancada', title: 'Bancadas de cozinha', category: 'COZINHAS & ÁREAS GOURMET', description: 'Superfícies para preparar, apoiar e reunir. Uma referência para o centro da rotina da casa.' },
  { id: 'lavatorio', title: 'Lavatórios', category: 'BANHEIROS & LAVABOS', description: 'Bancadas e tampos que compõem o espaço da cuba, com presença nos pequenos detalhes.' },
  { id: 'ilha', title: 'Ilhas e balcões', category: 'AMBIENTES INTEGRADOS', description: 'Peças de destaque para conectar a cozinha aos momentos de convivência.' },
  { id: 'escada', title: 'Escadas e degraus', category: 'CIRCULAÇÃO', description: 'Pisos e espelhos de degraus que levam a linguagem da pedra de um nível ao outro.' },
  { id: 'soleira', title: 'Soleiras', category: 'PORTAS & PASSAGENS', description: 'Faixas de pedra que marcam a transição entre ambientes e completam o acabamento do piso.' },
  { id: 'peitoril', title: 'Peitoris', category: 'JANELAS & ACABAMENTOS', description: 'Peças na base das janelas que integram a pedra aos detalhes da arquitetura.' },
];

export function pieceMessage(piece) {
  return `Olá, D&L Prime! Vi o mostruário no site e gostaria de solicitar um orçamento para ${piece.title.toLowerCase()}. Poderia me orientar sobre as opções de materiais e acabamentos para o meu projeto?`;
}

function PieceDrawing({ type }) {
  const drawings = {
    bancada: <><path className="piece-side" d="M50 91 220 91 256 68 256 79 220 104 50 104Z"/><path className="piece-top" d="M50 91 86 65 256 65 220 91Z"/><path className="piece-support" d="M58 104V151H211V104M134 106V150M63 119H129M139 119H207"/><path className="piece-cutout" d="m104 74 38 0 13-7h-38Z"/><path className="piece-detail" d="M130 68V48q0-8 8-8t8 8v4M152 79l32-1m-8-8 29-1"/><path className="piece-vein" d="m72 78 16 3 14-2 13 7m71-19 9 7 18 2"/></>,
    lavatorio: <><path className="piece-side" d="m71 102 124 0 45-27v13l-45 28H71Z"/><path className="piece-top" d="m71 102 44-29 125 0-45 29Z"/><path className="piece-support" d="M79 116v35h106v-35m-53 1v34"/><ellipse className="piece-cutout" cx="150" cy="87" rx="27" ry="9" transform="rotate(-7 150 87)"/><path className="piece-detail" d="M163 78V57q0-7 7-7t7 7v4M109 138h12m22 0h12"/><path className="piece-vein" d="m99 86 11 1 9 8m82-19-12 7 12 6"/></>,
    ilha: <><path className="piece-support" d="m88 91 140 0v63H88Zm140 0 29-20v64l-29 19"/><path className="piece-side" d="M60 85h174l33-23v13l-33 24H60Z"/><path className="piece-top" d="m60 85 34-24h173l-33 24Z"/><path className="piece-detail" d="M102 105v45m26-45v45m26-45v45m26-45v45m26-45v45M59 149h25m-22-21h23m-20 0-4 32m21-32 5 32"/><path className="piece-vein" d="m109 64 22 7 19-1 20 9m37-16-11 9 13 5"/></>,
    escada: <><path className="piece-support" d="m66 148 124 0 62-41v-13l-19-1V78l-20-1V62l-19-1V46l-124 1v15H50v15H31v15H12v15l54 41Z" transform="translate(24 0) scale(.9 1)"/><path className="piece-top" d="m45 132 108 0 30-17H75Zm30-29h108l30-17H105Zm30-29h108l30-17H135Z"/><path className="piece-side" d="M45 132v12h108v-12m0 12 30-17v-12M75 103v12h108v-12m0 12 30-17V86M105 74v12h108V74m0 12 30-17V57"/><path className="piece-vein" d="m89 130 18-7 15 4m-13-26 18-7 11 4m3-27 18-7 15 4"/></>,
    soleira: <><path className="piece-context" d="M69 127V37h8v84m138-69v74m0-74 8 3v65M40 149l89-49 141 40M135 99v58m-58-22-12 23m142-28 24 26"/><path className="piece-side" d="m69 128 130 22 33-19v8l-33 19-130-22Z"/><path className="piece-top" d="m69 128 33-19 130 22-33 19Z"/><path className="piece-vein" d="m109 120 14 6 21-1 14 8m22-9-13 11 17 6"/></>,
    peitoril: <><path className="piece-context" d="M83 132V37h137v76M95 115V48h113v58M151 48v65m-56-33h113M78 143v22m149-40v27"/><path className="piece-side" d="m65 133 139 15 35-22v10l-35 22-139-15Z"/><path className="piece-top" d="m65 133 34-22 140 15-35 22Z"/><path className="piece-vein" d="m105 116 11 8 27 2 10 12m40-17-12 10 15 10"/><path className="piece-detail" d="m110 62 14-9m-14 19 24-16"/></>,
  };
  return <svg viewBox="0 0 310 190" fill="none" strokeWidth="1.15" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true"><path d="M32 168H276" stroke="currentColor" opacity=".13"/>{drawings[type]}</svg>;
}

export default function PieceShowcase() {
  return <div className="piece-showcase" aria-labelledby="showcase-title">
    <div className="showcase-heading"><div><p className="eyebrow">MOSTRUÁRIO DE PEÇAS</p><h3 id="showcase-title">Da ideia ao seu ambiente.</h3></div><p>Conheça aplicações comuns da pedra na construção civil e conte o que você precisa.</p></div>
    <div className="piece-grid">{pieces.map((piece, index) => <article className="piece-card" key={piece.id}>
      <div className="piece-visual"><span className="piece-index">0{index + 1}</span><PieceDrawing type={piece.id}/><span className="piece-reference">ILUSTRAÇÃO DE REFERÊNCIA</span></div>
      <div className="piece-copy"><p className="piece-category">{piece.category}</p><h4>{piece.title}</h4><p className="piece-description">{piece.description}</p><a className="piece-cta" href={whatsappUrl(pieceMessage(piece))} target="_blank" rel="noopener noreferrer" aria-label={`Pedir orçamento para ${piece.title.toLowerCase()} pelo WhatsApp`}><span>Orçar esta peça</span><WhatsAppIcon size={18}/></a></div>
    </article>)}</div>
    <p className="showcase-note">Ilustrações esquemáticas para apresentar as aplicações. Materiais, medidas, acabamentos e disponibilidade são definidos na conversa sobre o seu projeto.</p>
  </div>;
}

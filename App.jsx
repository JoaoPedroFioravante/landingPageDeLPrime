
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight, ArrowDown, Menu, X, MapPin, Plus, Minus, Layers3, Gem, Ruler } from "lucide-react";
import { company, whatsappUrl, quoteMessage } from "./site-config";
import WhatsAppIcon from "./whatsapp-icon";
import PieceShowcase from "./piece-showcase";
import PortfolioGallery from "./portfolio-gallery";

function Instagram({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
}


const navigation = [["inicio", "Início"], ["sobre", "A D&L Prime"], ["servicos", "Serviços"], ["galeria", "Galeria"], ["contato", "Contato"]];
const services = [
  { title: "Mármores", subtitle: "Personalidade em cada veio", description: "Texturas, nuances e desenhos naturais que dão presença à arquitetura. Vamos conversar sobre o mármore que combina com a proposta do seu ambiente.", tag: "A beleza da pedra natural", icon: Gem },
  { title: "Granitos nacionais", subtitle: "A natureza brasileira no seu projeto", description: "Uma variedade de cores e padrões para explorar na sua construção ou reforma. Conte à D&L Prime o que você imagina para encontrar a opção adequada ao seu projeto.", tag: "Expressão brasileira", icon: Layers3 },
  { title: "Granitos importados", subtitle: "Novas possibilidades para criar", description: "Tonalidades e composições para quem busca uma expressão singular. Consulte as opções e a disponibilidade para a sua obra.", tag: "Detalhes que fazem diferença", icon: Ruler },
];

function Brand({ footer = false }) {
  return <a className={`brand ${footer ? "brand-footer" : ""}`} href="#inicio" aria-label="D&L Prime — voltar ao início"><span className="brand-monogram">D<span>&</span>L</span><span className="brand-name">D&L PRIME<small>MARMORARIA</small></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [openService, setOpenService] = useState(0);
  const [material, setMaterial] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -65% 0px" });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = event => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  function sendQuote(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = quoteMessage({
      nome: String(data.get("nome") || ""),
      material: String(data.get("material") || ""),
      projeto: String(data.get("projeto") || ""),
    });
    window.location.assign(whatsappUrl(message));
  }

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header"><div className="nav-shell"><Brand />
      <nav id="main-nav" className={menuOpen ? "nav open" : "nav"} aria-label="Navegação principal">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a href="#contato" className="nav-cta">Vamos conversar <ArrowUpRight size={17} /></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div></header>

    <main id="conteudo">
      <section className="hero section-shell" id="inicio">
        <div className="hero-copy"><p className="eyebrow"><span className="tiny-line" /> MARMORARIA EM CATANDUVA · SP</p>
          <h1>A natureza cria.<br />A gente <em>transforma.</em></h1>
          <p className="hero-description">Mármores e granitos que dão personalidade à sua obra. Do primeiro detalhe à essência de cada ambiente.</p>
          <div className="hero-actions"><a className="button button-gold" href="#contato">Quero transformar meu projeto <ArrowUpRight size={19} /></a><a className="text-link" href="#servicos">Explore as possibilidades <ArrowRight size={16} /></a></div>
          <div className="hero-signature"><span className="signature-symbol">◇</span><span>Pedras naturais.<br /><strong>Possibilidades extraordinárias.</strong></span></div>
        </div>
        <div className="hero-art"><div className="orbit-label">MATÉRIA-PRIMA PARA O EXTRAORDINÁRIO</div>
          <div className="logo-frame"><img src="/images/dl-prime-logo.png" alt="Logo D&L Prime Marmoraria, em mármore branco, preto e dourado" width="1254" height="1254" fetchPriority="high" /></div>
          <div className="art-caption"><span>EXCELÊNCIA EM CADA DETALHE.</span><span>01 / D&L PRIME</span></div>
          <div className="art-stamp"><Gem size={19} strokeWidth={1} /><span>Eternidade em<br />cada pedra.</span></div>
        </div>
        <a className="scroll-hint" href="#sobre"><span>CONHEÇA A D&L PRIME</span><ArrowDown size={16} /></a>
      </section>

      <div className="material-strip" aria-label="Materiais e área de atuação"><span>MÁRMORES</span><i>✧</i><span>GRANITOS NACIONAIS</span><i>✧</i><span>GRANITOS IMPORTADOS</span><i>✧</i><span>CONSTRUÇÃO CIVIL</span></div>

      <section id="sobre" className="about section-shell section-pad"><div className="about-title"><p className="eyebrow">01 — A D&L PRIME</p><h2>Não é só pedra.<br />É parte da<br /><em>sua história.</em></h2></div>
        <div className="about-copy"><p className="lead">Um novo espaço começa com uma escolha. E os detalhes tornam essa escolha única.</p><p>A D&L Prime é uma marmoraria em Catanduva, São Paulo, dedicada a serviços para a construção civil com mármores e granitos nacionais e importados.</p><p>Na construção ou na reforma, a pedra participa da identidade do ambiente. Nossa proposta é dar forma às suas ideias, valorizando a beleza natural de cada material.</p><div className="about-location"><MapPin size={20} strokeWidth={1.3} /><span>Catanduva <small>São Paulo, Brasil</small></span><a href="#contato" aria-label="Conversar sobre seu projeto"><ArrowUpRight size={25} /></a></div></div>
      </section>

      <section id="servicos" className="services-section section-pad"><div className="section-shell"><div className="section-heading"><div><p className="eyebrow">02 — MATERIAIS & SERVIÇOS</p><h2>A escolha certa.<br /><em>O seu estilo.</em></h2></div><p>Cada material tem sua expressão.<br />Encontre o ponto de partida para a sua obra.</p></div>
        <PieceShowcase />
        <div className="materials-intro"><p className="eyebrow">A ESSÊNCIA DE CADA PEÇA</p><h3>Materiais para dar forma à sua escolha.</h3></div>
        <div className="services-list">{services.map((service, index) => { const Icon = service.icon; const isOpen = openService === index; return <article key={service.title} className={`service ${isOpen ? "is-open" : ""}`}><h3><button className="service-toggle" aria-expanded={isOpen} aria-controls={`service-panel-${index}`} id={`service-heading-${index}`} onClick={() => setOpenService(isOpen ? -1 : index)}><span className="service-number">0{index + 1}</span><span className="service-title">{service.title}<small>{service.subtitle}</small></span><span className="service-plus">{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span></button></h3><div id={`service-panel-${index}`} role="region" aria-labelledby={`service-heading-${index}`} hidden={!isOpen}><div className="service-content"><div className="service-emblem"><Icon size={56} strokeWidth={0.75} /><span>{service.tag}</span></div><div><p>{service.description}</p><a className="text-link gold" href="#contato" onClick={() => setMaterial(service.title)}>Quero um orçamento <ArrowUpRight size={18} /></a></div></div></div></article>; })}</div>
      </div></section>

      <section id="galeria" className="gallery-section section-shell section-pad"><div className="section-heading"><div><p className="eyebrow">03 — GALERIA DE TRABALHOS</p><h2>Detalhes que<br /><em>falam por si.</em></h2></div><a className="text-link" href={company.instagram} target="_blank" rel="noopener noreferrer">Visite nosso Instagram <Instagram size={18} /></a></div>
        <PortfolioGallery />
      </section>

      <section className="quote-band"><div className="section-shell"><span className="quote-star" aria-hidden="true">✧</span><p>Seu projeto merece mais do que o comum.<br /><em>Vamos dar forma ao extraordinário.</em></p><a href="#contato" className="circle-link" aria-label="Ir para orçamento"><ArrowUpRight size={30} strokeWidth={1} /></a></div></section>

      <section id="contato" className="contact section-shell section-pad"><div className="contact-copy"><p className="eyebrow">04 — O PRÓXIMO PASSO É SEU</p><h2>Sua ideia.<br />Nossa próxima<br /><em>conversa.</em></h2><p>Construindo ou reformando? Conte o que você imagina. Vamos começar pelo seu projeto.</p><div className="contact-tip"><span>PARA FACILITAR SEU ORÇAMENTO</span><p>Tenha em mãos as medidas aproximadas, o ambiente e, se já tiver, uma referência do que deseja.</p><p>Caso não tenha não se preocupe, um vendedor irá até sua obra para realizar um orçamento!</p></div><a className="contact-instagram" href={company.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={19} /><span>Conheça a D&L Prime no Instagram</span><ArrowUpRight size={17} /></a><div className="contact-city"><MapPin size={16} />{company.location}</div></div>
        <div className="quote-form-wrap"><span className="form-eyebrow">VAMOS COMEÇAR?</span><h3>Conte sobre seu projeto</h3><p className="form-intro">Poucos detalhes. Um mundo de possibilidades.</p><form onSubmit={sendQuote}><label htmlFor="nome">Como podemos chamar você?</label><input id="nome" name="nome" placeholder="Seu nome" autoComplete="given-name" required minLength={2} maxLength={80} pattern=".*\S.*" /><label htmlFor="material">Qual material você procura?</label><select id="material" name="material" required value={material} onChange={event => setMaterial(event.target.value)}><option value="" disabled>Selecione uma opção</option>{services.map(service => <option key={service.title}>{service.title}</option>)}<option>Ainda quero conhecer as opções</option></select><label htmlFor="projeto">O que você está planejando?</label><textarea id="projeto" name="projeto" rows={3} placeholder="Conte sobre o ambiente, as medidas ou sua ideia…" required minLength={5} maxLength={1500} /><button type="submit" className="button button-gold form-submit">Solicitar orçamento pelo WhatsApp <WhatsAppIcon size={20} /></button><p className="form-privacy">Você será direcionado ao WhatsApp com a mensagem pronta. Basta confirmar o envio.</p></form>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="section-shell footer-main"><Brand footer /><p>Excelência em cada detalhe.<br /><span>Eternidade em cada pedra.</span></p><a className="text-link" href="#inicio">Voltar ao topo <ArrowUpRight size={17} /></a></div><div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} D&L Prime Marmoraria.</span><span>CATANDUVA · SÃO PAULO</span><a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da D&L Prime"><Instagram size={17} /></a></div></footer>
    <a className="floating-contact" href={whatsappUrl("Olá, D&L Prime! Gostaria de conversar sobre meu projeto.") || "#contato"} aria-label={company.whatsapp ? "Conversar pelo WhatsApp" : "Solicitar orçamento"} {...(company.whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}><WhatsAppIcon size={24} /><span>Vamos conversar?</span></a>
  </>;
}

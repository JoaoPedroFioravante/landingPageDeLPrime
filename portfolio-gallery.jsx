import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { photos } from './photo-data';
import { whatsappUrl } from './site-config';
import WhatsAppIcon from './whatsapp-icon';

export default function PortfolioGallery() {
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const photo = selected === null ? null : photos[selected];

  useEffect(() => {
    if (selected !== null && !dialogRef.current.open) dialogRef.current.showModal();
  }, [selected]);
  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  function openPhoto(item, event) {
    triggerRef.current = event.currentTarget;
    setSelected(photos.findIndex(entry => entry.id === item.id));
  }
  function movePhoto(direction) { setSelected(index => (index + direction + photos.length) % photos.length); }
  function closePhoto() { dialogRef.current.close(); }
  function photoQuote(item) { return whatsappUrl(`Olá, D&L Prime! Vi a foto "${item.title}" no mostruário do site e gostaria de conversar sobre um projeto semelhante. Podemos fazer um orçamento?`); }

  return <div className="portfolio">

    <div className="portfolio-grid">{photos.map(item => <figure key={item.id} className="portfolio-photo"><button type="button" className="photo-open" onClick={event => openPhoto(item, event)} aria-label={`Ampliar foto: ${item.title}`}><img src={item.thumb} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async"/><span className="photo-zoom"><ZoomIn size={18}/><span>Ampliar</span></span></button><figcaption><h3>{item.title}</h3><a href={photoQuote(item)} target="_blank" rel="noopener noreferrer" aria-label={`Pedir orçamento inspirado em ${item.title.toLowerCase()} pelo WhatsApp`}>Quero um projeto assim <WhatsAppIcon size={16}/></a></figcaption></figure>)}</div>
    <dialog ref={dialogRef} className="photo-dialog" aria-labelledby="photo-dialog-title" onClose={() => { setSelected(null); triggerRef.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) closePhoto(); }} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); movePhoto(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); movePhoto(-1); } }}>
      {photo && <div className="photo-dialog-inner"><div className="photo-dialog-header"><div><p>FOTO {selected + 1} / {photos.length}</p><h3 id="photo-dialog-title">{photo.title}</h3></div><button className="photo-close" type="button" onClick={closePhoto} aria-label="Fechar foto" autoFocus><X size={24}/></button></div><div className="photo-dialog-stage"><img src={photo.src} alt={photo.alt} width={photo.width * 2} height={photo.height * 2}/><button className="photo-prev" type="button" onClick={() => movePhoto(-1)} aria-label="Foto anterior"><ChevronLeft/></button><button className="photo-next" type="button" onClick={() => movePhoto(1)} aria-label="Próxima foto"><ChevronRight/></button></div><a className="button button-gold photo-dialog-cta" href={photoQuote(photo)} target="_blank" rel="noopener noreferrer">Conversar sobre este projeto <WhatsAppIcon size={18}/></a></div>}
    </dialog>
  </div>;
}

// Melhorias progressivas. O site funciona inteiro sem este arquivo.
const topo = document.querySelector<HTMLElement>('[data-topo]');
const zap = document.querySelector<HTMLElement>('[data-zap]');
const hero = document.querySelector<HTMLElement>('[data-hero]');

const aoRolar = () => {
  const y = window.scrollY;
  topo?.classList.toggle('rolou', y > 12);
  const limite = hero ? hero.offsetHeight * 0.7 : 480;
  zap?.classList.toggle('mostrar', y > limite);
};
aoRolar();
window.addEventListener('scroll', aoRolar, { passive: true });

// Fecha o menu do celular ao escolher um destino
document.querySelectorAll<HTMLDetailsElement>('details.menu').forEach((menu) => {
  menu.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) menu.open = false;
  });
});

// Seletor de desafios (padrão de abas acessível)
document.querySelectorAll<HTMLElement>('[data-abas]').forEach((raiz) => {
  const abas = Array.from(raiz.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const paineis = Array.from(raiz.querySelectorAll<HTMLElement>('[role="tabpanel"]'));
  const ativar = (i: number, foco = false) => {
    abas.forEach((aba, k) => {
      const sel = k === i;
      aba.setAttribute('aria-selected', String(sel));
      aba.tabIndex = sel ? 0 : -1;
      paineis[k].hidden = !sel;
    });
    if (foco) abas[i].focus();
  };
  abas.forEach((aba, i) => {
    aba.addEventListener('click', () => ativar(i));
    aba.addEventListener('keydown', (e) => {
      const n = abas.length;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); ativar((i + 1) % n, true); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); ativar((i - 1 + n) % n, true); }
      if (e.key === 'Home') { e.preventDefault(); ativar(0, true); }
      if (e.key === 'End') { e.preventDefault(); ativar(n - 1, true); }
    });
  });
  raiz.classList.add('abas-prontas');
  ativar(0);
});

// ---- Motion progressivo (desligado com "reduzir movimento") ----
const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fino = window.matchMedia('(pointer: fine)').matches;

if (!calmo && 'IntersectionObserver' in window) {
  const alvos = document.querySelectorAll<HTMLElement>('.sec-cabeca, .case-texto, .lab-lista, .painel-texto, .sobre-texto, .contato-in, .pc-corpo, .pc-ficha');
  const io = new IntersectionObserver(
    (entradas) => entradas.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -12% 0px' },
  );
  const preparar = () => {
    const corte = window.scrollY + window.innerHeight * 0.9;
    alvos.forEach((el) => {
      if (el.getBoundingClientRect().top + window.scrollY < corte) return; // o que já está na tela não espera
      el.classList.add('revela');
      io.observe(el);
    });
  };
  if ('requestIdleCallback' in window) requestIdleCallback(preparar, { timeout: 800 });
  else setTimeout(preparar, 200);
}

if (!calmo && fino) {
  // Luz que segue o cursor na abertura
  hero?.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', `${e.clientX - r.left}px`);
    hero.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
  // Inclinação dos cases
  document.querySelectorAll<HTMLElement>('.case-visual').forEach((caixa) => {
    const vc = caixa.querySelector<HTMLElement>('.vc');
    if (!vc) return;
    caixa.addEventListener('pointermove', (e) => {
      const r = caixa.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      vc.style.transform = `rotateY(${x * 9}deg) rotateX(${-y * 7}deg) translateZ(10px)`;
    });
    caixa.addEventListener('pointerleave', () => { vc.style.transform = ''; });
  });
  // Botões magnéticos
  document.querySelectorAll<HTMLElement>('[data-ima]').forEach((btn) => {
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.18}px ${(e.clientY - r.top - r.height / 2) * 0.3}px`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.translate = ''; });
  });
}

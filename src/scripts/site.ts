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

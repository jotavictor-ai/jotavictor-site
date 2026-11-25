// Contatos e links do site. Trocar aqui reflete em todas as páginas.
const numero = '5584996887483';
const mensagem = 'Oi, João! Vim pelo jotavictor.com e quero conversar sobre um projeto.';

export const contato = {
  whatsapp: `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
  whatsappTexto: '(84) 99688-7483',
  email: 'contato@jotavictor.com',
  instagramFit: 'https://www.instagram.com/jotav.fit/',
  github: 'https://github.com/joaovsgoncalves1-jpg',
};

export const whatsappCom = (texto: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

export const site = {
  nome: 'João Victor',
  marca: 'jotavictor',
  titulo: 'João Victor · Sites, sistemas e IA para empresas',
  descricao:
    'Estúdio independente de tecnologia em Natal, RN. Sites, sistemas e assistentes de IA para empresas, do problema real à solução funcionando.',
  local: 'Natal, RN',
};

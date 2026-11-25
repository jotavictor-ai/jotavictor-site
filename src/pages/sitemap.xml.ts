import { getCollection } from 'astro:content';

export async function GET() {
  const trabalhos = await getCollection('trabalhos', ({ data }) => data.visivel);
  const urls = ['https://jotavictor.com/', ...trabalhos.map((t) => `https://jotavictor.com/trabalhos/${t.id}/`)];
  const corpo = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(corpo, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

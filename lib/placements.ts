/* Placement diagram renderer. Page = A5 (148x210) drawn in units. Returns SVG string. */
const NAVY = '#28387F', YEL = '#FFCD0D', INK = '#1E2540', GREY = '#C9D1DE', LIGHT = '#EEF2F8', WHITE = '#FFFFFF', TXT = '#8A94A8';
const PW = 148, PH = 210; // spread pages touch at the spine

function editorial(x: number, y: number, w: number, h: number, seed: number) {
  // grey placeholder content: a photo block + text lines
  let s = '';
  const photoH = h * (seed % 2 ? 0.42 : 0.36);
  s += `<rect x="${x}" y="${y}" width="${w}" height="${photoH}" fill="${GREY}"/>`;
  let ly = y + photoH + 8;
  const lines = Math.floor((y + h - ly) / 7);
  for (let i = 0; i < lines; i++) {
    const lw = w * (i % 4 === 3 ? 0.55 : 0.92);
    s += `<rect x="${x}" y="${ly}" width="${lw}" height="2.4" rx="1.2" fill="${GREY}"/>`;
    ly += 7;
  }
  return s;
}
function page(x: number, y: number, opts: { content?: boolean; header?: boolean; seed?: number } = {}) {
  let s = `<rect x="${x}" y="${y}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>`;
  if (opts.content !== false) {
    const m = 10;
    s += editorial(x + m, y + m + (opts.header ? 12 : 0), PW - 2 * m, PH - 2 * m - (opts.header ? 12 : 0) - 8, opts.seed || 1);
    if (opts.header) s += `<rect x="${x + m}" y="${y + m}" width="${PW - 2 * m}" height="6" fill="${LIGHT}"/>`;
    s += `<rect x="${x + PW / 2 - 4}" y="${y + PH - 9}" width="8" height="2" fill="${GREY}"/>`;
  }
  return s;
}
function ad(x: number, y: number, w: number, h: number, label: string, small?: boolean) {
  const fs = small ? 6.5 : 9;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${YEL}" stroke="${NAVY}" stroke-width="1.2"/>
    <line x1="${x}" y1="${y}" x2="${x + w}" y2="${y + h}" stroke="${NAVY}" stroke-width="0.5" opacity=".35"/>
    <line x1="${x + w}" y1="${y}" x2="${x}" y2="${y + h}" stroke="${NAVY}" stroke-width="0.5" opacity=".35"/>
    <rect x="${x + w / 2 - (label.length * fs * 0.32) - 4}" y="${y + h / 2 - fs * 0.8}" width="${label.length * fs * 0.64 + 8}" height="${fs * 1.6}" rx="2" fill="${NAVY}"/>
    <text x="${x + w / 2}" y="${y + h / 2 + fs * 0.35}" text-anchor="middle" style="font-family:var(--font-raleway),Raleway,Arial,sans-serif" font-weight="700" font-size="${fs}" fill="#fff">${label}</text>`;
}
function cover(x: number, y: number) {
  let s = `<rect x="${x}" y="${y}" width="${PW}" height="${PH}" fill="${NAVY}" stroke="#B8C1D1" stroke-width="0.8"/>
    <rect x="${x + 10}" y="${y + 12}" width="70" height="9" fill="${WHITE}" opacity=".9"/>
    <rect x="${x + 10}" y="${y + 24}" width="40" height="3" fill="${YEL}"/>`;
  return s;
}
function svg(w: number, h: number, inner: string) { return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`; }
const pad = 8;

const D: Record<string, () => string> = {};
// --- standard placements
D.cover = () => svg(PW + 2 * pad, PH + 2 * pad, cover(pad, pad) + ad(pad + 10, pad + 40, PW - 20, PH - 62, 'COVER VISUAL') + `<rect x="${pad + 10}" y="${pad + PH - 18}" width="${PW - 20}" height="8" fill="${WHITE}" opacity=".9"/>`);
D.fakecover = () => svg(PW * 2 + 3 * pad, PH + 2 * pad,
  cover(pad, pad) + `<text x="${pad + PW / 2}" y="${pad + PH / 2}" text-anchor="middle" font-size="7" fill="#fff" font-family="Arial">real cover</text>` +
  `<rect x="${pad * 2 + PW}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad * 2 + PW, pad, PW, PH, 'BRAND COVER WRAP') +
  `<path d="M ${pad * 2 + PW} ${pad} l -14 12" stroke="${NAVY}" stroke-width="1" fill="none"/>`);
D.backcover = () => svg(PW + 2 * pad, PH + 2 * pad, `<rect x="${pad}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad, pad, PW, PH, 'BACK COVER') + `<rect x="${pad + 10}" y="${pad + PH - 16}" width="40" height="8" fill="${WHITE}"/>`);
D.ifc = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, `<rect x="${pad}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad, pad, PW, PH, 'INSIDE FRONT COVER') + page(pad + PW, pad, { header: true, seed: 2 }) + `<text x="${pad + PW * 1.5}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">page 1, editor's letter</text>`);
D.ibc = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 3 }) + `<rect x="${pad + PW}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad + PW, pad, PW, PH, 'INSIDE BACK COVER') + `<text x="${pad + PW / 2}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">last editorial page</text>`);
D.gatefold = () => svg(PW * 3 + 2 * pad, PH + 2 * pad,
  ad(pad, pad, PW - 3, PH, 'PANEL 1') + ad(pad + PW, pad, PW, PH, 'PANEL 2') + ad(pad + PW * 2, pad, PW, PH, 'PANEL 3') +
  `<line x1="${pad + PW}" y1="${pad}" x2="${pad + PW}" y2="${pad + PH}" stroke="${NAVY}" stroke-width="1" stroke-dasharray="3 2"/><line x1="${pad + PW * 2}" y1="${pad}" x2="${pad + PW * 2}" y2="${pad + PH}" stroke="${NAVY}" stroke-width="1" stroke-dasharray="3 2"/>` +
  `<text x="${pad + PW * 1.5}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">folds out from the cover, three panels</text>`);
D.spread = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, `<rect x="${pad}" y="${pad}" width="${PW * 2}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad, pad, PW * 2, PH, 'DOUBLE PAGE SPREAD') + `<line x1="${pad + PW}" y1="${pad}" x2="${pad + PW}" y2="${pad + PH}" stroke="${NAVY}" stroke-width="0.6" opacity=".5"/>`);
D.fourpages = () => svg(PW * 4 + 3 * pad, PH + 2 * pad,
  ad(pad, pad, PW * 2, PH, 'PAGES 1 + 2') + `<line x1="${pad + PW}" y1="${pad}" x2="${pad + PW}" y2="${pad + PH}" stroke="${NAVY}" stroke-width="0.6" opacity=".5"/>` +
  ad(pad * 2 + PW * 2, pad, PW * 2, PH, 'PAGES 3 + 4') + `<line x1="${pad * 2 + PW * 3}" y1="${pad}" x2="${pad * 2 + PW * 3}" y2="${pad + PH}" stroke="${NAVY}" stroke-width="0.6" opacity=".5"/>` +
  `<text x="${pad * 1.5 + PW * 2}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">two consecutive spreads, advertorial or brand story</text>`);
D.fullpage = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 1 }) + `<rect x="${pad + PW}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad + PW, pad, PW, PH, 'FULL PAGE'));
D.halfpage = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 2 }) + page(pad + PW, pad, { content: false }) + editorial(pad + PW + 10, pad + 10, PW - 20, PH / 2 - 16, 1) + ad(pad + PW + 10, pad + PH / 2 + 2, PW - 20, PH / 2 - 12, 'HALF PAGE'));
D.quarterpage = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 3 }) + page(pad + PW, pad, { content: false }) + editorial(pad + PW + 10, pad + 10, PW - 20, PH / 2 - 16, 2) + editorial(pad + PW + 10, pad + PH / 2 + 2, (PW - 20) / 2 - 3, PH / 2 - 12, 1) + ad(pad + PW + 10 + (PW - 20) / 2 + 3, pad + PH / 2 + 2, (PW - 20) / 2 - 3, PH / 2 - 12, 'QUARTER', true));
D.qa = () => svg(PW * 2 + 2 * pad, PH + 2 * pad,
  `<rect x="${pad}" y="${pad}" width="${PW * 2}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` +
  ad(pad + 10, pad + 10, PW - 20, PH - 20, 'PORTRAIT') +
  `<rect x="${pad + PW + 10}" y="${pad + 10}" width="${PW - 20}" height="6" fill="${YEL}"/>` +
  Array.from({ length: 5 }).map((_, i) => `<rect x="${pad + PW + 10}" y="${pad + 26 + i * 34}" width="14" height="3" fill="${NAVY}"/>` + [0, 1, 2].map(j => `<rect x="${pad + PW + 10}" y="${pad + 33 + i * 34 + j * 6}" width="${PW - 20 - (j === 2 ? 40 : 0)}" height="2.4" rx="1.2" fill="${GREY}"/>`).join('')).join('') +
  `<text x="${pad + PW * 1.5}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">two pages, questions and answers with the brand, marked "In partnership with"</text>`);
D.directory = () => {
  let cells = '';
  const cols = 3, rows = 4, cw = (PW - 20) / cols, ch = (PH - 34) / rows;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const x = pad + PW + 10 + c * cw, y = pad + 22 + r * ch;
    if (r === 1 && c === 1) cells += ad(x + 1.5, y + 1.5, cw - 3, ch - 3, 'BLOCK', true);
    else cells += `<rect x="${x + 1.5}" y="${y + 1.5}" width="${cw - 3}" height="${ch - 3}" fill="${LIGHT}"/><rect x="${x + 5}" y="${y + 5}" width="${cw - 10}" height="${ch * 0.45}" fill="${GREY}"/>`;
  }
  return svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 2 }) + page(pad + PW, pad, { content: false }) + `<rect x="${pad + PW + 10}" y="${pad + 10}" width="60" height="6" fill="${NAVY}"/>` + cells);
};
// --- sponsored editorial
D.section = () => svg(PW * 2 + 2 * pad, PH + 2 * pad,
  `<rect x="${pad}" y="${pad}" width="${PW * 2}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` +
  ad(pad + 10, pad + 10, PW * 2 - 20, 22, 'WHAT IS NEW, PRESENTED BY BRAND') +
  editorial(pad + 10, pad + 40, PW - 20, PH - 50, 1) + editorial(pad + PW + 10, pad + 40, PW - 20, PH - 50, 2) +
  `<text x="${pad + PW}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">the brand owns the section header on every page of the section for the issue</text>`);
D.editorletter = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, `<rect x="${pad}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + `<rect x="${pad + 10}" y="${pad + 10}" width="80" height="9" fill="${NAVY}"/>` + editorial(pad + 10, pad + 28, PW - 20, PH - 60, 3) + ad(pad + PW - 60, pad + PH - 30, 50, 18, 'LOGO + LINE', true) + page(pad + PW, pad, { seed: 1 }));
D.shopthelook = () => svg(PW * 2 + 2 * pad, PH + 2 * pad,
  `<rect x="${pad}" y="${pad}" width="${PW * 2}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` +
  ad(pad + 10, pad + 10, PW - 20, PH - 20, 'STYLED LOOK') +
  [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2], [1, 2]].map(([c, r]) => { const w = (PW - 26) / 2, h = (PH - 40) / 3; const x = pad + PW + 10 + c * (w + 6), y = pad + 16 + r * (h + 4); return `<rect x="${x}" y="${y}" width="${w}" height="${h * 0.7}" fill="${GREY}"/><rect x="${x}" y="${y + h * 0.74}" width="${w * 0.8}" height="2.4" fill="${GREY}"/><rect x="${x}" y="${y + h * 0.74 + 5}" width="${w * 0.35}" height="3" fill="${YEL}"/>`; }).join('') +
  `<text x="${pad + PW}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">left: the brand's styled photo. right: the products with prices, numbered</text>`);
D.destination = () => svg(PW * 2 + 2 * pad, PH + 2 * pad,
  `<rect x="${pad}" y="${pad}" width="${PW * 2}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` +
  ad(pad + 10, pad + 10, PW * 2 - 20, PH * 0.5, 'DESTINATION HERO PHOTO') +
  editorial(pad + 10, pad + PH * 0.5 + 18, PW - 20, PH * 0.5 - 30, 1) + editorial(pad + PW + 10, pad + PH * 0.5 + 18, PW - 20, PH * 0.5 - 30, 2) +
  ad(pad + PW + 10, pad + PH - 34, PW - 20, 22, 'HOTEL / AGENCY OFFER', true) +
  `<text x="${pad + PW}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">a city or resort guide written by us, the partner's offer at the end</text>`);
D.pairing = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 2 }) + `<rect x="${pad + PW}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + `<rect x="${pad + PW + 10}" y="${pad + 10}" width="70" height="6" fill="${NAVY}"/>` + ad(pad + PW + 10, pad + 22, (PW - 26) / 2, 80, 'DRINK', true) + ad(pad + PW + 16 + (PW - 26) / 2, pad + 22, (PW - 26) / 2, 80, 'FOOD', true) + editorial(pad + PW + 10, pad + 110, PW - 20, PH - 122, 3).replace(/<rect[^>]*height="[^"]*" fill="#C9D1DE"\/>/, ''));
// --- add-ons
D.scentstrip = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 1 }) + `<rect x="${pad + PW}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad + PW, pad, PW, PH, 'FRAGRANCE PAGE') + `<rect x="${pad + PW + PW - 42}" y="${pad + 30}" width="34" height="${PH - 60}" fill="#fff" stroke="${NAVY}" stroke-width="1" stroke-dasharray="2 1.5"/><text x="${pad + PW + PW - 25}" y="${pad + PH / 2}" text-anchor="middle" font-size="5" fill="${NAVY}" font-family="Arial" transform="rotate(-90 ${pad + PW + PW - 25} ${pad + PH / 2})">tip-in scent strip, peel to smell</text>`);
D.sachet = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 3 }) + `<rect x="${pad + PW}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad + PW, pad, PW, PH, 'SKINCARE PAGE') + `<rect x="${pad + PW + 20}" y="${pad + PH - 78}" width="50" height="40" rx="3" fill="#fff" stroke="${NAVY}" stroke-width="1"/><rect x="${pad + PW + 20}" y="${pad + PH - 78}" width="50" height="6" fill="${NAVY}"/><text x="${pad + PW + 45}" y="${pad + PH - 52}" text-anchor="middle" font-size="5" fill="${NAVY}" font-family="Arial">bound-in sachet</text>`);
D.insert = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, `<rect x="${pad}" y="${pad}" width="${PW * 2}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + editorial(pad + 10, pad + 10, PW - 20, PH - 20, 1) + editorial(pad + PW + 10, pad + 10, PW - 20, PH - 20, 2) + `<g transform="rotate(-8 ${pad + PW} ${pad + PH / 2})">` + ad(pad + PW - 55, pad + 40, 110, 140, 'LOOSE INSERT') + `</g>` + `<text x="${pad + PW}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">separate card or flyer slipped inside the magazine, up to A5, max 10 g</text>`);
D.coupon = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 2 }) + `<rect x="${pad + PW}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad + PW, pad, PW, PH, 'BRAND PAGE') + `<rect x="${pad + PW + 12}" y="${pad + PH - 70}" width="${PW - 24}" height="54" fill="#fff" stroke="${NAVY}" stroke-width="1" stroke-dasharray="3 2"/><rect x="${pad + PW + 20}" y="${pad + PH - 60}" width="60" height="7" fill="${NAVY}"/><rect x="${pad + PW + 20}" y="${pad + PH - 48}" width="80" height="2.4" fill="${GREY}"/><rect x="${pad + PW + PW - 50}" y="${pad + PH - 60}" width="30" height="30" fill="${INK}"/><text x="${pad + PW + 20}" y="${pad + PH - 24}" font-size="5" fill="${NAVY}" font-family="Arial">cut-out or scan voucher, tracked in store</text>`);
D.qr = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 1 }) + `<rect x="${pad + PW}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + ad(pad + PW, pad, PW, PH, 'BRAND PAGE') + `<rect x="${pad + PW + PW - 46}" y="${pad + PH - 46}" width="34" height="34" fill="#fff" stroke="${NAVY}" stroke-width="1"/><rect x="${pad + PW + PW - 42}" y="${pad + PH - 42}" width="10" height="10" fill="${INK}"/><rect x="${pad + PW + PW - 22}" y="${pad + PH - 42}" width="10" height="10" fill="${INK}"/><rect x="${pad + PW + PW - 42}" y="${pad + PH - 22}" width="10" height="10" fill="${INK}"/><rect x="${pad + PW + PW - 26}" y="${pad + PH - 26}" width="12" height="12" fill="${INK}" opacity=".6"/><text x="${pad + PW + 12}" y="${pad + PH - 26}" font-size="5" fill="${NAVY}" font-family="Arial">QR opens video or app content</text>`);
D.banner = () => svg(PW * 2 + 2 * pad, PH + 2 * pad,
  `<rect x="${pad + 10}" y="${pad + 20}" width="${PW * 2 - 110}" height="${PH - 40}" rx="4" fill="#fff" stroke="#B8C1D1" stroke-width="0.8"/><rect x="${pad + 10}" y="${pad + 20}" width="${PW * 2 - 110}" height="12" rx="4" fill="${LIGHT}"/>` +
  ad(pad + 18, pad + 38, PW * 2 - 126, 34, 'WEB BANNER') + editorial(pad + 18, pad + 80, PW * 2 - 126, PH - 110, 1) +
  `<rect x="${pad + PW * 2 - 90}" y="${pad + 10}" width="82" height="${PH - 20}" rx="10" fill="#fff" stroke="${INK}" stroke-width="1.5"/>` + ad(pad + PW * 2 - 84, pad + 40, 70, 44, 'APP BANNER', true) + editorial(pad + PW * 2 - 84, pad + 92, 70, PH - 130, 2) +
  `<text x="${pad + PW}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">one quarter on the BDF website and app</text>`);
D.quiz = () => svg(PW * 2 + 2 * pad, PH + 2 * pad, page(pad, pad, { seed: 3 }) + `<rect x="${pad + PW}" y="${pad}" width="${PW}" height="${PH}" fill="${WHITE}" stroke="#B8C1D1" stroke-width="0.8"/>` + `<rect x="${pad + PW + 10}" y="${pad + 10}" width="90" height="8" fill="${NAVY}"/>` + [0, 1, 2, 3].map(i => `<rect x="${pad + PW + 10}" y="${pad + 28 + i * 26}" width="8" height="8" fill="#fff" stroke="${NAVY}" stroke-width="1"/><rect x="${pad + PW + 22}" y="${pad + 30 + i * 26}" width="${PW - 40}" height="2.4" fill="${GREY}"/><rect x="${pad + PW + 22}" y="${pad + 36 + i * 26}" width="${PW - 70}" height="2.4" fill="${GREY}"/>`).join('') + ad(pad + PW + 10, pad + PH - 66, PW - 20, 54, 'PRIZE + BRAND', true));
D.social = () => svg(PW * 2 + 2 * pad, PH + 2 * pad,
  `<rect x="${pad + 20}" y="${pad + 10}" width="100" height="${PH - 20}" rx="10" fill="#fff" stroke="${INK}" stroke-width="1.5"/>` + ad(pad + 26, pad + 30, 88, 110, 'IG POST', true) + editorial(pad + 26, pad + 146, 88, PH - 166, 1) +
  `<rect x="${pad + PW + 20}" y="${pad + 10}" width="100" height="${PH - 20}" rx="10" fill="#fff" stroke="${INK}" stroke-width="1.5"/>` + ad(pad + PW + 22, pad + 12, 96, PH - 24, 'IG STORY', true) +
  `<text x="${pad + PW}" y="${pad + PH + 6}" text-anchor="middle" font-size="5.5" fill="${TXT}" font-family="Arial">digital extension included with placements above half page</text>`);

export const PLACEMENTS = D;

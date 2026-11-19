import { writeFile } from 'node:fs/promises';
import { projects, workTools } from '../content/projects.mjs';

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

const covers = {
  friendtalk: '<img class="friendtalk-photo" src="assets/friendtalk.jpg" alt="">',
  promotion: '<div class="sale-cover"><span>자사몰 기획전</span><strong>썸머 블랙<br>프라이데이</strong><span>상품 선정 · 쿠폰 설계</span><i></i><i></i></div>',
  meta: '<div class="meta-cover"><img src="assets/meta-plain.jpg" alt="" loading="lazy"><img src="assets/meta-bind.jpg" alt="" loading="lazy"></div>',
  ugc: '<div class="ugc-cover"><div><span>제품 소개형</span><strong>8<small>인</small></strong></div><div><span>매장 방문형</span><strong>5<small>인</small></strong></div></div>',
};

function renderCard(project) {
  const { id, cover, category, title, summary, metric, metricLabel } = project;
  return `<article class="project-card">
    <a class="project-link" id="card-${escapeHtml(id)}" href="projects/${escapeHtml(id)}.html">
      <div class="cover cover-${escapeHtml(cover)}" aria-hidden="true">${covers[cover]}</div>
      <div class="card-body">
        <div><p class="category">${escapeHtml(category)}</p><h3>${escapeHtml(title)}</h3><p class="card-copy">${escapeHtml(summary)}</p></div>
        <div class="card-metric"><strong>${escapeHtml(metric)}</strong><span>${escapeHtml(metricLabel)}</span></div>
      </div>
    </a>
  </article>`;
}

function renderTool({ title, description, metric }) {
  return `<article class="tool"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><strong>${escapeHtml(metric)}</strong></article>`;
}

function renderEvidence({ title, type, caption, images, rows }) {
  const heading = `<h2>${escapeHtml(title)}</h2>`;
  if (type === 'crm') {
    return `${heading}<figure class="crm-evidence"><img src="../assets/friendtalk.jpg" alt="주얼리 네 제품을 한 화면에 배치한 카카오 친구톡 발송 소재" width="700" height="525"><figcaption>${escapeHtml(caption)}</figcaption></figure>`;
  }
  if (type === 'meta') {
    const gallery = images.map(({ file, alt, label, metric }) => `<figure>
      <img src="../assets/${escapeHtml(file)}" alt="${escapeHtml(alt)}" width="137" height="137">
      <figcaption><span>${escapeHtml(label)}</span><strong>${escapeHtml(metric)}</strong></figcaption>
    </figure>`);
    return `${heading}<p class="caption">${escapeHtml(caption)}</p><div class="evidence-gallery">${gallery.join('')}</div>`;
  }
  const data = rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`);
  return `${heading}<dl class="evidence-rows">${data.join('')}</dl>`;
}

function renderProject(project) {
  const { id, category, title, period, role, metric, metricLabel, metricBasis, context, steps, evidence } = project;
  const others = projects.filter((other) => other.id !== id).map((other) => `<a href="${escapeHtml(other.id)}.html">${escapeHtml(other.title)}</a>`);
  const decisions = steps.map(([heading, content]) => `<li><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(content)}</p></li>`);
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${escapeHtml(project.summary)}"><meta name="theme-color" content="#f7f4eb">
<title>${escapeHtml(title)} · 남귀현 포트폴리오</title><link rel="stylesheet" href="../assets/work.css"></head>
<body>
  <a class="skip" href="#content">본문으로 이동</a>
  <header class="header frame">
    <a class="signature" href="../index.html" aria-label="남귀현 포트폴리오 홈">남귀현<span></span></a>
    <nav aria-label="주 메뉴"><a href="../index.html#projects">대표 작업</a><a href="../index.html#tools">업무 도구</a><a href="../index.html#profile">프로필</a></nav>
  </header>
  <main id="content" class="frame detail" tabindex="-1">
    <a class="back" href="../index.html#card-${escapeHtml(id)}">대표 작업 목록</a>
    <article aria-labelledby="project-title">
      <header class="detail-head">
        <div><p class="eyebrow">${escapeHtml(category)} · ${escapeHtml(period)}</p><h1 id="project-title">${escapeHtml(title)}</h1><p class="detail-context">${escapeHtml(context)}</p></div>
        <div class="detail-metric"><p class="metric-label">${escapeHtml(metricLabel)}</p><p class="metric-value">${escapeHtml(metric)}</p><p class="metric-note">${escapeHtml(metricBasis)}</p></div>
      </header>
      <div class="role"><h2>내가 맡은 일</h2><p>${escapeHtml(role)}</p></div>
      <section class="detail-section evidence">${renderEvidence(evidence)}</section>
      <section class="detail-section"><h2>진행 과정</h2><ol class="steps">${decisions.join('')}</ol></section>
    </article>
    <nav class="more-projects" aria-label="다른 대표 작업">${others.join('')}</nav>
  </main>
  <footer class="footer frame"><span>남귀현 포트폴리오</span><a href="../index.html">홈으로</a></footer>
</body></html>
`;
}

export async function buildWork(homeTemplate) {
  const home = homeTemplate.replace('{{PROJECTS}}', () => projects.map(renderCard).join('\n')).replace('{{TOOLS}}', () => workTools.map(renderTool).join('\n'));
  await writeFile('site/index.html', home);
  await Promise.all(projects.map((project) => writeFile(`site/projects/${project.id}.html`, renderProject(project))));
}

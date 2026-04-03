"use client";
import { useState, useEffect, useRef } from "react";

/* ─── The Founding Clients document uses the EXACT same design language
       as the original z-pay institutional page:
       - Font: Bricolage Grotesque (display) + DM Sans (body) + DM Mono (code)
       - Accent: #ff7a18 (orange) — NOT cyan/gold
       - Background: #060912
       - Same nav, same card styles, same section patterns
─── */

const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

:root {
  --bg: #060912; --bg2: #090d18; --card: #0d1322; --card2: #101828;
  --border: rgba(255,255,255,0.055); --border2: rgba(255,255,255,0.10);
  --accent: #ff7a18; --accent2: #ff4d00;
  --accent-dim: rgba(255,122,24,0.12); --accent-glow: rgba(255,122,24,0.30);
  --teal: #06b6d4; --teal-dim: rgba(6,182,212,0.10);
  --purple: #818cf8; --purple-dim: rgba(129,140,248,0.10);
  --amber: #fbbf24; --amber-dim: rgba(251,191,36,0.10);
  --text: #f1f5f9; --text2: #8aa0bd; --text3: #445a78;
  --radius: 16px;
  --safe-top: env(safe-area-inset-top, 0px);
  --safe-right: env(safe-area-inset-right, 0px);
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --safe-left: env(safe-area-inset-left, 0px);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; max-width: 100%; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body {
  background: var(--bg); color: var(--text);
  font-family: 'DM Sans', sans-serif; min-height: 100vh; overflow-x: hidden;
}
@keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.35} }
@keyframes reveal-in { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
.rv { opacity:0; transform:translateY(24px); transition: opacity .6s ease, transform .6s ease; }
.rv.in { opacity:1; transform:translateY(0); }
.rv.d1 { transition-delay:.07s; } .rv.d2 { transition-delay:.14s; } .rv.d3 { transition-delay:.21s; }

/* NAV */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  backdrop-filter: blur(22px) saturate(1.35);
  background: rgba(6,9,18,0.78); border-bottom: 1px solid var(--border);
  height: 64px;
  padding: calc(10px + var(--safe-top)) calc(26px + var(--safe-right)) 10px calc(26px + var(--safe-left));
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
}
@media(max-width:480px){ nav { height:54px; padding: calc(5px + var(--safe-top)) 12px 5px; } }

.brand { display:flex; align-items:center; gap:12px; text-decoration:none; }
.brand-badge {
  width:38px; height:38px; border-radius:12px;
  background: linear-gradient(145deg, rgba(255,122,24,0.14), rgba(255,77,0,0.06));
  border: 1px solid rgba(255,122,24,0.24);
  display:flex; align-items:center; justify-content:center; overflow:hidden;
}
.brand-badge img { width:100%; height:100%; object-fit:cover; }
.brand-name { font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:15px; letter-spacing:0.06em; }
.brand-sub { font-size:9px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--text3); }

.back-btn {
  background: transparent; border: 1px solid var(--border2);
  color: var(--text2); font-family:'DM Sans',sans-serif;
  font-size:13px; font-weight:700; padding:9px 16px; border-radius:12px;
  cursor:pointer; transition:all .18s ease; text-decoration:none;
  display:inline-flex; align-items:center; gap:6px; white-space:nowrap;
}
.back-btn:hover { border-color:rgba(255,122,24,0.4); color:var(--accent); }

/* HERO */
.hero {
  padding: calc(100px + var(--safe-top)) calc(22px + var(--safe-right)) 80px calc(22px + var(--safe-left));
  max-width: 1100px; margin: 0 auto; position: relative;
}
.hero::before {
  content:''; position:absolute; top:60px; left:-100px; right:-100px; height:400px;
  background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,122,24,0.08) 0%, transparent 100%);
  pointer-events:none;
}
.eyebrow {
  display:inline-flex; align-items:center; gap:8px;
  background: rgba(255,122,24,0.09); border:1px solid rgba(255,122,24,0.20);
  border-radius:999px; padding:7px 16px; font-size:12px; font-weight:900;
  color:var(--accent); letter-spacing:0.10em; text-transform:uppercase;
  margin-bottom:26px; animation: fadeUp .6s ease both;
}
.eyebrow-dot { width:7px; height:7px; border-radius:50%; background:var(--accent); animation:blink 2s ease infinite; }
h1 {
  font-family:'Bricolage Grotesque',sans-serif;
  font-size: clamp(26px, 6vw, 72px); font-weight:900;
  line-height:1.04; letter-spacing:-0.03em; max-width:820px;
  margin-bottom:18px; animation: fadeUp .7s .08s ease both;
}
h1 em { font-style:normal; color:var(--accent); }
.hero-sub {
  font-size:17px; line-height:1.75; color:var(--text2);
  max-width:620px; margin-bottom:36px;
  animation: fadeUp .7s .16s ease both;
}
.hero-meta {
  display:grid; grid-template-columns: repeat(2,1fr); gap:1px;
  max-width:520px; border-radius:16px; overflow:hidden;
  border:1px solid var(--border); margin-bottom:36px;
  animation: fadeUp .7s .22s ease both;
}
.meta-block {
  background:var(--card); padding:16px 20px;
}
.meta-k { font-size:10px; font-weight:900; text-transform:uppercase; letter-spacing:0.12em; color:var(--text3); margin-bottom:5px; }
.meta-v { font-family:'DM Mono',monospace; font-size:13px; font-weight:700; color:var(--accent); }
.hero-ctas { display:flex; gap:12px; flex-wrap:wrap; animation: fadeUp .7s .28s ease both; }

.btn-accent {
  background: linear-gradient(135deg,var(--accent),var(--accent2)); color:#000;
  font-family:'DM Sans',sans-serif; font-size:14px; font-weight:900;
  padding:13px 26px; border-radius:13px; border:none; cursor:pointer;
  transition:transform .18s, box-shadow .18s;
  box-shadow:0 10px 34px rgba(255,122,24,0.18);
  text-decoration:none; display:inline-flex; align-items:center; white-space:nowrap;
}
.btn-accent:hover { transform:translateY(-2px); box-shadow:0 12px 40px rgba(255,122,24,0.28); }
.btn-outline {
  background:transparent; border:1px solid var(--border2); color:var(--text);
  font-family:'DM Sans',sans-serif; font-size:14px; font-weight:700;
  padding:13px 22px; border-radius:13px; cursor:pointer;
  transition:all .18s; text-decoration:none;
  display:inline-flex; align-items:center; white-space:nowrap;
}
.btn-outline:hover { border-color:rgba(255,122,24,0.4); color:var(--accent); }

/* SECTION DIVIDER */
.divider {
  width:100%; height:1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255,122,24,0.08) 10%, rgba(255,122,24,0.40) 35%, rgba(6,182,212,0.35) 55%, rgba(129,140,248,0.20) 75%, transparent 100%);
}

/* SECTIONS */
.section { padding:80px calc(22px + var(--safe-right)) 80px calc(22px + var(--safe-left)); }
.section-inner { max-width:1100px; margin:0 auto; }
.chip {
  display:inline-flex; align-items:center; gap:7px;
  font-size:11px; font-weight:900; color:var(--accent);
  letter-spacing:0.13em; text-transform:uppercase; margin-bottom:10px;
}
.chip::before { content:''; width:16px; height:1.5px; background:var(--accent); }
h2 {
  font-family:'Bricolage Grotesque',sans-serif;
  font-size: clamp(22px, 5vw, 46px); font-weight:900;
  line-height:1.08; letter-spacing:-0.03em; margin-bottom:12px;
}
h2 em { font-style:normal; color:var(--accent); }
.lead { font-size:16px; color:var(--text2); line-height:1.75; max-width:600px; }

/* CARDS */
.grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
@media(max-width:768px){ .grid2,.grid3 { grid-template-columns:1fr; } }
@media(min-width:769px) and (max-width:960px){ .grid3 { grid-template-columns:1fr 1fr; } }

.card {
  background:var(--card); border:1px solid var(--border);
  border-radius:20px; padding:26px; transition:all .26s ease; position:relative; overflow:hidden;
}
.card::after { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent); }
.card:hover { border-color:var(--border2); transform:translateY(-3px); background:var(--card2); }
.card.hi { background:linear-gradient(135deg,rgba(255,122,24,0.08),var(--card)); border-color:rgba(255,122,24,0.22); }
.card.hi:hover { border-color:rgba(255,122,24,0.38); }

.card-icon {
  width:46px; height:46px; border-radius:14px;
  display:flex; align-items:center; justify-content:center; font-size:20px; margin-bottom:14px;
  background:var(--accent-dim); border:1px solid rgba(255,122,24,0.18);
}
.card-title { font-family:'Bricolage Grotesque',sans-serif; font-size:17px; font-weight:900; margin-bottom:7px; }
.card-body { font-size:13.5px; color:var(--text2); line-height:1.65; }

/* PILLAR CARD — 4 columns */
.pillars { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
@media(max-width:640px){ .pillars { grid-template-columns:1fr; } }

/* COMPLIANCE STACK */
.compliance-stack { display:flex; flex-direction:column; gap:0; border-radius:16px; overflow:hidden; border:1px solid var(--border); }
.cs-row {
  display:flex; align-items:center; gap:16px;
  padding:16px 20px; border-bottom:1px solid var(--border);
  background:var(--card);
}
.cs-row:last-child { border-bottom:none; }
.cs-row:nth-child(even) { background:var(--card2); }
.cs-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
.cs-layer { font-family:'DM Mono',monospace; font-size:11px; color:var(--text3); font-weight:700; letter-spacing:.06em; min-width:120px; text-transform:uppercase; }
.cs-desc { font-size:13px; color:var(--text2); flex:1; }
.cs-lv { font-family:'DM Mono',monospace; font-size:10px; color:var(--text3); }

/* CHECKLIST */
.checklist { display:flex; flex-direction:column; gap:8px; }
.check-item {
  display:flex; align-items:flex-start; gap:10px;
  background:var(--card); border:1px solid var(--border);
  border-radius:11px; padding:12px 16px;
}
.check-mark {
  width:20px; height:20px; border-radius:6px; flex-shrink:0;
  background:var(--accent-dim); border:1px solid rgba(255,122,24,0.22);
  display:flex; align-items:center; justify-content:center;
  font-size:10px; color:var(--accent); font-weight:900; margin-top:1px;
}
.check-text { font-size:13px; color:var(--text2); line-height:1.55; }

/* ECO GRID */
.eco-item {
  display:flex; align-items:flex-start; gap:14px;
  background:var(--card); border:1px solid var(--border);
  border-radius:14px; padding:18px; transition:all .22s;
}
.eco-item:hover { border-color:var(--border2); transform:translateY(-2px); }
.eco-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; margin-top:5px; }
.eco-name { font-family:'DM Mono',monospace; font-size:13px; font-weight:700; margin-bottom:4px; }
.eco-desc { font-size:13px; color:var(--text2); line-height:1.6; }

/* PILOT BOX */
.pilot-box {
  background:linear-gradient(135deg,rgba(255,122,24,0.08),var(--card));
  border:1px solid rgba(255,122,24,0.25); border-radius:22px; padding:36px;
  position:relative; overflow:hidden;
}
.pilot-box::before {
  content:''; position:absolute; top:0; left:0; right:0; height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,122,24,0.50),transparent);
}
.pilot-nums { display:flex; gap:32px; flex-wrap:wrap; margin-bottom:28px; }
.pilot-stat { }
.pilot-stat-val { font-family:'Bricolage Grotesque',sans-serif; font-size:48px; font-weight:900; color:var(--accent); line-height:1; }
.pilot-stat-label { font-size:13px; color:var(--text2); margin-top:4px; }

/* PLAN CARDS */
.price-card {
  background:var(--bg2); border:1px solid var(--border);
  border-radius:22px; padding:28px; position:relative; overflow:hidden; transition:all .28s;
}
.price-card:hover { transform:translateY(-4px); border-color:var(--border2); }
.price-card.featured { background:linear-gradient(145deg,rgba(255,122,24,0.10),var(--card)); border-color:rgba(255,122,24,0.28); box-shadow:0 0 60px rgba(255,122,24,0.06); }
.price-badge {
  position:absolute; top:14px; right:14px;
  background:linear-gradient(135deg,var(--accent),var(--accent2));
  color:#000; font-size:9px; font-weight:900; letter-spacing:.10em; text-transform:uppercase;
  padding:4px 10px; border-radius:999px;
}
.pc-plan { font-size:11px; font-weight:900; text-transform:uppercase; letter-spacing:.12em; color:var(--text2); margin-bottom:6px; }
.pc-price { font-family:'Bricolage Grotesque',sans-serif; font-size:40px; font-weight:900; line-height:1; margin-bottom:4px; }
.pc-price span { font-size:15px; color:var(--text2); font-weight:700; font-family:'DM Sans',sans-serif; }
.pc-desc { font-size:13px; color:var(--text2); margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border); }
.pc-fee {
  background:var(--card); border:1px solid var(--border); border-radius:11px;
  padding:10px 14px; margin-bottom:16px; font-size:12px; color:var(--text2); line-height:1.6;
}
.pc-fee strong { color:var(--text); font-family:'DM Mono',monospace; }
.pc-items { list-style:none; margin-bottom:20px; }
.pc-items li {
  display:flex; align-items:center; gap:9px; font-size:13px; color:var(--text2); padding:5px 0;
}
.pc-items li::before {
  content:'✓'; color:var(--accent); font-size:11px; font-weight:900;
  width:18px; height:18px; border-radius:5px;
  background:rgba(255,122,24,0.12); border:1px solid rgba(255,122,24,0.18);
  display:flex; align-items:center; justify-content:center; flex-shrink:0;
}
.pc-btn {
  width:100%; padding:12px; border-radius:13px; font-size:14px; font-weight:900;
  cursor:pointer; transition:all .18s; font-family:'DM Sans',sans-serif; border:none;
  display:flex; align-items:center; justify-content:center;
}
.pc-outline { background:transparent; border:1px solid var(--border2)!important; color:var(--text); }
.pc-outline:hover { border-color:rgba(255,122,24,0.4)!important; color:var(--accent); }
.pc-solid { background:linear-gradient(135deg,var(--accent),var(--accent2)); color:#000; box-shadow:0 10px 32px rgba(255,122,24,0.18); }
.pc-solid:hover { transform:translateY(-1px); box-shadow:0 12px 38px rgba(255,122,24,0.24); }
.fee-disc { font-size:12px; color:var(--text3); line-height:1.65; font-style:italic; margin-top:16px; }

/* COMMISSION MODELS */
.model-card {
  background:var(--card); border:1px solid var(--border); border-radius:18px; padding:24px;
  transition:all .24s;
}
.model-card:hover { border-color:rgba(255,122,24,0.28); transform:translateY(-2px); }
.model-label { font-size:10px; font-weight:900; text-transform:uppercase; letter-spacing:.12em; color:var(--text3); margin-bottom:8px; }
.model-name { font-family:'Bricolage Grotesque',sans-serif; font-size:18px; font-weight:900; margin-bottom:8px; }
.model-val { font-family:'DM Mono',monospace; font-size:15px; color:var(--accent); font-weight:700; margin-bottom:4px; }
.model-share { font-family:'DM Mono',monospace; font-size:13px; color:var(--teal); margin-bottom:12px; }
.model-note { font-size:13px; color:var(--text2); line-height:1.6; }

/* ROADMAP */
.roadmap-item { display:flex; gap:20px; position:relative; }
.rm-num {
  width:42px; height:42px; border-radius:50%; flex-shrink:0;
  display:flex; align-items:center; justify-content:center;
  font-family:'DM Mono',monospace; font-size:13px; font-weight:700; z-index:1;
}
.rm-content { padding-top:8px; flex:1; }
.rm-phase { font-family:'Bricolage Grotesque',sans-serif; font-size:18px; font-weight:900; margin-bottom:6px; }
.rm-status { display:inline-flex; align-items:center; gap:5px; font-size:10px; font-weight:900; letter-spacing:.10em; text-transform:uppercase; padding:3px 10px; border-radius:999px; margin-bottom:10px; border:1px solid; }
.rm-tags { display:flex; flex-wrap:wrap; gap:7px; }
.rm-tag {
  font-size:12px; color:var(--text2); background:var(--card); border:1px solid var(--border);
  padding:4px 10px; border-radius:6px;
}
.rm-connector { position:absolute; left:20px; top:42px; bottom:-32px; width:1px; }

/* LEGAL BLOCKS */
.legal-block { background:rgba(0,0,0,0.3); border:1px solid var(--border); border-radius:14px; padding:20px; }
.legal-title { font-weight:900; font-size:14px; color:var(--text2); margin-bottom:8px; }
.legal-body { font-size:13px; color:var(--text2); line-height:1.75; }

/* FOOTER */
footer {
  background:var(--card); border-top:1px solid rgba(255,122,24,0.12);
  padding:32px calc(22px + var(--safe-right)) calc(28px + var(--safe-bottom)) calc(22px + var(--safe-left));
}
.footer-inner { max-width:1100px; margin:0 auto; }
.footer-bottom { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; font-size:12px; color:var(--text3); }

@media(max-width:640px){
  .section { padding:56px 16px; }
  .hero { padding: calc(80px + var(--safe-top)) 16px 56px; }
  .pilot-box { padding:24px; }
  .pilot-stat-val { font-size:38px; }
  h2 { font-size:clamp(20px,6vw,38px); }
}
`;

const TX = {
  pt: {
    back: "← Z-PAY",
    badge_hero: "PROGRAMA FOUNDING CLIENTS · ACESSO RESTRITO",
    h1: ["Piloto fechado.", " 20 vagas.", " Condições vitalícias."],
    hero_sub: "Documento técnico e comercial do programa de acesso restrito à Z-PAY — a camada de orquestração de pagamentos do ecossistema ZETTA, projetada para liquidação rastreável entre rails fiat e digitais.",
    cta1: "Solicitar uma vaga", cta2: "Página institucional →",
    meta: [["Versão","1.0 — Piloto Fechado"],["Jurisdição","BR · VARA Dubai (alinhamento)"],["Acesso","Restrito — 20 vagas"],["Status","● Em operação"]],
    s1_chip: "01 — POSICIONAMENTO",
    s1_h: "Não é um gateway.", s1_h2: " É infraestrutura.",
    s1_sub: "A Z-PAY foi projetada como settlement layer — não como produto isolado. Sua função dentro do ecossistema ZETTA é orquestrar checkout, eventos e liquidação entre rails fiat e digitais de forma rastreável, modular e orientada a compliance desde a base.",
    pillars: [
      ["⚡","Orquestração","Checkout multi-rail com split configurável por charge. Um único ponto de integração para rails fiat e digitais."],
      ["📋","Rastreabilidade","Ledger auditável e append-only. Cada evento registrado da criação ao settlement. Conciliação nativa."],
      ["🔧","Modularidade","Settlement layer desacoplado do Z-FINANCE. Opera de forma independente com integração progressiva."],
      ["🔐","Compliance-first","KYB estruturado, trilhas de auditoria por padrão e RBAC — comportamento estrutural, não opcional."],
    ],
    s1b_chip: "02 — DIFERENCIAÇÃO",
    s1b_h: "O que a Z-PAY não é.",
    diffs: [
      ["✗","Não é banco","Infraestrutura de orquestração. Não capta, não custodia, não opera como instituição financeira. Liquidação via parceiros autorizados."],
      ["✗","Não promete retorno","Nenhuma funcionalidade constitui produto de investimento, recomendação financeira ou garantia de resultado."],
      ["✗","Não é produto isolado","Módulo do ecossistema ZETTA — projetado para integração progressiva com Z-FINANCE, OBELISK-Z e ZION AI."],
      ["✓","É infraestrutura","Settlement layer com arquitetura orientada a auditoria, idempotência obrigatória e eventos rastreáveis em todas as operações."],
    ],
    s2_chip: "03 — ARQUITETURA DE COMPLIANCE",
    s2_h: "Compliance por design,", s2_h2: " não por opção.",
    s2_sub: "A postura regulatória da Z-PAY é comportamento estrutural — não módulo adicional. Trilhas, políticas e registros são padrão em toda operação.",
    layers: [
      ["#ff7a18","L5","Aplicação","Checkout · Dashboard · API · Webhooks · Split"],
      ["#06b6d4","L4","Compliance","KYB · AML · RBAC · Alertas de fraude"],
      ["#ff7a18","L3","Ledger","Append-only · Idempotência · Auditoria imutável"],
      ["#818cf8","L2","Settlement","Rails fiat + digitais · Parceiros autorizados"],
      ["#06b6d4","L1","Regulatório","VARA Dubai · VASP frameworks · Alinhamento progressivo"],
    ],
    checks: [
      "Smart contract auditado — Cyberscope, Dez/2024",
      "KYC verificado — equipe fundadora",
      "Alinhamento VARA Dubai em preparação",
      "Ledger imutável — append-only por padrão",
      "Compliance AML estruturado",
      "GDPR Ready",
      "Go tests ✓ — todos passaram",
      "Backend VASP-ready — travel rule + perfis regulatórios",
    ],
    s3_chip: "04 — ECOSSISTEMA",
    s3_h: "Módulo dentro de uma", s3_h2: " infraestrutura maior.",
    s3_sub: "A Z-PAY não opera como produto standalone. É a settlement layer do ecossistema ZETTA — integração progressiva com os demais módulos é arquitetura, não promessa.",
    eco: [
      ["#ff7a18","Z-FINANCE","Camada financeira híbrida. Contas digitais, conversão fiat↔ativos digitais e ledger auditável. Integração de liquidação conforme roadmap."],
      ["#06b6d4","OBELISK-Z Wallet","Carteira não-custodial multi-chain. Merchants recebem em ativos digitais diretamente na wallet do ecossistema."],
      ["#818cf8","ZION AI","Motor analítico. Monitora padrões operacionais, detecta anomalias e sugere ajustes — sem executar sem autorização."],
      ["#ff7a18","ZETTA Chain","Blockchain do ecossistema. Trilhas on-chain para transparência operacional e auditoria imutável."],
      ["#06b6d4","Z-SWAP","Camada de liquidez entre rails. Integração com Z-PAY para conversão no fluxo de settlement."],
      ["#fbbf24","Z-PAD","Launchpad do ecossistema. Merchants da Z-PAY têm acesso prioritário a projetos do launchpad."],
    ],
    s4_chip: "05 — FOUNDING CLIENTS",
    s4_h: "Piloto fechado.", s4_h2: " 20 vagas.",
    s4_sub: "Acesso controlado e restrito com condições estruturais exclusivas — não disponíveis após o lançamento público. Objetivo: validar a camada operacional com merchants selecionados antes da abertura geral.",
    perks: [
      ["♾","Condições vitalícias","Taxas e termos do piloto mantidos permanentemente, independente de reajustes futuros após lançamento público."],
      ["⚙","3 customizações operacionais","Split, webhooks e onboarding adaptados à operação do merchant antes da release geral."],
      ["◎","Prioridade no roadmap","Decisões de desenvolvimento influenciadas diretamente pelos founding clients. Sua operação molda o produto."],
      ["⟳","Linha direta com o time","Suporte sem intermediários durante todo o piloto. Canal direto para incidentes e solicitações técnicas."],
      ["◈","Relatórios quinzenais","Desempenho da camada de settlement da sua operação durante o piloto — antes do dashboard público."],
      ["⬡","Badge on-chain","Reconhecimento como participante fundador do ecossistema Z-PAY. Registro rastreável e auditável."],
    ],
    fee_chip: "ESTRUTURA DE TAXAS — PILOTO FECHADO",
    fee_sub: "As taxas abaixo refletem a estrutura operacional do piloto. A mensalidade Pro subsidia taxas por transação menores. Valores são operacionais — não constituem retorno financeiro.",
    plans: [
      { n:"Core", p:"R$0", per:"/mês", d:"Fase inicial de integração.", fee:"Pix: 4,5% · Cartão: 5,5%+R$0,50 · Ativos digitais: 3,5%", items:["Charges ilimitadas","Link de checkout rastreável","Webhooks com log de eventos","Dashboard operacional"], hi:false, btn:"Começar", btnClass:"pc-outline" },
      { n:"Pro", p:"R$79", per:"/mês", d:"Operações com maior volume.", fee:"Pix: 3,2% · Cartão: 4,5%+R$0,25 · Ativos digitais: 2,5%", items:["Tudo do Core","Split avançado por charge","Webhooks com retry automático","Idempotência obrigatória","Relatórios operacionais"], hi:true, btn:"Assinar Pro", btnClass:"pc-solid" },
      { n:"Business", p:"Sob consulta", per:"", d:"Plataformas e marketplaces.", fee:"Taxas negociadas por volume · Split customizado · SLA 99,9%", items:["Tudo do Pro","Taxas negociadas","Split multi-recebedor","Suporte dedicado"], hi:false, btn:"Falar com vendas", btnClass:"pc-outline" },
    ],
    fee_disc: "Taxas operacionais de orquestração. Não constituem retorno financeiro ou garantia de resultado. Liquidação sujeita a disponibilidade dos rails parceiros.",
    spots: "vagas disponíveis", setup: "Setup único — Founding Client", price: "R$10.000",
    pcta: "Solicitar uma vaga",
    s5_chip: "06 — PAINEL DO CONTADOR",
    s5_h: "Canal parceiro", s5_h2: " sem risco operacional.",
    s5_sub: "A Z-PAY tem painel dedicado para escritórios de contabilidade e assessores. O parceiro indica — não opera. Não toca em recursos, não dá ordens, não assume responsabilidade regulatória.",
    roles: [
      ["O que o parceiro FAZ","background:rgba(255,122,24,0.06);border-color:rgba(255,122,24,0.20);","Apresenta a infraestrutura Z-PAY ao cliente PJ. Indica o merchant para onboarding. Acompanha status no Painel Contador."],
      ["O que NÃO faz","","Não opera a conta. Não toca em recursos. Não dá ordem de pagamento. Não assume responsabilidade regulatória sobre a operação do merchant."],
    ],
    pperks: [
      ["Painel Contador","Dashboard com visão dos merchants indicados — KYB, volume e comissões. Sem acesso às contas individuais."],
      ["Receita por indicação","Comissionamento por merchant ativado. Revenue share sobre fees enquanto o merchant estiver ativo."],
      ["Contrato de indicação","Contrato de canal comercial. Você é canal — não intermediário financeiro. Responsabilidade regulatória permanece na Z-PAY."],
      ["Kit comercial","Material de apresentação, scripts e treinamento. Você apresenta — nós fazemos o onboarding técnico."],
    ],
    models_chip: "MODELOS DE COMISSIONAMENTO",
    models: [
      { label:"Modelo A", name:"Entrada rápida", val:"R$4.000 / merchant", share:"10% revenue share · 12 meses", note:"Foco em caixa imediato. Ideal para 10 merchants em 30 dias." },
      { label:"Modelo B", name:"Recorrência forte", val:"R$2.500 / merchant", share:"20% revenue share · 24 meses", note:"Linha de receita mensal para o escritório. Ideal para BPO financeiro." },
      { label:"Modelo C", name:"Canal exclusivo", val:"R$1.500 / merchant", share:"30% revenue share contínuo", note:"Exclusividade regional condicionada a 20 merchants ativos." },
    ],
    mdisc: "Comissão paga após confirmação do setup. Revenue share sobre receita líquida. Exclusividade condicionada ao cumprimento de meta mínima.",
    s6_chip: "07 — ROADMAP ESTRATÉGICO",
    s6_h: "Construído para", s6_h2: " longo prazo.",
    s6_sub: "Releases incrementais. Founding clients têm prioridade de acesso e influência direta nas decisões de desenvolvimento.",
    roadmap: [
      { ph:"Release Inicial", st:"em operação", c:"#22c55e", tags:["Charges multi-rail","Split por charge","Webhooks com retry","KYB com trilha","Dashboard operacional","Idempotência"] },
      { ph:"Expansão Operacional", st:"próxima fase", c:"#ff7a18", tags:["Recorrência via PIX","Antecipação de recebíveis","Relatórios PDF","Dashboard WebSocket","Link-in-bio / 1 clique","SDKs Node · Python · PHP"] },
      { ph:"Integração Ecossistema", st:"planejado", c:"#06b6d4", tags:["Z-FINANCE como carteira","Nota Fiscal automática","Gestão de chargebacks","Anti-fraude por score","Marketplace nativo","White-label"] },
      { ph:"Inteligência & Escala", st:"visão", c:"#445a78", tags:["ZION AI Checkout Adaptativo","Pagamento Preditivo","Agentic Commerce","Open Banking","Multi-currency","ZETTA Chain on-chain"] },
    ],
    s7_chip: "08 — POSTURA REGULATÓRIA",
    s7_h: "Alinhamento", s7_h2: " progressivo.",
    legal: [
      ["Natureza do documento","Documento técnico e comercial do programa Founding Clients. Não constitui oferta pública de valores mobiliários, prospecto de investimento ou promessa de resultado financeiro."],
      ["Natureza da Z-PAY","Infraestrutura de orquestração de pagamentos. Não é banco, não capta recursos, não opera como instituição financeira. Liquidação via parceiros autorizados conforme jurisdição."],
      ["Ativos digitais","Suporte a rails digitais é infraestrutura operacional de orquestração — não constitui oferta, custódia ou gestão de ativos virtuais."],
      ["VARA / VASP","Diálogo institucional com framework VARA Dubai em preparação. Nenhuma alegação de aprovação regulatória vigente. Alinhamento progressivo orientado por conformidade operacional."],
    ],
    footer: "Z-PAY é infraestrutura de orquestração de pagamentos. Não constitui serviço financeiro, recomendação de investimento ou garantia de resultado. Parte do ecossistema ZETTA WORD.",
  },
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}
function R({ children, d = "" }: { children: React.ReactNode; d?: string }) {
  const r = useReveal();
  return <div ref={r} className={`rv${d ? " " + d : ""}`}>{children}</div>;
}

export default function FoundingClients() {
  const tx = TX.pt;

  return (
    <>
      <style>{STYLE}</style>
      <div style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* NAV */}
        <nav>
          <a className="brand" href="/">
            <div className="brand-badge">
              <img src="/assets/logo/zpay-logo.png" alt="Z-PAY" width={38} height={38} />
            </div>
            <div>
              <div className="brand-name">Z-PAY</div>
              <div className="brand-sub">SETTLEMENT LAYER</div>
            </div>
          </a>
          <a href="/" className="back-btn">{tx.back}</a>
        </nav>

        {/* HERO */}
        <div className="hero">
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              {tx.badge_hero}
            </div>
            <h1>
              {tx.h1[0]}<em>{tx.h1[1]}</em>{tx.h1[2]}
            </h1>
            <p className="hero-sub">{tx.hero_sub}</p>

            <div className="hero-meta">
              {tx.meta.map(([k, v], i) => (
                <div key={i} className="meta-block" style={{ borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                  <div className="meta-k">{k}</div>
                  <div className="meta-v" style={{ color: v.includes("●") ? "#22c55e" : "var(--accent)" }}>{v}</div>
                </div>
              ))}
            </div>

            <div className="hero-ctas">
              <button className="btn-accent">{tx.cta1}</button>
              <a href="/" className="btn-outline">{tx.cta2}</a>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* POSITIONING */}
        <section className="section">
          <div className="section-inner">
            <R>
              <div className="chip">{tx.s1_chip}</div>
              <h2>{tx.s1_h}<em>{tx.s1_h2}</em></h2>
              <p className="lead" style={{ marginBottom: 36 }}>{tx.s1_sub}</p>
            </R>
            <div className="pillars">
              {tx.pillars.map(([icon, title, desc], i) => (
                <R key={i} d={`d${(i % 2) + 1}`}>
                  <div className={`card${i === 0 ? " hi" : ""}`} style={{ height: "100%" }}>
                    <div className="card-icon">{icon}</div>
                    <div className="card-title">{title as string}</div>
                    <div className="card-body">{desc as string}</div>
                  </div>
                </R>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* WHAT IT IS NOT */}
        <section className="section" style={{ background: "var(--bg2)" }}>
          <div className="section-inner">
            <R>
              <div className="chip">{tx.s1b_chip}</div>
              <h2 style={{ marginBottom: 28 }}>{tx.s1b_h}</h2>
            </R>
            <div className="grid2">
              {tx.diffs.map(([mark, title, desc], i) => {
                const pos = mark === "✓";
                return (
                  <R key={i} d={`d${(i % 2) + 1}`}>
                    <div style={{ padding: "20px", borderRadius: 14, background: pos ? "rgba(255,122,24,0.05)" : "rgba(0,0,0,0.25)", border: `1px solid ${pos ? "rgba(255,122,24,0.22)" : "var(--border)"}`, display: "flex", gap: 12, alignItems: "flex-start", height: "100%" }}>
                      <span style={{ color: pos ? "var(--accent)" : "rgba(239,68,68,0.6)", fontWeight: 900, fontSize: 15, flexShrink: 0, marginTop: 1 }}>{mark}</span>
                      <div>
                        <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 900, fontSize: 15, color: pos ? "var(--accent)" : "var(--text2)", marginBottom: 5 }}>{title as string}</div>
                        <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65 }}>{desc as string}</div>
                      </div>
                    </div>
                  </R>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* COMPLIANCE */}
        <section className="section">
          <div className="section-inner">
            <R>
              <div className="chip">{tx.s2_chip}</div>
              <h2>{tx.s2_h}<em>{tx.s2_h2}</em></h2>
              <p className="lead" style={{ marginBottom: 36 }}>{tx.s2_sub}</p>
            </R>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }} id="comp-wrap">
              <style>{`@media(max-width:768px){#comp-wrap{grid-template-columns:1fr!important}}`}</style>
              <R>
                <div className="compliance-stack">
                  {tx.layers.map(([c, lv, label, desc], i) => (
                    <div key={i} className="cs-row">
                      <div className="cs-dot" style={{ background: c as string, boxShadow: `0 0 8px ${c}` }} />
                      <div className="cs-layer">{label as string}</div>
                      <div className="cs-desc">{desc as string}</div>
                      <div className="cs-lv">{lv as string}</div>
                    </div>
                  ))}
                  <div style={{ padding: "10px 14px", background: "rgba(34,197,94,0.05)", borderTop: "1px solid var(--border)", display: "flex", gap: 8, alignItems: "center" }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", animation: "blink 2.5s ease infinite" }} />
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "rgba(34,197,94,0.8)" }}>Sistema em operação · Todas as camadas ativas</span>
                  </div>
                </div>
              </R>
              <R d="d2">
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "var(--text3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 12 }}>AUDIT CHECKLIST</div>
                <div className="checklist">
                  {tx.checks.map((c, i) => (
                    <div key={i} className="check-item">
                      <div className="check-mark">✓</div>
                      <div className="check-text">{c}</div>
                    </div>
                  ))}
                </div>
              </R>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ECOSYSTEM */}
        <section className="section" style={{ background: "var(--bg2)" }}>
          <div className="section-inner">
            <R>
              <div className="chip">{tx.s3_chip}</div>
              <h2>{tx.s3_h}<em>{tx.s3_h2}</em></h2>
              <p className="lead" style={{ marginBottom: 36 }}>{tx.s3_sub}</p>
            </R>
            <div className="grid2">
              {tx.eco.map(([c, name, desc], i) => (
                <R key={i} d={`d${(i % 2) + 1}`}>
                  <div className="eco-item">
                    <div className="eco-dot" style={{ background: c as string, boxShadow: `0 0 7px ${c}`, marginTop: 6 }} />
                    <div>
                      <div className="eco-name" style={{ color: c as string }}>{name as string}</div>
                      <div className="eco-desc">{desc as string}</div>
                    </div>
                  </div>
                </R>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* PILOT — PERKS + PLANS */}
        <section className="section">
          <div className="section-inner">
            <R>
              <div className="chip">{tx.s4_chip}</div>
              <h2>{tx.s4_h}<em>{tx.s4_h2}</em></h2>
              <p className="lead" style={{ marginBottom: 36 }}>{tx.s4_sub}</p>
            </R>
            <div className="grid2" style={{ marginBottom: 48 }}>
              {tx.perks.map(([icon, title, desc], i) => (
                <R key={i} d={`d${(i % 2) + 1}`}>
                  <div className="card" style={{ display: "flex", gap: 14, height: "100%" }}>
                    <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{icon as string}</span>
                    <div>
                      <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 900, fontSize: 15, color: "var(--accent)", marginBottom: 5 }}>{title as string}</div>
                      <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65 }}>{desc as string}</div>
                    </div>
                  </div>
                </R>
              ))}
            </div>

            {/* Fee structure */}
            <R>
              <div className="chip" style={{ marginBottom: 10 }}>{tx.fee_chip}</div>
              <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7, marginBottom: 28, maxWidth: 600 }}>{tx.fee_sub}</p>
            </R>
            <div className="grid3" style={{ alignItems: "start", marginBottom: 12 }}>
              {tx.plans.map((p, i) => (
                <R key={i} d={`d${i + 1}`}>
                  <div className={`price-card${p.hi ? " featured" : ""}`}>
                    {p.hi && <span className="price-badge">RECOMENDADO</span>}
                    <div className="pc-plan">{p.n}</div>
                    <div className="pc-price">{p.p}{p.per && <span>{p.per}</span>}</div>
                    <div className="pc-desc">{p.d}</div>
                    <div className="pc-fee" dangerouslySetInnerHTML={{ __html: p.fee }} />
                    <ul className="pc-items">{p.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                    <button className={`pc-btn ${p.btnClass}`}>{p.btn}</button>
                  </div>
                </R>
              ))}
            </div>
            <R><p className="fee-disc">{tx.fee_disc}</p></R>

            {/* CTA box */}
            <R>
              <div className="pilot-box" style={{ marginTop: 40 }}>
                <div className="pilot-nums">
                  <div className="pilot-stat">
                    <div className="pilot-stat-val">20</div>
                    <div className="pilot-stat-label">{tx.spots}</div>
                  </div>
                  <div style={{ width: 1, background: "rgba(255,122,24,0.2)", alignSelf: "stretch", margin: "4px 0" }} />
                  <div className="pilot-stat">
                    <div className="pilot-stat-val" style={{ fontSize: 32 }}>{tx.price}</div>
                    <div className="pilot-stat-label">{tx.setup}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="btn-accent">{tx.pcta}</button>
                  <a href="/" className="btn-outline">Página institucional →</a>
                </div>
              </div>
            </R>
          </div>
        </section>

        <div className="divider" />

        {/* PARTNER */}
        <section className="section" style={{ background: "var(--bg2)" }}>
          <div className="section-inner">
            <R>
              <div className="chip">{tx.s5_chip}</div>
              <h2>{tx.s5_h}<em>{tx.s5_h2}</em></h2>
              <p className="lead" style={{ marginBottom: 32 }}>{tx.s5_sub}</p>
            </R>
            <div className="grid2" style={{ marginBottom: 28 }}>
              {tx.roles.map(([title, extra, desc], i) => (
                <R key={i} d={`d${i + 1}`}>
                  <div style={{ padding: 20, borderRadius: 14, background: i === 0 ? "rgba(255,122,24,0.06)" : "rgba(0,0,0,0.25)", border: `1px solid ${i === 0 ? "rgba(255,122,24,0.22)" : "var(--border)"}`, height: "100%" }}>
                    <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 900, fontSize: 15, color: i === 0 ? "var(--accent)" : "var(--text2)", marginBottom: 8 }}>{title as string}</div>
                    <div style={{ fontSize: 13.5, color: "var(--text2)", lineHeight: 1.7 }}>{desc as string}</div>
                  </div>
                </R>
              ))}
            </div>
            <div className="grid2" style={{ marginBottom: 36 }}>
              {tx.pperks.map(([title, desc], i) => (
                <R key={i} d={`d${(i % 2) + 1}`}>
                  <div className="card" style={{ height: "100%" }}>
                    <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 900, fontSize: 15, color: "var(--accent)", marginBottom: 6 }}>{title as string}</div>
                    <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65 }}>{desc as string}</div>
                  </div>
                </R>
              ))}
            </div>
            <R>
              <div className="chip" style={{ marginBottom: 20 }}>{tx.models_chip}</div>
            </R>
            <div className="grid3" style={{ marginBottom: 12 }}>
              {tx.models.map((m, i) => (
                <R key={i} d={`d${i + 1}`}>
                  <div className="model-card">
                    <div className="model-label">{m.label}</div>
                    <div className="model-name">{m.name}</div>
                    <div className="model-val">{m.val}</div>
                    <div className="model-share">{m.share}</div>
                    <div className="model-note">{m.note}</div>
                  </div>
                </R>
              ))}
            </div>
            <R><p className="fee-disc">{tx.mdisc}</p></R>
          </div>
        </section>

        <div className="divider" />

        {/* ROADMAP */}
        <section className="section">
          <div className="section-inner">
            <R>
              <div className="chip">{tx.s6_chip}</div>
              <h2>{tx.s6_h}<em>{tx.s6_h2}</em></h2>
              <p className="lead" style={{ marginBottom: 40 }}>{tx.s6_sub}</p>
            </R>
            <R d="d1">
              <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: 20, top: 42, bottom: 0, width: 1, background: "linear-gradient(to bottom, rgba(255,122,24,0.3), rgba(6,182,212,0.15), rgba(68,90,120,0.1))" }} />
                {tx.roadmap.map((r, i) => (
                  <div key={i} className="roadmap-item" style={{ paddingBottom: i < tx.roadmap.length - 1 ? 40 : 0 }}>
                    <div className="rm-num" style={{ background: `${r.c}15`, border: `1px solid ${r.c}50`, color: r.c, boxShadow: `0 0 14px ${r.c}15` }}>
                      0{i + 1}
                    </div>
                    <div className="rm-content">
                      <div className="rm-phase">{r.ph}</div>
                      <span className="rm-status" style={{ color: r.c, background: `${r.c}10`, borderColor: `${r.c}30` }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: r.c, display: "inline-block" }} />
                        {r.st}
                      </span>
                      <div className="rm-tags">
                        {r.tags.map((t, j) => <span key={j} className="rm-tag">{t}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </R>
          </div>
        </section>

        <div className="divider" />

        {/* LEGAL */}
        <section className="section" style={{ background: "var(--bg2)" }}>
          <div className="section-inner">
            <R>
              <div className="chip">{tx.s7_chip}</div>
              <h2 style={{ marginBottom: 32 }}>{tx.s7_h}<em>{tx.s7_h2}</em></h2>
            </R>
            <div className="grid2">
              {tx.legal.map(([title, desc], i) => (
                <R key={i} d={`d${(i % 2) + 1}`}>
                  <div className="legal-block">
                    <div className="legal-title">{title as string}</div>
                    <div className="legal-body">{desc as string}</div>
                  </div>
                </R>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-inner">
            <div className="footer-bottom">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div className="brand-badge" style={{ width: 30, height: 30, borderRadius: 9 }}>
                  <img src="/assets/logo/zpay-logo.png" alt="Z-PAY" width={30} height={30} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: "0.06em" }}>Z-PAY</div>
                  <div style={{ fontSize: 9, color: "var(--text3)", letterSpacing: ".1em", textTransform: "uppercase" }}>SETTLEMENT LAYER · ZETTA ECOSYSTEM</div>
                </div>
              </div>
              <p style={{ fontSize: 11, color: "var(--text3)", maxWidth: 520, lineHeight: 1.65 }}>{tx.footer}</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

export const bodyHtml = `<!-- SCROLL PROGRESS BAR -->
  <div id="scroll-progress"></div>

  <!-- CUSTOM CURSOR -->
  <div id="cursor-dot"></div>
  <div id="cursor-ring"></div>

  <!-- TOAST -->
  <div id="toast" role="status" aria-live="polite">
    <div class="toast-icon">✓</div>
    <div class="toast-text">
      <div class="toast-title">Copiado!</div>
      <div class="toast-sub">API Key copiada para o clipboard</div>
    </div>
  </div>

  <!-- NAV -->
  <nav>
    <div class="nav-left">
      <a class="brand" href="#">
        <div class="brand-badge">
          <!-- logo: funciona no GitHub Pages; no Acode precisa existir local -->
          <img src="assets/logo/zpay-logo.png" onerror="this.onerror=null;this.src='assets/logo/zpay-logo.svg'" alt="Z-PAY Logo" width="40" height="40">
        </div>
        <div class="brand-text">
          <div class="brand-name">Z-PAY</div>
          <div class="brand-sub" data-i18n="nav_sub">SETTLEMENT LAYER</div>
        </div>
      </a>
    </div>

    <ul class="nav-links">
      <li><a href="#como" data-i18n="nav_how">Como funciona</a></li>
      <li><a href="#features" data-i18n="nav_features">Funcionalidades</a></li>
      <li><a href="#pricing" data-i18n="nav_pricing">Planos</a></li>
      <li><a href="#api" data-i18n="nav_devs">Desenvolvedores</a></li>
    </ul>

    <div class="nav-right">
      <!-- language -->
      <div style="position:relative;">
        <div class="lang-btn" id="langBtn" aria-label="Language">
          <div class="flag" id="flagBox">🇧🇷</div>
          <div class="lang-code" id="langCode">PT</div>
          <div class="chev"></div>
        </div>

        <div class="lang-pop" id="langPop">
          <div class="lang-item active" data-lang="pt">
            <div class="flag">🇧🇷</div>
            <div>Português</div>
          </div>
          <div class="lang-item" data-lang="en">
            <div class="flag">🇺🇸</div>
            <div>English</div>
          </div>
          <div class="lang-item" data-lang="zh">
            <div class="flag">🇨🇳</div>
            <div>中文</div>
          </div>
        </div>
      </div>

      <!-- desktop actions -->
      <a class="btn-ghost nav-login" href="http://95.111.247.134:8082/" target="_blank" rel="noopener" data-i18n="nav_login">Login</a>
      <a class="btn-accent nav-sign" href="http://95.111.247.134:8082/" target="_blank" rel="noopener" data-i18n="nav_signup">Criar conta</a>

      <!-- mobile menu button -->
      <button class="btn-icon" id="menuBtn" aria-label="Menu">
        <div class="hamb" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
      </button>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-grid"></div>
    <div class="hero-glow">
      <div class="glow-a"></div>
      <div class="glow-b"></div>
    </div>

    <div class="hero-eyebrow">
      <div class="eyebrow-dot"></div>
      <span data-i18n="eyebrow">B2B settlement layer for checkout, API and payment orchestration</span>
    </div>

    <h1>
      <span data-i18n="h1_a">Estruture pagamentos em</span> <em data-i18n="h1_b">Pix e ativos digitais</em> <span data-i18n="h1_c">com liquidação programável</span>
      <span class="line2" data-i18n="h1_line2">do mesmo link. no mesmo painel.</span>
    </h1>

    <p class="hero-desc" data-i18n="hero_desc">
      Z-PAY é a infraestrutura de orquestração de pagamentos do ecossistema ZETTA. Estruture cobranças, regras de split, eventos e liquidação rastreável entre rails fiat e digitais.
    </p>

    <div class="hero-actions">
      <a href="http://95.111.247.134:8082/" target="_blank" rel="noopener" class="btn-accent" data-i18n="cta_start">Iniciar integração</a>
      <a href="#api" class="btn-ghost" data-i18n="cta_docs">Ver docs →</a>
      <a href="https://z-pay-white-paper.vercel.app/" target="_blank" rel="noopener" class="btn-ghost" data-i18n="cta_founding" style="border-color:rgba(255,122,24,0.35);color:var(--accent);">Programa Founding Clients →</a>
    </div>

    <div class="mvp-note" data-i18n="mvp_note">Infraestrutura B2B de pagamentos com integração progressiva ao ecossistema ZETTA.</div>

    <div class="hero-terminal">
      <div class="terminal-bar">
        <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
        <span class="terminal-title" data-i18n="term_title">POST /v1/charges · create charge</span>
      </div>
      <div class="t-line"><span class="t-dim" data-i18n="term_c1">// Crie uma cobrança e gere um checkout rastreável com eventos integrados</span></div>
      <div class="t-line"><span class="t-dim">$ </span><span class="t-acc">curl</span> <span class="t-white">-X POST https://api.pay.zetta.com/v1/charges \\</span></div>
      <div class="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-teal">-H</span> <span class="t-amber">"Authorization: Bearer sk_live_••••••••"</span> \\</div>
      <div class="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-teal">-H</span> <span class="t-amber">"Idempotency-Key: 6f0b2a8d-•••"</span> \\</div>
      <div class="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-teal">-d</span> <span class="t-amber">'{"amount":15000,"methods":["PIX","CARD","CRYPTO"]}'</span></div>
      <div class="t-line" style="margin-top:10px"><span class="t-dim">← 201 Created</span></div>
      <div class="t-line"><span class="t-dim">{</span></div>
      <div class="t-line">&nbsp;&nbsp;<span class="t-acc">"id"</span><span class="t-dim">:</span> <span class="t-amber">"ch_9f2a3b..."</span><span class="t-dim">,</span></div>
      <div class="t-line">&nbsp;&nbsp;<span class="t-acc">"status"</span><span class="t-dim">:</span> <span class="t-white">"PENDING"</span><span class="t-dim">,</span></div>
      <div class="t-line">&nbsp;&nbsp;<span class="t-acc">"payment_link"</span><span class="t-dim">:</span> <span class="t-amber">"https://pay.zetta.com/c/ch_9f2a..."</span></div>
      <div class="t-line"><span class="t-dim">}</span> <span class="t-cursor"></span></div>
    </div>
  </section>

  <!-- TRUST -->
  <div class="trust">
    <div class="trust-inner">
      <span class="trust-label" data-i18n="trust_label">ECOSYSTEM</span>
      <div class="trust-logos">
        <span class="trust-pill">ZETTA</span>
        <span class="trust-pill">Z-FINANCE</span>
        <span class="trust-pill">Z-PAY</span>
        <span class="trust-pill">WEBHOOKS</span>
        <span class="trust-pill">API</span>
        <span class="trust-pill">PIX</span>
      </div>
    </div>
  </div>

  <!-- METRICS -->
  <div class="metrics-wrap">
    <div class="metrics reveal">
      <div class="metric-block">
        <div class="mb-val" data-count="0" data-prefix="R$" data-suffix=""><span>R$</span><span class="count-num" data-i18n="m1v">0</span></div>
        <div class="mb-label" data-i18n="m1l">setup inicial</div>
      </div>
      <div class="metric-block">
        <div class="mb-val" data-count="3" data-suffix="+"><span class="count-num" data-i18n="m2v">3+</span></div>
        <div class="mb-label" data-i18n="m2l">métodos de pagamento</div>
      </div>
      <div class="metric-block">
        <div class="mb-val" data-count="2" data-prefix="<" data-suffix="s"><span>&lt;</span><span class="count-num" data-i18n="m3v">2s</span></div>
        <div class="mb-label" data-i18n="m3l">confirmação Pix</div>
      </div>
      <div class="metric-block">
        <div class="mb-val" data-count="100" data-suffix="%"><span class="count-num" data-i18n="m4v">100%</span></div>
        <div class="mb-label" data-i18n="m4l">eventos auditáveis</div>
      </div>
    </div>
  </div>

  <!-- HOW IT WORKS -->
  <div class="section-divider"></div>
  <section class="hiw" id="como">
    <div class="hiw-header reveal">
      <div class="section-chip" data-i18n="how_chip">Como funciona</div>
      <h2 class="section-h" data-i18n="how_title">Cobrar nunca foi tão simples</h2>
      <p class="section-p" data-i18n="how_desc">Três passos para estruturar checkout, eventos e liquidação rastreável em ambiente merchant-ready.</p>
    </div>

    <div class="hiw-flow">
      <div class="hiw-step reveal">
        <div class="hiw-icon ic-acc">🏪<div class="ring"></div></div>
        <div class="hiw-title" data-i18n="how_1t">1. Estruture seu ambiente merchant</div>
        <div class="hiw-body" data-i18n="how_1d">Onboarding com KYB leve (manual na release inicial), API Keys e configuração de webhooks.</div>
      </div>

      <div class="hiw-step reveal" style="transition-delay:.10s">
        <div class="hiw-icon ic-teal">🔗<div class="ring"></div></div>
        <div class="hiw-title" data-i18n="how_2t">2. Gere uma cobrança</div>
        <div class="hiw-body" data-i18n="how_2d">Via dashboard ou API: valor, métodos aceitos e regras de split. Link instantâneo.</div>
      </div>

      <div class="hiw-step reveal" style="transition-delay:.20s">
        <div class="hiw-icon ic-purple">📡<div class="ring"></div></div>
        <div class="hiw-title" data-i18n="how_3t">3. Confirme e concilie</div>
        <div class="hiw-body" data-i18n="how_3d">Webhooks primeiro, idempotência e log de eventos para conciliação e auditoria.</div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="features" id="features">
    <div class="features-head reveal">
      <div class="section-chip" data-i18n="feat_chip">Funcionalidades</div>
      <h2 class="section-h" data-i18n="feat_title">Settlement infrastructure,<br>from checkout to payout</h2>
    </div>

    <div class="bento">
      <div class="bento-card wide highlight reveal">
        <div style="display:flex;gap:16px;align-items:flex-start;">
          <div class="bc-icon bi-acc">⚡</div>
          <div>
            <div class="bc-title" data-i18n="f1t">Multi-método em um só link</div>
            <div class="bc-body" data-i18n="f1d">Uma camada de checkout compatível com rails fiat e digitais, desenhada para simplificar orquestração, eventos e liquidação operacional.</div>
            <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;">
              <span class="api-badge ab-acc">⚡ PIX</span>
              <span class="api-badge ab-teal">💳 CARD</span>
              <span class="api-badge ab-purple">₿ CRYPTO</span>
            </div>
          </div>
        </div>
        <div class="mini-chart">
          <div class="bar" style="height:35%"><span class="bar-tip">Ago · R$280k</span></div>
          <div class="bar" style="height:55%"><span class="bar-tip">Set · R$440k</span></div>
          <div class="bar" style="height:45%"><span class="bar-tip">Out · R$360k</span></div>
          <div class="bar" style="height:70%"><span class="bar-tip">Nov · R$560k</span></div>
          <div class="bar" style="height:60%"><span class="bar-tip">Dez · R$480k</span></div>
          <div class="bar active" style="height:90%"><span class="bar-tip">Jan · R$720k</span></div>
          <div class="bar" style="height:75%"><span class="bar-tip">Jan · R$600k</span></div>
          <div class="bar active" style="height:95%"><span class="bar-tip">Fev · R$760k</span></div>
          <div class="bar" style="height:80%"><span class="bar-tip">Mar · R$640k</span></div>
          <div class="bar" style="height:85%"><span class="bar-tip">Abr · R$680k</span></div>
        </div>
      </div>

      <div class="bento-card reveal" style="transition-delay:.08s">
        <div class="bc-icon bi-teal">🔀</div>
        <div class="bc-title" data-i18n="f2t">Split de pagamento</div>
        <div class="bc-body" data-i18n="f2d">Distribua automaticamente o valor entre múltiplos recebedores com regras configuráveis por charge.</div>
        <div class="split-demo">
          <div class="split-row"><span class="split-name" data-i18n="split_a">Marketplace</span><span class="split-pct">70%</span></div>
          <div class="split-row"><span class="split-name" data-i18n="split_b">Vendedor A</span><span class="split-pct">20%</span></div>
          <div class="split-row"><span class="split-name" data-i18n="split_c">Z-PAY fee</span><span class="split-pct">10%</span></div>
        </div>
      </div>

      <div class="bento-card reveal" style="transition-delay:.12s">
        <div class="bc-icon bi-purple">📡</div>
        <div class="bc-title" data-i18n="f3t">Webhooks com retry</div>
        <div class="bc-body" data-i18n="f3d">Eventos em tempo real com reenvio automático e log de tentativas. Monitore tudo no painel.</div>
        <div class="webhook-log">
          <div class="wl-row"><div class="wl-dot dot-ok"></div><span class="wl-ev">payment.confirmed</span><span class="wl-ms">48ms</span></div>
          <div class="wl-row"><div class="wl-dot dot-ok"></div><span class="wl-ev">charge.created</span><span class="wl-ms">31ms</span></div>
          <div class="wl-row"><div class="wl-dot dot-pend"></div><span class="wl-ev">payout.pending</span><span class="wl-ms">retry 2/3</span></div>
          <div class="wl-row"><div class="wl-dot dot-fail"></div><span class="wl-ev">webhook.failed</span><span class="wl-ms">timeout</span></div>
        </div>
      </div>

      <div class="bento-card reveal" style="transition-delay:.16s">
        <div class="bc-icon bi-amber">🪪</div>
        <div class="bc-title" data-i18n="f4t">Onboarding / KYB leve</div>
        <div class="bc-body" data-i18n="f4d">Fluxo de ativação simples na release inicial (manual/etapas), com trilha de auditoria e status.</div>
      </div>

      <div class="bento-card reveal" style="transition-delay:.20s">
        <div class="bc-icon bi-acc">💸</div>
        <div class="bc-title" data-i18n="f5t">Partner-based settlement</div>
        <div class="bc-body" data-i18n="f5d">Liquidação quando aplicável via parceiros e integrações progressivas do ecossistema, com ledger mínimo e rastreável.</div>
      </div>

      <div class="bento-card highlight reveal" style="transition-delay:.24s">
        <div class="bc-icon bi-teal">📊</div>
        <div class="bc-title" data-i18n="f6t">Dashboard em tempo real</div>
        <div class="bc-body" data-i18n="f6d">Cobranças, eventos, fees e reconciliação operacional em uma camada preparada para escala merchant e platform-grade.</div>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section class="pricing" id="pricing">
    <div class="pricing-inner">
      <div class="pricing-head reveal">
        <div class="section-chip" data-i18n="p_chip">Planos</div>
        <h2 class="section-h" data-i18n="p_title">Taxas claras, sem surpresas</h2>
        <p class="section-p" data-i18n="p_desc">Modelo operacional com cobrança por transação e planos progressivos para operações merchant e platform.</p>
      </div>

      <div class="pricing-grid">
        <div class="price-card reveal">
          <div class="pc-plan" data-i18n="ps_plan">Core</div>
          <div class="pc-price">R$0<span data-i18n="ps_month">/mês</span></div>
          <div class="pc-desc" data-i18n="ps_desc">Para operações em fase inicial de integração.</div>
          <div class="pc-fee">
            <span data-i18n="ps_fee">Pix: <strong>1,5%</strong> · Cartão: <strong>2,5%</strong> + R$0,50 · Cripto: <strong>1,0%</strong></span>
          </div>
          <ul class="pc-items">
            <li data-i18n="ps_i1">Charges ilimitadas</li>
            <li data-i18n="ps_i2">Link de pagamento</li>
            <li data-i18n="ps_i3">Webhooks básicos</li>
            <li data-i18n="ps_i4">Dashboard</li>
            <li class="off" data-i18n="ps_i5">Split avançado</li>
            <li class="off" data-i18n="ps_i6">Payout automático</li>
          </ul>
          <a class="pc-btn pc-outline" href="http://95.111.247.134:8082/" target="_blank" rel="noopener" data-i18n="ps_btn">Começar</a>
        </div>

        <div class="price-card featured reveal" style="transition-delay:.10s">
          <span class="price-badge" data-i18n="price_featured">RECOMENDADO</span>
          <div class="pc-plan" data-i18n="pp_plan">Pro</div>
          <div class="pc-price">R$79<span data-i18n="pp_month">/mês</span></div>
          <div class="pc-desc" data-i18n="pp_desc">Para operações com maior volume e necessidades operacionais avançadas.</div>
          <div class="pc-fee">
            <span data-i18n="pp_fee">Pix: <strong>0,75%</strong> · Cartão: <strong>1,9%</strong> + R$0,25 · Cripto: <strong>0,5%</strong></span>
          </div>
          <ul class="pc-items">
            <li data-i18n="pp_i1">Tudo do Core</li>
            <li data-i18n="pp_i2">Split</li>
            <li data-i18n="pp_i3">Webhooks com retry</li>
            <li data-i18n="pp_i4">Idempotência</li>
            <li data-i18n="pp_i5">Relatórios</li>
          </ul>
          <a class="pc-btn pc-solid" href="http://95.111.247.134:8082/" target="_blank" rel="noopener" data-i18n="pp_btn">Assinar Pro</a>
        </div>

        <div class="price-card reveal" style="transition-delay:.20s">
          <div class="pc-plan" data-i18n="pb_plan">Business</div>
          <div class="pc-price" style="font-size:30px;padding-top:6px;" data-i18n="pb_price">Sob consulta</div>
          <div class="pc-desc" data-i18n="pb_desc">Para plataformas, marketplaces e operações com regras avançadas de settlement.</div>
          <div class="pc-fee">
            <span data-i18n="pb_fee">Taxas por volume · Split customizado · SLA 99.9%</span>
          </div>
          <ul class="pc-items">
            <li data-i18n="pb_i1">Tudo do Pro</li>
            <li data-i18n="pb_i2">Taxas negociadas</li>
            <li data-i18n="pb_i3">Split multi-recebedor</li>
            <li data-i18n="pb_i4">Suporte dedicado</li>
          </ul>
          <a class="pc-btn pc-outline" href="http://95.111.247.134:8082/" target="_blank" rel="noopener" data-i18n="pb_btn">Falar com vendas</a>
        </div>
      </div>
    </div>
  </section>

  <!-- API -->
  <div class="section-divider"></div>
  <section class="api-section" id="api">
    <div class="api-inner">
      <div class="reveal">
        <div class="section-chip" data-i18n="api_chip">Desenvolvedores</div>
        <h2 class="section-h" data-i18n="api_title">API REST simples.<br>Webhook primeiro.</h2>
        <p class="section-p" data-i18n="api_desc">
          Integre em qualquer stack com API RESTful. Crie cobranças, use idempotência e receba eventos assinados por HMAC.
        </p>

        <div class="api-badges">
          <span class="api-badge ab-acc">REST</span>
          <span class="api-badge ab-teal">JSON</span>
          <span class="api-badge ab-acc">Webhooks</span>
          <span class="api-badge ab-purple">Idempotency</span>
          <span class="api-badge ab-teal">OpenAPI</span>
          <span class="api-badge ab-acc">Sandbox</span>
        </div>

        <div style="margin-top:22px;display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
          <a href="#api" class="btn-accent" data-i18n="api_btn1">Ver documentação</a>
          <a href="#api" class="btn-ghost" data-i18n="api_btn2">Explorar sandbox</a>
        </div>
        <button class="copy-key-btn" id="copyKeyBtn" aria-label="Copiar API Key de exemplo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          sk_live_••••••••••••••••
        </button>
      </div>

      <div class="code-block reveal" style="transition-delay:.12s">
        <div class="code-topbar">
          <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
          <span class="code-title" data-i18n="code_title">webhook · payment.confirmed</span>
        </div>

<pre><span class="c-com" data-i18n="code_c1">// Evento recebido no seu servidor</span>
<span class="c-kw">const</span> event = <span class="c-punct">{</span>
  <span class="c-key">event</span><span class="c-punct">:</span> <span class="c-str">"payment.confirmed"</span><span class="c-punct">,</span>
  <span class="c-key">charge_id</span><span class="c-punct">:</span> <span class="c-str">"ch_9f2a3b..."</span><span class="c-punct">,</span>
  <span class="c-key">amount</span><span class="c-punct">:</span> <span class="c-num">15000</span><span class="c-punct">,</span>
  <span class="c-key">method</span><span class="c-punct">:</span> <span class="c-str">"PIX"</span><span class="c-punct">,</span>
  <span class="c-key">fee_amount</span><span class="c-punct">:</span> <span class="c-num">225</span><span class="c-punct">,</span>
  <span class="c-key">net_amount</span><span class="c-punct">:</span> <span class="c-num">14775</span><span class="c-punct">,</span>
  <span class="c-key">status</span><span class="c-punct">:</span> <span class="c-acc">"CONFIRMED"</span>
<span class="c-punct">}</span></pre>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta">
    <div class="cta-inner reveal">
      <h2 data-i18n="cta2_title">Sua infraestrutura de cobrança<br>pronta para <em>integração operacional</em></h2>
      <p data-i18n="cta2_desc">Crie sua conta, gere a primeira cobrança e comece a receber — com eventos em tempo real e taxas claras.</p>
      <div class="cta-row">
        <a href="http://95.111.247.134:8082/" target="_blank" rel="noopener" class="btn-accent" data-i18n="cta2_btn1">Criar conta</a>
        <a href="#pricing" class="btn-ghost" data-i18n="cta2_btn2">Ver planos →</a>
      </div>
    </div>
  </section>

  <!-- VOLUME CHART SECTION -->
  <div class="chart-section">
    <div class="chart-wrap reveal">
      <div class="chart-header">
        <div class="chart-header-left">
          <div>
            <div class="chart-title" data-i18n="chart_title">Volume de Transações</div>
            <div class="chart-sub" data-i18n="chart_sub">Últimos 7 meses · Todos os métodos</div>
          </div>
        </div>
        <div class="chart-legend">
          <div class="cl-item"><div class="cl-dot cl-pix"></div><span data-i18n="chart_leg_pix">Pix</span></div>
          <div class="cl-item"><div class="cl-dot cl-card"></div><span data-i18n="chart_leg_card">Cartão</span></div>
          <div class="cl-item"><div class="cl-dot cl-crypto"></div><span data-i18n="chart_leg_crypto">Cripto</span></div>
        </div>
      </div>
      <div class="chart-body">
        <div class="chart-canvas-wrap">
          <canvas id="volumeChart"></canvas>
        </div>
      </div>
      <div class="chart-stats">
        <div class="cs-block">
          <div class="cs-val"><em>R$</em>4.2M</div>
          <div class="cs-label" data-i18n="cs_vol_label">Volume processado</div>
          <div class="cs-change" data-i18n="cs_vol_change">↑ +31% vs mês anterior</div>
        </div>
        <div class="cs-block">
          <div class="cs-val">98<em>%</em></div>
          <div class="cs-label" data-i18n="cs_conf_label">Taxa de confirmação</div>
          <div class="cs-change">↑ +1.2pp</div>
        </div>
        <div class="cs-block">
          <div class="cs-val"><em>&lt;</em>1.8s</div>
          <div class="cs-label" data-i18n="cs_pix_label">Tempo médio Pix</div>
          <div class="cs-change" data-i18n="cs_pix_change">↓ −0.3s mais rápido</div>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer>
    <div class="footer-inner">

      <!-- CTA strip inside footer -->
      <div class="footer-cta">
        <div class="footer-cta-left">
          <h3 data-i18n="foot_cta_title">Pronto para estruturar <em>sua operação?</em></h3>
          <p data-i18n="foot_cta_desc">Estruture sua operação de cobrança com checkout, eventos e liquidação rastreável.</p>
        </div>
        <div class="footer-cta-right">
          <a href="http://95.111.247.134:8082/" target="_blank" rel="noopener" class="btn-accent" style="padding:11px 22px;font-size:13.5px;" data-i18n="foot_cta_btn1">Iniciar integração</a>
          <a href="#api" class="btn-ghost" style="padding:11px 18px;font-size:13px;" data-i18n="foot_cta_btn2">Ver API docs →</a>
        </div>
      </div>

      <div class="footer-top">
        <div class="footer-brand-row fb-brand">
          <div style="display:flex;align-items:center;gap:12px;">
            <div class="brand-badge" style="width:40px;height:40px;">
              <img src="assets/logo/zpay-logo.png" 
                   onerror="this.onerror=null;this.src='assets/logo/zpay-logo.svg'"
                   alt="Z-PAY Logo" width="38" height="38">
            </div>
            <div class="brand-text">
              <div class="brand-name">Z-PAY</div>
              <div class="brand-sub" data-i18n="nav_sub">SETTLEMENT LAYER</div>
            </div>
          </div>
          <p data-i18n="foot_desc">Infraestrutura de pagamentos para merchants e plataformas. Checkout, API, webhooks, split, payout e conciliação dentro do ecossistema ZETTA.</p>

          <div class="ecosystem-pill"><span data-i18n="foot_pill_a">Ecossistema</span> <span data-i18n="foot_zetta">Zetta</span></div>

          <div class="foot-status">
            <div class="foot-status-dot"></div>
            <span data-i18n="foot_status">Todos os sistemas operacionais</span>
          </div>

          <div class="foot-socials">
            <a href="#" class="foot-social" aria-label="GitHub">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="#" class="foot-social" aria-label="Twitter / X">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="foot-social" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-links-row">
          <div class="fc">
            <h4 data-i18n="foot_p">Produto</h4>
            <ul>
              <li><a href="#features" data-i18n="foot_p1">Cobranças</a></li>
              <li><a href="#features" data-i18n="foot_p2">Checkout</a></li>
              <li><a href="#features" data-i18n="foot_p3">Split</a></li>
              <li><a href="#features" data-i18n="foot_p4">Webhooks</a></li>
              <li><a href="#pricing" data-i18n="foot_p5">Planos</a></li>
            </ul>
          </div>

          <div class="fc">
            <h4 data-i18n="foot_c">Empresa</h4>
            <ul>
              <li><a href="#" data-i18n="foot_c1">Sobre</a></li>
              <li><a href="#" data-i18n="foot_c2">Contato</a></li>
              <li><a href="#" data-i18n="foot_c3">Status</a></li>
              <li><a href="#" data-i18n="foot_c4">Blog</a></li>
              <li><a href="#" data-i18n="foot_c5">Brand</a></li>
            </ul>
          </div>

          <div class="fc">
            <h4 data-i18n="foot_d">Dev</h4>
            <ul>
              <li><a href="#api" data-i18n="foot_d1">API Docs</a></li>
              <li><a href="#api" data-i18n="foot_d2">OpenAPI</a></li>
              <li><a href="#api" data-i18n="foot_d3">Sandbox</a></li>
              <li><a href="#" data-i18n="foot_d4">Changelog <span class="fc-badge">NEW</span></a></li>
              <li><a href="#" data-i18n="foot_d5">Suporte</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="fb-meta">
          <span class="fb-copy" data-i18n="foot_copy">© 2026 <strong>Z-PAY</strong>. Todos os direitos reservados.</span>
          <div class="fb-sep"></div>
          <span style="font-size:11px;color:var(--text3);" data-i18n="foot_ecosystem_label">Parte do ecossistema <strong style="color:var(--text2)">Zetta</strong></span>
        </div>
        <div class="fb-links">
          <a href="#" data-i18n="foot_l1">Privacidade</a>
          <a href="#" data-i18n="foot_l2">Termos</a>
          <a href="#" data-i18n="foot_l3">Cookies</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- MOBILE MENU OVERLAY -->
  <div class="overlay" id="overlay" aria-hidden="true">
    <div class="sheet" role="dialog" aria-modal="true" aria-label="Menu">
      <div class="sheet-head">
        <div class="sheet-title" data-i18n="menu_title">MENU</div>
        <button class="close-btn" id="closeMenu" aria-label="Close">
          <div class="close-x"></div>
        </button>
      </div>

      <div class="sheet-body">
        <div class="sheet-grid">
          <a class="mm-item" href="#como"><span data-i18n="nav_how">Como funciona</span><span class="mm-arrow">→</span></a>
          <a class="mm-item" href="#features"><span data-i18n="nav_features">Funcionalidades</span><span class="mm-arrow">→</span></a>
          <a class="mm-item" href="#pricing"><span data-i18n="nav_pricing">Planos</span><span class="mm-arrow">→</span></a>
          <a class="mm-item" href="#api"><span data-i18n="nav_devs">Desenvolvedores</span><span class="mm-arrow">→</span></a>
          <a class="mm-item" href="https://z-pay-white-paper.vercel.app/" target="_blank" rel="noopener"><span data-i18n="cta_founding">Programa Founding Clients</span><span class="mm-arrow">→</span></a>
        </div>

        <div class="sheet-actions">
          <a class="a-login" href="http://95.111.247.134:8082/" target="_blank" rel="noopener" data-i18n="nav_login">Login</a>
          <a class="a-sign" href="http://95.111.247.134:8082/" target="_blank" rel="noopener" data-i18n="nav_signup">Criar conta</a>
        </div>
      </div>
    </div>
  </div>`;

export const clientScript = `// ═══════════════════════════════════════════════════
  // 1. SCROLL PROGRESS BAR
  // ═══════════════════════════════════════════════════
  const progressBar = document.getElementById('scroll-progress');
  function updateProgress(){
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });

  // ═══════════════════════════════════════════════════
  // 2. CUSTOM CURSOR
  // ═══════════════════════════════════════════════════
  const cursorDot  = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  if(cursorDot && cursorRing){
    let mx=0, my=0, rx=0, ry=0;
    let rafCursor;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursorDot.style.left = mx + 'px';
      cursorDot.style.top  = my + 'px';
      if(!rafCursor) rafCursor = requestAnimationFrame(updateRing);
    });

    function updateRing(){
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top  = ry + 'px';
      const dx = Math.abs(mx-rx), dy = Math.abs(my-ry);
      if(dx > 0.5 || dy > 0.5){
        rafCursor = requestAnimationFrame(updateRing);
      } else {
        rafCursor = null;
        cursorRing.style.left = mx + 'px';
        cursorRing.style.top  = my + 'px';
      }
    }

    // Hover effect on interactive elements
    const hoverSels = 'a, button, [role="button"], .lang-btn, .lang-item, .price-card, .bento-card, .mm-item, .bar, .foot-social';
    document.addEventListener('mouseover', e => {
      if(e.target.closest(hoverSels)) document.body.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', e => {
      if(e.target.closest(hoverSels)) document.body.classList.remove('cursor-hover');
    });
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-clicking'));
    document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-clicking'));

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      cursorDot.style.opacity  = '0';
      cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursorDot.style.opacity  = '1';
      cursorRing.style.opacity = '1';
    });
  }

  // ═══════════════════════════════════════════════════
  // 3. SCROLL REVEAL
  // ═══════════════════════════════════════════════════
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // ═══════════════════════════════════════════════════
  // 4. ANIMATED COUNTERS ON METRICS
  // ═══════════════════════════════════════════════════
  function animateCounter(el, target, duration){
    const start = performance.now();
    const isFloat = String(target).includes('.');
    function step(now){
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = isFloat
        ? (eased * target).toFixed(1)
        : Math.round(eased * target);
      // Find the count-num span inside the parent mb-val
      const numSpan = el.querySelector('.count-num');
      if(numSpan){
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        // Reconstruct inner with proper spans
        numSpan.textContent = value + suffix;
      }
      if(progress < 1) requestAnimationFrame(step);
      else el.classList.remove('counting');
    }
    el.classList.add('counting');
    requestAnimationFrame(step);
  }

  const metricsEl = document.querySelector('.metrics');
  if(metricsEl){
    const metricsObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          // idx 0 → 0 (skip), idx 1 → 3, idx 2 → 2, idx 3 → 100
          const vals = [null, 3, 2, 100];
          e.target.querySelectorAll('.mb-val[data-count]').forEach((el, i) => {
            const target = parseFloat(el.getAttribute('data-count'));
            if(target === 0) return; // R$0 stays at 0
            setTimeout(() => animateCounter(el, target, 1200), i * 150);
          });
          metricsObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    metricsObs.observe(metricsEl);
  }

  // ═══════════════════════════════════════════════════
  // 5. ANIMATE MINI-CHART ON REVEAL
  // ═══════════════════════════════════════════════════
  const chartObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.bar').forEach((b, i) => {
          const h = b.style.height;
          b.style.height = '4px';
          setTimeout(() => {
            b.style.transition = \`height 0.55s \${i * 0.055}s cubic-bezier(.34,1.3,.64,1)\`;
            b.style.height = h;
          }, 120);
        });
        chartObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.mini-chart').forEach(el => chartObs.observe(el));

  // ═══════════════════════════════════════════════════
  // 6. PARALLAX ON HERO GLOW (mousemove)
  // ═══════════════════════════════════════════════════
  const glowA = document.querySelector('.glow-a');
  const glowB = document.querySelector('.glow-b');
  if(glowA && glowB){
    let targetX=0, targetY=0, currX=0, currY=0;
    let rafParallax;

    window.addEventListener('mousemove', e => {
      const cx = e.clientX / window.innerWidth  - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      targetX = cx * 36;
      targetY = cy * 22;
      if(!rafParallax) rafParallax = requestAnimationFrame(animateParallax);
    }, { passive: true });

    function animateParallax(){
      currX += (targetX - currX) * 0.06;
      currY += (targetY - currY) * 0.06;
      glowA.style.transform = \`translateX(calc(-50% + \${currX}px)) translateY(\${currY * 0.6}px)\`;
      glowB.style.transform = \`translateX(\${-currX * 0.5}px) translateY(\${-currY * 0.4}px)\`;
      const dx = Math.abs(targetX-currX), dy = Math.abs(targetY-currY);
      if(dx > 0.15 || dy > 0.15){
        rafParallax = requestAnimationFrame(animateParallax);
      } else {
        rafParallax = null;
      }
    }
  }

  // ═══════════════════════════════════════════════════
  // 7. TOAST — COPY API KEY
  // ═══════════════════════════════════════════════════
  const toast    = document.getElementById('toast');
  const copyBtn  = document.getElementById('copyKeyBtn');
  let toastTimer;

  function showToast(title, sub){
    const tTitle = toast.querySelector('.toast-title');
    const tSub   = toast.querySelector('.toast-sub');
    if(tTitle) tTitle.textContent = title;
    if(tSub)   tSub.textContent   = sub;
    clearTimeout(toastTimer);
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  if(copyBtn){
    copyBtn.addEventListener('click', () => {
      const fakeKey = 'sk_live_zpay_7f2a3b9c8d1e4f5a';
      const tTitle = toast?.querySelector('.toast-title');
      const tSub   = toast?.querySelector('.toast-sub');
      const copyFn = () => {
        clearTimeout(toastTimer);
        toast.classList.add('show');
        toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
      };
      try {
        navigator.clipboard.writeText(fakeKey).then(copyFn).catch(copyFn);
      } catch(e){ copyFn(); }
    });
  }

  // ═══════════════════════════════════════════════════
  // 8. MOBILE MENU
  // ═══════════════════════════════════════════════════
  const overlay  = document.getElementById('overlay');
  const menuBtn  = document.getElementById('menuBtn');
  const closeMenu = document.getElementById('closeMenu');

  function openMenu(){
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function hideMenu(){
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  menuBtn.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', hideMenu);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) hideMenu(); });
  document.querySelectorAll('.mm-item').forEach(a => { a.addEventListener('click', hideMenu); });

  // ===== Language popover
  const langBtn = document.getElementById('langBtn');
  const langPop = document.getElementById('langPop');
  const flagBox = document.getElementById('flagBox');
  const langCode = document.getElementById('langCode');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langPop.classList.toggle('open');
  });
  document.addEventListener('click', () => langPop.classList.remove('open'));

  const dict = {
    pt: {
      nav_sub:"SETTLEMENT LAYER",
      nav_how:"Como funciona",
      nav_features:"Funcionalidades",
      nav_pricing:"Planos",
      nav_devs:"Desenvolvedores",
      nav_login:"Login",
      nav_signup:"Criar conta",

      eyebrow:"B2B settlement layer for checkout, API and payment orchestration",
      h1_a:"Estruture pagamentos em",
      h1_b:"Pix e ativos digitais",
      h1_c:"com liquidação programável",
      h1_line2:"do mesmo link. no mesmo painel.",
      hero_desc:"Z-PAY é a infraestrutura de orquestração de pagamentos do ecossistema ZETTA. Estruture cobranças, regras de split, eventos e liquidação rastreável entre rails fiat e digitais.",
      cta_start:"Iniciar integração",
      cta_docs:"Ver docs →",
      cta_founding:"Programa Founding Clients →",
      mvp_note:"Infraestrutura B2B de pagamentos com integração progressiva ao ecossistema ZETTA.",

      term_title:"POST /v1/charges · create charge",
      term_c1:"// Crie uma cobrança e gere um checkout rastreável com eventos integrados",

      trust_label:"ECOSYSTEM",

      m1v:"0", m1l:"setup inicial",
      m2v:"3+", m2l:"métodos de pagamento",
      m3v:"2s", m3l:"confirmação Pix",
      m4v:"100%", m4l:"eventos auditáveis",

      how_chip:"Como funciona",
      how_title:"Cobrar nunca foi tão simples",
      how_desc:"Três passos para estruturar checkout, eventos e liquidação rastreável em ambiente merchant-ready.",
      how_1t:"1. Estruture seu ambiente merchant",
      how_1d:"Onboarding com KYB leve (manual na release inicial), API Keys e configuração de webhooks.",
      how_2t:"2. Gere uma cobrança",
      how_2d:"Via dashboard ou API: valor, métodos aceitos e regras de split. Link instantâneo.",
      how_3t:"3. Confirme e concilie",
      how_3d:"Webhooks primeiro, idempotência e log de eventos para conciliação e auditoria.",

      feat_chip:"Funcionalidades",
      feat_title:"Settlement infrastructure,<br>from checkout to payout",
      f1t:"Multi-método em um só link",
      f1d:"Uma camada de checkout compatível com rails fiat e digitais, desenhada para simplificar orquestração, eventos e liquidação operacional.",
      f2t:"Split de pagamento",
      f2d:"Distribua automaticamente o valor entre múltiplos recebedores com regras configuráveis por charge.",
      split_a:"Marketplace",
      split_b:"Vendedor A",
      split_c:"Z-PAY fee",
      f3t:"Webhooks com retry",
      f3d:"Eventos em tempo real com reenvio automático e log de tentativas. Monitore tudo no painel.",
      f4t:"Onboarding / KYB leve",
      f4d:"Fluxo de ativação simples na release inicial (manual/etapas), com trilha de auditoria e status.",
      f5t:"Partner-based settlement",
      f5d:"Liquidação quando aplicável via parceiros e integrações progressivas do ecossistema, com ledger mínimo e rastreável.",
      f6t:"Dashboard em tempo real",
      f6d:"Cobranças, eventos, fees e reconciliação operacional em uma camada preparada para escala merchant e platform-grade.",

      p_chip:"Planos",
      p_title:"Taxas claras, sem surpresas",
      p_desc:"Modelo operacional com cobrança por transação e planos progressivos para operações merchant e platform.",

      ps_plan:"Core",
      ps_month:"/mês",
      ps_desc:"Para operações em fase inicial de integração.",
      ps_fee:"Pix: <strong>1,5%</strong> · Cartão: <strong>2,5%</strong> + R$0,50 · Cripto: <strong>1,0%</strong>",
      ps_i1:"Charges ilimitadas",
      ps_i2:"Link de pagamento",
      ps_i3:"Webhooks básicos",
      ps_i4:"Dashboard",
      ps_i5:"Split avançado",
      ps_i6:"Payout automático",
      ps_btn:"Começar",

      pp_plan:"Pro",
      pp_month:"/mês",
      pp_desc:"Para operações com maior volume e necessidades operacionais avançadas.",
      pp_fee:"Pix: <strong>0,75%</strong> · Cartão: <strong>1,9%</strong> + R$0,25 · Cripto: <strong>0,5%</strong>",
      pp_i1:"Tudo do Core",
      pp_i2:"Split",
      pp_i3:"Webhooks com retry",
      pp_i4:"Idempotência",
      pp_i5:"Relatórios",
      pp_btn:"Assinar Pro",

      pb_plan:"Business",
      pb_price:"Sob consulta",
      pb_desc:"Para plataformas, marketplaces e operações com regras avançadas de settlement.",
      pb_fee:"Taxas por volume · Split customizado · SLA 99.9%",
      pb_i1:"Tudo do Pro",
      pb_i2:"Taxas negociadas",
      pb_i3:"Split multi-recebedor",
      pb_i4:"Suporte dedicado",
      pb_btn:"Falar com vendas",

      api_chip:"Desenvolvedores",
      api_title:"API REST simples.<br>Webhook primeiro.",
      api_desc:"Integre em qualquer stack com API RESTful. Crie cobranças, use idempotência e receba eventos assinados por HMAC.",
      api_btn1:"Ver documentação",
      api_btn2:"Explorar sandbox",
      code_title:"webhook · payment.confirmed",
      code_c1:"// Evento recebido no seu servidor",

      cta2_title:'Sua infraestrutura de cobrança<br>pronta para <em>integração operacional</em>',
      cta2_desc:"Crie sua conta, gere a primeira cobrança e comece a receber — com eventos em tempo real e taxas claras.",
      cta2_btn1:"Criar conta",
      cta2_btn2:"Ver planos →",

      foot_desc:"Infraestrutura de pagamentos para merchants e plataformas. Checkout, API, webhooks, split, payout e conciliação dentro do ecossistema ZETTA.",
      foot_pill_a:"Ecossistema",
      foot_zetta:"Zetta",
      foot_status:"Todos os sistemas operacionais",
      foot_cta_title:'Pronto para estruturar <em>sua operação?</em>',
      foot_cta_desc:"Estruture sua operação de cobrança com checkout, eventos e liquidação rastreável.",
      foot_cta_btn1:"Iniciar integração",
      foot_cta_btn2:"Ver API docs →",
      foot_ecosystem_label:'Parte do ecossistema <strong style="color:var(--text2)">Zetta</strong>',
      chart_title:"Volume de Transações",
      chart_sub:"Últimos 7 meses · Todos os métodos",
      chart_leg_pix:"Pix",
      chart_leg_card:"Cartão",
      chart_leg_crypto:"Cripto",
      cs_vol_label:"Volume processado",
      cs_vol_change:"↑ +31% vs mês anterior",
      cs_conf_label:"Taxa de confirmação",
      cs_pix_label:"Tempo médio Pix",
      cs_pix_change:"↓ −0.3s mais rápido",
      price_featured:"RECOMENDADO",
      foot_p:"Produto",
      foot_p1:"Cobranças",
      foot_p2:"Checkout",
      foot_p3:"Split",
      foot_p4:"Webhooks",
      foot_p5:"Planos",
      foot_c:"Empresa",
      foot_c1:"Sobre",
      foot_c2:"Contato",
      foot_c3:"Status",
      foot_c4:"Blog",
      foot_c5:"Brand",
      foot_d:"Dev",
      foot_d1:"API Docs",
      foot_d2:"OpenAPI",
      foot_d3:"Sandbox",
      foot_d4:"Changelog",
      foot_d5:"Suporte",
      foot_copy:'© 2026 <strong>Z-PAY</strong>. Todos os direitos reservados.',
      foot_l1:"Privacidade",
      foot_l2:"Termos",
      foot_l3:"Cookies",
      menu_title:"MENU"
    },

    en: {
      nav_sub:"SETTLEMENT LAYER",
      nav_how:"How it works",
      nav_features:"Features",
      nav_pricing:"Pricing",
      nav_devs:"Developers",
      nav_login:"Login",
      nav_signup:"Create account",

      eyebrow:"B2B settlement layer for checkout, API and payment orchestration",
      h1_a:"Orchestrate payments with",
      h1_b:"Pix and digital assets",
      h1_c:"on programmable settlement",
      h1_line2:"same link. same dashboard.",
      hero_desc:"Z-PAY is the payment orchestration layer of the ZETTA ecosystem. It structures charges, split rules, webhooks and traceable settlement across fiat and digital rails.",
      cta_start:"Start integration",
      cta_docs:"View docs →",
      cta_founding:"Founding Clients Program →",
      mvp_note:"B2B payment infrastructure with progressive integration into the ZETTA ecosystem.",

      term_title:"POST /v1/charges · create charge",
      term_c1:"// Create a charge object and generate a traceable checkout event",

      trust_label:"ECOSYSTEM",

      m1v:"0", m1l:"initial setup",
      m2v:"3+", m2l:"payment methods",
      m3v:"2s", m3l:"Pix confirmation",
      m4v:"100%", m4l:"auditable events",

      how_chip:"How it works",
      how_title:"Charging is now simple",
      how_desc:"Three steps to structure checkout, events and traceable settlement in a merchant-ready environment.",
      how_1t:"1. Set up your merchant environment",
      how_1d:"Onboarding with light KYB (manual in the initial release), API Keys and webhook setup.",
      how_2t:"2. Create a charge",
      how_2d:"Dashboard or API: amount, accepted methods, and split rules. Instant link.",
      how_3t:"3. Confirm & reconcile",
      how_3d:"Webhook-first, idempotency, and event logs for reconciliation & audit.",

      feat_chip:"Features",
      feat_title:"Settlement infrastructure,<br>from checkout to payout",
      f1t:"Multi-method in one link",
      f1d:"A checkout layer compatible with fiat and digital rails, designed to simplify orchestration, events and operational settlement.",
      f2t:"Payment splitting",
      f2d:"Automatically distribute funds across recipients with per-charge rules.",
      split_a:"Marketplace",
      split_b:"Seller A",
      split_c:"Z-PAY fee",
      f3t:"Webhooks with retries",
      f3d:"Real-time events with retries and delivery logs. Monitor everything in the dashboard.",
      f4t:"Onboarding / light KYB",
      f4d:"Simple initial release activation flow (manual/steps) with audit trail and status.",
      f5t:"Partner-based settlement",
      f5d:"Settlement when applicable through partners and progressive ecosystem integrations, with a minimal and traceable ledger.",
      f6t:"Real-time dashboard",
      f6d:"Charges, events, fees and operational reconciliation in a layer built for merchant and platform-grade scale.",

      p_chip:"Pricing",
      p_title:"Clear fees, no surprises",
      p_desc:"Operational model with transaction-based fees and progressive plans for merchants and platforms.",

      ps_plan:"Core",
      ps_month:"/mo",
      ps_desc:"For operations in the initial integration phase.",
      ps_fee:"Pix: <strong>1.5%</strong> · Card: <strong>2.5%</strong> + R$0.50 · Crypto: <strong>1.0%</strong>",
      ps_i1:"Unlimited charges",
      ps_i2:"Payment links",
      ps_i3:"Basic webhooks",
      ps_i4:"Dashboard",
      ps_i5:"Advanced splits",
      ps_i6:"Auto payouts",
      ps_btn:"Start",

      pp_plan:"Pro",
      pp_month:"/mo",
      pp_desc:"For operations with higher volume and advanced operational requirements.",
      pp_fee:"Pix: <strong>0.75%</strong> · Card: <strong>1.9%</strong> + R$0.25 · Crypto: <strong>0.5%</strong>",
      pp_i1:"Everything in Core",
      pp_i2:"Splits",
      pp_i3:"Webhook retries",
      pp_i4:"Idempotency",
      pp_i5:"Reports",
      pp_btn:"Go Pro",

      pb_plan:"Business",
      pb_price:"Custom",
      pb_desc:"For platforms, marketplaces and operations with advanced settlement rules.",
      pb_fee:"Volume pricing · Custom splits · 99.9% SLA",
      pb_i1:"Everything in Pro",
      pb_i2:"Negotiated pricing",
      pb_i3:"Multi-recipient splits",
      pb_i4:"Dedicated support",
      pb_btn:"Talk to sales",

      api_chip:"Developers",
      api_title:"Simple REST API.<br>Webhook-first.",
      api_desc:"Integrate with any stack. Create charges, use idempotency, and receive HMAC-signed events.",
      api_btn1:"View docs",
      api_btn2:"Explore sandbox",
      code_title:"webhook · payment.confirmed",
      code_c1:"// Event received by your server",

      cta2_title:'Operational payment infrastructure<br>ready for <em>integration</em>',
      cta2_desc:"Create an account, generate your first charge, and start getting paid — with real-time events and clear fees.",
      cta2_btn1:"Create account",
      cta2_btn2:"See pricing →",

      foot_desc:"Payment infrastructure for merchants and platforms. Checkout, API, webhooks, split, payout and reconciliation within the ZETTA ecosystem.",
      foot_pill_a:"Ecosystem",
      foot_zetta:"Zetta",
      foot_status:"All systems operational",
      foot_cta_title:'Ready to structure <em>your operation?</em>',
      foot_cta_desc:"Structure your payment operation with checkout, events and traceable settlement.",
      foot_cta_btn1:"Start integration",
      foot_cta_btn2:"See API docs →",
      foot_ecosystem_label:'Part of the <strong style="color:var(--text2)">Zetta</strong> ecosystem',
      chart_title:"Transaction Volume",
      chart_sub:"Last 7 months · All methods",
      chart_leg_pix:"Pix",
      chart_leg_card:"Card",
      chart_leg_crypto:"Crypto",
      cs_vol_label:"Processed volume",
      cs_vol_change:"↑ +31% vs last month",
      cs_conf_label:"Confirmation rate",
      cs_pix_label:"Avg. Pix time",
      cs_pix_change:"↓ −0.3s faster",
      price_featured:"RECOMMENDED",
      foot_p:"Product",
      foot_p1:"Charges",
      foot_p2:"Checkout",
      foot_p3:"Split",
      foot_p4:"Webhooks",
      foot_p5:"Pricing",
      foot_c:"Company",
      foot_c1:"About",
      foot_c2:"Contact",
      foot_c3:"Status",
      foot_c4:"Blog",
      foot_c5:"Brand",
      foot_d:"Dev",
      foot_d1:"API Docs",
      foot_d2:"OpenAPI",
      foot_d3:"Sandbox",
      foot_d4:"Changelog",
      foot_d5:"Support",
      foot_copy:'© 2026 <strong>Z-PAY</strong>. All rights reserved.',
      foot_l1:"Privacy",
      foot_l2:"Terms",
      foot_l3:"Cookies",
      menu_title:"MENU"
    },

    zh: {
      nav_sub:"结算层",
      nav_how:"如何运作",
      nav_features:"功能",
      nav_pricing:"方案",
      nav_devs:"开发者",
      nav_login:"登录",
      nav_signup:"创建账号",

      eyebrow:"面向结账、API 与支付编排的 B2B 结算层",
      h1_a:"企业级",
      h1_b:"支付结账",
      h1_c:"",
      h1_line2:"收款、分账、对账与结算 — 简单 API 即可接入。",
      hero_desc:"Z-PAY 是 ZETTA 生态的支付编排层，为商户与平台提供结构化收款、分账规则、Webhook 事件及跨法币与数字轨道的可追溯清结算，并与机构栈渐进式集成。",
      cta_start:"立即开始",
      cta_docs:"查看文档 →",
      cta_founding:"创始客户计划 →",
      mvp_note:"B2B 支付基础设施，渐进式集成至 ZETTA 生态。",

      term_title:"POST /v1/charges · 创建收款单",
      term_c1:"// 创建收款单并生成带集成事件的可追溯结账",

      trust_label:"ECOSYSTEM",

      m1v:"0", m1l:"零初始设置费",
      m2v:"3+", m2l:"支付方式",
      m3v:"2s", m3l:"Pix 确认",
      m4v:"100%", m4l:"可审计事件",

      how_chip:"如何运作",
      how_title:"收款从未如此简单",
      how_desc:"三步构建结账、事件与可追溯清结算的商户就绪环境。",
      how_1t:"1. 配置商户环境",
      how_1d:"轻量 KYB（初始版本可手动），生成 API Keys 并配置 Webhooks。",
      how_2t:"2. 创建收款单",
      how_2d:"通过仪表盘或 API：金额、方式与分账规则，立即获得链接。",
      how_3t:"3. 确认与对账",
      how_3d:"Webhook 优先、幂等与事件日志，便于对账与审计。",

      feat_chip:"功能",
      feat_title:"从结账到结算的基础设施",
      f1t:"一个链接，多种方式",
      f1d:"兼容法币与数字轨道的结账层，简化编排、事件与运营清结算。",
      f2t:"分账",
      f2d:"按收款单规则自动分配到多个收款方。",
      split_a:"平台",
      split_b:"商户 A",
      split_c:"Z-PAY 手续费",
      f3t:"Webhook 重试",
      f3d:"实时事件 + 自动重试 + 投递日志，面板可监控。",
      f4t:"入驻 / 轻量 KYB",
      f4d:"初始版本简化流程（手动/分步），含审计轨迹与状态。",
      f5t:"基于合作方的清结算",
      f5d:"适用时通过合作方及生态渐进式集成进行清结算，账本最小且可追溯。",
      f6t:"实时仪表盘",
      f6d:"收款单、事件、手续费与运营对账，构建于适合商户与平台规模的基础层之上。",

      p_chip:"方案",
      p_title:"费用透明，无隐藏成本",
      p_desc:"按交易收费的运营模型，提供面向商户与平台的渐进式方案。",

      ps_plan:"Core",
      ps_month:"/月",
      ps_desc:"适合初始集成阶段的运营。",
      ps_fee:"Pix：<strong>1.5%</strong> · 卡：<strong>2.5%</strong> + R$0.50 · 加密：<strong>1.0%</strong>",
      ps_i1:"无限收款单",
      ps_i2:"支付链接",
      ps_i3:"基础 Webhooks",
      ps_i4:"仪表盘",
      ps_i5:"高级分账",
      ps_i6:"自动结算",
      ps_btn:"开始",

      pp_plan:"Pro",
      pp_month:"/月",
      pp_desc:"适合更高交易量及进阶运营需求的操作。",
      pp_fee:"Pix：<strong>0.75%</strong> · 卡：<strong>1.9%</strong> + R$0.25 · 加密：<strong>0.5%</strong>",
      pp_i1:"包含 Starter",
      pp_i2:"分账",
      pp_i3:"Webhook 重试",
      pp_i4:"幂等",
      pp_i5:"报表",
      pp_btn:"升级 Pro",

      pb_plan:"Business",
      pb_price:"定制",
      pb_desc:"适合平台、市场及有高级结算规则需求的运营。",
      pb_fee:"按量定价 · 定制分账 · 99.9% SLA",
      pb_i1:"包含 Pro",
      pb_i2:"协商费率",
      pb_i3:"多收款方分账",
      pb_i4:"专属支持",
      pb_btn:"联系销售",

      api_chip:"开发者",
      api_title:"REST API 简洁易用。<br>Webhook 优先。",
      api_desc:"兼容任何技术栈：创建收款单、幂等处理、HMAC 签名事件。",
      api_btn1:"查看文档",
      api_btn2:"探索 Sandbox",
      code_title:"webhook · payment.confirmed",
      code_c1:"// 服务器收到的事件",

      cta2_title:'面向运营集成的<br><em>支付基础设施</em>即刻就绪',
      cta2_desc:"创建账号，生成第一笔收款单，即可开始收款 — 实时事件与透明费用。",
      cta2_btn1:"创建账号",
      cta2_btn2:"查看方案 →",

      foot_desc:"面向商户与平台的支付基础设施：结账页、API、Webhooks、分账、Payout 与对账，集成于 ZETTA 生态。",
      foot_pill_a:"生态",
      foot_zetta:"Zetta",
      foot_status:"所有系统正常运行",
      foot_cta_title:'准备好构建您的运营了吗？',
      foot_cta_desc:"通过结账、事件与可追溯清结算构建您的支付运营。",
      foot_cta_btn1:"开始集成",
      foot_cta_btn2:"查看 API 文档 →",
      foot_ecosystem_label:'<strong style="color:var(--text2)">Zetta</strong> 生态系统的一部分',
      chart_title:"交易量",
      chart_sub:"最近 7 个月 · 全部方式",
      chart_leg_pix:"Pix",
      chart_leg_card:"银行卡",
      chart_leg_crypto:"加密货币",
      cs_vol_label:"处理量",
      cs_vol_change:"↑ +31% 较上月",
      cs_conf_label:"确认率",
      cs_pix_label:"Pix 平均时间",
      cs_pix_change:"↓ −0.3s 更快",
      price_featured:"推荐",
      foot_p:"产品",
      foot_p1:"收款",
      foot_p2:"结账",
      foot_p3:"分账",
      foot_p4:"Webhooks",
      foot_p5:"方案",
      foot_c:"公司",
      foot_c1:"关于",
      foot_c2:"联系",
      foot_c3:"状态",
      foot_c4:"博客",
      foot_c5:"品牌",
      foot_d:"开发者",
      foot_d1:"API 文档",
      foot_d2:"OpenAPI",
      foot_d3:"Sandbox",
      foot_d4:"更新日志",
      foot_d5:"支持",
      foot_copy:'© 2026 <strong>Z-PAY</strong>。保留所有权利。',
      foot_l1:"隐私",
      foot_l2:"条款",
      foot_l3:"Cookies",
      menu_title:"MENU"
    }
  };

  function setLang(lang){
    const map = dict[lang] || dict.pt;
    const langAttr = lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en' : 'zh-CN';
    document.documentElement.lang = langAttr;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const val = map[key];
      if (val === undefined) return;
      if (String(val).includes('<') && String(val).includes('>')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Update page title
    const titles = {
      pt: 'Z-PAY — Settlement Infrastructure for Merchants and Platforms',
      en: 'Z-PAY — Payment Orchestration Infrastructure',
      zh: 'Z-PAY — 企业支付编排与清结算基础设施'
    };
    document.title = titles[lang] || titles.pt;

    // Update meta description
    const descs = {
      pt: 'Infraestrutura de liquidação programável para merchants e plataformas. Orquestração de checkout, webhooks, split, payout e conciliação entre rails fiat e digitais.',
      en: 'Programmable settlement infrastructure for merchants and platforms. Checkout orchestration, webhooks, split, payout and reconciliation across fiat and digital rails.',
      zh: '面向商户与平台的可编程清结算基础设施。跨法币与数字轨道的结账编排、Webhooks、分账、Payout 与对账。'
    };
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descs[lang] || descs.pt);

    // Update toast i18n strings
    const toastI18n = {
      pt: { title: 'Copiado!', sub: 'API Key copiada para o clipboard' },
      en: { title: 'Copied!',  sub: 'API Key copied to clipboard' },
      zh: { title: '已复制！', sub: 'API Key 已复制到剪贴板' }
    };
    const ti = toastI18n[lang] || toastI18n.pt;
    const tTitle = toast?.querySelector('.toast-title');
    const tSub   = toast?.querySelector('.toast-sub');
    if (tTitle) tTitle.textContent = ti.title;
    if (tSub)   tSub.textContent   = ti.sub;

    // Nav flag display
    const flags = { pt: ['🇧🇷','PT'], en: ['🇺🇸','EN'], zh: ['🇨🇳','中文'] };
    const [flag, code] = flags[lang] || flags.pt;
    if (flagBox)  flagBox.textContent  = flag;
    if (langCode) langCode.textContent = code;

    // Active state on lang items
    document.querySelectorAll('.lang-item').forEach(i => {
      i.classList.toggle('active', i.getAttribute('data-lang') === lang);
    });

    // Persist — safe for private browsing
    try { localStorage.setItem('zpay_lang', lang); } catch(e){}
  }

  document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', () => {
      const lang = item.getAttribute('data-lang');
      setLang(lang);
      langPop.classList.remove('open');
    });
  });

  // ===== Volume Chart (Canvas)
  (function(){
    const canvas = document.getElementById('volumeChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Resize canvas to container
    function resize(){
      const wrap = canvas.parentElement;
      canvas.width = wrap.offsetWidth * window.devicePixelRatio;
      canvas.height = wrap.offsetHeight * window.devicePixelRatio;
      canvas.style.width = wrap.offsetWidth + 'px';
      canvas.style.height = wrap.offsetHeight + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resize();
    window.addEventListener('resize', ()=>{ ctx.setTransform(1,0,0,1,0,0); resize(); drawChart(1); });

    const labels = ['Ago','Set','Out','Nov','Dez','Jan','Fev'];
    const pix    = [38, 52, 61, 74, 88, 102, 128];
    const card   = [22, 28, 34, 39, 44, 52,  63];
    const crypto = [8,  11, 14, 18, 21, 27,  32];

    const colors = {
      pix:    '#ff7a18',
      card:   '#06b6d4',
      crypto: '#818cf8'
    };

    let animProg = 0;
    let animFrame;

    function easeOut(t){ return 1 - Math.pow(1-t, 3); }

    function drawChart(prog){
      const W = canvas.width / window.devicePixelRatio;
      const H = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, W, H);

      const padL=28, padR=12, padT=10, padB=28;
      const gW = W - padL - padR;
      const gH = H - padT - padB;

      const allVals = [...pix, ...card, ...crypto];
      const maxV = Math.max(...allVals) * 1.12;

      // Grid lines
      const gridLines = 4;
      ctx.lineWidth = 1;
      for(let i=0; i<=gridLines; i++){
        const y = padT + gH - (i/gridLines)*gH;
        ctx.beginPath();
        ctx.moveTo(padL, y); ctx.lineTo(padL+gW, y);
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.stroke();
        // Y labels
        ctx.fillStyle='rgba(255,255,255,0.20)';
        ctx.font='10px DM Mono, monospace';
        ctx.textAlign='right';
        const val = Math.round((i/gridLines)*maxV);
        ctx.fillText(val+'k', padL-5, y+3.5);
      }

      // X labels
      ctx.textAlign='center';
      ctx.font='10px DM Mono, monospace';
      ctx.fillStyle='rgba(255,255,255,0.28)';
      const xStep = gW / (labels.length - 1);
      labels.forEach((l,i)=>{
        const x = padL + i*xStep;
        ctx.fillText(l, x, H-padB+16);
      });

      // Draw area + line for each series
      function drawSeries(data, color){
        const pts = data.map((v,i)=>({
          x: padL + i*xStep,
          y: padT + gH - (Math.min(v*prog, v)/maxV)*gH
        }));

        // Area fill gradient
        const grad = ctx.createLinearGradient(0, padT, 0, padT+gH);
        grad.addColorStop(0, color.replace(')', ',0.18)').replace('rgb', 'rgba'));
        grad.addColorStop(1, color.replace(')', ',0.00)').replace('rgb', 'rgba'));

        // Fallback gradient for hex colors
        const gradFill = ctx.createLinearGradient(0, padT, 0, padT+gH);
        const hexToRgba = (hex, a) => {
          const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
          return \`rgba(\${r},\${g},\${b},\${a})\`;
        };
        gradFill.addColorStop(0, hexToRgba(color, 0.16));
        gradFill.addColorStop(1, hexToRgba(color, 0.00));

        ctx.beginPath();
        ctx.moveTo(pts[0].x, padT+gH);
        pts.forEach(p=>ctx.lineTo(p.x, p.y));
        ctx.lineTo(pts[pts.length-1].x, padT+gH);
        ctx.closePath();
        ctx.fillStyle = gradFill;
        ctx.fill();

        // Line
        ctx.beginPath();
        pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.lineJoin='round';
        ctx.stroke();

        // Dots on last point
        const last = pts[pts.length-1];
        ctx.beginPath();
        ctx.arc(last.x, last.y, 4, 0, Math.PI*2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(last.x, last.y, 4, 0, Math.PI*2);
        ctx.strokeStyle = 'rgba(6,9,18,0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      drawSeries(crypto, colors.crypto);
      drawSeries(card,   colors.card);
      drawSeries(pix,    colors.pix);
    }

    function animate(){
      animProg += 0.022;
      const p = easeOut(Math.min(animProg, 1));
      drawChart(p);
      if(animProg < 1) animFrame = requestAnimationFrame(animate);
    }

    // Trigger on intersection
    const chartObserver = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          animProg = 0;
          cancelAnimationFrame(animFrame);
          animate();
          chartObserver.unobserve(e.target);
        }
      });
    },{threshold:0.3});
    chartObserver.observe(canvas);
  })();

  // ═══════════════════════════════════════════════════
  // INIT LANGUAGE
  // ═══════════════════════════════════════════════════
  // ═══════════════════════════════════════════════════
  // INIT LANGUAGE
  // ═══════════════════════════════════════════════════
  let savedLang = 'pt';
  try { savedLang = localStorage.getItem('zpay_lang') || 'pt'; } catch(e){}
  setLang(savedLang);`;

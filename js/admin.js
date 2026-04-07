
/* ============================================================
   SERVIÇOS DATA — cardápios pré-definidos
   ============================================================ */

if(sessionStorage.getItem('adminAuth') !== 'true') {
  window.location.href = 'login.html';
}

const SERVICES = {
  coquetel: {
    name: 'Coquetel Volante',
    menu: {
      'Canapés': [
        'Canapés de azeitona preta',
        'Canapés de peito de peru',
        'Canapés de salmão defumado',
        'Canapés de bruschetta',
      ],
      'Salgados Assados': [
        'Quiche de alho poró',
        'Quiche de queijo',
        'Quiche de tomate seco',
        'Folhado Alho poró com catupiry',
        'Folhado Bacalhau',
        'Folhado Camarão',
        'Folhado Carne de sol com mandioca',
        'Folhado Frango com mel',
        'Folhado Romeu e Julieta',
      ],
      'Salgados Fritos': [
        'Bombom de frango',
        'Bombom de aipim com carne seca',
        'Bombom de bacalhau',
        'Pastel de carne e queijo',
        'Bombom de azeitona',
      ],
      'Empratados na Barquete': [
        'Escondidinho de carne seca',
        'Escondidinho de camarão',
      ],
      'Bebidas': [
        'Água mineral (com e sem gás)',
        'Coquetel de frutas — Morango e Maracujá',
        'Suco de frutas — Abacaxi com Hortelã e Maracujá',
        'Refrigerante — Guaraná Antarctica e Coca-Cola',
        'Cerveja — Antártica Original ou Chopp',
      ],
      'Mesa de Café': [
        'Petit-fours variados',
      ],
      'Equipe': [
        'Cozinheiro',
        'Maître',
        'Garçons (1 por 15 convidados)',
        'Salgadeira',
        'Copeiros',
      ],
    }
  },
  churrasco: {
    name: 'Buffet de Churrasco',
    menu: {
      'Carnes': [
        'Picanha bovina',
        'Frango grelhado',
        'Linguiça artesanal',
        'Costela de porco',
      ],
      'Acompanhamentos': [
        'Arroz branco',
        'Farofa especial da casa',
        'Vinagrete',
        'Pão de alho',
        'Salada verde mista',
      ],
      'Bebidas': [
        'Água mineral (com e sem gás)',
        'Refrigerante',
        'Suco de frutas natural',
        'Cerveja',
      ],
      'Equipe': [
        'Churrasqueiro especializado',
        'Garçons (1 por 15 convidados)',
        'Copeiros',
      ],
    }
  },
  feijoada: {
    name: 'Buffet de Feijoada',
    menu: {
      'Feijoada Completa': [
        'Feijão preto com carnes nobres',
        'Costela defumada',
        'Linguiça',
        'Paio',
        'Lombo salgado',
      ],
      'Acompanhamentos': [
        'Arroz branco',
        'Couve refogada',
        'Farofa',
        'Torresmo',
        'Laranja fatiada',
        'Molho de pimenta',
      ],
      'Sobremesa': [
        'Pudim de leite condensado',
        'Doce de abóbora',
      ],
      'Bebidas': [
        'Água mineral',
        'Caipirinha de limão',
        'Refrigerante',
        'Cerveja gelada',
      ],
    }
  },
  jantar: {
    name: 'Buffet de Jantar',
    menu: {
      'Entradas': [
        'Salada verde mista',
        'Carpaccio de filé',
        'Patê de berinjela',
      ],
      'Pratos Principais': [
        'Medalhão de filé mignon ao molho madeira',
        'Salmão grelhado ao molho de maracujá',
        'Risoto de funghi',
      ],
      'Acompanhamentos': [
        'Arroz branco',
        'Purê de batata trufado',
        'Legumes grelhados',
      ],
      'Sobremesa': [
        'Mousse de chocolate belga',
        'Torta de frutas vermelhas',
        'Petit-fours',
      ],
      'Bebidas': [
        'Água mineral',
        'Vinho tinto e branco',
        'Espumante',
        'Refrigerante',
        'Suco natural',
      ],
    }
  },
  almoco: {
    name: 'Buffet de Almoço',
    menu: {
      'Entradas': [
        'Salada verde',
        'Salada de macarrão',
        'Arroz de forno',
      ],
      'Pratos Quentes': [
        'Frango à parmegiana',
        'Carne assada ao molho',
        'Peixe grelhado',
      ],
      'Acompanhamentos': [
        'Arroz branco',
        'Feijão tropeiro',
        'Macarrão ao sugo',
        'Legumes no vapor',
      ],
      'Sobremesa': [
        'Pudim',
        'Sagu com creme',
        'Frutas da estação',
      ],
    }
  },
  crepe: {
    name: 'Crepes Gourmet',
    menu: {
      'Crepes Salgados': [
        'Frango com catupiry',
        'Carne seca com cheddar',
        'Camarão ao alho e óleo',
        'Quatro queijos',
        'Rúcula com tomate seco e mussarela',
      ],
      'Crepes Doces': [
        'Nutella com morango',
        'Doce de leite com banana',
        'Romeu e Julieta',
        'Brigadeiro gourmet',
        'Frutas vermelhas com creme chantilly',
      ],
      'Bebidas': [
        'Água mineral',
        'Refrigerante',
        'Suco de frutas',
      ],
    }
  },
  massa: {
    name: 'Buffet de Massas',
    menu: {
      'Massas': [
        'Fettuccine ao molho de queijos',
        'Penne ao pomodoro',
        'Ravioli de ricota ao molho branco',
        'Lasanha à bolonhesa',
      ],
      'Molhos': [
        'Molho bolonhesa',
        'Molho branco',
        'Molho ao sugo',
        'Molho pesto',
      ],
      'Acompanhamentos': [
        'Pão ciabatta',
        'Salada verde',
        'Antepastos variados',
      ],
      'Sobremesa': [
        'Tiramisu',
        'Panna cotta com frutas vermelhas',
      ],
    }
  },
  boteco: {
    name: 'Buffet de Comida de Boteco',
    menu: {
      'Petiscos': [
        'Bolinho de bacalhau',
        'Coxinha de frango',
        'Isca de frango',
        'Mandioca frita',
        'Queijo coalho grelhado',
      ],
      'Pratos': [
        'Feijão tropeiro',
        'Carne de panela',
        'Frango ao molho',
      ],
      'Bebidas': [
        'Cerveja gelada',
        'Caipirinha',
        'Refrigerante',
        'Água mineral',
      ],
    }
  },
  junina: {
    name: 'Buffet de Festa Junina',
    menu: {
      'Comidas Típicas': [
        'Canjica cremosa',
        'Pamonha',
        'Cural de milho',
        'Bolo de milho',
        'Pé de moleque',
        'Cocada branca e queimada',
      ],
      'Salgados': [
        'Espetinho de frango',
        'Espetinho de queijo coalho',
        'Milho verde cozido',
        'Batata doce assada',
      ],
      'Bebidas': [
        'Quentão',
        'Vinho quente',
        'Suco de frutas',
        'Refrigerante',
      ],
    }
  },
};

/* ============================================================
   ESTADO DO CARDÁPIO EDITÁVEL
   ============================================================ */
let currentMenu = {}; // categoria → [itens]

/* ============================================================
   UTILITÁRIOS
   ============================================================ */
const $ = id => document.getElementById(id);
const fmt = n => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n);
const fmtDate = s => {
  if (!s) return '';
  const [y, m, d] = s.split('-');
  return `${d}/${m}/${y}`;
};
const fmtTime = t => {
  if (!t) return '';
  return t.substring(0, 5); // HH:MM
};

function showToast(msg, type = 'success') {
  const t = $('toast');
  t.textContent = msg;
  t.className = `toast ${type} show`;
  setTimeout(() => t.classList.remove('show'), 3200);
}

/* ============================================================
   RENDER DO EDITOR DE CARDÁPIO
   ============================================================ */
function renderMenuEditor() {
  const wrapper = $('menu-editor-wrapper');
  const editor = $('menu-editor');
  if (!Object.keys(currentMenu).length) { wrapper.classList.add('hidden'); return; }
  wrapper.classList.remove('hidden');

  editor.innerHTML = `
    <div class="menu-editor__notice">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      Cardápio pré-selecionado para este serviço. Edite os itens, remova ou adicione pratos conforme necessário.
    </div>
  `;

  Object.entries(currentMenu).forEach(([cat, items]) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'menu-category';
    catDiv.dataset.cat = cat;

    catDiv.innerHTML = `
      <div class="menu-category__header">
        <span class="menu-category__name">${cat}</span>
        <button class="btn-remove-cat" data-cat="${escHtml(cat)}">Remover categoria</button>
      </div>
      <div class="menu-items" id="items-${slugify(cat)}"></div>
      <div class="menu-add-item">
        <input class="menu-add-input" placeholder="Adicionar prato / item..." data-cat="${escHtml(cat)}">
        <button class="btn-add-item" data-cat="${escHtml(cat)}">+ Adicionar</button>
      </div>
    `;

    const itemsContainer = catDiv.querySelector(`#items-${slugify(cat)}`);
    items.forEach((item, idx) => itemsContainer.appendChild(makeItemEl(cat, item, idx)));
    editor.appendChild(catDiv);
  });

  // Bloco de nova categoria
  editor.insertAdjacentHTML('beforeend', `
    <div class="menu-new-category">
      <p class="menu-new-cat-title">Adicionar nova categoria</p>
      <div class="menu-new-cat-row">
        <input id="new-cat-name"  placeholder="Nome da categoria (ex: Sobremesas)">
        <input id="new-cat-item"  placeholder="Primeiro item (opcional)">
        <button class="btn-add-cat" id="btn-add-cat">+ Criar categoria</button>
      </div>
    </div>
  `);

  bindEditorEvents();
}

function makeItemEl(cat, text, idx) {
  const div = document.createElement('div');
  div.className = 'menu-item';
  div.dataset.cat = cat;
  div.dataset.idx = idx;
  div.innerHTML = `
    <span class="menu-item__dot"></span>
    <input class="menu-item__text" value="${escHtml(text)}" data-cat="${escHtml(cat)}" data-idx="${idx}" title="Clique para editar">
    <button class="btn-icon" title="Remover item" data-remove data-cat="${escHtml(cat)}" data-idx="${idx}">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  `;
  return div;
}

function bindEditorEvents() {
  const editor = $('menu-editor');

  // Editar item inline
  editor.querySelectorAll('.menu-item__text').forEach(inp => {
    inp.addEventListener('change', e => {
      const cat = e.target.dataset.cat;
      const idx = +e.target.dataset.idx;
      if (currentMenu[cat]) currentMenu[cat][idx] = e.target.value.trim();
    });
  });

  // Remover item
  editor.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      const idx = +btn.dataset.idx;
      currentMenu[cat].splice(idx, 1);
      renderMenuEditor();
    });
  });

  // Remover categoria
  editor.querySelectorAll('.btn-remove-cat').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      if (confirm(`Remover a categoria "${cat}" e todos os seus itens?`)) {
        delete currentMenu[cat];
        renderMenuEditor();
      }
    });
  });

  // Adicionar item em categoria existente
  editor.querySelectorAll('.btn-add-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      const inp = editor.querySelector(`.menu-add-input[data-cat="${cat}"]`);
      const val = inp.value.trim();
      if (!val) { inp.focus(); return; }
      if (!currentMenu[cat]) currentMenu[cat] = [];
      currentMenu[cat].push(val);
      inp.value = '';
      renderMenuEditor();
    });
  });

  editor.querySelectorAll('.menu-add-input').forEach(inp => {
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const btn = editor.querySelector(`.btn-add-item[data-cat="${inp.dataset.cat}"]`);
        if (btn) btn.click();
      }
    });
  });

  // Criar nova categoria
  const btnAddCat = $('btn-add-cat');
  if (btnAddCat) {
    btnAddCat.addEventListener('click', () => {
      const nameEl = $('new-cat-name');
      const itemEl = $('new-cat-item');
      const catName = nameEl.value.trim();
      if (!catName) { nameEl.focus(); return; }
      if (currentMenu[catName]) { showToast('Categoria já existe', 'error'); return; }
      currentMenu[catName] = itemEl.value.trim() ? [itemEl.value.trim()] : [];
      renderMenuEditor();
    });
    $('new-cat-item').addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); btnAddCat.click(); }
    });
  }
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function slugify(s) {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

/* ============================================================
   COLETAR DADOS DO FORMULÁRIO
   ============================================================ */
function getFormValues() {
  return {
    cliente: $('cliente').value.trim(),
    telefone: $('telefone').value.trim(),
    email: $('email').value.trim(),
    local: $('local').value.trim(),
    dataEvento: $('data-evento').value,
    horario: $('horario').value,
    duracao: $('duracao').value.trim(),
    qtdPessoas: $('qtd-pessoas').value.trim(),
    tipoServico: $('tipo-servico').value,
    servicoNome: $('tipo-servico').options[$('tipo-servico').selectedIndex]?.text || '',
    menu: JSON.parse(JSON.stringify(currentMenu)),
    valorPP: parseFloat($('valor-pp').value) || 0,
    valorTotal: parseFloat($('valor-total').value) || 0,
    observacoes: $('observacoes').value.trim(),
  };
}

function validate(data) {
  const errs = [];
  if (!data.cliente) errs.push('cliente');
  if (!data.telefone) errs.push('telefone');
  if (!data.dataEvento) errs.push('data-evento');
  if (!data.qtdPessoas) errs.push('qtd-pessoas');
  if (!data.tipoServico) errs.push('tipo-servico');
  if (!data.valorTotal) errs.push('valor-total');

  // highlight
  ['cliente', 'telefone', 'data-evento', 'qtd-pessoas', 'tipo-servico', 'valor-total'].forEach(id => {
    const el = $(id);
    if (el) el.classList.toggle('error', errs.some(e => e === id || `${id}`.startsWith(e)));
  });

  return errs.length === 0;
}

/* ============================================================
   OBSERVAÇÕES PADRÃO
   ============================================================ */
const OBS_PADRAO = [
  'Fornecemos todo o material necessário para a execução do evento: pratos, talheres, copos, réchauds e taças. Itens de decoração (toalhas, arranjos, vasos) não estão inclusos.',
  'Política para crianças: 0 a 6 anos não pagam; 7 a 11 anos pagam meia; a partir de 12 anos pagam valor integral de adulto.',
  'Duração do serviço: conforme acordado em contrato. Horas adicionais serão cobradas mediante acordo prévio.',
  'Chegamos com antecedência de 3 horas para organização do espaço.',
  'Equipe completa de profissionais qualificados e uniformizados.',
];

/* ============================================================
   RENDER DO PREVIEW
   ============================================================ */
function buildPropostaHTML(data) {
  const num = `PROP-${Date.now().toString().slice(-6)}`;
  const hoje = new Date().toLocaleDateString('pt-BR');

  // Cardápio
  const menuEntries = Object.entries(data.menu).filter(([, items]) => items.length);
  const menuHTML = menuEntries.map(([cat, items]) => `
    <div class="cat-block">
      <p class="cat-block__name">${cat}</p>
      <ul class="cat-block__list">
        ${items.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const ppStr = data.valorPP ? `· ${fmt(data.valorPP)} por pessoa` : '';

  const obsExtra = data.observacoes
    ? `<li>${data.observacoes}</li>` : '';

  const infoRows = [
    { l: 'Nome', v: data.cliente },
    { l: 'Telefone', v: data.telefone },
    data.email ? { l: 'E-mail', v: data.email } : null,
    data.local ? { l: 'Local', v: data.local } : null,
    { l: 'Data do Evento', v: fmtDate(data.dataEvento) },
    data.horario ? { l: 'Horário de Início', v: fmtTime(data.horario) } : null,
    data.duracao ? { l: 'Duração', v: data.duracao } : null,
    { l: 'Nº de Convidados', v: data.qtdPessoas + ' pessoas' },
  ].filter(Boolean);

  const dadosHTML = infoRows.map(r => `
    <div class="dado">
      <span class="dado__label">${r.l}</span>
      <span class="dado__value">${r.v}</span>
    </div>
  `).join('');

  return `
  <div class="proposta-doc" id="proposta-print">
    <div class="proposta-topo">
      <h2>Euler <em>Passos</em> Buffet</h2>
      <p class="proposta-topo__phone">(61) 99905-3461</p>
      <p class="proposta-topo__num">Proposta nº ${num} · Emitida em ${hoje}</p>
    </div>

    <div class="proposta-body">

      <div class="proposta-section">
        <h3 class="proposta-section__title">Dados do Cliente</h3>
        <div class="dados-grid">${dadosHTML}</div>
      </div>

      <div class="proposta-divider"></div>

      <div class="proposta-section">
        <h3 class="proposta-section__title">Serviço Contratado</h3>
        <p style="font-size:.95rem;color:var(--slate);margin-bottom:20px;">
          <strong style="color:var(--ink);">${data.servicoNome}</strong>
        </p>
        ${menuEntries.length ? `<div class="cardapio-grid">${menuHTML}</div>` : '<p style="color:var(--muted);font-size:.9rem;">Nenhum item no cardápio.</p>'}
      </div>

      <div class="proposta-divider"></div>

      <div class="proposta-section">
        <h3 class="proposta-section__title">Valor da Proposta</h3>
        <div class="valor-destaque-box">
          <div>
            <p class="valor-label">Valor Total</p>
            <p class="valor-number">${fmt(data.valorTotal)}</p>
            ${data.valorPP ? `<p class="valor-pp">${fmt(data.valorPP)} por pessoa × ${data.qtdPessoas} convidados</p>` : ''}
          </div>
          <div style="text-align:right">
            <p class="valor-label">Nº de Convidados</p>
            <p style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:700;color:var(--brown);">${data.qtdPessoas}</p>
          </div>
        </div>
      </div>

      <div class="proposta-divider"></div>

      <div class="proposta-section">
        <h3 class="proposta-section__title">Observações &amp; Termos</h3>
        <ul class="obs-list">
          ${obsExtra}
          ${OBS_PADRAO.map(o => `<li>${o}</li>`).join('')}
        </ul>
      </div>

    </div><!-- /proposta-body -->

    <div class="proposta-rodape">
      <p>St. de Clubes Esportivos Sul Trecho 2 · Plano Piloto · Brasília-DF</p>
      <p><strong>(61) 99905-3461</strong> · contato@eulerpassosbuffet.com.br</p>
    </div>
  </div>
  `;
}

function showPreview(data) {
  const wrapper = $('preview-wrapper');
  const doc = $('proposta-doc');
  doc.innerHTML = buildPropostaHTML(data);
  wrapper.classList.add('visible');
  wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   GERAR PDF VIA jsPDF (texto estruturado)
   ============================================================ */
async function gerarPDF(data) {
  if (typeof window.jspdf === 'undefined') {
    showToast('Biblioteca PDF não carregada. Recarregue a página.', 'error');
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const W = 210, H = 297;
  const ml = 18, mr = 18, mt = 20;
  const cw = W - ml - mr;
  let y = mt;

  const gold = [138, 124, 58];
  const brown = [122, 46, 14];
  const dark = [26, 26, 20];
  const slate = [92, 92, 74];
  const muted = [138, 138, 116];

  function checkPage(need = 20) {
    if (y + need > H - 20) { doc.addPage(); y = mt; }
  }

  function drawLine(color = gold) {
    doc.setDrawColor(...color);
    doc.setLineWidth(.35);
    doc.line(ml, y, W - mr, y);
    y += 6;
  }

  function sectionTitle(txt) {
    checkPage(14);
    doc.setFontSize(11); doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brown);
    doc.text(txt.toUpperCase(), ml, y);
    y += 3;
    drawLine(gold);
  }

  // ── Cabeçalho ──────────────────────────────────────
  doc.setFillColor(44, 33, 8);
  doc.rect(0, 0, W, 38, 'F');

  doc.setFontSize(18); doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('EULER PASSOS BUFFET', W / 2, 16, { align: 'center' });

  doc.setFontSize(9); doc.setFont('helvetica', 'normal');
  doc.setTextColor(184, 168, 74);
  doc.text('(61) 99905-3461', W / 2, 23, { align: 'center' });

  const num = `PROP-${Date.now().toString().slice(-6)}`;
  doc.setFontSize(7.5); doc.setTextColor(180, 160, 100);
  doc.text(`Proposta nº ${num}  ·  Emitida em ${new Date().toLocaleDateString('pt-BR')}`, W / 2, 30, { align: 'center' });

  y = 46;

  // ── Dados do Cliente ──────────────────────────────
  sectionTitle('Dados do Cliente');
  doc.setFontSize(9); doc.setFont('helvetica', 'normal'); doc.setTextColor(...dark);

  const infoRows = [
    ['Cliente', data.cliente],
    ['Telefone', data.telefone],
    data.email ? ['E-mail', data.email] : null,
    data.local ? ['Local', data.local] : null,
    ['Data do Evento', fmtDate(data.dataEvento)],
    data.horario ? ['Horário', fmtTime(data.horario)] : null,
    data.duracao ? ['Duração', data.duracao] : null,
    ['Nº Convidados', data.qtdPessoas + ' pessoas'],
  ].filter(Boolean);

  const half = cw / 2;
  let col = 0;
  infoRows.forEach((row, i) => {
    checkPage(10);
    const xOff = col === 0 ? ml : ml + half + 4;
    doc.setFont('helvetica', 'bold'); doc.setTextColor(...muted);
    doc.setFontSize(7); doc.text(row[0].toUpperCase(), xOff, y);
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...dark);
    doc.setFontSize(9); doc.text(row[1], xOff, y + 4);
    col++;
    if (col === 2) { col = 0; y += 12; }
  });
  if (col !== 0) y += 12;
  y += 4;

  // ── Serviço ───────────────────────────────────────
  sectionTitle('Serviço: ' + data.servicoNome);

  const menuEntries = Object.entries(data.menu).filter(([, items]) => items.length);
  menuEntries.forEach(([cat, items]) => {
    checkPage(16);
    doc.setFontSize(9.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(...brown);
    doc.text(cat, ml + 2, y);
    y += 5;
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...slate);
    items.forEach(item => {
      checkPage(6);
      const lines = doc.splitTextToSize(`• ${item}`, cw - 8);
      lines.forEach((l, li) => {
        doc.text(l, ml + 6, y);
        y += 4.5;
      });
    });
    y += 3;
  });

  // ── Valor ─────────────────────────────────────────
  checkPage(24);
  sectionTitle('Valor da Proposta');
  doc.setFontSize(16); doc.setFont('helvetica', 'bold'); doc.setTextColor(...gold);
  doc.text(fmt(data.valorTotal), ml, y);
  if (data.valorPP) {
    doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(...slate);
    doc.text(`${fmt(data.valorPP)} por pessoa × ${data.qtdPessoas} convidados`, ml, y + 7);
    y += 7;
  }
  y += 12;

  // ── Observações ───────────────────────────────────
  sectionTitle('Observações & Termos');
  doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(...slate);

  const allObs = data.observacoes
    ? [data.observacoes, ...OBS_PADRAO]
    : OBS_PADRAO;

  allObs.forEach(obs => {
    checkPage(14);
    const lines = doc.splitTextToSize(`— ${obs}`, cw - 6);
    lines.forEach((l, li) => {
      checkPage(6);
      doc.text(l, ml + (li > 0 ? 4 : 0), y);
      y += 4.5;
    });
    y += 3;
  });

  // ── Rodapé em cada página ─────────────────────────
  const total = doc.getNumberOfPages();
  for (let p = 1; p <= total; p++) {
    doc.setPage(p);
    doc.setDrawColor(...gold); doc.setLineWidth(.3);
    doc.line(ml, H - 14, W - mr, H - 14);
    doc.setFontSize(7); doc.setFont('helvetica', 'normal'); doc.setTextColor(...muted);
    doc.text('St. de Clubes Esportivos Sul Trecho 2 · Plano Piloto · Brasília-DF', ml, H - 10);
    doc.text(`${p}/${total}`, W - mr, H - 10, { align: 'right' });
  }

  const fileName = `Proposta_EPB_${(data.cliente || 'cliente').replace(/\s+/g, '_')}_${Date.now().toString().slice(-4)}.pdf`;
  doc.save(fileName);
  showToast(`PDF "${fileName}" gerado com sucesso!`);
}

/* ============================================================
   EVENTOS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Data mínima = hoje
  $('data-evento').min = new Date().toISOString().split('T')[0];

  // Cálculo automático valor total
  function recalc() {
    const pp = parseFloat($('valor-pp').value) || 0;
    const qtd = parseFloat($('qtd-pessoas').value) || 0;
    if (pp > 0 && qtd > 0) $('valor-total').value = (pp * qtd).toFixed(2);
  }
  $('valor-pp').addEventListener('input', recalc);
  $('qtd-pessoas').addEventListener('input', recalc);

  // Seleção de serviço → carrega cardápio
  $('tipo-servico').addEventListener('change', function () {
    const sid = this.value;
    if (sid && SERVICES[sid]) {
      currentMenu = JSON.parse(JSON.stringify(SERVICES[sid].menu));
    } else {
      currentMenu = {};
    }
    renderMenuEditor();
    // Oculta preview ao trocar serviço
    $('preview-wrapper').classList.remove('visible');
  });

  // Limpar campos de erro ao digitar
  document.querySelectorAll('.form-control').forEach(el => {
    el.addEventListener('input', () => el.classList.remove('error'));
    el.addEventListener('change', () => el.classList.remove('error'));
  });

  // Preview
  $('btn-preview').addEventListener('click', () => {
    const data = getFormValues();
    if (!validate(data)) {
      showToast('Preencha os campos obrigatórios destacados.', 'error');
      // Scroll ao primeiro erro
      document.querySelector('.form-control.error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    showPreview(data);
    showToast('Preview gerado com sucesso!');
  });

  // PDF
  $('btn-pdf').addEventListener('click', async () => {
    const data = getFormValues();
    if (!validate(data)) {
      showToast('Preencha os campos obrigatórios destacados.', 'error');
      document.querySelector('.form-control.error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    $('btn-pdf').disabled = true;
    $('btn-pdf').textContent = 'Gerando…';
    try {
      await gerarPDF(data);
    } catch (e) {
      showToast('Erro ao gerar PDF. Tente novamente.', 'error');
      console.error(e);
    }
    $('btn-pdf').disabled = false;
    $('btn-pdf').innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> Gerar PDF`;
  });

  // Limpar
  $('btn-limpar').addEventListener('click', () => {
    if (!confirm('Deseja limpar todos os campos?')) return;
    document.querySelectorAll('.form-control').forEach(el => {
      el.value = '';
      el.classList.remove('error');
    });
    currentMenu = {};
    renderMenuEditor();
    $('preview-wrapper').classList.remove('visible');
    showToast('Formulário limpo.');
  });
});
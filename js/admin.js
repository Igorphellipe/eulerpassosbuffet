/*
 * Admin.js - Área Administrativa Euler Passos Buffet
 * Gerencia formulário de propostas e geração de PDF
 * 
 * IMPORTANTE: Este arquivo utiliza servicesData carregado de servicesData.js
 * Certifique-se de que servicesData.js está incluído ANTES de admin.js no HTML
 */

// Dados dos serviços
// IMPORTANTE: servicesData é carregado de servicesData.js (arquivo compartilhado)
// Esta variável é definida globalmente pelo script servicesData.js incluído no HTML
// Verificação de segurança: se servicesData não estiver definido, exibe erro
if (typeof servicesData === 'undefined') {
  console.error('ERRO: servicesData.js não foi carregado! Certifique-se de que o script está incluído antes de admin.js no HTML.');
  // Evita redeclaração de `const servicesData` (não usar `var/const/let` aqui)
  // Cria propriedade em `window` apenas se não existir
  if (typeof window !== 'undefined' && typeof window.servicesData === 'undefined') {
    window.servicesData = {};
  }
}

// Informações da empresa (usamos nome diferente para evitar conflito global com app.js)
const adminCompanyInfo = {
  name: "Euler Passos Buffet",
  phone: "(61) 99905-3461",
  email: "contato@eulerpassosbuffet.com.br",
  address: "St. de Clubes Esportivos Sul Trecho 2 - Plano Piloto, 70297-400 Brasília - DF"
};

// Mapa para rastrear seleções anteriores de selects (desktop) para impor limites
const selectPrevMap = new Map();

/**
 * Formata título de categoria para exibição
 */
function formatCategoryTitle(key) {
  return key.replace(/_/g, ' ');
}

/**
 * Remove campos opcionais dinâmicos do formulário
 */
function limparCamposOpcionais() {
  const camposOpcionais = document.querySelectorAll('.campos-opcionais-wrapper');
  camposOpcionais.forEach(el => el.remove());
}

/**
 * Cria campos dinâmicos para serviços com hasOpcionais (selectFields)
 */
function montarCamposOpcionais(service) {
  // Remove campos opcionais anteriores
  limparCamposOpcionais();

  if (!service || !service.hasOpcionais || !service.selectFields) {
    return;
  }

  const form = document.getElementById('admin-form');
  const observacoesGroup = document.getElementById('observacoes').closest('.form-group');
  
  if (!form || !observacoesGroup) return;

  // Cria wrapper para campos opcionais
  const wrapper = document.createElement('div');
  wrapper.className = 'campos-opcionais-wrapper';
  
  const title = document.createElement('h3');
  title.className = 'campos-opcionais-title';
  title.textContent = 'Personalização do Cardápio';
  title.style.marginTop = '24px';
  title.style.marginBottom = '16px';
  title.style.color = 'var(--buffet-brown, #923d15)';
  title.style.fontSize = '1.2rem';
  wrapper.appendChild(title);

  // Cria campos para cada selectField
  service.selectFields.forEach(field => {
    const fieldGroup = document.createElement('div');
    fieldGroup.className = 'form-group campo-opcional';
    fieldGroup.dataset.fieldId = field.id;

    const label = document.createElement('label');
    label.className = 'form-label';
    label.textContent = field.label;
    label.setAttribute('for', `opcional-${field.id}`);
    fieldGroup.appendChild(label);
    // Renderiza checkboxes para todos os dispositivos (desktop e mobile) com mesmo comportamento
    const choicesContainer = document.createElement('div');
    choicesContainer.id = `opcional-${field.id}-choices`;
    choicesContainer.className = 'opcional-checkbox-list';

    // Determina limite (se houver) a partir do texto do label, ex: 'Escolha 3 Opções...'
    const maxMatch = (field.label && field.label.match(/(\d+)/)) ? field.label.match(/(\d+)/)[0] : null;
    const max = maxMatch ? parseInt(maxMatch, 10) : 0;

    // Contador visual quando há limite
    let counterEl = null;
    if (max > 0) {
      counterEl = document.createElement('div');
      counterEl.className = 'opcional-counter';
      counterEl.textContent = `Selecionados 0 de ${max}`;
      counterEl.style.fontSize = '0.85rem';
      counterEl.style.marginTop = '6px';
      counterEl.style.color = 'var(--color-slate-500, #626c71)';
    }

    field.options.forEach(option => {
      const optionId = `opcional-${field.id}-opt-${option.replace(/\s+/g, '-')}`;
      const optionLabel = document.createElement('label');
      optionLabel.setAttribute('for', optionId);
      optionLabel.style.display = 'block';
      optionLabel.style.cursor = 'pointer';
      optionLabel.style.padding = '6px 8px';
      optionLabel.style.borderRadius = '6px';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = optionId;
      checkbox.name = `opcional-${field.id}`;
      checkbox.value = option;
      checkbox.style.marginRight = '8px';

      // listener para atualizar estado visual e impor limite
      checkbox.addEventListener('change', function() {
        const checkedCount = choicesContainer.querySelectorAll('input[type="checkbox"]:checked').length;
        // marca/desmarca classe visual no label pai
        if (checkbox.checked) {
          optionLabel.classList.add('selected');
        } else {
          optionLabel.classList.remove('selected');
        }

        // se houver limite, atualiza contador e desabilita opções excedentes
        if (max > 0) {
          if (counterEl) counterEl.textContent = `Selecionados ${checkedCount} de ${max}`;
          if (checkedCount >= max) {
            choicesContainer.querySelectorAll('input[type="checkbox"]').forEach(ch => {
              if (!ch.checked) {
                ch.disabled = true;
                ch.parentNode.classList.add('disabled');
              }
            });
          } else {
            choicesContainer.querySelectorAll('input[type="checkbox"]').forEach(ch => {
              ch.disabled = false;
              ch.parentNode.classList.remove('disabled');
            });
          }
        }
      });

      optionLabel.appendChild(checkbox);
      optionLabel.appendChild(document.createTextNode(option));
      choicesContainer.appendChild(optionLabel);
    });

    const helpText = document.createElement('small');
    helpText.className = 'form-help';
    helpText.textContent = max > 0 ? `Selecione até ${max} opções` : 'Clique/Toque nas opções para selecionar múltiplas escolhas';
    helpText.style.display = 'block';
    helpText.style.marginTop = '4px';
    helpText.style.color = 'var(--color-slate-500, #626c71)';
    helpText.style.fontSize = '0.85rem';

    fieldGroup.appendChild(choicesContainer);
    if (counterEl) fieldGroup.appendChild(counterEl);
    fieldGroup.appendChild(helpText);
    wrapper.appendChild(fieldGroup);
  });

  // Insere os campos opcionais ANTES do campo de observações
  form.insertBefore(wrapper, observacoesGroup);
}

/**
 * Exibe o cardápio baseado no tipo de serviço selecionado
 */
function displayCardapio(serviceId) {
  const cardapioGroup = document.getElementById('cardapio-group');
  const cardapioDisplay = document.getElementById('cardapio-display');
  
  if (!serviceId || !servicesData[serviceId]) {
    cardapioGroup.style.display = 'none';
    limparCamposOpcionais();
    return;
  }

  const service = servicesData[serviceId];
  cardapioDisplay.innerHTML = '';

  // Cria estrutura do cardápio
  Object.keys(service.menu).forEach(category => {
    const categoriaDiv = document.createElement('div');
    categoriaDiv.className = 'cardapio-categoria';

    const title = document.createElement('h3');
    title.className = 'cardapio-categoria__title';
    title.textContent = formatCategoryTitle(category);
    categoriaDiv.appendChild(title);

    const itemsList = document.createElement('ul');
    itemsList.className = 'cardapio-categoria__items';

    service.menu[category].forEach(item => {
      const li = document.createElement('li');
      li.className = 'cardapio-categoria__item';
      li.textContent = item;
      itemsList.appendChild(li);
    });

    categoriaDiv.appendChild(itemsList);
    cardapioDisplay.appendChild(categoriaDiv);
  });

  cardapioGroup.style.display = 'block';

  // Se o serviço tem campos opcionais, monta os campos dinâmicos
  if (service.hasOpcionais && service.selectFields) {
    montarCamposOpcionais(service);
  } else {
    limparCamposOpcionais();
  }
}

/**
 * Gera número único de identificação da proposta
 */
function generateProposalNumber() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `PROP-${timestamp}-${random}`;
}

/**
 * Formata valor em moeda brasileira
 */
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

/**
 * Formata data brasileira
 */
function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

/**
 * Formata data e hora completa
 */
function formatDateTime() {
  const now = new Date();
  return now.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Valida o formulário
 */
function validateForm() {
  const form = document.getElementById('admin-form');
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    field.style.borderColor = '';
    if (!field.value.trim()) {
      field.style.borderColor = '#DC143C';
      isValid = false;
    }
  });

  // Validação de valor
  const valorField = document.getElementById('valor-proposta');
  if (valorField.value && parseFloat(valorField.value) <= 0) {
    valorField.style.borderColor = '#DC143C';
    isValid = false;
  }

  return isValid;
}

/**
 * Coleta dados do formulário e monta objeto completo da proposta
 * @returns {Object} Objeto com todos os dados da proposta, incluindo cardápio e opções personalizadas
 */
function getFormData() {
  const tipoServico = document.getElementById('tipo-servico').value.trim();
  const service = servicesData[tipoServico] || null;
  
  // Coleta opções personalizadas (se houver campos opcionais)
  const opcoesPersonalizadas = {};
  if (service && service.hasOpcionais && service.selectFields) {
    // Busca no DOM pelos grupos renderizados para coletar valores (mais robusto para múltiplos serviços)
    const wrapper = document.querySelector('.campos-opcionais-wrapper');
    if (wrapper) {
      const grupos = wrapper.querySelectorAll('.campo-opcional');
      grupos.forEach(gr => {
        const fieldId = gr.dataset.fieldId || gr.querySelector('[name]')?.name?.replace(/^opcional-/, '') || null;
        const labelText = gr.querySelector('.form-label') ? gr.querySelector('.form-label').textContent.trim() : (fieldId || 'opcional');

        let valores = [];

        // Checkboxes (mobile)
        const checkboxes = gr.querySelectorAll('input[type="checkbox"][name^="opcional-"]');
        if (checkboxes && checkboxes.length > 0) {
          valores = Array.from(checkboxes).filter(ch => ch.checked).map(ch => ch.value);
        } else {
          // Select múltiplo (desktop)
          const selectEl = gr.querySelector('select');
          if (selectEl) {
            valores = Array.from(selectEl.selectedOptions).map(opt => opt.value);
          }
        }

        if (fieldId) {
          opcoesPersonalizadas[fieldId] = { label: labelText, valores };
        }
      });
    } else {
      // Fallback: tenta coletar a partir da definição do serviço
      service.selectFields.forEach(field => {
        const checkboxContainer = document.getElementById(`opcional-${field.id}-choices`);
        let selectedOptions = [];

        if (checkboxContainer) {
          selectedOptions = Array.from(checkboxContainer.querySelectorAll('input[type="checkbox"]:checked')).map(ch => ch.value);
        } else {
          const selectElement = document.getElementById(`opcional-${field.id}`);
          if (selectElement) {
            selectedOptions = Array.from(selectElement.selectedOptions).map(opt => opt.value);
          }
        }

        opcoesPersonalizadas[field.id] = {
          label: field.label,
          valores: selectedOptions
        };
      });
    }
  }
  
  // Monta objeto base da proposta
  const proposta = {
    // Número único de identificação
    numeroProposta: generateProposalNumber(),
    
    // Dados do cliente
    cliente: document.getElementById('cliente').value.trim(),
    telefone: document.getElementById('telefone').value.trim(),
    
    // Dados do evento
    quantidadePessoas: document.getElementById('quantidade-pessoas').value.trim(),
    dataEvento: document.getElementById('data-evento').value.trim(),
    
    // Serviço selecionado
    tipoServico: tipoServico,
    servicoNome: service ? service.name : '',
    servicoDescricao: service ? service.description : '',
    
    // Cardápio completo (incluído no objeto da proposta)
    cardapio: service ? service.menu : null,
    
    // Opções personalizadas (se o serviço tiver hasOpcionais)
    opcoesPersonalizadas: Object.keys(opcoesPersonalizadas).length > 0 ? opcoesPersonalizadas : null,
    
    // Valor e observações
    valorProposta: parseFloat(document.getElementById('valor-proposta').value) || 0,
    observacoes: document.getElementById('observacoes').value.trim(),
    
    // Metadados
    dataCriacao: formatDateTime(),
    empresa: adminCompanyInfo
  };
  
  return proposta;
}

/**
 * Gera o PDF da proposta usando jsPDF
 */
async function generatePDF(formData) {
  // Verifica se jsPDF está disponível
  if (typeof window.jspdf === 'undefined') {
    console.error('ERRO: jsPDF não foi carregado! Verifique se o script foi incluído no HTML.');
    alert('Erro: Biblioteca jsPDF não foi carregada. Recarregue a página.');
    return;
  }

  try {
    const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

    // Define título do PDF para o nome da empresa (substitui título genérico)
    try {
      doc.setProperties({ title: adminCompanyInfo.name });
    } catch (e) {
      // ignora se não suportado
    }

    // Observações padrão (mesmo texto usado na preview)
    const standardObservacoes = [
      'Fornecemos todo o material necessário para a execução do evento (pratos, talheres, copos, réchauds e taças). Não fornecemos itens de decoração, como toalhas, arranjos e vasos decorativos.',
      'Política para crianças: 0 a 6 anos não pagam; 7 a 11 anos pagam meia; a partir de 12 anos pagam como adultos.',
      'Duração do serviço: 5 horas a partir do horário acordado no contrato. Horas adicionais serão cobradas separadamente mediante acordo prévio.',
      'Equipe completa de profissionais qualificados e uniformizados, garantindo execução segura, pontual e com alto padrão de atendimento.'
    ];

  // Nome do arquivo
  const fileName = `Proposta_${formData.numeroProposta}_${(formData.cliente || '').replace(/\s+/g, '_')}.pdf`;

  // Tenta renderizar o HTML do preview (mantém estilo CSS) usando doc.html()
  try {
    // Garante que o preview esteja montado
    showPreview(formData);
    const previewContent = document.getElementById('preview-content');
    // Primeiro tenta usar html2pdf (melhor fidelidade CSS)
    if (typeof window.html2pdf !== 'undefined' && previewContent) {
      try {
        const clone = previewContent.cloneNode(true);
        const wrapper = document.createElement('div');
        wrapper.style.position = 'fixed';
        wrapper.style.left = '-9999px';
        wrapper.appendChild(clone);
        document.body.appendChild(wrapper);

        const opt = {
          margin: [10, 10, 10, 10],
          filename: fileName,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        await html2pdf().set(opt).from(clone).save();
        wrapper.remove();
        console.log('PDF gerado via html2pdf com estilo do preview:', fileName);
        return;
      } catch (errHtml2pdf) {
        console.warn('html2pdf falhou, tentando doc.html(); erro:', errHtml2pdf);
      }
    }

    if (typeof doc.html === 'function' && previewContent) {
      // Clona para evitar alterações visuais na página
      const clone = previewContent.cloneNode(true);
      const wrapper = document.createElement('div');
      wrapper.style.position = 'fixed';
      wrapper.style.left = '-9999px';
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // Ajusta escala para melhorar qualidade (pode ajustar se necessário)
      await doc.html(clone, {
        x: 10,
        y: 10,
        html2canvas: { scale: 1.3, useCORS: true },
        windowWidth: clone.scrollWidth,
      });

      doc.save(fileName);
      wrapper.remove();
      console.log('PDF gerado via doc.html() com estilo do preview:', fileName);
      return;
    }
  } catch (errHtml) {
    console.warn('Renderização HTML para PDF falhou, caindo no método manual. Erro:', errHtml);
    // continua para o método manual abaixo
  }

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Cores
  const colorGold = [109, 109, 46];
  const colorBrown = [146, 61, 21];
  const colorDark = [19, 52, 59];

  // Header com data/hora no canto superior direito
  doc.setFontSize(8);
  doc.setTextColor(...colorDark);
  doc.text(formatDateTime(), pageWidth - margin - 10, yPosition, { align: 'right' });
  yPosition += 15;

  // Logo centralizada (texto simulado - em produção usar imagem real)
  doc.setFontSize(20);
  doc.setTextColor(...colorGold);
  doc.setFont('helvetica', 'bold');
  const logoText = adminCompanyInfo.name.toUpperCase();
  const logoWidth = doc.getTextWidth(logoText);
  doc.text(logoText, (pageWidth - logoWidth) / 2, yPosition);
  yPosition += 20;

  // Linha decorativa
  doc.setDrawColor(...colorGold);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  // Número da Proposta
  doc.setFontSize(12);
  doc.setTextColor(...colorBrown);
  doc.setFont('helvetica', 'bold');
  doc.text(`PROPOSTA COMERCIAL - ${formData.numeroProposta}`, margin, yPosition);
  yPosition += 15;

  // Dados do Cliente
  doc.setFontSize(10);
  doc.setTextColor(...colorDark);
  doc.setFont('helvetica', 'bold');
  doc.text('DADOS DO CLIENTE', margin, yPosition);
  yPosition += 8;

  doc.setFont('helvetica', 'normal');
  doc.text(`Cliente: ${formData.cliente}`, margin, yPosition);
  yPosition += 6;
  doc.text(`Telefone: ${formData.telefone}`, margin, yPosition);
  yPosition += 6;
  doc.text(`Quantidade de Pessoas: ${formData.quantidadePessoas}`, margin, yPosition);
  yPosition += 6;
  doc.text(`Data do Evento: ${formatDate(formData.dataEvento)}`, margin, yPosition);
  yPosition += 10;

  // Tipo de Serviço
  const service = servicesData[formData.tipoServico];
  if (service) {
    doc.setFont('helvetica', 'bold');
    doc.text(`SERVIÇO: ${service.name.toUpperCase()}`, margin, yPosition);
    yPosition += 10;

    // Cardápio
    doc.setFont('helvetica', 'bold');
    doc.text('CARDÁPIO COMPLETO', margin, yPosition);
    yPosition += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);

    Object.keys(service.menu).forEach((category, index) => {
      // Verifica se precisa de nova página
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        yPosition = margin;
      }

      // Título da categoria
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...colorBrown);
      doc.text(formatCategoryTitle(category) + ':', margin, yPosition);
      yPosition += 6;

      // Itens da categoria
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...colorDark);
      doc.setFontSize(8);
      
      let itemsText = '';
      service.menu[category].forEach((item, itemIndex) => {
        if (itemIndex > 0) itemsText += ', ';
        itemsText += item;
      });

      // Quebra de linha automática
      const lines = doc.splitTextToSize(itemsText, contentWidth);
      lines.forEach(line => {
        if (yPosition > pageHeight - 30) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text('• ' + line, margin + 5, yPosition);
        yPosition += 5;
      });

      yPosition += 3;
    });
  }

  // Valor da Proposta
  if (yPosition > pageHeight - 40) {
    doc.addPage();
    yPosition = margin;
  }

  yPosition += 5;
  doc.setDrawColor(...colorGold);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colorBrown);
  doc.text('VALOR DA PROPOSTA', margin, yPosition);
  yPosition += 8;

  doc.setFontSize(16);
  doc.text(formatCurrency(formData.valorProposta), margin, yPosition);
  yPosition += 15;

  // Opções Personalizadas (se houver)
  if (formData.opcoesPersonalizadas && Object.keys(formData.opcoesPersonalizadas).length > 0) {
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colorDark);
    doc.text('OPÇÕES PERSONALIZADAS:', margin, yPosition);
    yPosition += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    Object.keys(formData.opcoesPersonalizadas).forEach(key => {
      const opcao = formData.opcoesPersonalizadas[key];
      if (opcao.valores && opcao.valores.length > 0) {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...colorBrown);
        doc.text(opcao.label + ':', margin, yPosition);
        yPosition += 6;
        
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...colorDark);
        const valoresText = opcao.valores.join(', ');
        const valoresLines = doc.splitTextToSize(valoresText, contentWidth);
        valoresLines.forEach(line => {
          if (yPosition > pageHeight - 30) {
            doc.addPage();
            yPosition = margin;
          }
          doc.text('• ' + line, margin + 5, yPosition);
          yPosition += 5;
        });
        yPosition += 3;
      }
    });
  }

  // Observações
  if (formData.observacoes) {
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colorDark);
    doc.text('OBSERVAÇÕES:', margin, yPosition);
    yPosition += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const obsLines = doc.splitTextToSize(formData.observacoes, contentWidth);
    obsLines.forEach(line => {
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += 5;
    });
  }
  // Rodapé
  // Termos e Informações Importantes (observações padrão)
  if (standardObservacoes && standardObservacoes.length > 0) {
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colorDark);
    doc.text('TERMOS E INFORMAÇÕES IMPORTANTES:', margin, yPosition);
    yPosition += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    standardObservacoes.forEach(item => {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        yPosition = margin;
      }
      const lines = doc.splitTextToSize(item, contentWidth - 10);
      lines.forEach((line, idx) => {
        if (yPosition > pageHeight - 30) {
          doc.addPage();
          yPosition = margin;
        }
        if (idx === 0) {
          doc.text('• ' + line, margin + 5, yPosition);
        } else {
          doc.text('  ' + line, margin + 12, yPosition);
        }
        yPosition += 5;
      });
      yPosition += 3;
    });
  }

  // Rodapé
  const footerY = pageHeight - 15;
  doc.setDrawColor(...colorGold);
  doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);
  doc.setFontSize(8);
  doc.setTextColor(...colorDark);
  doc.text(adminCompanyInfo.address, margin, footerY, { align: 'left' });
  doc.text(`Tel: ${adminCompanyInfo.phone} | Email: ${adminCompanyInfo.email}`, pageWidth - margin, footerY, { align: 'right' });

    // Salva o PDF (usa fileName já definido acima)
    doc.save(fileName);

    console.log('PDF gerado com sucesso:', fileName);
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    alert('Erro ao gerar PDF: ' + error.message);
    throw error;
  }
}

/**
 * Mostra preview da proposta
 */
function showPreview(formData) {
  const previewSection = document.getElementById('preview-section');
  const previewContent = document.getElementById('preview-content');

  if (!previewSection || !previewContent) {
    console.error('ERRO: Elementos de preview não encontrados no DOM!');
    alert('Erro: Elementos de preview não encontrados.');
    return;
  }

  const service = servicesData[formData.tipoServico];
  // Observações padrão (texto melhorado para confiança e credibilidade)
  const standardObservacoes = [
    'Fornecemos todo o material necessário para a execução do evento (pratos, talheres, copos, réchauds e taças). Não fornecemos itens de decoração, como toalhas, arranjos e vasos decorativos.',
    'Política para crianças: 0 a 6 anos não pagam; 7 a 11 anos pagam meia; a partir de 12 anos pagam como adultos.',
    'Duração do serviço: 5 horas a partir do horário acordado no contrato. Horas adicionais serão cobradas separadamente mediante acordo prévio.',
    'Equipe completa de profissionais qualificados e uniformizados, garantindo execução segura, pontual e com alto padrão de atendimento.'
  ];

  let html = `
    <div class="preview-header">
      <h3>${adminCompanyInfo.name}</h3>
      <p><strong>Proposta:</strong> ${formData.numeroProposta}</p>
      <p><small>${formatDateTime()}</small></p>
    </div>
    <div class="preview-section-divider"></div>
    <div class="preview-cliente">
      <h4>Dados do Cliente</h4>
      <p><strong>Cliente:</strong> ${formData.cliente}</p>
      <p><strong>Telefone:</strong> ${formData.telefone}</p>
      <p><strong>Quantidade de Pessoas:</strong> ${formData.quantidadePessoas}</p>
      <p><strong>Data do Evento:</strong> ${formatDate(formData.dataEvento)}</p>
    </div>
    <div class="preview-section-divider"></div>
    <div class="preview-servico">
      <h4>Serviço: ${service ? service.name : 'N/A'}</h4>
    </div>
  `;

  if (service) {
    html += '<div class="preview-cardapio"><h4>Cardápio Completo</h4>';
    Object.keys(service.menu).forEach(category => {
      html += `<div class="preview-categoria"><strong>${formatCategoryTitle(category)}:</strong> `;
      html += service.menu[category].join(', ');
      html += '</div>';
    });
    html += '</div>';
  }

  // Opções Personalizadas (se houver)
  if (formData.opcoesPersonalizadas && Object.keys(formData.opcoesPersonalizadas).length > 0) {
    html += `
      <div class="preview-section-divider"></div>
      <div class="preview-opcoes">
        <h4>Opções Personalizadas</h4>
    `;
    Object.keys(formData.opcoesPersonalizadas).forEach(key => {
      const opcao = formData.opcoesPersonalizadas[key];
      if (opcao.valores && opcao.valores.length > 0) {
        html += `
          <div class="preview-categoria">
            <strong>${opcao.label}:</strong> ${opcao.valores.join(', ')}
          </div>
        `;
      }
    });
    html += '</div>';
  }

  html += `
    <div class="preview-section-divider"></div>
    <div class="preview-valor">
      <h4>Valor da Proposta</h4>
      <p class="preview-valor-destaque">${formatCurrency(formData.valorProposta)}</p>
    </div>
  `;

  if (formData.observacoes) {
    html += `
      <div class="preview-section-divider"></div>
      <div class="preview-observacoes">
        <h4>Observações</h4>
        <p>${formData.observacoes}</p>
      </div>
    `;
  }

  // Sempre exibe as observações padrão para clareza e credibilidade
  html += `
    <div class="preview-section-divider"></div>
    <div class="preview-observacoes">
      <h4>Termos e Informações Importantes</h4>
      <ul>
        ${standardObservacoes.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;

  previewContent.innerHTML = html;
  previewSection.classList.remove('hidden');
  previewSection.scrollIntoView({ behavior: 'smooth' });
}

// Event Listeners quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  console.log('Admin page carregada');
  
  // Protege acesso: redireciona para login se não autenticado
  try {
    if (sessionStorage.getItem('adminAuth') !== 'true') {
      window.location.href = 'login.html';
      return;
    }
  } catch (e) {
    console.warn('sessionStorage indisponível', e);
  }

  // Logout button (limpa sessão)
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', function(e) {
      e.preventDefault();
      try { sessionStorage.removeItem('adminAuth'); } catch (err) {}
      window.location.href = 'login.html';
    });
  }

  // Verifica se servicesData foi carregado
  if (typeof servicesData === 'undefined' || Object.keys(servicesData).length === 0) {
    console.error('ERRO CRÍTICO: servicesData não foi carregado corretamente!');
    alert('Erro ao carregar dados dos serviços. Recarregue a página.');
    return;
  }

  // Obtém elementos do DOM com validação
  const form = document.getElementById('admin-form');
  const tipoServicoSelect = document.getElementById('tipo-servico');
  const btnPreview = document.getElementById('btn-preview');
  const btnLimpar = document.getElementById('btn-limpar');
  const dataEventoField = document.getElementById('data-evento');

  // Validação: verifica se os elementos necessários existem
  if (!form || !tipoServicoSelect || !btnPreview || !btnLimpar || !dataEventoField) {
    console.error('ERRO: Elementos do formulário não encontrados no DOM!');
    return;
  }

  // Define data mínima para o campo de data (ANTES de anexar event listeners)
  const hoje = new Date().toISOString().split('T')[0];
  dataEventoField.setAttribute('min', hoje);

  // Atualiza cardápio quando tipo de serviço muda
  tipoServicoSelect.addEventListener('change', function() {
    const serviceId = this.value;
    if (serviceId) {
      displayCardapio(serviceId);
    } else {
      // Oculta cardápio se nenhum serviço selecionado
      const cardapioGroup = document.getElementById('cardapio-group');
      if (cardapioGroup) {
        cardapioGroup.style.display = 'none';
      }
      // Remove campos opcionais
      limparCamposOpcionais();
    }
  });

  // Preview da proposta
  btnPreview.addEventListener('click', function(e) {
    console.log('Botão Preview clicado');
    e.preventDefault();
    e.stopPropagation();
    
    if (!validateForm()) {
      console.log('Validação do formulário falhou');
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    try {
      console.log('Coletando dados do formulário...');
      const formData = getFormData();
      console.log('Objeto de proposta montado:', formData);
      console.log('Chamando showPreview...');
      showPreview(formData);
      console.log('Preview exibido com sucesso');
    } catch (error) {
      console.error('Erro ao gerar preview:', error);
      alert('Erro ao gerar preview. Verifique o console para mais detalhes.');
    }
  });

  // Limpar formulário
  btnLimpar.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (confirm('Tem certeza que deseja limpar todos os campos?')) {
      // Limpa formulário
      form.reset();
      
      // Oculta cardápio
      const cardapioGroup = document.getElementById('cardapio-group');
      if (cardapioGroup) {
        cardapioGroup.style.display = 'none';
      }
      
      // Remove campos opcionais
      limparCamposOpcionais();
      
      // Oculta preview
      const previewSection = document.getElementById('preview-section');
      if (previewSection) {
        previewSection.classList.add('hidden');
      }
      
      // Remove bordas vermelhas de validação
      form.querySelectorAll('.form-control').forEach(field => {
        field.style.borderColor = '';
      });
      
      // Restaura data mínima
      dataEventoField.setAttribute('min', hoje);
      
      console.log('Formulário limpo');
    }
  });

  // Event listener direto no botão Gerar PDF (além do submit do form)
  const btnGerarPDF = document.getElementById('btn-gerar-pdf');
  if (btnGerarPDF) {
    btnGerarPDF.addEventListener('click', function(e) {
      console.log('Botão Gerar PDF clicado');
      // Não precisa de preventDefault aqui pois o form já faz isso
    });
  }

  // Submissão do formulário - Gerar PDF
  form.addEventListener('submit', function(e) {
    console.log('Formulário submetido (Gerar PDF)');
    e.preventDefault();
    e.stopPropagation();
    
    if (!validateForm()) {
      console.log('Validação do formulário falhou');
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    try {
      console.log('Coletando dados do formulário...');
      const formData = getFormData();
      console.log('Gerando PDF para proposta:', formData.numeroProposta);
      console.log('Objeto completo da proposta:', formData);
      
      generatePDF(formData);
      
      // Feedback visual
      const btnGerarPDFEl = document.getElementById('btn-gerar-pdf');
      if (btnGerarPDFEl) {
        const originalText = btnGerarPDFEl.textContent;
        btnGerarPDFEl.textContent = 'PDF Gerado! ✓';
        btnGerarPDFEl.disabled = true;
        
        setTimeout(() => {
          btnGerarPDFEl.textContent = originalText;
          btnGerarPDFEl.disabled = false;
        }, 2000);
      }
      
      console.log('PDF gerado com sucesso');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Verifique o console para mais detalhes.');
    }
  });

  console.log('Event listeners do formulário configurados com sucesso');
});

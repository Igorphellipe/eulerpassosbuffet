// Dados das receitas
const receitasData = {
  picanha: {
    id: "picanha",
    nome: "Churrasco de Picanha",
    ingredientes: [
      "1 peça de picanha (aproximadamente 1,5 kg)",
      "Sal grosso a gosto",
      "4 dentes de alho amassados",
      "Azeite extra virgem",
      "Pimenta do reino moída",
      "Orégano a gosto"
    ],
    preparo: [
      "Tempere a picanha com sal grosso, alho amassado, azeite, pimenta do reino e orégano. Deixe marinar por pelo menos 2 horas na geladeira.",
      "Prepare a churrasqueira ou grelha com carvão bem aceso até ficar em brasa.",
      "Coloque a picanha na grelha com a gordura voltada para cima inicialmente, para que o calor derreta a gordura sobre a carne.",
      "Grelhe cada lado por cerca de 10-15 minutos, virando apenas uma vez para manter o suco da carne.",
      "Para carne ao ponto, o tempo total de grelhagem deve ser de aproximadamente 30-40 minutos.",
      "Retire do fogo e deixe descansar por 5-10 minutos antes de cortar em fatias finas.",
      "Sirva com farofa, vinagrete e mandioca frita."
    ]
  },
  "crepe-nutella": {
    id: "crepe-nutella",
    nome: "Crepe de Nutella com Morango",
    ingredientes: [
      "1 xícara de farinha de trigo",
      "2 ovos",
      "1 xícara de leite",
      "2 colheres de sopa de açúcar",
      "1 pitada de sal",
      "2 colheres de sopa de manteiga derretida",
      "Nutella a gosto",
      "Morangos frescos fatiados",
      "Chantilly para decorar"
    ],
    preparo: [
      "Em uma tigela, misture a farinha, os ovos, o leite, o açúcar e o sal até formar uma massa homogênea.",
      "Adicione a manteiga derretida e misture bem. Deixe a massa descansar por 30 minutos.",
      "Aqueça uma frigideira antiaderente em fogo médio. Espalhe uma pequena quantidade de manteiga.",
      "Despeje uma concha da massa na frigideira e espalhe formando um disco fino.",
      "Cozinhe por cerca de 2 minutos de cada lado, até dourar levemente.",
      "Retire o crepe e espalhe Nutella sobre ele enquanto ainda estiver quente.",
      "Coloque fatias de morango sobre a Nutella.",
      "Dobre o crepe em formato de envelope ou enrole.",
      "Finalize com chantilly por cima e sirva imediatamente."
    ]
  },
  carbonara: {
    id: "carbonara",
    nome: "Espaguete à Carbonara",
    ingredientes: [
      "400g de espaguete",
      "200g de pancetta ou bacon em cubos",
      "3 ovos inteiros",
      "1 gema de ovo",
      "100g de queijo parmesão ralado",
      "Pimenta do reino preta moída na hora",
      "Sal a gosto",
      "2 dentes de alho (opcional)"
    ],
    preparo: [
      "Cozinhe o espaguete em água salgada conforme as instruções da embalagem até ficar al dente. Reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, frite a pancetta em uma frigideira grande até ficar crocante. Retire o excesso de gordura, deixando apenas uma pequena quantidade.",
      "Em uma tigela, bata os ovos inteiros, a gema e o parmesão ralado até formar um creme homogêneo. Tempere com pimenta do reino.",
      "Escorra o macarrão (reservando a água) e adicione imediatamente à frigideira com a pancetta, ainda no fogo baixo.",
      "Adicione uma concha da água do cozimento e mexa bem para criar uma consistência cremosa.",
      "Retire do fogo e adicione o creme de ovos e queijo, mexendo vigorosamente. O calor residual do macarrão cozinhará os ovos sem criar grumos.",
      "Se necessário, adicione mais água do cozimento para ajustar a consistência. A carbonara deve ficar cremosa e envolver bem o macarrão.",
      "Tempere com pimenta do reino fresca e sirva imediatamente com queijo parmesão adicional por cima."
    ]
  }
};

// Dados dos serviços
// IMPORTANTE: servicesData é carregado de servicesData.js (arquivo compartilhado)
// Esta variável é definida globalmente pelo script servicesData.js incluído no HTML
// Verificação de segurança: se servicesData não estiver definido, exibe erro
if (typeof servicesData === 'undefined') {
  console.error('ERRO: servicesData.js não foi carregado! Certifique-se de que o script está incluído antes de app.js no HTML.');
}

function montarSelects(service) {
  const form = document.getElementById("orcamento-form");
  if (!form) return;

  // Evita erro se não houver selectFields
  if (!service.selectFields) return;

  service.selectFields.forEach(field => {
    const wrapper = document.createElement("div");
    wrapper.className = "form-group select-dinamico";

    const label = document.createElement("label");
    label.className = "form-label";
    label.textContent = field.label;

    // Custom multi-select dropdown
    const customSelect = document.createElement("div");
    customSelect.className = "custom-multiselect";

    // Container for selected tags
    const tagsContainer = document.createElement("div");
    tagsContainer.className = "tags-container";
    customSelect.appendChild(tagsContainer);

    // Dropdown button
    const dropdownBtn = document.createElement("button");
    dropdownBtn.type = "button";
    dropdownBtn.className = "dropdown-btn";
    dropdownBtn.textContent = field.placeholder || `Selecione...`;
    customSelect.appendChild(dropdownBtn);

    // Dropdown list
    const dropdownList = document.createElement("ul");
    dropdownList.className = "dropdown-list hidden";
    field.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.tabIndex = 0;
      li.addEventListener("click", function(e) {
        e.stopPropagation();
        // Adiciona tag se não estiver selecionada
        if (![...tagsContainer.children].some(tag => tag.dataset.value === option)) {
          const tag = document.createElement("span");
          tag.className = "tag-selected";
          tag.textContent = option;
          tag.dataset.value = option;
          const removeBtn = document.createElement("button");
          removeBtn.type = "button";
          removeBtn.className = "remove-tag";
          removeBtn.innerHTML = "&times;";
          removeBtn.addEventListener("click", function(ev) {
            ev.stopPropagation();
            tag.remove();
            updateHiddenInput();
          });
          tag.appendChild(removeBtn);
          tagsContainer.appendChild(tag);
          updateHiddenInput();
        }
        dropdownList.classList.add("hidden");
      });
      dropdownList.appendChild(li);
    });
    customSelect.appendChild(dropdownList);

    // Hidden input to store selected values (for form submit)
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = field.id;
    customSelect.appendChild(hiddenInput);

    // Toggle dropdown
    dropdownBtn.addEventListener("click", function(e) {
      e.preventDefault();
      dropdownList.classList.toggle("hidden");
    });

    // Click outside to close
    document.addEventListener("click", function(e) {
      if (!customSelect.contains(e.target)) {
        dropdownList.classList.add("hidden");
      }
    });

    // Atualiza o hidden input com os valores selecionados
    function updateHiddenInput() {
      const values = [...tagsContainer.children].map(tag => tag.dataset.value);
      hiddenInput.value = values.join(",");
      // Atualiza placeholder
      dropdownBtn.textContent = values.length ? "Selecionados: " + values.length : (field.placeholder || `Selecione...`);
    }

    wrapper.appendChild(label);
    wrapper.appendChild(customSelect);

    // Insere o select ANTES do campo Observações
    const observacoes = document.getElementById("orcamento-observacoes");
    form.insertBefore(wrapper, observacoes.parentElement);
  });
}


function limparSelectsDinamicos() {
  const antigos = document.querySelectorAll(".select-dinamico");
  antigos.forEach(el => el.remove());
}


// Formatando Titulos dos serviços função para exibição no modal
function formatCategoryTitle(key) {
  return key
    .replace(/_/g, ' ')
    
}

// Informações da empresa
const companyInfo = {
  name: "Euler Passos Buffet",
  phone: "(61) 99905-3461",
  email: "contato@eulerpassosbuffet.com.br",
  address: "St. de Clubes Esportivos Sul Trecho 2 - Plano Piloto, 70297-400 Brasília - DF"

};

// Aguarda o DOM estar totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('Inicializando Buffet & Eventos Premium...');
  
  // DOM Elements
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const modal = document.getElementById('cardapio-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = modal?.querySelector('.modal__backdrop');
  
  // Mobile Navigation Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      console.log('Menu mobile toggled');
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu) navMenu.classList.remove('active');
      if (navToggle) navToggle.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update active nav link
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        
        console.log('Scrolling to:', targetId);
      }
    });
  });

  // Modal functionality
// Modal functionality
function openModal(serviceId) {
  console.log('Opening modal for service:', serviceId);

  const service = servicesData[serviceId];
  if (!service || !modal) {
    console.error('Service not found or modal not available:', serviceId);
    return;
  }

  // Limpa selects antigos SEMPRE
  limparSelectsDinamicos();

  // Update modal content
  document.getElementById('modal-icon').textContent = service.icon;
  document.getElementById('modal-title').textContent = service.name;
  document.getElementById('modal-description').textContent = service.description;

  // Monta menu
  const modalMenu = document.getElementById('modal-menu');
  modalMenu.innerHTML = '';

  Object.keys(service.menu).forEach(category => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = formatCategoryTitle(category);

    const ul = document.createElement('ul');
    service.menu[category].forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });

    details.appendChild(summary);
    details.appendChild(ul);
    modalMenu.appendChild(details);
  });

  enableAccordion();

  // ⬇ AQUI ESTÁ A GRANDE DIFERENÇA:
  // Só monta selects se o cardápio tiver selects
  if (service.selectFields) {
    montarSelects(service);
  }

  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  console.log('Modal opened successfully');
}

 
  function closeModal() {
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      
      // Clear form
      const orcamentoForm = document.getElementById('orcamento-form');
      if (orcamentoForm) {
        orcamentoForm.reset();
      }
      console.log('Modal closed');
    }
  }

  // Event listeners for service cards
  const servicoCards = document.querySelectorAll('.servico__card');
  servicoCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const serviceId = this.getAttribute('data-service');
      console.log('Service card clicked:', serviceId);
      openModal(serviceId);
    });
    
    // Also add event listener to buttons inside cards
    const button = card.querySelector('.btn');
    if (button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const serviceId = card.getAttribute('data-service');
        console.log('Service button clicked:', serviceId);
        openModal(serviceId);
      });
    }
  });

  // Modal close events
  if (modalClose) {
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function(e) {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });



  //Função para ativar comportamento do tipo accordion nos detalhes do menu
  function enableAccordion() {
    const detailsElements = document.querySelectorAll('#modal-menu details');

    detailsElements.forEach((targetDetail) => {

      targetDetail.addEventListener('click', () => {
        detailsElements.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open');
          }
        });
      });

      targetDetail.addEventListener('toggle', () => {
        if (targetDetail.open) {
          animateList(targetDetail);
        }
      });
    });
  }  
   // Função para ativar comportamento de animação nos itens da lista
  function animateList(detailsElement) {
    const items = detailsElement.querySelectorAll('li');

    items.forEach((li, index) => {
      li.classList.remove('show');

      setTimeout(() => {
        li.classList.add('show');
      }, index * 80); // Delay de 80ms entre cada item
    });
  }
  // WhatsApp message formatting
  function formatWhatsAppMessage(formData, isOrcamento = false) {
    let message = `*${companyInfo.name}*\n\n`;
    
    if (isOrcamento) {
      const serviceName = document.getElementById('modal-title')?.textContent || '';
      message += `*Solicitação de Orçamento - ${serviceName}*\n\n`;
      message += `*Nome:* ${formData.nome}\n`;
      message += `*E-mail:* ${formData.email}\n`;
      message += `*Telefone:* ${formData.telefone}\n`;
      message += `*Data do Evento:* ${formatDate(formData.data)}\n`;
      message += `*Número de Pessoas:* ${formData.pessoas}\n`;

      // Adiciona selects dinâmicos ao corpo da mensagem
      const selects = document.querySelectorAll('.custom-multiselect input[type="hidden"]');
      selects.forEach(input => {
        if (input.value) {
          // Busca o label correspondente
          const label = input.closest('.select-dinamico')?.querySelector('.form-label')?.textContent || input.name;
          // Mostra as opções separadas por vírgula
          message += `*${label}:* ${input.value.split(',').join(', ')}\n`;
        }
      });

      if (formData.observacoes) {
        message += `*Observações:* ${formData.observacoes}\n`;
      }
    } else {
      message += `*Contato Geral*\n\n`;
      message += `*Nome:* ${formData.nome}\n`;
      message += `*E-mail:* ${formData.email}\n`;
      message += `*Telefone:* ${formData.telefone}\n`;
      
      if (formData.dataEvento) {
        message += `*Data do Evento:* ${formatDate(formData.dataEvento)}\n`;
      }
      
      if (formData.tipoEvento) {
        message += `*Tipo de Evento:* ${formData.tipoEvento}\n`;
      }
      
      if (formData.mensagem) {
        message += `*Mensagem:* ${formData.mensagem}\n`;
      }
    }
    
    message += `\n_Enviado através do site ${companyInfo.name}_`;
    
    return encodeURIComponent(message);
  }

  // Date formatting helper
  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR');
  }

  // WhatsApp redirect
  function sendToWhatsApp(message) {
    const phoneNumber = companyInfo.phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${message}`;
    console.log('Opening WhatsApp with URL:', whatsappUrl);
    
    // Open WhatsApp in new tab
    const newWindow = window.open(whatsappUrl, '_blank');
    
    if (!newWindow) {
      // Fallback if popup blocker prevents opening
      alert('Redirecionamento para WhatsApp foi bloqueado. Por favor, permita pop-ups para este site ou copie o link: ' + whatsappUrl);
    } else {
      alert('Redirecionando para o WhatsApp...');
    }
  }

  // Form validation
  function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    let firstInvalidField = null;
    
    requiredFields.forEach(field => {
      field.style.borderColor = '';
      
      if (!field.value.trim()) {
        field.style.borderColor = '#DC143C';
        isValid = false;
        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      }
    });
    
    // Email validation
    const emailFields = form.querySelectorAll('input[type="email"]');
    emailFields.forEach(field => {
      if (field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
          field.style.borderColor = '#DC143C';
          isValid = false;
          if (!firstInvalidField) {
            firstInvalidField = field;
          }
        }
      }
    });
    
    // Date validation (must be future date for required date fields)
    const dateFields = form.querySelectorAll('input[type="date"][required]');
    dateFields.forEach(field => {
      if (field.value) {
        const selectedDate = new Date(field.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
          field.style.borderColor = '#DC143C';
          isValid = false;
          if (!firstInvalidField) {
            firstInvalidField = field;
          }
        }
      }
    });
    
    // Focus on first invalid field
    if (firstInvalidField) {
      firstInvalidField.focus();
    }
    
    return isValid;
  }

  // Contact form handler
  const contatoForm = document.getElementById('contato-form');
  if (contatoForm) {
    contatoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Contact form submitted');
      
      if (!validateForm(contatoForm)) {
        alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        return;
      }
      
      const formData = {
        nome: document.getElementById('nome')?.value || '',
        email: document.getElementById('email')?.value || '',
        telefone: document.getElementById('telefone')?.value || '',
        dataEvento: document.getElementById('data-evento')?.value || '',
        tipoEvento: document.getElementById('tipo-evento')?.value || '',
        mensagem: document.getElementById('mensagem')?.value || ''
      };
      
      const message = formatWhatsAppMessage(formData);
      sendToWhatsApp(message);
      
      // Reset form after successful submission
      contatoForm.reset();
    });
  }

  // Budget form handler
  const orcamentoForm = document.getElementById('orcamento-form');
  if (orcamentoForm) {
    orcamentoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Budget form submitted');
      
      if (!validateForm(orcamentoForm)) {
        alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        return;
      }
      
      const formData = {
        nome: document.getElementById('orcamento-nome')?.value || '',
        email: document.getElementById('orcamento-email')?.value || '',
        telefone: document.getElementById('orcamento-telefone')?.value || '',
        data: document.getElementById('orcamento-data')?.value || '',
        pessoas: document.getElementById('orcamento-pessoas')?.value || '',
        observacoes: document.getElementById('orcamento-observacoes')?.value || ''
      };
      
      const message = formatWhatsAppMessage(formData, true);
      sendToWhatsApp(message);
      
      // Close modal and reset form
      setTimeout(() => {
        closeModal();
      }, 1000);
    });
  }

  // Clear form validation styling on input
  document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', function() {
      this.style.borderColor = '';
    });
  });

  // Update active navigation link on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 100) {
        header.style.backdropFilter = 'blur(10px)';
      } else {
        header.style.backgroundColor = 'var(--color-surface)';
        header.style.backdropFilter = 'none';
      }
    }
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.diferencial__card, .servico__card, .avaliacao__card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Set minimum date for date inputs to today
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"][required]').forEach(input => {
    input.setAttribute('min', today);
  });

  // Modal de Receitas - Funcionalidade
  const receitaModal = document.getElementById('receita-modal');
  const receitaModalClose = document.getElementById('receita-modal-close');
  const receitaModalBackdrop = receitaModal?.querySelector('.modal__backdrop');
  const receitaCards = document.querySelectorAll('.receita__card, .receita__card .btn');

  /**
   * Abre o modal de receita com os dados da receita selecionada
   * @param {string} receitaId - ID da receita a ser exibida
   */
  function openReceitaModal(receitaId) {
    console.log('Abrindo modal de receita:', receitaId);

    const receita = receitasData[receitaId];
    if (!receita || !receitaModal) {
      console.error('Receita não encontrada ou modal indisponível:', receitaId);
      return;
    }

    // Atualiza o título
    document.getElementById('receita-modal-title').textContent = receita.nome;

    // Popula ingredientes
    const ingredientesList = document.getElementById('receita-ingredientes-list');
    ingredientesList.innerHTML = '';
    receita.ingredientes.forEach(ingrediente => {
      const li = document.createElement('li');
      li.textContent = ingrediente;
      ingredientesList.appendChild(li);
    });

    // Popula modo de preparo
    const preparoList = document.getElementById('receita-preparo-list');
    preparoList.innerHTML = '';
    receita.preparo.forEach(passo => {
      const li = document.createElement('li');
      li.textContent = passo;
      preparoList.appendChild(li);
    });

    // Exibe o modal
    receitaModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    console.log('Modal de receita aberto com sucesso');
  }

  /**
   * Fecha o modal de receita
   */
  function closeReceitaModal() {
    if (receitaModal) {
      receitaModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      console.log('Modal de receita fechado');
    }
  }

  // Event listeners para abrir modal de receitas
  receitaCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Obtém o ID da receita do card ou do botão
      const receitaCard = this.closest('.receita__card');
      const receitaId = receitaCard?.getAttribute('data-receita') || 
                       this.getAttribute('data-receita-id');
      
      if (receitaId) {
        console.log('Card de receita clicado:', receitaId);
        openReceitaModal(receitaId);
      }
    });
  });

  // Event listeners para fechar modal de receitas
  if (receitaModalClose) {
    receitaModalClose.addEventListener('click', function(e) {
      e.preventDefault();
      closeReceitaModal();
    });
  }

  if (receitaModalBackdrop) {
    receitaModalBackdrop.addEventListener('click', function(e) {
      if (e.target === receitaModalBackdrop) {
        closeReceitaModal();
      }
    });
  }

  // Fecha modal de receitas com tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && receitaModal && !receitaModal.classList.contains('hidden')) {
      closeReceitaModal();
    }
  });
  console.log('Euler Passos Buffet - Site carregado com sucesso!');

  // Inicializa o Swiper para a seção de receitas
(function initSwiper() {
  if (typeof Swiper === 'undefined') return;

  const container = document.querySelector('.mySwiper');
  if (!container) return;

  // Evita init duplicado (muito comum em CMS/SPA)
  if (window.__gallerySwiper?.destroy) window.__gallerySwiper.destroy(true, true);

  const total = container.querySelectorAll('.swiper-wrapper > .swiper-slide').length;

  // Regra prática para loop: total precisa ser >= slidesPerView * 2 [web:53][web:59]
  const safePerView = (desired) => {
    if (total >= desired * 2) return desired;
    // se não dá, reduza para o máximo possível com loop
    return Math.max(1, Math.floor(total / 2));
  };

  const gallerySwiper = new Swiper(container, {
    loop: total > 1,
    autoplay: total > 1 ? { delay: 4000, disableOnInteraction: false } : false,

    navigation: {
      nextEl: container.querySelector('.swiper-button-next'),
      prevEl: container.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: container.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },

    slidesPerView: safePerView(1),
    slidesPerGroup: 1,
    spaceBetween: 16,

    breakpoints: {
      768:  { slidesPerView: safePerView(2), slidesPerGroup: 1 },
      1024: { slidesPerView: safePerView(3), slidesPerGroup: 1 }, // com 5 slides => vira 2
    }
  });

  window.__gallerySwiper = gallerySwiper;
})();

});
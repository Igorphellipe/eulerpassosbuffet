/**
 * servicesData.js - Dados Centralizados dos Serviços
 *
 * Este arquivo contém todos os dados dos serviços e cardápios do Euler Passos Buffet.
 * É compartilhado entre a landing page (app.js) e a área administrativa (admin.js),
 * evitando duplicação e garantindo consistência.
 *
 * ⚠️  FONTE ÚNICA DE VERDADE — edite apenas aqui.
 *     Os cardápios exibidos no site (index) e no admin são lidos deste arquivo.
 *
 * Estrutura de cada serviço:
 * - id: identificador único (deve coincidir com data-service nos cards HTML)
 * - name: nome do serviço
 * - description: descrição breve exibida no modal do site
 * - hasOpcionais: se true, o admin exibe o editor de cardápio; o site monta selectFields
 * - menu: objeto com categorias → [itens]
 * - selectFields: (opcional) campos de seleção múltipla para serviços customizáveis
 */

// Dados dos serviços - Fonte única de verdade
const servicesData = {

  // ── COQUETEL VOLANTE ──────────────────────────────────────
  coquetel: {
    id: 'coquetel',
    name: 'Coquetel Volante',
    description: 'Pequenas porções, grandes momentos.',
    hasOpcionais: false,
    menu: {
      'Canapés': [
        'Canapés de azeitona preta',
        'Canapés de peito de peru',
      ],
      'Salgados Assados': [
        'Quiche de alho poró',
        'Quiche de queijo',
        'Quiche de tomate seco',
        'Folhado de abacaxi',
        'Folhado Alho poró com catupiry',
        'Folhado Bacalhau',
        'Folhado Banana',
        'Folhado Camarão',
        'Folhado Carne de sol com mandioca',
        'Folhado Castanha',
        'Folhado Chocolate',
        'Folhado Frango com mel',
        'Folhado Maçã',
        'Folhado Romeu e Julieta',
      ],
      'Salgados Fritos': [
        'Bombom de frango',
        'Bombom de aipim com carne seca',
        'Bombom de bacalhau',
        'Pastel de carne e queijo',
        'Bombom de azeitona',
        'Bombom de queijo',
        'Bombom de queijo com alho',
      ],
      'Empratados (Volante na Barquete)': [
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
    }
  },

  // ── ALMOÇO OU JANTAR COM COQUETEL VOLANTE ─────────────────
  almoco: {
    id: 'almoco',
    name: 'Almoço / Jantar com Coquetel Volante',
    description: 'Leveza, sabor e variedade.',
    hasOpcionais: true,
    menu: {
      'Canapés (escolher 2)': [
        'Canapés de Aspargos',
        'Canapés de azeitona preta',
        'Canapés de tomate seco',
        'Canapés de peito de peru',
        'Canapés de Presunto',
      ],
      'Salgados Assados': [
        'Quiche de alho poró',
        'Quiche de queijo',
        'Quiche de tomate seco',
        'Folhado de abacaxi',
        'Folhado Alho poró com catupiry',
        'Folhado Bacalhau',
        'Folhado Banana',
        'Folhado Camarão',
        'Folhado Carne de sol com mandioca',
        'Folhado Castanha',
        'Folhado Chocolate',
        'Folhado Frango com mel',
        'Folhado Maçã',
        'Folhado Romeu e Julieta',
      ],
      'Salgados Fritos': [
        'Bombom de frango',
        'Bombom de aipim com carne seca',
        'Bombom de bacalhau',
        'Pastel de carne e queijo',
        'Bombom de azeitona',
      ],
      'Empratados (Volante na Barquete)': [
        'Escondidinho de carne seca',
        'Escondidinho de camarão',
      ],
      'Saladas (escolher 2)': [
        'Salada Tropical (alface americana, crespa, rúcula, mimosa, melão, manga, kiwi, kane-cama, morango e tomate cereja) — Molho de Mostarda com Mel',
        'Salada Tricolor de Peito de Peru (macarrão fusilli tricolor, peito de peru, queijo minas, tomate, cebola roxa, azeitonas verdes, maionese de leite, azeite, limão, mostarda, salsa)',
        'Legumes Sauté (cenoura, vagem francesa, batata)',
        'Salada Waldorf (repolho, cenoura, maçã, melão, uvas passas, batata palha e iogurte natural)',
        'Batata Sautê',
        'Legumes Sauteados',
      ],
      'Arroz (escolher 2)': [
        'Arroz branco',
        'Arroz com brócolis',
        'Arroz com castanhas',
      ],
      'Carnes (1 vermelha + 1 frango ou 1 peixe)': [
        'Filé de frango grelhado ao creme de lemon pepper',
        'Filé de frango recheado ao molho 4 queijos',
        'Filé mignon ao molho madeira com champignons',
        'Maminha ao molho mostarda',
        'Escalope de filé mignon ao molho rôti, tomate seco e champignon',
        'Posta de pescada amarela com molho de camarão',
        'Bacalhau ao Zé do Pipo',
      ],
      'Massa (escolher 1)': [
        'Rondelli tomate seco ao molho napolitano',
        'Capeletti de frango ao molho branco',
        'Penne ao sugo',
        'Conchiglione recheado com bacalhau ao molho de nozes',
      ],
      'Bebidas': [
        'Coca-Cola comum e zero',
        'Guaraná Antarctica comum e zero',
        'Água mineral sem gás',
        'Suco de abacaxi com hortelã',
        'Suco de acerola',
      ],
      'Mesa de Café': [
        'Petit-fours variados',
      ],
    },
    selectFields: [
      {
        id: 'Canapés',
        label: 'Escolha 2 Opções de Canapés',
        options: ['Canapés de Aspargos', 'Canapés de azeitona preta', 'Canapés de tomate seco', 'Canapés de peito de peru', 'Canapés de Presunto']
      },
      {
        id: 'Saladas',
        label: 'Escolha 2 Opções de Salada',
        options: [
          'Salada Tropical — Molho de Mostarda com Mel',
          'Salada Tricolor de Peito de Peru',
          'Legumes Sauté',
          'Salada Waldorf',
          'Batata Sautê',
          'Legumes Sauteados',
        ]
      },
      {
        id: 'Arroz',
        label: 'Escolha 2 Opções de Arroz',
        options: ['Arroz branco', 'Arroz com brócolis', 'Arroz com castanhas']
      },
      {
        id: 'Carnes',
        label: 'Escolha as Carnes (1 vermelha + 1 frango ou 1 peixe)',
        options: [
          'Filé de frango grelhado ao creme de lemon pepper',
          'Filé de frango recheado ao molho 4 queijos',
          'Filé mignon ao molho madeira com champignons',
          'Maminha ao molho mostarda',
          'Escalope de filé mignon ao molho rôti, tomate seco e champignon',
          'Posta de pescada amarela com molho de camarão',
          'Bacalhau ao Zé do Pipo',
        ]
      },
      {
        id: 'Massa',
        label: 'Escolha 1 Opção de Massa',
        options: [
          'Rondelli tomate seco ao molho napolitano',
          'Capeletti de frango ao molho branco',
          'Penne ao sugo',
          'Conchiglione recheado com bacalhau ao molho de nozes',
        ]
      },
    ],
  },

  // ── JANTAR (alias idêntico ao almoço para manter compatibilidade) ─
  jantar: {
    id: 'jantar',
    name: 'Buffet de Jantar',
    description: 'Gastronomia que impressiona.',
    hasOpcionais: true,
    menu: {
      'Canapés (escolher 2)': [
        'Canapés de Aspargos',
        'Canapés de azeitona preta',
        'Canapés de tomate seco',
        'Canapés de peito de peru',
        'Canapés de Presunto',
      ],
      'Salgados Assados': [
        'Quiche de alho poró',
        'Quiche de queijo',
        'Quiche de tomate seco',
        'Folhado de abacaxi',
        'Folhado Alho poró com catupiry',
        'Folhado Bacalhau',
        'Folhado Banana',
        'Folhado Camarão',
        'Folhado Carne de sol com mandioca',
        'Folhado Castanha',
        'Folhado Chocolate',
        'Folhado Frango com mel',
        'Folhado Maçã',
        'Folhado Romeu e Julieta',
      ],
      'Salgados Fritos': [
        'Bombom de frango',
        'Bombom de aipim com carne seca',
        'Bombom de bacalhau',
        'Pastel de carne e queijo',
        'Bombom de azeitona',
      ],
      'Empratados (Volante na Barquete)': [
        'Escondidinho de carne seca',
        'Escondidinho de camarão',
      ],
      'Saladas (escolher 2)': [
        'Salada Tropical — Molho de Mostarda com Mel',
        'Salada Tricolor de Peito de Peru',
        'Legumes Sauté',
        'Salada Waldorf',
        'Batata Sautê',
        'Legumes Sauteados',
      ],
      'Arroz (escolher 2)': [
        'Arroz branco',
        'Arroz com brócolis',
        'Arroz com castanhas',
      ],
      'Carnes (1 vermelha + 1 frango ou 1 peixe)': [
        'Filé de frango grelhado ao creme de lemon pepper',
        'Filé de frango recheado ao molho 4 queijos',
        'Filé mignon ao molho madeira com champignons',
        'Maminha ao molho mostarda',
        'Escalope de filé mignon ao molho rôti, tomate seco e champignon',
        'Posta de pescada amarela com molho de camarão',
        'Bacalhau ao Zé do Pipo',
      ],
      'Massa (escolher 1)': [
        'Rondelli tomate seco ao molho napolitano',
        'Capeletti de frango ao molho branco',
        'Penne ao sugo',
        'Conchiglione recheado com bacalhau ao molho de nozes',
      ],
      'Bebidas': [
        'Coca-Cola comum e zero',
        'Guaraná Antarctica comum e zero',
        'Água mineral sem gás',
        'Suco de abacaxi com hortelã',
        'Suco de acerola',
      ],
      'Mesa de Café': [
        'Petit-fours variados',
      ],
    },
    selectFields: [
      {
        id: 'Canapés',
        label: 'Escolha 2 Opções de Canapés',
        options: ['Canapés de Aspargos', 'Canapés de azeitona preta', 'Canapés de tomate seco', 'Canapés de peito de peru', 'Canapés de Presunto']
      },
      {
        id: 'Saladas',
        label: 'Escolha 2 Opções de Salada',
        options: [
          'Salada Tropical — Molho de Mostarda com Mel',
          'Salada Tricolor de Peito de Peru',
          'Legumes Sauté',
          'Salada Waldorf',
          'Batata Sautê',
          'Legumes Sauteados',
        ]
      },
      {
        id: 'Arroz',
        label: 'Escolha 2 Opções de Arroz',
        options: ['Arroz branco', 'Arroz com brócolis', 'Arroz com castanhas']
      },
      {
        id: 'Carnes',
        label: 'Escolha as Carnes (1 vermelha + 1 frango ou 1 peixe)',
        options: [
          'Filé de frango grelhado ao creme de lemon pepper',
          'Filé de frango recheado ao molho 4 queijos',
          'Filé mignon ao molho madeira com champignons',
          'Maminha ao molho mostarda',
          'Escalope de filé mignon ao molho rôti, tomate seco e champignon',
          'Posta de pescada amarela com molho de camarão',
          'Bacalhau ao Zé do Pipo',
        ]
      },
      {
        id: 'Massa',
        label: 'Escolha 1 Opção de Massa',
        options: [
          'Rondelli tomate seco ao molho napolitano',
          'Capeletti de frango ao molho branco',
          'Penne ao sugo',
          'Conchiglione recheado com bacalhau ao molho de nozes',
        ]
      },
    ],
  },

  // ── CHURRASCO ────────────────────────────────────────────
  churrasco: {
    id: 'churrasco',
    name: 'Buffet de Churrasco',
    description: 'Brasa, cortes especiais e tradição.',
    hasOpcionais: false,
    menu: {
      'Entradas': [
        'Carne de sol',
        'Linguiça de frango e suína',
        'Coração de frango',
        'Frango desossado',
        'Pão com alho',
      ],
      'Prato Principal': [
        'Picanha',
        'Maminha',
        'Fraldinha',
        'Alcatra',
        'Carne de sol',
        'Costela suína',
        'Lombinho suíno',
        'Linguiça de frango e suína',
        'Frango desossado',
        'Coração de frango',
      ],
      'Guarnições': [
        'Arroz',
        'Feijão tropeiro',
        'Farofa de cuscuz',
        'Mandioca com manteiga',
        'Vinagrete',
        'Pão com alho',
        'Salada verde',
      ],
      'Sobremesa': [
        'Banana caramelizada',
        'Abacaxi assado',
        'Sorvete de creme',
      ],
      'Bebidas': [
        'Refrigerantes comum e zero',
        'Sucos — dois sabores',
      ],
    }
  },

  // ── FEIJOADA ─────────────────────────────────────────────
  feijoada: {
    id: 'feijoada',
    name: 'Buffet de Feijoada',
    description: 'Um clássico cheio de afeto.',
    hasOpcionais: false,
    menu: {
      'Entradas': [
        'Caldinho de feijão',
        'Pastéizinhos de queijo e carne',
        'Linguiçinhas com pães',
        'Torresmo à pururuca',
        'Kibe',
      ],
      'Prato Principal — Feijoada': [
        'Feijão preto',
        'Costelinha defumada',
        'Lombinho defumado',
        'Carne seca',
        'Paio',
        'Calabresa',
      ],
      'Guarnições': [
        'Arroz',
        'Farofa',
        'Torresmo à pururuca',
        'Couve',
        'Laranja',
        'Molho de pimenta',
      ],
      'Bebidas': [
        'Refrigerantes comum e zero',
        'Sucos — dois sabores',
      ],
    }
  },

  // ── COFFEE BREAK ─────────────────────────────────────────
  coffee: {
    id: 'coffee',
    name: 'Coffee Break',
    description: 'Pausa com sabor e sofisticação.',
    hasOpcionais: false,
    menu: {
      'Salgados Fritos': [
        'Rizole de milho',
        'Rizole de carne',
        'Bolinha de queijo e alho',
        'Kibe com queijo',
      ],
      'Salgados Assados': [
        'Pão de queijo',
        'Croissant de Espinafre',
        'Croissant de Ricota',
        'Croissant de Banana',
        'Croissant de Maçã',
        'Croissant de Goiabada',
      ],
      'Pães e Frios': [
        'Pães diversos',
        'Patê de azeitona',
        'Patê de presunto',
        'Presunto fatiado',
        'Queijo fatiado',
        'Requeijão',
      ],
      'Doces e Sobremesa': [
        'Salada de frutas',
        'Bolo de chocolate',
        'Bolo de ninho com massa branca',
      ],
      'Bebidas': [
        'Café',
        'Refrigerantes comum e zero',
        'Água saborizada',
        'Suco de goiaba',
        'Suco de manga',
      ],
    }
  },

  // ── CREPES DOCES E SALGADOS ───────────────────────────────
  crepe: {
    id: 'crepe',
    name: 'Crepes Doces e Salgados',
    description: 'Uma estação para surpreender.',
    hasOpcionais: false,
    menu: {
      'Entradas': [
        'Pastéizinhos de carne e queijo',
        'Kibe com e sem catupiry',
        'Coxinha com e sem catupiry',
      ],
      'Crepes Salgados': [
        'Carne seca',
        'Filé de frango com catupiry',
        'Queijo',
        'Presunto',
        'Calabresa',
        'Tomate seco',
        'Palmito',
        'Batata palha',
        'Tomate fresco com rúcula e orégano',
        'Cebola temperada',
        'Milho',
        'Azeitona',
      ],
      'Crepes Doces': [
        'Banana caramelizada',
        'Chocolate',
        'Canela e açúcar',
        'Doce de leite',
        'Goiabada',
      ],
      'Bebidas': [
        'Refrigerantes comum e zero',
        'Sucos — dois sabores',
      ],
    }
  },

  // ── BUTECO ────────────────────────────────────────────────
  boteco: {
    id: 'boteco',
    name: 'Buffet de Buteco',
    description: 'Sabores brasileiros à mesa.',
    hasOpcionais: false,
    menu: {
      'Ilha de Buteco': [
        'Calabresa acebolada',
        'Tropeirinho',
        'Carne de sol com mandioca',
        'Linguiça apimentada com pães',
        'Frango à passarinho ao alho',
        'Pastéis de queijo e carne',
        'Quibe com e sem queijo',
        'Fritas',
        'Torresmo à pururuca',
        'Carreteiro',
      ],
      'Caldos': [
        'Abóbora com carne seca',
        'Costela com mandioca',
      ],
      'Empratados': [
        'Escondidinho de carne seca',
        'Isca de frango béchamel de baroa',
      ],
    }
  },

  // ── FESTA JUNINA ─────────────────────────────────────────
  junina: {
    id: 'junina',
    name: 'Buffet de Festa Junina',
    description: 'Quitutes que aquecem a festa.',
    hasOpcionais: false,
    menu: {
      'Comidas Típicas Doces': [
        'Canjica cremosa',
        'Pamonha (doce e sal)',
        'Cural de milho',
        'Bolo de milho',
        'Bolo de fubá',
        'Bolo de chocolate',
      ],
      'Espetinhos': [
        'Frango com bacon',
        'Queijo coalho',
        'Carne',
        'Salsichão',
        'Coração',
        'Linguiça',
      ],
      'Comidas Típicas Salgadas': [
        'Carreteiro',
        'Galinhada',
        'Milho verde',
        'Farofa',
        'Vinagrete',
        'Cachorro quente',
        'Pipoca',
      ],
      'Pastéis': [
        'Pastel de carne',
        'Pastel de queijo',
      ],
      'Caldos': [
        'Caldo verde',
        'Caldo de frango com milho',
      ],
      'Bebidas': [
        'Quentão',
        'Sucos — dois sabores',
        'Refrigerantes comum e zero',
        'Água sem gás',
      ],
    }
  },

  // ── BUFFET DE MASSAS ─────────────────────────────────────
  massa: {
    id: 'massa',
    name: 'Buffet de Massas',
    description: 'Receitas artesanais e molhos especiais.',
    hasOpcionais: false,
    menu: {
      'Massas': [
        'Rondelli tomate seco ao molho napolitano',
        'Capeletti de frango ao molho branco',
        'Penne ao sugo',
        'Conchiglione recheado com bacalhau ao molho de nozes',
      ],
      'Acompanhamentos': [
        'Salada verde',
        'Pão ciabatta',
        'Antepastos variados',
      ],
      'Bebidas': [
        'Água mineral',
        'Refrigerante',
        'Suco de frutas',
      ],
    }
  },

  // ── BUFFET TÍPICO MINEIRO ─────────────────────────────────
  tipicoMineiro: {
    id: 'tipicoMineiro',
    name: 'Buffet Típico Mineiro',
    description: 'A alma de Minas à sua mesa.',
    hasOpcionais: false,
    menu: {
      'Enquanto os convidados chegam': [
        'Café coado na hora',
      ],
      'Para beliscar': [
        'Pão de queijo tradicional',
        'Broa de fubá',
        'Biscoito de queijo',
        'Bolo de milho',
      ],
      'Mesa de boas-vindas': [
        'Queijo Canastra e Minas meia cura',
        'Salame, copa e lombo defumado',
        'Torresmo pururuca',
        'Linguiça artesanal acebolada',
        'Bolinho de mandioca com carne-seca',
        'Geleias artesanais',
        'Doce de leite',
        'Pimenta biquinho',
        'Azeitonas e conservas',
      ],
      'Almoço — Prato principal': [
        'Arroz de costela defumada, servido em panelas de ferro',
      ],
      'Almoço — Acompanhamentos': [
        'Feijão tropeiro',
        'Purê de mandioca',
        'Couve refogada',
        'Farofa de bacon',
        'Vinagrete',
        'Salada de folhas com tomate-cereja e queijo minas',
        'Legumes assados na manteiga',
      ],
      'Mesa de café (encerramento)': [
        'Café coado normal',
        'Café de caramelo',
        'Biscoitinhos mineiros',
        'Tela de doce de leite e canudinhos',
        'Tela de goiabada e canudinhos',
      ],
    }
  },

  // ── ALMOÇO NATALINO ──────────────────────────────────────
  natalino: {
    id: 'natalino',
    name: 'Almoço Natalino',
    description: 'Celebre o Natal com sabor e tradição.',
    hasOpcionais: false,
    menu: {
      'Prato Principal': [
        'Peru e/ou Chester à Califórnia',
        'Lombo assado com carpaccio de abacaxi',
        'Pernil com farofa natalina',
      ],
      'Guarnições': [
        'Arroz branco',
        'Salpicão de frango',
        'Salada verde (4 folhas, tomate seco, palmito, manga) — Molho de Mel e Mostarda',
        'Farofa natalina (uvas passas, ovos, maçã, alho laminado)',
      ],
      'Bebidas': [
        'Refrigerantes comum e zero',
        'Sucos — dois sabores',
      ],
    }
  },

};

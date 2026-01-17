/**
 * servicesData.js - Dados Centralizados dos Serviços
 * 
 * Este arquivo contém todos os dados dos serviços e cardápios do Euler Passos Buffet.
 * É compartilhado entre a landing page (app.js) e a área administrativa (admin.js),
 * evitando duplicação e garantindo consistência.
 * 
 * Estrutura de cada serviço:
 * - id: identificador único
 * - name: nome do serviço
 * - description: descrição breve
 * - hasOpcionais: indica se o serviço possui campos opcionais (selectFields)
 * - menu: objeto com categorias e itens do cardápio
 * - selectFields: (opcional) campos de seleção múltipla para serviços customizáveis
 */

// Dados dos serviços - Fonte única de verdade
const servicesData = {
  churrasco: {
    id: "churrasco",
    name: "Churrasco",
    description: "O sabor que chama atenção",
    hasOpcionais: false,
    menu: {
      ENTRADAS: ["Carne de Sol", "Linguiça de Frango e Suina", "Coração de Frango", "Frango Desossado", "Pão de alho"],
      PRATO_PRINCIPAL: ["Picanha", "Maminha", "Fraldinha", "Alcatra", "Carne de Sol", "Costela Suína", "Lombinho Suíno", "Linguiça de Frango e Suína", "Frango desossado", "Coração de Frango"],
      GUARNIÇÕES: ["Arroz", "Feijão tropeiro", "Mandioca com manteiga", "Vinagrete", "Pão com alho", "Salada verde", "Farofa de Cuscuz", 'Molho Mel e Mostarda'],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  crepe: {
    id: "crepe",
    name: "Crepe",
    description: "Crepes doces e salgados gourmet",
    hasOpcionais: false,
    menu: {
      CREPES_SALGADOS: ["Filé ao Molho Madeira", "Frango Desfiado com Catupiry", "Queijo Mussarela", "Presunto", "Calabresa", "Tomate Seco com Rúcula", "Palmito", "Batata Palha", "Tomate Fresco", "Orégano", "Cebola em Tempero", "Milho", "Azeitonas"],
      CREPES_DOCES: ["Banana Caramelada", "Canela e Açúcar", "Morango", "Chocolate"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  massa: {
    id: "massa",
    name: "Massas",
    description: "Massas artesanais com molhos especiais",
    hasOpcionais: true,
    menu: {
      ENTRADAS: ["SALGADOS FRITOS", "Bombom de Azeitona", "Bombom de Frango", "Bombom de Provolone", "Bobom de Carne Seca", "Delícia de Queijo", "Delícia de Bacalhau", "SALGADOS ASSADOS", "Folhado de Frango", "Folhado de Bacalhau", "Folhado de Aipim com Carne de Sol", "Dadinho de Tapioca"], 
      MASSAS: ["Penne", "Espaguete", "Tailarim", "Parafuso", "Gravata"],
      MOLHOS: ["Molho Pesto", "Molho Branco", "Molho Bolonhesa", "Molho Sugo", "Molho Quatro Queijos", "Molho Rustico de Tomate"],
      ACOMPANHAMENTOS: ["Isca de Filé ao Molho Madeira", "Frango Desfiado", "Calabresa", "Presunto", "Milho", "Azeitonas", "Cebola em Tempero", "Catupiry", "Cheddar", "Bacon", "Ervilha Fresca", "Orégano", "Manjericão", "Tomate Seco"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    },
    selectFields: [
      { id: "Massa", label: "Escolha 3 Opções de Massas", options: ["Penne", "Espaguete", "Tailarim", "Parafuso", "Gravata"] },
      { id: "Molho", label: "Escolha 3 Opções de Molho", options: ["Molho Pesto", "Molho Branco", "Molho Bolonhesa", "Molho Sugo", "Molho Quatro Queijos", "Molho Rustico de Tomate"] },
      { id: "Acompanhamento", label: "Escolha 8 Opções de Acompanhamento", options: ["Isca de Filé ao Molho Madeira", "Frango Desfiado", "Calabresa", "Presunto", "Milho", "Azeitonas", "Cebola em Tempero", "Catupiry", "Cheddar", "Bacon", "Ervilha Fresca", "Orégano", "Manjericão", "Tomate Seco"] }
    ],
  },
  jantar: {
    id: "jantar",
    name: "Jantar",
    description: "Menu executivo completo",
    hasOpcionais: true,
    menu: {
      ENTRADAS: ["SALGADOS ASSADOS", "Folhado de Frango com Abacxi", "Folhado Romeu e Julieta", "Folhado de Bacalhau", "Folhado de Camarão", "SALGADOS FRITOS", "Bombom de Azeitona", "Bombom de Provolone", "Delícia de Queijo", "Dadinho de Tápioca", "Pasteis de Carne e Queijo", "Coxinha de Frango com Catupiry"],
      EMPRATADOS: ["Camarão com Bechamel de Baroa", "Frango com Bechamel de Baroa", "Escondidinho de Carne Seca", "Escondidinho de Frango"],
      PRATO_PRINCIPAL: ["File Mignon ao Molho Madeira", "Isca de Frango Recheado ao Molho Branco", "Bacalhau ao Zé do Pipo", "Lagarto ao Molho Madeira"],
      GUARNIÇÕES: ["Arroz branco", "Arroz com Brócolis", "Batata Rustica", "Salada verde", "Molho de Mostarda e Mel"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    },
    selectFields: [
      { id: "Prato_principal", label: "Escolha 2 Opções de Prato Principal", options: ["File Mignon ao Molho Madeira", "Isca de Frango Recheado ao Molho Branco", "Bacalhau ao Zé do Pipo", "Lagarto ao Molho Madeira"] },
      { id: "Massas", label: "Escolha  1 Opção de Massa", options: ["Penne ao Molho Sugo", "Espaguete ao Molho Bolonhesa", "Rodele de Ricota e Tomate Seco ao Quatro Queijos"] },
      { id: "Empratados", label: "Escolha 2 Opções de Empratado", options: ["Camarão com Bechamel de Baroa", "Frango com Bechamel de Baroa", "Escondidinho de Carne Seca", "Escondidinho de Frango"] }
    ]
  },
  almoco: {
    id: "almoco",
    name: "Almoço",
    description: "Buffet livre variado",
    hasOpcionais: true,
    menu:{
      ENTRADAS: ["SALGADOS ASSADOS", "Folhado de Frango com Abacxi", "Folhado Romeu e Julieta", "Folhado de Bacalhau", "Folhado de Camarão", "SALGADOS FRITOS", "Bombom de Azeitona", "Bombom de Provolone", "Delícia de Queijo", "Dadinho de Tápioca", "Pasteis de Carne e Queijo", "Coxinha de Frango com Catupiry"],
      EMPRATADOS: ["Camarão com Bechamel de Baroa", "Isca de Frango com Bechamel de Baroa", "Escondidinho de Carne Seca", "Escondidinho de Frango"],
      PRATO_PRINCIPAL: ["File Mignon ao Molho Madeira", "Frango Recheado ao Molho Branco", "Bacalhau ao Zé do Pipo", "Lagarto ao Molho Madeira"],
      GUARNIÇÕES: ["Arroz branco", "Arroz com Brócolis", "Batata Rustica", "Salada verde", "Molho de Mostarda e Mel"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    },
    selectFields: [
      { id: "Prato_Principal", label: "Escolha 2 Opções de Prato Principal", options: ["File Mignon ao Molho Madeira", "Isca de Frango Recheado ao Molho Branco", "Bacalhau ao Zé do Pipo", "Lagarto ao Molho Madeira"] },
      { id: "Massas", label: "Escolha  1 Opção de Massa", options: ["Penne ao Molho Sugo", "Espaguete ao Molho Bolonhesa", "Rodele de Ricota e Tomate Seco ao Quatro Queijos"] },
      { id: "Empratados", label: "Escolha 2 Opções de Empratado", options: ["Camarão com Bechamel de Baroa", "Frango com Bechamel de Baroa", "Escondidinho de Carne Seca", "Escondidinho de Frango"] }
    ]
  },
  coquetel: {
    id: "coquetel",
    name: "Coquetel Volante",
    description: "Finger foods e canapés sofisticados",
    hasOpcionais: false,
    menu: {
      FINGER_FOODS: ["Canapés de salmão", "Mini sanduíches", "Coxinhas gourmet", "Empadas variadas", "Bruschetta caprese", "Tortinhas doces", "Drinks especiais", "Espumante"],
      SALGADOS_ASSADOS: ["Folhado de Frango", "Sushi e sashimi", "Salada de camarão", "Mini wraps", "Canapés vegetarianos", "Mini quiches", "Drinks especiais", "Espumante"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  boteco: {
    id: "boteco",
    name: "Comida de Boteco",
    description: "Petiscos tradicionais brasileiros",
    hasOpcionais: false,
    menu: {
      ILHA_DE_BOTECO: ["Calabresa Acebolada", "Tropeirinho", "Carne de Sol com Mandioca", "Torresmo a Pururuca", "Linguiça acebolada", "Frango a Passarinho", "Pateis de Queijo e Carne", "Kibe com Queijo", "Kibe sem Queijo", "Batata Frita", "Arroz Carreteiro"],
      CALDOS: ["Caldo de Carne Seca com Abobora", "Caldo de Costela com Mandioca"],
      EMPRATADOS: ["Isca de Frango com Bechamel de Baroa", "Escondidinho de Carne Seca com Parmesão"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  junina: {
    id: "junina",
    name: "Festa Junina",
    description: "Comidas típicas e decoração temática",
    hasOpcionais: false,
    menu: {
      PRATOS_TIPICOS: ["Cachorro Quente", "Arroz Carreteiro", "Galinhada", "Vinagrete", "Milho Cozido", "Canjica de Amendoin", "Bolo de Milho", "Bolo de Chocolate"],
      CALDOS: ["Caldo verde", "Caldo de Frango com Milho"],
      CHURRASQUINHOS: ["Espetinho de carne", "Espetinho de frango", "Espetinho de linguiça", "Espetinho de Coração de Frango"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  },
  feijoada: {
    id: "feijoada",
    name: "Feijoada Mineira ",
    description: "Feijoada completa com acompanhamentos tradicionais",
    hasOpcionais: false,
    menu: {
      ENTRADAS: ["Caldinho de Feijão", "Pastel de Queijo e Carne", "Linguiça Acebolada com Pães"],
      FEIJOADA: ["Feijoada de Carne Seca", "Feijoada de Costelinha Suina e Lombinho", "Feijoada de Paio e Calabresa"],  
      GUARNIÇÕES: ["Arroz branco", "Farofa crocante", "Couve refogada", "Laranja fatiada", "Torresmo crocante", "Molho de pimenta"],
      BEBIDAS: ["Coca Cola Comum", "Coca Cola Zero Açucar", "Guaraná", "Suco de Caju", "Suco de Abacaxi"]
    }
  }
};

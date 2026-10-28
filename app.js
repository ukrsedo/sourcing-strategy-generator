const PROXY_URL =
  "https://goodspending-ai-gateway.ukrsedo-e2e.workers.dev/sourcing-strategy";

const UI = {
  en: {
    title: "Sourcing Strategy Generator",
    eyebrow: "AI-enabled procurement tool",
    intro: "Describe the sourcing requirement, commercial context, supplier position and key risks. The tool will produce a structured procurement strategy aligned with the relevant category portfolio.",
    reportLanguage: "Report language",
    sections: [
      "1. Requirement",
      "2. Stakeholders and objectives",
      "3. Supplier and market",
      "4. Constraints and risks"
    ],
    labels: {
      requestTitle: "Request title",
      requirementDescription: "Requirement description",
      cpvCode: "CPV code",
      sourcingSubject: "Sourcing subject",
      commercialImportance: "Commercial importance",
      buyclass: "Buy class",
      sourcingProcessType: "Sourcing process type",
      needByDate: "Need-by date",
      specificationMaturity: "Specification maturity",
      stakeholderAlignment: "Stakeholder alignment",
      incumbentSupplier: "Incumbent supplier",
      associationLength: "Association length",
      supplierPerformance: "Supplier performance",
      marketCompetition: "Market competition",
      kraljicPosition: "Kraljic position",
      supplierPreferencing: "Supplier preferencing",
      competitiveStrategy: "Competitive strategy",
      businessConstraints: "Business constraints"
    },
    groupLabels: {
      stakeholderIntent: "Stakeholder intent",
      categoryManagerIntent: "Category manager intent",
      supplyRisks: "Supply risks"
    },
    buttons: {
      sample: "Insert sample data",
      submit: "Generate strategy",
      working: "Generating...",
      print: "Print or save as PDF"
    },
    resultTitle: "Generated sourcing strategy",
    messages: {
      sample: "Sample data inserted.",
      required: "Select at least one stakeholder intent, category manager intent, and supply risk.",
      invalidCPV: "Enter a valid CPV code: 2 digits, 8 digits, or 8 digits followed by a hyphen and check digit.",
      invalidNeedByDate: "Need-by date must be today or a future date.",
      working: "Generating the sourcing strategy. This may take a minute.",
      success: "Sourcing strategy generated successfully.",
      failed: "The sourcing strategy could not be generated.",
      noReport: "The response did not contain a report."
    }
  },

  uk: {
    title: "Генератор стратегії закупівель",
    eyebrow: "ІНСТРУМЕНТ ЗАКУПІВЕЛЬ ІЗ ПІДТРИМКОЮ ШІ",
    intro: "Опишіть предмет закупівлі, комерційний контекст, позицію постачальника та ключові ризики. Інструмент сформує структуровану стратегію закупівлі з урахуванням відповідного категорійного портфеля.",
    reportLanguage: "Мова звіту",
    sections: [
      "1. Потреба",
      "2. Стейкхолдери та цілі",
      "3. Постачальник і ринок",
      "4. Обмеження та ризики"
    ],
    labels: {
      requestTitle: "Назва запиту",
      requirementDescription: "Опис потреби",
      cpvCode: "Код CPV",
      sourcingSubject: "Предмет закупівлі",
      commercialImportance: "Комерційна важливість",
      buyclass: "Клас закупівлі",
      sourcingProcessType: "Процедура закупівлі",
      needByDate: "Потрібно до",
      specificationMaturity: "Готовність специфікації",
      stakeholderAlignment: "Узгодженість зі стейкхолдерами",
      incumbentSupplier: "Чинний постачальник",
      associationLength: "Тривалість співпраці з чинним постачальником",
      supplierPerformance: "Якість роботи чинного постачальника",
      marketCompetition: "Конкуренція на ринку",
      kraljicPosition: "Позиція за матрицею Краліча",
      supplierPreferencing: "Сприйняття замовника постачальником",
      competitiveStrategy: "Конкурентна стратегія",
      businessConstraints: "Бізнес-обмеження"
    },
    groupLabels: {
      stakeholderIntent: "Цілі стейкхолдерів",
      categoryManagerIntent: "Цілі категорійного менеджера",
      supplyRisks: "Ризики постачання"
    },
    buttons: {
      sample: "Заповнити прикладом",
      submit: "Сформувати стратегію",
      working: "Формування...",
      print: "Друк або збереження в PDF"
    },
    resultTitle: "Сформовано стратегію закупівлі",
    messages: {
      sample: "Приклад заповнено.",
      required: "Оберіть щонайменше одну ціль стейкхолдерів, одну ціль категорійного менеджера та один ризик постачання.",
      invalidCPV: "Введіть коректний код CPV: 2 цифри, 8 цифр або 8 цифр, дефіс і контрольна цифра.",
      invalidNeedByDate: "Дата потреби має бути сьогоднішньою або майбутньою.",
      working: "Формується стратегія закупівлі. Це може тривати близько хвилини.",
      success: "Стратегію закупівлі успішно сформовано.",
      failed: "Не вдалося сформувати стратегію закупівлі.",
      noReport: "У відповіді немає звіту."
    }
  },

  pt: {
    title: "Gerador de Estratégia de Sourcing",
    eyebrow: "FERRAMENTA DE PROCUREMENT COM IA",
    intro: "Descreva a necessidade de sourcing, o contexto comercial, a posição do fornecedor e os principais riscos. A ferramenta produzirá uma estratégia estruturada e alinhada com o portfólio de categoria relevante.",
    reportLanguage: "Idioma do relatório",
    sections: [
      "1. Necessidade",
      "2. Stakeholders e objetivos",
      "3. Fornecedor e mercado",
      "4. Restrições e riscos"
    ],
    labels: {
      requestTitle: "Título da solicitação",
      requirementDescription: "Descrição da necessidade",
      cpvCode: "Código CPV",
      sourcingSubject: "Objeto da contratação",
      commercialImportance: "Importância comercial",
      buyclass: "Classe de compra",
      sourcingProcessType: "Processo de sourcing",
      needByDate: "Data necessária",
      specificationMaturity: "Maturidade da especificação",
      stakeholderAlignment: "Alinhamento dos stakeholders",
      incumbentSupplier: "Fornecedor atual",
      associationLength: "Duração da relação",
      supplierPerformance: "Desempenho do fornecedor",
      marketCompetition: "Concorrência de mercado",
      kraljicPosition: "Posição na matriz de Kraljic",
      supplierPreferencing: "Preferência do fornecedor",
      competitiveStrategy: "Estratégia competitiva",
      businessConstraints: "Restrições do negócio"
    },
    groupLabels: {
      stakeholderIntent: "Objetivos dos stakeholders",
      categoryManagerIntent: "Objetivos do gestor de categoria",
      supplyRisks: "Riscos de fornecimento"
    },
    buttons: {
      sample: "Inserir dados de exemplo",
      submit: "Gerar estratégia",
      working: "Gerando...",
      print: "Imprimir ou salvar em PDF"
    },
    resultTitle: "Estratégia de sourcing gerada",
    messages: {
      sample: "Dados de exemplo inseridos.",
      required: "Selecione pelo menos um objetivo dos stakeholders, um objetivo do gestor de categoria e um risco de fornecimento.",
      invalidCPV: "Introduza um código CPV válido: 2 dígitos, 8 dígitos ou 8 dígitos seguidos de hífen e dígito de controlo.",
      invalidNeedByDate: "A data necessária deve ser hoje ou uma data futura.",
      working: "A estratégia de sourcing está sendo gerada. Isso pode levar cerca de um minuto.",
      success: "Estratégia de sourcing gerada com sucesso.",
      failed: "Não foi possível gerar a estratégia de sourcing.",
      noReport: "A resposta não contém um relatório."
    }
  }
};

const HELP = {
  en: {
    cpvCode:
      'Enter the relevant CPV code or <a href="https://cpvcodes.eu/en" target="_blank" rel="noopener noreferrer">select it here</a>. The code determines which category portfolio guidance will be applied to the recommendation.',
    commercialImportance:
      "Assess the requirement’s relative commercial importance to your organization. Do not use expected spend alone; consider business impact, urgency, dependency, and consequences of failure.",
    buyclass:
      "Select whether this is a routine repeat purchase, a repeat purchase with changed requirements, or a genuinely new requirement.",
    specificationMaturity:
      "Indicate how clearly the requirement is defined. Less mature specifications normally require additional discovery before the sourcing process begins.",
    stakeholderAlignment:
      "Assess the degree of agreement between Procurement and the internal requirement owners, including priorities, scope, timing, and decision criteria.",
    marketCompetition:
      "Assess how many realistic and qualified suppliers could compete, from 1 — no realistic alternative to 5 — many viable suppliers.",
    kraljicPosition:
      "Classify the category by commercial impact and supply risk: Routine, Leverage, Bottleneck, or Strategic.",
    supplierPreferencing:
      "Assess how the incumbent supplier is likely to view your organization as a customer. Core means strategically important; Development means worth growing; Exploitable means commercially valuable but not strategically important; Nuisance means low value and low attractiveness. When there is no incumbent supplier, this field is automatically set to N/A.",
    businessConstraints:
      "Describe practical constraints or concerns such as tight deadlines, operational dependency, budget limits, transition risks, internal capability gaps, or excessive reliance on the incumbent supplier.",
    multipleOptions:
      "You may select multiple options.",
    supplyRisksExplanation:
      "Supply risks relate to the external market from which the required goods or services are sourced."
  },

  uk: {
    cpvCode:
      'Введіть відповідний код CPV або <a href="https://cpvcodes.eu/en" target="_blank" rel="noopener noreferrer">оберіть його тут</a>. За цим кодом система визначає категорійний портфель і застосовує відповідні рекомендації.',
    commercialImportance:
      "Оцініть відносну комерційну важливість закупівлі для вашої організації. Не орієнтуйтеся лише на очікувану вартість; врахуйте вплив на бізнес, терміновість, залежності та наслідки невдалої закупівлі.",
    buyclass:
      "Визначте, чи це стандартна повторна закупівля, повторна закупівля зі зміненими вимогами або принципово нова потреба.",
    specificationMaturity:
      "Оцініть, наскільки чітко визначено потребу. Якщо специфікація недостатньо опрацьована, до початку закупівлі може знадобитися додаткове дослідження.",
    stakeholderAlignment:
      "Оцініть рівень узгодженості між закупівельниками та внутрішніми замовниками щодо пріоритетів, обсягу, строків і критеріїв прийняття рішення.",
    marketCompetition:
      "Оцініть кількість реальних кваліфікованих постачальників: від 1 — немає реальної альтернативи до 5 — багато життєздатних постачальників.",
    kraljicPosition:
      "Визначте позицію категорії за комерційним впливом і ризиком постачання: некритична, важільна, дефіцитна або стратегічна.",
    supplierPreferencing:
      "Оцініть, як чинний постачальник сприймає вашу організацію як клієнта. Core — стратегічно важливий клієнт; Development — перспективний для розвитку; Exploitable — прибутковий, але не стратегічний; Nuisance — малопривабливий і малоприбутковий. Якщо чинного постачальника немає, поле автоматично отримує значення «Не застосовується».",
    businessConstraints:
      "Опишіть практичні обмеження або занепокоєння: стислі строки, операційну залежність, бюджетні обмеження, ризики переходу, нестачу внутрішніх ресурсів або надмірну залежність від чинного постачальника.",
    multipleOptions:
      "Можна обрати кілька варіантів.",
    supplyRisksExplanation:
      "Ризики постачання стосуються зовнішнього ринку, на якому закуповуються необхідні товари або послуги."
  },

  pt: {
    cpvCode:
      'Introduza o código CPV relevante ou <a href="https://cpvcodes.eu/en" target="_blank" rel="noopener noreferrer">selecione-o aqui</a>. O código determina qual orientação do portfólio de categoria será aplicada à recomendação.',
    commercialImportance:
      "Avalie a importância comercial relativa da contratação para a sua organização. Não considere apenas o valor estimado; considere também o impacto no negócio, a urgência, as dependências e as consequências de uma contratação malsucedida.",
    buyclass:
      "Indique se esta é uma recompra de rotina, uma recompra com requisitos alterados ou uma necessidade totalmente nova.",
    specificationMaturity:
      "Indique o grau de definição da necessidade. Especificações menos maduras normalmente exigem investigação adicional antes do início do processo de sourcing.",
    stakeholderAlignment:
      "Avalie o grau de alinhamento entre Procurement e os responsáveis internos pela necessidade quanto a prioridades, escopo, prazos e critérios de decisão.",
    marketCompetition:
      "Avalie quantos fornecedores realistas e qualificados poderiam competir: de 1 — sem alternativa realista a 5 — muitos fornecedores viáveis.",
    kraljicPosition:
      "Classifique a categoria de acordo com o impacto comercial e o risco de fornecimento: Rotina, Alavancagem, Gargalo ou Estratégica.",
    supplierPreferencing:
      "Avalie como o fornecedor atual provavelmente vê a sua organização como cliente. Core significa cliente estratégico; Development, cliente com potencial de crescimento; Exploitable, cliente comercialmente valioso mas não estratégico; Nuisance, cliente de baixo valor e baixa atratividade. Quando não existe fornecedor atual, o campo é automaticamente definido como N/A.",
    businessConstraints:
      "Descreva restrições ou preocupações práticas, como prazos curtos, dependência operacional, limites orçamentais, riscos de transição, falta de capacidade interna ou dependência excessiva do fornecedor atual.",
    multipleOptions:
      "Pode selecionar várias opções.",
    supplyRisksExplanation:
      "Os riscos de fornecimento estão relacionados com o mercado externo onde são adquiridos os bens ou serviços necessários."
  }
};
const OPTIONS = {
  uk: {
    Select: "Оберіть",
    Goods: "Товари",
    Services: "Послуги",
    Works: "Роботи",
    Mixed: "Змішаний предмет закупівлі",
    Low: "Низька",
    Medium: "Середня",
    High: "Висока",
    Critical: "Критична",
    "New buy": "Нова закупівля",
    "Modified rebuy": "Повторна закупівля зі змінами",
    "Straight rebuy": "Повторна закупівля без змін",
    Tender: "Тендер",
    "Contract renewal": "Продовження договору",
    "Single source": "Закупівля в одного постачальника",
    "Sole source": "Єдиний можливий постачальник",
    Negotiations: "Переговори",
"E-Auction": "Електронний аукціон",
"Single Source": "Закупівля в одного постачальника",
"Framework Agreement": "Рамкова угода",
"20% Extension": "Продовження на 20%",
"Current Contract": "Чинний договір",
"Emergency procurement": "Закупівля в надзвичайних обставинах",
"Trial or POC": "Пілотний проєкт або POC (перевірка концепції)",
    "Not developed": "Не розроблена",
    "Partially developed": "Частково розроблена",
    "Well developed": "Добре розроблена",
    "Fully approved": "Повністю погоджена",
    "Not aligned": "Не узгоджені",
    "Partially aligned": "Частково узгоджені",
    "Fully aligned": "Повністю узгоджені",
    Yes: "Так",
    No: "Ні",
    "N/A": "Не застосовується",
    "No incumbent supplier": "Немає чинного постачальника",
    "Less than 1 year": "Менше 1 року",
    "1–3 years": "1–3 роки",
    "More than 3 years": "Понад 3 роки",
    Poor: "Незадовільна",
    Weak: "Слабка",
    Acceptable: "Прийнятна",
    Strong: "Висока",
    Satisfactory: "Задовільна",
    Good: "Добра",
    Excellent: "Відмінна",
    Moderate: "Середня",
    "1 — Single source / no realistic alternative": "1 — Єдине джерело / немає реальної альтернативи",
    "2 — Limited alternatives": "2 — Обмежені альтернативи",
    "3 — Some competition": "3 — Певна конкуренція",
    "4 — Strong competition": "4 — Сильна конкуренція",
    "5 — Near-perfect competition / many viable suppliers": "5 — Майже досконала конкуренція / багато життєздатних постачальників",
    Routine: "Некритична",
    Leverage: "Важільна",
    Bottleneck: "Дефіцитна",
    Strategic: "Стратегічна",
    Nuisance: "Непривабливий клієнт",
    Exploitable: "Клієнт для отримання максимальної вигоди",
    Development: "Клієнт, що розвивається",
    Core: "Ключовий клієнт",
    "Competitive tender": "Конкурентний тендер",
    "Negotiated competition": "Конкурентні переговори",
    "Direct negotiation": "Прямі переговори",
    "Supplier development": "Розвиток постачальника"
  },
  pt: {
    Select: "Selecionar",
    Goods: "Bens",
    Services: "Serviços",
    Works: "Obras",
    Mixed: "Misto",
    Low: "Baixa",
    Medium: "Média",
    High: "Alta",
    Critical: "Crítica",
    "New buy": "Nova compra",
    "Modified rebuy": "Recompra modificada",
    "Straight rebuy": "Recompra direta",
    Tender: "Licitação",
    "Contract renewal": "Renovação contratual",
    "Single source": "Fonte única",
    "Sole source": "Fornecedor exclusivo",
    Negotiations: "Negociações",
"E-Auction": "Leilão eletrónico",
"Single Source": "Fonte única",
"Framework Agreement": "Acordo-quadro",
"20% Extension": "Extensão de 20%",
"Current Contract": "Contrato atual",
"Emergency procurement": "Contratação de emergência",
"Trial or POC": "Piloto ou POC",
    "Not developed": "Não desenvolvida",
    "Partially developed": "Parcialmente desenvolvida",
    "Well developed": "Bem desenvolvida",
    "Fully approved": "Totalmente aprovada",
    "Not aligned": "Não alinhados",
    "Partially aligned": "Parcialmente alinhados",
    "Fully aligned": "Totalmente alinhados",
    Yes: "Sim",
    No: "Não",
    "N/A": "N/A",
    "No incumbent supplier": "Sem fornecedor atual",
    "Less than 1 year": "Menos de 1 ano",
    "1–3 years": "1–3 anos",
    "More than 3 years": "Mais de 3 anos",
    Poor: "Fraco",
    Weak: "Fraco",
    Acceptable: "Aceitável",
    Strong: "Forte",
    Satisfactory: "Satisfatório",
    Good: "Bom",
    Excellent: "Excelente",
    Moderate: "Moderada",
    "1 — Single source / no realistic alternative": "1 — Fonte única / sem alternativa realista",
    "2 — Limited alternatives": "2 — Alternativas limitadas",
    "3 — Some competition": "3 — Alguma concorrência",
    "4 — Strong competition": "4 — Concorrência forte",
    "5 — Near-perfect competition / many viable suppliers": "5 — Concorrência quase perfeita / muitos fornecedores viáveis",
    Routine: "Rotina",
    Leverage: "Alavancagem",
    Bottleneck: "Gargalo",
    Strategic: "Estratégica",
    Nuisance: "Nuisance",
    Exploitable: "Explorável",
    Development: "Desenvolvimento",
    Core: "Principal",
    "Competitive tender": "Licitação competitiva",
    "Negotiated competition": "Competição negociada",
    "Direct negotiation": "Negociação direta",
    "Supplier development": "Desenvolvimento do fornecedor"
  }
};

const CHECKBOXES = {
  uk: {
    "Maintain business continuity": "Забезпечити безперервність бізнесу",
    "Renew as soon as possible": "Якнайшвидше продовжити договір",
    "Improve service quality": "Підвищити якість послуг",
    "Enable business growth": "Підтримати розвиток бізнесу",
    "Introduce innovation": "Запровадити інновації",
    "Minimise disruption": "Мінімізувати перебої",
    "Reduce cost": "Знизити витрати",
    "Increase competition": "Посилити конкуренцію",
    "Reduce supplier dependency": "Зменшити залежність від постачальника",
    "Improve contract control": "Посилити контроль договору",
    "Improve supplier performance": "Покращити якість роботи постачальника",
    "Support innovation": "Підтримати інновації",
    "Supplier dependency": "Залежність від постачальника",
    "Service disruption": "Призупинення надання послуг",
    "Limited competition": "Обмежена конкуренція",
    "Price escalation": "Зростання цін",
    "Specification uncertainty": "Невизначеність специфікації",
    "Implementation risk": "Ризик впровадження",
    "Technology lock-in": "Технологічна залежність",
    "Regulatory risk": "Регуляторний ризик"
  },
  pt: {
    "Maintain business continuity": "Manter a continuidade do negócio",
    "Renew as soon as possible": "Renovar o mais rápido possível",
    "Improve service quality": "Melhorar a qualidade do serviço",
    "Enable business growth": "Apoiar o crescimento do negócio",
    "Introduce innovation": "Introduzir inovação",
    "Minimise disruption": "Minimizar interrupções",
    "Reduce cost": "Reduzir custos",
    "Increase competition": "Aumentar a concorrência",
    "Reduce supplier dependency": "Reduzir a dependência do fornecedor",
    "Improve contract control": "Melhorar o controle contratual",
    "Improve supplier performance": "Melhorar o desempenho do fornecedor",
    "Support innovation": "Apoiar a inovação",
    "Supplier dependency": "Dependência do fornecedor",
    "Service disruption": "Interrupção do serviço",
    "Limited competition": "Concorrência limitada",
    "Price escalation": "Escalada de preços",
    "Specification uncertainty": "Incerteza da especificação",
    "Implementation risk": "Risco de implementação",
    "Technology lock-in": "Aprisionamento tecnológico",
    "Regulatory risk": "Risco regulatório"
  }
};

const form = document.getElementById("strategyForm");
const submitButton = document.getElementById("submitButton");
const sampleButton = document.getElementById("sampleButton");
const printButton = document.getElementById("printButton");
const statusMessage = document.getElementById("statusMessage");
const resultSection = document.getElementById("resultSection");
const reportOutput = document.getElementById("reportOutput");
const languageSelect = document.getElementById("language");
const cpvCodeInput = document.getElementById("cpvCode");
const needByDateInput = document.getElementById("needByDate");
const incumbentSupplierSelect = document.getElementById("incumbentSupplier");
const incumbentDependentFields = [
  document.getElementById("associationLength"),
  document.getElementById("supplierPerformance"),
  document.getElementById("supplierPreferencing")
];
const NO_INCUMBENT_VALUE = "N/A - no incumbent supplier";

document.querySelectorAll("select option").forEach(option => {
  option.dataset.en = option.textContent.trim();
});

document.querySelectorAll(".checkbox-grid label").forEach(label => {
  const input = label.querySelector("input");
  if (input) label.dataset.en = input.value;
});

function currentUI() {
  return UI[languageSelect.value] || UI.en;
}

function value(id) {
  return document.getElementById(id).value.trim();
}

function checkedValues(containerId) {
  return Array.from(
    document.querySelectorAll(`#${containerId} input:checked`)
  ).map(input => input.value);
}

function setCheckedValues(containerId, selectedValues) {
  document.querySelectorAll(`#${containerId} input`).forEach(input => {
    input.checked = selectedValues.includes(input.value);
  });
}

function showStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${type}`.trim();
}

function localISODate(offsetDays = 0) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + offsetDays);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isValidCPVCode(code) {
  return /^(?:\d{2}|\d{8}|\d{8}-\d)$/.test(code);
}

function syncIncumbentFields() {
  const noIncumbent = incumbentSupplierSelect.value === "No";

  incumbentDependentFields.forEach(field => {
    const notApplicableOption = Array.from(field.options).find(
      option => option.value === NO_INCUMBENT_VALUE
    );

    if (notApplicableOption) notApplicableOption.disabled = !noIncumbent;

    if (noIncumbent) {
      field.value = NO_INCUMBENT_VALUE;
      field.disabled = true;
      field.required = false;
    } else {
      field.disabled = false;
      field.required = true;
      if (field.value === NO_INCUMBENT_VALUE) field.value = "";
    }
  });
}

function applyLanguage() {
  const language = languageSelect.value;
  const ui = currentUI();

  document.documentElement.lang = language;
  document.querySelector(".eyebrow").textContent = ui.eyebrow;
  document.querySelector("h1").textContent = ui.title;
  document.querySelector(".intro-text").textContent = ui.intro;
  document.querySelector(".language-row label").textContent = ui.reportLanguage;
  document.querySelector('[data-help="commercialImportance"]').textContent =
  HELP[language].commercialImportance;

  document.querySelectorAll(".form-section h2").forEach((heading, index) => {
    heading.textContent = ui.sections[index];
  });

  Object.entries(ui.labels).forEach(([id, text]) => {
    const label = document.querySelector(`label[for="${id}"]`);
    if (label) label.textContent = text;
  });

  document.querySelectorAll("[data-help]").forEach(element => {
  const key = element.dataset.help;
  element.innerHTML =
  HELP[language]?.[key] ||
  HELP.en[key] ||
  element.innerHTML;
});

  document.querySelector("#stakeholderIntent")
  .parentElement.querySelector("label").textContent =
  ui.groupLabels.stakeholderIntent;

document.querySelector("#categoryManagerIntent")
  .parentElement.querySelector("label").textContent =
  ui.groupLabels.categoryManagerIntent;

document.querySelector("#supplyRisks")
  .parentElement.querySelector("label").textContent =
  ui.groupLabels.supplyRisks;

  document.querySelectorAll("select option").forEach(option => {
    const english = option.dataset.en;
    option.textContent = OPTIONS[language]?.[english] || english;
  });

  document.querySelectorAll(".checkbox-grid label").forEach(label => {
    const input = label.querySelector("input");
    const english = label.dataset.en;
    const text = CHECKBOXES[language]?.[english] || english;
    label.replaceChildren(input, document.createTextNode(` ${text}`));
  });

  sampleButton.textContent = ui.buttons.sample;
  submitButton.textContent = ui.buttons.submit;
  printButton.textContent = ui.buttons.print;
  document.querySelector(".result-header h2").textContent = ui.resultTitle;
  showStatus("");
}

function buildPayload() {
  return {
    Language: value("language"),
    RequestTitle: value("requestTitle"),
    RequirementDescription: value("requirementDescription"),
    CommercialImportance: value("commercialImportance"),
    Buyclass: value("buyclass"),
    SourcingProcessType: value("sourcingProcessType"),
    NeedByDate: value("needByDate"),
    SpecificationMaturity: value("specificationMaturity"),
    StakeholderAlignment: value("stakeholderAlignment"),
    SupplierPerformance: value("supplierPerformance"),
    MarketCompetition: value("marketCompetition"),
    BusinessConstraints: value("businessConstraints"),
    IncumbentSupplier: value("incumbentSupplier"),
    AssociationLength: value("associationLength"),
    KraljicPosition: value("kraljicPosition"),
    SupplierPreferencing: value("supplierPreferencing"),
    CPVCode: value("cpvCode"),
    SourcingSubject: value("sourcingSubject"),
    CompetitiveStrategy: value("competitiveStrategy"),
    StakeholderIntent: checkedValues("stakeholderIntent"),
    CategoryManagerIntent: checkedValues("categoryManagerIntent"),
    SupplyRisks: checkedValues("supplyRisks")
  };
}

languageSelect.addEventListener("change", applyLanguage);
incumbentSupplierSelect.addEventListener("change", syncIncumbentFields);

sampleButton.addEventListener("click", () => {
  document.getElementById("requestTitle").value =
    "Office printing paper procurement";
  document.getElementById("requirementDescription").value =
    "Routine purchase of standard office printing paper with clearly defined specifications.";
  document.getElementById("cpvCode").value = "30197630";
  document.getElementById("sourcingSubject").value = "Goods";
  document.getElementById("commercialImportance").value = "Low";
  document.getElementById("buyclass").value = "Straight rebuy";
  document.getElementById("sourcingProcessType").value = "RFQ";
  document.getElementById("needByDate").value = localISODate(60);
  document.getElementById("specificationMaturity").value =
    "Fully approved";
  document.getElementById("stakeholderAlignment").value =
    "Fully aligned";
  document.getElementById("incumbentSupplier").value = "No";
  syncIncumbentFields();
  document.getElementById("marketCompetition").value =
    "5 — Near-perfect competition / many viable suppliers";
  document.getElementById("kraljicPosition").value = "Routine";
  document.getElementById("competitiveStrategy").value =
    "Competitive tender";
  document.getElementById("businessConstraints").value =
    "Standard specifications and multiple viable suppliers; use a proportionate, price-focused process.";

  setCheckedValues("stakeholderIntent", ["Minimise disruption"]);
  setCheckedValues("categoryManagerIntent", [
    "Reduce cost",
    "Increase competition"
  ]);
  setCheckedValues("supplyRisks", ["Price escalation"]);

  showStatus(currentUI().messages.sample);
});

form.addEventListener("submit", async event => {
  event.preventDefault();

  const ui = currentUI();
  const payload = buildPayload();

  if (!isValidCPVCode(payload.CPVCode)) {
    showStatus(ui.messages.invalidCPV, "error");
    cpvCodeInput.focus();
    return;
  }

  if (payload.NeedByDate < localISODate()) {
    showStatus(ui.messages.invalidNeedByDate, "error");
    needByDateInput.focus();
    return;
  }

  if (
    payload.StakeholderIntent.length === 0 ||
    payload.CategoryManagerIntent.length === 0 ||
    payload.SupplyRisks.length === 0
  ) {
    showStatus(ui.messages.required, "error");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = ui.buttons.working;
  resultSection.hidden = true;
  reportOutput.innerHTML = "";
  showStatus(ui.messages.working);

  try {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const responseText = await response.text();
    let data;

    try {
      data = JSON.parse(responseText);
    } catch {
      data = { message: responseText };
    }

    if (!response.ok || data.success !== true) {
      if (data.errorCode === "INVALID_CPV_CODE") {
        throw new Error(ui.messages.invalidCPV);
      }
      if (data.errorCode === "INVALID_NEED_BY_DATE") {
        throw new Error(ui.messages.invalidNeedByDate);
      }
      throw new Error(
        data.message ||
        data.error ||
        `Request failed with status ${response.status}.`
      );
    }

    if (!data.reportHtml) {
      throw new Error(ui.messages.noReport);
    }

    reportOutput.innerHTML = data.reportHtml;
    resultSection.hidden = false;
    showStatus(ui.messages.success, "success");

    resultSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } catch (error) {
    showStatus(
      error instanceof Error ? error.message : ui.messages.failed,
      "error"
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = ui.buttons.submit;
  }
});

printButton.addEventListener("click", () => window.print());

needByDateInput.min = localISODate();
syncIncumbentFields();
applyLanguage();

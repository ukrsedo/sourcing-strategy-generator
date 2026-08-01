const PROXY_URL =
  "https://sourcing-strategy-proxy.ukrsedo-e2e.workers.dev/";

const UI = {
  en: {
    title: "Sourcing Strategy Generator",
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
      required: "Select at least one stakeholder intent, category manager intent and supply risk.",
      working: "Generating the sourcing strategy. This may take a minute.",
      success: "Sourcing strategy generated successfully.",
      failed: "The sourcing strategy could not be generated.",
      noReport: "The response did not contain a report."
    }
  },

  uk: {
    title: "Генератор стратегії закупівель",
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
      buyclass: "Тип закупівельної ситуації",
      sourcingProcessType: "Процедура закупівлі",
      needByDate: "Потрібно до",
      specificationMaturity: "Готовність специфікації",
      stakeholderAlignment: "Узгодженість стейкхолдерів",
      incumbentSupplier: "Чинний постачальник",
      associationLength: "Тривалість співпраці",
      supplierPerformance: "Результативність постачальника",
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
    resultTitle: "Сформована стратегія закупівлі",
    messages: {
      sample: "Приклад заповнено.",
      required: "Оберіть щонайменше одну ціль стейкхолдерів, одну ціль категорійного менеджера та один ризик постачання.",
      working: "Формується стратегія закупівлі. Це може тривати близько хвилини.",
      success: "Стратегію закупівлі успішно сформовано.",
      failed: "Не вдалося сформувати стратегію закупівлі.",
      noReport: "У відповіді немає звіту."
    }
  },

  pt: {
    title: "Gerador de Estratégia de Sourcing",
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
      working: "A estratégia de sourcing está sendo gerada. Isso pode levar cerca de um minuto.",
      success: "Estratégia de sourcing gerada com sucesso.",
      failed: "Não foi possível gerar a estratégia de sourcing.",
      noReport: "A resposta não contém um relatório."
    }
  }
};

const HELP = {
  en: {
    commercialImportance:
      "Assess the requirement’s relative commercial importance to your organization. Do not use expected spend alone; consider business impact, urgency, dependency, and consequences of failure."
  },
  uk: {
    commercialImportance:
      "Оцініть відносну комерційну важливість цієї закупівлі для вашої організації. Не орієнтуйтеся лише на очікувану вартість; врахуйте вплив на бізнес, терміновість, залежності та наслідки невдалої закупівлі."
  },
  pt: {
    commercialImportance:
      "Avalie a importância comercial relativa desta contratação para a sua organização. Não considere apenas o valor estimado; leve também em conta o impacto no negócio, a urgência, as dependências e as consequências de uma contratação malsucedida."
  }
};

const OPTIONS = {
  uk: {
    Select: "Оберіть",
    Goods: "Товари",
    Services: "Послуги",
    Works: "Роботи",
    Mixed: "Змішаний предмет",
    Low: "Низька",
    Medium: "Середня",
    High: "Висока",
    Critical: "Критична",
    "New buy": "Нова закупівля",
    "Modified rebuy": "Змінена повторна закупівля",
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
"Emergency procurement": "Нагальна закупівля",
"Trial or POC": "Пілотний проєкт або POC",
    "Not developed": "Не розроблена",
    "Partially developed": "Частково розроблена",
    "Well developed": "Добре розроблена",
    "Fully approved": "Повністю погоджена",
    "Not aligned": "Не узгоджені",
    "Partially aligned": "Частково узгоджені",
    "Fully aligned": "Повністю узгоджені",
    Yes: "Так",
    No: "Ні",
    "No incumbent supplier": "Немає чинного постачальника",
    "Less than 1 year": "Менше 1 року",
    "1–3 years": "1–3 роки",
    "More than 3 years": "Понад 3 роки",
    Poor: "Незадовільна",
    Satisfactory: "Задовільна",
    Good: "Добра",
    Excellent: "Відмінна",
    Moderate: "Середня",
    Routine: "Некритична",
    Leverage: "Важільна",
    Bottleneck: "Дефіцитна",
    Strategic: "Стратегічна",
    Nuisance: "Непривабливий клієнт",
    Exploitable: "Клієнт для максимізації вигоди",
    Development: "Клієнт для розвитку",
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
    Negotiation: "Negociação",
    "Direct award": "Adjudicação direta",
    "Not developed": "Não desenvolvida",
    "Partially developed": "Parcialmente desenvolvida",
    "Well developed": "Bem desenvolvida",
    "Fully approved": "Totalmente aprovada",
    "Not aligned": "Não alinhados",
    "Partially aligned": "Parcialmente alinhados",
    "Fully aligned": "Totalmente alinhados",
    Yes: "Sim",
    No: "Não",
    "No incumbent supplier": "Sem fornecedor atual",
    "Less than 1 year": "Menos de 1 ano",
    "1–3 years": "1–3 anos",
    "More than 3 years": "Mais de 3 anos",
    Poor: "Fraco",
    Satisfactory: "Satisfatório",
    Good: "Bom",
    Excellent: "Excelente",
    Moderate: "Moderada",
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
    "Improve supplier performance": "Підвищити результативність постачальника",
    "Support innovation": "Підтримати інновації",
    "Supplier dependency": "Залежність від постачальника",
    "Service disruption": "Переривання послуг",
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

function applyLanguage() {
  const language = languageSelect.value;
  const ui = currentUI();

  document.documentElement.lang = language;
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

  document.querySelector("#stakeholderIntent").previousElementSibling.textContent =
    ui.groupLabels.stakeholderIntent;
  document.querySelector("#categoryManagerIntent").previousElementSibling.textContent =
    ui.groupLabels.categoryManagerIntent;
  document.querySelector("#supplyRisks").previousElementSibling.textContent =
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

sampleButton.addEventListener("click", () => {
  document.getElementById("requestTitle").value =
    "Test IT services procurement";
  document.getElementById("requirementDescription").value =
    "Procurement of support and development services for a corporate IT system.";
  document.getElementById("cpvCode").value = "72000000";
  document.getElementById("sourcingSubject").value = "Services";
  document.getElementById("commercialImportance").value = "High";
  document.getElementById("buyclass").value = "New buy";
  document.getElementById("sourcingProcessType").value = "RFP";
  document.getElementById("needByDate").value = "2026-10-31";
  document.getElementById("specificationMaturity").value =
    "Partially developed";
  document.getElementById("stakeholderAlignment").value =
    "Partially aligned";
  document.getElementById("incumbentSupplier").value = "Yes";
  document.getElementById("associationLength").value =
    "More than 3 years";
  document.getElementById("supplierPerformance").value = "Satisfactory";
  document.getElementById("marketCompetition").value = "Moderate";
  document.getElementById("kraljicPosition").value = "Strategic";
  document.getElementById("supplierPreferencing").value = "Core";
  document.getElementById("competitiveStrategy").value =
    "Competitive tender";
  document.getElementById("businessConstraints").value =
    "Operational continuity must be maintained.";

  setCheckedValues("stakeholderIntent", ["Maintain business continuity"]);
  setCheckedValues("categoryManagerIntent", [
    "Increase competition",
    "Reduce supplier dependency"
  ]);
  setCheckedValues("supplyRisks", [
    "Supplier dependency",
    "Service disruption"
  ]);

  showStatus(currentUI().messages.sample);
});

form.addEventListener("submit", async event => {
  event.preventDefault();

  const ui = currentUI();
  const payload = buildPayload();

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

    const data = await response.json();

    if (!response.ok || data.success !== true) {
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

applyLanguage();

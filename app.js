const PROXY_URL =
  "https://sourcing-strategy-proxy.ukrsedo-e2e.workers.dev/";

const form = document.getElementById("strategyForm");
const submitButton = document.getElementById("submitButton");
const sampleButton = document.getElementById("sampleButton");
const printButton = document.getElementById("printButton");
const statusMessage = document.getElementById("statusMessage");
const resultSection = document.getElementById("resultSection");
const reportOutput = document.getElementById("reportOutput");

function value(id) {
  return document.getElementById(id).value.trim();
}

function checkedValues(containerId) {
  return Array.from(
    document.querySelectorAll(
      `#${containerId} input[type="checkbox"]:checked`
    )
  ).map(input => input.value);
}

function setCheckedValues(containerId, selectedValues) {
  document
    .querySelectorAll(`#${containerId} input[type="checkbox"]`)
    .forEach(input => {
      input.checked = selectedValues.includes(input.value);
    });
}

function showStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${type}`.trim();
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
    ProcurementType: value("procurementType"),
    StakeholderIntent: checkedValues("stakeholderIntent"),
    CategoryManagerIntent: checkedValues("categoryManagerIntent"),
    SupplyRisks: checkedValues("supplyRisks")
  };
}

sampleButton.addEventListener("click", () => {
  document.getElementById("language").value = "en";
  document.getElementById("requestTitle").value =
    "Test IT services procurement";
  document.getElementById("requirementDescription").value =
    "Procurement of support and development services for a corporate IT system.";
  document.getElementById("cpvCode").value = "72000000";
  document.getElementById("sourcingSubject").value = "Services";
  document.getElementById("commercialImportance").value = "High";
  document.getElementById("buyclass").value = "Strategic";
  document.getElementById("procurementType").value = "Tender";
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

  setCheckedValues("stakeholderIntent", [
    "Maintain business continuity"
  ]);

  setCheckedValues("categoryManagerIntent", [
    "Increase competition",
    "Reduce supplier dependency"
  ]);

  setCheckedValues("supplyRisks", [
    "Supplier dependency",
    "Service disruption"
  ]);

  showStatus("Sample data inserted.");
});

form.addEventListener("submit", async event => {
  event.preventDefault();

  const payload = buildPayload();

  if (
    payload.StakeholderIntent.length === 0 ||
    payload.CategoryManagerIntent.length === 0 ||
    payload.SupplyRisks.length === 0
  ) {
    showStatus(
      "Select at least one stakeholder intent, category manager intent and supply risk.",
      "error"
    );
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Generating...";
  resultSection.hidden = true;
  reportOutput.innerHTML = "";

  showStatus(
    "Generating the sourcing strategy. This may take a minute."
  );

  try {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const rawText = await response.text();

    let data;

    try {
      data = JSON.parse(rawText);
    } catch {
      throw new Error(
        `The server returned an invalid response: ${rawText.slice(0, 200)}`
      );
    }

    if (!response.ok || data.success !== true) {
      throw new Error(
        data.message ||
        data.error ||
        `Request failed with status ${response.status}.`
      );
    }

    if (!data.reportHtml) {
      throw new Error("The response did not contain a report.");
    }

    reportOutput.innerHTML = data.reportHtml;
    resultSection.hidden = false;

    showStatus("Sourcing strategy generated successfully.", "success");

    resultSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } catch (error) {
    showStatus(
      error instanceof Error
        ? error.message
        : "The sourcing strategy could not be generated.",
      "error"
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Generate strategy";
  }
});

printButton.addEventListener("click", () => {
  window.print();
});

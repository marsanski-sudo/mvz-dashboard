/* ============================================================
   MVZ Arzt-Dashboard — Demo-Anwendung
   Alle Patienten- und Befunddaten sind vollständig erfunden.
   ============================================================ */

const PATIENTS = [
  {
    id: "p1",
    patientNumber: "MVZ-100231",
    lastName: "Berger",
    firstName: "Anna",
    dob: "1958-03-14",
    gender: "weiblich",
    insurance: "AOK Plus",
    phone: "0341 55019822",
    address: "Lindenauer Str. 12, 04177 Leipzig",
    diagnoses: [
      { text: "Vorhofflimmern, permanent", since: "2019", note: "unter oraler Antikoagulation" },
      { text: "Diabetes mellitus Typ 2", since: "2015", note: "diätetisch und medikamentös eingestellt" },
      { text: "Arterielle Hypertonie", since: "2012", note: "" }
    ],
    allergies: [
      { substance: "Penicillin", reaction: "Anaphylaxie (Grad III) in der Anamnese", severity: "severe" }
    ],
    medications: [
      { name: "Phenprocoumon (Marcumar)", dose: "individuell nach INR", frequency: "1x tgl. abends", since: "03/2019" },
      { name: "Metformin", dose: "1000 mg", frequency: "2x tgl.", since: "06/2015" },
      { name: "Ramipril", dose: "5 mg", frequency: "1x tgl. morgens", since: "01/2012" }
    ],
    criticalNotes: [
      "Patientin steht unter Marcumar-Therapie – erhöhtes Blutungsrisiko, INR engmaschig kontrollieren."
    ],
    lastContact: {
      date: "2026-07-24",
      doctor: "Dr. med. J. Falk",
      reason: "INR-Kontrolle",
      summary: "Routinemäßige INR-Kontrolle bei bekanntem Vorhofflimmern unter Marcumar-Therapie. INR liegt mit 4,8 deutlich über dem Zielbereich, Dosisanpassung besprochen und Wiedervorstellung in 3 Tagen vereinbart."
    },
    history: [
      { date: "2026-07-24", label: "INR-Kontrolle", detail: "INR 4,8 – Marcumar pausiert, Wiedervorstellung in 3 Tagen vereinbart.", critical: true },
      { date: "2025-11-10", label: "Kardiologische Verlaufskontrolle", detail: "Echokardiografie unauffällig, Rhythmuskontrolle stabil." },
      { date: "2019-03-02", label: "Diagnosestellung Vorhofflimmern", detail: "Erstdiagnose nach stationärem Aufenthalt, Einleitung der oralen Antikoagulation." }
    ],
    tasks: [
      { text: "INR-Wert in 3 Tagen erneut kontrollieren", done: false },
      { text: "Marcumar-Dosis nach Kontrolle anpassen", done: false },
      { text: "HbA1c-Verlaufskontrolle terminieren", done: false }
    ],
    labs: {
      date: "2026-07-24",
      values: [
        { param: "INR", value: 4.8, unit: "", refLow: 0.8, refHigh: 1.2, criticalHigh: 4.0,
          alertText: "INR stark erhöht (4,8) – deutlich erhöhtes Blutungsrisiko unter Marcumar!" },
        { param: "Hämoglobin", value: 11.9, unit: "g/dl", refLow: 12.0, refHigh: 15.5 },
        { param: "HbA1c", value: 7.4, unit: "%", refLow: 4.0, refHigh: 6.0, criticalHigh: 9.0 },
        { param: "Kreatinin", value: 0.9, unit: "mg/dl", refLow: 0.5, refHigh: 1.1 },
        { param: "Kalium", value: 4.3, unit: "mmol/l", refLow: 3.5, refHigh: 5.0 },
        { param: "CRP", value: 3.1, unit: "mg/l", refLow: 0, refHigh: 5 }
      ]
    }
  },
  {
    id: "p2",
    patientNumber: "MVZ-100455",
    lastName: "Krüger",
    firstName: "Thomas",
    dob: "1971-11-02",
    gender: "männlich",
    insurance: "Barmer",
    phone: "0341 55018831",
    address: "Karl-Heine-Str. 88, 04229 Leipzig",
    diagnoses: [
      { text: "Chronische Niereninsuffizienz, Stadium G4", since: "2021", note: "nephrologisch mitbetreut" },
      { text: "Arterielle Hypertonie", since: "2010", note: "" }
    ],
    allergies: [
      { substance: "Kontrastmittel (jodhaltig)", reaction: "Urtikaria", severity: "moderate" }
    ],
    medications: [
      { name: "Torasemid", dose: "20 mg", frequency: "1x tgl. morgens", since: "02/2021" },
      { name: "Amlodipin", dose: "5 mg", frequency: "1x tgl.", since: "05/2010" },
      { name: "Natriumbicarbonat", dose: "1000 mg", frequency: "2x tgl.", since: "02/2021" }
    ],
    criticalNotes: [
      "Bei geplanter Bildgebung mit Kontrastmittel: nephrologische Rücksprache und Prämedikation wegen bekannter Unverträglichkeit erforderlich."
    ],
    lastContact: {
      date: "2026-07-21",
      doctor: "Dr. med. J. Falk",
      reason: "Nephrologische Verlaufskontrolle",
      summary: "Kontrolle der Nierenretentionswerte bei chronischer Niereninsuffizienz Stadium G4. Kalium akut erhöht, telefonische Rücksprache mit der Nephrologie noch am selben Tag veranlasst."
    },
    history: [
      { date: "2026-07-21", label: "Laborkontrolle", detail: "Kalium 6,1 mmol/l – nephrologische Rücksprache veranlasst.", critical: true },
      { date: "2024-05-15", label: "Progression zu Stadium G4", detail: "eGFR-Abfall auf < 20 ml/min, Vorstellung in der Shuntsprechstunde empfohlen." },
      { date: "2021-02-10", label: "Diagnosestellung", detail: "Chronische Niereninsuffizienz erstdiagnostiziert." }
    ],
    tasks: [
      { text: "Kalium-Wert kurzfristig kontrollieren", done: false },
      { text: "Nephrologische Rücksprache dokumentieren", done: false },
      { text: "Shuntsprechstunde terminieren", done: true }
    ],
    labs: {
      date: "2026-07-21",
      values: [
        { param: "Kreatinin", value: 3.4, unit: "mg/dl", refLow: 0.7, refHigh: 1.3, criticalHigh: 3.0,
          alertText: "Kreatinin stark erhöht (3,4 mg/dl) – passend zu fortgeschrittener Niereninsuffizienz." },
        { param: "eGFR", value: 18, unit: "ml/min", refLow: 60, refHigh: 120, criticalLow: 20,
          alertText: "eGFR kritisch niedrig (18 ml/min) – Stadium G4, engmaschige nephrologische Kontrolle." },
        { param: "Kalium", value: 6.1, unit: "mmol/l", refLow: 3.5, refHigh: 5.0, criticalHigh: 5.8,
          alertText: "Kalium kritisch erhöht (6,1 mmol/l) – Gefahr von Herzrhythmusstörungen, sofortige Kontrolle empfohlen!" },
        { param: "Natrium", value: 138, unit: "mmol/l", refLow: 135, refHigh: 145 },
        { param: "Hämoglobin", value: 10.4, unit: "g/dl", refLow: 13.5, refHigh: 17.5 },
        { param: "CRP", value: 2.0, unit: "mg/l", refLow: 0, refHigh: 5 }
      ]
    }
  },
  {
    id: "p3",
    patientNumber: "MVZ-100812",
    lastName: "Ostrowski",
    firstName: "Sabine",
    dob: "1986-06-29",
    gender: "weiblich",
    insurance: "TK",
    phone: "0341 55014477",
    address: "Merseburger Str. 5, 04177 Leipzig",
    diagnoses: [
      { text: "Z.n. Migräne ohne Aura", since: "2016", note: "aktuell beschwerdefrei" }
    ],
    allergies: [],
    medications: [
      { name: "Sumatriptan", dose: "50 mg", frequency: "b. Bedarf", since: "2016" }
    ],
    criticalNotes: [],
    lastContact: {
      date: "2026-07-15",
      doctor: "Dr. med. J. Falk",
      reason: "Jahresvorsorge",
      summary: "Unauffällige Vorsorgeuntersuchung. Patientin beschwerdefrei, Routinelabor im Normbereich, keine akuten Auffälligkeiten."
    },
    history: [
      { date: "2026-07-15", label: "Jahresvorsorge", detail: "Unauffälliger Befund, Routinelabor im Normbereich." },
      { date: "2016-04-01", label: "Diagnosestellung Migräne", detail: "Erstmanifestation, Einleitung einer Bedarfsmedikation." }
    ],
    tasks: [
      { text: "Nächste Vorsorgeuntersuchung in 12 Monaten terminieren", done: false }
    ],
    labs: {
      date: "2026-07-15",
      values: [
        { param: "Hämoglobin", value: 13.4, unit: "g/dl", refLow: 12.0, refHigh: 15.5 },
        { param: "Leukozyten", value: 6.2, unit: "/nl", refLow: 4.0, refHigh: 10.0 },
        { param: "Thrombozyten", value: 268, unit: "/nl", refLow: 150, refHigh: 400 },
        { param: "CRP", value: 1.2, unit: "mg/l", refLow: 0, refHigh: 5 },
        { param: "TSH", value: 1.9, unit: "mU/l", refLow: 0.4, refHigh: 4.0 }
      ]
    }
  },
  {
    id: "p4",
    patientNumber: "MVZ-101204",
    lastName: "Vogt",
    firstName: "Michael",
    dob: "1963-01-19",
    gender: "männlich",
    insurance: "IKK classic",
    phone: "0341 55012290",
    address: "Zschocherstr. 41, 04229 Leipzig",
    diagnoses: [
      { text: "Herzinsuffizienz mit reduzierter Ejektionsfraktion (HFrEF)", since: "2020", note: "NYHA II-III" },
      { text: "Diabetes mellitus Typ 2", since: "2009", note: "insulinpflichtig" }
    ],
    allergies: [
      { substance: "Latex", reaction: "Kontaktdermatitis", severity: "moderate" }
    ],
    medications: [
      { name: "Bisoprolol", dose: "5 mg", frequency: "1x tgl.", since: "03/2020" },
      { name: "Sacubitril/Valsartan", dose: "97/103 mg", frequency: "2x tgl.", since: "09/2021" },
      { name: "Insulin glargin", dose: "24 IE", frequency: "1x tgl. abends", since: "2009" },
      { name: "Empagliflozin", dose: "10 mg", frequency: "1x tgl.", since: "01/2022" }
    ],
    criticalNotes: [
      "Gewichtskontrolle empfohlen – bei Zunahme >2 kg/3 Tage sofortige Rücksprache (Dekompensationsgefahr)."
    ],
    lastContact: {
      date: "2026-07-26",
      doctor: "Dr. med. J. Falk",
      reason: "Verlaufskontrolle Herzinsuffizienz",
      summary: "Vorstellung wegen zunehmender Belastungsdyspnoe. NT-proBNP deutlich erhöht, Hinweis auf beginnende kardiale Dekompensation. Diuretische Therapie angepasst, engmaschige Gewichtskontrolle vereinbart."
    },
    history: [
      { date: "2026-07-26", label: "Verlaufskontrolle", detail: "V.a. kardiale Dekompensation, Diuretikadosis erhöht.", critical: true },
      { date: "2021-09-01", label: "Medikationsanpassung", detail: "Umstellung auf Sacubitril/Valsartan." },
      { date: "2020-03-12", label: "Diagnosestellung HFrEF", detail: "Erstdiagnose nach kardiologischer Abklärung." }
    ],
    tasks: [
      { text: "Gewichtsverlauf in 1 Woche kontrollieren", done: false },
      { text: "Kardiologische Wiedervorstellung terminieren", done: false },
      { text: "Rezept Sacubitril/Valsartan erneuern", done: true }
    ],
    labs: {
      date: "2026-07-26",
      values: [
        { param: "NT-proBNP", value: 3200, unit: "pg/ml", refLow: 0, refHigh: 125, criticalHigh: 2000,
          alertText: "NT-proBNP stark erhöht (3200 pg/ml) – Hinweis auf kardiale Dekompensation." },
        { param: "HbA1c", value: 8.6, unit: "%", refLow: 4.0, refHigh: 6.0, criticalHigh: 9.0 },
        { param: "Kalium", value: 5.3, unit: "mmol/l", refLow: 3.5, refHigh: 5.0 },
        { param: "Kreatinin", value: 1.3, unit: "mg/dl", refLow: 0.7, refHigh: 1.3 },
        { param: "Hämoglobin", value: 13.9, unit: "g/dl", refLow: 13.5, refHigh: 17.5 }
      ]
    }
  },
  {
    id: "p5",
    patientNumber: "MVZ-101390",
    lastName: "Hartmann",
    firstName: "Julia",
    dob: "1994-09-08",
    gender: "weiblich",
    insurance: "DAK-Gesundheit",
    phone: "0341 55017765",
    address: "Georg-Schwarz-Str. 22, 04177 Leipzig",
    diagnoses: [
      { text: "Schwangerschaft, 24. SSW", since: "01/2026", note: "unauffälliger Verlauf bisher" }
    ],
    allergies: [
      { substance: "Hausstaubmilben", reaction: "allergische Rhinitis", severity: "mild" }
    ],
    medications: [
      { name: "Folsäure", dose: "0,4 mg", frequency: "1x tgl.", since: "01/2026" },
      { name: "Eisen(II)-glycinsulfat", dose: "50 mg", frequency: "1x tgl.", since: "06/2026" }
    ],
    criticalNotes: [
      "Schwangerschaft – bei jeder Neuverordnung Eignung in der Schwangerschaft prüfen."
    ],
    lastContact: {
      date: "2026-07-20",
      doctor: "Dr. med. J. Falk",
      reason: "Schwangerschaftsvorsorge",
      summary: "Routinevorsorge in der 24. Schwangerschaftswoche. Hämoglobin und Ferritin grenzwertig niedrig, Beginn einer oralen Eisensubstitution."
    },
    history: [
      { date: "2026-07-20", label: "Vorsorgeuntersuchung", detail: "Beginn Eisensubstitution bei grenzwertiger Anämie." },
      { date: "2026-01-15", label: "Feststellung Schwangerschaft", detail: "Erstvorstellung, unauffälliger Ultraschallbefund." }
    ],
    tasks: [
      { text: "Hämoglobin-Kontrolle in 4 Wochen", done: false },
      { text: "Rezept Eisenpräparat erneuern", done: false }
    ],
    labs: {
      date: "2026-07-20",
      values: [
        { param: "Hämoglobin", value: 10.6, unit: "g/dl", refLow: 11.0, refHigh: 14.3, criticalLow: 9.0 },
        { param: "Ferritin", value: 12, unit: "ng/ml", refLow: 15, refHigh: 150, criticalLow: 10 },
        { param: "TSH", value: 2.1, unit: "mU/l", refLow: 0.3, refHigh: 3.0 },
        { param: "Blutdruck (syst.)", value: 118, unit: "mmHg", refLow: 90, refHigh: 135 }
      ]
    }
  },
  {
    id: "p6",
    patientNumber: "MVZ-101577",
    lastName: "Lindemann",
    firstName: "Peter",
    dob: "1949-05-27",
    gender: "männlich",
    insurance: "AOK Plus",
    phone: "0341 55019903",
    address: "Demmeringstr. 3, 04177 Leipzig",
    diagnoses: [
      { text: "COPD Gold III", since: "2014", note: "aktuell akute Exazerbation, V.a. Infekt" },
      { text: "Koronare Herzkrankheit, 2-Gefäß-KHK", since: "2017", note: "" }
    ],
    allergies: [
      { substance: "Acetylsalicylsäure (ASS)", reaction: "Bronchospasmus", severity: "severe" }
    ],
    medications: [
      { name: "Tiotropiumbromid", dose: "18 µg", frequency: "1x tgl. inhalativ", since: "2014" },
      { name: "Salbutamol", dose: "100 µg", frequency: "b. Bedarf inhalativ", since: "2014" },
      { name: "Clopidogrel", dose: "75 mg", frequency: "1x tgl.", since: "2017" },
      { name: "Amoxicillin/Clavulansäure", dose: "875/125 mg", frequency: "2x tgl.", since: "seit 3 Tagen" }
    ],
    criticalNotes: [],
    lastContact: {
      date: "2026-07-27",
      doctor: "Dr. med. J. Falk",
      reason: "Akute Vorstellung bei Dyspnoe",
      summary: "Akute Verschlechterung bei bekannter COPD Gold III, Verdacht auf Infektexazerbation. Sauerstoffsättigung kritisch erniedrigt, antibiotische Therapie eingeleitet, engmaschige Kontrolle vereinbart."
    },
    history: [
      { date: "2026-07-27", label: "Akute Exazerbation", detail: "SpO2 88 %, CRP 96 mg/l – Antibiose begonnen.", critical: true },
      { date: "2017-06-01", label: "Diagnosestellung KHK", detail: "2-Gefäß-KHK, perkutane Koronarintervention durchgeführt." },
      { date: "2014-02-20", label: "Diagnosestellung COPD", detail: "COPD Gold III erstdiagnostiziert." }
    ],
    tasks: [
      { text: "Sauerstoffsättigung engmaschig kontrollieren", done: false },
      { text: "Antibiose-Verlauf in 3 Tagen prüfen", done: false },
      { text: "Überweisung Pneumologie ausstellen", done: false }
    ],
    labs: {
      date: "2026-07-27",
      values: [
        { param: "SpO2", value: 88, unit: "%", refLow: 95, refHigh: 100, criticalLow: 90,
          alertText: "Sauerstoffsättigung kritisch erniedrigt (88 %) – umgehende Kontrolle / Sauerstoffgabe erwägen." },
        { param: "CRP", value: 96, unit: "mg/l", refLow: 0, refHigh: 5, criticalHigh: 50,
          alertText: "CRP stark erhöht (96 mg/l) – Hinweis auf floriden Infekt, passend zur Exazerbation." },
        { param: "Leukozyten", value: 14.8, unit: "/nl", refLow: 4.0, refHigh: 10.0 },
        { param: "Kreatinin", value: 1.0, unit: "mg/dl", refLow: 0.7, refHigh: 1.3 }
      ]
    }
  }
];

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

function calcAge(iso) {
  const dob = new Date(iso);
  const today = new Date("2026-07-28");
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

function labStatus(v) {
  if (v.criticalLow != null && v.value <= v.criticalLow) return "critical";
  if (v.criticalHigh != null && v.value >= v.criticalHigh) return "critical";
  if (v.value < v.refLow || v.value > v.refHigh) return "borderline";
  return "normal";
}

const STATUS_LABEL = { normal: "Normal", borderline: "Grenzwertig", critical: "Kritisch" };

function severityBadge(sev) {
  if (sev === "severe") return `<span class="badge badge--severe">Schwer</span>`;
  if (sev === "moderate") return `<span class="badge badge--moderate">Mittel</span>`;
  return `<span class="badge badge--mild">Leicht</span>`;
}

function buildAlerts(patient) {
  const alerts = [];

  // 1. Kritische Laborwerte
  patient.labs.values.forEach(v => {
    if (labStatus(v) === "critical") {
      alerts.push(v.alertText || `Kritischer Laborwert: ${v.param} = ${v.value} ${v.unit}`);
    }
  });

  // 2. Schwere Allergien
  patient.allergies.forEach(a => {
    if (a.severity === "severe") {
      alerts.push(`Schwere Allergie bekannt: ${a.substance} (${a.reaction}).`);
    }
  });

  // 3. Medikament könnte mit bekannter Allergie kollidieren
  patient.allergies.forEach(a => {
    const allergyKeyword = a.substance.split(/[\s(]/)[0].toLowerCase();
    patient.medications.forEach(m => {
      if (allergyKeyword.length > 3 && m.name.toLowerCase().includes(allergyKeyword)) {
        alerts.push(`Mögliche Wechselwirkung: Medikament „${m.name}“ und dokumentierte Allergie gegen „${a.substance}“ prüfen!`);
      }
    });
  });

  // 4. Manuell hinterlegte kritische Hinweise
  patient.criticalNotes.forEach(n => alerts.push(n));

  return alerts;
}

function computeSummary(patient) {
  const abnormalLabsCount = patient.labs.values.filter(v => labStatus(v) !== "normal").length;
  const alerts = buildAlerts(patient);
  return {
    diagnosesCount: patient.diagnoses.length,
    medicationsCount: patient.medications.length,
    allergiesCount: patient.allergies.length,
    abnormalLabsCount,
    criticalCount: alerts.length
  };
}

// ------------------------------------------------------------
// State & rendering
// ------------------------------------------------------------

let currentPatientId = null;

function renderPatientList(filter = "") {
  const list = document.getElementById("patientList");
  const term = filter.trim().toLowerCase();

  const filtered = PATIENTS.filter(p => {
    if (!term) return true;
    const haystack = `${p.firstName} ${p.lastName} ${formatDate(p.dob)} ${p.patientNumber}`.toLowerCase();
    return haystack.includes(term);
  });

  list.innerHTML = "";

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.className = "patient-list__empty";
    li.textContent = "Keine Patienten gefunden.";
    list.appendChild(li);
    return;
  }

  filtered.forEach(p => {
    const hasAlerts = buildAlerts(p).length > 0;
    const li = document.createElement("li");
    li.className = "patient-item" + (p.id === currentPatientId ? " active" : "");
    li.innerHTML = `
      <div class="patient-item__name">
        ${hasAlerts ? '<span class="patient-item__flag" title="Wichtige Hinweise vorhanden"></span>' : ""}
        ${p.lastName}, ${p.firstName}
      </div>
      <div class="patient-item__meta">${formatDate(p.dob)} · ${calcAge(p.dob)} J. · ${p.patientNumber}</div>
    `;
    li.addEventListener("click", () => selectPatient(p.id));
    list.appendChild(li);
  });
}

function selectPatient(id) {
  currentPatientId = id;
  renderPatientList(document.getElementById("patientSearch").value);
  renderDashboard(PATIENTS.find(p => p.id === id));
  closeGlobalSearch();
}

function renderDashboardHeader(patient) {
  document.getElementById("dashboardPatientName").textContent = `${patient.lastName}, ${patient.firstName}`;
  document.getElementById("dashboardPatientMeta").textContent =
    `${formatDate(patient.dob)} · ${calcAge(patient.dob)} Jahre · ${patient.patientNumber}`;
}

function renderLastContact(patient) {
  const c = patient.lastContact;
  document.getElementById("lastContactInfo").innerHTML = `
    <dt>Datum</dt><dd>${formatDate(c.date)}</dd>
    <dt>Behandelnder Arzt</dt><dd>${c.doctor}</dd>
    <dt>Grund des Besuchs</dt><dd>${c.reason}</dd>
    <dd class="contact-summary">${c.summary}</dd>
  `;
}

function renderHistory(patient) {
  const timeline = document.getElementById("historyTimeline");
  timeline.innerHTML = "";

  const sorted = [...patient.history].sort((a, b) => new Date(b.date) - new Date(a.date));
  sorted.forEach(item => {
    const li = document.createElement("li");
    li.className = "timeline-item" + (item.critical ? " timeline-item--critical" : "");
    li.innerHTML = `
      <div class="timeline-item__date">${formatDate(item.date)}</div>
      <div class="timeline-item__label">${item.label}</div>
      <div class="timeline-item__detail">${item.detail}</div>
    `;
    timeline.appendChild(li);
  });
}

function updateTaskCount(patient) {
  const open = patient.tasks.filter(t => !t.done).length;
  document.getElementById("taskCount").textContent =
    patient.tasks.length === 0 ? "" : `(${open} von ${patient.tasks.length} offen)`;
}

function renderTasks(patient) {
  const list = document.getElementById("tasksList");
  list.innerHTML = "";

  if (patient.tasks.length === 0) {
    list.innerHTML = `<li class="task-list__empty">Keine offenen Aufgaben.</li>`;
  } else {
    patient.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = "task-item" + (task.done ? " task-item--done" : "");
      const inputId = `task-${patient.id}-${index}`;
      li.innerHTML = `
        <input type="checkbox" id="${inputId}" ${task.done ? "checked" : ""}>
        <label for="${inputId}">${task.text}</label>
      `;
      li.querySelector("input").addEventListener("change", e => {
        task.done = e.target.checked;
        li.classList.toggle("task-item--done", task.done);
        updateTaskCount(patient);
      });
      list.appendChild(li);
    });
  }

  updateTaskCount(patient);
}

function renderClinicalSummary(patient) {
  const summary = computeSummary(patient);

  document.getElementById("summaryDiagnoses").textContent = summary.diagnosesCount;
  document.getElementById("summaryMedications").textContent = summary.medicationsCount;
  document.getElementById("summaryAllergies").textContent = summary.allergiesCount;
  document.getElementById("summaryLabs").textContent = summary.abnormalLabsCount;

  const statusTile = document.getElementById("summaryStatusTile");
  const statusValue = document.getElementById("summaryStatusValue");
  const statusLabel = document.getElementById("summaryStatusLabel");

  if (summary.criticalCount > 0) {
    statusTile.classList.add("summary-tile--warning");
    statusValue.textContent = `⚠ ${summary.criticalCount}`;
    statusLabel.textContent = "Kritische Hinweise";
  } else {
    statusTile.classList.remove("summary-tile--warning");
    statusValue.textContent = "✓";
    statusLabel.textContent = "Unauffällig";
  }
}

function renderDashboard(patient) {
  document.getElementById("emptyState").hidden = true;
  const dashboard = document.getElementById("dashboard");
  dashboard.hidden = false;

  renderDashboardHeader(patient);
  renderClinicalSummary(patient);
  renderLastContact(patient);
  renderHistory(patient);
  renderTasks(patient);

  // Alerts
  const alerts = buildAlerts(patient);
  const alertsSection = document.getElementById("alertsSection");
  const alertsList = document.getElementById("alertsList");
  const alertsTitle = alertsSection.querySelector(".alerts__title");

  alertsList.innerHTML = "";
  if (alerts.length === 0) {
    alertsSection.classList.add("alerts--none");
    alertsTitle.textContent = "✓ Wichtige Hinweise";
    const li = document.createElement("li");
    li.textContent = "Keine kritischen Auffälligkeiten bekannt.";
    alertsList.appendChild(li);
  } else {
    alertsSection.classList.remove("alerts--none");
    alertsTitle.textContent = "⚠ Wichtige Hinweise";
    alerts.forEach(text => {
      const li = document.createElement("li");
      li.innerHTML = text;
      alertsList.appendChild(li);
    });
  }

  // Stammdaten
  const masterGrid = document.getElementById("masterGrid");
  masterGrid.innerHTML = `
    <dt>Name</dt><dd>${patient.lastName}, ${patient.firstName}</dd>
    <dt>Geburtsdatum</dt><dd>${formatDate(patient.dob)} (${calcAge(patient.dob)} Jahre)</dd>
    <dt>Geschlecht</dt><dd>${patient.gender}</dd>
    <dt>Patienten-ID</dt><dd>${patient.patientNumber}</dd>
    <dt>Krankenkasse</dt><dd>${patient.insurance}</dd>
    <dt>Telefon</dt><dd>${patient.phone}</dd>
    <dt>Adresse</dt><dd>${patient.address}</dd>
  `;

  // Diagnosen
  const diagnosesList = document.getElementById("diagnosesList");
  diagnosesList.innerHTML = "";
  if (patient.diagnoses.length === 0) {
    diagnosesList.innerHTML = `<li class="empty">Keine aktuellen Diagnosen dokumentiert.</li>`;
  } else {
    patient.diagnoses.forEach(d => {
      const li = document.createElement("li");
      li.innerHTML = `${d.text}<span class="sub">Seit ${d.since}${d.note ? " · " + d.note : ""}</span>`;
      diagnosesList.appendChild(li);
    });
  }

  // Allergien
  const allergiesList = document.getElementById("allergiesList");
  allergiesList.innerHTML = "";
  if (patient.allergies.length === 0) {
    allergiesList.innerHTML = `<li class="empty">Keine bekannten Allergien.</li>`;
  } else {
    patient.allergies.forEach(a => {
      const li = document.createElement("li");
      li.className = "allergy" + (a.severity === "severe" ? " severe" : "");
      li.innerHTML = `${a.substance} ${severityBadge(a.severity)}<span class="sub">${a.reaction}</span>`;
      allergiesList.appendChild(li);
    });
  }

  // Medikamente
  const medBody = document.getElementById("medicationsBody");
  medBody.innerHTML = "";
  if (patient.medications.length === 0) {
    medBody.innerHTML = `<tr><td colspan="4">Keine aktuelle Medikation dokumentiert.</td></tr>`;
  } else {
    patient.medications.forEach(m => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${m.name}</td><td>${m.dose}</td><td>${m.frequency}</td><td>${m.since}</td>`;
      medBody.appendChild(tr);
    });
  }

  // Laborwerte
  document.getElementById("labsMeta").textContent = `Letzte Abnahme: ${formatDate(patient.labs.date)}`;
  const labsBody = document.getElementById("labsBody");
  labsBody.innerHTML = "";
  patient.labs.values.forEach(v => {
    const status = labStatus(v);
    const tr = document.createElement("tr");
    if (status === "critical") tr.className = "row-critical";
    else if (status === "borderline") tr.className = "row-borderline";
    tr.innerHTML = `
      <td>${v.param}</td>
      <td class="lab-value-cell">${v.value}</td>
      <td>${v.unit}</td>
      <td>${v.refLow} – ${v.refHigh}</td>
      <td><span class="status-pill status-${status}">${STATUS_LABEL[status]}</span></td>
    `;
    labsBody.appendChild(tr);
  });
}

// ------------------------------------------------------------
// Patientenzusammenfassung (Modal)
// ------------------------------------------------------------

function buildSummaryModal(patient) {
  const summary = computeSummary(patient);
  const alerts = buildAlerts(patient);
  const abnormalLabs = patient.labs.values.filter(v => labStatus(v) !== "normal");

  const diagnosesHtml = patient.diagnoses.length
    ? `<ul>${patient.diagnoses.map(d => `<li>${d.text} <span style="color:var(--gray-500)">(seit ${d.since})</span></li>`).join("")}</ul>`
    : `<p>Keine aktuellen Diagnosen dokumentiert.</p>`;

  const medsHtml = patient.medications.length
    ? `<ul>${patient.medications.map(m => `<li>${m.name} – ${m.dose}, ${m.frequency}</li>`).join("")}</ul>`
    : `<p>Keine aktuelle Medikation dokumentiert.</p>`;

  const allergiesHtml = patient.allergies.length
    ? `<ul>${patient.allergies.map(a => `<li>${a.substance} – ${a.reaction}</li>`).join("")}</ul>`
    : `<p>Keine bekannten Allergien.</p>`;

  const labsHtml = abnormalLabs.length
    ? `<ul>${abnormalLabs.map(v => `<li>${v.param}: ${v.value} ${v.unit} (${STATUS_LABEL[labStatus(v)]})</li>`).join("")}</ul>`
    : `<p>Keine auffälligen Laborwerte.</p>`;

  const criticalHtml = alerts.length
    ? `<div class="summary-block summary-block--critical">
         <h4>⚠ Kritische Hinweise</h4>
         <ul>${alerts.map(a => `<li>${a}</li>`).join("")}</ul>
       </div>`
    : `<div class="summary-block"><h4>Kritische Hinweise</h4><p>Keine kritischen Auffälligkeiten bekannt.</p></div>`;

  return `
    <div class="summary-block">
      <h4>Patient</h4>
      <p>${patient.lastName}, ${patient.firstName} · ${formatDate(patient.dob)} (${calcAge(patient.dob)} J.) · ${patient.patientNumber}</p>
    </div>
    ${criticalHtml}
    <div class="summary-block">
      <h4>Wichtigste Diagnosen (${summary.diagnosesCount})</h4>
      ${diagnosesHtml}
    </div>
    <div class="summary-block">
      <h4>Aktuelle Medikamente (${summary.medicationsCount})</h4>
      ${medsHtml}
    </div>
    <div class="summary-block">
      <h4>Allergien (${summary.allergiesCount})</h4>
      ${allergiesHtml}
    </div>
    <div class="summary-block">
      <h4>Auffällige Laborwerte (${summary.abnormalLabsCount})</h4>
      ${labsHtml}
    </div>
    <div class="summary-block">
      <h4>Letzter Arztkontakt</h4>
      <p>${formatDate(patient.lastContact.date)} · ${patient.lastContact.doctor} · ${patient.lastContact.reason}</p>
    </div>
  `;
}

function openSummaryModal() {
  if (!currentPatientId) return;
  const patient = PATIENTS.find(p => p.id === currentPatientId);
  document.getElementById("summaryModalTitle").textContent =
    `Zusammenfassung: ${patient.lastName}, ${patient.firstName}`;
  document.getElementById("summaryModalBody").innerHTML = buildSummaryModal(patient);
  document.getElementById("summaryModalOverlay").hidden = false;
}

function closeSummaryModal() {
  document.getElementById("summaryModalOverlay").hidden = true;
}

// ------------------------------------------------------------
// Globale intelligente Suche
// ------------------------------------------------------------

function performGlobalSearch(term) {
  const results = [];
  if (term.length < 2) return results;

  PATIENTS.forEach(p => {
    const fullName = `${p.lastName}, ${p.firstName}`;

    if (`${p.firstName} ${p.lastName} ${p.patientNumber}`.toLowerCase().includes(term)) {
      results.push({ type: "Patient", patientId: p.id, label: fullName, sub: `${formatDate(p.dob)} · ${p.patientNumber}` });
    }

    p.diagnoses.forEach(d => {
      if (d.text.toLowerCase().includes(term)) {
        results.push({ type: "Diagnose", patientId: p.id, label: d.text, sub: fullName });
      }
    });

    p.medications.forEach(m => {
      if (m.name.toLowerCase().includes(term)) {
        results.push({ type: "Medikament", patientId: p.id, label: m.name, sub: fullName });
      }
    });

    p.labs.values.forEach(v => {
      if (v.param.toLowerCase().includes(term)) {
        results.push({ type: "Laborwert", patientId: p.id, label: `${v.param}: ${v.value} ${v.unit}`, sub: fullName });
      }
    });
  });

  return results.slice(0, 12);
}

function renderGlobalSearchResults(term) {
  const box = document.getElementById("globalSearchResults");
  const results = performGlobalSearch(term.trim().toLowerCase());

  if (term.trim().length < 2) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }

  if (results.length === 0) {
    box.innerHTML = `<div class="search-result__empty">Keine Treffer für „${term}“.</div>`;
  } else {
    box.innerHTML = results.map((r, i) => `
      <div class="search-result" data-index="${i}">
        <span class="search-result__type">${r.type}</span>
        <div class="search-result__body">
          <div class="search-result__label">${r.label}</div>
          <div class="search-result__sub">${r.sub}</div>
        </div>
      </div>
    `).join("");

    box.querySelectorAll(".search-result").forEach((el, i) => {
      el.addEventListener("click", () => {
        selectPatient(results[i].patientId);
        document.getElementById("globalSearch").value = "";
      });
    });
  }

  box.hidden = false;
}

function closeGlobalSearch() {
  const box = document.getElementById("globalSearchResults");
  box.hidden = true;
  box.innerHTML = "";
}

// ------------------------------------------------------------
// Init
// ------------------------------------------------------------

document.getElementById("patientSearch").addEventListener("input", e => {
  renderPatientList(e.target.value);
});

document.getElementById("globalSearch").addEventListener("input", e => {
  renderGlobalSearchResults(e.target.value);
});

document.addEventListener("click", e => {
  if (!document.getElementById("globalSearchWrap").contains(e.target)) {
    closeGlobalSearch();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeGlobalSearch();
    closeSummaryModal();
  }
});

document.getElementById("summarizeBtn").addEventListener("click", openSummaryModal);
document.getElementById("summaryModalClose").addEventListener("click", closeSummaryModal);
document.getElementById("summaryModalOverlay").addEventListener("click", e => {
  if (e.target.id === "summaryModalOverlay") closeSummaryModal();
});

renderPatientList();

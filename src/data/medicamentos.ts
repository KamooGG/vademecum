import type { Medicamento } from '../types';

const MEDICAMENTOS: Medicamento[] = [
  {
    "nombre": "Fentanilo",
    "principio_activo": "Fentanilo",
    "concentracion": "Inyectable 50 ml; Parche 12 mg, 25 mg, 50 mg; Sublingual/Bucal 100–1600 mg",
    "forma_farmaceutica": "Solución inyectable, parche transdérmico, tabletas bucales/sublinguales",
    "via_administracion": "Intravenosa, Intramuscular, transdérmica, oral transmucosa",
    "indicaciones": "Anestesia pre, intra y postoperatoria; dolor crónico severo; dolor irruptivo oncológico",
    "posologia": "Analgesia 50–100 mg Intravenosa lento, repetir cada 1–2 h; parche: individualizado cada 72 h",
    "interacciones": "Potencia: benzodiacepinas, barbitúricos, alcohol, ritonavir, ketoconazol; Reduce efecto: carbamazepina, rifampicina",
    "efectos_adversos": "Náuseas, vómitos, estreñimiento, somnolencia, depresión respiratoria, bradicardia, rigidez muscular",
    "laboratorio": "Janssen, Sandoz, Mylan, genéricos"
  },
  {
    "nombre": "Fenobarbital",
    "principio_activo": "Fenobarbital",
    "concentracion": "Tabletas 15 mg, 50 mg, 100 mg; solución oral 4 mg/ml, 20 mg/5 ml; inyectable 65 y 130 mg/ml",
    "forma_farmaceutica": "Tabletas, solución oral, inyectable",
    "via_administracion": "Oral, Intravenosa, Intramuscular",
    "indicaciones": "Epilepsia, sedación, insomnio, estado epiléptico",
    "posologia": "60–200 mg/día; estado epiléptico 15–20 mg/kg",
    "interacciones": "Inductor enzimático; reduce efecto de anticoagulantes, anticonceptivos, Antirretrovirales; potencia alcohol y depresores",
    "efectos_adversos": "Somnolencia, mareo, depresión respiratoria, anemia megaloblástica, S. Stevens-Johnson",
    "laboratorio": "Genéricos"
  },
  {
    "nombre": "Metadona",
    "principio_activo": "Metadona",
    "concentracion": "Tabletas 5, 10, 40 mg; solución oral 5–10 mg/5 ml; inyectable 10 mg/ml",
    "forma_farmaceutica": "Tabletas, solución oral, inyectable",
    "via_administracion": "Oral, Intravenosa, Intramuscular",
    "indicaciones": "Dolor moderado-severo, mantenimiento en dependencia a opioides",
    "posologia": "Dolor 2.5–10 mg cada 8–12 h; mantenimiento 20–30 mg inicial, luego 80–120 mg/día",
    "interacciones": "Aumentan niveles: fluconazol, cimetidina; reducen niveles: rifampicina",
    "efectos_adversos": "Estreñimiento, náuseas, sudoración, depresión respiratoria, hipotensión",
    "laboratorio": "Genéricos"
  },
  {
    "nombre": "Hidromorfona",
    "principio_activo": "Hidromorfona",
    "concentracion": "Oral: 2, 4, 8 mg; prolongada 8–64 mg; oral 1 mg/ml; inyectable 1–4 mg/ml",
    "forma_farmaceutica": "Tabletas, liberación prolongada, solución oral, inyectable",
    "via_administracion": "Oral, Intravenosa, Intramuscular, Subcutánea, rectal",
    "indicaciones": "Dolor moderado-severo (8–10 veces más potente que morfina)",
    "posologia": "Oral 2–4 mg cada 4–6 h; Intravenosa 0.2–1 mg cada 2–3 h",
    "interacciones": "Potencia: alcohol, benzodiacepinas, antidepresivos",
    "efectos_adversos": "Náuseas, vómitos, somnolencia, depresión respiratoria, hipotensión",
    "laboratorio": "Mallinckrodt, Endo"
  },
  {
    "nombre": "Midazolam",
    "principio_activo": "Midazolam",
    "concentracion": "Inyectable 1 y 5 mg/ml; oral 2 mg/ml; tabletas 7.5 y 15 mg",
    "forma_farmaceutica": "Inyectable, oral, tabletas",
    "via_administracion": "Intravenosa, Intramuscular, oral, rectal, intranasal",
    "indicaciones": "Sedación, anestesia, UCI, estado epiléptico",
    "posologia": "Sedación 1–2.5 mg Intravenosa; inducción 0.3–0.35 mg/kg",
    "interacciones": "Potencia: opioides, barbitúricos; inhibidores ↑ niveles",
    "efectos_adversos": "Somnolencia, amnesia, depresión respiratoria, apnea",
    "laboratorio": "Roche, Hikma"
  },
  {
    "nombre": "Lorazepam",
    "principio_activo": "Lorazepam",
    "concentracion": "0.5, 1, 2 mg (tabletas)",
    "forma_farmaceutica": "Tabletas, inyectable, solución oral",
    "via_administracion": "Oral, Intravenosa",
    "indicaciones": "Ansiedad, insomnio, preanestesia",
    "posologia": "0.5 mg dosificado; adultos 1–2 mg 2–3 veces/día; pediátrico 0.05–0.1 mg/kg",
    "interacciones": "Alcohol, sedantes, hipnóticos",
    "efectos_adversos": "Somnolencia, confusión, depresión respiratoria",
    "laboratorio": "Pfizer, Bagó, Klonal"
  },
  {
    "nombre": "Triazolam",
    "principio_activo": "Triazolam",
    "concentracion": "0.25 mg",
    "forma_farmaceutica": "Tabletas",
    "via_administracion": "Oral",
    "indicaciones": "Insomnio a corto plazo",
    "posologia": "Adultos 0.25 mg; ancianos 0.125 mg",
    "interacciones": "Cimetidina, anticonceptivos, toronja",
    "efectos_adversos": "Alteración psicomotora, irritabilidad, sueños vívidos",
    "laboratorio": "Pfizer, TempusPharma, IFA Celtics"
  },
  {
    "nombre": "Meperidina",
    "principio_activo": "Meperidina Clorhidrato",
    "concentracion": "Inyectable 100 mg/2 ml",
    "forma_farmaceutica": "Ampolla inyectable",
    "via_administracion": "Intramuscular, Intravenosa, Subcutánea",
    "indicaciones": "Dolor agudo intenso",
    "posologia": "50–150 mg cada 3–4 h; máx 600 mg/24h",
    "interacciones": "Alcohol, antipsicóticos, depresores del SNC",
    "efectos_adversos": "Somnolencia, alucinaciones, fiebre, rigidez muscular",
    "laboratorio": "Sanofi, Hospira, Pharmetica"
  },
  {
    "nombre": "Primidona",
    "principio_activo": "Primidona",
    "concentracion": "Tableta 250 mg",
    "forma_farmaceutica": "Tabletas",
    "via_administracion": "Oral",
    "indicaciones": "Epilepsia, temblor esencial",
    "posologia": "Niños 250–1500 mg/día; adultos 750–1500 mg",
    "interacciones": "Potencia alcohol; reduce niveles de anticoagulantes",
    "efectos_adversos": "Somnolencia, ataxia, nistagmo, náuseas",
    "laboratorio": "Columbia, SERB, Psicofarma"
  },
  {
    "nombre": "Dinoprostone",
    "principio_activo": "Dinoprostona",
    "concentracion": "Gel 0.5 mg, óvulos 10 mg",
    "forma_farmaceutica": "Gel, óvulos",
    "via_administracion": "Vaginal",
    "indicaciones": "Inducción del parto",
    "posologia": "0.5 mg cada 6 h (máx 1.5 mg/día)",
    "interacciones": "Evitar con otros oxitócicos",
    "efectos_adversos": "Diarrea, fiebre, dolor vaginal, anafilaxia",
    "laboratorio": "Pfizer, Ferring"
  },
  {
    "nombre": "Bromazepam",
    "principio_activo": "Bromazepam",
    "concentracion": "1.5, 3 mg",
    "forma_farmaceutica": "Oral",
    "via_administracion": "Oral",
    "indicaciones": "Ansiedad, angustia",
    "posologia": "1.5 mg inicial; ajustar según respuesta",
    "interacciones": "Alcohol, sedantes, antidepresivos",
    "efectos_adversos": "Somnolencia, ataxia, dependencia",
    "laboratorio": "Advacare"
  },
  {
    "nombre": "Clonazepam",
    "principio_activo": "Clonazepam",
    "concentracion": "0.5, 1 mg",
    "forma_farmaceutica": "Oral, Intravenosa",
    "via_administracion": "Oral, Intravenosa",
    "indicaciones": "Epilepsia, ansiedad, status epiléptico",
    "posologia": "0.5 mg cada 8 h; Intravenosa según protocolo",
    "interacciones": "Depresores del SNC",
    "efectos_adversos": "Somnolencia, irritabilidad, dependencia",
    "laboratorio": "Advacare"
  },
  {
    "nombre": "Zolpidem",
    "principio_activo": "Zolpidem",
    "concentracion": "5 y 10 mg",
    "forma_farmaceutica": "Tabletas",
    "via_administracion": "Oral",
    "indicaciones": "Insomnio",
    "posologia": "Adultos 10 mg; ancianos 5 mg",
    "interacciones": "Alcohol, opioides",
    "efectos_adversos": "Amnesia, conductas durante el sueño",
    "laboratorio": "Advacare, Torrentpharma"
  },
  {
    "nombre": "Remifentanilo",
    "principio_activo": "Remifentanilo",
    "concentracion": "Frasco 2 mg (polvo)",
    "forma_farmaceutica": "Intravenosa",
    "via_administracion": "Intravenosa",
    "indicaciones": "Anestesia general, UCI",
    "posologia": "Perfusión Intravenosa continua",
    "interacciones": "Anestésicos, sedantes",
    "efectos_adversos": "Depresión respiratoria, bradicardia, rigidez torácica",
    "laboratorio": "Normon, Kern Pharma"
  },
  {
    "nombre": "Metilergometrina",
    "principio_activo": "Metilergometrina",
    "concentracion": "0.2 mg/ml inyectable; 0.125 mg tabletas",
    "forma_farmaceutica": "Intramuscular, Intravenosa lenta, oral",
    "via_administracion": "Intramuscular, Intravenosa, oral",
    "indicaciones": "Hemorragia posparto",
    "posologia": "Intramuscular 0.2 mg; Intravenosa 0.1–0.2 mg lento",
    "interacciones": "Triptanes, tabaco, CYP3A4",
    "efectos_adversos": "Hipertensión, vasoespasmo, vómitos",
    "laboratorio": "Adeka, Novartis"
  }
];

export default MEDICAMENTOS;

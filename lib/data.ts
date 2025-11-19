import { Question } from './types';

export const questions: Question[] = [
    // --- PREGUNTAS ORIGINALES (IDs 101-510) ---
    // --- PDF 1: Preguntas Varias ---
    {
        id: 101,
        category: "Corticoides",
        text: "A cuantos mg de betametasona equivalen 125mg de Triamcinolona:",
        options: [
            { id: "a", text: "167" },
            { id: "b", text: "23", isCorrect: true }, 
            { id: "c", text: "74" },
            { id: "d", text: "130" }
        ]
    },
    {
        id: 102,
        category: "Otros Fármacos",
        text: "Cuál de los siguientes es un efecto adverso característico del Rasburicase:",
        options: [
            { id: "a", text: "Diarrea" },
            { id: "b", text: "Depresión de médula ósea" },
            { id: "c", text: "Hipersensibilidad", isCorrect: true },
            { id: "d", text: "Cefaleas frontales" }
        ]
    },
    {
        id: 103,
        category: "AINEs",
        text: "Indique que AINE sería de elección como analgésico en una paciente embarazada de 30 semanas:",
        options: [
            { id: "a", text: "Indometacina" },
            { id: "b", text: "Ketorolac" },
            { id: "c", text: "AAS" },
            { id: "d", text: "Paracetamol", isCorrect: true }
        ]
    },
    {
        id: 104,
        category: "Anestesia y Relajantes",
        text: "Qué relajante muscular usted usaría en un paciente con insuficiencia renal:",
        options: [
            { id: "a", text: "Atracurio", isCorrect: true },
            { id: "b", text: "Succinilcolina" },
            { id: "c", text: "Pancuronio" },
            { id: "d", text: "Mivacurio" }
        ]
    },
    {
        id: 105,
        category: "Opioides",
        text: "Llega a la guardia de su hospital un paciente en coma, con pupilas mióticas y depresión respiratoria. Usted que conducta tomaría:",
        options: [
            { id: "a", text: "Sospecha una intoxicación con opioides e indica naloxona iv", isCorrect: true },
            { id: "b", text: "Sospecha una intoxicación con organofosforados e indica atropina" },
            { id: "c", text: "Sospecha una intoxicación con opioides e indica naltrexona vía oral" },
            { id: "d", text: "Sospecha una intoxicación con organofosforados e indica pralidoxima" }
        ]
    },
    {
        id: 106,
        category: "Opioides",
        text: "Con respecto a los opioides es correcto afirmar que:",
        options: [
            { id: "a", text: "La codeína es un agonista parcial muy útil como agente antitusivo" },
            { id: "b", text: "El fentanilo es un agonista sintético, hasta 80 veces más potente que la morfina", isCorrect: true },
            { id: "c", text: "La nalbufina es un agonista completo de receptores Mu" },
            { id: "d", text: "El dextropropoxifeno es un opiode mucho más potente que la morfina" }
        ]
    },
    {
        id: 107,
        category: "Corticoides",
        text: "Que estrategia terapéutica no es útil para minimizar la inhibición del eje Hipotalamo-Hipofiso-Adrenal en un tratamiento prolongado con corticoides:",
        options: [
            { id: "a", text: "Administrar 2/4 de la dosis en la mañana, 1/4 en la tarde y 1/4 en la cena", isCorrect: true },
            { id: "b", text: "Utilizarlos por vía tópica o inhalatoria" },
            { id: "c", text: "Utilizar la mínima dosis posible" },
            { id: "d", text: "Administrar el fármaco en días alternos" }
        ]
    },
    {
        id: 108,
        category: "Otros Fármacos",
        text: "El rasburicase es un fármaco utilizado para:",
        options: [
            { id: "a", text: "Tratamiento del dolor, muy útil como analgésico." },
            { id: "b", text: "Tratamiento del asma infantil" },
            { id: "c", text: "Tratamiento de hiperuricemia maligna, ya que cataliza la oxidación de ac úrico a alantoína.", isCorrect: true },
            { id: "d", text: "Tratamiento del ataque agudo de gota como uricosúrico" }
        ]
    },
    {
        id: 109,
        category: "Corticoides",
        text: "En un paciente en tratamiento crónico con corticoides vía oral, puedo observar como efecto adverso todos los siguientes menos:",
        options: [
            { id: "a", text: "Aspecto cushingoide" },
            { id: "b", text: "Osteoporosis" },
            { id: "c", text: "Alteraciones cutáneas" },
            { id: "d", text: "Hipoglucemia", isCorrect: true } // Producen hiperglucemia
        ]
    },
    {
        id: 110,
        category: "Anestesia y Relajantes",
        text: "El mecanismo de acción de la lidocaína reside en:",
        options: [
            { id: "a", text: "El bloqueo de canales de Calcio voltaje dependiente" },
            { id: "b", text: "La estimulación de receptores Mu" },
            { id: "c", text: "El bloqueo de canales de sodio voltaje dependiente", isCorrect: true },
            { id: "d", text: "La estimulación de receptores NMDA" }
        ]
    },
    {
        id: 111,
        category: "Anestesia y Relajantes",
        text: "La hipertermia maligna es una condición patológica que se presenta principalmente al asociar:",
        options: [
            { id: "a", text: "Lidocaína y atracurio" },
            { id: "b", text: "Pancuronio y bupivacaina" },
            { id: "c", text: "Halotano y succinilcolina", isCorrect: true },
            { id: "d", text: "Sevofluorano y Propofol" }
        ]
    },
    {
        id: 112,
        category: "AINEs",
        text: "En cuanto a la dipirona es incorrecto que:",
        options: [
            { id: "a", text: "Es un aine derivado de la anilina con poco efecto antipirético", isCorrect: true },
            { id: "b", text: "Es un aine que se encuentra dentro del grupo de las pirazolonas" },
            { id: "c", text: "Es muy útil como antipirético y analgésico" },
            { id: "d", text: "Puede producir como efecto adverso agranulocitosis y shock anafiláctico" }
        ]
    },
    {
        id: 113,
        category: "AINEs",
        text: "Respecto a los inhibidores selectivos de la COX-2:",
        options: [
            { id: "a", text: "Tienen mayor riesgo de producir efectos adversos a nivel gastrointestinal que los AINE clásicos" },
            { id: "b", text: "A bajas dosis, se utilizan como profilaxis para eventos cardioembólicos" },
            { id: "c", text: "Producen eventos tromboembólicos como uno de sus efectos adversos más graves", isCorrect: true },
            { id: "d", text: "El celecoxib presenta una vida media de aproximadamente 48 horas" }
        ]
    },
    {
        id: 114,
        category: "AINEs",
        text: "Ordene los siguientes fármacos según su riesgo de provocar lesión gastrointestinal (de menor riesgo a mayor riesgo):",
        options: [
            { id: "a", text: "Ibuprofeno – Celecoxib – Indometacina – Ketorolac" },
            { id: "b", text: "Ibuprofeno – Indometacina – Ketorolac – Celecoxib" },
            { id: "c", text: "Celecoxib – Ibuprofeno – Indometacina – Ketorolac", isCorrect: true }, // COX2 < Ibuprofeno < Indometacina/Ketorolac
            { id: "d", text: "Celecoxib – Ibuprofeno – Indometacina – Ketorolac" }
        ]
    },
    {
        id: 115,
        category: "Corticoides",
        text: "¿Cuál de las siguientes son acciones farmacológicas de los glucocorticoides?",
        options: [
            { id: "a", text: "Generan un aumento de la inmunidad ya que producen neutrofilia" },
            { id: "b", text: "Son inmunosupresores, pero generan aumento de la respuesta alérgica" },
            { id: "c", text: "Son pro-inflamatorios ya que inhiben la expresión de COX-1" },
            { id: "d", text: "Solo son antipiréticos si la fiebre corresponde a reacciones inflamatorias, pero no pueden evitar el efecto piretógeno de las endotoxinas", isCorrect: true }
        ]
    },
    {
        id: 116,
        category: "Corticoides",
        text: "¿Respecto a los glucocorticoides, cuál de los siguientes corresponde a un efecto adverso agudo?",
        options: [
            { id: "a", text: "Osteoporosis" },
            { id: "b", text: "Psicosis", isCorrect: true },
            { id: "c", text: "Pérdida de masa muscular" },
            { id: "d", text: "Formación de estrías" }
        ]
    },
    {
        id: 117,
        category: "Corticoides",
        text: "¿Cuál de los siguientes no es un efecto adverso debido al uso prolongado de los glucocorticoides?",
        options: [
            { id: "a", text: "Osteoporosis" },
            { id: "b", text: "Hipertensión arterial" },
            { id: "c", text: "Insuficiencia suprarrenal aguda", isCorrect: true }, // Esto ocurre por suspensión brusca
            { id: "d", text: "Cataratas" }
        ]
    },
    {
        id: 118,
        category: "Corticoides",
        text: "Elida, 64 años, toma glucocorticoides y aspirina crónicamente. Sufre fractura de cadera y va a cirugía. Conducta:",
        options: [
            { id: "a", text: "Disminuir gradual dosis glucocorticoide y suspender aspirina" },
            { id: "b", text: "Suspender aspirina y aumentar la dosis del glucocorticoide 10 días antes" },
            { id: "c", text: "Suspender aspirina y mantener misma dosis glucocorticoide" },
            { id: "d", text: "Debería aumentarse la dosis del glucocorticoide antes de la intervención y suspenderse la aspirina", isCorrect: true }
        ]
    },
    {
        id: 119,
        category: "Otros Fármacos",
        text: "¿Cuál de las siguientes drogas puede disminuir la eficacia del probenecid?",
        options: [
            { id: "a", text: "Paracetamol" },
            { id: "b", text: "Morfina" },
            { id: "c", text: "Colchicina" },
            { id: "d", text: "Aspirina", isCorrect: true }
        ]
    },
    {
        id: 120,
        category: "Otros Fármacos",
        text: "¿Cuál de los siguientes fármacos utilizaría como tratamiento de una hiperuricemia secundaria a un síndrome de lisis tumoral?",
        options: [
            { id: "a", text: "Colchicina" },
            { id: "b", text: "Benzbromarona" },
            { id: "c", text: "Febuxostat" },
            { id: "d", text: "Rasburicasa", isCorrect: true }
        ]
    },
    
    // --- PDF 2: TERCER PARCIAL FARMACO ---
    {
        id: 201,
        category: "AINEs",
        text: "Con respecto a los AINES, marque la respuesta CORRECTA:",
        options: [
            { id: "a", text: "Se consideran un grupo de fármacos útiles para el tratamiento de la inflamación crónica." },
            { id: "b", text: "Al ser de venta libre su uso ilimitado no genera consecuencias" },
            { id: "c", text: "Sus efectos principales se basan en la inhibición de COX-2 con aumento de prostaglandinas" },
            { id: "d", text: "Tienen buena biodisponibilidad vía oral, y los alimentos y antiácidos suelen retrasar su absorción", isCorrect: true }
        ]
    },
    {
        id: 202,
        category: "AINEs",
        text: "El AAS se caracteriza por (marque la opción INCORRECTA):",
        options: [
            { id: "a", text: "Tener alta unión a proteína." },
            { id: "b", text: "Ser un inhibidor no selectivo de la ciclooxigenasa." },
            { id: "c", text: "Ser de excelente uso como antiinflamatorio e uricosúrico.", isCorrect: true }, // Dosis antiinflamatoria es tóxica/alta
            { id: "d", text: "Ser un fármaco lesivo para distintos órganos como estómago y riñón." }
        ]
    },
    {
        id: 203,
        category: "AINEs",
        text: "Paciente 70 años, tabaquista, ulcera gástrica, tomaba 100mg aspirina. Conducta:",
        options: [
            { id: "a", text: "Tratar sintomatología, dar IBP e indicaciones de profilaxis", isCorrect: true }, // Asumo que se refiere a continuar AAS con IBP.
            { id: "b", text: "Retirar aspirina sin considerar riesgos" },
            { id: "c", text: "No es de relevancia el consumo de AAS (Incorrecto)" },
            { id: "d", text: "El médico hizo bien en no considerar profilaxis (Incorrecto)" }
        ]
    },
    {
        id: 204,
        category: "AINEs",
        text: "Con respecto al paracetamol (marque la CORRECTA):",
        options: [
            { id: "a", text: "Ser un derivado básico y tener excelente actividad antiinflamatoria." },
            { id: "b", text: "Está contraindicado por ser categoría D en embarazo." },
            { id: "c", text: "Es hepatotóxico ya que produce un metabolito (NABQ) que reacciona con glutatión", isCorrect: true }, // NAPQI
            { id: "d", text: "Su hepatotoxicidad no tiene tratamiento específico." }
        ]
    },
    {
        id: 205,
        category: "AINEs",
        text: "El ibuprofeno (marque la INCORRECTA):",
        options: [
            { id: "a", text: "Es analgésico, antipirético, antiinflamatorio e antiagregante plaquetario." },
            { id: "b", text: "Inhibe función leucocitaria favoreciendo su efecto antiinflamatorio.", isCorrect: true }, // Respuesta del PDF marca esta como la incorrecta/elegida
            { id: "c", text: "Es categoría D en el embarazo." },
            { id: "d", text: "Es de buena absorción vía oral y tiene alta unión a proteínas." }
        ]
    },
    {
        id: 206,
        category: "AINEs",
        text: "Con respecto a los oxicams, (marque la opción CORRECTA):",
        options: [
            { id: "a", text: "El piroxicam es un inhibidor selectivo de la ciclooxigenasa 2." },
            { id: "b", text: "Tanto el piroxicam como el meloxicam inhiben a ambas ciclooxigenasas por igual." },
            { id: "c", text: "Se dan por vía oral y pueden ser útiles para Artritis Reumatoide.", isCorrect: true },
            { id: "d", text: "El celecoxib se lo considera dentro de este grupo." }
        ]
    },
    {
        id: 207,
        category: "AINEs",
        text: "Con respecto a la farmacocinética de los AINES:",
        options: [
            { id: "a", text: "Su administración por lo general es por vía parenteral", isCorrect: true }, // Sigo la respuesta marcada en el PDF
            { id: "b", text: "Los AINES ácidos suelen competir por la unión a proteínas" },
            { id: "c", text: "Los AINES básicos suelen competir por la unión a proteínas" },
            { id: "d", text: "A y C son correctas" }
        ]
    },
    {
        id: 208,
        category: "Corticoides",
        text: "Empleado a dosis equivalente ¿Cuál de los siguientes glucocorticoiedes tiene mayor efecto mineralocorticoide?",
        options: [
            { id: "a", text: "Prednisolona" },
            { id: "b", text: "Hidrocortisona", isCorrect: true },
            { id: "c", text: "Dexametasona" },
            { id: "d", text: "Budesonide" }
        ]
    },
    {
        id: 209,
        category: "Corticoides",
        text: "¿Cuál de las siguientes acciones de la prednisolone requiere dosis más elevadas para producirse?",
        options: [
            { id: "a", text: "Antiinflamatoria" },
            { id: "b", text: "Terapia de reemplazo" },
            { id: "c", text: "Inmunosupresora", isCorrect: true },
            { id: "d", text: "Antialérgica" }
        ]
    },
    {
        id: 210,
        category: "Corticoides",
        text: "Respecto a glucocorticoides marque la INCORRECTA:",
        options: [
            { id: "a", text: "Inhiben la translocación nuclear de NF-kB" },
            { id: "b", text: "La supresión brusca puede generar hipotensión marcada" },
            { id: "c", text: "Se pueden usar por vía intraarticular" },
            { id: "d", text: "Se usan como tratamiento de primera elección en la artritis reumatoidea", isCorrect: true } // Son coadyuvantes o para empujes
        ]
    },
    
    // --- PDF 3: Choice 10 AINES ---
    {
        id: 301,
        category: "AINEs",
        text: "Indique cuál de las siguientes es una interacción a tener en cuenta cuando un paciente toma AINEs",
        options: [
            { id: "a", text: "Con anticoagulantes orales (riesgo sangrado)" },
            { id: "b", text: "Con metrotexato (toxicidad)" },
            { id: "c", text: "Con diuréticos como furosemida (disminuye diuresis)" },
            { id: "d", text: "Todas son correctas", isCorrect: true }
        ]
    },
    {
        id: 302,
        category: "AINEs",
        text: "Indique lo correcto respecto del ácido acetil salicílico (AAS)",
        options: [
            { id: "a", text: "Es un inhibidor irreversible altamente selectivo de la COX-2" },
            { id: "b", text: "No existen diferencias farmacodinámicas entre AAS y acido salicilico" },
            { id: "c", text: "Para aumentar eliminación del AAS, se puede acidificar orina" },
            { id: "d", text: "En condiciones toxicas puede inhibir el centro respiratorio y producir acidosis mixta", isCorrect: true }
        ]
    },
    {
        id: 303,
        category: "AINEs",
        text: "El diclofenac, señale lo correcto",
        options: [
            { id: "a", text: "Tiene una vida media prolongada" },
            { id: "b", text: "Tiene alta afinidad por la COX-1 comparado con aspirina" },
            { id: "c", text: "Se concentra en líquido sinovial", isCorrect: true },
            { id: "d", text: "No produce nunca hepatotoxicidad" }
        ]
    },
    {
        id: 304,
        category: "AINEs",
        text: "El ketorolac, señale lo correcto",
        options: [
            { id: "a", text: "Tiene gran efecto antiinflamatorio" },
            { id: "b", text: "No debe utilizarse por más de 5 días consecutivos", isCorrect: true },
            { id: "c", text: "Es el que menos probabilidades tiene de producir sangrado GI" },
            { id: "d", text: "Solo se administra vía oral" }
        ]
    },
    {
        id: 305,
        category: "AINEs",
        text: "La dipirona, indique la incorrecta",
        options: [
            { id: "a", text: "Es eficaz como analgésico y antipirético" },
            { id: "b", text: "Los efectos adversos más importantes: convulsiones y rabdomiolisis", isCorrect: true }, // Asumo que el PDF indica B como incorrecta al ser Agranulocitosis el más importante
            { id: "c", text: "Está prohibida o uso restringido en muchos países" },
            { id: "d", text: "Puede producir agranulocitosis" }
        ]
    },
    {
        id: 306,
        category: "AINEs",
        text: "¿Que AINE usaría para dolores muy intensos, y no puede usarse más de 5 días?",
        options: [
            { id: "a", text: "Tramadol" },
            { id: "b", text: "Ibuprofeno" },
            { id: "c", text: "Ketorolac", isCorrect: true },
            { id: "d", text: "Diclofenac" }
        ]
    },
    {
        id: 307,
        category: "AINEs",
        text: "Respecto a la fisiopatología de la ulcera por AINES marque la INCORRECTA",
        options: [
            { id: "a", text: "La infusión endovenosa de los AINES eliminan este efecto adverso", isCorrect: true },
            { id: "b", text: "El Ketorolac es uno de los aines más agresivos a nivel GI" },
            { id: "c", text: "Los inhibidores de la COX-2 selectivos tienen menor impacto a nivel GI" },
            { id: "d", text: "La asociación de GC con AINES aumenta el riesgo de ulcera" }
        ]
    },
    {
        id: 308,
        category: "AINEs",
        text: "Cómo se metaboliza el paracetamol?",
        options: [
            { id: "a", text: "CYP 2E1 a cualquier dosis" },
            { id: "b", text: "Por conjugación y CYP 3A4 en altas dosis" },
            { id: "c", text: "CYP2D6 a cualquier dosis" },
            { id: "d", text: "Por conjugación y CYP2E1 en altas dosis (intoxicación)", isCorrect: true }
        ]
    },
    {
        id: 309,
        category: "AINEs",
        text: "¿Cuál de los siguientes AINES puede aumentar el riesgo protrombótico?",
        options: [
            { id: "a", text: "Aspirina" },
            { id: "b", text: "El paracetamol" },
            { id: "c", text: "El diclofenac / inhibidores COX-2", isCorrect: true },
            { id: "d", text: "Todos son cardioprotectores" }
        ]
    },
    {
        id: 310,
        category: "AINEs",
        text: "Indique que AINES son de inhibición prolongada de la COX",
        options: [
            { id: "a", text: "Naproxeno, meloxicam y piroxicam", isCorrect: true },
            { id: "b", text: "Aspirina e indometacina" },
            { id: "c", text: "Ibuprofeno, aspirina y meloxicam" },
            { id: "d", text: "Naproxeno, aspirina y piroxicam" }
        ]
    },
    {
        id: 311,
        category: "AINEs",
        text: "Los efectos adversos de los AINES, marque la incorrecta",
        options: [
            { id: "a", text: "Pueden generar Úlcera" },
            { id: "b", text: "Bloquean la agregación plaquetaria" },
            { id: "c", text: "Pueden mantener el ductus permeable", isCorrect: true }, // AINEs cierran el ductus, no lo mantienen
            { id: "d", text: "Inhibición de la función renal" }
        ]
    },
    
    // --- PDF 4 (El Probenecid) ---
    {
        id: 401,
        category: "Otros Fármacos",
        text: "El Probenecid:",
        options: [
            { id: "a", text: "Es un anestesico local" },
            { id: "b", text: "Es un AINE" },
            { id: "c", text: "Es un uricosurico y se usa para el tratamiento de la hiperuricemia", isCorrect: true },
            { id: "d", text: "Es un uricolitico" }
        ]
    },
    {
        id: 402,
        category: "AINEs",
        text: "Los AINE's a nivel bronquial:",
        options: [
            { id: "a", text: "Broncodilatacion" },
            { id: "b", text: "Broncoconstriccion por inhibición de la enzima ciclo-oxigenasa (COX)", isCorrect: true },
            { id: "c", text: "Aumentan secreción de mucus" },
            { id: "d", text: "Inhiben receptores adenosina" }
        ]
    },
    {
        id: 403,
        category: "Otros Fármacos",
        text: "La característica principal del Alopurinol es:",
        options: [
            { id: "a", text: "Ser un fármaco utilizado para el ataque agudo de gota" },
            { id: "b", text: "Aumentar excreción acido úrico" },
            { id: "c", text: "Disminuye la síntesis de ácido úrico", isCorrect: true },
            { id: "d", text: "Aumenta metabolismo acido úrico" }
        ]
    },
    {
        id: 404,
        category: "AINEs",
        text: "El efecto adverso grave que se puede producir con la dipirona es:",
        options: [
            { id: "a", text: "Neuropatía" },
            { id: "b", text: "Neurotoxicidad" },
            { id: "c", text: "Convulsiones" },
            { id: "d", text: "La agranulocitosis", isCorrect: true }
        ]
    },
    {
        id: 405,
        category: "Opioides",
        text: "La metadona:",
        options: [
            { id: "a", text: "Es un agonista mixto" },
            { id: "b", text: "Presenta un fuerte metabolismo hepatico", isCorrect: true },
            { id: "c", text: "Es un agonista kappa" },
            { id: "d", text: "Vida media corta" }
        ]
    },
    {
        id: 406,
        category: "Opioides",
        text: "La morfina:",
        options: [
            { id: "a", text: "Es un ansiolítico" },
            { id: "b", text: "Produce constipación y contrae el esfínter de Oddi", isCorrect: true },
            { id: "c", text: "Es psicoestimulante" },
            { id: "d", text: "Es antipirética" }
        ]
    },
    
    // --- PDF 5 (3er Parcial Farmaco Manuscrito/Escaneado) ---
    {
        id: 501,
        category: "AINEs",
        text: "El Ketorolac:",
        options: [
            { id: "a", text: "Se administra por via oral únicamente" },
            { id: "b", text: "Pertenece al grupo de los corticoides" },
            { id: "c", text: "En el hepatocito estimula síntesis TXA2" },
            { id: "d", text: "Puede producir insuficiencia renal ante un uso prolongado", isCorrect: true }
        ]
    },
    {
        id: 502,
        category: "AINEs",
        text: "Respecto a los AINE y su forma de inhibición de la COX:",
        options: [
            { id: "a", text: "La aspirina inhibe de forma irreversible a la COX 2" },
            { id: "b", text: "El etoricoxib inhibe de forma selectiva la COX 2", isCorrect: true },
            { id: "c", text: "La indometacina inhibe preferentemente la COX 2" },
            { id: "d", text: "El meloxicam inhibe preferentemente la COX 1" }
        ]
    },
    {
        id: 503,
        category: "AINEs",
        text: "El paracetamol...",
        options: [
            { id: "a", text: "Es un antiinflamatorio y analgésico con nula acción antipirética" },
            { id: "b", text: "Es un antipirético y antiinflamatorio con nula acción analgésica" },
            { id: "c", text: "Es un analgésico que también posee acción antipirética y nula acción antiinflamatoria", isCorrect: true },
            { id: "d", text: "Solo tiene acción analgésica" }
        ]
    },
    {
        id: 504,
        category: "AINEs",
        text: "La Dipirona...",
        options: [
            { id: "a", text: "Es un AINE derivado del ácido acético" },
            { id: "b", text: "Actúa únicamente sobre la síntesis de los leucotrienos" },
            { id: "c", text: "Puede producir reacción de anafilaxia", isCorrect: true },
            { id: "d", text: "Se comporta como antiagregante plaquetario" }
        ]
    },
    {
        id: 505,
        category: "AINEs",
        text: "Para una paciente embarazada luego de las 30 semanas, si fuera necesario usted usaría...",
        options: [
            { id: "a", text: "Diclofenac-indometacina" },
            { id: "b", text: "Piroxicam-meloxicam" },
            { id: "c", text: "Ketoprofeno" },
            { id: "d", text: "Ibuprofeno-paracetamol", isCorrect: true }
        ]
    },
    {
        id: 506,
        category: "Otros Fármacos",
        text: "En relación al febuxostat su caracteristica principal es ser...",
        options: [
            { id: "a", text: "Una droga hipouricemiante que impide el metabolismo final de las purinas (inhibe xantina oxidasa)", isCorrect: true },
            { id: "b", text: "Un uricosúrico" },
            { id: "c", text: "Sustrato de enzima pirimidina" },
            { id: "d", text: "Antiinflamatorio para gota aguda" }
        ]
    },
    {
        id: 507,
        category: "Corticoides",
        text: "Un niño con asma grave recibe tratamiento con altas dosis de corticosteroides inhalados. ¿Efecto adverso?",
        options: [
            { id: "a", text: "Hipoglucemia" },
            { id: "b", text: "Hirsutismo" },
            { id: "c", text: "Supresión del crecimiento", isCorrect: true },
            { id: "d", text: "Síndrome de Cushing" }
        ]
    },
    {
        id: 508,
        category: "Opioides",
        text: "En dolores de moderada intensidad, usted utilizaría...",
        options: [
            { id: "a", text: "Tramadol", isCorrect: true },
            { id: "b", text: "Metadona" },
            { id: "c", text: "Nalbufina" },
            { id: "d", text: "Naltrexona" }
        ]
    },
    {
        id: 509,
        category: "Opioides",
        text: "La buprenorfina...",
        options: [
            { id: "a", text: "Es un agonista parcial de los receptores mu con una potencia 25 a 50 veces mayor que la morfina", isCorrect: true },
            { id: "b", text: "Es un opioide sintético agonista mu" },
            { id: "c", text: "Es un agonista puro mu" },
            { id: "d", text: "Es antagonista" }
        ]
    },
    {
        id: 510,
        category: "Opioides",
        text: "El dextropropoxifeno...",
        options: [
            { id: "a", text: "Es un AINE de acción corta" },
            { id: "b", text: "Tiene efectos similares a la morfina", isCorrect: true },
            { id: "c", text: "Se utiliza individual" },
            { id: "d", text: "Es un glucocorticoide" }
        ]
    },

    // --- PREGUNTAS PREVIAMENTE EXTRAÍDAS (IDs 601-622) ---
    {
        id: 601,
        category: "AINEs",
        text: "Un paciente de 72 años con antecedentes de gastritis erosiva con hemorragia digestiva, hipertenso... concurre a la consulta refiriendo un dolor abdominal asociado a una inflamación gástrica. ¿Qué aconseja?",
        options: [
            { id: "a", text: "Indicar Diclofenac más protección gástrica." },
            { id: "b", text: "Aconsejar administrar Etoricoxib más protección gástrica." },
            { id: "c", text: "Aconsejar administrar Ibuprofeno más protección gástrica." },
            { id: "d", text: "Recomendar indicar Celecoxib 200 mg más protección gástrica.", isCorrect: true }
        ]
    },
    {
        id: 602,
        category: "AINEs",
        text: "De las siguientes características farmacodinámicas y farmacocinéticas, ¿cuál se relaciona con el efecto antiagregante plaquetario del ácido acetilsalicílico (AAS)?",
        options: [
            { id: "a", text: "La alta unión a proteínas plasmáticas y su efecto COX-2 selectivo." },
            { id: "b", text: "La inhibición irreversible de la COX a nivel endotelial y plaquetaria y su transformación en el primer paso hepático en más del 50% a ácido salicílico.", isCorrect: true },
            { id: "c", text: "La inhibición reversible de la COX-1 plaquetaria y la alta unión a las proteínas del endotelio." },
            { id: "d", text: "La inhibición reversible de la COX a nivel endotelial y plaquetaria y su eliminación renal dependiente del pH urinario." }
        ]
    },
    {
        id: 603,
        category: "AINEs",
        text: "A la hora de elegir un AINE, usted tendría que cuenta:",
        options: [
            { id: "a", text: "La potencia." },
            { id: "b", text: "El costo y la seguridad." },
            { id: "c", text: "La eficacia." },
            { id: "d", text: "La eficacia y la potencia.", isCorrect: true }
        ]
    },
    {
        id: 604,
        category: "Corticoides",
        text: "¿Cuál de las siguientes zonas de la glándula suprarrenal está correctamente asociada con el tipo de sustancia que secreta?",
        options: [
            { id: "a", text: "Zona fasciculada - cortisol.", isCorrect: true },
            { id: "b", text: "Zona glomerulosa - andrógenos." },
            { id: "c", text: "Médula suprarrenal - corticotropina." },
            { id: "d", text: "Zona reticular - catecolaminas." }
        ]
    },
    {
        id: 605,
        category: "Corticoides",
        text: "Luego de un tratamiento prolongado con dosis altas de corticoides, la reducción gradual de un glucocorticoide se requiere para la recuperación:",
        options: [
            { id: "a", text: "de la función normal de los osteoblastos." },
            { id: "b", text: "de la liberación deprimida de insulina de las células pancreáticas." },
            { id: "c", text: "de la hematopoyesis en la médula ósea." },
            { id: "d", text: "del sistema hipotálamo-hipófisis-suprarrenal.", isCorrect: true }
        ]
    },
    {
        id: 606,
        category: "Corticoides",
        text: "¿Cuál de los siguientes fármacos media sus efectos al unirse y activar un receptor intracelular que actúa como un factor de transcripción?",
        options: [
            { id: "a", text: "Morfina." },
            { id: "b", text: "Lidocaína." },
            { id: "c", text: "Insulina." },
            { id: "d", text: "Hidrocortisona.", isCorrect: true }
        ]
    },
    {
        id: 607,
        category: "Corticoides",
        text: "¿Cuál de los siguientes es un efecto tóxico asociado con el tratamiento con glucocorticoides a largo plazo?",
        options: [
            { id: "a", text: "Hipotensión." },
            { id: "b", text: "Broncoespasmo." },
            { id: "c", text: "Osteoporosis.", isCorrect: true },
            { id: "d", text: "Hipoglucemia." }
        ]
    },
    {
        id: 608,
        category: "Opioides",
        text: "La Buprenorfina es un fármaco utilizado en el proceso de deshabituación opioidea. A diferencia de la Metadona, tiene menos probabilidades de provocar una intoxicación opioidea. ¿A qué se debe esto?",
        options: [
            { id: "a", text: "A su muy baja biodisponibilidad por vía oral." },
            { id: "b", text: "A su actividad intrínseca < 1 (agonista parcial).", isCorrect: true },
            { id: "c", text: "A su rápida metabolización hepática." },
            { id: "d", text: "A su alta interacción con otras drogas." }
        ]
    },
    {
        id: 609,
        category: "Opioides",
        text: "En cuanto a la morfina, es correcto:",
        options: [
            { id: "a", text: "Su metabolito más activo es la morfina-3-glucurónido." },
            { id: "b", text: "Se puede administrar por vía intratecal.", isCorrect: true },
            { id: "c", text: "Es uno de los opioides que no produce constipación como efecto adverso." },
            { id: "d", text: "Un signo típico de su intoxicación es la midriasis arreactiva." }
        ]
    },
    {
        id: 610,
        category: "Anestesia y Relajantes",
        text: "Respecto a los objetivos de la anestesia, indique la correcta:",
        options: [
            { id: "a", text: "Bloqueo sensitivo (analgesia), para el cual puedo usar drogas como atropina." },
            { id: "b", text: "Bloqueo de la conciencia (sedación), para la cual puedo usar opioides." },
            { id: "c", text: "Bloqueo autonómico, puedo usar benzodiacepinas." },
            { id: "d", text: "Bloqueo motor, para el cual puedo usar relajantes musculares.", isCorrect: true }
        ]
    },
    {
        id: 611,
        category: "Anestesia y Relajantes",
        text: "¿Qué relajante usaría ante un paciente con falla renal?",
        options: [
            { id: "a", text: "Atracurio porque se metaboliza a nivel hepático y se elimina vía biliar" },
            { id: "b", text: "Tubocurarina (curare) ya que no tiene metabolismo activo" },
            { id: "c", text: "Pancuronio ya que sufre degradación de hoffman" },
            { id: "d", text: "Atracurio ya que sufre degradación de hoffman.", isCorrect: true }
        ]
    },
    {
        id: 612,
        category: "Anestesia y Relajantes",
        text: "Con respecto al atracurio...",
        options: [
            { id: "a", text: "Está contraindicado en insuficiencia renal." },
            { id: "b", text: "Su metabolismo es principalmente hepático." },
            { id: "c", text: "No libera histamina." },
            { id: "d", text: "Duración de acción más corta que el rocuronio o vecuronio.", isCorrect: true }
        ]
    },
    {
        id: 613,
        category: "Anestesia y Relajantes",
        text: "La droga más apropiada para obtener un óptimo bloqueo de la conciencia durante una anestesia general es...",
        options: [
            { id: "a", text: "El sevofluorano.", isCorrect: true },
            { id: "b", text: "La bupivacaina." },
            { id: "c", text: "La fenilefrina." },
            { id: "d", text: "El rocuronio." }
        ]
    },
    {
        id: 614,
        category: "Anestesia y Relajantes",
        text: "Con respecto al Óxido Nitroso...",
        options: [
            { id: "a", text: "Tiene una CAM baja (es potente)." },
            { id: "b", text: "Tiene un coeficiente sangre/gas alto." },
            { id: "c", text: "Produce rápida inducción por su coeficiente sangre/gas bajo.", isCorrect: true },
            { id: "d", text: "No se usa en anestesia pediátrica." }
        ]
    },
    {
        id: 615,
        category: "Anestesia y Relajantes",
        text: "Los anestésicos locales producen...",
        options: [
            { id: "a", text: "Enlentecimiento del potencial de acción sin cambios en el potencial umbral.", isCorrect: true },
            { id: "b", text: "Aumento del potencial de acción sin cambios en el potencial umbral." },
            { id: "c", text: "Enlentecimiento del potencial de acción con aumento del potencial umbral." },
            { id: "d", text: "No altera el potencial de acción y cambia el potencial umbral." }
        ]
    },
    {
        id: 616,
        category: "Anestesia y Relajantes",
        text: "Con respecto al Halotano...",
        options: [
            { id: "a", text: "Se caracteriza por producir hipertensión y aumento del gasto cardíaco." },
            { id: "b", text: "Se caracteriza por su elevado poder antiarrítmico." },
            { id: "c", text: "Entre sus efectos adversos característicos se encuentra la hepatitis.", isCorrect: true },
            { id: "d", text: "No sensibiliza el miocardio a las catecolaminas." }
        ]
    },
    {
        id: 617,
        category: "Anestesia y Relajantes",
        text: "¿Cuál de los siguientes es un líquido volátil utilizado en anestesia?",
        options: [
            { id: "a", text: "Ciclopropano." },
            { id: "b", text: "Tiopental sódico." },
            { id: "c", text: "Sevofluorano.", isCorrect: true },
            { id: "d", text: "Ketamina." }
        ]
    },
    {
        id: 618,
        category: "Anestesia y Relajantes",
        text: "Respecto a la ketamina:",
        options: [
            { id: "a", text: "Es un antagonista de los receptores de magnesio." },
            { id: "b", text: "Es hiperalgésico, anti-alodinia y analgésico." },
            { id: "c", text: "Es antagonista de los receptores NMDA.", isCorrect: true },
            { id: "d", text: "No genera anestesia disociativa." }
        ]
    },
    {
        id: 619,
        category: "Anestesia y Relajantes",
        text: "Con respecto al halotano (efecto cardíaco):",
        options: [
            { id: "a", text: "Por sus características producía una lenta inducción y recuperación." },
            { id: "b", text: "Sensibiliza el miocardio a la acción de las catecolaminas con la probable aparición de arritmias.", isCorrect: true },
            { id: "c", text: "Es una droga de elección para pacientes con predictores de hipertermia maligna." },
            { id: "d", text: "Se considera una droga hepato-protectora." }
        ]
    },
    {
        id: 620,
        category: "Anestesia y Relajantes",
        text: "Disminuyen la CAM (Concentración Alveolar Mínima):",
        options: [
            { id: "a", text: "La menor edad (niños/bebés)." },
            { id: "b", text: "La hipertermia." },
            { id: "c", text: "El uso concomitante de Opioides.", isCorrect: true },
            { id: "d", text: "El uso de cafeína." }
        ]
    },
    {
        id: 621,
        category: "AINEs",
        text: "Respecto de los AINEs durante el embarazo...",
        options: [
            { id: "a", text: "Al inhibir la síntesis de prostaglandinas, los AINEs pueden producir una disminución de la motilidad uterina y retardo del trabajo de parto.", isCorrect: true },
            { id: "b", text: "Los derivados de la anilina son considerados drogas de alto riesgo fetal." },
            { id: "c", text: "En el útero grávido, tanto la PGF2a como la PGE2 inhiben las contracciones uterinas." },
            { id: "d", text: "Al inhibir la síntesis de prostaglandinas, los AINEs pueden producir un aumento de la motilidad uterina e inducción del trabajo de parto." }
        ]
    },
    {
        id: 622,
        category: "Corticoides",
        text: "Los glucocorticoides...",
        options: [
            { id: "a", text: "Tienen efecto (catabólico) proteico.", isCorrect: true },
            { id: "b", text: "Inhiben la gluconeogénesis." },
            { id: "c", text: "No intervienen en las reacciones de hipersensibilidad retardada." },
            { id: "d", text: "No atraviesan barreras biológicas por su estructura cuaternaria." }
        ]
    },

    // --- NUEVAS PREGUNTAS AGREGADAS (IDs 623-625) ---
    {
        id: 623,
        category: "Anestesia y Relajantes",
        text: "Respecto a la succinil-colina, es correcto que:",
        options: [
            { id: "a", text: "Su mecanismo de acción consiste en estimular la liberación de acetilcolina y promover relajación muscular" },
            { id: "b", text: "Su administración previene el desarrollo de fasciculaciones" },
            { id: "c", text: "Su administración con halotano puede producir hipertermia maligna", isCorrect: true },
            { id: "d", text: "Es un relajante muscular no despolarizante de acción intermedia" }
        ]
    },
    {
        id: 624,
        category: "Opioides",
        text: "La codeína:",
        options: [
            { id: "a", text: "Posee cierto efecto broncodilatador" },
            { id: "b", text: "Se indica como antipirético" },
            { id: "c", text: "Se prescribe como antitusivo", isCorrect: true },
            { id: "d", text: "Tiene un efecto analgesico muy potente" }
        ]
    },
    {
        id: 625,
        category: "Anestesia y Relajantes",
        text: "En cuanto a la Lidocaína, es correcto afirmar que:",
        options: [
            { id: "a", text: "De su metabolismo se encarga las esterasas" },
            { id: "b", text: "No se administra por via IV" },
            { id: "c", text: "Su efecto es prolongado" },
            { id: "d", text: "Es una droga flujo dependiente", isCorrect: true }
        ]
    },
];

export const getCategories = () => {
    const categories = new Set(questions.map(q => q.category));
    return Array.from(categories);
};

export const getQuestionsByCategory = (category: string) => {
    return questions.filter(q => q.category === category);
};
const units = [
  {
    id: "phonemic-cvc",
    label: "Unit 1",
    title: "Phonemic Awareness and CVC Review",
    range: "Lessons 1-10",
    audience: "First Grade",
    description:
      "Blend, segment, substitute, and review CVC words with all five short vowels.",
    lessons: [
      "Phoneme Blending (3 sounds)",
      "Phoneme Segmentation (3 sounds)",
      "Short A CVC Words",
      "Short I CVC Words",
      "Short O CVC Words",
      "Short U CVC Words",
      "Short E CVC Words",
      "Mixed Short Vowel Practice",
      "Phoneme Substitution (change beginning sound)",
      "CVC Fluency Review",
    ],
  },
  {
    id: "digraphs",
    label: "Unit 2",
    title: "Digraphs",
    range: "Lessons 11-24",
    audience: "First Grade",
    description:
      "Introduce common consonant digraphs, then move into word building, sentence reading, and review.",
    lessons: [
      "Digraph SH",
      "Digraph CH",
      "Digraph TH (unvoiced)",
      "Digraph TH (voiced)",
      "Digraph WH",
      "Digraph CK (final)",
      "Digraph NG (final)",
      "Digraph TCH",
      "Digraph DGE",
      "Mixed Digraph Practice",
      "Digraph Reading Fluency",
      "Digraph Word Building",
      "Digraph Sentence Reading",
      "Digraph Review",
    ],
  },
  {
    id: "consonant-blends",
    label: "Unit 3",
    title: "Consonant Blends",
    range: "Lessons 25-44",
    audience: "First Grade",
    description:
      "Build from initial blends into final blends, three-letter blends, fluency, and mastery checks.",
    lessons: [
      "BL / CL / FL",
      "BR / CR / DR",
      "SL / SM / SN",
      "SP / ST / SK",
      "TR / GR / PR",
      "Mixed Initial Blends",
      "Blend Word Building",
      "Blend Sentence Reading",
      "ND / NT",
      "MP / ST",
      "SK / FT",
      "LK / LP",
      "Three-Letter Blends (STR / SPL)",
      "Blend Fluency Practice",
      "Blend Sentence Fluency",
      "Blend Reading Practice",
      "Blend Review 1",
      "Blend Review 2",
      "Blend Reading Fluency",
      "Blend Mastery Check",
    ],
  },
  {
    id: "two-syllable-closed",
    label: "Unit 4",
    title: "Two-Syllable Closed Words",
    range: "Lessons 45-54",
    audience: "First Grade",
    description:
      "Introduce syllable thinking and chunking strategies for reading and building longer words.",
    lessons: [
      "Introduction to Syllables",
      "Closed Syllable Review",
      "Reading Two Closed Syllables",
      "Word Chunking Strategy",
      "Compound Words",
      "Two-Syllable Word Practice",
      "Multisyllabic Word Building",
      "Sentence Reading (Two Syllables)",
      "Multisyllabic Fluency",
      "Unit Review",
    ],
  },
  {
    id: "silent-e-vce",
    label: "Unit 5",
    title: "Silent E / VCe",
    range: "Lessons 55-69",
    audience: "First Grade",
    description:
      "Move from introduction to pattern-specific lessons, reading practice, sentence fluency, and review.",
    lessons: [
      "Silent E Introduction",
      "A_E Pattern",
      "I_E Pattern",
      "O_E Pattern",
      "U_E Pattern",
      "Silent E Word Building",
      "Silent E Reading Practice",
      "Silent E Sentence Reading",
      "Mixed Silent E Practice",
      "Silent E Fluency",
      "Silent E Review 1",
      "Silent E Review 2",
      "Silent E Reading Practice",
      "Silent E Sentence Fluency",
      "Silent E Mastery Review",
    ],
  },
  {
    id: "vowel-teams",
    label: "Unit 6",
    title: "Vowel Teams",
    range: "Lessons 70-84",
    audience: "First Grade",
    description:
      "Introduce common long-vowel teams and move toward connected reading and fluency practice.",
    lessons: [
      "Vowel Team Introduction",
      "AI",
      "AY",
      "EE",
      "EA",
      "OA",
      "OW (long o)",
      "IGH",
      "OO (moon sound)",
      "OO (book sound)",
      "Vowel Team Word Building",
      "Vowel Team Reading Practice",
      "Vowel Team Sentence Reading",
      "Vowel Team Fluency",
      "Vowel Team Review",
    ],
  },
  {
    id: "r-controlled",
    label: "Unit 7",
    title: "R-Controlled Vowels",
    range: "Lessons 85-90",
    audience: "First Grade",
    description:
      "Close the year with focused instruction on r-controlled patterns and a cumulative review.",
    lessons: ["AR", "OR", "ER", "IR", "UR", "R-Controlled Review"],
  },
];

const lessons = units.flatMap((unit) =>
  unit.lessons.map((title, index) => ({
    title,
    unit: unit.label,
    unitTitle: unit.title,
    category: unit.id,
    audience: unit.audience,
    language: "English first, translation-ready",
    duration: "8-10 min",
    lessonNumber: Number(unit.range.match(/\d+/)[0]) + index,
    description: unit.description,
  })),
);

const translations = {
  en: {
    navLessons: "Lessons",
    navRoadmap: "Roadmap",
    navTranslation: "Translation",
    navFamilies: "Families",
    navAbout: "About",
    navFaq: "FAQ",
    heroEyebrow: "Inclusive literacy support",
    heroTitle:
      "Reading lesson recordings designed for home, school, and everywhere in between.",
    heroText:
      "A calm, easy-to-use library of structured literacy lessons built around your own phonological scope and sequence, with translation support, clear navigation, and layouts that work beautifully on phones, tablets, and computers.",
    browseLessons: "Browse Lessons",
    seeLanguages: "See Language Options",
    statLessons: "first-grade lessons ready",
    statUnits: "units ready for first grade",
    statGrades: "grade band ready to launch",
    featuredLesson: "Featured lesson",
    spotlightText:
      "Launch with a clear first-grade pathway that begins with oral blending and builds toward fluent decoding.",
    captionsReady: "Captions ready",
    familyFriendly: "Family-friendly pacing",
    languageAccess: "Language access",
    translationText:
      "Start in English, then expand with translated navigation, lesson summaries, and parent guidance.",
    trustOneTitle: "Simple to navigate",
    trustOneText:
      "Clear categories, large buttons, and uncluttered pages help families find lessons fast.",
    trustTwoTitle: "Built for multilingual learners",
    trustTwoText:
      "Translation-ready sections make it easier to support caregivers in more than one language.",
    trustThreeTitle: "Made for real devices",
    trustThreeText:
      "The layout adapts cleanly to desktops, tablets, and phones without extra work.",
    roadmapEyebrow: "Grade roadmap",
    roadmapTitle: "A launch plan that shows what is ready now and what comes next",
    roadmapIntro:
      "First grade is ready to publish now. Kindergarten and second grade can be added as the next phases of the library.",
    roadmapKLabel: "Coming next",
    roadmapKTitle: "Kindergarten",
    roadmapKText:
      "Foundational phonological awareness, early sound-symbol connections, and beginner blending routines.",
    roadmap1Label: "Ready now",
    roadmap1Title: "First Grade",
    roadmap1Text:
      "A complete 90-lesson sequence across seven units with room for video lessons, summaries, and translated support.",
    roadmap2Label: "In development",
    roadmap2Title: "Second Grade",
    roadmap2Text:
      "Expanded multisyllabic decoding, advanced patterns, and more fluent reading work.",
    libraryEyebrow: "Lesson library",
    libraryTitle: "First grade scope and sequence, organized for real use",
    libraryIntro:
      "First grade is fully mapped with 90 lessons across seven units. Kindergarten and second grade are in development.",
    filterLabel: "Unit",
    filterAll: "All lessons",
    filterUnitOne: "Unit 1: Phonemic Awareness and CVC Review",
    filterUnitTwo: "Unit 2: Digraphs",
    filterUnitThree: "Unit 3: Consonant Blends",
    filterUnitFour: "Unit 4: Two-Syllable Closed Words",
    filterUnitFive: "Unit 5: Silent E / VCe",
    filterUnitSix: "Unit 6: Vowel Teams",
    filterUnitSeven: "Unit 7: R-Controlled Vowels",
    comingEyebrow: "Coming soon",
    comingTitle: "Kindergarten and second grade are already built into the plan",
    comingIntro:
      "These placeholders help families and educators see the full vision now, even before every lesson is published.",
    comingKTitle: "Kindergarten lesson path",
    comingKText:
      "This section will house foundational phonological awareness, early sound play, alphabet knowledge, and first blending lessons.",
    comingKPointOne: "Phonological awareness routines",
    comingKPointTwo: "Letter-sound introduction",
    comingKPointThree: "Early blending and segmenting",
    coming2Title: "Second grade lesson path",
    coming2Text:
      "This section will grow into advanced decoding, larger word analysis, connected text, and more fluent structured reading practice.",
    coming2PointOne: "Multisyllabic decoding",
    coming2PointTwo: "Advanced vowel patterns",
    coming2PointThree: "Fluency and text application",
    translationEyebrow: "Translation support",
    translationTitle: "A realistic multilingual launch plan",
    phaseOneTitle: "Phase 1: fast launch",
    phaseOneText: "Publish lessons in English first with captions and simple parent notes.",
    phaseTwoTitle: "Phase 2: translated support",
    phaseTwoText:
      "Add Spanish summaries, navigation labels, and caregiver directions where they help most.",
    phaseThreeTitle: "Phase 3: expanded access",
    phaseThreeText:
      "Introduce translated transcripts and additional language options as the library grows.",
    sequenceEyebrow: "Scope and sequence",
    sequenceTitle: "Your instruction can be original, structured, and scalable",
    sequenceOneTitle: "Start with phonological skills",
    sequenceOneText:
      "Build early lessons around listening, segmenting, blending, and manipulating sounds.",
    sequenceTwoTitle: "Move into sound-spelling patterns",
    sequenceTwoText:
      "Introduce consonants, short vowels, digraphs, and high-utility word patterns in a clear progression.",
    sequenceThreeTitle: "Grow toward fluent reading",
    sequenceThreeText:
      "Expand into connected text, multisyllabic words, and review pathways for repeated practice.",
    familiesEyebrow: "For families and educators",
    familiesTitle: "Every lesson should feel welcoming, not overwhelming",
    familyOneTitle: "Step-by-step guidance",
    familyOneText:
      "Short descriptions explain what the learner will practice and how an adult can help.",
    familyTwoTitle: "Consistent lesson rhythm",
    familyTwoText:
      "Familiar pacing makes it easier for children to focus and return with confidence.",
    familyThreeTitle: "Accessible design choices",
    familyThreeText:
      "Strong contrast, readable type, and generous spacing support a wide range of users.",
    aboutEyebrow: "About the project",
    aboutTitle: "A warm, trustworthy home for reading instruction",
    aboutText:
      "Mr. DeHart's Read Together Project is designed to give families and educators straightforward access to recorded reading lessons built from an original structured literacy scope and sequence, especially for students who benefit from repeated viewing, clear routines, and multilingual support.",
    footerText:
      "Built to support literacy learning with calm design, strong instruction, and room to grow.",
    recordingLength: "10 minute recording",
    lessonAction: "View lesson details",
    detailEyebrow: "Selected lesson",
    detailOverview: "Overview",
    detailWhatToExpect: "What to expect",
    detailSequence: "Where it fits",
    detailSupport: "Family support",
    detailExpectText: "Short lesson planned for first grade learners.",
    detailSupportText:
      "Use short, repeatable practice. Pause as needed, revisit difficult lessons, and keep the pace calm and encouraging.",
    faqEyebrow: "FAQ",
    faqTitle: "Questions families and educators are likely to ask first",
    faqOneTitle: "How should families use the lessons?",
    faqOneText:
      "Start with the recommended lesson order, watch short sessions consistently, and repeat lessons whenever a student benefits from review.",
    faqTwoTitle: "Will more grades be added?",
    faqTwoText:
      "Yes. The first-grade library is launching first, with Kindergarten and second grade planned next.",
    faqThreeTitle: "Will translated support be available?",
    faqThreeText:
      "Yes. The site is designed to grow into translated navigation, lesson summaries, and caregiver guidance.",
    footerAction: "Back to top",
  },
  es: {
    navLessons: "Lecciones",
    navRoadmap: "Ruta",
    navTranslation: "Traduccion",
    navFamilies: "Familias",
    navAbout: "Acerca de",
    navFaq: "Preguntas",
    heroEyebrow: "Apoyo inclusivo para la alfabetizacion",
    heroTitle:
      "Grabaciones de lecciones de lectura disenadas para el hogar, la escuela y todo lo que hay entre ambos.",
    heroText:
      "Una biblioteca tranquila y facil de usar de lecciones de alfabetizacion estructurada, creada en torno a su propia secuencia fonologica, con apoyo de traduccion, navegacion clara y diseno adaptable para telefonos, tabletas y computadoras.",
    browseLessons: "Ver lecciones",
    seeLanguages: "Ver idiomas",
    statLessons: "lecciones de primer grado listas",
    statUnits: "unidades listas para primer grado",
    statGrades: "nivel listo para lanzamiento",
    featuredLesson: "Leccion destacada",
    spotlightText:
      "Modelado de sonidos, combinacion guiada y pasos de practica sencillos para familias y docentes.",
    captionsReady: "Subtitulos listos",
    familyFriendly: "Ritmo amigable para familias",
    languageAccess: "Acceso de idioma",
    translationText:
      "Comience en ingles y luego amplie con navegacion traducida, resumenes de lecciones y orientacion para familias.",
    trustOneTitle: "Facil de navegar",
    trustOneText:
      "Las categorias claras, botones grandes y paginas simples ayudan a las familias a encontrar lecciones rapidamente.",
    trustTwoTitle: "Creado para estudiantes multilingues",
    trustTwoText:
      "Las secciones preparadas para traduccion facilitan apoyar a cuidadores en mas de un idioma.",
    trustThreeTitle: "Hecho para dispositivos reales",
    trustThreeText:
      "El diseno se adapta bien a computadoras, tabletas y telefonos sin trabajo extra.",
    roadmapEyebrow: "Ruta por grados",
    roadmapTitle: "Un plan de lanzamiento que muestra lo que ya esta listo y lo que sigue",
    roadmapIntro:
      "Primer grado esta listo para publicarse ahora. Kindergarten y segundo grado pueden agregarse en las siguientes fases.",
    roadmapKLabel: "Lo siguiente",
    roadmapKTitle: "Kindergarten",
    roadmapKText:
      "Conciencia fonologica fundamental, primeras conexiones sonido-letra y rutinas iniciales de combinacion.",
    roadmap1Label: "Listo ahora",
    roadmap1Title: "Primer grado",
    roadmap1Text:
      "Una secuencia completa de 90 lecciones en siete unidades con espacio para videos, resumenes y apoyo traducido.",
    roadmap2Label: "En desarrollo",
    roadmap2Title: "Segundo grado",
    roadmap2Text:
      "Decodificacion multisilabica ampliada, patrones avanzados y mayor trabajo de fluidez.",
    libraryEyebrow: "Biblioteca de lecciones",
    libraryTitle: "Secuencia de primer grado organizada para uso real",
    libraryIntro:
      "El primer grado ya tiene 90 lecciones distribuidas en siete unidades. Kindergarten y segundo grado estan en desarrollo.",
    filterLabel: "Unidad",
    filterAll: "Todas las lecciones",
    filterUnitOne: "Unidad 1: Conciencia fonemica y repaso CVC",
    filterUnitTwo: "Unidad 2: Digrafos",
    filterUnitThree: "Unidad 3: Mezclas consonanticas",
    filterUnitFour: "Unidad 4: Palabras cerradas de dos silabas",
    filterUnitFive: "Unidad 5: Silent E / VCe",
    filterUnitSix: "Unidad 6: Equipos vocalicos",
    filterUnitSeven: "Unidad 7: Vocales controladas por r",
    comingEyebrow: "Proximamente",
    comingTitle: "Kindergarten y segundo grado ya forman parte del plan",
    comingIntro:
      "Estos espacios ayudan a las familias y a los educadores a ver la vision completa desde ahora, incluso antes de que se publiquen todas las lecciones.",
    comingKTitle: "Ruta de lecciones de Kindergarten",
    comingKText:
      "Esta seccion incluira conciencia fonologica fundamental, juego temprano con sonidos, conocimiento del alfabeto y primeras lecciones de combinacion.",
    comingKPointOne: "Rutinas de conciencia fonologica",
    comingKPointTwo: "Introduccion sonido-letra",
    comingKPointThree: "Combinacion y segmentacion inicial",
    coming2Title: "Ruta de lecciones de segundo grado",
    coming2Text:
      "Esta seccion crecera hacia decodificacion avanzada, analisis de palabras mas largas, texto conectado y practica de lectura estructurada con mayor fluidez.",
    coming2PointOne: "Decodificacion multisilabica",
    coming2PointTwo: "Patrones vocalicos avanzados",
    coming2PointThree: "Fluidez y aplicacion en texto",
    translationEyebrow: "Apoyo de traduccion",
    translationTitle: "Un plan de lanzamiento multilingue realista",
    phaseOneTitle: "Fase 1: lanzamiento rapido",
    phaseOneText:
      "Publique primero las lecciones en ingles con subtitulos y notas sencillas para familias.",
    phaseTwoTitle: "Fase 2: apoyo traducido",
    phaseTwoText:
      "Agregue resumenes en espanol, etiquetas de navegacion y orientacion para cuidadores donde mas ayuden.",
    phaseThreeTitle: "Fase 3: acceso ampliado",
    phaseThreeText:
      "Incorpore transcripciones traducidas y mas opciones de idioma a medida que crezca la biblioteca.",
    sequenceEyebrow: "Alcance y secuencia",
    sequenceTitle: "Su instruccion puede ser original, estructurada y escalable",
    sequenceOneTitle: "Comience con habilidades fonologicas",
    sequenceOneText:
      "Construya las primeras lecciones en torno a escuchar, segmentar, combinar y manipular sonidos.",
    sequenceTwoTitle: "Avance hacia patrones de sonido y ortografia",
    sequenceTwoText:
      "Introduzca consonantes, vocales cortas, digrafos y patrones de palabras de alta utilidad en una progresion clara.",
    sequenceThreeTitle: "Avance hacia una lectura fluida",
    sequenceThreeText:
      "Amplie hacia texto conectado, palabras multisilabicas y rutas de repaso para practica repetida.",
    familiesEyebrow: "Para familias y educadores",
    familiesTitle: "Cada leccion debe sentirse acogedora, no abrumadora",
    familyOneTitle: "Guia paso a paso",
    familyOneText:
      "Las descripciones breves explican lo que practicara el estudiante y como puede ayudar un adulto.",
    familyTwoTitle: "Ritmo de leccion constante",
    familyTwoText:
      "Un ritmo familiar facilita que los ninos se concentren y regresen con confianza.",
    familyThreeTitle: "Decisiones de diseno accesibles",
    familyThreeText:
      "Buen contraste, tipografia legible y espacio generoso apoyan a una amplia variedad de usuarios.",
    aboutEyebrow: "Sobre el proyecto",
    aboutTitle: "Un hogar calido y confiable para la instruccion de lectura",
    aboutText:
      "El proyecto Read Together del Sr. DeHart esta disenado para brindar a familias y educadores acceso directo a lecciones grabadas de lectura creadas a partir de un alcance y secuencia original de alfabetizacion estructurada, especialmente para estudiantes que se benefician de verlas varias veces, rutinas claras y apoyo multilingue.",
    footerText:
      "Creado para apoyar el aprendizaje de la lectura con un diseno sereno, instruccion solida y espacio para crecer.",
    recordingLength: "Grabacion de 10 minutos",
    lessonAction: "Ver detalles de la leccion",
    detailEyebrow: "Leccion seleccionada",
    detailOverview: "Resumen",
    detailWhatToExpect: "Que esperar",
    detailSequence: "Ubicacion en la secuencia",
    detailSupport: "Apoyo para familias",
    detailExpectText: "Leccion breve pensada para estudiantes de primer grado.",
    detailSupportText:
      "Use practica breve y repetible. Haga pausas cuando sea necesario, repita las lecciones dificiles y mantenga un ritmo sereno y alentador.",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Preguntas que las familias y los educadores probablemente haran primero",
    faqOneTitle: "Como deben usar las familias las lecciones?",
    faqOneText:
      "Empiecen con el orden recomendado, vean sesiones cortas de forma constante y repitan lecciones cuando el estudiante necesite repaso.",
    faqTwoTitle: "Se agregaran mas grados?",
    faqTwoText:
      "Si. La biblioteca de primer grado se lanza primero y luego se agregaran Kindergarten y segundo grado.",
    faqThreeTitle: "Habra apoyo traducido?",
    faqThreeText:
      "Si. El sitio esta disenado para crecer hacia navegacion traducida, resumenes de lecciones y orientacion para cuidadores.",
    footerAction: "Volver arriba",
  },
};

const lessonGrid = document.querySelector("#lesson-grid");
const unitGrid = document.querySelector("#unit-grid");
const lessonDetail = document.querySelector("#lesson-detail");
const lessonFilter = document.querySelector("#lesson-filter");
const languageSwitcher = document.querySelector("#language-switcher");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const topbar = document.querySelector(".topbar");
const spotlightTitle = document.querySelector("#spotlight-title");
const spotlightText = document.querySelector("#spotlight-text");
const spotlightUnit = document.querySelector("#spotlight-unit");
let selectedLessonId = lessons[0].lessonNumber;
let lastScrollY = window.scrollY;

function renderUnits() {
  unitGrid.innerHTML = units
    .map(
      (unit) => `
        <article class="unit-card">
          <span class="badge">${unit.label}</span>
          <h3>${unit.title}</h3>
          <p>${unit.range} · ${unit.lessons.length} lessons</p>
          <p>${unit.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderLessonDetail(lesson) {
  const copy = translations[languageSwitcher.value] || translations.en;
  lessonDetail.innerHTML = `
    <p class="panel-label">${copy.detailEyebrow}</p>
    <h3>Lesson ${lesson.lessonNumber}: ${lesson.title}</h3>
    <div class="detail-meta">
      <div class="detail-item">
        <strong>${copy.detailSequence}</strong>
        <span>${lesson.unit} · ${lesson.unitTitle}</span>
      </div>
      <div class="detail-item">
        <strong>${copy.detailOverview}</strong>
        <span>${lesson.description}</span>
      </div>
      <div class="detail-item">
        <strong>${copy.detailWhatToExpect}</strong>
        <span>${lesson.duration} · ${copy.detailExpectText}</span>
      </div>
      <div class="detail-item">
        <strong>${copy.detailSupport}</strong>
        <span>${copy.detailSupportText}</span>
      </div>
    </div>
  `;

  spotlightTitle.textContent = `Lesson ${lesson.lessonNumber}: ${lesson.title}`;
  spotlightText.textContent = lesson.description;
  spotlightUnit.textContent = `${lesson.unit}: ${lesson.unitTitle}`;
}

function renderLessons(filter = "all") {
  const copy = translations[languageSwitcher.value] || translations.en;
  const filteredLessons =
    filter === "all" ? lessons : lessons.filter((lesson) => lesson.category === filter);

  const activeLesson =
    filteredLessons.find((lesson) => lesson.lessonNumber === selectedLessonId) || filteredLessons[0];

  if (activeLesson) {
    selectedLessonId = activeLesson.lessonNumber;
    renderLessonDetail(activeLesson);
  }

  lessonGrid.innerHTML = filteredLessons
    .map(
      (lesson) => `
        <button class="lesson-button" type="button" data-lesson-id="${lesson.lessonNumber}">
          <article class="lesson-card">
            <div class="lesson-card-top">
              <div>
                <h3>Lesson ${lesson.lessonNumber}: ${lesson.title}</h3>
              </div>
              <span class="badge">${lesson.duration}</span>
            </div>
            <div class="lesson-meta">
              <span class="meta-chip">${lesson.unit}</span>
              <span class="meta-chip">${lesson.unitTitle}</span>
              <span class="meta-chip">${lesson.audience}</span>
            </div>
            <p>${lesson.description}</p>
            <span>${copy.lessonAction}</span>
          </article>
        </button>
      `,
    )
    .join("");
}

function applyTranslations(language) {
  const copy = translations[language] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.documentElement.lang = language;
}

lessonFilter.addEventListener("change", (event) => {
  renderLessons(event.target.value);
});

lessonGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson-id]");
  if (!button) {
    return;
  }

  selectedLessonId = Number(button.dataset.lessonId);
  renderLessons(lessonFilter.value);
});

languageSwitcher.addEventListener("change", (event) => {
  applyTranslations(event.target.value);
  renderUnits();
  renderLessons(lessonFilter.value);
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > lastScrollY;
  const passedThreshold = currentScrollY > 80;

  if (passedThreshold && scrollingDown && !siteNav.classList.contains("open")) {
    topbar.classList.add("is-hidden");
  } else {
    topbar.classList.remove("is-hidden");
  }

  lastScrollY = currentScrollY;
});

applyTranslations("en");
renderUnits();
renderLessons();

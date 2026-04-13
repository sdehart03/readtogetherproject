const units = [
  {
    id: "phonemic-cvc",
    slug: "unit-1.html",
    label: "Unit 1",
    title: "Phonemic Awareness and CVC Review",
    range: "Lessons 1-10",
    audience: "Grades K-1",
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
    slug: "unit-2.html",
    label: "Unit 2",
    title: "Digraphs",
    range: "Lessons 11-24",
    audience: "Grades K-1",
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
    slug: "unit-3.html",
    label: "Unit 3",
    title: "Consonant Blends",
    range: "Lessons 25-44",
    audience: "Grades K-1",
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
    slug: "unit-4.html",
    label: "Unit 4",
    title: "Two-Syllable Closed Words",
    range: "Lessons 45-54",
    audience: "Grades K-1",
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
    slug: "unit-5.html",
    label: "Unit 5",
    title: "Silent E / VCe",
    range: "Lessons 55-69",
    audience: "Grades K-1",
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
    slug: "unit-6.html",
    label: "Unit 6",
    title: "Vowel Teams",
    range: "Lessons 70-84",
    audience: "Grades K-1",
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
    slug: "unit-7.html",
    label: "Unit 7",
    title: "R-Controlled Vowels",
    range: "Lessons 85-90",
    audience: "Grades K-1",
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
    navHome: "Home",
    navLessons: "Lessons",
    navRoadmap: "Roadmap",
    navTranslation: "Translation",
    navFamilies: "Families",
    navAbout: "About",
    navFaq: "FAQ",
    heroEyebrow: "Inclusive literacy support",
    heroTitle: "Structured literacy lessons for home and school.",
    heroText:
      "A structured literacy lesson library organized around a clearly sequenced phonological progression, with mobile-friendly design and room for translated family support.",
    welcomeVideoLabel: "Welcome video",
    welcomeVideoTitle: "A short introduction can live here",
    welcomeVideoText:
      "Add a brief welcome video here later to explain how families can use the site and where to begin.",
    browseLessons: "Browse Lessons",
    seeLanguages: "See Language Options",
    statLessons: "K-1 lessons ready",
    statUnits: "units ready for grades K-1",
    statGrades: "grade grouping ready to launch",
    featuredLesson: "Featured lesson",
    spotlightText:
      "Launch with a clear K-1 pathway that begins with oral blending and builds toward fluent decoding.",
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
      "A combined K-1 lesson pathway is ready to publish now. Grade 2 remains in development.",
    roadmap1Label: "Ready now",
    roadmap1Title: "Grades K-1",
    roadmap1Text:
      "A complete 90-lesson sequence across seven units that can serve a combined Kindergarten and first-grade pathway.",
    roadmap2Label: "In development",
    roadmap2Title: "Grade 2",
    roadmap2Text:
      "Expanded multisyllabic decoding, advanced patterns, and more fluent reading work.",
    libraryEyebrow: "Lesson library",
    libraryTitle: "K-1 scope and sequence, organized for real use",
    libraryHubTitle: "Choose a unit and go straight to the right lessons",
    libraryHubIntro:
      "The combined K-1 pathway is organized into seven units. Open the unit your learner is currently working on instead of scrolling through the entire lesson bank.",
    libraryIntro:
      "The combined K-1 pathway is fully mapped with 90 lessons across seven units. Grade 2 is in development.",
    libraryPageTitle: "K-1 lessons, all in one place",
    libraryPageIntro:
      "Browse the full lesson pathway by unit, preview individual lessons, and keep Grade 2 planning separate until it is ready to launch.",
    unitJumpLabel: "Jump to unit",
    unitJumpPlaceholder: "Choose a unit",
    unitHubLabel: "How to use the library",
    unitHubTitle: "Pick the unit your learner needs right now",
    unitHubText:
      "Each unit opens on its own page with only the connected lessons, which makes the library easier for families to use on phones, tablets, and computers.",
    openUnit: "Open unit",
    backToLibrary: "Back to Library",
    unitPageLabel: "Current unit",
    unitPageLessonsTitle: "Lessons in this unit",
    unitPageIntro:
      "Open the lessons below to stay focused on this unit without scrolling through the full library.",
    lessonJumpLabel: "Jump to lesson",
    lessonJumpPlaceholder: "Choose a lesson",
    previousUnit: "Previous Unit",
    nextUnit: "Next Unit",
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
    comingTitle: "Grade 2 is the next step in the plan",
    comingIntro:
      "The current lesson pathway serves grades K-1. Grade 2 will expand the library with more advanced reading and word-study work.",
    coming2Title: "Grade 2 lesson path",
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
    aboutPageTitle: "Why The Read Together Project exists",
    aboutPageIntro:
      "The Read Together Project is designed to give families and educators a clear, welcoming place to access structured literacy lessons, revisit key skills, and support children with consistent routines across home and school.",
    aboutTitle: "A warm, trustworthy home for reading instruction",
    aboutText:
      "The Read Together Project provides families and educators with straightforward access to recorded reading lessons built from an original structured literacy scope and sequence, especially for students who benefit from repeated viewing, clear routines, and multilingual support.",
    aboutCardOneTitle: "Built for repeated access",
    aboutCardOneText:
      "Families and educators can return to lessons as often as needed, making it easier to review, practice, and build confidence over time.",
    aboutCardTwoTitle: "Grounded in structured literacy",
    aboutCardTwoText:
      "The lesson pathway follows an intentional phonological progression so instruction feels clear, cumulative, and easier to follow.",
    aboutCardThreeTitle: "Designed to grow",
    aboutCardThreeText:
      "The project is built to expand over time with more lessons, stronger family supports, and wider language access.",
    footerText:
      "Designed to support literacy learning with strong instruction, accessible design, and room to grow.",
    recordingLength: "10 minute recording",
    lessonAction: "View lesson details",
    detailEyebrow: "Selected lesson",
    detailOverview: "Overview",
    detailWhatToExpect: "What to expect",
    detailSequence: "Where it fits",
    detailSupport: "Family support",
    detailExpectText: "Short lesson planned for K-1 learners.",
    detailSupportText:
      "Use short, repeatable practice. Pause as needed and revisit lessons when additional review is helpful.",
    faqEyebrow: "FAQ",
    faqTitle: "Questions families and educators are likely to ask first",
    faqOneTitle: "How should families use the lessons?",
    faqOneText:
      "Start with the recommended lesson order, watch short sessions consistently, and repeat lessons whenever a student benefits from review.",
    faqTwoTitle: "Will more grades be added?",
    faqTwoText:
      "Yes. The current K-1 lesson pathway launches first, with Grade 2 planned next.",
    faqThreeTitle: "Will translated support be available?",
    faqThreeText:
      "Yes. The site is designed to grow into translated navigation, lesson summaries, and caregiver guidance.",
    footerAction: "Back to top",
    backHome: "Back to Home",
  },
  es: {
    navHome: "Inicio",
    navLessons: "Lecciones",
    navRoadmap: "Ruta",
    navTranslation: "Traduccion",
    navFamilies: "Familias",
    navAbout: "Acerca de",
    navFaq: "Preguntas",
    heroEyebrow: "Apoyo inclusivo para la alfabetizacion",
    heroTitle: "Lecciones de alfabetizacion estructurada para el hogar y la escuela.",
    heroText:
      "Una biblioteca de alfabetizacion estructurada organizada en torno a una progresion fonologica clara, con diseno adaptable y espacio para apoyo familiar traducido.",
    welcomeVideoLabel: "Video de bienvenida",
    welcomeVideoTitle: "Aqui puede ir una breve introduccion",
    welcomeVideoText:
      "Agregue aqui mas adelante un breve video de bienvenida para explicar como pueden usar el sitio las familias y por donde comenzar.",
    browseLessons: "Ver lecciones",
    seeLanguages: "Ver idiomas",
    statLessons: "lecciones de K-1 listas",
    statUnits: "unidades listas para grados K-1",
    statGrades: "agrupacion lista para lanzamiento",
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
      "La ruta combinada de K-1 esta lista para publicarse ahora. El grado 2 sigue en desarrollo.",
    roadmap1Label: "Listo ahora",
    roadmap1Title: "Grados K-1",
    roadmap1Text:
      "Una secuencia completa de 90 lecciones en siete unidades que puede servir a una ruta combinada de Kindergarten y primer grado.",
    roadmap2Label: "En desarrollo",
    roadmap2Title: "Grado 2",
    roadmap2Text:
      "Decodificacion multisilabica ampliada, patrones avanzados y mayor trabajo de fluidez.",
    libraryEyebrow: "Biblioteca de lecciones",
    libraryTitle: "Secuencia de K-1 organizada para uso real",
    libraryHubTitle: "Elija una unidad y vaya directo a las lecciones correctas",
    libraryHubIntro:
      "La ruta combinada de K-1 esta organizada en siete unidades. Abra la unidad en la que trabaja el estudiante en lugar de recorrer toda la biblioteca.",
    libraryIntro:
      "La ruta combinada de K-1 ya tiene 90 lecciones distribuidas en siete unidades. El grado 2 esta en desarrollo.",
    libraryPageTitle: "Lecciones de K-1 en un solo lugar",
    libraryPageIntro:
      "Recorra toda la ruta de lecciones por unidad, revise lecciones individuales y mantenga aparte la planificacion de grado 2 hasta que este lista para publicarse.",
    unitJumpLabel: "Ir a una unidad",
    unitJumpPlaceholder: "Elija una unidad",
    unitHubLabel: "Como usar la biblioteca",
    unitHubTitle: "Elija la unidad que su estudiante necesita ahora",
    unitHubText:
      "Cada unidad se abre en su propia pagina con solo las lecciones correspondientes, lo que hace que la biblioteca sea mas facil de usar para las familias en telefonos, tabletas y computadoras.",
    openUnit: "Abrir unidad",
    backToLibrary: "Volver a la biblioteca",
    unitPageLabel: "Unidad actual",
    unitPageLessonsTitle: "Lecciones de esta unidad",
    unitPageIntro:
      "Abra las lecciones de abajo para mantenerse enfocado en esta unidad sin tener que recorrer toda la biblioteca.",
    lessonJumpLabel: "Ir a la leccion",
    lessonJumpPlaceholder: "Elija una leccion",
    previousUnit: "Unidad anterior",
    nextUnit: "Unidad siguiente",
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
    comingTitle: "El grado 2 es el siguiente paso del plan",
    comingIntro:
      "La ruta actual de lecciones sirve a los grados K-1. El grado 2 ampliara la biblioteca con trabajo mas avanzado de lectura y estudio de palabras.",
    coming2Title: "Ruta de lecciones de grado 2",
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
    aboutPageTitle: "Por que existe The Read Together Project",
    aboutPageIntro:
      "The Read Together Project esta disenado para dar a familias y educadores un lugar claro y acogedor donde acceder a lecciones de alfabetizacion estructurada, repasar habilidades clave y apoyar a los ninos con rutinas constantes entre el hogar y la escuela.",
    aboutTitle: "Un hogar calido y confiable para la instruccion de lectura",
    aboutText:
      "The Read Together Project brinda a familias y educadores acceso directo a lecciones grabadas de lectura creadas a partir de un alcance y secuencia original de alfabetizacion estructurada, especialmente para estudiantes que se benefician de verlas varias veces, rutinas claras y apoyo multilingue.",
    aboutCardOneTitle: "Pensado para volver a usarlo",
    aboutCardOneText:
      "Las familias y los educadores pueden volver a las lecciones tantas veces como sea necesario, lo que facilita repasar, practicar y ganar confianza con el tiempo.",
    aboutCardTwoTitle: "Basado en alfabetizacion estructurada",
    aboutCardTwoText:
      "La ruta de lecciones sigue una progresion fonologica intencional para que la instruccion se sienta clara, acumulativa y facil de seguir.",
    aboutCardThreeTitle: "Disenado para crecer",
    aboutCardThreeText:
      "El proyecto esta preparado para ampliarse con mas lecciones, apoyos familiares mas fuertes y mayor acceso en distintos idiomas.",
    footerText:
      "Disenado para apoyar el aprendizaje de la lectura con instruccion solida, diseno accesible y espacio para crecer.",
    recordingLength: "Grabacion de 10 minutos",
    lessonAction: "Ver detalles de la leccion",
    detailEyebrow: "Leccion seleccionada",
    detailOverview: "Resumen",
    detailWhatToExpect: "Que esperar",
    detailSequence: "Ubicacion en la secuencia",
    detailSupport: "Apoyo para familias",
    detailExpectText: "Leccion breve pensada para estudiantes de K-1.",
    detailSupportText:
      "Use practica breve y repetible. Haga pausas cuando sea necesario y repita las lecciones cuando haga falta mas repaso.",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Preguntas que las familias y los educadores probablemente haran primero",
    faqOneTitle: "Como deben usar las familias las lecciones?",
    faqOneText:
      "Empiecen con el orden recomendado, vean sesiones cortas de forma constante y repitan lecciones cuando el estudiante necesite repaso.",
    faqTwoTitle: "Se agregaran mas grados?",
    faqTwoText:
      "Si. La ruta actual de K-1 se lanza primero y luego se agregara el grado 2.",
    faqThreeTitle: "Habra apoyo traducido?",
    faqThreeText:
      "Si. El sitio esta disenado para crecer hacia navegacion traducida, resumenes de lecciones y orientacion para cuidadores.",
    footerAction: "Volver arriba",
    backHome: "Volver al inicio",
  },
};

const lessonGrid = document.querySelector("#lesson-grid");
const unitGrid = document.querySelector("#unit-grid");
const lessonDetail = document.querySelector("#lesson-detail");
const lessonFilter = document.querySelector("#lesson-filter");
const languageSwitcher = document.querySelector("#language-switcher");
const unitJump = document.querySelector("#unit-jump");
const lessonJumpHub = document.querySelector("#lesson-jump-hub");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const topbar = document.querySelector(".topbar");
const spotlightTitle = document.querySelector("#spotlight-title");
const spotlightText = document.querySelector("#spotlight-text");
const spotlightUnit = document.querySelector("#spotlight-unit");
const unitPageHeader = document.querySelector("#unit-page-header");
const unitPageLessons = document.querySelector("#unit-page-lessons");
const unitPageNav = document.querySelector("#unit-page-nav");
const currentUnitPage = document.body.dataset.unitPage;
const currentLanguage = () => languageSwitcher?.value || document.documentElement.lang || "en";
const urlParams = new URLSearchParams(window.location.search);
const initialLessonId = Number(urlParams.get("lesson"));
let selectedLessonId =
  lessons.find((lesson) => lesson.lessonNumber === initialLessonId)?.lessonNumber ||
  lessons[0].lessonNumber;
let lastScrollY = window.scrollY;

function renderUnits() {
  if (!unitGrid) {
    return;
  }

  const copy = translations[currentLanguage()] || translations.en;
  unitGrid.innerHTML = units
    .map(
      (unit) => `
        <a class="unit-link" href="${unit.slug}">
          <article class="unit-card">
            <span class="badge">${unit.label}</span>
            <h3>${unit.title}</h3>
            <p>${unit.range} · ${unit.lessons.length} lessons</p>
            <p>${unit.description}</p>
            <span class="unit-link-text">${copy.openUnit}</span>
          </article>
        </a>
      `,
    )
    .join("");
}

function renderLessonDetail(lesson) {
  if (!lessonDetail) {
    if (spotlightTitle) {
      spotlightTitle.textContent = `Lesson ${lesson.lessonNumber}: ${lesson.title}`;
    }

    if (spotlightText) {
      spotlightText.textContent = lesson.description;
    }

    if (spotlightUnit) {
      spotlightUnit.textContent = `${lesson.unit}: ${lesson.unitTitle}`;
    }

    return;
  }

  const copy = translations[currentLanguage()] || translations.en;
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

  if (spotlightTitle) {
    spotlightTitle.textContent = `Lesson ${lesson.lessonNumber}: ${lesson.title}`;
  }

  if (spotlightText) {
    spotlightText.textContent = lesson.description;
  }

  if (spotlightUnit) {
    spotlightUnit.textContent = `${lesson.unit}: ${lesson.unitTitle}`;
  }
}

function renderLessons(filter = "all") {
  const copy = translations[currentLanguage()] || translations.en;
  const filteredLessons =
    filter === "all" ? lessons : lessons.filter((lesson) => lesson.category === filter);

  const activeLesson =
    filteredLessons.find((lesson) => lesson.lessonNumber === selectedLessonId) || filteredLessons[0];

  if (activeLesson) {
    selectedLessonId = activeLesson.lessonNumber;
    renderLessonDetail(activeLesson);
  }

  if (!lessonGrid) {
    return;
  }

  lessonGrid.innerHTML = filteredLessons
    .map(
      (lesson) => `
        <button class="lesson-button ${lesson.lessonNumber === selectedLessonId ? "is-active" : ""}" type="button" data-lesson-id="${lesson.lessonNumber}">
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

function renderUnitPage() {
  if (!currentUnitPage || !unitPageHeader || !unitPageLessons) {
    return;
  }

  const copy = translations[currentLanguage()] || translations.en;
  const unitIndex = units.findIndex((unit) => unit.id === currentUnitPage);
  const unit = units[unitIndex];

  if (!unit) {
    return;
  }

  const unitLessons = lessons.filter((lesson) => lesson.category === unit.id);
  const activeLesson =
    unitLessons.find((lesson) => lesson.lessonNumber === selectedLessonId) || unitLessons[0];

  selectedLessonId = activeLesson.lessonNumber;
  renderLessonDetail(activeLesson);

  unitPageHeader.innerHTML = `
    <div class="page-intro-layout">
      <div>
        <p class="eyebrow">${copy.unitPageLabel}</p>
        <h1>${unit.label}: ${unit.title}</h1>
        <p class="section-intro">${unit.range} · ${unit.lessons.length} lessons · ${unit.audience}</p>
      </div>
      <div class="page-intro-meta">
        <label class="page-language-picker">
          <span>${copy.lessonJumpLabel}</span>
          <select id="lesson-jump" aria-label="${copy.lessonJumpLabel}">
            <option value="">${copy.lessonJumpPlaceholder}</option>
            ${unitLessons
              .map(
                (lesson) =>
                  `<option value="${lesson.lessonNumber}" ${lesson.lessonNumber === selectedLessonId ? "selected" : ""}>Lesson ${lesson.lessonNumber}: ${lesson.title}</option>`,
              )
              .join("")}
          </select>
        </label>
      </div>
    </div>
    <div class="page-intro-actions">
      <a class="button button-primary" href="#unit-page-lessons">${copy.unitPageLessonsTitle}</a>
      <a class="button button-secondary" href="lessons.html">${copy.backToLibrary}</a>
    </div>
  `;

  unitPageLessons.innerHTML = unitLessons
    .map(
      (lesson) => `
        <button class="lesson-button ${lesson.lessonNumber === selectedLessonId ? "is-active" : ""}" type="button" data-lesson-id="${lesson.lessonNumber}">
          <article class="lesson-card">
            <div class="lesson-card-top">
              <div>
                <h3>Lesson ${lesson.lessonNumber}: ${lesson.title}</h3>
              </div>
              <span class="badge">${lesson.duration}</span>
            </div>
            <div class="lesson-meta">
              <span class="meta-chip">${unit.label}</span>
              <span class="meta-chip">${unit.title}</span>
              <span class="meta-chip">${lesson.audience}</span>
            </div>
            <p>${lesson.description}</p>
            <span>${copy.lessonAction}</span>
          </article>
        </button>
      `,
    )
    .join("");

  if (unitPageNav) {
    const previousUnit = units[unitIndex - 1];
    const nextUnit = units[unitIndex + 1];

    unitPageNav.innerHTML = `
      ${previousUnit ? `<a class="button button-secondary" href="${previousUnit.slug}">${copy.previousUnit}: ${previousUnit.label}</a>` : `<span></span>`}
      <a class="button button-secondary" href="lessons.html">${copy.backToLibrary}</a>
      ${nextUnit ? `<a class="button button-primary" href="${nextUnit.slug}">${copy.nextUnit}: ${nextUnit.label}</a>` : `<span></span>`}
    `;
  }

  const lessonJump = document.querySelector("#lesson-jump");
  if (lessonJump) {
    lessonJump.addEventListener("change", (event) => {
      const nextLessonId = Number(event.target.value);
      if (!nextLessonId) {
        return;
      }

      selectedLessonId = nextLessonId;
      renderUnitPage();
      unitPageLessons.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function renderHubLessonJump() {
  if (!lessonJumpHub) {
    return;
  }

  const copy = translations[currentLanguage()] || translations.en;
  lessonJumpHub.innerHTML = `
    <option value="">${copy.lessonJumpPlaceholder}</option>
    ${lessons
      .map(
        (lesson) =>
          `<option value="${lesson.lessonNumber}">Lesson ${lesson.lessonNumber}: ${lesson.title}</option>`,
      )
      .join("")}
  `;
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

if (lessonFilter) {
  lessonFilter.addEventListener("change", (event) => {
    renderLessons(event.target.value);
  });
}

if (lessonGrid) {
  lessonGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lesson-id]");
    if (!button) {
      return;
    }

    selectedLessonId = Number(button.dataset.lessonId);
    renderLessons(lessonFilter?.value || "all");
  });
}

if (unitPageLessons) {
  unitPageLessons.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lesson-id]");
    if (!button) {
      return;
    }

    selectedLessonId = Number(button.dataset.lessonId);
    renderUnitPage();
  });
}

if (languageSwitcher) {
  languageSwitcher.addEventListener("change", (event) => {
    applyTranslations(event.target.value);
    renderUnits();
    renderLessons(lessonFilter?.value || "all");
    renderUnitPage();
  });
}

if (unitJump) {
  unitJump.addEventListener("change", (event) => {
    const destination = event.target.value;
    if (destination) {
      window.location.href = destination;
    }
  });
}

if (lessonJumpHub) {
  lessonJumpHub.addEventListener("change", (event) => {
    const nextLessonId = Number(event.target.value);
    if (!nextLessonId) {
      return;
    }

    const lesson = lessons.find((entry) => entry.lessonNumber === nextLessonId);
    const unit = units.find((entry) => entry.id === lesson?.category);
    if (!lesson || !unit) {
      return;
    }

    window.location.href = `${unit.slug}?lesson=${lesson.lessonNumber}`;
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (topbar && siteNav) {
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
}

applyTranslations(currentLanguage());
renderUnits();
renderLessons(lessonFilter?.value || "all");
renderUnitPage();
renderHubLessonJump();

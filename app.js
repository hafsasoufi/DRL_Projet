const chapters = [
  {
    id: "rl",
    nav: "1. RL",
    short: "Agent, environnement, récompense",
    title: "Introduction au Reinforcement Learning",
    tag: "RL",
    intro: "Un agent apprend par interaction, sans réponse parfaite fournie à l'avance.",
    explanation:
      "Le Reinforcement Learning repose sur une boucle simple mais puissante : l'agent observe un état, choisit une action, reçoit une récompense et adapte sa stratégie pour maximiser le retour cumulé sur le long terme.",
    takeaway: "L'agent apprend par essai-erreur pour maximiser la récompense cumulée, sans étiquettes fournies à l'avance.",
    statLabels: ["État", "Action", "Récompense"],
    statValues: ["s", "a", "r"],
    type: "rl",
    quiz: {
      question: "Dans le RL, que cherche à maximiser l'agent ?",
      options: ["La loss", "La récompense cumulée", "Le nombre d'actions"],
      answer: 1,
    },
  },
  {
    id: "mdp",
    nav: "2. MDP",
    short: "S, A, P, R, γ",
    title: "Processus de Décision de Markov",
    tag: "MDP",
    intro: "Le RL est souvent modélisé comme un MDP pour formaliser les transitions et l'objectif.",
    explanation:
      "Un MDP décrit un problème séquentiel avec des états S, des actions A, des probabilités de transition P, une récompense R et un facteur d'actualisation γ. Plus γ est grand, plus l'agent valorise les récompenses futures.",
    takeaway: "Formalise le problème avec (S, A, P, R, γ) : γ proche de 1 favorise le long terme.",
    statLabels: ["S", "A", "γ"],
    statValues: ["États", "Actions", "Actualisation"],
    type: "mdp",
    quiz: {
      question: "Que contrôle le facteur γ ?",
      options: ["La vitesse du GPU", "L'importance du futur", "Le nombre de couches"],
      answer: 1,
    },
  },
  {
    id: "drl",
    nav: "3. DRL",
    short: "Pourquoi utiliser un réseau de neurones",
    title: "Pourquoi passer au Deep Reinforcement Learning ?",
    tag: "DRL",
    intro: "Quand l'espace d'états devient trop grand, la Q-table ne suffit plus.",
    explanation:
      "Le Deep RL remplace les tables par des réseaux de neurones capables de généraliser. Cela devient indispensable pour les grands espaces d'états, les entrées continues ou les observations plus complexes que quelques variables discrètes.",
    takeaway: "Dès que l'espace d'états explose, un réseau remplace la table et généralise entre états proches.",
    statLabels: ["Q-table", "Réseau", "Généralisation"],
    statValues: ["Petite", "Compacte", "Meilleure"],
    type: "drl",
    quiz: {
      question: "Pourquoi une Q-table devient-elle vite impraticable ?",
      options: ["Parce qu'elle est trop stable", "Parce que l'espace d'états explose", "Parce qu'elle apprend trop vite"],
      answer: 1,
    },
  },
  {
    id: "dqn",
    nav: "4. DQN",
    short: "Q-network, epsilon, buffer, target",
    title: "Deep Q-Network",
    tag: "DQN",
    intro: "DQN garde l'idée de Q-Learning, mais remplace la table par un réseau de neurones.",
    explanation:
      "DQN approxime Q(s, a) avec un réseau. L'exploration est gérée par epsilon-greedy, les expériences sont stockées dans un replay buffer, et une target network stabilise les cibles pendant l'entraînement.",
    takeaway: "Trio clé DQN : ε-greedy (explorer), replay buffer (décorréler), target network (stabiliser).",
    statLabels: ["Epsilon", "Buffer", "Target"],
    statValues: ["Exploration", "Mémoire", "Stabilité"],
    type: "dqn",
    quiz: {
      question: "Quel composant rend l'apprentissage DQN plus stable ?",
      options: ["Le replay buffer", "L'oubli des épisodes", "L'action aléatoire permanente"],
      answer: 0,
    },
  },
  {
    id: "policy",
    nav: "5. Policy-Based",
    short: "Politique probabiliste",
    title: "Méthodes Policy-Based",
    tag: "Policy",
    intro: "Le réseau apprend directement la politique, pas seulement une valeur.",
    explanation:
      "Une policy π(a|s) donne la probabilité de choisir une action dans un état donné. Les méthodes policy-based comme REINFORCE ou Vanilla Policy Gradient renforcent les actions qui ont conduit à une bonne récompense.",
    takeaway: "On apprend directement π(a|s) — idéal pour les actions continues et les distributions d'actions.",
    statLabels: ["π(a|s)", "REINFORCE", "VPG"],
    statValues: ["Distribution", "Monte Carlo", "Gradient direct"],
    type: "policy",
    quiz: {
      question: "Que produit un policy network ?",
      options: ["Une distribution d'actions", "Une Q-table", "Un graphe MDP"],
      answer: 0,
    },
  },
  {
    id: "actor",
    nav: "6. Actor-Critic",
    short: "Acteur + critique + avantage",
    title: "Méthodes Actor-Critic",
    tag: "Actor-Critic",
    intro: "Deux réseaux coopèrent : l'acteur choisit, le critique évalue.",
    explanation:
      "L'acteur correspond à la politique et choisit l'action, tandis que le critique estime une valeur V(s) ou Q(s, a). L'avantage A(s,a) mesure si l'action est meilleure ou moins bonne que prévu.",
    takeaway: "Acteur = décide, Critique = évalue ; l'avantage A(s,a) guide la mise à jour de la politique.",
    statLabels: ["Acteur", "Critique", "Avantage"],
    statValues: ["Choisit", "Évalue", "Corrige"],
    type: "actor",
    quiz: {
      question: "Quel est le rôle du critique ?",
      options: ["Choisir l'action", "Évaluer l'état ou l'action", "Fixer epsilon"],
      answer: 1,
    },
  },
  {
    id: "ppo",
    nav: "7. PPO",
    short: "Clipping et stabilité",
    title: "PPO - Proximal Policy Optimization",
    tag: "PPO",
    intro: "PPO stabilise l'apprentissage en empêchant des mises à jour trop brutales.",
    explanation:
      "PPO est une méthode policy-based souvent présentée avec une architecture actor-critic. Son idée centrale est le clipping : on améliore la politique, mais on limite la taille des changements entre ancienne et nouvelle politique.",
    takeaway: "PPO = actor-critic + clipping : des mises à jour progressives pour un apprentissage stable.",
    statLabels: ["Actor", "Critic", "Clip"],
    statValues: ["π(a|s)", "V(s)", "Mise à jour sûre"],
    type: "ppo",
    quiz: {
      question: "Pourquoi le clipping est-il utile ?",
      options: ["Pour accélérer le rendu", "Pour éviter des mises à jour trop grandes", "Pour supprimer la politique"],
      answer: 1,
    },
  },
  {
    id: "compare",
    nav: "8. Comparaison",
    short: "Value-Based / Policy-Based / Actor-Critic",
    title: "Comparaison des approches",
    tag: "Comparaison",
    intro: "Comparer les familles permet de choisir l'algorithme adapté au problème.",
    explanation:
      "Value-based comme DQN, policy-based comme REINFORCE, et actor-critic comme PPO répondent à des besoins différents. Le type d'action, la stabilité et la complexité de l'environnement guident le choix.",
    takeaway: "DQN si actions discrètes ; PPO / actor-critic si continuité, stabilité ou grands espaces.",
    statLabels: ["Famille", "Actions", "Choix"],
    statValues: ["Value / Policy / AC", "Discrètes / Continues", "Selon le contexte"],
    type: "compare",
    quiz: {
      question: "Quel algorithme est souvent plus adapté aux actions continues ?",
      options: ["DQN", "PPO", "Q-Learning tabulaire"],
      answer: 1,
    },
  },
];

const comparisons = [
  {
    group: "Value-Based",
    title: "Value-Based",
    body: ["Apprend Q(s,a)", "Simple et efficace", "Adapté aux actions discrètes"],
    color: "#7dd3fc",
  },
  {
    group: "Policy-Based",
    title: "Policy-Based",
    body: ["Apprend π(a|s)", "Gère les actions continues", "Peut avoir une forte variance"],
    color: "#f59e0b",
  },
  {
    group: "Actor-Critic",
    title: "Actor-Critic",
    body: ["Combine politique + valeur", "Plus stable", "Base de PPO, A2C, SAC"],
    color: "#a78bfa",
  },
  {
    group: "DQN vs PPO",
    title: "DQN vs PPO",
    body: ["DQN : discret + Q-values", "PPO : politique + clipping", "PPO gagne en stabilité"],
    color: "#34d399",
  },
];

const STORAGE_KEY = "drl-course-progress-v1";

const state = {
  chapterIndex: 0,
  explored: new Set([0]),
  quizPassed: new Set(),
  presentationMode: false,
  animationPausedUntil: 0,
  rewardTrajectory: [12, 18, 14, 22, 27, 35, 48, 52, 61, 68],
  epsilon: 1,
  gamma: 0.95,
  stateSpace: 32,
  policyValues: [0.12, 0.25, 0.63],
  clipRatio: 1,
  actorScore: 0.6,
  criticValue: 0.48,
  advantage: 0.12,
  comparisonFilter: "All",
  demoStep: 0,
};

const chapterNav = document.getElementById("chapterNav");
const chapterTitle = document.getElementById("chapterTitle");
const chapterIntro = document.getElementById("chapterIntro");
const chapterExplanation = document.getElementById("chapterExplanation");
const chapterTag = document.getElementById("chapterTag");
const chapterVisual = document.getElementById("chapterVisual");
const chapterControls = document.getElementById("chapterControls");
const chapterQuiz = document.getElementById("chapterQuiz");
const interactionHint = document.getElementById("interactionHint");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const comparisonCards = document.getElementById("comparisonCards");
const comparisonFilters = document.getElementById("comparisonFilters");
const presentationModeBtn = document.getElementById("presentationModeBtn");
const randomQuizBtn = document.getElementById("randomQuizBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const chapterTakeaway = document.getElementById("chapterTakeaway");
const quizScoreText = document.getElementById("quizScoreText");
const prevChapterBtn = document.getElementById("prevChapterBtn");
const nextChapterBtn = document.getElementById("nextChapterBtn");
const pagerIndicator = document.getElementById("pagerIndicator");

const statOneLabel = document.getElementById("statOneLabel");
const statTwoLabel = document.getElementById("statTwoLabel");
const statThreeLabel = document.getElementById("statThreeLabel");
const statOneValue = document.getElementById("statOneValue");
const statTwoValue = document.getElementById("statTwoValue");
const statThreeValue = document.getElementById("statThreeValue");

function pauseAutoAnimation(ms = 8000) {
  state.animationPausedUntil = Date.now() + ms;
}

function saveProgress() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        chapterIndex: state.chapterIndex,
        explored: [...state.explored],
        quizPassed: [...state.quizPassed],
      }),
    );
  } catch {
    /* stockage indisponible */
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }
    const data = JSON.parse(raw);
    if (Number.isInteger(data.chapterIndex) && data.chapterIndex >= 0 && data.chapterIndex < chapters.length) {
      state.chapterIndex = data.chapterIndex;
    }
    if (Array.isArray(data.explored)) {
      state.explored = new Set(data.explored.filter((i) => i >= 0 && i < chapters.length));
    }
    if (Array.isArray(data.quizPassed)) {
      state.quizPassed = new Set(data.quizPassed.filter((i) => i >= 0 && i < chapters.length));
    }
    if (state.explored.size === 0) {
      state.explored.add(state.chapterIndex);
    }
  } catch {
    /* données corrompues */
  }
}

function resetProgress() {
  state.chapterIndex = 0;
  state.explored = new Set([0]);
  state.quizPassed = new Set();
  localStorage.removeItem(STORAGE_KEY);
  renderNavigation();
  renderProgress();
  renderChapter();
  interactionHint.textContent = "Progression réinitialisée. Recommence le parcours.";
}

function goToChapter(index) {
  const next = Math.max(0, Math.min(chapters.length - 1, index));
  state.chapterIndex = next;
  state.explored.add(next);
  saveProgress();
  renderChapter();
  renderNavigation();
  renderProgress();
  document.getElementById("chapterTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderNavigation() {
  chapterNav.innerHTML = chapters
    .map((chapter, index) => {
      const explored = state.explored.has(index);
      const passed = state.quizPassed.has(index);
      const status = passed ? "✓" : explored ? "○" : "";
      return `
        <button
          type="button"
          class="chapter-btn ${index === state.chapterIndex ? "active" : ""} ${passed ? "completed" : ""}"
          data-index="${index}"
          aria-current="${index === state.chapterIndex ? "page" : "false"}"
        >
          <span class="chapter-btn-row">
            <span>${chapter.nav}</span>
            <span class="chapter-status" aria-hidden="true">${status}</span>
          </span>
          <span>${chapter.short}</span>
        </button>
      `;
    })
    .join("");
}

function renderPager() {
  const current = state.chapterIndex + 1;
  const total = chapters.length;
  pagerIndicator.textContent = `${current} / ${total}`;
  prevChapterBtn.disabled = state.chapterIndex === 0;
  nextChapterBtn.disabled = state.chapterIndex === chapters.length - 1;
}

function renderProgress() {
  const progress = (state.explored.size / chapters.length) * 100;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `${state.explored.size} / ${chapters.length} chapitres explorés`;
  const mastered = state.quizPassed.size === chapters.length;
  quizScoreText.textContent = mastered
    ? `Quiz : ${chapters.length} / ${chapters.length} validés — Parcours maîtrisé !`
    : `Quiz : ${state.quizPassed.size} / ${chapters.length} validés`;
}

function sparkline(values) {
  const width = 420;
  const height = 170;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const step = width / Math.max(values.length - 1, 1);
  const points = values
    .map((value, index) => {
      const x = index * step;
      const y = height - ((value - min) / Math.max(max - min, 1)) * (height - 20) - 10;
      return `${x},${y}`;
    })
    .join(" ");

  return `
    <svg viewBox="0 0 ${width} ${height}" class="svg-diagram" aria-label="Courbe d'apprentissage">
      <defs>
        <linearGradient id="curveGradient" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stop-color="#7dd3fc" />
          <stop offset="100%" stop-color="#a78bfa" />
        </linearGradient>
      </defs>
      <polyline points="${points}" fill="none" stroke="url(#curveGradient)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      ${values
        .map((value, index) => {
          const x = index * step;
          const y = height - ((value - min) / Math.max(max - min, 1)) * (height - 20) - 10;
          return `<circle cx="${x}" cy="${y}" r="4" fill="#ecf2ff" opacity="0.75" />`;
        })
        .join("")}
    </svg>
  `;
}

function createQuizCard(quiz, stateKey) {
  return `
    <div class="quiz-card">
      <strong>${quiz.question}</strong>
      <div class="quiz-options">
        ${quiz.options
          .map(
            (option, index) => `
              <button type="button" class="choice-btn" data-answer-index="${index}" data-state-key="${stateKey}">${option}</button>
            `,
          )
          .join("")}
      </div>
      <p class="formula quiz-feedback">Choisis une réponse pour t'entraîner.</p>
    </div>
  `;
}

function renderRlVisual() {
  const template = document.getElementById("rlVisualTemplate");
  const fragment = template.content.cloneNode(true);
  chapterVisual.innerHTML = "";
  chapterVisual.appendChild(fragment);
}

function renderDrlVisual() {
  const bars = Array.from({ length: 8 }, (_, index) => {
    const count = Math.pow(state.stateSpace / 8, index + 1) * 0.5;
    const capped = Math.min(count, 100);
    return `<div class="buffer-item"><span>États ${index + 1}</span><div style="width:${capped}%"></div></div>`;
  }).join("");

  chapterVisual.innerHTML = `
    <div class="compare-card">
      <h3>Q-table face à un réseau</h3>
      <p>Plus l'espace d'états grandit, plus la table explose. Le réseau reste compact et généralise.</p>
      <div class="replay-grid">
        <div>
          <p class="formula">Taille espace d'états: ${state.stateSpace}</p>
          ${bars}
        </div>
        <div class="compare-card" style="background: rgba(125, 211, 252, 0.08)">
          <h3>Réseau de neurones</h3>
          <p>Entrée: état s</p>
          <p>Sortie: Q(s,a)</p>
          <div class="formula">Généralisation + approximation</div>
        </div>
      </div>
    </div>
  `;
}

function renderDqnVisual() {
  const bufferItems = Array.from({ length: 5 }, (_, index) => {
    const opacity = 0.35 + index * 0.12;
    return `<div class="buffer-item"><span>t-${5 - index}</span><div style="width:${45 + index * 12}%; background: rgba(125, 211, 252, ${opacity})"></div></div>`;
  }).join("");

  chapterVisual.innerHTML = `
    <div class="compare-card">
      <h3>Epsilon-greedy</h3>
      <p>Exploration = ${Math.round(state.epsilon * 100)}%</p>
      <div class="progress-track" style="margin: 12px 0 18px;">
        <div class="progress-fill" style="width:${state.epsilon * 100}%;"></div>
      </div>
      <div class="replay-grid">
        <div>
          <p class="panel-title" style="margin-bottom: 10px;">Replay Buffer</p>
          ${bufferItems}
        </div>
        <div>
          <p class="panel-title" style="margin-bottom: 10px;">Learning curve</p>
          ${sparkline(state.rewardTrajectory)}
        </div>
      </div>
      <p class="formula">Target sync: tous les 100 pas pour stabiliser la cible.</p>
    </div>
  `;
}

function renderPolicyVisual() {
  const total = state.policyValues.reduce((sum, value) => sum + value, 0);
  const normalized = state.policyValues.map((value) => value / total);

  chapterVisual.innerHTML = `
    <div class="compare-card">
      <h3>Distribution d'actions</h3>
      <p>Le policy network prend l'état courant en entrée et sort des probabilités d'actions.</p>
      <div class="policy-grid">
        ${["gauche", "reste", "droite"]
          .map((label, index) => {
            const width = Math.round(normalized[index] * 100);
            return `<div class="policy-bar"><span>${label}</span><div style="width:${width}%; background: linear-gradient(90deg, #f59e0b, #f97316);"></div><strong>${width}%</strong></div>`;
          })
          .join("")}
      </div>
      <p class="formula">REINFORCE renforce les actions qui ont mené à une bonne récompense.</p>
    </div>
  `;
}

function renderActorVisual() {
  const advantageColor = state.advantage >= 0 ? "var(--success)" : "var(--danger)";
  chapterVisual.innerHTML = `
    <div class="compare-card">
      <div class="replay-grid">
        <div class="compare-card" style="background: rgba(125, 211, 252, 0.08)">
          <h3>Acteur</h3>
          <p>Choisit l'action à partir de l'état.</p>
        </div>
        <div class="compare-card" style="background: rgba(167, 139, 250, 0.08)">
          <h3>Critique</h3>
          <p>Estime V(s) et corrige l'apprentissage.</p>
        </div>
      </div>
      <p class="formula">A(s,a) = Q(s,a) - V(s)</p>
      <div class="progress-track" style="margin-top: 10px; height: 14px;">
        <div class="progress-fill" style="width:${Math.abs(state.advantage) * 100}%; background:${advantageColor};"></div>
      </div>
      <p class="formula">Avantage actuel: ${state.advantage.toFixed(2)}</p>
    </div>
  `;
}

function renderPpoVisual() {
  chapterVisual.innerHTML = `
    <div class="compare-card">
      <h3>Clipping PPO</h3>
      <p>Ancienne politique vs nouvelle politique. Si le changement est trop grand, on le compresse.</p>
      <div class="replay-grid">
        <div class="compare-card" style="background: rgba(248, 113, 113, 0.08)">
          <p class="panel-title" style="margin-bottom: 8px;">Ancienne politique</p>
          <p class="formula">π_old</p>
        </div>
        <div class="compare-card" style="background: rgba(52, 211, 153, 0.08)">
          <p class="panel-title" style="margin-bottom: 8px;">Nouvelle politique</p>
          <p class="formula">π_new</p>
        </div>
      </div>
      <p class="formula">Ratio de mise à jour: ${state.clipRatio.toFixed(2)}</p>
      <div class="progress-track" style="margin-top: 12px; height: 14px;">
        <div class="progress-fill" style="width:${Math.min(state.clipRatio, 1.5) / 1.5 * 100}%; background:${state.clipRatio > 1.2 ? "var(--danger)" : "var(--success)"};"></div>
      </div>
      <p class="formula">Le clipping limite les mises à jour trop agressives et améliore la stabilité.</p>
    </div>
  `;
}

function renderComparisonVisual() {
  const filter = state.comparisonFilter;
  const cards = comparisons.filter((item) => filter === "All" || item.group === filter);

  comparisonCards.innerHTML = cards
    .map(
      (item) => `
        <article class="compare-card" style="border-top: 3px solid ${item.color};">
          <h3>${item.title}</h3>
          <ul>
            ${item.body.map((line) => `<li>${line}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderComparisonFilters() {
  const filters = ["All", "Value-Based", "Policy-Based", "Actor-Critic", "DQN vs PPO"];
  comparisonFilters.innerHTML = filters
    .map(
      (filter) => `
        <button type="button" class="choice-btn filter-btn ${filter === state.comparisonFilter ? "active-filter" : ""}" data-filter="${filter}">${filter}</button>
      `,
    )
    .join("");

  comparisonFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.comparisonFilter = button.dataset.filter;
      renderComparisonFilters();
      renderComparisonVisual();
    });
  });
}

function renderChapterVisual() {
  const chapter = chapters[state.chapterIndex];

  if (chapter.id === "rl") {
    renderRlVisual();
  } else if (chapter.id === "mdp") {
    chapterVisual.innerHTML = `
      <div class="compare-card">
        <h3>MDP = <span class="formula">S, A, P, R, γ</span></h3>
        <p>Le modèle structure la décision séquentielle et la récompense cumulée.</p>
        <div class="progress-track" style="margin-top: 14px; height: 14px;">
          <div class="progress-fill" style="width:${state.gamma * 100}%;"></div>
        </div>
        <p class="formula" id="returnPreview">Gt = r0 + ${state.gamma.toFixed(2)}r1 + ${Math.pow(state.gamma, 2).toFixed(2)}r2 + ...</p>
      </div>
    `;
  } else if (chapter.id === "drl") {
    renderDrlVisual();
  } else if (chapter.id === "dqn") {
    renderDqnVisual();
  } else if (chapter.id === "policy") {
    renderPolicyVisual();
  } else if (chapter.id === "actor") {
    renderActorVisual();
  } else if (chapter.id === "ppo") {
    renderPpoVisual();
  } else if (chapter.id === "compare") {
    chapterVisual.innerHTML = `
      <div class="compare-card">
        <h3>Comparaison des familles</h3>
        <p>Explore les approches Value-Based, Policy-Based et Actor-Critic via les filtres de la section ci-dessous.</p>
      </div>
    `;
    renderComparisonVisual();
  }
}

function renderCurrentChapterSurface() {
  renderChapterVisual();
  renderControlsForChapter(chapters[state.chapterIndex]);
}

function animateCurrentChapter() {
  if (Date.now() < state.animationPausedUntil) {
    return;
  }

  const chapter = chapters[state.chapterIndex];
  const dot = document.getElementById("rlDot");
  state.demoStep = (state.demoStep + 1) % 1000;

  if (chapter.id === "rl" && dot) {
    const positions = [80, 255, 430, 605];
    const next = positions[state.demoStep % positions.length];
    dot.setAttribute("cx", next);
    dot.setAttribute("cy", 130 - ((state.demoStep % positions.length) * 8));
    return;
  }

  if (chapter.id === "mdp") {
    state.gamma = 0.82 + (state.demoStep % 14) * 0.012;
    const gammaRange = document.getElementById("gammaRange");
    const gammaValue = document.getElementById("gammaValue");
    const returnFormula = document.getElementById("returnFormula");
    const returnPreview = document.getElementById("returnPreview");

    if (gammaRange) gammaRange.value = state.gamma.toFixed(2);
    if (gammaValue) gammaValue.textContent = `γ = ${state.gamma.toFixed(2)}`;
    if (returnFormula) returnFormula.textContent = `Gt = r0 + ${state.gamma.toFixed(2)}r1 + ${Math.pow(state.gamma, 2).toFixed(2)}r2 + ...`;
    if (returnPreview) returnPreview.textContent = `Gt = r0 + ${state.gamma.toFixed(2)}r1 + ${Math.pow(state.gamma, 2).toFixed(2)}r2 + ...`;
    renderChapterVisual();
    return;
  }

  if (chapter.id === "drl") {
    state.stateSpace = [32, 48, 64, 80, 96, 128][state.demoStep % 6];
    renderChapterVisual();
    const stateSpaceRange = document.getElementById("stateSpaceRange");
    const stateSpaceValue = document.getElementById("stateSpaceValue");
    if (stateSpaceRange) stateSpaceRange.value = String(state.stateSpace);
    if (stateSpaceValue) stateSpaceValue.textContent = `Nombre d'états: ${state.stateSpace}`;
    return;
  }

  if (chapter.id === "dqn") {
    state.epsilon = Math.max(0.08, 1 - state.demoStep * 0.02);
    state.rewardTrajectory = [...state.rewardTrajectory.slice(1), state.rewardTrajectory[state.rewardTrajectory.length - 1] + 3 + (state.demoStep % 4)];
    renderCurrentChapterSurface();
    const epsilonRange = document.getElementById("epsilonRange");
    const epsilonValue = document.getElementById("epsilonValue");
    if (epsilonRange) epsilonRange.value = state.epsilon.toFixed(2);
    if (epsilonValue) epsilonValue.textContent = `epsilon = ${state.epsilon.toFixed(2)}`;
    return;
  }

  if (chapter.id === "policy") {
    const base = [12, 25, 63];
    const delta = state.demoStep % 3;
    state.policyValues = [base[(0 + delta) % 3], base[(1 + delta) % 3], base[(2 + delta) % 3]];
    renderChapterVisual();
    const p1 = document.getElementById("policyRange1");
    const p2 = document.getElementById("policyRange2");
    const p3 = document.getElementById("policyRange3");
    if (p1) p1.value = String(state.policyValues[0]);
    if (p2) p2.value = String(state.policyValues[1]);
    if (p3) p3.value = String(state.policyValues[2]);
    return;
  }

  if (chapter.id === "actor") {
    state.advantage = -0.9 + (state.demoStep % 20) * 0.09;
    renderChapterVisual();
    const advantageRange = document.getElementById("advantageRange");
    const advantageValue = document.getElementById("advantageValue");
    if (advantageRange) advantageRange.value = state.advantage.toFixed(2);
    if (advantageValue) advantageValue.textContent = `A(s,a) = ${state.advantage.toFixed(2)}`;
    return;
  }

  if (chapter.id === "ppo") {
    state.clipRatio = 0.8 + (state.demoStep % 8) * 0.08;
    renderChapterVisual();
    const clipRange = document.getElementById("clipRange");
    const clipValue = document.getElementById("clipValue");
    if (clipRange) clipRange.value = state.clipRatio.toFixed(2);
    if (clipValue) clipValue.textContent = `ratio = ${state.clipRatio.toFixed(2)}`;
    return;
  }

  if (chapter.id === "compare") {
    const filters = ["All", "Value-Based", "Policy-Based", "Actor-Critic", "DQN vs PPO"];
    state.comparisonFilter = filters[state.demoStep % filters.length];
    renderComparisonFilters();
    renderComparisonVisual();
  }
}

function renderControlsForChapter(chapter) {
  if (chapter.id === "rl") {
    chapterControls.innerHTML = `
      <div class="control-block">
        <h3>Boucle RL</h3>
        <p>Appuie pour faire avancer la séquence état → action → récompense.</p>
        <button type="button" class="control-btn" id="rlStepBtn">Avancer d'un pas</button>
      </div>
    `;

    document.getElementById("rlStepBtn").addEventListener("click", () => {
      pauseAutoAnimation();
      const dot = document.getElementById("rlDot");
      if (!dot) {
        return;
      }
      const positions = [80, 255, 430, 605];
      const current = positions.indexOf(Number(dot.getAttribute("cx")));
      const nextIndex = current >= 0 ? (current + 1) % positions.length : 0;
      dot.setAttribute("cx", String(positions[nextIndex]));
      dot.setAttribute("cy", String(130 - nextIndex * 8));
    });
    return;
  }

  if (chapter.id === "mdp") {
    chapterControls.innerHTML = `
      <div class="control-block">
        <h3>Facteur gamma</h3>
        <label for="gammaRange">Ajuste l'importance du futur</label>
        <input class="range" id="gammaRange" type="range" min="0.5" max="0.99" step="0.01" value="${state.gamma}" />
        <p class="formula" id="gammaValue">γ = ${state.gamma.toFixed(2)}</p>
      </div>
      <div class="control-block">
        <h3>Récompense cumulée</h3>
        <p class="formula" id="returnFormula">Gt = r0 + γr1 + γ²r2 + ...</p>
      </div>
    `;

    const gammaRange = document.getElementById("gammaRange");
    const gammaValue = document.getElementById("gammaValue");
    const returnFormula = document.getElementById("returnFormula");
    const returnPreview = document.getElementById("returnPreview");
    const updateGammaDisplay = () => {
      const formula = `Gt = r0 + ${state.gamma.toFixed(2)}r1 + ${Math.pow(state.gamma, 2).toFixed(2)}r2 + ...`;
      gammaValue.textContent = `γ = ${state.gamma.toFixed(2)}`;
      returnFormula.textContent = formula;
      if (returnPreview) {
        returnPreview.textContent = formula;
      }
      const fill = document.querySelector("#chapterVisual .progress-fill");
      if (fill) {
        fill.style.width = `${state.gamma * 100}%`;
      }
    };
    gammaRange.addEventListener("input", () => {
      state.gamma = Number(gammaRange.value);
      updateGammaDisplay();
    });
    return;
  }

  if (chapter.id === "drl") {
    chapterControls.innerHTML = `
      <div class="control-block">
        <h3>Taille de l'espace d'états</h3>
        <label for="stateSpaceRange">Fais grandir le problème</label>
        <input class="range" id="stateSpaceRange" type="range" min="8" max="128" step="8" value="${state.stateSpace}" />
        <p class="formula" id="stateSpaceValue">Nombre d'états: ${state.stateSpace}</p>
      </div>
      <div class="control-block">
        <h3>Comparaison visuelle</h3>
        <p>La Q-table grandit vite. Le réseau reste compact.</p>
      </div>
    `;

    document.getElementById("stateSpaceRange").addEventListener("input", (event) => {
      state.stateSpace = Number(event.target.value);
      document.getElementById("stateSpaceValue").textContent = `Nombre d'états: ${state.stateSpace}`;
      renderDrlVisual();
    });
    return;
  }

  if (chapter.id === "dqn") {
    chapterControls.innerHTML = `
      <div class="control-block">
        <h3>Epsilon-greedy</h3>
        <label for="epsilonRange">Réduis progressivement l'exploration</label>
        <input class="range" id="epsilonRange" type="range" min="0.05" max="1" step="0.01" value="${state.epsilon}" />
        <p class="formula" id="epsilonValue">epsilon = ${state.epsilon.toFixed(2)}</p>
      </div>
      <div class="control-block">
        <h3>Replay Buffer</h3>
        <button type="button" class="control-btn" id="bufferBtn">Ajouter une transition</button>
        <button type="button" class="control-btn" id="syncBtn" style="margin-left: 8px;">Synchroniser le target network</button>
      </div>
    `;

    document.getElementById("epsilonRange").addEventListener("input", (event) => {
      state.epsilon = Number(event.target.value);
      document.getElementById("epsilonValue").textContent = `epsilon = ${state.epsilon.toFixed(2)}`;
      renderDqnVisual();
    });

    document.getElementById("bufferBtn").addEventListener("click", () => {
      state.rewardTrajectory = [...state.rewardTrajectory.slice(1), state.rewardTrajectory[state.rewardTrajectory.length - 1] + Math.round(Math.random() * 8) - 2];
      renderDqnVisual();
    });

    document.getElementById("syncBtn").addEventListener("click", () => {
      interactionHint.textContent = "Le target network vient d'être synchronisé avec le réseau principal.";
      setTimeout(() => {
        interactionHint.textContent = "Utilise les contrôles pour déclencher les animations.";
      }, 1800);
    });
    return;
  }

  if (chapter.id === "policy") {
    chapterControls.innerHTML = `
      <div class="control-block">
        <h3>Distribution d'actions</h3>
        <label for="policyRange1">Favoriser l'action gauche</label>
        <input class="range" id="policyRange1" type="range" min="0" max="100" value="${state.policyValues[0]}" />
        <label for="policyRange2">Ne rien faire</label>
        <input class="range" id="policyRange2" type="range" min="0" max="100" value="${state.policyValues[1]}" />
        <label for="policyRange3">Favoriser l'action droite</label>
        <input class="range" id="policyRange3" type="range" min="0" max="100" value="${state.policyValues[2]}" />
      </div>
      <div class="control-block">
        <h3>REINFORCE</h3>
        <button type="button" class="control-btn" id="sampleActionBtn">Simuler un épisode</button>
      </div>
    `;

    const inputs = [
      document.getElementById("policyRange1"),
      document.getElementById("policyRange2"),
      document.getElementById("policyRange3"),
    ];

    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        state.policyValues[index] = Number(input.value);
        renderPolicyVisual();
      });
    });

    document.getElementById("sampleActionBtn").addEventListener("click", () => {
      const sum = state.policyValues.reduce((total, value) => total + value, 0);
      let roll = Math.random() * sum;
      let selected = 0;
      for (let index = 0; index < state.policyValues.length; index += 1) {
        roll -= state.policyValues[index];
        if (roll <= 0) {
          selected = index;
          break;
        }
      }
      interactionHint.textContent = `Action échantillonnée: ${["gauche", "ne rien faire", "droite"][selected]}.`;
    });
    return;
  }

  if (chapter.id === "actor") {
    chapterControls.innerHTML = `
      <div class="control-block">
        <h3>Avantage A(s,a)</h3>
        <label for="advantageRange">Réglez le signal de correction</label>
        <input class="range" id="advantageRange" type="range" min="-1" max="1" step="0.01" value="${state.advantage}" />
        <p class="formula" id="advantageValue">A(s,a) = ${state.advantage.toFixed(2)}</p>
      </div>
      <div class="control-block">
        <h3>Acteur / Critique</h3>
        <button type="button" class="control-btn" id="actorCriticBtn">Comparer les rôles</button>
      </div>
    `;

    document.getElementById("advantageRange").addEventListener("input", (event) => {
      state.advantage = Number(event.target.value);
      document.getElementById("advantageValue").textContent = `A(s,a) = ${state.advantage.toFixed(2)}`;
      renderActorVisual();
    });

    document.getElementById("actorCriticBtn").addEventListener("click", () => {
      interactionHint.textContent = "L'acteur choisit l'action, le critique estime la qualité de l'état ou de l'action.";
    });
    return;
  }

  if (chapter.id === "ppo") {
    chapterControls.innerHTML = `
      <div class="control-block">
        <h3>Clipping</h3>
        <label for="clipRange">Ajuste le ratio de mise à jour</label>
        <input class="range" id="clipRange" type="range" min="0.7" max="1.5" step="0.01" value="${state.clipRatio}" />
        <p class="formula" id="clipValue">ratio = ${state.clipRatio.toFixed(2)}</p>
      </div>
      <div class="control-block">
        <h3>Stabilité</h3>
        <button type="button" class="control-btn" id="ppoExplainBtn">Pourquoi PPO est stable ?</button>
      </div>
    `;

    document.getElementById("clipRange").addEventListener("input", (event) => {
      state.clipRatio = Number(event.target.value);
      document.getElementById("clipValue").textContent = `ratio = ${state.clipRatio.toFixed(2)}`;
      renderPpoVisual();
    });

    document.getElementById("ppoExplainBtn").addEventListener("click", () => {
      interactionHint.textContent = "Le clipping empêche les mises à jour trop violentes de la politique.";
    });
    return;
  }

  if (chapter.id === "compare") {
    chapterControls.innerHTML = `
      <div class="control-block">
        <h3>Filtrer les familles</h3>
        <p>Compare Value-Based, Policy-Based et Actor-Critic.</p>
        <button type="button" class="control-btn" id="resetCompareBtn">Réinitialiser</button>
      </div>
    `;

    document.getElementById("resetCompareBtn").addEventListener("click", () => {
      state.comparisonFilter = "All";
      renderComparisonFilters();
      renderComparisonVisual();
    });
    return;
  }
}

function renderChapter() {
  const chapter = chapters[state.chapterIndex];
  chapterTitle.textContent = chapter.title;
  chapterIntro.textContent = chapter.intro;
  chapterExplanation.textContent = chapter.explanation;
  chapterTakeaway.innerHTML = `
    <p class="takeaway-label">À retenir</p>
    <p class="takeaway-text">${chapter.takeaway}</p>
  `;
  chapterTag.textContent = chapter.tag;
  statOneLabel.textContent = chapter.statLabels[0];
  statTwoLabel.textContent = chapter.statLabels[1];
  statThreeLabel.textContent = chapter.statLabels[2];
  statOneValue.textContent = chapter.statValues[0];
  statTwoValue.textContent = chapter.statValues[1];
  statThreeValue.textContent = chapter.statValues[2];
  chapterQuiz.innerHTML = createQuizCard(chapter.quiz, chapter.id);
  chapterVisual.innerHTML = "";
  interactionHint.textContent = "Utilise les contrôles pour manipuler la visualisation.";
  renderCurrentChapterSurface();
  renderPager();
  document.querySelector(".hero")?.classList.remove("chapter-enter");
  requestAnimationFrame(() => {
    document.querySelector(".hero")?.classList.add("chapter-enter");
  });
}

function randomQuiz() {
  const chapter = chapters[Math.floor(Math.random() * chapters.length)];
  goToChapter(chapters.findIndex((item) => item.id === chapter.id));
  interactionHint.textContent = `Quiz surprise associé au chapitre ${chapter.tag}.`;
  chapterQuiz.scrollIntoView({ behavior: "smooth", block: "center" });
}

function togglePresentationMode() {
  state.presentationMode = !state.presentationMode;
  document.body.classList.toggle("presentation-mode", state.presentationMode);
  presentationModeBtn.setAttribute("aria-pressed", String(state.presentationMode));
  presentationModeBtn.textContent = state.presentationMode ? "Quitter présentation" : "Mode présentation";
  interactionHint.textContent = state.presentationMode
    ? "Mode présentation : texte agrandi, sidebar réduite. Touche Échap pour quitter."
    : "Utilise les contrôles pour manipuler la visualisation.";
}

function init() {
  loadProgress();
  renderNavigation();
  renderProgress();
  renderChapter();
  renderComparisonFilters();
  renderComparisonVisual();

  presentationModeBtn.addEventListener("click", togglePresentationMode);
  randomQuizBtn.addEventListener("click", randomQuiz);
  resetProgressBtn.addEventListener("click", () => {
    if (window.confirm("Réinitialiser toute la progression et les quiz validés ?")) {
      resetProgress();
    }
  });
  prevChapterBtn.addEventListener("click", () => goToChapter(state.chapterIndex - 1));
  nextChapterBtn.addEventListener("click", () => goToChapter(state.chapterIndex + 1));

  document.addEventListener(
    "input",
    (event) => {
      if (event.target.matches("input.range, .control-btn, .choice-btn")) {
        pauseAutoAnimation();
      }
    },
    true,
  );

  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, textarea, select")) {
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToChapter(state.chapterIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToChapter(state.chapterIndex + 1);
    } else if (event.key === "Escape" && state.presentationMode) {
      togglePresentationMode();
    } else if (event.key >= "1" && event.key <= "8") {
      goToChapter(Number(event.key) - 1);
    }
  });

  document.addEventListener("click", (event) => {
    const quizButton = event.target.closest(".choice-btn[data-state-key]");
    if (quizButton) {
      const chapter = chapters.find((item) => item.id === quizButton.dataset.stateKey);
      if (!chapter) {
        return;
      }

      const quiz = chapter.quiz;
      const selected = Number(quizButton.dataset.answerIndex);
      const feedback = quizButton.closest(".quiz-card")?.querySelector(".quiz-feedback");
      const options = quizButton.closest(".quiz-options")?.querySelectorAll(".choice-btn") ?? [];

      options.forEach((other) => {
        other.classList.remove("correct", "wrong");
      });

      if (selected === quiz.answer) {
        quizButton.classList.add("correct");
        const chapterIndex = chapters.findIndex((item) => item.id === chapter.id);
        if (chapterIndex >= 0) {
          state.quizPassed.add(chapterIndex);
          saveProgress();
          renderNavigation();
          renderProgress();
        }
        if (feedback) {
          feedback.textContent = "Bonne réponse. Tu maîtrises le concept principal.";
        }
      } else {
        quizButton.classList.add("wrong");
        if (feedback) {
          feedback.textContent = `Réponse attendue: ${quiz.options[quiz.answer]}.`;
        }
      }
      return;
    }

    const chapterButton = event.target.closest(".chapter-btn");
    if (chapterButton) {
      goToChapter(Number(chapterButton.dataset.index));
      return;
    }
  });

  setInterval(() => {
    animateCurrentChapter();
  }, 1800);
}

init();

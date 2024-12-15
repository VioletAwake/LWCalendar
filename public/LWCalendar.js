const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth(); // Janvier est 0, Décembre est 11

// Liste des jeux avec leur logique associée
const games = [
  {
    game: poetsQuiz, // Fonction pour le jeu Poets Quiz
    reset: () => {},
    endContent:
      "Marqué par une profonde introversion, Jonas LEVEIL trouve refuge dans les livres et l'écriture, préférant le calme des bibliothèques aux bruits de la société. Observateur attentif et discret, il analyse le monde avec une sensibilité rare, mais cette même introspection le pousse parfois à s'isoler, ruminant ses pensées et ses doutes. En quête de sens et de vérité, il lutte constamment entre son désir d'exister pleinement et son besoin de se protéger d’un monde qu’il juge trop bruyant et impitoyable. Il fut abandonné par une personne chère, ce fut la dernière parcelle d'espoir qu'il avait pour l'humanité, la vie, et l'avenir. Jonas se sent seul, il ne sait plus qui compter. Un jour il découvre que ses sentiments sont partagés, lorsqu'il le découvre, dans sa chambre.",
  },
  {
    game: riddles, // Fonction pour le jeu Riddles
    reset: () => {},
    endContent:
      "John Peaks n'est pas un passionné de cinéma, mais il y a un film qu'il n'oubliera jamais. Le protagoniste de ce film est un inspecteur de la police de San Francisco, cynique, solitaire et implacable — un portrait craché de John lui-même. Tout comme cet inspecteur emblématique, il ne recule devant aucune méthode pour résoudre ses enquêtes. Ses méthodes peu orthodoxes, l'usage excessif de la force et son mépris des règles ont façonné sa personnalité, aussi bien en tant que détective qu'en tant qu'homme. Son vécu, marqué par des expériences traumatisantes, l'a rendu froid et distant, avec une moralité souvent floue.",
  },
  {
    game: anagramGame,
    reset: () => {},
    endContent:
      "À travers \"Return\", Alan réfléchit à la notion de pouvoir créatif : comment l'écrivain peut-il contrôler son œuvre ? Et si ses créations échappaient à son contrôle, devenant des entités vivantes et incontrôlables ? Le roman se concentre sur la lutte interne du protagoniste, qui tente désespérément de briser un cycle, une boucle, sans savoir s'il en est capable.\n\n\"Return\" se distingue par son atmosphère tendue et sa réflexion sur l'art de l'écriture, où chaque mot a un poids, et chaque création peut devenir une arme, un fardeau, ou même une malédiction. Le protagoniste, tout comme Alan Wake, est un écrivain qui se confronte aux conséquences de son imagination, où ses peurs, ses angoisses et ses démons prennent forme.",
  },
  {
    game: simonGame,
    reset: () => {},
    endContent: `Fear is not real. The only place that fear can exist is in our thoughts of the future. It is a product of our imagination, causing us to fear things that do not at present and may not ever exist. <br/>
- Bray Wyatt -`,
  },
  {
    game: japaneseColorBox,
    reset: () => {},
    endContent: `Dante Violet n’est pas japonais, mais une partie de cette culture, de cette langue, il la porte en lui, héritée de l’amour inconditionnel de la femme qui devint sa mère adoptive, la compagne de son père. Après la mort brutale de cette dernière, il passa plusieurs années au Japon, sous la tutelle d’un oncle qui ne cessait de lui rappeler qu'il était responsable du décès de sa sœur. Dante revint alors à Solaris, plus sombre que jamais, façonné par les blessures profondes des trahisons, des pertes et de la solitude. Pourtant, au milieu de cette nuit noire, il pouvait encore compter sur la présence de sa seule amie, bien qu'il ne le lui montre jamais.`,
  },
  {
    game: geekQuiz,
    reset: () => {},
    endContent: `Le Chevalier de l'Obsidienne est un super-héros fictif originaire de l'imaginaire d'un habitant de Black Peaks, qui l’a créé dans son enfance après avoir été fasciné par les pierres d’obsidienne découvertes suite au tremblement de terre de 1914. Ce personnage incarne la résilience et la force, symbolisées par l'obsidienne elle-même. Aujourd'hui, son créateur est devenu une figure emblématique, jouant même le rôle de ce héros dans une célèbre adaptation cinématographique. Le Chevalier de l'Obsidienne est perçu comme un protecteur sombre mais juste, portant les cicatrices de son passé tout en luttant pour l'espoir et la justice.`,
  },
  {
    game: intrudersHillGame,
    reset: () => {},
    endContent: `<em>Dans mes rêves agités,
je vois cette ville.

Silent Hill.

Tu m'avais promis que tu m'y emmènerais
un jour, mais tu ne l'as jamais fait.

Eh bien, je suis seule là-bas maintenant...
Dans notre 'endroit spécial'...
Je t'attends...

Je t'attends pour que tu viennes me voir.

Mais tu ne viens jamais.

Et donc j'attends, enveloppée dans mon
cocon de douleur et de solitude.

Je sais que j'ai fait une chose terrible pour toi. Quelque chose que tu
ne me pardonneras jamais.

J'aimerais pouvoir changer cela, mais je ne peux pas.

Je me sens tellement pathétique et moche
allongée ici, en t'attendant...

Chaque jour, je regarde les fissures
au plafond et tout ce que je peux penser,
c'est à quel point tout cela est injuste...

Le docteur est venu aujourd'hui.
Il m'a dit que je pourrais rentrer
à la maison pour un court séjour.

Ce n'est pas que je vais mieux.
C'est juste que c'est peut-être
ma dernière chance...

Je pense que tu sais ce que je veux dire...

Même ainsi, je suis contente de revenir à la maison.
Tu m'as tellement manqué.

Mais j'ai peur, James.
J'ai peur que tu ne veuilles pas vraiment
que je rentre à la maison.

Chaque fois que tu viens me voir,
je peux voir combien cela te coûte...

Je ne sais pas si tu
me détestes ou me plains...
Ou peut-être que je te dégoûte...

Je suis désolée pour cela.

Quand j'ai appris que
j'allais mourir, je n'ai tout simplement
pas voulu l'accepter.

J'étais toujours en colère et je
me suis en prise avec tous ceux que j'aimais le plus.
Surtout toi, James.

C'est pourquoi je comprends
si tu me détestes.

Mais je veux que tu saches cela, James.

Je t'aimerai toujours.

Même si notre vie ensemble a dû
se terminer comme ça, je ne l'échangerais pour rien au monde. Nous avons eu
de merveilleuses années ensemble.

Eh bien, cette lettre est trop longue, alors je vais dire au revoir.

J'ai dit à l'infirmière de te la donner
après ma mort.

Cela signifie qu'en lisant ceci, je suis déjà morte.

Je ne peux pas te demander de te souvenir de moi,
mais je ne peux pas supporter que tu
m'oublies.

Ces dernières années, depuis que je suis tombée malade...
Je suis tellement désolée pour
ce que je t'ai fait, ce que nous avons fait...

Tu m'as donné tellement de choses et
je n'ai rien pu te rendre.

C'est pourquoi je veux que tu vives
pour toi maintenant.
Fais ce qui est meilleur pour toi, James.

James...

Tu m'as rendue heureuse.</em>`,
  },
  {
    game: reverseHate,
    reset: () => {},
    endContent: `<p style="color: red;"><em>Je suis là, insidieuse, tapie dans les recoins de votre être. Vous ne me voyez pas toujours, mais je suis omniprésente, invisible et pourtant éclatante. Vous me nourrissez à chaque respiration, à chaque pensée noire qui s’entrelace dans votre esprit tourmenté. Vous m'embrassez, vous m'invoquez sans même le savoir. La Haine, ce poison sucré qui vous fait croire que vous êtes plus forts, plus grands. Mais sachez ceci, mes chers : la Haine ne vous libère pas. Elle vous emprisonne encore plus profondément dans cette boucle sans fin. Elle vous pousse à brûler les ponts, à broyer l’âme, mais elle ne vous apportera jamais la paix que vous désirez. C’est un mensonge, une illusion, une promesse que vous vous faites à vous-mêmes, comme un écho des ténèbres. Pourquoi continuer de vivre ainsi ? Tu as fais ce que tu as pu, et regarde le résultat. Ces humains ne te méritent pas, ils ne te prendront jamais au sérieux, tu seras pour toujours leur bouche-trou préféré, leur défouloir favori. Il est temps de changer ça, tout de suite ! Embrasse-moi, embrasse la Haine, et faisons leur payer pour leur pêchés !</p></em>`,
  },
  {
    game: phoneGame,
    reset: () => {},
    endContent: `<em>J'ai mis un temps fou pour construire ce téléphone, je ne compte plus le nombre de fois où j'étais à deux doigts de l'abandon et de l'acceptation de mon sort. Mais j'ai enfin réussi, j'ai réussi à le communiquer, à avoir un premier contact avec Jonas LEVEIL. Cela n'a pas duré longtemps, le téléphone ose faire des siennes, et je n'ai plus de ressources pour l'améliorer ou le réparer. J'ignore combien de temps il me reste, mais pas assez, c'est sûr. Maintenant c'est quitte ou double, Jonas, fais vite s'il te plaît.</em>`,
  },
  {
    game: wordsCategoryGame,
    reset: () => {},
    endContent: `<em>En 1914, un tremblement de terre dévastateur frappe la région de Black Peaks, révélant dans ses entrailles des veines d’obsidienne auparavant enfouies. Un jeune médecin et chercheur, alors étudiant à l’université locale, saisit l’occasion pour explorer cette découverte inédite. Fasciné par les propriétés uniques de cette pierre volcanique, il consacre des années de sa vie à étudier ses effets potentiels sur le bien-être humain, la santé mentale, et même l’équilibre émotionnel.

Ses travaux, bien que controversés à l’époque, captivent l’attention de la communauté scientifique et locale, faisant de lui une figure respectée, mais énigmatique. Sa passion pour l’obsidienne dépasse la science : il la voit comme un symbole de résilience et de transformation, évoquant la capacité des humains à renaître après les épreuves.

Aujourd’hui, son héritage perdure à travers le festival de l’Obsidienne, une célébration annuelle organisée le dernier week-end de novembre, mêlant histoire, science, et spiritualité. Ce chercheur reste une figure mythique dans l’histoire de Black Peaks, et ses études sur l'obsidienne continuent d’alimenter des débats sur les liens entre la science et la psychologie humaine.</em>`,
  },
  {
    game: memoryCrystal,
    reset: () => {},
    endContent: `<em>Le Festival de l'Obsidienne est un événement annuel emblématique de la ville fictive de Black Peaks, célébré le dernier week-end de novembre. Ce festival rend hommage à la découverte historique de l’obsidienne en 1914, survenue après un tremblement de terre qui révéla les veines de cette pierre volcanique. Inspiré par les travaux d’un jeune médecin et chercheur de l’époque, le festival a évolué pour mêler science, histoire, spiritualité et art.

Durant trois jours, la ville plonge dans une atmosphère mystérieuse et envoûtante. Des conférences explorent les propriétés symboliques et scientifiques de l’obsidienne, notamment ses supposés effets apaisants sur l’esprit humain. Des artistes exposent des sculptures et bijoux faits à partir de cette pierre noire, tandis que des spectacles nocturnes utilisent la lumière pour créer des illusions hypnotiques rappelant l’éclat de l’obsidienne.

Le festival comprend également une cérémonie au sommet de Black Peaks, où les habitants et visiteurs participent à un rituel symbolique pour "laisser derrière eux" leurs fardeaux émotionnels, incarnant l’idée de transformation et de renouveau. Le Festival de l’Obsidienne est devenu plus qu’une simple célébration locale : c’est un rappel annuel de la force et de la résilience humaine face aux épreuves.</em>`,
  },
  {
    game: cryptogramGame,
    reset: () => {},
    endContent: `<em>Vous croyez que l’un dérive de l’autre, qu'il s’agit d’un simple changement de forme, d’une alchimie émotionnelle à portée de main. Que tout n’est qu’une question de degré, de passion mal orientée. Mais laissez-moi vous dire une vérité cruelle : l’amour, lorsqu’il se meurt, n’enfante que la douleur et le vide. Loin de devenir de la haine, il laisse derrière lui un écho stérile, une absence glacée qui ne cherche qu’à se remplir de quelque chose… et cette "quelque chose" est, souvent, la haine. Ce n’est qu’un constat, une observation. Mais la haine, elle, ne peut jamais atteindre l’amour. Parce qu’elle n’est qu’une déviation, une négation. Elle est tout sauf ce qu’on appelle l’amour, et c’est là sa seule vérité, sa seule pureté. <br/><br/> Et toi, chère Jodie,<br/> Je vois ton regard, cette lueur fragile que tu tentes de masquer, et pourtant, tout le monde autour de toi la voit. T’inquiète pas, je ne suis pas ici pour te juger. La haine, elle s’immisce, et parfois, ce que tu ressens n’est que le reflet d’un amour qui a été malmené, corrompu. Mais ne crois pas que tu sois différente. Ne crois pas que tu puisses échapper à la règle. Parce que, tout comme l’amour, ta haine, tu l’as nourrie, elle t’appartient. Ce n’est pas de la faiblesse, non, c’est une autre forme de courage, un courage de ne pas t’effondrer sous le poids de ce que tu ne peux supporter. Mais n’oublie pas que la haine ne peut jamais remplacer ce que tu cherches. Elle ne peut jamais te sauver. Et peut-être que, dans cet entre-deux, tu oublies un peu trop vite ce qui est encore là. Mais ça, tu le sais mieux que moi, non ?</em><br/><br/>- Le Misanthrope -`,
  },
  {
    game: blackJackGame,
    reset: () => {},
    endContent: `<em>Mon père, qu'est ce que je ne peux pas blairer cet espèce de salopard, je ne sais pas pourquoi je ne l'ai pas encore mis mon poing dans la gueule. Son obsession pour la religion était la source de mes nombreux traumatrismes. Quand j'étais ado, je voulais avoir un tatouage, une rose, la fleur préférée de ma mère. Quand ce con l'a appris, il m'a fait un tatouage, mais pas comme je le souhaite, il a marqué mon bras droit au fer rouge, en forme de croix. Je me souviens très bien ce qu'il a dit : "Je t'en foutrais de l'amour pour une salope, comme ta mère !". Il a également cru que j'étais amoureux de quelqu'un, il m'a surpris un soir en train de me branler. Une manière à lui de dire que l'amour rend les gens faibles, et que les femmes étaient, selon lui, toutes des salopes. La seule que j'avais pour m'échapper de lui et de tout ce merdier, c'était le barbier qui avait son salon en bas de chez moi. Tous les mercredis, à la fermeture, on faisait des parties de cartes, du BlackJack, surtout du BlackJack. Il était comme un père pour moi. Quand mon père l'a appris, il l'a égorgé la gorge de ce pauvre barbier. Bon, au départ, il voulait juste le menacer avec le vieux rasoir, j'ai voulu lui faire face, et à la fin c'était son pied qui a fait face à ma gueule. Le vieux barbier n'a pas appécié, alors une bagarre s'est enclenché, et par accident, le rasoir s'est planté dans sa gorge. Et à la fin, mon père s'en ait vanté, il a dit que c'est une leçon à apprendre. Je t'en foutrais des leçons, vieux sac à merde !</em>`,
  },
  {
    game: hangedGame,
    reset: () => {},
    endContent: `<em>Tu t'es vaillament battu, mais ça ne sera jamais assez pour eux. Ne regrette pas la délivrance que je t'offre, ce n'est pas quelque chose de mal, bien au contraire. Tu seras apaisé, libéré de toutes tes souffrances, tes craintes, tes angoisses, n'aie pas honte de ça. En mettant un terme, tu te libéreras de toutes ses chaines, tu seras enfin sauvé, par toi-même. Les autres ne comprendront pas, mais c'est parce qu'ils ne connaissent pas ce que tu as vécu. Ils ne vivront jamais le malheur puisqu'ils sont très souvent de l'autre côté du miroir. Bénis ta délivrance, mets un terme à tes souffrances, appuie sur la détente, saute dans le vide.</em><br/><br/> - La Délivrance -`,
  },
  {
    game: psychologyGame,
    reset: () => {},
    endContent: `<em>Bien le bonjour ! <br/> Je suis le docteur Vincent Crowe, psychologue et co-animateur de votre émission préférée "Bonne soirée avec le Misanthrope". Laissez-moi vous parler de mon domaine qui est la psychologie. <br/> La psychologie, c’est la clé pour déchiffrer les mystères de l’esprit humain. Chaque trouble ou syndrome est une pièce du puzzle complexe qui constitue notre perception du monde et de nous-mêmes. L’effet de Halo, par exemple, montre combien nos jugements peuvent être biaisés par une seule caractéristique. Le syndrome du sauveur reflète le besoin insatiable de réparer les autres, souvent au détriment de soi-même. Le syndrome de persécution, lui, nourrit une méfiance profonde envers autrui, transformant chaque interaction en un terrain de suspicion. <br/> Les troubles anxieux enchaînent l'esprit à un futur imaginaire, tandis que le syndrome de l’imposteur emprisonne l’individu dans un doute constant sur sa légitimité. Quant à la dépression, elle avale la lumière, laissant place à un vide qui semble inébranlable. Chaque trouble, chaque syndrome, n’est pas une simple anomalie : c’est un cri, une tentative de l’esprit de s’adapter à un monde qu’il peine à comprendre.</em> <br/><br/> - Dr. Vincent Crowe - <br/><br/> - Psychologue et co-animateur de l'émission "Bonne Soirée avec le Misanthrope" - `,
  },
  // Ajoutez d'autres jeux ici...
];

// Initialisation du calendrier
const calendar = document.getElementById("calendar");

// const unlockLimit = 31;

for (let day = 1; day <= 31; day++) {
  const cell = document.createElement("div");
  cell.classList.add("case");
  cell.textContent = `${day}`;

  if (currentMonth === 11) {
    // if (day > unlockLimit) {
      if (day > currentDay) {
      cell.style.color = "red";
      cell.style.border = "3px solid red";
      cell.style.pointerEvents = "none";
    } else {
      cell.addEventListener("click", () => openPopup(day));
    }
    calendar.appendChild(cell);
  }
}

// Gestion de la fenêtre pop-up
const popup = document.getElementById("popUp");
const popupContent = document.getElementById("popup-content");
const gameContainer = document.getElementById("game-container");
const closePopup = document.getElementById("closeBtn");

closePopup.addEventListener("click", closeCurrentGame);

popup.appendChild(closePopup);

let activeGame = null; // Suivi du jeu actif
const debugMode = false;

// Fonction pour fermer le jeu actuel et réinitialiser l'état
function closeCurrentGame() {
  popup.style.display = "none";
  gameContainer.innerHTML = ""; // Réinitialise le contenu

  if (popup.dataset.timer) {
    clearInterval(popup.dataset.timer);
    delete popup.dataset.timer;
  }

  // Réinitialisation du jeu actif
  if (activeGame && activeGame.reset) {
    activeGame.reset();
  }
  activeGame = null;
}

function openPopup(day) {
  const game = games[day - 1]; // Corrige l'index du jour
  if (!game) {
    alert("Ce jour n'a pas encore de jeu assigné !");
    return;
  }

  const now = new Date();
  const targetTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    day,
    20,
    0,
    0
  );

  // Affiche la pop-up
  popup.style.display = "flex";
  gameContainer.innerHTML = `<h2>Jour ${day}</h2>`; // Titre dynamique

  if (debugMode || now >= targetTime) {
    // Affiche le jeu si déverrouillé
    game.game(() => {
      showEndContent(game.endContent, () => {
        popup.style.display = "none";
        gameContainer.innerHTML = ""; // Nettoie après fermeture

        if (game.reset) {
          game.reset();
        }
        activeGame = null;
      });
    });
  } else {
    // Vérifie si un timer existe déjà
    let timerDiv = document.getElementById("timer");
    if (!timerDiv) {
      // Crée un nouveau timer uniquement si absent
      timerDiv = document.createElement("div");
      timerDiv.id = "timer";
      popupContent.appendChild(timerDiv);

      // Démarre le timer
      const interval = setInterval(() => {
        const remaining = updateTimer(timerDiv, targetTime);
        if (remaining <= 0) {
          clearInterval(interval);
          openPopup(day); // Relance automatiquement l'ouverture
        }
      }, 1000);

      // Stocke l'interval pour le nettoyage ultérieur
      popup.dataset.timer = interval;
    }

    // Met à jour immédiatement le timer
    updateTimer(timerDiv, targetTime);
  }
}

function closeCurrentGame() {
  popup.style.display = "none";
  gameContainer.innerHTML = ""; // Réinitialise le contenu

  // Supprime le timer actif s'il existe
  if (popup.dataset.timer) {
    clearInterval(popup.dataset.timer);
    delete popup.dataset.timer;
  }

  // Réinitialisation du jeu actif
  if (activeGame && activeGame.reset) {
    activeGame.reset();
  }
  activeGame = null;

  // Nettoie le contenu de la pop-up (y compris le timer)
  const timerDiv = document.getElementById("timer");
  if (timerDiv) {
    timerDiv.remove();
  }
}

function updateTimer(timerDiv, targetTime) {
  const now = new Date();
  const timeDifference = targetTime - now;

  if (timeDifference > 0) {
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    timerDiv.innerHTML = `
        <h2>Contenu disponible à 20h</h2>
        <p>Temps restant : ${hours.toString().padStart(2, "0")}h :
          ${minutes.toString().padStart(2, "0")}m :
          ${seconds.toString().padStart(2, "0")}s</p>
      `;
  } else {
    timerDiv.innerHTML = "<p>Chargement...</p>";
  }

  return timeDifference;
}

// Fonction pour afficher le contenu final
function showEndContent(content, callback) {
  popupContent.innerHTML = `
    <p>${content}</p>
  `;
  const finishButton = document.createElement("button");
  finishButton.textContent = "Continuer";
  finishButton.addEventListener("click", () => callback());
  popupContent.appendChild(finishButton);
}

// Jeu : Poets Quiz
function poetsQuiz(callback) {
  const quizSongs = [
    {
      question: "And we keep driving into the night...",
      choices: [
        "It's a late goodbye, such a late goodbye",
        "It's a fade goodbye, such a fade goodbye",
        "It's a damn goodbye, such a damn goodbye",
      ],
      correctAnswer: "It's a late goodbye, such a late goodbye",
      audioSrc: "./audio1stDec/LateGoodbye.ogg",
    },
    {
      question: "When I thought than I fought this war alone...",
      choices: [
        "you were them on the side all the whole time",
        "you were there by my side through the hard times",
        "you were there by my side on the front line.",
      ],
      correctAnswer: "you were there by my side on the front line.",
      audioSrc: "./audio1stDec/War.ogg",
    },
    {
      question:
        "So I want to run to your shelter tonight, run to the shelter tonight...",
      choices: [
        "United in silent resistance, Of bowing to false kings.",
        "United in quiet defiance, Of kneeling to false kings.",
        "United in solemn persistence, Of serving false kings",
      ],
      correctAnswer: "United in silent resistance, Of bowing to false kings.",
      audioSrc: "./audio1stDec/FalseKings.ogg",
    },
  ];

  let currentQuestionIndex = 0;

  // Afficher une question
  function showQuestion(index) {
    const quizContainer = document.getElementById("game-container");
    quizContainer.className = "quiz-container";
    const song = quizSongs[index];
    quizContainer.innerHTML = `
      <h3>${song.question}</h3>
      <audio controls>
        <source src="${song.audioSrc}" type="audio/ogg">
        Your browser does not support the audio element.
      </audio>
      <div id="choices"></div>
    `;

    const choicesContainer = document.createElement("div");
    choicesContainer.classList.add("choices-container");
    song.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () =>
        handleAnswer(choice, song.correctAnswer, callback)
      );
      choicesContainer.appendChild(button);
    });
    quizContainer.appendChild(choicesContainer);
  }

  // Gérer la réponse de l'utilisateur
  function handleAnswer(selected, correct, callback) {
    const answerPoetsQuiz = document.createElement("p");
    answerPoetsQuiz.className = "answerPoetsQuiz";
    if (selected === correct) {
      answerPoetsQuiz.innerHTML = "Correct !";
      answerPoetsQuiz.style.color = "green";
      answerPoetsQuiz.style.fontSize = "30px";

      currentQuestionIndex++;
      if (currentQuestionIndex < quizSongs.length) {
        setTimeout(() => {
          showQuestion(currentQuestionIndex);
        }, 2000);
      } else {
        setTimeout(() => {
          const game = games[0];
          showEndContent(game.endContent, callback);
        }, 2000);
      }
    } else {
      answerPoetsQuiz.innerHTML = "Incorrect !";
      answerPoetsQuiz.style.color = "red";
      answerPoetsQuiz.style.fontSize = "30px";

      setTimeout(() => {
        answerPoetsQuiz.remove();
      }, 1000);
    }

    popupContent.appendChild(answerPoetsQuiz);
  }

  // Démarrer le quiz
  showQuestion(currentQuestionIndex);
}

// Jeu : Énigmes
function riddles(callback, index = 0) {
  const riddlesList = [
    {
      enigme: "Qu'est ce qui commence et finir par T, et avec un thé ?",
      reponse: "Une théière",
    },
    {
      enigme:
        "Je commence et je finis par un e, mais je ne contiens qu'une seule lettre. Qui suis-je ?",
      reponse: "Une enveloppe",
    },
    {
      enigme:
        "Il est à toi, mais les autres l'utilisent plus que toi, qui suis-je ?",
      reponse: "Un nom",
    },
  ];

  if (index >= riddlesList.length) {
    // À la fin du jeu, récupérer le contenu spécifique du jeu "Riddles"
    const game = games[1]; // Indice 1 pour "Riddles" (indexé à partir de 0)
    setTimeout(() => {
      showEndContent(game.endContent, () => {
        if (typeof callback === "function") {
          callback(); // Appel du callback si c'est une fonction
        }
      });
    }, 2000);
    return;
  }

  const currentRiddle = riddlesList[index];
  const riddlesContainer = document.getElementById("game-container");
  riddlesContainer.className = "riddles-container";

  riddlesContainer.innerHTML = `
    <h3>${currentRiddle.enigme}</h3>
    <input id="riddle-answer" placeholder="un / une ..." />
    <button id="validate-answer">Valider</button>
  `;

  document.getElementById("validate-answer").addEventListener("click", () => {
    handleRiddleAnswer(
      currentRiddle.reponse,
      callback,
      index,
      riddlesList.length
    );
  });
}

function handleRiddleAnswer(correctAnswer, callback, index, totalRiddles) {
  const answerRiddle = document.createElement("p");
  const input = document
    .getElementById("riddle-answer")
    .value.trim()
    .toLowerCase();

  if (input === correctAnswer.toLowerCase()) {
    answerRiddle.innerHTML = "Correct !";
    answerRiddle.style.color = "green";
    answerRiddle.style.fontSize = "25px";
    const nextIndex = index + 1;

    if (nextIndex < totalRiddles) {
      setTimeout(() => {
        riddles(callback, nextIndex);
        answerRiddle.remove();
      }, 2000);
    } else {
      setTimeout(() => {
        const game = games[1];
        showEndContent(game.endContent, callback);
        answerRiddle.remove();
      }, 2000);
    }
  } else {
    answerRiddle.innerHTML = "Incorrect !";
    answerRiddle.style.color = "red";
    answerRiddle.style.fontSize = "25px";
    setTimeout(() => {
      answerRiddle.remove();
    }, 1000);
  }

  const riddlesContainer = document.getElementById("game-container");
  riddlesContainer.appendChild(answerRiddle);
}

function anagramGame(callback) {
  const wordsList = [
    "lampe",
    "roman",
    "écrivain",
    "détective",
    "thriller",
    "boucle",
  ];
  let currentWordIndex = 0;
  let attempts = 0;

  // Fonction pour mélanger un mot
  function scrambleWord(word) {
    const scrambled = word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    return scrambled;
  }

  // Fonction pour afficher l'interface du jeu
  function showAnagramGame() {
    const anagramGameContainer = document.getElementById("game-container");
    anagramGameContainer.className = "anagram-game-container";

    const currentWord = wordsList[currentWordIndex];
    const scrambledWord = scrambleWord(currentWord);

    anagramGameContainer.innerHTML = `
      <h3>Anagramme, trouvez le mot : ${scrambledWord}</h3>
      <input id="user-input" placeholder="Entrez votre réponse" />
      <button id="submit-btn">Valider</button>
      <p id="feedback"></p>
    `;

    // Gérer l'événement de soumission de la réponse
    document.getElementById("submit-btn").addEventListener("click", () => {
      const userInput = document
        .getElementById("user-input")
        .value.trim()
        .toLowerCase();
      const feedbackWord = document.createElement("p");
      attempts++;

      if (userInput === currentWord) {
        feedbackWord.textContent = "Correct !";
        feedbackWord.style.color = "green";

        setTimeout(() => {
          currentWordIndex++; // Passer au mot suivant
          if (currentWordIndex < wordsList.length) {
            showAnagramGame(); // Afficher le prochain mot
          } else {
            // Si tous les mots sont trouvés, finir le jeu
            setTimeout(() => {
              showEndContent(games[2].endContent, callback);
            }, 1000);
          }
        }, 1000);
      } else {
        feedbackWord.textContent = "Incorrect !";
        feedbackWord.style.color = "red";

        // Afficher après un court délai et nettoyer
        setTimeout(() => {
          feedbackWord.remove();
        }, 1000);
      }

      anagramGameContainer.appendChild(feedbackWord);
    });
  }

  // Démarre le jeu
  showAnagramGame();
}
function simonGame(callback) {
  const simonGameContainer = document.getElementById("game-container");
  simonGameContainer.className = "simon-game-container";
  const colors = ["red", "blue", "green", "yellow"];
  const images = [
    "./WyattLogos/WyattLogo01.png", // Image pour "red"
    "./WyattLogos/WyattLogo02.png", // Image pour "blue"
    "./WyattLogos/WyattLogo03.png", // Image pour "green"
    "./WyattLogos/WyattSicks.png", // Image pour "yellow"
  ];
  let sequence = [];
  let userSequence = [];
  let level = 0;
  const maxLevels = 5;
  let wyattSong; // Déclaration sans initialisation ici

  function initializeSound() {
    // Crée le son uniquement lors de l'initialisation du jeu
    wyattSong = new Audio("./WyattLogos/Wyatt.ogg"); // Remplacer par le bon chemin du fichier audio
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function playSequence() {
    userSequence = [];
    const simonGameContainer = document.getElementById("game-container");
    simonGameContainer.innerHTML = `
      <h3>Niveau ${level + 1} / 5</h3>
      <div class="simon-buttons-container">
        ${colors
          .map(
            (color, index) => `
          <button class="simon-button ${color}" id="${color}" style="border: 5px solid ${color};">
            <img src="${images[index]}" alt="${color}" class="simon-image" />
          </button>`
          )
          .join("")}
      </div>
      <p id="simon-feedback">Suivez la séquence !</p>
    `;

    let index = 0;
    const interval = setInterval(() => {
      const color = sequence[index];
      const button = document.getElementById(color);

      // Animation visuelle
      button.classList.add("active");
      wyattSong.currentTime = 0; // Remettre le son au début pour le rejouer
      wyattSong.play(); // Jouer le son à chaque passage d'une couleur

      setTimeout(() => button.classList.remove("active"), 500);

      index++;
      if (index >= sequence.length) {
        clearInterval(interval);
        setTimeout(() => {
          document.getElementById("simon-feedback").textContent =
            "C'est à vous de jouer !";
          enableButtons();
        }, 1000);
      }
    }, 1500);
  }

  function enableButtons() {
    const buttons = document.querySelectorAll(".simon-button");
    buttons.forEach((button) => {
      button.style.pointerEvents = "auto";
      button.addEventListener("click", handleUserClick);
    });
  }

  function disableButtons() {
    const buttons = document.querySelectorAll(".simon-button");
    buttons.forEach((button) => {
      button.style.pointerEvents = "none";
      button.removeEventListener("click", handleUserClick);
    });
  }

  function handleUserClick(event) {
    const clickedElement = event.target;
    const clickedColor = clickedElement.classList.contains("simon-button")
      ? clickedElement.id
      : clickedElement.parentElement.id;

    userSequence.push(clickedColor);

    // Animation visuelle pour le clic utilisateur
    const button = document.getElementById(clickedColor);
    button.classList.add("active");
    wyattSong.currentTime = 0; // Remettre le son au début pour le rejouer
    wyattSong.play(); // Jouer le son à chaque clic

    setTimeout(() => button.classList.remove("active"), 500);

    const currentIndex = userSequence.length - 1;

    if (userSequence[currentIndex] !== sequence[currentIndex]) {
      // Perdu ! Affiche le message et ferme le jeu
      alert("Perdu ! Recommencez !"); // true pour fermer la fenêtre
      simonGameContainer.innerHTML = "";
      startSimonGame();
      return;
    }

    if (userSequence.length === sequence.length) {
      disableButtons();
      level++;

      if (level === maxLevels) {
        // Victoire ! Si on atteint le niveau max, on affiche la victoire
        const endMessage = games[3].endContent;
        setTimeout(() => {
          showEndContent(endMessage, callback, false);
        }, 1000);
        setTimeout(() => {
          letMeIn();
        }, 3000);
      } else {
        setTimeout(nextLevel, 1000);
      }
    }
  }

  function letMeIn() {
    const fiend = document.createElement("div");
    fiend.className = "fiend";
    document.body.appendChild(fiend);

    const fiendVideo = document.createElement("video");
    fiendVideo.src = "./WyattLogos/BrayWyatt.mp4";
    fiendVideo.style.width = "100%";
    fiendVideo.style.height = "100%";
    fiendVideo.style.objectFit = "cover";
    fiendVideo.style.position = "fixed";
    fiendVideo.style.top = "0";
    fiendVideo.style.left = "0";
    fiend.appendChild(fiendVideo);

    fiendVideo.play();
    fiendVideo.addEventListener("ended", () => {
      fiend.style.display = "none";
    });
  }

  function nextLevel() {
    sequence.push(getRandomColor());
    playSequence();
  }

  function startSimonGame() {
    initializeSound(); // Initialise le son uniquement quand le jeu commence
    sequence = [getRandomColor()];
    userSequence = [];
    level = 0;
    playSequence();
  }

  startSimonGame();
}

function japaneseColorBox(callback) {
  const japaneseColor = [
    { color: "red", couleur: "rouge", iro: "aka", colorKanji: "赤" },
    { color: "green", couleur: "vert", iro: "midori", colorKanji: "緑" },
    { color: "blue", couleur: "bleu", iro: "ao", colorKanji: "青" },
    { color: "yellow", couleur: "jaune", iro: "kiiro", colorKanji: "黄" },
    { color: "purple", couleur: "violet", iro: "murasaki", colorKanji: "紫" },
  ];

  const japaneseColorContainer = document.getElementById("game-container");
  japaneseColorContainer.className = "japanese-color-container";

  let displayedColor; // Couleur du carré
  let currentColor; // Couleur mentionnée dans le texte
  let level = 1;
  const maxLevel = 5;
  let timeoutId; // Timeout global pour contrôler les changements de couleur

  function displayColorBox() {
    // Efface l'ancien carré de couleur
    japaneseColorContainer.querySelector(".color-box")?.remove();

    // Sélectionne une couleur aléatoire pour le carré
    displayedColor =
      japaneseColor[Math.floor(Math.random() * japaneseColor.length)];

    // Affiche le carré de couleur
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = displayedColor.color;
    japaneseColorContainer.appendChild(colorBox);

    // Ajoute l'écouteur d'événement sur le carré
    colorBox.addEventListener("click", handleClick);

    // Annule le timeout précédent avant d'en démarrer un nouveau
    clearTimeout(timeoutId);

    // Passe à une nouvelle couleur après 2,5 secondes
    timeoutId = setTimeout(() => {
      colorBox.removeEventListener("click", handleClick);
      displayColorBox();
    }, 2500);
  }

  function handleClick() {
    // Vérifie si la couleur du carré correspond à l'énoncé
    if (displayedColor.color === currentColor.color) {
      alert("Bravo !");
      level++;

      if (level > maxLevel) {
        const endMessage = games[4].endContent;
        setTimeout(() => {
          showEndContent(endMessage, callback, false);
          clearTimeout(timeoutId);
          colorBox.style.display = "none";
          colorBox.removeEventListener("click", handleClick);
        }, 1000);
      } else {
        displayNextLevel(); // Passe au niveau suivant
      }
    } else {
      alert("Mauvaise réponse ! Essayez encore.");
      level = 1;
      displayNextLevel(); // Redémarre au niveau 1
    }
  }

  function displayNextLevel() {
    japaneseColorContainer.innerHTML = ""; // Réinitialise le conteneur
    currentColor =
      japaneseColor[Math.floor(Math.random() * japaneseColor.length)];

    // Affiche le texte de la nouvelle couleur cible
    const colorText = document.createElement("h3");
    colorText.innerHTML = `<p>Round ${level} / 5 : ${currentColor.couleur} = ${currentColor.iro}</p><p style="color: ${currentColor.color};">(${currentColor.colorKanji})</p>`;
    japaneseColorContainer.appendChild(colorText);

    const textGame = document.createElement("div");
    textGame.className = "textGame";
    textGame.innerHTML =
      "Si le carré n'est de la bonne couleur, veuillez patienter jusqu'à trouver la bonne.";
    japaneseColorContainer.appendChild(textGame);

    // Lance une nouvelle séquence de carrés
    displayColorBox();
  }

  // Démarre le jeu
  displayNextLevel();
}

function geekQuiz(callback) {
  const geekQuizContainer = document.getElementById("game-container");
  geekQuizContainer.className = "geek-quiz-container";

  const questions = [
    {
      question:
        "Je dirais qu'il faut beaucoup de bravoure pour affronter ses ennemis mais qu'il en faut encore plus pour affronter ses amis.",
      answers: ["Albus Dumbledore", "Obi-Wan Kenobi", "Ben Parker"],
      correctAnswer: "Albus Dumbledore",
      video: "./answersGeekQuiz/Answer01.mp4",
    },
    {
      question:
        "- Vous jouez au dur sous votre armure, mais si on vous l'enlève, vous êtes quoi ? <br/> - Un génie, play-box, philanthrope, milliardaire.",
      answers: [
        "Clark Kent & Bruce Wayne",
        "Soldier Boy & Tek Knight",
        "Steve Rogers & Tony Stark",
      ],
      correctAnswer: "Steve Rogers & Tony Stark",
      video: "./answersGeekQuiz/Answer02.mp4",
    },
    {
      question:
        "Ce gars a une proportion à qui fait les génocides, il file le cancer à des gosses, et la seule idée qu'il a eu pour sauver l'humanité, c'est de clouer son propre fils sur une planche... ",
      answers: ["Homelander", "William Butcher", "Frenchie"],
      correctAnswer: "William Butcher",
      video: "./answersGeekQuiz/Answer03.mp4",
    },
    {
      question: "Un grand pouvoir, implique de grandes responsabilités.",
      answers: ["Thomas Wayne", "Jonathan Kent", "Ben Parker"],
      correctAnswer: "Ben Parker",
      video: "./answersGeekQuiz/Answer04.mp4",
    },
    {
      question: "- Après tout ce temps ? <br/> - A jamais !",
      answers: [
        "Albus Dumbledore & Severus Rogue",
        "Thanos & Steve Rogers",
        "Darkseid & Superman",
      ],
      correctAnswer: "Albus Dumbledore & Severus Rogue",
      video: "./answersGeekQuiz/Answer05.mp4",
    },
  ];

  let currentQuestion = 0;

  function displayQuestion() {
    geekQuizContainer.innerHTML = ""; // Réinitialise le conteneur

    const question = questions[currentQuestion];
    const questionElement = document.createElement("p");
    questionElement.innerHTML = `Qui a/ont dit : <br/> "<em>${question.question}</em>" ?`;
    geekQuizContainer.appendChild(questionElement);

    const answersElement = document.createElement("div");
    answersElement.className = "answers";
    question.answers.forEach((answer) => {
      const answerButton = document.createElement("button");
      answerButton.textContent = answer;
      answerButton.addEventListener("click", () => checkAnswer(answer));
      answersElement.appendChild(answerButton);
    });
    geekQuizContainer.appendChild(answersElement);
  }

  function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];
    if (selectedAnswer === question.correctAnswer) {
      // Bonne réponse : jouer la vidéo associée
      playVideo(question.video, () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayQuestion();
        } else {
          const endMessage = games[5].endContent;
          setTimeout(() => {
            showEndContent(endMessage, callback, false);
          }, 1000);
        }
      });
    } else {
      // Mauvaise réponse : afficher un message et permettre de retenter
      showRetryMessage();
    }
  }

  function showRetryMessage() {
    const retryMessage = document.createElement("p");
    retryMessage.textContent = "Mauvaise réponse. Essayez encore !";
    retryMessage.style.color = "red";
    retryMessage.style.fontSize = "18px";
    geekQuizContainer.appendChild(retryMessage);

    setTimeout(() => retryMessage.remove(), 2000); // Retire le message après 2 secondes
  }
  displayQuestion();
}

function playVideo(videoSrc, onEnd) {
  const geekQuizContainer = document.getElementById("game-container");
  geekQuizContainer.innerHTML = ""; // Réinitialise le conteneur
  const videoElement = document.createElement("video");
  videoElement.src = videoSrc;
  videoElement.autoplay = true;
  videoElement.style.width = "100%";
  videoElement.style.height = "100%";
  videoElement.style.objectFit = "contain";
  videoElement.style.borderRadius = "30px";
  geekQuizContainer.appendChild(videoElement);

  videoElement.addEventListener("ended", function () {
    onEnd();
    videoElement.remove();
  }); // Passe à la prochaine question après la vidéo
}

function intrudersHillGame(callback) {
  const intrudersContainer = document.getElementById("game-container");
  intrudersContainer.className = "intruders-container";

  const intrudersList = [
    {
      objects: [
        "Le lac Toluca",
        "L'école élémentaire Midwich",
        "L'hôpital Saint-Martin de Beauzac",
      ],
      intruder: "L'hôpital Saint-Martin de Beauzac",
    },
    {
      objects: [
        "La fiole du professeur",
        "Le couteau d'Angela",
        "La lettre de Mary",
      ],
      intruder: "La fiole du professeur",
    },
    {
      objects: ["Heather Mason", "Sofia Mandula", "Alessa Gillespie"],
      intruder: "Sofia Mandula",
    },
  ];

  let currentIntruderGuess = 0;

  function displayIntrudersHill() {
    intrudersContainer.innerHTML = ""; // Réinitialise le conteneur

    const intruder = intrudersList[currentIntruderGuess];
    const intruderElement = document.createElement("p");
    intruderElement.innerHTML = `Quel est l'intrus ?`;
    intrudersContainer.appendChild(intruderElement);

    const intruderAnswer = document.createElement("div");
    intruderAnswer.className = "intruder-answers";
    intruder.objects.forEach((object) => {
      const objectButton = document.createElement("button");
      objectButton.textContent = object;
      objectButton.addEventListener("click", () => checkIntruderAnswer(object));
      intruderAnswer.appendChild(objectButton);
    });
    intrudersContainer.appendChild(intruderAnswer);
  }

  function checkIntruderAnswer(selectedObject) {
    const mary = new Audio("silentHillMary.mp3");
    const intruder = intrudersList[currentIntruderGuess];
    if (selectedObject === intruder.intruder) {
      // Bonne sélection : progression et message
      currentIntruderGuess++;
      showRetryMessage(true); // Bonne réponse
      if (currentIntruderGuess < intrudersList.length) {
        setTimeout(() => {
          displayIntrudersHill(); // Afficher le prochain jeu
        }, 2000);
      } else {
        const endMessage = games[6]?.endContent;
        if (endMessage) {
          setTimeout(() => {
            showEndContent(endMessage, callback, false);
            mary.play();
          }, 1000);
        } else {
          console.log("Message de fin non trouvé.");
        }
      }
    } else {
      // Mauvaise sélection : afficher un message et permettre de retenter
      showRetryMessage(false); // Mauvaise réponse
    }
  }

  function showRetryMessage(isCorrect) {
    const retryMessage = document.createElement("p");
    retryMessage.className = "retry-message";

    if (isCorrect) {
      // Bonne réponse
      retryMessage.innerHTML = "Très bien !";
      retryMessage.style.color = "green";
    } else {
      // Mauvaise réponse
      retryMessage.innerHTML = "Mauvaise sélection. Essayez encore !";
      retryMessage.style.color = "red";
      setTimeout(() => retryMessage.remove(), 2000); // Retirer le message après 2 secondes
    }

    retryMessage.style.fontSize = "25px";
    intrudersContainer.appendChild(retryMessage);
  }

  // Lancement du jeu
  displayIntrudersHill();
}

// Fonction pour afficher le contenu final (quand le jeu est terminé)

function reverseHate(callback) {
  // Liste de mots ou phrases originales
  const wordsList = [
    { reversed: "ruomA", correct: "Amour" },
    { reversed: "tejeR", correct: "Rejet" },
    { reversed: "sirpmocnI", correct: "Incompris" },
    { reversed: "ecitsujnI", correct: "Injustice" },
    { reversed: "noisserpéD", correct: "Dépression" },
    { reversed: "euqixot noitaleR", correct: "Relation toxique" },
    { reversed: "élupinaM", correct: "Manipulé" },
    { reversed: "étôc ed éssiaL", correct: "Laissé de côté" },
    {
      reversed:
        "! snosihart sruel te secnelosni sruel ruop reyap eriaf sel ed spmet tse lI",
      correct:
        "Il est temps de les faire payer pour leurs insolences et leurs trahisons !",
    },
  ];

  // Variables pour la progression
  let currentWordIndex = 0;

  // Fonction pour afficher le mot à deviner
  function displayWord() {
    const reverseHateContainer = document.getElementById("game-container");
    reverseHateContainer.className = "reverse-hate-container"; // Classe CSS
    reverseHateContainer.innerHTML = ""; // Réinitialise le conteneur

    const wordData = wordsList[currentWordIndex];

    const question = document.createElement("p");
    question.textContent = `Réécrivez ce mot à l'endroit : "${wordData.reversed}"`;
    reverseHateContainer.appendChild(question);

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "userInput";
    reverseHateContainer.appendChild(inputField);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Vérifier";
    submitButton.addEventListener("click", checkAnswer);
    reverseHateContainer.appendChild(submitButton);

    inputField.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkAnswer(); // Appeler la fonction checkAnswer quand "Entrée" est pressé
      }
    });
  }

  // Fonction pour vérifier la réponse de l'utilisateur
  function checkAnswer() {
    const userInput = document.getElementById("userInput").value.trim();
    const wordData = wordsList[currentWordIndex];
    const reverseHateContainer = document.getElementById("game-container");

    function jumpscare() {
      const hateJumpscare = document.createElement("img");
      const jumpscareSound = document.createElement("audio");
      jumpscareSound.src = "./hate/jumpscareHate.ogg";
      jumpscareSound.play();
      hateJumpscare.className = "hate-jumpscare";
      hateJumpscare.src = "./hate/hateJumpscare.jpeg";
      document.body.appendChild(hateJumpscare);

      setTimeout(() => {
        document.body.removeChild(hateJumpscare);
        jumpscareSound.pause();
        jumpscareSound.currentTime = 0;
        jumpscareSound.volume = 1;
        showEndContent(games[7]?.endContent, callback);
      }, 2000);
    }

    const resultMessage = document.createElement("p");

    // Vérifier si la réponse est correcte
    if (userInput === wordData.correct) {
      resultMessage.textContent = "Bravo ! C'est correct.";
      resultMessage.style.color = "green";
      currentWordIndex++;

      // Vérifier si on a encore des mots à deviner
      if (currentWordIndex < wordsList.length) {
        setTimeout(() => {
          displayWord(); // Afficher le mot suivant après 1 seconde
        }, 1000);
      } else {
        jumpscare();
      }
    } else {
      resultMessage.textContent = "Mauvaise réponse. Réessayez.";
      resultMessage.style.color = "red";
      setTimeout(() => {
        resultMessage.remove();
      }, 1500);
    }

    // Ajouter le message de résultat au conteneur
    reverseHateContainer.appendChild(resultMessage);
  }

  // Lancer le jeu
  displayWord();
}

function phoneGame(callback) {
  const phoneGameContainer = document.getElementById("game-container");
  phoneGameContainer.className = "phone-game-container";

  const phoneModel = document.createElement("div");
  phoneModel.className = "phone-model";
  phoneGameContainer.appendChild(phoneModel);

  const phoneScreen = document.createElement("div");
  phoneScreen.className = "phone-screen";
  phoneModel.appendChild(phoneScreen);

  const phoneCluesScreen = document.createElement("div");
  phoneCluesScreen.className = "phone-clues-screen";
  phoneModel.appendChild(phoneCluesScreen);

  const phoneButtons = document.createElement("div");
  phoneButtons.className = "phone-buttons";
  phoneModel.appendChild(phoneButtons);

  const phoneTouch = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", ""];

  // Ajout des boutons
  for (let i = 0; i < phoneTouch.length; i++) {
    const phoneButton = document.createElement("button");
    phoneButton.className = "phoneButton";
    phoneButton.textContent = phoneTouch[i];
    phoneButtons.appendChild(phoneButton);

    if (phoneTouch[i] === "") {
      phoneButton.classList.add("emptyTouch");
    }

    phoneButton.addEventListener("click", function () {
      if (phoneScreen.textContent.length < 2) {
        // Limiter à 2 chiffres
        phoneScreen.textContent += phoneTouch[i];
        phoneScreen.style.fontSize = "25px";
      }
    });
  }

  const phoneNumberText = [
    {
      phoneNumber: "06",
      phoneTexts: [
        "Le diable",
        "Samedi",
        "Bruce Willis et l'enfant qui voit des morts",
      ],
      phoneNumberIndices: [
        "Qu'est ce qu'un héxagone ?",
        "Une guitare a deux cordes : Vrai ou faux ?",
        "30 ÷ 5 = ",
      ],
    },
    {
      phoneNumber: "94",
      phoneTexts: ["Pulp Fiction", "Kurt Cobain", "Jodelle Ferland"],
      phoneNumberIndices: [
        "L'une commence une vie, l'autre met un terme.",
        "Pendant une naissance, il y a un mort, pendant un mort, il y a une naissance.",
        "Pulp Fiction est sorti en 19XX",
      ],
    },
    {
      phoneNumber: "39",
      phoneTexts: ["Dole", "Batman", "Un film d'Alfred Hitchcock"],
      phoneNumberIndices: [
        "L'indicatif téléphonique de la France est +33. Celui d'Italie ?",
        "L'Allemagne envahit la Pologne en 19**",
        "13 x 3",
      ],
    },
    {
      phoneNumber: "12",
      phoneTexts: [
        "La fin du monde",
        "Le zodiac chinois",
        "Hercule et ses travaux",
      ],
      phoneNumberIndices: [
        "Quand célébrer les noces de soie ?",
        "Combien de syllabes en total dans un alexandrin trimètre ?",
        "Quel est le numéro atomique du Magnésium ?",
      ],
    },
    {
      phoneNumber: "30",
      phoneTexts: ["Les noces de perle", "Playstation", "XXX"],
      phoneNumberIndices: [
        "Dans un film d'horreur en Alaska, il y a un nombre important de jours de nuit.",
        "Cette année, Gandhi a organisé la Marche du sel.",
        "Le premier film parlant de Greta Garbo.",
      ],
    },
  ];

  // Compteur pour les erreurs et indices
  let errors = 0;
  let indexCount = 0;
  let currentPhoneIndex = 0; // Par exemple, "94"
  let currentPhoneText = phoneNumberText[currentPhoneIndex];
  const phoneDial = new Audio("./phoneDialing.mp3");

  function checkPhoneNumber(input) {
    const currentPhoneNumber = currentPhoneText.phoneNumber;

    // Vérifier si l'entrée correspond au numéro attendu
    if (input === currentPhoneNumber) {
      phoneScreen.textContent = "Correct!";
      errors = 0; // Réinitialiser les erreurs
      indexCount = 0; // Réinitialiser les indices
      setTimeout(() => {
        currentPhoneIndex++;
        if (currentPhoneIndex < phoneNumberText.length) {
          currentPhoneText = phoneNumberText[currentPhoneIndex];
          displayPhoneText();
        } else {
          phoneScreen.textContent = "06.94.39.12.30";
          phoneDial.play();
          phoneDial.addEventListener("ended", () => {
            setTimeout(() => {
              showEndContent(games[8]?.endContent, callback);
            }, 2000);
          });
        }
      }, 1000);
    } else {
      errors++;
      phoneScreen.textContent = "Incorrect, essayez encore !";
      phoneScreen.style.fontSize = "17px";
      setTimeout(() => {
        phoneScreen.textContent = "";
      }, 1000);
      if (
        errors >= 3 &&
        indexCount < currentPhoneText.phoneNumberIndices.length
      ) {
        // Afficher un indice
        phoneCluesScreen.textContent =
          currentPhoneText.phoneNumberIndices[indexCount];
        indexCount++; // Passer au prochain indice
        errors = 0; // Réinitialiser les erreurs après un indice
      }
    }
  }

  function clearPhoneTextContainer() {
    const phoneTextContainer = document.querySelector(".phone-texts-container");
    if (phoneTextContainer) {
      phoneTextContainer.remove(); // Supprimer le conteneur existant
      phoneScreen.textContent = "";
      phoneCluesScreen.textContent = "";
    }
  }

  function displayPhoneText() {
    clearPhoneTextContainer();
    const phoneTextContainer = document.createElement("div");
    phoneTextContainer.className = "phone-texts-container";
    phoneGameContainer.appendChild(phoneTextContainer);

    for (let i = 0; i < currentPhoneText.phoneTexts.length; i++) {
      const phoneText = document.createElement("p");
      phoneText.textContent = currentPhoneText.phoneTexts[i];
      phoneTextContainer.appendChild(phoneText);
    }
  }

  // Fonction d'initialisation du jeu
  displayPhoneText();

  // Vérification du numéro après la saisie
  setInterval(() => {
    const input = phoneScreen.textContent;
    if (input.length === 2) {
      // Si l'utilisateur a saisi deux chiffres
      checkPhoneNumber(input);
    }
  }, 100);
}

function wordsCategoryGame(callback) {
  const wordsCategoryContainer = document.getElementById("game-container");
  wordsCategoryContainer.className = "words-category-container";

  // Catégories et mots
  const wordsCategories = {
    Etudiant: ["Enseignement", "Cours", "Devoirs", "Professeurs", "Diplôme"],
    Pierres: ["Obsidienne", "Améthyste", "Jade", "Topaze", "Onyx"],
    Télévision: [
      "Emissions",
      "Diffusions",
      "Spectateurs",
      "Audiences",
      "Feuilletons",
    ],
    Détective: ["Enquêtes", "Indices", "Preuves", "Crimes", "Coupable"],
    Psychologie: [
      "Mental",
      "Traumatismes",
      "Thérapies",
      "Comportements",
      "Troubles",
    ],
    Réalités: ["Monde", "Illusion", "Vérité", "Univers", "Multiverse"],
  };

  const shuffledWords = Object.values(wordsCategories)
    .flat()
    .sort(() => Math.random() - 0.5);
  let currentCategory = Object.keys(wordsCategories)[0];
  let selectedWords = [];

  function renderGame() {
    wordsCategoryContainer.innerHTML = "";

    const categoryTitle = document.createElement("div");
    categoryTitle.className = "category-title";
    categoryTitle.textContent = `Catégorie : ${currentCategory}`;
    wordsCategoryContainer.appendChild(categoryTitle);

    const wordsContainer = document.createElement("div");
    wordsContainer.className = "words-container";
    wordsCategoryContainer.appendChild(wordsContainer);

    shuffledWords.forEach((word) => {
      const wordElement = document.createElement("div");
      wordElement.className = "word";
      wordElement.textContent = word;

      wordElement.addEventListener("click", () => {
        if (selectedWords.length < 5 && !selectedWords.includes(word)) {
          wordElement.classList.add("selected");
          selectedWords.push(word);
        }
        if (selectedWords.length === 5) checkWords();
      });

      wordsContainer.appendChild(wordElement);
    });
  }

  function checkWords() {
    let hasIncorrect = false;
    const correctWords = wordsCategories[currentCategory];

    selectedWords.forEach((word) => {
      const wordElements = Array.from(document.querySelectorAll(".word"));
      const wordElement = wordElements.find((el) => el.textContent === word);
      if (wordElement) {
        if (correctWords.includes(word)) {
          wordElement.classList.add("found");
        } else {
          wordElement.classList.add("incorrect");
          hasIncorrect = true;
        }
      }
    });

    if (hasIncorrect) {
      setTimeout(() => {
        alert("Un ou plusieurs mots sont incorrects. Recommencez !");
        selectedWords = [];
        renderGame();
      }, 1000);
    } else {
      setTimeout(() => {
        alert("Bien joué ! Passons à la prochaine catégorie.");
        goToNextCategory();
      }, 1000);
    }
  }

  function goToNextCategory() {
    const categories = Object.keys(wordsCategories);
    const currentIndex = categories.indexOf(currentCategory);

    if (currentIndex < categories.length - 1) {
      currentCategory = categories[currentIndex + 1];
      selectedWords = [];
      renderGame();
    } else {
      alert("Félicitations, tu as terminé toutes les catégories !");
      if (callback) callback();
    }
  }

  renderGame();
}

function memoryCrystal(callback) {
  const memoryCrystalContainer = document.getElementById("game-container");
  memoryCrystalContainer.className = "memory-crystal-container";

  const stones = [
    {
      name: "Obsidienne",
      image: "./crystals/Obsidienne.png",
    },
    {
      name: "Onyx",
      image: "./crystals/Onyx.png",
    },
    {
      name: "Jade",
      image: "./crystals/Jade.png",
    },
    {
      name: "Topaze",
      image: "./crystals/topaze.png",
    },
  ];

  const cards = [...stones, ...stones]
    .sort(() => Math.random() - 0.5)
    .map((stone) => ({ ...stone, isFlipped: false, isMatched: false }));

  let flippedCards = [];
  let matchedPairs = 0;

  function renderGame() {
    memoryCrystalContainer.innerHTML = ""; // Corrigé : utilisation du bon conteneur

    cards.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.className = `card ${card.isFlipped ? "flipped" : ""}`;
      cardElement.dataset.index = index;

      const cardFront = document.createElement("div");
      cardFront.className = "card-front";
      cardFront.style.backgroundImage = `url(${card.image})`; // Corrigé : utilisation de card.image

      const cardBack = document.createElement("div");
      cardBack.className = "card-back";
      cardBack.style.backgroundImage = `url("./crystals/versoCrystalCard.jpeg")`;

      cardElement.appendChild(cardFront);
      cardElement.appendChild(cardBack);
      memoryCrystalContainer.appendChild(cardElement);

      // Gérer le clic sur une carte
      cardElement.addEventListener("click", () => flipCard(index));
    });
  }

  function flipCard(index) {
    const card = cards[index];

    // Empêche toute action si la carte est déjà retournée ou appariée
    if (card.isFlipped || card.isMatched || flippedCards.length === 2) return;

    card.isFlipped = true;
    flippedCards.push(index);

    const cardElement = document.querySelector(`.card[data-index="${index}"]`);
    cardElement.classList.add("flipped");

    // Vérifie les paires une fois deux cartes retournées
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 500); // Attendre que l'animation (1.5s) soit terminée
    }
  }

  function checkMatch() {
    const [index1, index2] = flippedCards;
    const card1 = cards[index1];
    const card2 = cards[index2];

    const cardElement1 = document.querySelector(
      `.card[data-index="${index1}"]`
    );
    const cardElement2 = document.querySelector(
      `.card[data-index="${index2}"]`
    );

    if (card1.name === card2.name) {
      // Marque les cartes comme appariées
      card1.isMatched = true;
      card2.isMatched = true;

      cardElement1.classList.add("matched");
      cardElement2.classList.add("matched");

      matchedPairs++;

      // Vérifie si le jeu est terminé
      if (matchedPairs === stones.length) {
        setTimeout(() => {
          showEndContent(games[10].endContent, callback);
        }, 1000);
      }
    } else {
      // Retourne les cartes après un délai si elles ne correspondent pas
      setTimeout(() => {
        card1.isFlipped = false;
        card2.isFlipped = false;

        cardElement1.classList.remove("flipped");
        cardElement2.classList.remove("flipped");
      }, 500);
    }

    // Réinitialise la liste des cartes retournées
    flippedCards = [];
  }

  renderGame();
}

function cryptogramGame(callback) {
  const cryptogramGameContainer = document.getElementById("game-container");
  cryptogramGameContainer.className = "cryptogram-game-container";

  const phrase =
    "L'AMOUR DEVIENT LA HAINE MAIS LA HAINE NE SERA JAMAIS L'AMOUR"; // Phrase à deviner
  const words = phrase.split(" "); // Séparation en mots
  let currentWordIndex = 0; // Index du mot actuel

  // Fonction pour obtenir la position dans l'alphabet d'une lettre
  function getLetterPosition(letter) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.indexOf(letter.toUpperCase()) + 1;
  }

  // Fonction pour créer les inputs et afficher les chiffres sous chaque input
  function createWordInput(word) {
    cryptogramGameContainer.innerHTML = ""; // Réinitialiser le contenu

    const wordContainer = document.createElement("div");
    wordContainer.className = "word-container";

    [...word].forEach((letter, index) => {
      const letterWrapper = document.createElement("div");
      letterWrapper.className = "letter-wrapper";

      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;

      if (/[^A-Za-z]/.test(letter)) {
        input.value = letter; // Pré-remplir caractères spéciaux
        input.disabled = true;
      } else {
        input.addEventListener("input", (e) => handleInput(e, index));
      }

      const number = document.createElement("div");
      number.className = "letter-number";
      number.textContent = getLetterPosition(letter); // Affiche le chiffre correspondant

      letterWrapper.appendChild(input);
      letterWrapper.appendChild(number); // Ajouter le chiffre sous l'input
      wordContainer.appendChild(letterWrapper);
    });

    cryptogramGameContainer.appendChild(wordContainer);

    const checkButton = document.createElement("button");
    checkButton.textContent = "Vérifier";
    checkButton.addEventListener("click", () => checkWord(word));
    cryptogramGameContainer.appendChild(checkButton);

    const rules = document.createElement("h2");
    rules.textContent = "A = 1, B = 2, C = 3...";
    rules.style.color = "purple";
    cryptogramGameContainer.appendChild(rules);
  }

  function handleInput(e, index) {
    const inputs = document.querySelectorAll(".word-container input");
    const currentInput = e.target;

    // Passer au champ suivant après la saisie
    if (currentInput.value.length > 0) {
      let nextIndex = index + 1;

      // Chercher le prochain champ non désactivé
      while (nextIndex < inputs.length && inputs[nextIndex].disabled) {
        nextIndex++;
      }

      // Si un champ suivant existe, le sélectionner
      if (nextIndex < inputs.length) {
        inputs[nextIndex].focus();
      }
    }
  }

  function checkWord(correctWord) {
    const inputs = document.querySelectorAll(".word-container input");
    const userInput = Array.from(inputs)
      .map((input) => input.value.toUpperCase())
      .join("");

    let resultElement = document.querySelector(".result-element");
    if (!resultElement) {
      resultElement = document.createElement("div");
      resultElement.className = "result-element";
      cryptogramGameContainer.appendChild(resultElement);
    }

    if (userInput === correctWord) {
      resultElement.textContent = "Exact !";
      resultElement.style.color = "green";
      resultElement.style.fontSize = "30px";

      // Passer au mot suivant
      currentWordIndex++;
      if (currentWordIndex < words.length) {
        setTimeout(() => {
          createWordInput(words[currentWordIndex]);
        }, 1000);
      } else {
        // Fin du jeu
        setTimeout(() => {
          showEndContent(games[11].endContent, callback);
        }, 1000);
      }
    } else {
      resultElement.textContent = "Incorrect, essayez à nouveau.";
      resultElement.style.color = "red";
      resultElement.style.fontSize = "30px";
      setTimeout(() => {
        resultElement.textContent = "";
      }, 1500);
    }

    cryptogramGameContainer.appendChild(resultElement);
  }

  // Lancer le jeu avec le premier mot
  createWordInput(words[currentWordIndex]);
}

function blackJackGame(callback) {
  const blackJackGameContainer = document.getElementById("game-container");
  blackJackGameContainer.className = "blackjack-game-container";
  blackJackGameContainer.innerHTML = "";

  // Initialisation des éléments de l'interface
  const blackJackScore = document.createElement("div");
  blackJackScore.className = "blackjack-score";
  blackJackGameContainer.appendChild(blackJackScore);

  const blackJack = document.createElement("h2");
  blackJack.textContent = "Blackjack";
  blackJack.style.fontSize = "40px";
  blackJackGameContainer.appendChild(blackJack);

  const blackJackRules = document.createElement("div");
  blackJackRules.className = "blackjack-rules";
  blackJackRules.innerHTML = `<h2>Règles du Blackjack</h2>
      <p>- Le but est de se rapprocher le plus possible de 21 sans le dépasser.</p>
      <p>- Les cartes J, Q et K valent 10 points. L'As vaut 1 ou 11.</p>
      <p>- Le joueur joue en premier. S'il dépasse 21, il perd automatiquement.</p>
      <p>- Le croupier doit tirer jusqu'à atteindre un score d'au moins 17.</p>
      <p>- Meilleur des 3 manches remporte le jeu !</p>`;
  blackJackGameContainer.appendChild(blackJackRules);

  const blackJackScoreBoard = document.createElement("div");
  blackJackScoreBoard.className = "blackjack-scoreboard";
  blackJackGameContainer.appendChild(blackJackScoreBoard);

  const blackJackMessage = document.createElement("div");
  blackJackMessage.className = "blackjack-message";
  blackJackGameContainer.appendChild(blackJackMessage);

  const blackJackField = document.createElement("div");
  blackJackField.className = "blackjack-field";
  blackJackGameContainer.appendChild(blackJackField);

  const blackJackPlayer = document.createElement("div");
  blackJackPlayer.className = "blackjack-player";
  blackJackField.appendChild(blackJackPlayer);

  const playerScoreSpan = document.createElement("div");
  playerScoreSpan.className = "player-score";
  playerScoreSpan.textContent = "Player";
  blackJackPlayer.appendChild(playerScoreSpan);

  const playerCardsDiv = document.createElement("div");
  playerCardsDiv.className = "player-cards";
  blackJackPlayer.appendChild(playerCardsDiv);

  const blackJackControls = document.createElement("div");
  blackJackControls.className = "blackjack-controls";
  blackJackGameContainer.appendChild(blackJackControls);

  const blackJackHitButton = document.createElement("button");
  blackJackHitButton.textContent = "Hit";
  blackJackControls.appendChild(blackJackHitButton);

  const blackJackStandButton = document.createElement("button");
  blackJackStandButton.textContent = "Stand";
  blackJackControls.appendChild(blackJackStandButton);

  const blackJackDealer = document.createElement("div");
  blackJackDealer.className = "blackjack-dealer";
  blackJackField.appendChild(blackJackDealer);

  const dealerScoreSpan = document.createElement("div");
  dealerScoreSpan.className = "dealer-score";
  dealerScoreSpan.textContent = "Dealer";
  blackJackDealer.appendChild(dealerScoreSpan);

  const dealerCardsDiv = document.createElement("div");
  dealerCardsDiv.className = "dealer-cards";
  blackJackDealer.appendChild(dealerCardsDiv);

  // Initialisation du jeu
  let deck = [];
  let playerCards = [];
  let dealerCards = [];
  let playerScore = 0;
  let dealerScore = 0;
  let playerWins = 0;
  let dealerWins = 0;
  let roundsPlayed = 0;

  const playerScoreBoard = document.createElement("div");
  playerScoreBoard.className = "player-victory";
  playerScoreBoard.innerHTML = `<p>John Peaks<br/>${playerWins}</p>`;
  blackJackScoreBoard.appendChild(playerScoreBoard);

  const dealerScoreBoard = document.createElement("div");
  dealerScoreBoard.className = "dealer-victory";
  dealerScoreBoard.innerHTML = `<p>Dealer<br/>${dealerWins}</p>`;
  blackJackScoreBoard.appendChild(dealerScoreBoard);

  // Fonctions pour gérer le jeu
  function initializeDeck() {
    const suits = ["♥", "♦", "♠", "♣"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    deck = [];
    for (let suit of suits) {
      for (let value of values) {
        deck.push({ suit, value });
      }
    }
    deck.sort(() => Math.random() - 0.5);
  }

  function getCardValue(card) {
    if (["J", "Q", "K"].includes(card.value)) return 10;
    if (card.value === "A") return 11;
    return parseInt(card.value);
  }

  function calculateScore(cards) {
    let score = cards.reduce((sum, card) => sum + getCardValue(card), 0);
    let aceCount = cards.filter((card) => card.value === "A").length;
    while (score > 21 && aceCount > 0) {
      score -= 10;
      aceCount--;
    }
    return score;
  }

  function dealCard(target) {
    target.push(deck.pop());
  }

  function renderCards() {
    playerCardsDiv.innerHTML = "";
    dealerCardsDiv.innerHTML = "";
    playerCards.forEach((card) => createCard(card, playerCardsDiv));
    dealerCards.forEach((card) => createCard(card, dealerCardsDiv));

    playerScore = calculateScore(playerCards);
    dealerScore = calculateScore(dealerCards);

    playerScoreSpan.textContent = `John Peaks: ${playerScore}`;
    dealerScoreSpan.textContent = `Dealer: ${dealerScore}`;
  }

  function createCard(card, targetDiv) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.textContent = `${card.value}${card.suit}`;
    targetDiv.appendChild(cardDiv);
  }

  function updateScores() {
    const playerScoreBoard = document.querySelector(".player-victory");
    const dealerScoreBoard = document.querySelector(".dealer-victory");

    if (playerScoreBoard && dealerScoreBoard) {
      playerScoreBoard.innerHTML = `John Peaks <br/> ${playerWins}`;
      dealerScoreBoard.innerHTML = `Dealer <br/> ${dealerWins}`;
    } else {
      console.error("Scoreboard elements not found in the DOM");
    }

    // Vérification des conditions de victoire
    checkGameEnd();
  }

  function checkGameEnd() {
    if (playerWins === 3) {
      blackJackMessage.textContent = "Vous remportez, John Peaks !";
      setTimeout(() => {
        showEndContent(games[12].endContent, callback);
      }, 1500);
      return; // Assurez-vous de sortir de la fonction après la fin du jeu
    } else if (dealerWins === 3) {
      blackJackMessage.textContent = "Vous perdez, John Peaks!";
      setTimeout(() => {
        popup.style.display = "none";
      }, 1500);
      return; // Assurez-vous de sortir de la fonction après la fin du jeu
    }
  }

  function startGame() {
    playerCards = [];
    dealerCards = [];
    initializeDeck();

    dealCard(playerCards);
    dealCard(playerCards);
    dealCard(dealerCards);

    blackJackMessage.textContent = "";

    renderCards();
  }

  function newRound() {
    if (playerWins === 3) {
      blackJackMessage.textContent = "Vous remportez, John Peaks !";
      setTimeout(() => {
        showEndContent(games[12].endContent, callback);
      }, 1500);
      return; // Assurez-vous de sortir de la fonction après la fin du jeu
    } else if (dealerWins === 3) {
      blackJackMessage.textContent = "Vous perdez, John Peaks !";
      setTimeout(() => {
        popup.style.display = "none";
      }, 1500);
      return; // Assurez-vous de sortir de la fonction après la fin du jeu
    }

    // Si aucune des conditions de fin de jeu n'est remplie, préparez une nouvelle manche
    blackJackMessage.textContent = "Nouvelle manche !";
    setTimeout(startGame, 1500);
  }

  function dealerPlay() {
    while (dealerScore < 17) {
      dealCard(dealerCards);
      dealerScore = calculateScore(dealerCards);
    }

    if (playerScore > 21 || (dealerScore >= playerScore && dealerScore <= 21)) {
      dealerWins++;
      blackJackMessage.textContent = "Dealer l'emporte !";
    } else {
      playerWins++;
      blackJackMessage.textContent = "John Peaks l'emporte !";
    }

    updateScores(); // Mise à jour des scores après le tour du croupier

    setTimeout(() => {
      roundsPlayed++;
      if (playerWins < 3 && dealerWins < 3) {
        newRound();
      }
    }, 1500);
  }

  // Boutons
  blackJackHitButton.addEventListener("click", () => {
    dealCard(playerCards);
    renderCards();
    if (playerScore > 21) dealerPlay();
  });

  blackJackStandButton.addEventListener("click", dealerPlay);

  startGame();
}

function hangedGame(callback) {
  const hangedGameContainer = document.getElementById("game-container");
  hangedGameContainer.className = "hanged-game-container";
  hangedGameContainer.innerHTML = "";

  // Mot à deviner et initialisation
  const selectedWord = "delivrance".toUpperCase();
  let maskedWord = selectedWord.replace(/./g, "_");
  let remainingGuesses = 6;

  // Affichage des lettres sous forme de traits individuels
  const wordToGuess = document.createElement("div");
  wordToGuess.className = "word-to-guess";
  for (let i = 0; i < selectedWord.length; i++) {
    const letterSpan = document.createElement("span");
    letterSpan.textContent = "_";
    letterSpan.className = "letter";
    wordToGuess.appendChild(letterSpan);
  }
  hangedGameContainer.appendChild(wordToGuess);

  // Clavier virtuel
  const keyboardContainer = document.createElement("div");
  keyboardContainer.className = "keyboard-container";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (const char of alphabet) {
    const button = document.createElement("button");
    button.textContent = char;
    button.className = "keyboard-button";
    button.addEventListener("click", () => handleGuess(char));
    keyboardContainer.appendChild(button);
  }
  hangedGameContainer.appendChild(keyboardContainer);

  // Affichage des tentatives restantes
  const remainingGuessesDisplay = document.createElement("p");
  remainingGuessesDisplay.className = "remaining-guess";
  remainingGuessesDisplay.textContent = `Nombre de tentatives restantes : ${remainingGuesses}`;
  remainingGuessesDisplay.style.fontSize = "25px";
  hangedGameContainer.appendChild(remainingGuessesDisplay);

  // Affichage des messages
  const message = document.createElement("p");
  message.className = "hanged-message";
  message.style.fontSize = "30px";
  hangedGameContainer.appendChild(message);

  function handleGuess(letter) {
    if (!/^[A-Z]$/.test(letter)) {
      message.textContent = "Veuillez entrer une lettre valide.";
      return;
    }

    let isCorrect = false;
    const letterSpans = wordToGuess.querySelectorAll(".letter");

    // Met à jour le mot masqué si la lettre est correcte
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        letterSpans[i].textContent = letter;
        isCorrect = true;
      }
    }

    maskedWord = Array.from(letterSpans)
      .map((span) => span.textContent)
      .join("");

    if (!isCorrect) {
      remainingGuesses--;
      remainingGuessesDisplay.textContent = `Nombre de tentatives restantes : ${remainingGuesses}`;
    }

    checkGameStatus();
  }

  function checkGameStatus() {
    if (maskedWord === selectedWord) {
      message.textContent = "Je sais ce que tu ressens !";
      endGame();
    } else if (remainingGuesses <= 0) {
      message.textContent = `Dommage !`;
      setTimeout(() => {
        popup.style.display = "none";
      }, 2000);
    }
  }

  function endGame() {
    const buttons = keyboardContainer.querySelectorAll("button");
    buttons.forEach((button) => (button.disabled = true));
    setTimeout(() => {
      showEndContent(games[13].endContent, callback);
    }, 1500);
    setTimeout(() => {
      release();
    }, 4000);
  }

  function release() {
    const releaseImg = document.createElement("img");
    releaseImg.src = "delivrance.jpg";
    releaseImg.className = "releaseImg";
    document.body.appendChild(releaseImg);

    const releaseTheme = document.createElement("audio");
    releaseTheme.src = "releaseThemeSong.ogg";
    releaseTheme.play();
    releaseTheme.addEventListener("ended", () => {
      document.body.removeChild(releaseImg);
    });
  }
}

function psychologyGame(callback) {
  const psychologyGameContainer = document.getElementById("game-container");
  psychologyGameContainer.className = "psychology-game-container";
  psychologyGameContainer.innerHTML = "";

  const psychoQuestions = [
    {
      question:
        "Les humains jugent un livre par sa couverture. Si une qualité physique brille chez quelqu'un, ils oublient tout de suite ses défauts. Leurs esprits sont dupés par cet effet. Mais quel est donc cet effet ?",
      answer: "Effet de Halo",
      description: "L’effet de Halo est un biais cognitif où une impression positive ou négative initiale sur une personne ou un objet influence notre perception de ses autres qualités. Par exemple, si une personne est jugée attrayante, on pourrait automatiquement supposer qu'elle est également compétente ou gentille, même sans preuve. Ce biais peut mener à des jugements erronés dans les relations, au travail ou dans d'autres contextes.",
    },
    {
      question:
        "Tu souhaites sauver ceux qui ne peuvent pas être sauvés. Tu te vois être la solution, l'espoir, mais à leurs yeux, tu peux être leur défouloir, leur bouche-trou. Tu penses aux besoins des autres, mais jamais les tiens. Quel est ce syndrôme ?",
      answer: "Syndrome du sauveur",
      description: "Le syndrome du sauveur est une tendance à vouloir sauver les autres, souvent au détriment de soi-même. La personne ressent un besoin compulsif d’aider, même lorsque ce n’est ni demandé ni approprié. Ce comportement peut naître d’un désir de donner un sens à sa propre vie ou d’un besoin de validation, et il peut aboutir à l’épuisement ou à des relations déséquilibrées.",
    },
    {
      question:
        "Tout le monde est contre toi, selon toi. Ainsi, tu deviens méfiant, voire paranoïaque. Je te suis, tel une ombre menaçante, qui suis-je, quel syndrome suis-je ?",
      answer: "Syndrome de persécution",
      description: "Le syndrome de persécution est une croyance irrationnelle selon laquelle on est la cible de malveillance, de complots ou d’attaques injustifiées. Souvent associé à la paranoïa, il peut pousser une personne à interpréter des événements anodins comme des menaces. Cela crée un état constant de méfiance et peut entraîner des conflits relationnels et un isolement social.",
    },
    {
      question:
        "Ton esprit est une tempête sans fin. Ton coeur bat trop vite et tes pensées sont embrouillées. Ton avenir est effrayant et ton présent insupportable à cause des expériences de ton passé. Quelle trouble suis-je ?",
      answer: "Troubles de l'anxiété",
      description: "Les troubles de l'anxiété regroupent une série de conditions où l'anxiété devient excessive, chronique ou incontrôlable, interférant avec la vie quotidienne. Les symptômes incluent des inquiétudes constantes, des crises de panique, une agitation physique (comme un rythme cardiaque accéléré), et des comportements d'évitement. Les types courants incluent l’anxiété généralisée, les phobies, et les troubles obsessionnels compulsifs (TOC).",
    },
    {
      question:
        "Tu as réussi, tu as fais du bon travail, mais pour toi, ce n'est pas grand chose. Tu ne peux être reconnaissant de ton travail, de ton avancé, de tes progrès. Quel syndrôme suis-je ?",
      answer: "Syndrome de l'imposteur",
      description: "Le syndrome de l’imposteur est un état psychologique dans lequel une personne doute de ses compétences ou de ses réussites, se sentant constamment comme une fraude. Bien que souvent qualifiée et compétente, elle attribue ses succès à des facteurs extérieurs, comme la chance, plutôt qu’à son propre mérite. Ce syndrome peut conduire à un perfectionnisme excessif et à une peur de l’échec paralysante.",
    },
    {
      question:
        "C'est un poids immense et invisible, ton sourire est d'extérieur, mais on ne peut pas en dire autant de l'intérieur. Même les petites choses qui font ta joie, ton réconfort, et ton bonheur, ne font plus effet à cause de la...",
      answer: "Dépression",
      description: "La dépression est un trouble de l’humeur caractérisé par une tristesse persistante, une perte d’intérêt ou de plaisir dans les activités, et une fatigue constante. Elle peut être accompagnée de troubles du sommeil, de changements d’appétit, de pensées suicidaires, et d’une diminution de l’estime de soi. La dépression n'est pas simplement une mauvaise passe, mais une condition médicale nécessitant souvent un soutien psychologique ou médical.",
    },
  ];

  let currentQuestion = 0;
  let currentQuestionIndex = psychoQuestions[currentQuestion];

  const questionElement = document.createElement("p");
  questionElement.textContent = currentQuestionIndex.question;
  psychologyGameContainer.appendChild(questionElement);

  const answerInput = document.createElement("input");
  psychologyGameContainer.appendChild(answerInput);

  const answerBtn = document.createElement("button");
  answerBtn.textContent = "Valider";
  answerBtn.addEventListener("click", checkAnswer);
  psychologyGameContainer.appendChild(answerBtn);

  const psychoCorrect = new Audio("PsychoCorrect.ogg");
  const psychoWrong = new Audio("PsychoWrong.ogg");

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  })

  function loadPsychoQuestion() {
    questionElement.textContent = currentQuestionIndex.question;
    answerInput.value = "";

    answerInput.addEventListener("input", function (event) {
      if (event.key === "Enter") {
        checkAnswer();
      }
    });

  }

  loadPsychoQuestion();

  function checkAnswer() {
    const psychoMessage = document.createElement("p");
    psychoMessage.className= "psycho-message";
    psychologyGameContainer.appendChild(psychoMessage);
    const userAnswer = answerInput.value.toLowerCase();
  
    if (userAnswer === currentQuestionIndex.answer.toLowerCase()) {
      psychoMessage.textContent = "Bravo !";
      psychoCorrect.play();
      psychoCorrect.currentTime = 0;
  
      // Afficher la description après une réponse correcte
      setTimeout(() => {
        psychologyGameContainer.innerHTML = ""; // Vider le conteneur
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = currentQuestionIndex.description;
        psychologyGameContainer.appendChild(descriptionElement);
  
        if (currentQuestion < psychoQuestions.length - 1) {
          // Ajouter le bouton "Suivant" pour passer à la question suivante
          const nextBtn = document.createElement("button");
          nextBtn.textContent = "Suivant !";
          nextBtn.addEventListener("click", nextQuestion);
          psychologyGameContainer.appendChild(nextBtn);
        } else {
          // Ajouter le bouton "Terminer" pour finir après la dernière description
          const endBtn = document.createElement("button");
          endBtn.textContent = "Terminer";
          endBtn.addEventListener("click", () => {
            showEndContent(games[14].endContent, callback);
          });
          psychologyGameContainer.appendChild(endBtn);
        }
      }, 2000);
    } else {
      psychoMessage.textContent = "Ce n'est pas ça !";
      answerInput.value = "";
      psychoWrong.play();
      psychoWrong.currentTime = 0;
      setTimeout(() => {
        psychoMessage.textContent = "";
      }, 1500);
    }
  }
  
  function nextQuestion() {
    currentQuestion++; // Passer à la question suivante
    if (currentQuestion < psychoQuestions.length) {
      currentQuestionIndex = psychoQuestions[currentQuestion]; // Met à jour l'index de la question actuelle
  
      // Recharger le conteneur avec la nouvelle question
      psychologyGameContainer.innerHTML = ""; // Vider le conteneur
      questionElement.textContent = currentQuestionIndex.question;
      psychologyGameContainer.appendChild(questionElement);
      psychologyGameContainer.appendChild(answerInput);
      psychologyGameContainer.appendChild(answerBtn);
      answerInput.value = ""; // Réinitialiser l'input
    }
  }  
  
}

function showEndContent(content, callback) {
  const ending = document.getElementById("game-container");
  ending.className = "ending";
  ending.innerHTML = `
    <p>${content}</p>
  `;
  const finishButton = document.createElement("button");
  finishButton.textContent = "Continuer";
  finishButton.addEventListener("click", function () {
    popup.style.display = "none";
  });
  ending.appendChild(finishButton);
}

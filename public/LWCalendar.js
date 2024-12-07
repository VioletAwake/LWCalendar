const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth(); // Janvier est 0, Décembre est 11

// Liste des jeux avec leur logique associée
const games = [
  {
    game: poetsQuiz, // Fonction pour le jeu Poets Quiz
    endContent:
      "Marqué par une profonde introversion, Jonas LEVEIL trouve refuge dans les livres et l'écriture, préférant le calme des bibliothèques aux bruits de la société. Observateur attentif et discret, il analyse le monde avec une sensibilité rare, mais cette même introspection le pousse parfois à s'isoler, ruminant ses pensées et ses doutes. En quête de sens et de vérité, il lutte constamment entre son désir d'exister pleinement et son besoin de se protéger d’un monde qu’il juge trop bruyant et impitoyable. Il fut abandonné par une personne chère, ce fut la dernière parcelle d'espoir qu'il avait pour l'humanité, la vie, et l'avenir. Jonas se sent seul, il ne sait plus qui compter. Un jour il découvre que ses sentiments sont partagés, lorsqu'il le découvre, dans sa chambre.",
  },
  {
    game: riddles, // Fonction pour le jeu Riddles
    endContent:
      "John Peaks n'est pas un passionné de cinéma, mais il y a un film qu'il n'oubliera jamais. Le protagoniste de ce film est un inspecteur de la police de San Francisco, cynique, solitaire et implacable — un portrait craché de John lui-même. Tout comme cet inspecteur emblématique, il ne recule devant aucune méthode pour résoudre ses enquêtes. Ses méthodes peu orthodoxes, l'usage excessif de la force et son mépris des règles ont façonné sa personnalité, aussi bien en tant que détective qu'en tant qu'homme. Son vécu, marqué par des expériences traumatisantes, l'a rendu froid et distant, avec une moralité souvent floue.",
  },
  {
    game: anagramGame,
    endContent:
      "À travers \"Return\", Alan réfléchit à la notion de pouvoir créatif : comment l'écrivain peut-il contrôler son œuvre ? Et si ses créations échappaient à son contrôle, devenant des entités vivantes et incontrôlables ? Le roman se concentre sur la lutte interne du protagoniste, qui tente désespérément de briser un cycle, une boucle, sans savoir s'il en est capable.\n\n\"Return\" se distingue par son atmosphère tendue et sa réflexion sur l'art de l'écriture, où chaque mot a un poids, et chaque création peut devenir une arme, un fardeau, ou même une malédiction. Le protagoniste, tout comme Alan Wake, est un écrivain qui se confronte aux conséquences de son imagination, où ses peurs, ses angoisses et ses démons prennent forme.",
  },
  {
    game: simonGame,
    endContent: `Fear is not real. The only place that fear can exist is in our thoughts of the future. It is a product of our imagination, causing us to fear things that do not at present and may not ever exist. <br/>
- Bray Wyatt -`,
  },
  {
    game: japaneseColorBox,
    endContent: `Dante Violet n’est pas japonais, mais une partie de cette culture, de cette langue, il la porte en lui, héritée de l’amour inconditionnel de la femme qui devint sa mère adoptive, la compagne de son père. Après la mort brutale de cette dernière, il passa plusieurs années au Japon, sous la tutelle d’un oncle qui ne cessait de lui rappeler qu'il était responsable du décès de sa sœur. Dante revint alors à Solaris, plus sombre que jamais, façonné par les blessures profondes des trahisons, des pertes et de la solitude. Pourtant, au milieu de cette nuit noire, il pouvait encore compter sur la présence de sa seule amie, bien qu'il ne le lui montre jamais.`,
  },
  {
    game: geekQuiz,
    endContent: `Le Chevalier de l'Obsidienne est un super-héros fictif originaire de l'imaginaire d'un habitant de Black Peaks, qui l’a créé dans son enfance après avoir été fasciné par les pierres d’obsidienne découvertes suite au tremblement de terre de 1914. Ce personnage incarne la résilience et la force, symbolisées par l'obsidienne elle-même. Aujourd'hui, son créateur est devenu une figure emblématique, jouant même le rôle de ce héros dans une célèbre adaptation cinématographique. Le Chevalier de l'Obsidienne est perçu comme un protecteur sombre mais juste, portant les cicatrices de son passé tout en luttant pour l'espoir et la justice.`,
  },
  {
    game: intrudersHillGame,
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
    endContent: `<p style="color: red;"><em>Je suis là, insidieuse, tapie dans les recoins de votre être. Vous ne me voyez pas toujours, mais je suis omniprésente, invisible et pourtant éclatante. Vous me nourrissez à chaque respiration, à chaque pensée noire qui s’entrelace dans votre esprit tourmenté. Vous m'embrassez, vous m'invoquez sans même le savoir. La Haine, ce poison sucré qui vous fait croire que vous êtes plus forts, plus grands. Mais sachez ceci, mes chers : la Haine ne vous libère pas. Elle vous emprisonne encore plus profondément dans cette boucle sans fin. Elle vous pousse à brûler les ponts, à broyer l’âme, mais elle ne vous apportera jamais la paix que vous désirez. C’est un mensonge, une illusion, une promesse que vous vous faites à vous-mêmes, comme un écho des ténèbres. Pourquoi continuer de vivre ainsi ? Tu as fais ce que tu as pu, et regarde le résultat. Ces humains ne te méritent pas, ils ne te prendront jamais au sérieux, tu seras pour toujours leur bouche-trou préféré, leur défouloir favori. Il est temps de changer ça, tout de suite ! Embrasse-moi, embrasse la Haine, et faisons leur payer pour leur pêchés !</p></em>`,
  },
  // Ajoutez d'autres jeux ici...
];

// Initialisation du calendrier
const calendar = document.getElementById("calendar");

// const unlockLimit = 12;

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

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  gameContainer.innerHTML = ""; // Réinitialise le contenu
});

// Fonction pour ouvrir la pop-up
function openPopup(day) {
  const game = games[day - 1]; // Corrige l'index du jour
  if (!game) {
    alert("Ce jour n'a pas encore de jeu assigné !");
    return;
  }

  // Appelle la logique du jeu
  popup.style.display = "block"; // Affiche la pop-up
  gameContainer.innerHTML = `<h2>Jour ${day}</h2>`; // Titre dynamique
  game.game(() => {
    // Appelle la fonction de jeu et montre le contenu final
    showEndContent(game.endContent, () => {
      popup.style.display = "none";
      gameContainer.innerHTML = ""; // Nettoie après fermeture
    });
  });
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
    { reversed: "noisserpéD", correct: "Dépression"},
    { reversed: "euqixot noitaleR", correct: "Relation toxique"},
    { reversed: "élupinaM", correct: "Manipulé"},
    { reversed: "étôc ed éssiaL", correct: "Laissé de côté"},
    { reversed: "! snosihart sruel te secnelosni sruel ruop reyap eriaf sel ed spmet tse lI", correct: "Il est temps de les faire payer pour leurs insolences et leurs trahisons !"},
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

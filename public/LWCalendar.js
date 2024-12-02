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
  // Ajoutez d'autres jeux ici...
];

// Initialisation du calendrier
const calendar = document.getElementById("calendar");
for (let day = 1; day <= 31; day++) {
  const cell = document.createElement("div");
  cell.classList.add("case");
  cell.textContent = `${day}`;

  if (currentMonth === 11) {
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
const popupContent = document.getElementById("game-container");
const closePopup = document.getElementById("closeBtn");

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  popupContent.innerHTML = ""; // Réinitialise le contenu
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
  popupContent.innerHTML = `<h2>Jour ${day}</h2>`; // Titre dynamique
  game.game(() => {
    // Appelle la fonction de jeu et montre le contenu final
    showEndContent(game.endContent, () => {
      popup.style.display = "none";
      popupContent.innerHTML = ""; // Nettoie après fermeture
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

// Fonction pour afficher le contenu final (quand le jeu est terminé)
function showEndContent(content, callback) {
  const popupContent = document.getElementById("game-container");
  popupContent.innerHTML = `
    <p>${content}</p>
  `;
  const finishButton = document.createElement("button");
  finishButton.textContent = "Continuer";
  finishButton.addEventListener("click", () => callback());
  popupContent.appendChild(finishButton);
}

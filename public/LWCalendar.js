const calendar = document.getElementById('calendar');
const popUp = document.getElementById('popUp');
const closeBtn = document.getElementById('closeBtn');

const days = 31; // Nombre total de jours dans le calendrier
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth(); // Janvier est 0, Décembre est 11

// Données pour les jeux ou activités de chaque jour
const avent = [
    {
        day: 1,
        game: "loadQuestion()", // Fonction ou activité spécifique pour le jour 1
        endContent: [
            {
                message: "Marqué par une profonde introversion, Jonas LEVEIL trouve refuge dans les livres et l'écriture, préférant le calme des bibliothèques aux bruits de la société. Observateur attentif et discret, il analyse le monde avec une sensibilité rare, mais cette même introspection le pousse parfois à s'isoler, ruminant ses pensées et ses doutes. En quête de sens et de vérité, il lutte constamment entre son désir d'exister pleinement et son besoin de se protéger d’un monde qu’il juge trop bruyant et impitoyable. Il fut abandonné par une personne chère, ce fut la dernière parcelle d'espoir qu'il avait pour l'humanité, la vie, et l'avenir. Jonas se sent seul, il ne sait plus qui compter. Un jour il découvre que ses sentiments sont partagés, lorsqu'il le découvre, dans sa chambre.",
                video: "",
                audio: "",
            },
        ]
    }
    // Ajoutez d'autres jours avec des jeux ou activités spécifiques ici
];

// Fonction pour créer les cases du calendrier
function calendarCase() {
    for (let i = 0; i < days; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i + 1;
        
        // Condition pour verrouiller les cases jusqu'à une certaine date
        if ((currentMonth === 10 || currentMonth === 11) && i + 1 > currentDay) {
            dayElement.classList.add('locked');
        } else {
            dayElement.addEventListener('click', () => {
                calendarPopUp(i + 1);
            });
        }
        calendar.appendChild(dayElement);
    }
}

// Données pour le quiz ou les questions
const quizData = [
    {
        question: "And we keep driving into the night...",
        choices: ["It's a late goodbye, such a late goodbye", "It's a fade goodbye, such a fade goodbye", "It's a damn goodbye, such a damn goodbye"],
        correctAnswer: "It's a late goodbye, such a late goodbye",
        audioSrc: "/audio1stDec/LateGoodbye.ogg",
    },
    {
        question: "When I thought than I fought this war alone...",
        choices: ["you were them on the side all the whole time", "you were there by my side through the hard times", "you were there by my side on the front line."],
        correctAnswer: "you were there by my side on the front line.",
        audioSrc: "/audio1stDec/War.ogg",
    },
    {
        question: "So I want to run to your shelter tonight, run to the shelter tonight...",
        choices: ["United in silent resistance, Of bowing to false kings.", "United in quiet defiance, Of kneeling to false kings.", "United in solemn persistence, Of serving false kings"],
        correctAnswer: "United in silent resistance, Of bowing to false kings.",
        audioSrc: "/audio1stDec/FalseKings.ogg",
    }
    // Ajoutez d'autres questions ici
];

// Fonction pour charger une question et ses réponses
function loadQuestion(index, quizContainer) {
    if (!quizContainer) {
        console.error('Quiz container is not defined.');
        return;
    }
    const quiz = quizData[index];
    quizContainer.innerHTML = ''; // Vider le contenu actuel

    const questionElement = document.createElement('div');
    questionElement.textContent = quiz.question;
    quizContainer.appendChild(questionElement);

    const audioElement = document.createElement('audio');
    audioElement.src = quiz.audioSrc;
    audioElement.controls = true;
    quizContainer.appendChild(audioElement);

    const answerBtn = document.createElement('div');
    answerBtn.classList.add('answer-btn');
    quiz.choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.addEventListener('click', () => checkAnswer(choice, quiz.correctAnswer, index, quizContainer));
        answerBtn.appendChild(choiceButton);
    });
    quizContainer.appendChild(answerBtn);
}

// Fonction pour vérifier la réponse sélectionnée
function checkAnswer(selected, correct, index, quizContainer) {
    const check = document.createElement('div');
    check.classList.add('check');
    if (selected === correct) {
        check.textContent = 'Correct!';
        check.style.color = 'green';
        quizContainer.appendChild(check);

        setTimeout(() => {
            if (index < quizData.length - 1) {
                loadQuestion(index + 1, quizContainer);
            } else {
                quizContainer.style.display = 'none'; // Cachez seulement quizContainer
                displayEndMessage();
            }
        }, 2000);
    } else {
        check.textContent = 'Incorrect!';
        check.style.color = 'red';
        quizContainer.appendChild(check);

        // Réinitialiser le quiz après un court délai
        setTimeout(() => {
            restartQuiz(quizContainer);
        }, 2000);
    }
}

function restartQuiz(quizContainer) {
    quizContainer.innerHTML = ''; // Vider le contenu actuel du quizContainer
    loadQuestion(0, quizContainer); // Recommencer le quiz depuis la première question
}

function displayEndMessage() {
    const endMessage = document.createElement('div');
    endMessage.classList.add('typewriter');
    endMessage.textContent = avent[0].endContent[0].message; // Assurez-vous que le message est bien défini dans votre tableau `avent`
    endMessage.innerHTML = `<p>${endMessage.textContent}</p><a href="https://youtu.be/5KUzrHadGAE?si=5x41iNRwe3MJV3cJ" target="_blank">Look in a mirror...</a>`; 
    popUp.appendChild(endMessage);
}


// Fonction pour afficher le pop-up avec le contenu du jour
function calendarPopUp(day) {
    popUp.style.display = 'block';
    const quizContainer = document.createElement('div');
    quizContainer.classList.add('quiz-container');
    popUp.appendChild(quizContainer);
    if (day === 1) {
        loadQuestion(0, quizContainer);
    }
    closeBtn.addEventListener('click', () => {
        popUp.style.display = 'none';

    });
}

calendarCase();

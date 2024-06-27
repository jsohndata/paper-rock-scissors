let userChoice = '';

// Select DOM elements
const choicesDiv = document.getElementById('choices');
const revealDiv = document.getElementById('reveal');
const resultDiv = document.getElementById('result');
const resetDiv = document.getElementById('reset');

// Functional approach to setting and getting user choice
const setUserChoice = (choice) => () => choice;
const getUserChoice = (userChoice) => userChoice;
const setRandomChoice = () => () => ['✋🏽', '✊🏽', '✌🏽'][Math.floor(Math.random() * 3)];

// Update screen utility
const updateScreen = (hideDiv, showDiv, bgColor) => () => {
    hideDiv.classList.add('hidden');
    showDiv.classList.remove('hidden');
    document.body.style.backgroundColor = bgColor;
};

// Display result utility
const displayResult = (choice) => () => {
    resultDiv.innerHTML = `<p>You chose: ${choice}</p>`;
};

// Event handlers
const handleChoice = (choice) => {
    userChoice = setUserChoice(choice)();
    updateScreen(choicesDiv, revealDiv, 'pink')();
};

const handleRandomChoice = () => {
    userChoice = setRandomChoice()();
    updateScreen(choicesDiv, revealDiv, 'pink')();
};

const handleReveal = () => {
    displayResult(getUserChoice(userChoice))();
    updateScreen(revealDiv, resultDiv, 'yellow')();
    resetDiv.classList.remove('hidden');
};

const handleReset = () => {
    userChoice = '';
    updateScreen(resultDiv, choicesDiv, '#f0f0f0')();
    resultDiv.classList.add('hidden');
    resetDiv.classList.add('hidden');
};

// Export functions to make them available globally
window.handleChoice = handleChoice;
window.handleRandomChoice = handleRandomChoice;
window.handleReveal = handleReveal;
window.handleReset = handleReset;

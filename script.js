let userChoice = '';

const choicesDiv = document.getElementById('choices');
const revealDiv = document.getElementById('reveal');
const resultDiv = document.getElementById('result');
const resetDiv = document.getElementById('reset');

const setUserChoice = (choice) => () => choice;
const getUserChoice = (userChoice) => userChoice;
const setRandomChoice = () => () => ['Paper', 'Rock', 'Scissors'][Math.floor(Math.random() * 3)];

const updateScreen = (hideDiv

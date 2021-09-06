var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question('What is your name? ');
console.log('Welcome ' + userName + '!');

var q = readlineSync.keyInYNStrict('Are you familiar with the One Piece anime? ');

if (q === true) {
	console.log('Yohohohohoho!! then let us begin our journey!');
	var count = 0;
	function qna(question, answer) {
		var userAnswer = readlineSync.question(question);
		if (userAnswer.toLowerCase() === answer.toLowerCase()) {
			console.log('Correct!');
			count = count + 1;
		} else {
			console.log(chalk.red('Wrong answer! The correct answer is ' + answer));
		}
		console.log(`Your score is ${count}`);
		console.log('--------');
	}

	var questions = [
		{
			question: 'Who was the first pirate king? ',
			answer: 'Gol D. Roger',
		},
		{
			question: 'Where was Gol D. Roger born? ',
			answer: 'East Blue',
		},
		{
			question: 'Who inspired Luffy to become a pirate? ',
			answer: 'Shanks',
		},
		{
			question: 'Who stopped Chopper at Enies Lobby? ',
			answer: 'Franky',
		},
		{
			question: 'Which Straw Hat member reached shabondy archipelago first after timeskip? ',
			answer: 'Zoro',
		},
		{
			question: 'What is the name Luffy uses to enter the Colosseum in Dressrosa? ',
			answer: 'Lucy',
		},
		{
			question: 'Who is the latest crew member of Straw Hat Pirates? ',
			answer: 'Jinbe',
		},
		{
			question: 'What is the name of the kingdom that is led by the Vinsmoke family? ',
			answer: 'Germa Kingdom',
		},
	];

	var highScores = [
		{
			name: 'Shubham',
			score: 6,
		},
		{
			name: 'Bhushan',
			score: 5,
		},
	];

	for (var i = 0; i < questions.length; i++) {
		var currentQuestion = questions[i];
		qna(chalk.yellow(currentQuestion.question), currentQuestion.answer);
	}

	if (count > highScores[0].score || count > highScores[1].score) {
		console.log('Congrats you made a new high score!!');
		console.log('Your final score is: ' + count);
	} else {
		console.log(`Current highscore is ${highScores[0].score} by ${highScores[0].name}!`);
		console.log('Your final score is: ' + count);
	}
} else {
	console.log('Sorry this trivia is not for you! :(');
}

var questionList = [
    {question: "Only 50% Of The World’s 7.05 Billion People Watch The World Cup?", answer: "t"},
    {question: "In addition to bragging rights, the winner of the World Cup takes home a only $35 million dollars while the runner-up $25 million?", answer: "t"},
    {question: "just competing in group play of the World Cup secures your team $8 million dollars?", answer: "t"},
    {question: "For the 2014 World Cup, FIFA projected to make around $4 billion dollars during the month-long tournament?", answer: "t"},
    {question: "Brazilians have appeared in every World Cup since its inception back in 1930?", answer: "t"},
];

var correctList = [];
var wrongList = [];
var resultsDiv = document.getElementById("results");

function displayResult(arr) {
    var list = "<ol>";
    for ( var i = 0; i < arr.length; i++ ) {
        list += "<li>" + arr[i] + "</li>"
    }
    list += "</ol>"
    resultsDiv.innerHTML += list;    
}

for ( var i = 0; i < questionList.length; i++ ) {
    var question = questionList[i]["question"];
    var correctAnswer = questionList[i].answer;
    var userAnswer = prompt(question);
    userAnswer = userAnswer.toLowerCase();

    if ( userAnswer === correctAnswer) {
        correctList.push(question);
    } else {
        wrongList.push(question);
    }
}

resultsDiv.innerHTML += "<h2 style='color: yellowgreen;'>You got " + correctList.length + " questions correct";
displayResult(correctList);

resultsDiv.innerHTML += "<h2 style='color: red;'>You got " + wrongList.length + " questions wrong";
displayResult(wrongList);

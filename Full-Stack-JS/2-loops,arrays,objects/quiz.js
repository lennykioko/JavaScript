var questionList = [
    ["Only 50% Of The World’s 7.05 Billion People Watch The World Cup?", "t"],
    ["In addition to bragging rights, the winner of the World Cup takes home a only $35 million dollars while the runner-up $25 million?", "t"],
    ["just competing in group play of the World Cup secures your team $8 million dollars?", "t"],
    ["For the 2014 World Cup, FIFA projected to make around $4 billion dollars during the month-long tournament?", "t"],
    ["Brazilians have appeared in every World Cup since its inception back in 1930?", "t"],
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
    var question = questionList[i][0];
    var correctAnswer = questionList[i][1];
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

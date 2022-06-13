player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_name + " : " + player1_score;
document.getElementById("player2_score").innerHTML = player2_name + " : " + player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actualAnswer = parseInt(number1) * parseInt(number2);
    console.log(actualAnswer);

    question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    inputCheckbox = "<br> Answer = <input id = 'inputCheckbox'>";
    checkbutton = "<br><br><button class = 'btn btn-info'>Check</button>"
    row = question_number + inputCheckbox + checkbutton;
    document.getElementById("output").innerHTML = row;
}
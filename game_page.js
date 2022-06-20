var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_name + " : " + player1_score;
document.getElementById("player2_score").innerHTML = player2_name + " : " + player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    multiple = parseInt(number1) * parseInt(number2);
    console.log(multiple);

    question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    inputCheckbox = "<br> Answer = <input id = 'inputCheckbox'>";
    CheckButton = "<br><br> <button class = 'btn btn-info' onclick ='check()'>Check</button>";
    row = question_number + inputCheckbox + CheckButton;
    document.getElementById("output").innerHTML = row;
    number1 = document.getElementById("number1").value = "";
    number2 = document.getElementById("number2").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

function check(){
    
    answer = document.getElementById("inputCheckbox").value;
    console.log(answer);

    if (answer == multiple)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_name + " : " + player1_score;
        }
        else if(answer_turn == "player2")
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_name + " : " + player2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
    }
    else if(question_turn == "player2"){
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
    }  

    document.getElementById("output").innerHTML = "";
}
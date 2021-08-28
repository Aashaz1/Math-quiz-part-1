var player1 = null;
var player2 = null;

function addUser(){
    player1 = document.getElementById("player1_name_input").value;
    player2 = document.getElementById("player2_name_input").value;
}

function saveName(){
    localStorage.setItem("Name", player1);
    localStorage.setItem("Name", player2);
}
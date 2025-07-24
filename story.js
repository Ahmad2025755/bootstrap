function typeAndScream(){

 var PersonName = document.getElementById("name").value;
 alert("I told you not to do that!" + PersonName);
}

function goDark(){

    document.body.className = "dark";
}

function finishTheStory(){
    document.getElementById("Story").innerHTML = "So carefully searched the damp dungeon. There you are!";
}
player1_name=localStorage.getItem("player1_name");
    player2_name=localStorage.getItem("player2_name");
    player1_score=0;
    player2_score=0;
    document.getElementById("player1_name").innerHTML=player1_name+" : ";
    document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Turno para preguntar: "+player1_name;
document.getElementById("player_answer").innerHTML="Turno Para Descifrar La Palabra Secreta : "+player2_name;
function send() {
    obten_la_palabra_misteriosa=document.getElementById("word").value ;
    palabra_minuscula=obten_la_palabra_misteriosa.toLowerCase();
    console.log(palabra_minuscula);
    letra1=palabra_minuscula.charAt(1);
    console.log(letra1);
    dividir_nombre=Math.floor(palabra_minuscula.length/2);
    letra2=palabra_minuscula.charAt(dividir_nombre);
    console.log(letra2);
    longitud_menos1=palabra_minuscula.length-1;
    letra3=palabra_minuscula.charAt(longitud_menos1);
    console.log(letra3);
    eliminar_letra1=palabra_minuscula.replace(letra1,"_");
    eliminar_letra2=eliminar_letra1.replace(letra2,"_");
    eliminar_letra3=eliminar_letra2.replace(letra3,"_");
    console.log(eliminar_letra3);
    palabra_pregunta = "<h4 id='palabra_display'> P. "+eliminar_letra3+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='comprobar()'>Comprobar</button>";
    row=palabra_pregunta+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function comprobar(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log(answer);
    if(answer==palabra_minuscula){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(answer!=palabra_minuscula){
        if(answer_turn=="player2"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Turno Para Preguntar : "+player2_name;
    }else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Turno Para Preguntar : "+ player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Turno Para Descifrar La Palabra Secreta : "+player2_name;
    }else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Turno Para Descifrar La Palabra Secreta : "+ player1_name;
    }
    document.getElementById("output").innerHTML="";
}
var isQuestionGenerated = false;

function startQuiz(){
    var nameInputed = document.getElementById("getName").value;
    if(nameInputed != "Insert Your Name!" && nameInputed != ""){
        console.log("Sucess On Starting");
        getNextQuestion();
    }else{
        alert("Please Insert Your name!");
    }
}

function getNextQuestion(){
    var hideNameInput = document.getElementById("nameInput");
    var howManyQuestions = 0;

    if(isQuestionGenerated == true){
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "none";

        isQuestionGenerated = false;
    }

    hideNameInput.style.display = "none";
    var genQuestion = Math.floor(Math.random() * 10);
    console.log(genQuestion);

    var questionId = ["question1" , "question2" , "question3" ,"question4" , "question5" , 
                        "question6" ,"question7" , "question8" , "question9" ,"question10"];

    var selectedQuestion = document.getElementById(questionId[genQuestion]);

    selectedQuestion.style.display = "block";

    isQuestionGenerated = true;


}

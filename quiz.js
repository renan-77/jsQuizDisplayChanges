var isQuestionGenerated = false;
var userAnswer;
var rightAnswers = 0;
var questionsGenerated = 0;

//Starts the quiz with the name input.
function startQuiz(){
    var nameInputed = document.getElementById("getName").value;
    if(nameInputed != "Insert Your Name!" && nameInputed != ""){
        console.log("Sucess On Starting");
        getNextQuestion();
    }else{
        alert("Please Insert Your name!");
    }
}

//Function called if the user checks the right answer.
function increaseRightCounter(){
    rightAnswers++;
    console.log("Right Answer!");
    console.log("You've got: " + rightAnswers + " right answers!");
}

//Function called if the user checks any of the wrong answers.
function isRightAnswer(){
    console.log("Wrong Answer!");
    console.log("You've got: " + rightAnswers + " right answers!");
}


//Function that generates the next question
function getNextQuestion(){

    //Declaring variable to hide the name input.
    var hideNameInput = document.getElementById("nameInput");
    //Increasing the counter that tells in which question the quiz is.
    questionsGenerated++;

    //If the counter is on 6 (5th question) change the display from all the questions to none and alert how many questions the user got right.
    if(questionsGenerated == 6){
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

        console.log("Quiz is over!");

        alert("The Quiz is finished and you got: " + rightAnswers + " Right Answers!");
    }
    //Else it continues the quiz
    else{

    //If a question is generated hide all the others
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

        //changes to false after done.
        isQuestionGenerated = false;
    }

    //changing the display of the name input to nome.
    hideNameInput.style.display = "none";
    //creates a random number between 0 and 9, that number will be used in the array to get the question ID.
    var genQuestion = Math.floor(Math.random() * 10);
    console.log(genQuestion);

    //Generates the array where genQuestion will be the index that will get the id as a string.
    var questionId = ["question1" , "question2" , "question3" ,"question4" , "question5" , 
                        "question6" ,"question7" , "question8" , "question9" ,"question10"];

    //Variable that gets the element with the id in the array.
    var selectedQuestion = document.getElementById(questionId[genQuestion]);

    //Changes the display from the selectedQuestion to visible (block).
    selectedQuestion.style.display = "block";

    isQuestionGenerated = true;

    
    }
    console.log("Current question is: " + questionsGenerated)
}

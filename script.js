// assign "0" to the "score"
let score = 0

//Define function:
function checkAnswers()
{
    // assign "0" to the "score" variable
    let score = 0
    let result = 0
    //assign the quiz elements to the quiz variable:
    let quiz = document.forms.quiz.elements;
    //assign the answer to the question to the answer1 variable:
    answer1 = quiz.colour.value;
    // Check the answer to the first question:
    if (answer1=="pink")
    {
        score = score + 1;
    }
    if (answer1 == "yellow")
    {
        score = score +2;
    }
    if (answer1 == "green")
    {
        score = score + 3;
    }
    if (answer1 == "black")
    {
        score = score + 4;
    }
    // Check answer for question 2
    answer2 + quiz.animal.value;
    if (answer == "red-panda")
    {
        score = score + 1;
    }
    if (answer == "giraffe")
    {
        score = score + 2;
    } if (answer == "jaguar")
    {
        score = score + 3;
    }
    if (answer == "gorilla")
    {
        score = score + 4;
    }
   // Check question for question 3
    answer3 + quiz.music.value;
    if (answer == "pop")
    {
        score = score + 1;
    }
    if (answer == "hip-hop")
    {
        score = score + 2;
    }
    if (answer == "rock")
    {
        score = score + 3;
    }
    if (answer == "metal")
    {
        score = score + 4;
    }

    // Check question 4 
    answer4 + quiz.hobbie.value
    if (answer == "read")
    {
        score = score + 1;
    }
    if (answer == "music")
    {
        score = score + 2;
    }
    if (answer == "walk")
    {
        score = score + 3;
    }
    if (answer == "exercises")
    {
        score = score + 4;
    }
//
    if (score < 6) 
    {
        result = "HTML"
    }
    else if (score <10)
    {
        result = "Python"
    }
    else if (score <13)
    {
        result = "JavaScript"
    }
    else {
        result = "Java"
    }
    // disply the score varibale in an alert:
  alert ('The programming language you should learn is' +result);
}


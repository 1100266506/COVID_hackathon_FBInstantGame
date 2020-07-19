//******************************************************************************KEY METHODS

//creates a page with a list of questions and answer choices
function createQuestion(questionArray, questionPage, questionNumber) {

    const largeOutput = [];
    const questionSet = questionArray[questionPage];

    questionSet.forEach((currentQuestion) => {
        const questionOutput = [];
        const answerChoices = [];

        //identify question
        //const currentQuestion = myQuestions[questionNumber];

        //make dropdown box
        if (currentQuestion.answers == "state"){
            //answerChoices.push(dropdownContainer);
            questionOutput.push(
                `<div class = "question"> ${questionNumber + 1}: ${currentQuestion.question} </div>
                    <select id ='statedropdown'>
                        <option value="-1">SELECT</option>
                        <option value="0">Alabama - AL</option>
                        <option value="1">Alaska - AK</option>
                        <option value="2">Arizona - AZ</option>
                        <option value="3">Arkansas - AR</option>
                        <option value="4">California - CA</option>
                        <option value="5">Colorado - CO</option>
                        <option value="6">Connecticut - CT</option>
                        <option value="7">Delaware - DE</option>
                        <option value="8">Florida - FL</option>
                        <option value="9">Georgia - GA</option>
                        <option value="10">Hawaii - HI</option>
                        <option value="11">Idaho - ID</option>
                        <option value="12">Illinois - IL</option>
                        <option value="13">Indiana - IN</option>
                        <option value="14">Iowa - IA</option>
                        <option value="15">Kansas - KS</option>
                        <option value="16">Kentucky - KY</option>
                        <option value="17">Louisiana - LA</option>
                        <option value="18">Maine - ME</option>
                        <option value="19">Maryland - MD</option>
                        <option value="20">Massachusetts - MA</option>
                        <option value="21">Michigan - MI</option>
                        <option value="22">Minnesota - MN</option>
                        <option value="23">Mississippi - MS</option>
                        <option value="24">Missouri - MO</option>
                        <option value="25">Montana - MT</option>
                        <option value="26">Nebraska - NE</option>
                        <option value="27">Nevada - NV</option>
                        <option value="28">New Hampshire - NH</option>
                        <option value="29">New Jersey - NJ</option>
                        <option value="30">New Mexico - NM</option>
                        <option value="31">New York - NY</option>
                        <option value="32">North Carolina - NC</option>
                        <option value="33">North Dakota - ND</option>
                        <option value="34">Ohio - OH</option>
                        <option value="35">Oklahoma - OK</option>
                        <option value="36">Oregon - OR</option>
                        <option value="37">Pennsylvania - PA</option>
                        <option value="38">Rhode Island - RI</option>
                        <option value="39">South Carolina - SC</option>
                        <option value="40">South Dakota - SD</option>
                        <option value="41">Tennessee - TN</option>
                        <option value="42">Texas - TX</option>
                        <option value="43">Utah - UT</option>
                        <option value="44">Vermont - VT</option>
                        <option value="45">Virginia - VA</option>
                        <option value="46">Washington - WA</option>
                        <option value="47">West Virginia - WV</option>
                        <option value="48">Wisconsin - WI</option>
                        <option value="49">Wyoming - WY</option>
                    </select><br>`
            );
            questionNumber +=1;
        }
        else {
            //create answer choices  in HTML
            for (letter in currentQuestion.answers) {
                answerChoices.push(
                    `<label>
                    <input type="radio" class = "answerChoice" name="answerChoice${questionNumber}" value = ${letter}>
                    ${currentQuestion.answers[letter]}
                    </label>`

                );
            }

            //put question and answerChoices in output
            questionOutput.push(
                `<div class = "question"> ${questionNumber + 1}. ${currentQuestion.question} </div>
                <div class = "answerChoices"> ${answerChoices.join("")} </div>`
            );
            questionNumber += 1;
        }

        largeOutput.push(
            questionOutput
        );
    });

    //put questions into HTML
    quizContainer.innerHTML = largeOutput.join("<br>");

    //set up subheaders and instructions
    const subheaderContainer = document.getElementById('subheaderHolder');
    const questionNoteContainer = document.getElementById('questionNoteHolder');
    const pageCounterContainer = document.getElementById('pageCounterHolder');
    if (questionPage==0) {
        subheaderContainer.innerHTML="<h2 class='subheader'>Demographic Questions</h2>";
    }
    else {
        //subheaderContainer.innerHTML="<h2 class='subheader'>Mental Health Questions </h2>"
        questionNoteContainer.innerHTML = "<p id ='questionNoteText'>During the past TWO (2) WEEKS,\
         how often have you been bothered by the following problems:</p>";
        pageCounterContainer.innerHTML = `<p id = "pagecontainertext">page ${questionPage} out of 3</p>`;
    }
}

stateQuestion = false;
//store the userAnswer in a userAnswerArray for a single question
function storeAnswer(userAnswerArray, questionNumber) {
    console.log("scoring");
    //get all answer choices on the page, grouped by question number. List of lists
    const answerContainers = quizContainer.querySelectorAll('.answerChoices');

    if (questionNumber == 0) {
        stateQuestion = true;
    } else {
        stateQuestion = false;
    }

    //for each set of answer choices, find the user's  answer
    for (var i = 0; i < answerContainers.length; i++) {
        var answerContainer = answerContainers[i];
        var selector = `input[name=answerChoice${questionNumber}]:checked`;

        //if state dropdown question
        if (questionNumber == 2) {

            var e = document.getElementById("statedropdown");
            var strUser = e.options[e.selectedIndex].text;
            var length = strUser.length;
            strUser = strUser.substring(length - 2, length);

            questionNumber++;
            userAnswerArray[questionNumber] = strUser;

//             // # THESE 4 LINES ARE THE UPDATES
//             // #######################################################
//             var update = {}
//             var dbAnswer = strUser;
//             update[myQuestions[questionPage][2].db_name] = dbAnswer
//             ref.update(update)

//             // #######################################################

            i++;
        }
        var selector = `input[name=answerChoice${questionNumber}]:checked`;
        var userAnswer = null;

        var userAnswer = (answerContainer.querySelector(selector)).value; //user answer
        
          
        // // # THESE 4 LINES ARE THE UPDATES
        // // #######################################################
        // var update = {}
        // var dbAnswer = myQuestions[questionPage][i].answers[userAnswer]
        // update[myQuestions[questionPage][i].db_name] = dbAnswer
        // ref.update(update)
        // // #######################################################

        //store into userAnswer array
        questionNumber++;//because first question is player ID
        userAnswerArray[questionNumber] = userAnswer;


    }
    console.log(userAnswerArray);
    return [userAnswerArray, questionNumber];
}

function incrQuestionPage(questionPage) {
    questionPage++;
    return questionPage;
}

//******************************************************************************SETUP FRIST QUESTION HTML
function buildFirstQuestions(myQuestions, questionPage) {
    //turn off
    buildBlank();

    //turn on
    addElmt(quizPageContainer);
    addElmt(buttonContainer);
    addElmt(homeButtonContainer);
    addElmt(gamesButtonContainer);
    addElmt(document.getElementById('subheaderHolder'));
    addElmt(document.getElementById('title2'));
    removeElmt(document.getElementById('title'));
    removeElmt(document.getElementById('questionNoteHolder'));

    questionNumber = 0;
    questionPage = 0;
    createQuestion(myQuestions, questionPage, questionNumber);

    const continueButton = document.getElementById('continueButton');
    continueButton.onclick = function() {buildNextQuestion(myQuestions, userAnswerArray, questionNumber, questionPage)};

    const diagnosisButtonContainer = document.getElementById('diagnosis');
    diagnosisButtonContainer.onclick = function() {scoring(userAnswerArray, questionNumber)};
  
    const backButtonContainer = document.getElementById('backButton');
    backButtonContainer.onclick = function() {buildPreviousQuestion(myQuestions, userAnswerArray, questionPage, questionNumber)};
}


//******************************************************************************SETUP NEXT QUESTION HTML

function buildNextQuestion(questionArray, userAnswerArray, questionNumber, questionPage) {

    //store answers in current page
    temp = storeAnswer(userAnswerArray, questionNumber);
    console.log("building next question");
    window.localStorage.setItem("array", JSON.stringify(temp[0]));

    //move to next page
    temp1 = incrQuestionPage(questionPage);

    window.localStorage.setItem("qPage", temp1); //save page number
    window.localStorage.setItem("qNumber", temp[1]); //save question number

    //build next page of questions. This will cause the userAnswerArray to reset
    createQuestion(questionArray, temp1, parseInt(temp[1]));

    questionNumber = parseInt(window.localStorage.getItem("qNumber"));
    questionPage = window.localStorage.getItem("qPage");

    //if we reach the second to last page of questions, load final page
    if (questionPage == questionArray.length - 1) {
        buildFinalQuestion(questionArray, questionPage, questionNumber);
    }

    userAnswerArray = JSON.parse(localStorage.getItem("array"));

    //setup button functionality
    addElmt(buttonContainer);
    addElmt(homeButtonContainer);
    addElmt(gamesButtonContainer);
    addElmt(pageCounterContainer);
    addElmt(document.getElementById('questionNoteHolder'));
    removeElmt(document.getElementById('subheaderHolder'));

    const continueButton = document.getElementById('continueButton');
    continueButton.onclick = function() {buildNextQuestion(myQuestions, userAnswerArray, questionNumber, questionPage)};

    const diagnosisButtonContainer = document.getElementById('diagnosis');
    diagnosisButtonContainer.onclick = function() {scoring(userAnswerArray, questionNumber)};
  
    const backButtonContainer = document.getElementById('backButton');
    backButtonContainer.onclick = function() {buildPreviousQuestion(myQuestions, userAnswerArray, questionPage, questionNumber)};
}

//******************************************************************************SET UP LAST QUESTION PAGE
function buildFinalQuestion(questionArray, index, questionNumber) {
    //turn off
    createQuestion(questionArray, index, questionNumber);

    //setupbuttonfunctionality
    addElmt(buttonContainer);
    addElmt(homeButtonContainer);
    addElmt(gamesButtonContainer);
    addElmt(pageCounterContainer);
    removeElmt(continueButton);

    const diagnosisButtonContainer = document.getElementById('diagnosis');
    diagnosisButtonContainer.onclick = function() {scoring(userAnswerArray, questionNumber)};

}
//******************************************************************************SET UP PREVIOUS PAGE OF QUESTIONS
function buildPreviousQuestion(questionArray, userAnswerArray, questionPage, questionNumber) {
    console.log("Here is the question page: " + questionPage);
    if (questionPage > 1) {
      
      //reset question number and page
      questionNumber = questionNumber - questionArray[questionPage-1].length;
      questionPage = questionPage - 1;
      window.localStorage.setItem("array", JSON.stringify(userAnswerArray));

      window.localStorage.setItem("qPage", questionPage); //save page number
      window.localStorage.setItem("qNumber", questionNumber); //save question number

      //build next page of questions. This will cause the userAnswerArray to reset
      createQuestion(questionArray, questionPage, parseInt(questionNumber));

      questionNumber = parseInt(window.localStorage.getItem("qNumber"));
      questionPage = window.localStorage.getItem("qPage");

      userAnswerArray = JSON.parse(localStorage.getItem("array"));

      //setup button functionality
      addElmt(buttonContainer);
      addElmt(homeButtonContainer);
      addElmt(gamesButtonContainer);

      const continueButton = document.getElementById('continueButton');
      continueButton.onclick = function() {buildNextQuestion(myQuestions, userAnswerArray, questionNumber, questionPage)};

      const diagnosisButtonContainer = document.getElementById('diagnosis');
      diagnosisButtonContainer.onclick = function() {scoring(userAnswerArray, questionNumber)};
  
      const backButtonContainer = document.getElementById('backButton');
      backButtonContainer.onclick = function() {buildPreviousQuestion(myQuestions, userAnswerArray, questionPage, questionNumber)};
      
      
    }
    else if (questionPage == 1) {
      //takes you back to first page of questions
      buildFirstQuestions(myQuestions, questionPage);
    }
    else if (questionPage == 0) {
      //takes you back to home page
      //functioning
      console.log("Home");
      buildWelcomePage();
    }
}
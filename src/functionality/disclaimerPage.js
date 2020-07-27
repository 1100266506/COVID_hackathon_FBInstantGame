//******************************************************************************SETUP ABOUT PAGE
function buildDisclaimerPage() {
    buildBlank();
    //add buttons
    addElmt(buttonContainer);
    //turn on specific buttons
    addElmt(homeButtonContainer);

    //build page
    addElmt(disclaimerPageContainer);

    const startButtonGame = document.getElementById('startButtonGame');
    startButtonGame.onclick = function() {buildFirstQuestions(myQuestions, questionPage)};

}

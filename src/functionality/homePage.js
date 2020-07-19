//******************************************************************************SETUP WELCOME PAGE HTML
function buildWelcomePage() {
    //reset variables
    questionNumber = 0;
    questionPage = 0;
    buildBlank();

    //build up
    addElmt(homePageContainer);
    const aboutButton = document.getElementById('aboutButton');
    aboutButton.onclick = function() {buildAboutPage()};

    const startButton = document.getElementById('startButton');
    startButton.onclick = function() {buildFirstQuestions(myQuestions, questionPage)};

    const creditsButton = document.getElementById('creditsButton');
    creditsButton.onclick = function() {buildCreditsPage()};

    addElmt(document.getElementById('title'));
    removeElmt(document.getElementById('title2'));

}

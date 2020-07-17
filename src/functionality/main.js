//******************************************************************************JAVASCRIPT

//******************************************************************************GET HTML ELEMENTS AND SET KEY VALUES
//pages
const homePageContainer = document.getElementById('homePage');
const aboutPageContainer = document.getElementById('aboutPage');
const quizPageContainer = document.getElementById('quizPage');
const quizContainer = document.getElementById('quizHolder');
const pageCounterContainer = document.getElementById('pageCounterHolder');

const resultsPageContainer = document.getElementById('resultsPage');
const gamesresourcesContainer = document.getElementById('gamesresourcesPage');
const creditsPageContainer = document.getElementById('creditsPage');

//buttons and functionality
const buttonContainer = document.getElementById('buttonHolder');
const gamesButtonContainer = document.getElementById('games');
gamesButtonContainer.onclick = function() {buildGamesResourcesPage()}


const homeButtonContainer = document.getElementById('home');
homeButtonContainer.onclick = function() {buildWelcomePage()};

const resultsTestingButtonContainer = document.getElementById('resultsTest');
resultsTestingButtonContainer.onclick = function() {buildResultsPage()};

//indexes quiz pages
questionPage = 0;

//index question number
questionNumber = 0;

//******************************************************************************BUILD BLANK PAGE
function removeElmt(elmt) {
    elmt.style.display = 'none';
}

function addElmt(elmt) {
    elmt.style.display = '';
}

function buildBlank() {
    removeElmt(homePageContainer);
    removeElmt(aboutPageContainer);
    removeElmt(quizPageContainer);
    removeElmt(pageCounterContainer);
    removeElmt(resultsPageContainer);
    removeElmt(gamesresourcesContainer);
    removeElmt(creditsPageContainer);

    removeElmt(buttonContainer);
    removeElmt(gamesButtonContainer);
    // removeElmt(diagnosisButtonContainer);
    removeElmt(homeButtonContainer);
}


//******************************************************************************CREATE A USER
//holds user answers. Length should equal number of questions plus 1
userAnswerArray =   [
                    playerID,  //unique user ID
                    null, //age
                    null, //gender
                    null, //state of residence
                    null, //race
                    null, //suicide 1
                    null, //pyschosis1
                    null, //psychosis2
                    null, //depression1
                    null, //depression2
                    null, //anger1
                    null, //mania1
                    null, //mania2
                    null, //anxiety1
                    null, //anxiety2
                    null, //anxiety3
                    null, //repetitive thoughts 1
                    null, //repetitive thoughts 2
                    null, //substance use 1
                    null, //substance use 2
                    null, //susbstance use 3
                    null  //suicide link 1
                        ];

//holds diagnosis. Length should equal number of diagnosis plus 1
diagnosisArray =    [
                    false, //suicidal ideation
                    false,  //pyschosis
                    false,  //depression
                    false,  //anger
                    false,  //mania
                    false,  //anxiety
                    false,  //repetitive thoughts
                    false]; //substance abuse

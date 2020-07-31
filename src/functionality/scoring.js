//******************************************************************************SCORING AND DETERMINE DIAGNOSIS
// # Update 5 - Scoring() implement save to DB. I'd recommend copy + pasting this one. I added a line and an else to each if statement.
function scoring(userAnswerArray, questionNumber) {

    //finish updating array for current questions
    storeAnswer(userAnswerArray, questionNumber);

    //reset diagnosis array
    diagnosisArray[0] = null;
    diagnosisArray[1] = null;
    diagnosisArray[2] = null;
    diagnosisArray[3] = null;
    diagnosisArray[4] = null;
    diagnosisArray[5] = null;
    diagnosisArray[6] = null;
    diagnosisArray[7] = null;

    // update the dict for each diagnosis
    //if they score greater than 2, then they will be diagnosed
    //scoring for suicideal ideation
    for (var i = 5; i < 6; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        else if (userAnswerArray[i] > "a") {
            diagnosisArray[0] = true;
        }
    }

    //scoring for pyschosis
    for (var i = 6; i < 8; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "a") {
            diagnosisArray[1] = true;
            
        }
    }

    //scoring for depression
    for (var i = 8; i < 10; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[2] = true;
            
        }
    }

    //scoring for anger
    for (var i = 10; i < 11; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArra[yi] > "b") {
            diagnosisArray[3] = true;
            
        }
    }

    //scoring for mania
    for (var i = 11; i < 13; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[4] = true;
            
        }
    }

    //scoring for anxiety
    for (var i = 13; i < 16; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[5] = true;
            
        } 
    }

    //scoring for repetitive thoughts
    for (var i = 16; i < 18; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[6] = true;
        }
    }

    //scoring for substance use
    for (var i = 18; i < 21; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[7] = true;
                    }
    }
    
    //take their most critical mental health diagnosis and index it
    var critical = false;
    var j = 0;
    while (critical == false) {
        if (diagnosisArray[j] == true) {
            critical = true;
        }
        j++;
        if (j == 10) {
            critical = true;
        }
    }
    console.log("diagnosis array");
    console.log(diagnosisArray);

//******************************************************************************GIVE DIAGNOSIS RESULTS

//adjusted scoring algorithm such that every diagnosis that is true will appear
    var nothing_wrong = true;
    for (var i = 0; i < diagnosisArray.length; i++) {
        var n = i + 2;
        removeElmt(document.getElementById(n.toString()));
        if (diagnosisArray[i] == true) {
            addElmt(document.getElementById(n.toString()));
            nothing_wrong = false;
        }
    }
    removeElmt(document.getElementById('10'));
    if (nothing_wrong == true) {
        addElmt(document.getElementById('10'));
    }

    buildResultsPage();

}

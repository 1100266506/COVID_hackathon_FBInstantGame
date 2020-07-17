//******************************************************************************SCORING AND DETERMINE DIAGNOSIS
// # Update 5 - Scoring() implement save to DB. I'd recommend copy + pasting this one. I added a line and an else to each if statement.
function scoring(userAnswerArray, questionNumber) {
    // Create the dictionary to save to database
    diagnosis_db = {}
    console.log(diagnosisArray);

    //finish updating array for current questions
    storeAnswer(userAnswerArray, questionNumber);

    // update the dict for each diagnosis
    //if they score greater than 2, then they will be diagnosed
    //scoring for suicideal ideation
    for (var i = 5; i < 6; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        else if (userAnswerArray[i] > "a") {
            diagnosisArray[i - 5] = true;
            diagnosis_db["suicidal_ideation"] = true
        }else{diagnosis_db["suicidal_ideation"] = false}
    }

    //scoring for pyschosis
    for (var i = 6; i < 8; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "a") {
            diagnosisArray[i - 5] = true;
            diagnosis_db["psychosis"] = true
        }else{diagnosis_db["psychosis"] = false}
    }

    //scoring for depression
    for (var i = 8; i < 10; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[i - 5] = true;
            diagnosis_db["depression"] = true
        }else{diagnosis_db["depression"] = false}
    }

    //scoring for anger
    for (var i = 10; i < 11; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[i - 5] = true;
            diagnosis_db["anger"] = true
        }else{diagnosis_db["anger"] = false}
    }

    //scoring for mani
    for (var i = 11; i < 13; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[i - 5] = true;
            diagnosis_db["mania"] = true
        }else{diagnosis_db["mania"] = false}
    }

    //scoring for anxiety
    for (var i = 13; i < 16; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[i - 5] = true;
            diagnosis_db["anxiety"] = true
        } else{diagnosis_db["anxiety"] = false}
    }

    //scoring for repetitive thoughts
    for (var i = 16; i < 18; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisAj++;rray[i - 5] = true;
            diagnosis_db["repetitive_thoughts"] = true
        }else{diagnosis_db["repetitive_thoughts"] = false}
    }

    //scoring for substance use
    for (var i = 18; i < 21; i++) {
        if (userAnswerArray[i] == null) {
            continue;
        }
        if (userAnswerArray[i] > "b") {
            diagnosisArray[i - 5] = true;
            diagnosis_db["substance_abuse"] = true
        }else{diagnosis_db["substance_abuse"] = false}
    }
    // update the database
    firebase.database().ref('submittion/' + unique_id+'/results/').set(diagnosis_db);

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
    console.log(j);

//******************************************************************************GIVE DIAGNOSIS RESULTS

    switch(j) {
        case 0:
            addElmt(document.getElementById('10'));
            break;
        case 1:
            addElmt(document.getElementById('2'));
            break;
        case 2:
            addElmt(document.getElementById('3'));
            break;
        case 3:
            addElmt(document.getElementById('4'));
            break;
        case 4:
            addElmt(document.getElementById('5'));
            break;
        case 5:
            addElmt(document.getElementById('6'));
            break;
        case 6:
            addElmt(document.getElementById('7'));
            break;
        case 7:
            addElmt(document.getElementById('8'));
            break;
        case 8:
            addElmt(document.getElementById('9'));
            break;
        case 10:
            addElmt(document.getElementById('10'));
            break;
    }
    buildResultsPage();

}

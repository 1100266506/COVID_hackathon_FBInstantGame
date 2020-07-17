//hide results by default
removeElmt(document.getElementById('2'));
removeElmt(document.getElementById('3'));
removeElmt(document.getElementById('4'));
removeElmt(document.getElementById('5'));
removeElmt(document.getElementById('6'));
removeElmt(document.getElementById('7'));
removeElmt(document.getElementById('8'));
removeElmt(document.getElementById('9'));
removeElmt(document.getElementById('10'));

function buildResultsPage() {
    buildBlank()
    addElmt(resultsPageContainer);

    addElmt(buttonContainer);
    addElmt(homeButtonContainer);
    addElmt(gamesButtonContainer);

   //temp
  // addElmt(document.getElementById('2'));
  // addElmt(document.getElementById('3'));
  // addElmt(document.getElementById('4'));
  // addElmt(document.getElementById('5'));
  // addElmt(document.getElementById('6'));
  // addElmt(document.getElementById('7'));
  // addElmt(document.getElementById('8'));
  // addElmt(document.getElementById('9'));
}

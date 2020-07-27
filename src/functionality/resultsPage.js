function buildResultsPage() {
    buildBlank();

    addElmt(resultsPageContainer);

    addElmt(buttonContainer);
    addElmt(homeButtonContainer);
    addElmt(gamesButtonContainer);

    addElmt(document.getElementById('alwaysResult'));
    removeElmt(gamesButtonContainer);

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

//FBInstant Game test link
//https://www.facebook.com/embed/instantgames/540512723321524/player?game_url=https://localhost:8000


const playerID = "";

FBInstant.initializeAsync()
    .then(function() {

    //load assets
        var load_progress = 0;

        for (var load_progress = 0; load_progress < 100; load_progress++) {
          FBInstant.setLoadingProgress(load_progress);
          load_progress+=3;
        }

        if (load_progress >= 99) { //once the game is loaded...
            console.log("loaded");
            FBInstant.startGameAsync() //start the game
                .then(function() {
                    console.log("Game has started!");

                    //get player information
                    var playerName = FBInstant.player.getName(); //name of account using game
                    var playerId = FBInstant.player.getID(); //unique player ID
                });
                }
                }
                );

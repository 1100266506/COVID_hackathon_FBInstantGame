//******************************************************************************DATABASE INIT/GEOLOCATION - MELODY
// # Update 2 - Initialization of database + get geolocation. Add to main.js
// # I think best place to put this is after the Facebook Initialize

    // //Ben's part of FB integration with firebase
    // //https://firebase.google.com/docs/auth/web/facebook-login
    // var provider = new firebase.auth.FacebookAuthProvider();
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    // var token = result.credential.accessToken;
    // // The signed-in user info.
    // var user = result.user;
    // // ...
    // }).catch(function(error) {
    // // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // // ...
    // });


// Creates instance of database
var database = firebase.database()
// gets unique timestamp (miliseconds since 1970)
var time = Date.now();
// Create unique ID for database (ccmbination of user_id and time)
var unique_id = playerID+"-"+time
// add the unique ID to database with USER and TIME_ACCESSED info
function addUserEntry(playerID, time_accessed) {
    firebase.database().ref('submittion/' + unique_id).set({
    user: playerID,
    time_accessed: time
  });
}
addUserEntry(playerID, time)

// Create a reference to unique submittion to update throughout
var ref = firebase.database().ref('submittion/' + unique_id);

// Get geolocation
if ('geolocation' in navigator){
                console.log('geolocation available');
                navigator.geolocation.getCurrentPosition(function(position)
                    { const lat = position.coords.latitude
                        const long = position.coords.longitude;
                        // add geolocation to database
                        ref.update({
                            latitude : lat,
                            longitude : long
                        })
                })
            } else {
                console.log('geolocation not available');
                // null to database
            }

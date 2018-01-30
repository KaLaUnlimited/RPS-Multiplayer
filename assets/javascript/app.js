//1. create database ----done!
// 2. create added players---done
// 2b. lock screen against additional players after two
// 2c. if players leave open screen up for new players...done!
// 3. store players in database....done!
// 4. display players on screen
// 5. wait for players to choose option
// 6. do javascript
// 7. send winner player to database
// 7a. send winner ,loser, ties scores from both player to database
// 8. retrieve winner from database
// 8a. retrives scores from database
// 9. display winner in game area
// 10.display scores in designated player areas

var config = {
    apiKey: "AIzaSyA30uMv7yHSjl50s1Ox6qEX3N6YEy94OQA",
    authDomain: "rockpaperscissors-64806.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-64806.firebaseio.com",
    projectId: "rockpaperscissors-64806",
    storageBucket: "",
    messagingSenderId: "1085514715649"
};

firebase.initializeApp(config);

var database = firebase.database();
var playersConnected_ref = database.ref("/playersConnections");
var connectedRef = database.ref(".info/connected");
var counterRef = database.ref("/playerCounter");
var chatRef= database.ref("/chat");

/////////////////////////////////players added block///////////////////////////////////////

var playerCounter = 0;
var playerOneWins = 0;
var playerOneLosses = 0;
var playerTwonWins = 0;
var playerTwonLosses = 0;
var lockGame = false;
var playerName;


playersConnected_ref.on("value", function(snap) {

  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  playerCounter=snap.val().playerCounter;
  console.log("players playing:" + " " + snap.numChildren());
  if(snap.numChildren()===2)
  $(".playerChecker").replaceWith("<div id='capacity'>Welcome: Player capacity is at maximum. Please wait</div>"); 
else{
   $(".capacity").replaceWith("<div class='playerChecker'><form> <div class='form-row'> <div class='col'>"
                           +" <input type='text' class='form-control'  placeholder='Player name' id='playerName'></div>"
                        
                           +" <button type='submit' class='btn btn-primary mb-2' id='playerSubmit'>Start</button>"
                   
                           +" </div> </form> </div>"); 
   


}


});

$("#playerSubmit").on("click", function(event) {

      event.preventDefault();

       playerName = $("#playerName").val();
       $(".playerChecker").replaceWith("<div>Welcome :" + playerName );
   
    
      
      connectedRef.on("value",function(snap){


        if(snap.val()){

            var con= playersConnected_ref.push({

                  connected:true,
                  playerName: playerName,
                  ewa:false
            });
             
        con.onDisconnect().remove();

        }
    

      })


          });       

  

























//     //  playersConnected_ref.on("child_added", function(snap, prevChildKey) {

//     //   // Display the viewer count in the html.
//     //   // The number of online users is the number of children in the connections list.
//     //   playerCounter=snap.val().playerCounter;
//     //   console.log(playerCounter+ " " + snap.val().key);
//     //   if(snap.numChildren()===2){
//     //       lockGame=true;
//     //   $(".playerChecker").replaceWith("<div>Welcome: Player capacity is at maximum. Please wait</div>"); 
//     // }
//     // });

//     var playerName = $("#playerName").val();
//     playerCounter++;
//     counterRef.set({
//       playerCounter:playerCounter
//     })
//     counterRef.on("value",function(snap){
//       playerCounter=snap.val().playerCounter;
//       console.log(playerCounter);
//     })
// //console.log(playerCounter);
    

// // //when player establishes connection.
// //     connectedRef.on("value", function(snap) {
       
// //         // If they are connected..
// //         if (snap.val()) {

// //             // Add user to the connections list.
// //             playersConnected_ref.push({
// //                 loggedName: true,
// //                 playerName: playerName,
// //                 playerCounter: playerCounter,
// //                 wins: playerOneWins,
// //                 losses: playerOneLosses

// //             });
// //             //playersConnected_ref.update


// //         }
// //          playerCounter=snap.val().playerCounter;
// //          playersConnected_ref.on("child_added",function(snap){
// //         $(".playerChecker").replaceWith("<div>Welcome Player " + playerCounter+ ": " + playerName + "</div>");
// // })
// //     });

// //     // When first loaded or when the connections list changes...

// // });


// // // Remove user from the connection list when they disconnect.
// // connectedRef.on("value", function(snap) {
// //     console.log(snap.val());
// //     if (snap.val()) {
// //         playersConnected_ref.onDisconnect().remove();
// //     }

// });



// // players_ref.ref("/players").push({
// //         players: playerName,
// //         playerCounter:playerCounter,
// //         wins:wins,
// //         loses:loses
// //       });








//var testing="123"
//if(lockGame){
//if player counter is ==2 

// var computerChoices = ["r", "p", "s"];
//  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
//  var wins = 0;
//  var losses = 0;
//  var ties = 0;
//  // This function is run whenever the user presses a key.
//  document.onkeyup = function(event) {
//    // Determines which key was pressed.
//    var userGuess = event.key;
//    // Randomly chooses a choice from the options array. This is the Computer's guess.
//    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//    // Reworked our code from last step to use "else if" instead of lots of if statements.
//    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
//    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
//      if ((userGuess === "r") && (computerGuess === "s")) {
//        wins++;
//      } else if ((userGuess === "r") && (computerGuess === "p")) {
//        losses++;
//      } else if ((userGuess === "s") && (computerGuess === "r")) {
//        losses++;
//      } else if ((userGuess === "s") && (computerGuess === "p")) {
//        wins++;
//      } else if ((userGuess === "p") && (computerGuess === "r")) {
//        wins++;
//      } else if ((userGuess === "p") && (computerGuess === "s")) {
//        losses++;
//      } else if (userGuess === computerGuess) {
//        ties++;
//      }
//      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
//      var html =
//        "<p>You chose: " + userGuess + "</p>" +
//        "<p>The computer chose: " + computerGuess + "</p>" +
//        "<p>wins: " + wins + "</p>" +
//        "<p>losses: " + losses + "</p>" +
//        "<p>ties: " + ties + "</p>";
//      // Set the inner HTML contents of the #game div to our html string
//      document.querySelector("#game").innerHTML = html;
//    }
//  };
//////////////////////end of lockGame bracket //////////////////////
//}
//////////////////////////////chat function.//////////////////////////////


// database.ref("/chat").push({
//         players: playerName,
//         playerCounter:playerCounter
//       });
//console.log('active');

//variable global
var currentUser = {}; 


$('#create-newUser-button').click(function () {
    var email = $('#inputIEmail').val();
    var password = $('#inputPassword').val();
    CreateNewUser(email, password);
    console.log("New User:"+ " " + email + " " + password);
});

function CreateNewUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage);
      });      
}

// save data
function writeUserData(user) {
  firebase.database().ref('users/' + user.uid).set({
    email: user.email,
  });
}

// signing button
$('#sign-in-button').click(function () {
    var email = $('#inputIEmail').val();
    var password = $('#inputPassword').val();
    SignIn(email, password);
    console.log("Existing User:"+ " " + email + " " + password);
});

function SignIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage);
      });
}

$('#logout-button').click(function () {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('logout as');
        
      }).catch(function(error) {
        // An error happened.
      });
});

//Save Create NewNick 
$('#create-newnick-button').click(function () {
  //inputs ids user  
  var nick = {
    name: $('#inputNickName').val(),
    race: $('#nickRace :selected').val(),
    professional: $('#nick-professional :selected').val(),
    strenght: $('#nick-strenght').val(),
    speed: $('#nick-speed').val(),
    stamina: $('#nick-stamina').val(),
    diety: $('#id-diety').val()
  };

  //write data in the database
  firebase.database().ref().set({
      
  });
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      currentUser = user;
      writeUserData(user);
      console.log(currentUser.email + " has logged in");
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
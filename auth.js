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

$('#logout-form').click(function () {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
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
      console.log(currentUser.email + " has logged in");
      
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
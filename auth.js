console.log('active');

$('#create-newUser-button').click(function () {
    var email = $('#inputIEmail').val();
    var password = $('#inputPassword').val();
    SignIn(email, password);
});

function SignIn(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}
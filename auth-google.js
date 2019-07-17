$('#google-login-button').click(function (e) {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var currentUser = result.user;
        console.log('logged in: ', currentUser);
        
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        
      });
});
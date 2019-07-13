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
    id: $('#inputNickName').val() + Date.now(),
    owner: currentUser.uid,
    name: $('#inputNickName').val(),
    race: $('#nickRace :selected').val(),
    professional: $('#nick-professional :selected').val(),
    strenght: $('#nick-strenght').val(),
    speed: $('#nick-speed').val(),
    stamina: $('#nick-stamina').val(),
    diety: $('#id-diety').prop('checked')
  };

  //write data in the database
  addNicktoDatabase(nick);
});

function addNicktoDatabase(n) {
  firebase.database().ref('nicks/' + n.id).set(n);
  firebase.database().ref('users/' + currentUser.uid + '/nicks/' + n.id).set(n)
    .then(function() {
      console.log('Nick user save database');
    });
}


//SHOW Nick on screen
var nickCountRef = firebase.database().ref().child('nicks');
  nickCountRef.on('value', function(snapshot) {
    $('#show-nicks').empty();   
    var nickHTMLItem = `<h3>Here all Nicks you database!</h3>` 
    snapshot.forEach(function(childsnapshot) {
      var persom = childsnapshot.val();
      nickHTMLItem += `
      <div class="pt-1 pb-1">
        <hr>
        <ul>
          <li>Name: <span class="nick-data-name">${persom.name}</span></li>
          <li>Owner: <span class="nick-data-owner">${persom.owner}</span></li>
          <li>Professional: <span class="nick-data-professional">${persom.professional}</span></li>
          <li>Race: <span class="nick-data-race">${persom.race}</span></li>
          <li>Speed: <span class="nick-data-speed">${persom.speed}</span></li>
          <li>Stamina: <span class="nick-data-stamina">${persom.stamina}</span></li>
          <li>Strenght: <span class="nick-data-strenght">${persom.strenght}</span></li>
          <button type="button" class="btn btn-danger btn-sm delete-nick" id="${persom.id}">Delete Me</button>
          <button type="button" class="btn btn-primary btn-sm edit-nick-button" data-toggle="modal" data-target="#exampleModal">Edit Nick</button>
        </ul>
      </div>
      `;
      $('#show-nicks').html(nickHTMLItem);
      console.log(persom);
      
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
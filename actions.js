// actions button
$(document).on("click" ,".delete-nick", function () { 
    console.log('click delete nick');
    var nickID = $(this).attr('id');
    firebase.database().ref('nicks/' + nickID).remove();
    firebase.database().ref('users/' + currentUser.uid + '/nicks/' + nickID).remove();
});
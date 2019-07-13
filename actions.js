// actions button
$(document).on("click" ,".delete-nick", function () { 
    console.log('click delete nick');
    var nickID = $(this).attr('id');
    firebase.database().ref('nicks/' + nickID).remove();
    firebase.database().ref('users/' + currentUser.uid + '/nicks/' + nickID).remove();
});

$('.nick-range').on('change input', function () {
   var currentValue = $(this).val();
   $(this).parent().find('span').text(currentValue);
//    console.log(currentValue);
});
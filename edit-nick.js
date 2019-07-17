$(document).on("click" ,".edit-nick-button", function () { 
    // input hidden form edit
    var nickid = $(this).attr('data-nickid');
    $('#nickid').val(nickid);

    var nickName = $(this).closest('ul').find('.nick-data-name').text();    
    var nickRace = $(this).closest('ul').find(".nick-data-race").text();
    var nickProfessinal = $(this).closest('ul').find(".nick-data-professional").text();
    var nickSpeed = $(this).closest('ul').find(".nick-data-speed").text();
    var nickStamina = $(this).closest('ul').find(".nick-data-stamina").text();
    var nickStrenght = $(this).closest('ul').find(".nick-data-strenght").text();
    var nickDiety = $(this).closest('ul').find(".nick-data-diety").text();
    
     $('#edit-inputNickName').val(nickName);
     $('#edit-nickRace').val(nickRace).change();
     $('#edit-nick-professional').val(nickProfessinal).change();
     $('#edit-nick-speed').val(nickSpeed).change();
     $('#edit-nick-stamina').val(nickStamina).change();
     $('#edit-nick-strenght').val(nickStrenght).change();
     // validation diety
     if(nickDiety == 'true') {
         $('#edit-id-diety').attr("checked", true);
     } else {
        $('#edit-id-diety').attr("checked", false);
     }
    // if ($('#nickDiety').is(":checked")) {
    //     $('#edit-id-diety').attr("checked", true);
    // } else {
    //     $('#edit-id-diety').attr("checked", false);
    // }
});

$('#edit-create-newnick-button').click(function () {
    var nick = {
        id: $('#nickid').val(),
        owner: currentUser.uid,
        name: $('#edit-inputNickName').val(),
        race: $('#edit-nickRace :selected').val(),
        professional: $('#edit-nick-professional :selected').val(),
        strenght: $('#edit-nick-strenght').val(),
        speed: $('#edit-nick-speed').val(),
        stamina: $('#edit-nick-stamina').val(),
        diety: $('#edit-id-diety').prop('checked')
      };

      console.log('update nick');
      console.log(nick);
      addNicktoDatabase(nick);
});
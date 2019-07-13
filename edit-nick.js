$(document).on("click" ,".edit-nick-button", function () { 
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
     if(nickDiety == true) {
         $('#edit-id-diety').chec("checked", true)
     } else {
         $('#edit-id-diety').prop("checked", false);
     }
});
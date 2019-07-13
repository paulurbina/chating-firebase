$(document).on("click" ,".edit-nick-button", function () { 
    var nickName = $(this).parent().find(".nick-data-name").html();
    console.log(nickName);
    
    var nickRace = $(this).parent().find(".nick-data-race").text();
    console.log(nickRace);
    
    var nickProfessinal = $('ul').find(".nick-data-professional").text();
    var nickSpeed = $('ul').find(".nick-data-speed").text();
    var nickStamina = $('ul').find(".nick-data-stamina").text();
    var nickStrenght = $('ul').find(".nick-data-strenght").text();
    var nickDiety = $('ul').find(".nick-data-diety").text();
    // $('#edit-inputNickName').val(nickName);
    // $('#edit-nickRace').val(nickRace).change();
    // $('#edit-nick-professional').val(nickProfessinal).change();
    // $('#edit-nick-speed').val(nickSpeed).change();
    // $('#edit-nick-stamina').val(nickStamina).change();
    // $('#edit-nick-strenght').val(nickStrenght).change();
    // // validation diety
    // if(nickDiety == true) {
    //     $('#edit-id-diety').attr("checked", true)
    // } else {
    //     $('#edit-id-diety').attr("checked", false);
    // }
});
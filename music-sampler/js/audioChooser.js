
$(document).ready(function () {


    // function to hide all divs 
    function hideAll() {
        $('#MedC').hide();
        $('#MujC').hide();
        $('#PeqC').hide();
        $('#VagC').hide();
    }


    hideAll();

    // when any song is clicked, make the suitable div appear
    $('.albumSong').click(function () {

        hideAll();

        // we can get the ID of the image that was clicked - 
        switch ($(this).attr("id")) {
            case "Med":
                $('#MedC').show();
                break;
            case "Muj":
                $('#MujC').show();
                break;
            case "Peq":
                $('#PeqC').show();
                break;
            case "Vag":
                $('#VagC').show();
                break;
        }
    });


});
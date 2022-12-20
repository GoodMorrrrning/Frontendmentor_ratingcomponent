// the selector will match all input controls of type :checkbox
// and attach a click event handler
$(document).ready(function () {
    $( ".thanks" ).hide();
});

$(document).on('click','#btnloadnext',function () {
    $( ".star, .title, .text, .note, .submit" ).hide();
    $( ".thanks" ).show();
    var selected = [];
    $('.note input:checked').each(function() {
      selected.push($(this).attr('name'));
        var label = $("label[for='" + $(this).attr('id') + "']").text();
      console.log(label);
        $('.absnote2').text('You selected ' +label+ ' out of 5');
    });
});
$(document).on('click', 'input[type="checkbox"]', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);
});

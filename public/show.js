$(function(){
    var $form = $('#torol');
    $('.modal .modal-ok').on('click',function(){
        $.ajax({
                url: '/ajax'+$form.attr('action'),
                data: $form.serializeArray(),
                type: 'DELETE',
                dataType: 'html',
            }).done(function(res){
                var data = JSON.parse(res);
                $('.container').html(data.message);
                //location.assign('/'); //ide atiranyit utana
            }).fail(function(res){
                alert("hiba!")
            });
    });
    $form.on('submit',function(event){
        $('.modal').modal('show');

        /*if(confirm("Biztosan torolni szeretned a receptet?")){
            $.ajax({
                url: '/ajax'+$form.attr('action'),
                data: $form.serializeArray(),
                type: 'DELETE',
                dataType: 'html',
            }).done(function(res){
                var data = JSON.parse(res);
                $('.container').html(data.message);
                //location.assign('/'); //ide atiranyit utana
            }).fail(function(res){
                $('.container').html("Hiba tortent.");
            });
        }*/

        event.preventDefault();
    });
});
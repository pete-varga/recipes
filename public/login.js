$(function(){
    var $loginLink = $('#login-link');

    var $loginDialog = $(`
        <div class="modal fade confirm-modal" tabindex="-1" role="dialog" id="loginModal">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                <div class="modal-header">Belépés</div>
                <div class="modal-body">
                    <div class="alert alert-danger">A megadott adatok hibasak!</div>
                    <div class="form-area">

                    </div>
                </div>
                </div>
            </div>
        </div>
    `);

    var $loginAlert = $loginDialog.find('.alert-danger');
    $loginAlert.hide();

    $loginDialog.find('.form-area').load('/login .login-form',function(){ //aszinkron, varjunk, hogy betoltse es utana a function
        $loginForm = $loginDialog.find('.login-form');
        $loginForm.on('submit',function(e){
            e.preventDefault();

            $.ajax({
                url: '/ajax/login',
                data: $loginForm.serializeArray(),
                type: 'POST',
                dataType: 'json',
            }).done(function(res){
                if(res.success){
                    $loginDialog.modal('hide');
                    $('.navbar-collapse').load('/ .navbar-collapse');
                }else{
                    $loginAlert.show();
                }
            }).fail(function(res){
                alert("hiba!")
            });
        });
    });

    $loginLink.on('click',function(e){
        e.preventDefault();

        $loginDialog.modal('show');
    });
});
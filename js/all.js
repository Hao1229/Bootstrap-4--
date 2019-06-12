 // Example starter JavaScript for disabling form submissions if there are invalid fields
 (function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


//利用jquery使Modal能在其他裝置正常滾動
$(document).ready(function () {
    $('.jq-openModal').click(function (e) { 
        e.preventDefault();
        let target =$(this).data('target');
        $(target).on('shown.bs.modal',function (){
            $('body').addClass('modal-open');
        })
    });
});
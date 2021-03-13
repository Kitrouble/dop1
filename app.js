$(document).ready(function() {
    $('#sendCallBack').on("click", function () {
        let email = $('#inputEmail').val()
        let name = $('#inputName').val()
        let phone = $('#inputPhone').val()

        if(email == '' || email == 0){
            $('#alertInput').html('Вы не заполнили Email адрес!')
            $('#alertInput').show()
        }
        if(name == '' || name == 0){
            $('#alertInput').html('Вы не заполнили ФИО!')
            $('#alertInput').show()
        }
        if(phone == '' || phone == 0){
            $('#alertInput').html('Вы не заполнили Номер телефона!')
            $('#alertInput').show()
        }


        $.ajax({
            type:'POST',
            url:'form.php',
            data:{ email:'email', name:'name', phone:'phone'},
            cache: false,
            success:function(data){
                if(data != false){
                    $('#inputForm').html("<div id=\"alertInput\" class=\"alert alert-success \"  role=\"alert\">\n" +
                        "                        Спасибо! Мы обязательно свяжемся с вами.\n" +
                        "                    </div>");

                }
                else{
                    $('#inputForm').html("<div id=\"alertInput\" class=\"alert alert-danger \"  role=\"alert\">\n" +
                        "                        Что-то пошло не так! :(\n" +
                        "                    </div>");

                }
            }
        })
    })

})

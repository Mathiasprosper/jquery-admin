$(document).ready(function(){
    $("#account").click(function(){
        var name = document.getElementById("fullName");
        var phone = document.getElementById("phone");
        var email = document.getElementById("email").value;
        var password = document.getElementById("password");

        document.getElementById("name").textContent = "";
        document.getElementById("number").textContent = "";
        document.getElementById("mail").textContent = "";
        document.getElementById("code").textContent = "";

        if(name.value.length < 5){
            var fullname = document.getElementById("name");
            fullname.textContent = "Enter full name"
        }
        if(phone.value.length < 11){
            var number = document.getElementById("number");
            number.textContent = "Incomplete number"
        }
        if(email == ""){
            var mail = document.getElementById("mail");
            mail.textContent = "Invalid Email"
        }
        if(password.value.length < 8){
            var code = document.getElementById("code");
            code.textContent = '"Password must contain 8 characters"'
        }
        
    
        $('form').on('submit', function(event) {
            event.preventDefault();
            
            var formData = new FormData();
            formData.append('name', $('#name').val());
            formData.append('phone', $('#phone').val());
            formData.append('email', $('#email').val());
            formData.append('password', $('#password').val());


            $.ajax({
                url: "http://159.65.21.42:9000/register",
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function(moving){
                    console.log(moving);
                    alert('Your product has been created successfully!');
                },
                error: function(error){
                    console.log(error);
                    alert('An error occurred');
                }
            });
    
                $('form')[0].reset();
        });
    });
});
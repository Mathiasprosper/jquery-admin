$('form').on('submit', function(event) {
    event.preventDefault();

    var formData = new FormData();
    formData.append('name', $('#fullName').val());
    formData.append('phone', $('#phone').val());
    formData.append('email', $('#email').val());
    formData.append('password', $('#password').val());

    $.ajax({
        url: "http://159.65.21.42:9000/register",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function(data) {
            console.log(data);
            alert('Your account has been created successfully!');
            $('form')[0].reset(); // Reset the form on success
        },
        error: function(error) {
            console.log(error);
            alert('An error occurred');
        }
    });
});

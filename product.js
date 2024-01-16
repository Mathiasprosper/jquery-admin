$(document).ready(function(){
    $("#account").click(function(){
        var name = document.getElementById("name");
        var price = document.getElementById("price");
        var description = document.getElementById("notes");
        var quantity = document.getElementById("number");

        document.getElementById("productName").textContent = "";
        document.getElementById("priceTag").textContent = "";
        document.getElementById("description").textContent = "";
        document.getElementById("quantity").textContent = "";

        if(name.value.length < 3){
            var fullname = document.getElementById("productName");
            fullname.textContent = "The product name you entered does not exist"
        }
        if(price.value.length < 1){
            var number = document.getElementById("priceTag");
            number.textContent = "Input field is required"
        }
        if(description.value.length < 5){
            var notes = document.getElementById("description");
            notes.textContent = "Input field is required"
        }
        if(quantity.value.length < 1){
            var number = document.getElementById("quantity");
            number.textContent = 'must be at least 1'
        }


        $('form').on('submit', function(event){

            event.preventDefault();
            
            var formData = new FormData();
            formData.append('name', $('#name').val());
            formData.append('price', $('#price').val());
            formData.append('description', $('#notes').val());
            formData.append('quantity', $('#number').val());
            formData.append('image', $('#image')[0].files[0]);
            formData.append('category', $('#category').val());


            $.ajax({
                url: "http://159.65.21.42:9000/create/product",
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function(data){
                    console.log(data);
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
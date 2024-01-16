$(document).ready(function() {
    $('form').on('submit', function(event) {
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
            success: function(sending) {
                console.log(sending);
                alert('Your product has been created successfully!');
                $('form')[0].reset();
            },
            error: function(error) {
                console.log(error);
                alert('An error occurred');
            }
        });
    });

    $.ajax({
        url: "http://159.65.21.42:9000/products",
        type: "GET",
        success: function(data) {
            $.each(data, function(i, product) {
                if (product.category === "sassiHolford") {
                    var Productitem = `
                        <div class="product">
                            <img class="product-image" src="http://159.65.21.42:9000${product.image}" alt="">
                            <h3>${product.name}</h3>
                            <button class="editBtn" data-id="${product._id}">Edit</button>
                            <button class="deleteBtn" data-id="${product._id}">Delete</button>
                        </div>`;
                    $(".product-details").append(Productitem);
                }
            });
        },
        error: function(error) {
            console.log('Error fetching products:', error);
        }
    });

    // $(document).ready(function() {
    //     $(document).on('click', '.deleteBtn', function() {
    //         var productId = $(this).data("id"); 
    
    //         $.ajax({
    //             url: `http://159.65.21.42:9000/product/${productId}`,
    //             type: 'DELETE',
    //             success: function(response) {
    //                 console.log(response);
    //                 alert("Item deleted successfully");
    //                 $(`.deleteBtn[data-id="${productId}"]`).closest('.product').remove();
    //             },
    //             error: function(error) {
    //                 console.log(error);
    //                 alert("Error deleting item");
    //             }
    //         });
    //     });
    
    // });
    

    let btns = $(".deleteBtn");
    $.each(btns, function(i, btn)){
        $(btn).click(function(e){
            let parentEle = $(btn).parent();
            let id = $(parentEle).attr("id");
            $.ajax({
                method: "DELETE",
                url: `http://159.65.21.42:9000/product/${productId}`,
                success: function(data){
                    console.log(data);
                },
                error: function(err){
                    console.log(err);
                },
            });
        });
    },


    $(document).on('click', '.editBtn', function() {
    
        var updatedData = {
            field1: 'editedValue1',
            field2: 'editedValue2'
        };
    
        $.ajax({
            url: `http://159.65.21.42:9000/product`,
            type: 'PUT',
            data: updatedData,
            success: function(response) {
                console.log('Item edited successfully:', response);
            },
            error: function(error) {
                console.log(error);
                alert("Error editing item")
            }
        });
    });
    
    });
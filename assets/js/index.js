$("#add_product").submit(function(event) {
    alert("Data Inserted Successfully");
});

$("#update_product").submit(function(event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n,i) {
        data[n['name']] = n['value'];
    });

    console.log(data);

    var request = {
        "url" : `/api/products/${data.id}`,
        "method" : "PUT",
        "data" : data
    };

    $.ajax(request).done(function(response) {
        alert("Data Updated Successfully");
        window.location.href = '/';
    });
});

if(window.location.pathname == "/") {
    $ondelete = $("table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");

        var request = {
            "url" : `/api/products/${id}`,
            "method" : "DELETE",
        };

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully");
                location.reload();
            });
        }
    });
}
$(function ($) {
    $.ajax({
        url: "billgen-API.php?default=1",
        method: "POST",
        data: "text=Stephen+is+a+silly+sausage+who+drinks+at+starbucks",
        success: function (data) {
            console.log(data.data);
            console.log("hello");
        }
    });
    $("#sendRequest").on("click", function () {
        var name = $("#nameField").val();
        var gender = $('input[name=gender]:checked').val();
        $("#billImage").attr("src", "http://belikebill.azurewebsites.net/billgen-API.php?default=1&name=" + name + "&sex=" + gender);
    });
});

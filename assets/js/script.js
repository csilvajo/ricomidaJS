$(function () {
    $(document).tooltip();
});

$("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
});

$("h2").on("dblclick",
    function () {
        $(this).css("color", "red");
    }
);

$(".card-title").click(function () {
    $(".card-text").toggle();
});
function makeGrid(height, width) {
    for (var row = 1; row <= height; row++) {
        var tr = $("<tr></tr>");
        tr.appendTo("#pixel_canvas");
        for (var column = 1; column <= width; column++) {
            tr.append("<td></td>");
        }
    }
}

$(function () {
    $("#sizePicker").on("submit", function (event) {
        $("#pixel_canvas").empty();
        var height = $("#input_height").val();
        var width = $("#input_width").val();
        makeGrid(Number(height), Number(width));

        $("td").click(function () {
            var selectedColor = $("#colorPicker").val();
            var changeColorOfCell = $(this).css("background-color", selectedColor);
        });
        event.preventDefault();
    });

});
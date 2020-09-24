    function updater() {
        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#csspanel").val()
            + "</style></head><body>" + $("#htmlpanel").val()
            + "</body></html>");

    document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
}
        $(".toggleButton").hover(function () {
        $(this).css("background-color", "grey");
    }, function () {

        $(this).css("background-color", "#EEEEEE");
    });

        $(".toggleButton").click(function () {
        $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");

    var panelId = $(this).attr("id") + "panel";
    $("#" + panelId).toggleClass("hidden");

    var activpan = 4 - $('.hidden').length;
    $(".panel").width($(window).width() / activpan - 10);
});

$(".panel").height($(window).height() - $("#header").height()-20);
$(".panel").width($(window).width() /  2- 10);

//$("iframe").contents().find("html").html($("#htmlpanel").val());
updater();
        $("textarea").on('change keyup paste', function(){
        updater();

    });
   
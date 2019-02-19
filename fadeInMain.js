$(document).ready(function () {
    setTimeout(
        function () {
            $(".slideanim").each(function () {
                $(this).addClass("slide");
            });
        }, 1000);
});
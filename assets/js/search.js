$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
$(document).ready(function () {
    $("#search-d").on("keyup", function () {
        var search = $(this).val();
        $(".device-sec").show();
        $(".mx-auto").show();
        if (search) $(".device-sec").not(":contains(" + search + ")").hide();
        if (search) $(".mx-auto").not(":contains(" + search + ")").hide();
    });
});
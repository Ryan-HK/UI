$(function () {
    $(".dropdown-content").on({

        "mouseover" : function () {
            $(this).prev().css({
                color: "rgb(52,152,219)",
                textDecoration : "underline"
            });
        },

        "mouseout" : function () {
            $(this).prev().css({
                color: "#252525",
                textDecoration : "none"
            });
        }   
    })
}); 
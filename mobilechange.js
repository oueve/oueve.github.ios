/*global $, jQuery, alert */
$(document).ready(function () {
    "use strict";
    if ($(document).width() < 768) {
        $("div.col-md-4").removeClass("border-desktop");
        $("div.col-md-4").addClass("border-mobile");
    }
});
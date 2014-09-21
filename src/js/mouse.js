/**
 * Copyright (C) 2014 Craig Phillips.  All rights reserved.
 **/
$(document).ready(function() {

    window.Mouse = {
        "x": -1000,
        "y": -1000
    };

    $("html *").mousemove(function(evt) {
        Mouse.x = evt.pageX;
        Mouse.y = evt.pageY;
    });

});

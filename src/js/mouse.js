/**
 * Copyright (C) 2014 Craig Phillips.  All rights reserved.
 **/
/*global Mouse: false, $: false, document: false, window: false */
$(document).ready(function() {
    'use strict';

    window.Mouse = {
        "x": -1000,
        "y": -1000
    };

    $("html *").mousemove(function(evt) {
        Mouse.x = evt.pageX;
        Mouse.y = evt.pageY;
    });

});

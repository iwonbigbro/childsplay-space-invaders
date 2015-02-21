/**
 * Copyright (C) 2014 Craig Phillips.  All rights reserved.
 **/
/*global window: false, Bullet: false */
(function () {
    'use strict';

    function Gun() {
        return undefined;
    }

    Gun.prototype = {
        constructor: Gun,

        fire: function() {
            var bullet = new Bullet();

            bullet.fire();
        }
    };

    window.Gun = Gun;

}());

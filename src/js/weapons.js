/**
 * Copyright (C) 2014 Craig Phillips.  All rights reserved.
 **/
(function () {

    function Gun() {}

    Gun.prototype = {
        constructor: Gun,

        fire: function() {
            var bullet = new Bullet();

            bullet.fire();
        }
    };

    window.Gun = Gun;

})();

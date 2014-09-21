/**
 * Copyright (C) 2014 Craig Phillips.  All rights reserved.
 **/

(function () {

    function Bullet() {
        this.armed = false;

        this.$ = $('<div class="bullet"></div>');

        this.$.css({
            "left": Mouse.x,
            "top": Mouse.y
        });

        $("#canvas").append(this.$);
    }

    Bullet.prototype = {
        constructor: Bullet,

        arm: function() {
            this.armed = true;
            this.$.addClass("armed");
        },

        fire: function() {
            var self = this;

            this.arm();

            this.$.animate({
                "top": -100 
            }, {
                "duration": 2000,
                "done": function() {
                    self.$.remove();
                }
            });
        }
    };

    window.Bullet = Bullet;

})();

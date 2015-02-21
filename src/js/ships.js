/**
 * Copyright (C) 2014 Craig Phillips.  All rights reserved.
 **/
/*global Mouse:false, $:false, document:false, setInterval:false, OneShip:false,
         Gun:false, window:false */
$(document).ready(function() {
    'use strict';

    function Ship() {
        this.$ = $('<div class="ship ship-01"/>');

        $("#canvas").append(this.$);

        this.weapon = new Gun();
    }

    Ship.prototype = {
        constructor: Ship,

        dimensions: function() {
            return {
                "width": this.$.width(),
                "height": this.$.height()
            };
        },

        position: function() {
             var pos = this.$.offset();

             pos.x = parseInt(pos.left, 10) + (this.$.width() / 2);
             pos.y = parseInt(pos.top, 10) + (this.$.height() / 2);

             return pos;
        },

        shoot: function() {
            this.weapon.fire();
        },

        arm: function(weapon) {
            this.weapon = weapon;
        }
    };

    window.OneShip = new Ship();

    setInterval(function() {
        var dims = OneShip.dimensions(),
            pos = OneShip.position(),
            css = {
                "left": Mouse.x - (dims.width / 2),
                "top": Mouse.y - (dims.height / 2)
            },
            tx = {
                x: 0,
                y: 0
            };

        if (Mouse.x > (pos.x + 50)) {
            tx.y = 50;
        } else if (Mouse.x < (pos.x - 50)) {
            tx.y = -50;
        }

        if (Mouse.y > (pos.y + 20)) {
            tx.x = +30;
        } else if (Mouse.y < (pos.y - 20)) {
            tx.x = -30;
        }

        css.transform = "perspective(50em) " +
            "rotateY(" + tx.y + "deg) rotateX(" + tx.x + "deg)";

        OneShip.$.css(css);
    }, 100);

    $("html *").click(function() {
        OneShip.shoot();

        return false;
    });

});

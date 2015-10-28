'use strict';

module.exports = function (fn) {

    if (!(requestAnimationFrame in window)) {
        return fn;
    }

    var id = null;

    return function () {
        var args = arguments;

        if (id !== null) {
            cancelAnimationFrame(id);
        }

        id = requestAnimationFrame(function () {
            fn.apply(null, args);
            id = null;
        });
    };
};

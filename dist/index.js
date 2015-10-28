'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (fn) {
    if (!(requestAnimationFrame in window)) {
        return fn;
    }

    var id = null;

    return function () {
        var _arguments = arguments;

        if (id !== null) {
            cancelAnimationFrame(id);
        }

        id = requestAnimationFrame(function () {
            fn.apply(null, _arguments);
            id = null;
        });
    };
};

;
module.exports = exports['default'];


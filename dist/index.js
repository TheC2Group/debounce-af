'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (fn) {
    if (typeof window !== "undefined" && !(requestAnimationFrame in window)) {
        return fn;
    }

    var id = null;

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (id !== null) {
            cancelAnimationFrame(id);
        }

        id = requestAnimationFrame(function () {
            fn.apply(undefined, args);
            id = null;
        });
    };
};

;
module.exports = exports["default"];


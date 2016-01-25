(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.daf = factory();
}(this, function () { 'use strict';

    function debounceAf (fn) {
        if (typeof window !== 'undefined' && !('requestAnimationFrame' in window)) {
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
    }

    return debounceAf;

}));
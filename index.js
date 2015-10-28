'use strict';

export default function (fn) {
    if (!(requestAnimationFrame in window)) {
        return fn;
    }

    var id = null;

    return function () {
        if (id !== null) {
            cancelAnimationFrame(id);
        }

        id = requestAnimationFrame(() => {
            fn.apply(null, arguments);
            id = null;
        });
    };
};

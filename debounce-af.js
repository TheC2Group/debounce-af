'use strict';

export default function (fn) {
    if (typeof window !== 'undefined' && !('requestAnimationFrame' in window)) {
        return fn;
    }

    let id = null;

    return (...args) => {
        if (id !== null) {
            cancelAnimationFrame(id);
        }

        id = requestAnimationFrame(() => {
            fn(...args);
            id = null;
        });
    };
}

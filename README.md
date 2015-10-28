debounce af
===========


install
-------

```sh
$ npm install c2-debounce-af
```


require
-------

```js
var daf = require("c2-debounce-af");
```


api
---

### daf(fn) > debounced

creates a function which, when called, waits until there is no call
until an animation frame is triggered. then executes `fn` with its
the last arguments that has been passed to `debounced`.


example
-------

```js
var render = daf(function (text) {
    div.textContent = text;
});

input.addEventListener('input', function (eventObject) {
    render(eventObject.currentTarget.value)
});
```

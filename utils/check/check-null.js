console.log((bar !== null) && (bar.constructor === Object));

console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));

console.log(Array.isArray(bar));
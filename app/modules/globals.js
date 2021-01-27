const html = (strings, ...values) =>
    strings.reduce((a, v, i) => a + v + (values[i] || ""), "");

const mount = (html) => {
    let node = document.body;
    node.innerHTML = html;
    return node.firstChild;
};

const textContent = (node) => node.textContent.trim();

window.mount = mount;
window.html = html;
window.textContent = textContent;
window.$ = (v) => document.querySelector(v);
window.$$ = (v) => Array.from(document.querySelectorAll(v));

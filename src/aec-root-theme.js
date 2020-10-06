import "./set-public-path";
import "./main.scss";
import "./main.js";

var $ = require("jquery");
window.jQuery = $;
window.$ = $;

// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

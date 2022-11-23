"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codemirror_1 = require("codemirror");
const lang_javascript_1 = require("@codemirror/lang-javascript");
let editor = new codemirror_1.EditorView({
    extensions: [codemirror_1.basicSetup, (0, lang_javascript_1.javascript)()],
    parent: document.body
});

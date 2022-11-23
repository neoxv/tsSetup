(function (codemirror, langJavascript) {
    'use strict';

    new codemirror.EditorView({
      extensions: [codemirror.basicSetup, langJavascript.javascript()],
      parent: document.body
    });

})(codemirror, langJavascript);
//# sourceMappingURL=bundle.js.map

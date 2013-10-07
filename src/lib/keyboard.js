// -----------------------------------------------------------------------------
// kb Namespace (keyboard)

(function (window) {
    'use strict';
    window.gui = require('nw.gui');
    window.kb = {

        registerKeysEvents: function () {
            document.onkeydown = this.onKeyDownEvent;
        },
        onKeyDownEvent: function (evt) {
            var keyCode = evt.keyCode;
            if (keyCode == 27) {
                //close app
                gui.App.quit();
            } else if (keyCode == 123) {
                //Show dev tools
                gui.Window.get().showDevTools();
            }
        }
    };

})(window);
sap.ui.define([
    "sap/ui/core/UIComponent"
],
    function (UIComponent) {
        "use strict";

        return UIComponent.extend("sap.training.products.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                this.mManifest = this.getManifest();
                this.mAppData = this.getManifestEntry("sap.app");
                this.mConfig = this.getManifestEntry("/sap.ui5/config");

            }
        });
    }
);
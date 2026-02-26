sap.ui.define([
    "sap/ui/core/UIComponent",
    "slsdsmevr/slsdsmevrcrclmcasemgr/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("slsdsmevr.slsdsmevrcrclmcasemgr.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            var oGlobalModel = new sap.ui.model.json.JSONModel({
                oClaimDetails:{
                    
                }
            })
            this.setModel(oGlobalModel, "oGlobalModel");
            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});
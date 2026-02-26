sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("slsdsmevr.slsdsmevrcrclmcasemgr.controller.View1", {
        onInit() {
        },
        onValueHelpRequest() {
            if (this._valueHelpDialogCaseId) {

                this._valueHelpDialogCaseId.destroy();

            }

            // if (!this._valueHelpDialogCaseId) {

            this._valueHelpDialogCaseId = sap.ui.xmlfragment(

                "slsdsmevr.slsdsmevrcrclmcasemgr.view.Fragments.WorklistView_Fragments.Filter_CaseID",

                this);


            this.getView().addDependent(this._valueHelpDialogCaseId);

            // }

            this._valueHelpDialogCaseId.open();

            this.onLiveSearchAllFragment();



        },
        onDialogClose: function (oEvent) {
            var oGlobalModel = this.getOwnerComponent().getModel('oGlobalModel');
            var oGlobalCaseDetail = oEvent.oSource._oSelectedItem.getBindingContext().getObject();


            oGlobalModel.setProperty('/oClaimDetails/CASMG', oGlobalCaseDetail.CASEMGR_NAME);
            oGlobalModel.setProperty('/oClaimDetails/CASMID', oGlobalCaseDetail.CASEMGR_ID);
            oGlobalModel.setProperty('/oClaimDetails/CASMGREMAIL', oGlobalCaseDetail.CASEMGR_EMAIL);
        },
        onValueHelpRequestEmp: function () {
            if (this._valueHelpDialogEmpId) {

                this._valueHelpDialogEmpId.destroy();

            }

            // if (!this._valueHelpDialogCaseId) {

            this._valueHelpDialogEmpId = sap.ui.xmlfragment(

                "slsdsmevr.slsdsmevrcrclmcasemgr.view.Fragments.WorklistView_Fragments.Filter_EmpID",

                this);


            this.getView().addDependent(this._valueHelpDialogEmpId);

            // }

            this._valueHelpDialogEmpId.open();

            // this.onLiveSearchAllFragment(oEvent);
        },
        onDialogCloseEmp: function (oEvent) {
            var oGlobalModel = this.getOwnerComponent().getModel('oGlobalModel');
            var ClaimDetails = oEvent.oSource._oSelectedItem.getBindingContext().getObject();


            oGlobalModel.setProperty('/oClaimDetails/EMPID', ClaimDetails.EMPID);
            oGlobalModel.setProperty('/oClaimDetails/EMPNM', ClaimDetails.EMPNM);
            oGlobalModel.setProperty('/oClaimDetails/LOCTN', ClaimDetails.LOCTN);
            oGlobalModel.setProperty('/oClaimDetails/HIRDT', ClaimDetails.HIRDT);
            oGlobalModel.setProperty('/oClaimDetails/PSUBA', ClaimDetails.PSUBA);
            oGlobalModel.setProperty('/oClaimDetails/POSIT', ClaimDetails.POSIT);
            oGlobalModel.setProperty('/oClaimDetails/CREW', ClaimDetails.CREW);
            oGlobalModel.setProperty('/oClaimDetails/HRSLR', ClaimDetails.HRSLR);
        },
        onPress: function () {
            // var oGlobalModel = new sap.ui.model.json.JSONModel({});
            var oViewModel = this.getOwnerComponent().getModel('oGlobalModel')
            var oData = oViewModel.getProperty('/oClaimDetails');
            var oPayload = this._getPayload_ClaimDetails(oData);
            var oModel = this.getOwnerComponent().getModel()
            // var oPayload1 = {
            //      "D4OXYPALUYAIDNSO": JSON.stringify({"ClaimDetails":{"CLMID":0,"REBEH":0,"CLMTY":1,"RPLB1":"Dnyaneshwar S","RPLB2":"SLS1131","RPLB3":"FTY01","RPLB4":"Salaried","RPLB5":"Union","RPLB6":"Product Management","MGRNM":"Herculie Clemenceau","RPLB7":"Employee Division","RPLB8":"Suite 198 46271 Ying Crest, Sipesville, GA 83829-4922","RPLB9":"2020-05-10","RPLB10":"Assistant Professor","RPLB11":"Himanshi Pachori","RPLB12":"om.a@sodalessolutions.com","RPLB13":"1234567890","RPLB14":"testrecord@gmail.com","RPLB15":"Himanshi","RPLB16":"64","RPLB17":"himanshi.p@sodalessolutions.com","RPLB18":"Not Applicable","RPLB19":"","RPLB20":"","ISAVE":"0","DRFNM":"","SUBDT":"","REPDT":"2025-11-10"},"STDDetails":{"STDID":0,"STD01":"2025-11-10","STD02":"","STD03":-1,"STD04":"","STD05":"Description of Injury/Illnessnn","STD06":"","STD07":"","STD08":"","STDCustomFieldDetails":{"STDPK":0,"CSDT1":"","CSDT2":"","CSDT3":"","CSDT4":"","CSDT5":"","CSDT6":"","CSIP1":"","CSIP2":"","CSIP3":"","CSIP4":"","CSIP5":"","CSIP6":"","CSRD1":-1,"CSRD2":-1,"CSRD3":-1,"CSRD4":-1,"CSRD5":-1,"CSRD6":-1,"CSTA1":"","CSTA2":"","CSTA3":"","CSTA4":"","CSTM1":"","CSTM2":"","CSDP1":0,"CSDP2":0,"CSDP3":0,"CSDP4":0,"CSDP5":826,"CSDP6":0,"STDCustomMulticombo1":[],"STDCustomMulticombo2":[],"STDCustomMulticombo3":[],"STDCustomMulticombo4":[],"STDCustomMulticombo5":[],"STDCustomMulticombo6":[]}},"STDCustomFieldDetails":{},"LTDDetails":{},"LTDCustomFieldDetails":{},"MedicalAccommodation":{},"ReligiousAccommodation":{},"Ergonomics":{},"CustomClaimType1":{},"CustomClaimType2":{},"CustomClaimType3":{},"CustomClaimType4":{},"CustomClaimType5":{},"CustomClaimType6":{},"CustomClaimType7":{},"CustomClaimType8":{},"CustomClaimType9":{},"CustomClaimType10":{}})          
            // }
            var oPayload1 = {
                "D4OXYPALUYAIDNSO": JSON.stringify(oPayload)
            }
            oModel.create("/rlQ2Em7VGztsJeed", oPayload1, {
                async: true, method: "POST", success: function (res) {
                    console.log("res", res);
                }, error: function (err) { console.log("err", err) }
            });
            // rlQ2Em7VGztsJeed

        },
        _getPayload_ClaimDetails: function (oData) {
            oData ? oData : oData = {};

            return {
                "ClaimDetails": {
                    "CLMID": Number(oData.CLMID) || 0,
                    "REBEH": 0,
                    "CLMTY": Number(oData.CLMTY) || '',
                    "CTPID": Number(oData.CLMTY),
                    "CTPTX": oData.CTPTX || "",
                    "RPLB1": oData.EMPNM || "",
                    "RPLB2": oData.EMPID || "",
                    "RPLB3": oData.PSUBA || "",
                    "RPLB4": oData.HRSLR || "",
                    "RPLB5": oData.RPLB5 || "",
                    "RPLB6": oData.RPLB6 || "",
                    "MGRNM": oData.MGRNM || "",
                    "RPLB7": oData.RPLB7 || "",
                    "RPLB8": oData.RPLB8 || "", // location
                    "RPLB9": oData.RPLB9 || "",
                    "RPLB10": oData.RPLB10 || "",
                    "RPLB11": oData.RPLB11 || "",
                    "RPLB12": oData.RPLB12 || "",
                    "RPLB13": oData.RPLB13 || "",
                    "RPLB14": oData.RPLB14 || "",
                    "RPLB15": oData.CASMG || "",
                    "RPLB16": oData.CASMID || "",
                    "RPLB17": oData.RPLB17 || "",
                    "RPLB18": oData.RPLB18 || "",
                    "RPLB19": oData.RPLB19 || "",
                    "RPLB20": oData.RPLB20 || "",
                    "ISAVE": oData.ISAVE || 0,
                    "DRFNM": oData.DRFNM || "",
                    "SUBDT": "",
                    "REPDT": ""
                }
            }

        }


    });
});
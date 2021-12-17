sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"xxxnamespaceZTRAINING_RUBBY_01/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function(Controller, MessageToast, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("xxxnamespaceZTRAINING_RUBBY_01.controller.View1", {
		formatter: formatter,
		onInit: function() {
			// untuk binding odata
			this.getView().byId("idInput").setValue("Rubby Guntara");
		},

		onBeforeRendering: function() {
			// action setelah selesai binding
		},
		onAfterRendering: function() {
			// action setelah semua siap
		},
		onExit: function() {
			// ketika exit page
		},
		onPressTrainingButton: function() {
			// this.getView().byId() ->untuk mendapatkan sebuah nilai/value
			var a = this.getView().byId("idText").getText(),
				b = this.getView().byId("idInput").getValue(),
				c = this.getView().byId("idDate").getDateValue();
			// alert(a);
			// console.log(a);
			MessageToast.show(a + " " + b + " Selamat Sore " + c);
		},
		onChangeInput: function() {
			var a = this.getView().byId("idText").getText(),
				b = this.getView().byId("idInput").getValue(),
				c = this.getView().byId("idDate").getDateValue();

			console.log(b);
			if (c === "" || c === null) {
				alert();
			} else {
				MessageToast.show(a + " " + b + " Selamat Sore " + c);
			}

		},
		onFilterInvoices: function(oEvent) {
			//build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			//filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);

			// var oList = this.getView().byId("invoiceList");
			// var oBinding = oList.getBinding("items");
			// oBinding.filter(aFilter);
		},
		groupFunction: function(oContext){
			return {
				key: oContext.getProperty("ProductName")[0]
			};
		}
	});
});
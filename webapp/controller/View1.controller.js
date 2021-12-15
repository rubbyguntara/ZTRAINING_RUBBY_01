sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("xxxnamespaceZTRAINING_RUBBY_01.controller.View1", {
		onShowHello: function() {
			var a = "Hello World action from controller";
			// alert(a);
			// console.log(a);
			MessageToast.show(a);
		}
	});
});
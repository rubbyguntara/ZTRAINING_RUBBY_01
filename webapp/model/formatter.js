sap.ui.define([], function() {
	"use strict";
	return {
		statusText: function(sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("invoiceStatusA");
				case "B":
					return resourceBundle.getText("invoiceStatusB");
				case "C":
					return resourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		},
		numberState: function(sExtendedPrice) {
			if (sExtendedPrice >= 11) {
				return "Error";
			} else if (sExtendedPrice === 8.8) {
				return "Warning";
			} else {
				return "Success";
			}
		}
	};
});
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
		currencyPrice: function(sExtendedPrice) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			if (sExtendedPrice >= 200) {
				return 'IDR';
			} else if (sExtendedPrice >= 90) {
				return 'BND';
			} else {
				return 'USD';
			}
		},
		numberState: function(sExtendedPrice) {
			if (sExtendedPrice >= 100) {
				return "Success";
			} else if (sExtendedPrice >= 50) {
				return "Warning";
			} else {
				return "Error";
			}
		}
	};
});
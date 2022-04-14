/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap.training.demo.comps/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

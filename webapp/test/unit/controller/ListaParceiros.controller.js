/*global QUnit*/

sap.ui.define([
	"z10/gerenciarparceiros/controller/ListaParceiros.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListaParceiros Controller");

	QUnit.test("I should test the ListaParceiros controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

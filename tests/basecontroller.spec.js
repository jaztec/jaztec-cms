/**
 * @type {controllers.Base}
 */
var BaseController = require("../controllers/Base");

/**
 * Unit test for the BaseController
 */
describe("Base controller tests", function() {
	it("Should be able to extend", function(next) {
		expect(BaseController.extend).toBeDefined();
		var child = BaseController.extend({ name: "my child controller" });
		expect(child.run).toBeDefined();
		expect(child.name).toBeDefined();
		expect(child.name).toBe("my child controller");
		next();
	});
	it("Should create separate childs", function(next) {
		var childA = BaseController.extend({ name: "child A", customProperty: 'value' });
		var childB = BaseController.extend({ name: "child B" });
		expect(childA.name).not.toBe(childB.name);
		expect(childB.customProperty).not.toBeDefined();
		next();
	});
});
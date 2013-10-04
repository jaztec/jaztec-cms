var Model = require("../models/Base");
describe("Base model: ", function() {
    it ("New model should be created", function(next){
        var model = new Model();
        expect(model).toBeDefined();
        next();
    });
    it ("Should be able to extend it", function(next){
        var model = new Model()
        model.extend({ customModelMethod: function() { } });
        expect(model.customModelMethod).toBeDefined();
        next();
    });
});
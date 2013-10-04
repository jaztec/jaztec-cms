var Model = require("../models/Base");
describe("Base module funcionality", function() {
    it ("New model should be created", function(next){
        expect(Model.extend).toBeDefined();
        
        next();
    });
    it ("Should be able to extend it", function(next){
        var model2 = Model.extend({ customModelMethod: function() { } });
        expect(model2.customModelMethod).toBeDefined();
        next();
    });
});
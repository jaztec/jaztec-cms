var Model = require('../models/Base'),
    dbMockup = {};
describe("Base module funcionality", function() {
    it ("New model should be created", function(next){
        var model = new Model(dbMockup);
        expect(model.db).toBeDefined();
        expect(model.extend ).toBeDefined();
        next();
    });
    it ("Should be able to extend id", function(next){
        var model = new Model(dbMockup);
        var otherModelType = model.extend({
            customModelMethod: function() { }
        });
        var model2 = new otherModelType(dbMockup);
        expect(model2.db).toBeDefined();
        expect(model2.customModelMethod).toBeDefined();
        next();
    });
});
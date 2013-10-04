var View = require('../views/Base');
describe("Base view class: ", function() {
    it("Create and render new view", function(next) {
        var responseMockup = {
            render: function(template, data) {
                expect(data.mProp).toBe('teststring');
                expect(template).toBe('test-template');
                next();
            }
        };
        var v = new View(responseMockup, 'test-template');
        v.render({mProp: 'teststring'});
        next();
    });
    it("should be extendable", function(next) {
        var v = new View();
        var v2 = v.extend({
            render: function(data) {
                expect(data.mProp).toBe('yes');
                next();
            }
        });
        var v2Instance = new v2();
        expect(v2Instance.render).toBeDefined();
        v2Instance.render({mProp: 'yes'});
        next();
    });
});

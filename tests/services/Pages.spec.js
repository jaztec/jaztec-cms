var Pages = require("../../services/Pages"),
    dbMockup = {};
describe("Base service funcionality", function() {
    it ("New service should be created", function(next){
        var service = new Pages(dbMockup);
        expect(service.db).toBeDefined();
        expect(service.extend).toBeDefined();
        expect(service.find).toBeDefined();
        next();
    });
    it ("Should be able to extend it", function(next){
//        var service = new Pages(dbMockup);
//        var otherServiceType = service.extend({
//            customServiceMethod: function() { }
//        });
//        var service2 = new otherServiceType(dbMockup);
//        expect(service2.db).toBeDefined();
//        expect(service2.customServiceMethod).toBeDefined();
//        next();
    });
});
/**
 * Unit test the article model. 
 * Test for existance of all JOIN properties.
 */
var Article = require("../../models/Article"),
    entity = new Article();

describe("Entity Article test:", function() {
    it("Article should contain a section array", function(next) {
        expect(entity.sections).toBeDefined();
        expect(entity.sections).toEqual([]);
        next();
    });
});

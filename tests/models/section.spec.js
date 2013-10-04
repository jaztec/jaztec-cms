/**
 * Unit test the section model. 
 * Test for existance of all JOIN properties.
 */
var Section = require('../../models/Section'),
    entity = new Section();

describe("Entity Section test:", function() {
    it("Section should contain a page array", function(next) {
        expect(entity.pages).toBeDefined();
        expect(entity.pages).toEqual([]);
        next();
    });
});

var BaseModel = new (require('./Base')),
    Section = BaseModel.extend({ pages : [] });

module.exports = Section;
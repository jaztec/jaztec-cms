var BaseModel = new (require('./Base')),
    Article = BaseModel.extend({ sections : [] });

module.exports = Article;
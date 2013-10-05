var BaseModel = new (require('./Base'));
var Article = BaseModel.extend({ 
    sections : [] 
});

module.exports = Article;
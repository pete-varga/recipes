'use strict'
const Category = use('App/Model/Category');

class RecipeController {
    * list(req, res){ //*: async fuggveny, yield async fuggvenyek ele kell
        var categories = yield Category.all();
        
        yield res.sendView('main', {
            categories: categories.toJSON()
        });
    }
}

module.exports = RecipeController

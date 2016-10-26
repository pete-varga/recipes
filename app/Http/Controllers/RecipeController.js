'use strict'
const Category = use('App/Model/Category');
const Recipe = use('App/Model/Recipe');
const Validator = use('Validator');

class RecipeController {
    * list(req, res){ //*: async fuggveny, yield async fuggvenyek ele kell
        var categories = yield Category.with('recipes').fetch(); //recipes = ugyanaz, mint categoryba recipes()
        
        yield res.sendView('main', {
            categories: categories.toJSON()
        });
    }

    * create(req, res){
        var categories = yield Category.all();
        yield res.sendView('create', {
            categories: categories.toJSON()
        });
    }

    * createNew(req, res){
        var post = req.post();

        var userData = {
            name: post.name,
            description: post.description,
            category_id: post.category_id
        };

        const validation = yield Validator.validateAll(userData, Recipe.rules)

        if (validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect('back')
            return
        }

        var recipe = yield Recipe.create(userData);
        yield recipe.save();
        res.redirect('back');
    }

    * show(req, res){
        var recipe = yield Recipe.findBy('id', req.param('id'));
        yield recipe.related('category').load();
        //console.log(recipe);

        yield res.sendView('show', {
            recipe: recipe.toJSON()
        });
    }

    * edit(req, res){
        var recipe = yield Recipe.findBy('id', req.param('id'));
        var categories = yield Category.all();
        yield res.sendView('edit', {
            recipe: recipe.toJSON(),
            categories: categories.toJSON()
        });
    }

    * editSubmit(req, res){
        var post = req.post(); //form adatainak lekerese
        var recipe = yield Recipe.findBy('id', req.param('id')); //eredeti recept adatainak lekerese
        
        recipe.name=post.name;
        recipe.description=post.description;
        recipe.category_id=post.category_id;

        yield recipe.save();

        res.redirect('/');
    }

    * delete(req, res){
        var recipe = yield Recipe.findBy('id', req.param('id')); //eredeti recept adatainak lekerese

        yield recipe.delete();

        res.redirect('/');
    }
}

module.exports = RecipeController

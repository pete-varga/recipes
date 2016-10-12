'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
    recipes() {
        return this.belongsTo('App/Model/Recipe')
    }
}

module.exports = Category

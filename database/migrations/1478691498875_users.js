'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.dropColumn('username')
    })
  }

  down () {
    this.drop('users')
    }
    
}

module.exports = UsersSchema

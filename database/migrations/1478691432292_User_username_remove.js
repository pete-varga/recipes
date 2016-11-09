'use strict'

const Schema = use('Schema')

class UserUsernameRemoveSchema extends Schema {

  up () {
    this.table('user', (table) => {
      // alter user_username_remove table
    })
  }

  down () {
    this.table('user', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = UserUsernameRemoveSchema

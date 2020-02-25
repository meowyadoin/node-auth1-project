
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments(); // the id for each user
        tbl.string('username', 128).notNullable().unique(); // the username column for the table, should be unique and cannot be empty(ie. not nullable)
        tbl.string('password', 128).notNullable(); // passwords shouldnt be nullable but they arent unique either. Multiple people could have the same password;
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
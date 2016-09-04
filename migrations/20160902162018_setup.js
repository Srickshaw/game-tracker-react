
exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('games', function(table) {
			table.increments('id').primary();
			table.string('game_name');
			table.string('game_system');
			table.boolean('finished');
			table.timestamps();
		})
	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('games')
  ])
};

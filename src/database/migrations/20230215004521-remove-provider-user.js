'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		return queryInterface.removeColumn('users', 'provider');
	},

	async down (queryInterface, Sequelize) {
		return queryInterface.createTable('users', 'provider',
			{
				provider: {
					type: Sequelize.BOOLEAN,
					default: false,
					allowNull:false
				},
			});
	}
};

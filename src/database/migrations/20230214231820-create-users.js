'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.createTable('users',{
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull:false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			password_hash: {
				type: Sequelize.STRING,
				allowNull: false
			},
			provider: {
				type: Sequelize.BOOLEAN,
				default: false,
				allowNull:false
			},
			create_ate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			update_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	// eslint-disable-next-line no-unused-vars
	async down (queryInterface, Sequelize) {
		return await queryInterface.dropTable('users');
	}
};

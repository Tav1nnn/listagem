

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.createTable('contacts', {
			id:{
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			create_ate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			update_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			customer_id: {
				type: Sequelize.INTEGER,
				references: {model: 'customers', key: 'id'},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				allowNull: false,
			}
		});
	},

	// eslint-disable-next-line no-unused-vars
	async down (queryInterface, Sequelize) {
		return await queryInterface.dropTable('contact');
	}
};

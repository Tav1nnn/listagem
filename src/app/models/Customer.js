import  Sequelize, {Model}  from 'sequelize';

class Customer extends Model{
	static init (sequelize){
		super.init({//para chamar o init da class model 
			name: Sequelize.STRING,
			email: Sequelize.STRING,
			status: Sequelize.ENUM('ACTIVE', 'ARCHIVED')
		},
		{
			sequelize
		});
	}
	static associate (models){
		this.hasMany(models.Contact);
	}
}

export default Customer;
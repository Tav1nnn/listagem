import  Sequelize  from 'sequelize';
import config from '../config/database';
import Customer from '../app/models/Customer';
import Contact from '../app/models/Contact';
import User from '../app/models/User';



const connection = new Sequelize(config);

User.init(connection);

export default connection;
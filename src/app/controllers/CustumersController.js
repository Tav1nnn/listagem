import Customer from '../models/Customer';
import {Op} from 'sequelize';
import * as Yup from 'yup';

class CustumersController {
	//listagem de usuarios
	async index(req, res) {
	/*	const {
			name,
			email,
			status,
			createdBefore,
			createdAfter,
			updateBefore,
			updateAfter,
			sort,
		} = req.query;

		const page = req.query.page || 1;
		const limit = req.query.limit || 25;

		let where = {};

		if(name){
			where = {
				...where,
				name:{
					[Op.iLike]: name,
				}
			};
		}
		if(email){
			where = {
				...where,
				email:{
					[Op.iLike]: email,
				}
			};
		}
		if(status){
			where = {
				...where,
				status:{
					[Op.in]: status.split(',').map(item => item.toUpperCase()),
				}
			};
		}*/
	}
	//Recupera um usuario
	show(req, res) {
		
	}
	//Cria um usario
	async create(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			status: Yup.string().uppercase(),
		});
		if(!( await schema.isValid(req.body))){
			return res.status(400).json({error: 'Error on validate schema'});
		}

		const customer = await Customer.create(req.body);

		return res.status(201).json(customer);
	}
	//Atualiza um usuario
	update(req, res) {
		
	}
	//Exclui um usuario
	destroy(req, res) {
		
	}
}

module.exports = new CustumersController();
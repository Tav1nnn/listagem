let customers = [{
	id: 1,
	name: 'Otavio',
	site: 'http://google.com'
},
{
	id: 2,
	name: 'Pedro',
	site: 'http://google.com'
},
{
	id: 3,
	name: 'Malu',
	site: 'http://google.com'
}
];
class CustumersController {
	//listagem de usuarios
	index(req, res) {
		return res.json(customers);
	}
	//Recupera um usuario
	show(req, res) {
		const id = parseInt(req.params.id);
		const custumer = customers.find(item => item.id === id); //procura id igual
		const status = custumer ? 200 : 404;

		return res.status(status).json(custumer);
	}
	//Cria um usario
	create(req, res) {
		const {name, site} = req.body;
        
		if (!name || !site) {
			return res.status(400).json({
				error: 'name ou site nulos'
			});
		}

		const id = (customers.length) + 1;
		console.log(id);

		customers.push({
			id: id,
			name: name,
			site: site
		});

		return res.status(201).json(customers[id - 1]);
	}
	//Atualiza um usuario
	update(req, res) {
		const id = parseInt(req.params.id);
		const {
			name,
			site
		} = req.body;

		//findeIndex traz a posição do array que estiver esse id
		const index = customers.findIndex(item => item.id === id);
		const status = index >= 0 ? 200 : 404;

		if (index >= 0) {
			customers[index] = {
				id: parseInt(id),
				name,
				site
			};
			return res.status(status).json(customers[index]);
		}

		return res.status(status).json({
			error: 'este id não existe'
		});
	}
	//Exclui um usuario
	destroy(req, res) {
		const id = parseInt(req.params.id);
		const index = customers.findIndex(item => item.id === id);
		const status = index >= 0 ? 200 : 404;

		if (index >= 0) {
			customers.splice(index, 1);
		}

		return res.status(status).json();
	}
}

module.exports = new CustumersController();
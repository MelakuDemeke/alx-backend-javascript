
/**
 * Controller class for handling application routes.
 * @author Melaku Demeke <https://github.com/MelakuDemeke>
 */
class AppController {
	static getHomepage (request, response) {
		response.status(200).send('Hello Holberton School!');
	}
}

export default AppController;
module.exports = AppController;
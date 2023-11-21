import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Maps routes to the app.
 *
 * @param {Object} app - The Express app object.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;

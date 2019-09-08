import db from '../db/db';
/**
 * @swagger
 * /api/todos:
 *  get:
 *      description: get todos
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              todos: getAlltodos
 */
function getAllTodos(req, res) {
  return res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db,
  });
}
export default getAllTodos;

const todosRouter = require('express').Router();
const { todosController, todoItemsController } = require('../../controllers')

todosRouter.post('/', todosController.create);
todosRouter.get('/', todosController.list);
todosRouter.get('/:todoId', todosController.retrieve);
todosRouter.put('/:todoId', todosController.update);
todosRouter.delete('/:todoId', todosController.destroy);

todosRouter.post('/:todoId/items', todoItemsController.create);
todosRouter.put('/:todoId/items/:todoItemId', todoItemsController.update);
todosRouter.delete(
    '/:todoId/items/:todoItemId', todoItemsController.destroy
);
todosRouter.all('/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
}));

module.exports = { todosRouter };
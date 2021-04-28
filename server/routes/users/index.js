const usersRouter = require('express').Router();

const { userController } = require('../../controllers');

usersRouter.post('/', userController.create);
usersRouter.get('/', userController.list);
usersRouter.get('/:userId', userController.retrieve);
usersRouter.put('/:userId', userController.update);
usersRouter.delete('/:userId', userController.destroy);



module.exports = { usersRouter };
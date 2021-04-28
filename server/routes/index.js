const router = require('express').Router();

const { todosRouter } = require('./todos');


router.use('/todos', todosRouter);


module.exports = router;

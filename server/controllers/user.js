const User = require('../models').User;
const httpErrors = require('http-errors');
module.exports = {
    create(req, res) {
        const { firstName, lastName, email } = req.body;
        if (!email) {
            return next(httpErrors(404, 'Email not found'));
        }
        return User
            .create({
                firstName, lastName, email
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => res.status(400).send(error));
    },

    list(req, res) {
        return User
            .findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            })
            .then((users) => res.status(200).send(users))
            .catch((error) => res.status(400).send(error));
    },
    retrieve(req, res) {
        return User
            .findByPk(req.params.userId)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return User
            .findOne({
                where: {
                    id: req.params.userId,
                },
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                const { firstName, lastName } = req.body;
                return user
                    .update({
                        firstName, lastName
                    })
                    .then(() => res.status(200).send(user))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return User
            .findOne({
                where: {
                    id: req.params.userId,
                },
            })
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};

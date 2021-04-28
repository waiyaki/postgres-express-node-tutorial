module.exports = {
    openapi: '3.0.1',
    info: {
        version: '1.3.0',
        title: 'TODO API',
        description: 'TODO Sample App API',
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
    },
    servers: [
        {
            url: 'http://localhost:8000/api',
            description: 'Local server',
        },
    ],
    security: [
        {
            ApiKeyAuth: [],
        },
    ],
    tags: [
        { name: 'User' },
        { name: 'Todo' },
    ],
    paths: {
        '/users': {
            get: {
                tags: ['User'],
                description: 'Get users',
                operationId: 'users',
                responses: {
                    '200': {
                        description: 'users were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/users',
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                                example: {
                                    internal_code: 'missing_parameters',
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ['User'],
                description: 'Create user',
                operationId: '/users',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/createuser',
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    '200': {
                        description: 'created user  was obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/user',
                                },
                            },
                        },
                    },
                    '404': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                                example: {
                                    message: 'email is missing',
                                    internal_code: 'missing_parameters',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/users/{userId}': {
            put: {
                tags: ['User'],
                description: 'Update the user info by userId',
                operationId: '/users/{userId}',
                parameters: [
                    {
                        name: 'userId',
                        in: 'path',
                        schema: {
                            $ref: '#/components/schemas/id',
                        },
                        required: true,
                        description: 'User Id',
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/updateuser',
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    '200': {
                        description: 'user was obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/user',
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                                example: {
                                    message: 'userId is missing',
                                    internal_code: 'missing_parameters',
                                },
                            },
                        },
                    },
                },

            },
            delete: {
                tags: ['User'],
                description: 'Delete an user',
                operationId: 'user/delete/{userId}',
                parameters: [
                    {
                        name: 'userId',
                        in: 'path',
                        schema: {
                            $ref: '#/components/schemas/id',
                        },
                        required: true,
                        description: 'User Id',
                    }
                ],
                responses: {
                    '204': {
                        description: 'user was deleted',
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                                example: {
                                    message: 'userId  is missing',
                                    internal_code: 'missing_parameters',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/todos': {
            get: {
                tags: ['Todo'],
                description: 'Get todos',
                operationId: 'todos',
                responses: {
                    '200': {
                        description: 'todos were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/todos',
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                                example: {
                                    internal_code: 'missing_parameters',
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ['Todo'],
                description: 'Create todo',
                operationId: '/todos',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/createtodo',
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    '200': {
                        description: 'created todo was obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/todo',
                                },
                            },
                        },
                    },
                    '404': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                                example: {
                                    message: 'title is missing',
                                    internal_code: 'missing_parameters',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/todos/{todoId}': {
            put: {
                tags: ['Todo'],
                description: 'Update the todo info by todoId',
                operationId: '/todos/{todoId}',
                parameters: [
                    {
                        name: 'todoId',
                        in: 'path',
                        schema: {
                            $ref: '#/components/schemas/id',
                        },
                        required: true,
                        description: 'Todo Id',
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/updatetodo',
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    '200': {
                        description: 'todo was obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/todo',
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                                example: {
                                    message: 'todoId is missing',
                                    internal_code: 'missing_parameters',
                                },
                            },
                        },
                    },
                },

            },
            delete: {
                tags: ['Todo'],
                description: 'Delete a todo',
                operationId: 'todo/delete/{todoId}',
                parameters: [
                    {
                        name: 'todoId',
                        in: 'path',
                        schema: {
                            $ref: '#/components/schemas/id',
                        },
                        required: true,
                        description: 'Todo Id',
                    }
                ],
                responses: {
                    '204': {
                        description: 'todo was deleted',
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                                example: {
                                    message: 'todoId  is missing',
                                    internal_code: 'missing_parameters',
                                },
                            },
                        },
                    },
                },
            },
        },

    },
    components: {
        schemas: {
            id: {
                type: 'string',
            },
            email: {
                type: 'string',
            },
            firstName: {
                type: 'string'
            },
            lastName: {
                type: 'string'
            },
            createdAt: {
                type: 'object',
            },
            updatedAt: {
                type: 'object',
            },
            user: {
                type: 'object',
                properties: {
                    id: { $ref: '#/components/schemas/id' },
                    email: {
                        $ref: '#/components/schemas/email',
                    },
                    firstName: {
                        $ref: '#/components/schemas/firstName',
                    },
                    lastName: { $ref: '#/components/schemas/lastName' },
                    createdAt: { $ref: '#/components/schemas/createdAt' },
                    updatedAt: { $ref: '#/components/schemas/updatedAt' }
                },
            },
            users: {
                type: 'object',
                properties: {
                    users: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/user',
                        },
                    },
                },
            },
            title: {
                type: 'string'
            },
            content: {
                type: 'string'
            },
            complete: {
                type: 'boolean'
            },
            todoId: {
                $ref: '#/components/schemas/id'
            },
            createuser: {
                type: 'object',
                properties: {
                    email: {
                        $ref: '#/components/schemas/email',
                    },
                    firstName: {
                        $ref: '#/components/schemas/firstName',
                    },
                    lastName: { $ref: '#/components/schemas/lastName' },
                },
            },
            updateuser: {
                type: 'object',
                properties: {
                    firstName: {
                        $ref: '#/components/schemas/firstName',
                    },
                    lastName: { $ref: '#/components/schemas/lastName' },
                },
            },
            todoitem: {
                type: 'object',
                properties: {
                    content: {
                        $ref: '#/components/schemas/content',
                    },
                    complete: {
                        $ref: '#/components/schemas/complete',
                    }
                }
            },
            updatetodo: {
                type: 'object',
                properties: {
                    title: {
                        $ref: '#/components/schemas/title',
                    },
                },
            },
            todoitems: {
                type: 'object',
                properties: {
                    users: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/todoitem',
                        },
                    },
                },
            },
            todo: {
                type: 'object',
                properties: {
                    title: {
                        $ref: '#/components/schemas/title',
                    },
                    todoItems: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/todoitems',
                        },
                    }
                },
            },
            todos: {
                type: 'object',
                properties: {
                    users: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/todo',
                        },
                    },
                },
            },
            createtodo: {
                type: 'object',
                properties: {
                    title: {
                        $ref: '#/components/schemas/title',
                    }
                },
            },
            createtodoitem: {
                type: 'object',
                properties: {
                    content: {
                        $ref: '#/components/schemas/content',
                    },
                    todoId: {
                        $ref: '#/components/schemas/todoId',
                    }
                },
            },
            Error: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                    },
                    internal_code: {
                        type: 'string',
                    },
                },
            },
        },
        // securitySchemes: {
        //     ApiKeyAuth: {
        //         type: 'apiKey',
        //         in: 'header',
        //         name: 'Authorization',
        //     },
        // },
    }
}
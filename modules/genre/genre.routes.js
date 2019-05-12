const GenreController = require('./genre.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/genres/',
        method: 'POST',
        config: {
            handler: GenreController.create,
            validate: {
                payload: Joi.object().keys({
                    genreType:Joi.string().required()
                }),
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
                },
            },
            description: 'genre can create new Account(not used)',
            tags: ['api','genre'],
            notes: 'Returns a signup response',
            auth: false
        }
    },
    {
        path: '/genres/',
        method: 'GET',
        config: {
            handler: GenreController.list,
            description: 'genre get list',
            tags: ['api','genre'],
            notes: 'Returns a genre list',
            auth: false
        }
    },
    {
        path: '/genres/{id}',
        method: 'GET',
        config: {
            validate:{
                params: Joi.object().keys({
                    id:Joi.string().required()
                }),
            },
            handler: GenreController.getOne,
            description: 'genre get one',
            tags: ['api','genre'],
            notes: 'Returns a [particulat genre]',
            auth: false
        }
    },
    {
        path: '/genres/{id}',
        method: 'PUT',
        config: {
            validate:{
                params: Joi.object().keys({
                    id:Joi.string().required()
                }),
                payload:Joi.object().keys({
                    genreType:Joi.string().required()
                })
            },
            handler: GenreController.update,
            description: 'genre get one',
            tags: ['api','genre'],
            notes: 'Returns a [particulat genre]',
            auth: false
        }
    },
    {
        path: '/genres/{id}',
        method: 'DELETE',
        config: {
            validate:{
                params: Joi.object().keys({
                    id:Joi.string().required()
                }),
            },
            handler: GenreController.delete,
            description: 'genre deleted',
            tags: ['api','genre'],
            notes: 'Returns a [particulat deleted]',
            auth: false
        }
    },
];

const MovieController = require('./movie.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/movies/',
        method: 'POST',
        config: {
            handler: MovieController.create,
            validate: {
                payload: Joi.object().keys({
                    genreId:Joi.string().required(),
                    title:Joi.string().required(),
                    director:Joi.string().required(),
                    year:Joi.number().required(),
                }),
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
                },
            },
            description: 'movie can create new Account(not used)',
            tags: ['api','movie'],
            notes: 'Returns a signup response',
            auth: false
        }
    },
    {
        path: '/movies/',
        method: 'GET',
        config: {
            handler: MovieController.list,
            description: 'movie get list',
            tags: ['api','movie'],
            notes: 'Returns a signup response',
            auth: false
        }
    },
    {
        path: '/movies/{id}',
        method: 'GET',
        config: {
            handler: MovieController.getOne,
            validate: {
                params: Joi.object().keys({
                    id:Joi.string().required()
                }),
            },
            description: 'movie get one movie',
            tags: ['api','movie'],
            notes: 'Returns a signup response',
            auth: false
        }
    },
    {
        path: '/movies/by/{genreId}',
        method: 'GET',
        config: {
            handler: MovieController.getListBygenre,
            validate: {
                params: Joi.object().keys({
                    genreId:Joi.string().required()
                }),
            },
            description: 'movie get one movie',
            tags: ['api','movie'],
            notes: 'Returns a signup response',
            auth: false
        }
    },
    {
        path: '/movies/{id}',
        method: 'PUT',
        config: {
            validate:{
                params: Joi.object().keys({
                    id:Joi.string().required()
                }),
                payload:Joi.object().keys({
                    genreId:Joi.string().allow('').allow(null).optional(),
                    title:Joi.string().optional(),
                    director:Joi.string().optional(),
                    year:Joi.number().optional(),
                }),
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
                },
            },
            handler: MovieController.update,
            description: 'movie get one',
            tags: ['api','movie'],
            notes: 'Returns a [particulat movie]',
            auth: false
        }
    },
    {
        path: '/movies/{id}',
        method: 'DELETE',
        config: {
            validate:{
                params: Joi.object().keys({
                    id:Joi.string().required()
                }),
            },
            handler: MovieController.delete,
            description: 'movie deleted',
            tags: ['api','movie'],
            notes: 'Returns a [particulat deleted]',
            auth: false
        }
    },
]

import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import ejs from 'ejs';
import Fastify from 'fastify';
import FastifyView from '@fastify/view';
import FastifyStatic from '@fastify/static';
import renderIntoString from './app.js';

const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
    logger: true
});

fastify.register(FastifyView, {
    engine: {
        ejs,
    },
    root: join(__dirname, 'templates'),
});


fastify.register(FastifyStatic, {
    root: join(__dirname, '..', 'client'),
    prefix: '/client'
});

fastify.get('*', function (request, reply) {
    const pathname = request.url;

    return reply.view("layout.ejs", {
        pathname,
        content: renderIntoString(pathname),
    })
});

try {
    await fastify.listen({ port });
} catch (err) {
    fastify.log.error(err);
}
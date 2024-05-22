import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((_context, next) => {
    console.log('hello from an Astro middleware');
    return next();
});

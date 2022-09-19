import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = (app:any): void => {
    app.use(
        '/v1/',
        createProxyMiddleware({
            target: 'https://hsureadme.herokuapp.com/api',
            changeOrigin: true,
        })
    );
};
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = (app:any): void => {
    app.use(
        createProxyMiddleware({
            target: 'https://hsureadme.herokuapp.com/',
            changeOrigin: true,
        })
    );
};
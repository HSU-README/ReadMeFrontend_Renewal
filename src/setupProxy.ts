// eslint-disable-next-line import/no-import-module-exports
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = (app: any): void => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://hsureadme.herokuapp.com/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    }),
  );
};

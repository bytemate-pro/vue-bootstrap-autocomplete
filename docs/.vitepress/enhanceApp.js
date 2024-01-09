import { ToastPlugin } from 'bootstrap-vue';

export default ({ app, options, router, siteData, isServer }) => {
  app.use(ToastPlugin);
};

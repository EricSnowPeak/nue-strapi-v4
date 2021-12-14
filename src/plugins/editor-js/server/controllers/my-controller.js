'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('editor-js')
      .service('myService')
      .getWelcomeMessage();
  },
};

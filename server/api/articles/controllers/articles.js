'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.articles.search(ctx.query);
    } else {
      entities = await strapi.services.articles.find(ctx.query);
    }

    return entities.map(entity => {
      const articles = sanitizeEntity(entity, {
        model: strapi.models.articles,
      });
      if (articles.content) {
        delete articles.content;
      }
      return articles;
    });
  },
};

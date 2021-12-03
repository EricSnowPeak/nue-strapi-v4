'use strict';

/**
 * msa service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::msa.msa');

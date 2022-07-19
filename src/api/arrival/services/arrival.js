'use strict';

/**
 * arrival service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::arrival.arrival');

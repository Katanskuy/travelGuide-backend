'use strict';

/**
 * map-marker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::map-marker.map-marker');

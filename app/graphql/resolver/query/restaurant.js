'use strict';

var Event = require('../../../models/models').Event;
var User = require('../../../models/models').User;
var RestaurantType = require('../../../models/models').RestaurantType;

export const Restaurant = {
    event_id: async (a, b, context, info) => {
        return Event.findById(a.event_id);
    },
    worker:async (a, b, context, info) => {
        return User.findById(a.event_id);
    },
    type:async (a, b, context, info) => {
        return RestaurantType.findById(a.type);
    },
}
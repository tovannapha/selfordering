'use strict';

var User = require('../../../models/models').User;
var Restaurant = require('../../../models/models').Restaurant;


export const Review = {
    user_id: async (a, b, context, info) => {
        return Event.User(a.user_id);
    },
    restaurant_id: async (a, b, context, info) => {
        return Restaurant.User(a.restaurant_id);
    },
}
'use strict';

var Menu = require('../../../models/models').Menu;
var OrderMenu = require('../../../models/models').OrderMenu

export const Order = {
    order_menu_id: async (a, b, context, info) => {
        var result = [];

        for (var ii = 0; ii < a.order_menu_id.length; ii++) {
            result.push(await OrderMenu.findById(a.order_menu_id[ii]));
        }
        return result;
    }
}
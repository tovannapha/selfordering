'use strict';

var Menu = require('../../../models/models').Menu;

export const OrderMenu = {
    menu_id: async (a, b, context, info) => {
        return Menu.findById(a.menu_id);
    }
}
'use strict'
var AccessControl = require('accesscontrol');


var grantList = [
    { role: 'admin', resource: 'video', action: 'create:any', attributes: ['*'] },
    { role: 'admin', resource: 'video', action: 'read:any', attributes: ['*'] },
    { role: 'admin', resource: 'video', action: 'update:any', attributes: ['*'] },
    { role: 'admin', resource: 'video', action: 'delete:any', attributes: ['*'] },

    { role: 'user', resource: 'video', action: 'create:own', attributes: ['*'] },
    { role: 'user', resource: 'video', action: 'read:any', attributes: ['*'] },
    { role: 'user', resource: 'video', action: 'update:own', attributes: ['*'] },
    { role: 'user', resource: 'video', action: 'delete:own', attributes: ['*'] }
];
var ac = new AccessControl(grantList);

export default ac;
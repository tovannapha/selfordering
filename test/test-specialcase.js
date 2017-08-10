 var chai = require('chai')
    , should = chai.should();


var spc = require('../app/graphql/resolver/specialcase');

var AdminUser = {
    "level": "ADMIN",
 }

var DevUser = {
    "level": "DEVELOPER",
}


var ResOwnerUser = {
    "level": "RESTAURANT",
    "working_restaurant": [
        {
            "position": "RES_OWNER",
            "restaurant_id": "12345"
        }
    ]
}

var ResManagerUser = {
    "level": "RESTAURANT",
    "working_restaurant": [
        {
            "position": "RES_MANAGER",
            "restaurant_id": "12345"
        }
    ]
}

var ResWorkerUser = {
    "level": "RESTAURANT",
    "working_restaurant": [
        {
            "position": "RES_WORKER",
            "restaurant_id": "12345"
        }
    ]
}

describe('specialcase', function () {
    describe('checkLevel', function () {
        it('test case user is ADMIN', function () {
            spc.checkLevel(AdminUser, "12345").should.include({ position: 'ADMIN' });
        });
        it('test case user is DEVELOPER', function () {
            spc.checkLevel(DevUser, "12345").should.include({ position: 'DEVELOPER'});
        });
        it('test case user is RES_OWNER', function () {
            spc.checkLevel(ResOwnerUser, "12345").should.include({ position: 'RES_OWNER', restaurant_id:"12345" });
        });
        it('test case user is RES_MANAGER', function () {
            spc.checkLevel(ResManagerUser, "12345").should.include({ position: 'RES_MANAGER', restaurant_id:"12345" });
        });
        it('test case user is RES_WORKER', function () {
            spc.checkLevel(ResWorkerUser, "12345").should.include({ position: 'RES_WORKER', restaurant_id:"12345" });
        });
    });
}); 
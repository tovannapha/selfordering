var chai = require('chai');
var chaiHttp = require('chai-http');
//var server = require('../server');

var expect = chai.expect;
var should = chai.should;

var Restaurant = require('../app/models/models').Restaurant

chai.use(chaiHttp);

describe('GraphQL', function () {
    describe('Query', function () {
        it('restaurants', function (done) {
            chai.request('http://localhost:3000')
                .get('/graphql?query={restaurants{name}}')
                .end(function (err, res) {
                    //ສົ່ງສະຖານະເປັນ 200
                    expect(res).to.have.status(200);
                    //ຄວນເປັນ arrays
                    res.body.data.restaurants.should.be.an('array');
                    //ຕ້ອງມີ field : ID
                    //expect(res.body.data.restaurants).to.deep.include.keys('0');
                    console.log(Restaurant.getFields())
                    done();
                });
        });
        it('restaurant', function (done) {
            chai.request('http://localhost:3000')
                .get('/graphql?query={restaurant(id="XXXXXXXX"){name}}')
                .end(function (err, res) {
                    

                    done();
                });
        });
        it('restaurant_types', function (done) {
            chai.request('http://localhost:3000')
                .get('/graphql?query={restaurant(id="XXXXXXXX"){name}}')
                .end(function (err, res) {

                    done();
                });
        });
        it('restaurant_type', function (done) {
            chai.request('http://localhost:3000')
                .get('/graphql?query={restaurant(id="XXXXXXXX"){name}}')
                .end(function (err, res) {

                    done();
                });
        });

    });
});

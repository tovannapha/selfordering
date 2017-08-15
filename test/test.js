var chai = require('chai');
var chaiHttp = require('chai-http');
//var server = require('../server');

var expect = chai.expect;
var should = chai.should;

chai.use(chaiHttp);

describe('GraphQL', function () {
    describe('Query', function () {
        it('restaurants', function (done) {
            chai.request('http://localhost:3000')
                .get('/graphql?query={restaurants{name}}')
                .end(function (err, res) {
                    //console.log(err)
                    //console.log(res.body.data.restaurants)
                    expect(res).to.have.status(200);
                    res.body.data.restaurants.should.be.an('array');
                    expect(res.body.data.restaurants).to.deep.include.keys('0');
                    done();
                });
        });
        it('test', function () {
            expect({a: 1}).to.not.have.property('b');
        });
    });
});

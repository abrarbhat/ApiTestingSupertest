const request = require('supertest');
const expect = require('chai').expect;

const app = require('../src/app');

describe('route test', () => {
    it('check ok response', () => {
        request(app).get('/courses').end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
        })
    });
    it('check ok response in query parameter', () => {
        request(app).get('/course/1').end((err, res) => {
        expect(res.body.id).to.be.equal('1');
        })
    });
    it.only('checkquery parameter test', () => {
        request(app)
        .get('/courset')
        .query({'name':'mocha2s','id':'23'})
        .end((err, res) => {
            console.log(res.body.id);
            console.log(res.body.name);
            expect(res.body.id).to.be.equal('23');
            expect(res.body.name).to.be.equal('mocha2s');
        
        })
    });

});

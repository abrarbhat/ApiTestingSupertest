const express = require('express');
const request= require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first',(err,res)=>{
    
    res.status(200).json({"ok":"response"});
});

describe('first test',()=>{
    it.skip('check ok response',()=>{
        request(app).get('/first').end((err,res)=>{
            expect(res.statusCode).to.be.equal(200);
        })
    });
    it('check mocky response',()=>{
        request("https://run.mocky.io").get('/v3/dd7d1935-e50e-445a-8bc0-b4b3c19202fa').end((err,res)=>{
            console.log(res.body.test);
            expect(res.statusCode).to.be.equal(200);
        })
    });

    it.only('test local host',()=>{
        request("http://localhost:3000").get('/courses').end((err,res)=>{
            console.log(res.statusCode);
            expect(res.statusCode).to.be.equal(200);
        })
    });

});

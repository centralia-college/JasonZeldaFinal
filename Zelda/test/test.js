var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){

    // calling timeline page 
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.error.should.equal(false);
      done();
    });
  });
  
  it("should be able to go the botwmap page",function(done){

    //calling map page
    server
    .get('/botwmap')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to got the kakariko village page",function(done){

    //calling a village
    server
    .get('/kakariko')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to got the goron city page",function(done){

    //calling goron
    server
    .get('/goron')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to got the zoras domain page",function(done){

    //calling zora
    server
    .get('/zora')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to got the gerudo town page",function(done){

    //calling gerudo
    server
    .get('/gerudo')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to got the rito village page",function(done){

    //calling rito
    server
    .get('/rito')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to get api call for all locations",function(done){

    //calling api locations
    server
    .get('/api/locations')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to get api call for one location",function(done){

    //calling api locations
    server
    .get('/api/locations/59404afa067daf9324aef75e')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to get api call for all items",function(done){

    //calling api item
    server
    .get('/api/items')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to get api call for one item",function(done){

    //calling api items
    server
    .get('/api/items/5940a0a5fa77432640018ad5')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to get api call for all enemies",function(done){

    //calling api enemies
    server
    .get('/api/enemies')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it("should be able to get api call for one enemy",function(done){

    //calling api enemies
    server
    .get('/api/enemies/594228c621e1c15600170d80')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
  it('404 everything else', function(done){
    server
      .get('/foo/bar')
      .expect('Content-type', /json/)
      .expect(404)
      .end(function(err,res) {
        res.status.should.equal(404);
        done();
      });
  });
  
});
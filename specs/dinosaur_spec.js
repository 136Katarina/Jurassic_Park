const assert = require('assert');
const Dinosaur = require('../dinosaur.js');


describe('dinosaur', function(){
  var dinosaur1;
  var dinosaur2;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 5);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
  });


  it('should have a type', function(){
    assert.strictEqual(dinosaur1.type,"Tyrannosaurus");
  })

  it('should have a number of Offsprings', function(){
    assert.strictEqual(dinosaur2.number, 4);
  })



})
